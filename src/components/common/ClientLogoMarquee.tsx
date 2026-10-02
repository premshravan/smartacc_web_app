import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Building2, MoveHorizontal } from 'lucide-react';
import { clientsData } from '../../content/clients';

export const ClientLogoMarquee: React.FC = () => {
  const trackWrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const group1Ref = useRef<HTMLDivElement>(null);
  const group2Ref = useRef<HTMLDivElement>(null);

  const offsetRef = useRef<number>(0);
  const singleWidthRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const lastXRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const velocityRef = useRef<number>(0);
  const animIdRef = useRef<number>(0);
  const baseSpeedRef = useRef<number>(0.85); // Constant smooth auto motion

  const [isDraggingState, setIsDraggingState] = useState(false);

  // Accurately measure the distance between groups (including gap)
  const measure = useCallback(() => {
    if (group1Ref.current && group2Ref.current) {
      const rect1 = group1Ref.current.getBoundingClientRect();
      const rect2 = group2Ref.current.getBoundingClientRect();
      const width = rect2.left - rect1.left;
      if (width > 0) {
        singleWidthRef.current = width;
      }
    }
  }, []);

  useEffect(() => {
    measure();

    const resizeObserver = new ResizeObserver(() => {
      measure();
    });

    if (trackWrapRef.current) {
      resizeObserver.observe(trackWrapRef.current);
    }
    if (group1Ref.current) {
      resizeObserver.observe(group1Ref.current);
    }

    window.addEventListener('resize', measure);

    // Continuous smooth animation loop
    const animate = () => {
      const singleW = singleWidthRef.current;

      if (!isDraggingRef.current) {
        // If there is residual flick velocity, decay smoothly with inertia
        if (Math.abs(velocityRef.current) > 0.05) {
          offsetRef.current += velocityRef.current;
          velocityRef.current *= 0.94; // momentum friction
        } else {
          // Standard auto motion
          offsetRef.current += baseSpeedRef.current;
        }

        // Seamless wrap in both directions
        if (singleW > 0) {
          while (offsetRef.current >= singleW) {
            offsetRef.current -= singleW;
          }
          while (offsetRef.current < 0) {
            offsetRef.current += singleW;
          }
        }

        if (innerRef.current) {
          innerRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
        }
      }

      animIdRef.current = requestAnimationFrame(animate);
    };

    animIdRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animIdRef.current);
      resizeObserver.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  // Pointer event handlers (works seamlessly for touch, mouse, pen)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;

    isDraggingRef.current = true;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
    setIsDraggingState(true);

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ignore if pointer capture is not supported
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const now = performance.now();
    const dt = Math.max(1, now - lastTimeRef.current);
    const dx = e.clientX - lastXRef.current;

    lastXRef.current = e.clientX;
    lastTimeRef.current = now;

    // Moving finger left (dx < 0) pushes items forward (increases offset)
    // Moving finger right (dx > 0) pushes items backward (decreases offset)
    offsetRef.current -= dx;

    // Capture flick velocity for natural release momentum
    velocityRef.current = (-dx / dt) * 16.67;
    velocityRef.current = Math.max(-25, Math.min(25, velocityRef.current));

    const singleW = singleWidthRef.current;
    if (singleW > 0) {
      while (offsetRef.current >= singleW) {
        offsetRef.current -= singleW;
      }
      while (offsetRef.current < 0) {
        offsetRef.current += singleW;
      }
    }

    if (innerRef.current) {
      innerRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setIsDraggingState(false);
      try {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
      } catch {
        // ignore
      }
    }
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    handlePointerUp(e);
  };

  const handleMouseEnter = () => {
    baseSpeedRef.current = 0.25; // Gentle slow down on desktop hover
  };

  const handleMouseLeave = () => {
    baseSpeedRef.current = 0.85; // Resume standard speed
  };

  return (
    <section className="client-marquee-section" aria-label="Businesses that trust SmartAcc">
      <div className="container text-center">
        <div className="client-marquee-header-wrap">
          <div className="client-marquee-heading-pill">
            <Building2 size={14} className="text-blue-600" />
            <span>Businesses that trust SmartAcc</span>
          </div>
          <span className="client-marquee-interaction-hint">
            <MoveHorizontal size={13} />
            <span>Drag or swipe with finger to browse</span>
          </span>
        </div>
      </div>

      <div 
        ref={trackWrapRef}
        className={`client-marquee-track-wrap ${isDraggingState ? 'is-dragging' : ''}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        title="Swipe with finger or drag to move logos"
      >
        <div className="client-marquee-track">
          {/* 4 sets of clients to ensure seamless infinite looping on any display size and drag distance */}
          <div ref={innerRef} className="client-marquee-inner">
            <div ref={group1Ref} className="client-marquee-group">
              {clientsData.map((client) => (
                <div 
                  key={`g1-${client.id}`} 
                  className="client-marquee-card" 
                  title={`${client.name} — ${client.category}`}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/clients/${client.filename}`}
                    alt={client.alt}
                    className="client-marquee-img"
                    loading="lazy"
                    draggable={false}
                    width={140}
                    height={52}
                  />
                </div>
              ))}
            </div>

            <div ref={group2Ref} className="client-marquee-group" aria-hidden="true">
              {clientsData.map((client) => (
                <div 
                  key={`g2-${client.id}`} 
                  className="client-marquee-card" 
                  title={`${client.name} — ${client.category}`}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/clients/${client.filename}`}
                    alt={client.alt}
                    className="client-marquee-img"
                    loading="lazy"
                    draggable={false}
                    width={140}
                    height={52}
                  />
                </div>
              ))}
            </div>

            <div className="client-marquee-group" aria-hidden="true">
              {clientsData.map((client) => (
                <div 
                  key={`g3-${client.id}`} 
                  className="client-marquee-card" 
                  title={`${client.name} — ${client.category}`}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/clients/${client.filename}`}
                    alt={client.alt}
                    className="client-marquee-img"
                    loading="lazy"
                    draggable={false}
                    width={140}
                    height={52}
                  />
                </div>
              ))}
            </div>

            <div className="client-marquee-group" aria-hidden="true">
              {clientsData.map((client) => (
                <div 
                  key={`g4-${client.id}`} 
                  className="client-marquee-card" 
                  title={`${client.name} — ${client.category}`}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/clients/${client.filename}`}
                    alt={client.alt}
                    className="client-marquee-img"
                    loading="lazy"
                    draggable={false}
                    width={140}
                    height={52}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
