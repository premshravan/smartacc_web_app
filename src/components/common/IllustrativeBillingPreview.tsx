import React, { useState } from 'react';
import { 
  Barcode, 
  Plus, 
  Minus, 
  Trash2, 
  Printer, 
  RefreshCw,
  Search
} from 'lucide-react';

interface BillItem {
  id: string;
  name: string;
  code: string;
  qty: number;
  rate: number;
  taxPercent: number;
}

const sampleCatalog: BillItem[] = [
  { id: '1', name: 'Demo Product A (Standard Pack)', code: 'SKU-89012', qty: 2, rate: 250, taxPercent: 18 },
  { id: '2', name: 'Demo Product B (Cotton Wear - M)', code: 'SKU-54219', qty: 1, rate: 850, taxPercent: 12 },
  { id: '3', name: 'Demo Product C (Fast Charger Cable)', code: 'SKU-10943', qty: 1, rate: 199, taxPercent: 18 },
];

export const IllustrativeBillingPreview: React.FC = () => {
  const [items, setItems] = useState<BillItem[]>(sampleCatalog);
  const [paymentMode, setPaymentMode] = useState<'cash' | 'upi' | 'card'>('upi');
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const updateQty = (id: string, delta: number) => {
    setItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + delta);
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const resetItems = () => {
    setItems(sampleCatalog);
  };

  // Calculations
  const subtotal = items.reduce((acc, item) => acc + (item.rate * item.qty), 0);
  const taxTotal = items.reduce((acc, item) => acc + ((item.rate * item.qty * item.taxPercent) / 100), 0);
  const grandTotal = Math.round(subtotal + taxTotal);

  return (
    <div className="preview-container">
      {/* Top Banner Notice */}
      <div className="preview-notice-bar">
        <span className="preview-badge">Illustrative preview — Demo data only</span>
        <span className="preview-location-tag">SmartAcc Demo Terminal • Thalassery</span>
      </div>

      {/* Main Terminal Window */}
      <div className="terminal-window">
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-info">
            <div className="terminal-dot green live-pulse"></div>
            <span className="terminal-title">POS Billing Counter 01</span>
            <span className="terminal-bill-no">Bill #SA-1042</span>
            <span className="live-status-pill">LIVE POS</span>
          </div>
          <div className="terminal-actions">
            <button 
              type="button" 
              onClick={resetItems} 
              className="terminal-btn-icon" 
              title="Reset Demo Items"
            >
              <RefreshCw size={14} className="reset-spin-icon" />
              <span className="btn-text-sm">Reset</span>
            </button>
          </div>
        </div>

        {/* Search & Quick Barcode Line */}
        <div className="terminal-search-row">
          <div className="search-input-box">
            <Search size={16} className="search-icon" />
            <input 
              type="text" 
              placeholder="Scan barcode or type product name/code..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="scanner-status">
            <span className="scanner-pulse-dot" />
            <Barcode size={18} className="scanner-icon" />
            <span>Ready for Scanner</span>
          </div>
        </div>

        {/* Bill Items Table */}
        <div className="terminal-table-wrap">
          {/* Animated laser scan line */}
          <div className="terminal-scan-laser" aria-hidden="true" />
          <table className="terminal-table">
            <thead>
              <tr>
                <th className="th-item">Item & Code</th>
                <th className="th-rate text-right">Rate</th>
                <th className="th-qty text-center">Qty</th>
                <th className="th-tax text-right">Tax</th>
                <th className="th-total text-right">Total</th>
                <th className="th-del"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                const lineSubtotal = item.rate * item.qty;
                const lineTax = (lineSubtotal * item.taxPercent) / 100;
                const lineTotal = lineSubtotal + lineTax;

                return (
                  <tr key={item.id} className="table-row">
                    <td className="td-item">
                      <div className="item-name">{item.name}</div>
                      <div className="item-code">{item.code}</div>
                    </td>
                    <td className="td-rate text-right font-semibold">₹{item.rate.toFixed(2)}</td>
                    <td className="td-qty text-center">
                      <div className="qty-control">
                        <button 
                          type="button"
                          onClick={() => updateQty(item.id, -1)}
                          className="qty-btn"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="qty-val">{item.qty}</span>
                        <button 
                          type="button"
                          onClick={() => updateQty(item.id, 1)}
                          className="qty-btn"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </td>
                    <td className="td-tax text-right">{item.taxPercent}%</td>
                    <td className="td-total text-right font-bold">₹{lineTotal.toFixed(2)}</td>
                    <td className="td-del text-right">
                      <button 
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="del-btn"
                        aria-label="Remove item"
                      >
                        <Trash2 size={13} />
                      </button>
                    </td>
                  </tr>
                );
              })}
              {items.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-slate-500 font-medium">
                    No items on the bill. Click "Reset" to reload sample products.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Terminal Footer with Totals & Tender */}
        <div className="terminal-footer">
          <div className="payment-options">
            <span className="payment-label">Payment Mode:</span>
            <div className="payment-chips">
              <button 
                type="button"
                className={`payment-chip ${paymentMode === 'upi' ? 'active' : ''}`}
                onClick={() => setPaymentMode('upi')}
              >
                UPI / QR
              </button>
              <button 
                type="button"
                className={`payment-chip ${paymentMode === 'cash' ? 'active' : ''}`}
                onClick={() => setPaymentMode('cash')}
              >
                Cash
              </button>
              <button 
                type="button"
                className={`payment-chip ${paymentMode === 'card' ? 'active' : ''}`}
                onClick={() => setPaymentMode('card')}
              >
                Card
              </button>
            </div>
          </div>

          <div className="totals-block">
            <div className="total-row">
              <span className="total-row-label">Subtotal:</span>
              <span className="total-row-val">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span className="total-row-label">Taxes (Estimated):</span>
              <span className="total-row-val">₹{taxTotal.toFixed(2)}</span>
            </div>
            <div className="total-row grand-total-row">
              <span className="total-label">Grand Total:</span>
              <span className="total-val">₹{grandTotal.toFixed(2)}</span>
            </div>

            <button 
              type="button"
              className="btn-print-bill"
              onClick={() => setShowReceiptModal(true)}
            >
              <Printer size={16} />
              <span>Simulate Receipt Print</span>
            </button>
          </div>
        </div>
      </div>

      {/* Simulated Receipt Preview Modal */}
      {showReceiptModal && (
        <div className="modal-backdrop" onClick={() => setShowReceiptModal(false)}>
          <div className="receipt-paper" onClick={(e) => e.stopPropagation()}>
            <div className="receipt-header">
              <div className="receipt-brand">SmartAcc Demo Store</div>
              <div className="receipt-sub">Thalassery, Kerala</div>
              <div className="receipt-divider">================================</div>
              <div className="receipt-meta">
                <span>Date: {new Date().toLocaleDateString('en-IN')}</span>
                <span>Bill #SA-1042</span>
              </div>
              <div className="receipt-divider">--------------------------------</div>
            </div>

            <div className="receipt-items">
              {items.map(item => (
                <div key={item.id} className="receipt-line">
                  <div className="receipt-name">{item.name}</div>
                  <div className="receipt-calc">
                    <span>{item.qty} x ₹{item.rate.toFixed(2)}</span>
                    <span>₹{(item.qty * item.rate).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="receipt-divider">--------------------------------</div>
            <div className="receipt-summary">
              <div className="receipt-summary-line">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="receipt-summary-line">
                <span>Tax Breakdown</span>
                <span>₹{taxTotal.toFixed(2)}</span>
              </div>
              <div className="receipt-summary-line receipt-net">
                <strong>NET PAYABLE</strong>
                <strong>₹{grandTotal.toFixed(2)}</strong>
              </div>
              <div className="receipt-summary-line text-muted">
                <span>Mode: {paymentMode.toUpperCase()}</span>
                <span>PAID</span>
              </div>
            </div>
            <div className="receipt-divider">================================</div>
            <div className="receipt-footer">
              <p>Thank you for visiting!</p>
              <p className="receipt-caption">Illustrative demo receipt generated by SmartAcc preview.</p>
              <button 
                type="button" 
                className="btn-close-receipt" 
                onClick={() => setShowReceiptModal(false)}
              >
                Close Receipt Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
