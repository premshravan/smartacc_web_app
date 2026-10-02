import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Home, ShoppingBag, Receipt } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <div className="container text-center max-w-2xl py-20">
        <div className="not-found-icon-box mx-auto">
          <HelpCircle size={48} className="text-blue-600" />
        </div>
        <span className="not-found-code">404 Error</span>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-desc">
          The page you are looking for doesn't exist or may have been moved. Explore our main sections or request a billing software walkthrough.
        </p>

        <div className="not-found-actions flex flex-wrap justify-center gap-3 mt-6">
          <Link to="/" className="btn-primary">
            <Home size={16} />
            <span>Go to Home Page</span>
          </Link>
          <Link to="/solutions" className="btn-secondary">
            <ShoppingBag size={16} />
            <span>Explore Solutions</span>
          </Link>
          <Link to="/request-demo" className="btn-secondary">
            <Receipt size={16} />
            <span>Request a Demo</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
