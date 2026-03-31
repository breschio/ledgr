import React from "react";
import { fadeUp, fadeIn, fadeRight, scaleIn } from "../anim";

export interface ReceiptScreenProps {
  animFrame?: number;
  fps?: number;
}

export const ReceiptScreen: React.FC<ReceiptScreenProps> = ({
  animFrame = 999,
  fps = 30,
}) => {
  const f = animFrame;

  return (
    <div style={{ backgroundColor: '#FAF9F6', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', height: '880px', lineHeight: '16px', overflow: 'clip', WebkitFontSmoothing: 'antialiased', width: '390px' }}>
      {/* Status bar spacer — visual handled by fixed overlay in AppFlowVideo */}
      <div style={{ height: '50px' }} />
      <div style={{ ...fadeIn(f, 3, 6), alignItems: 'center', display: 'flex', justifyContent: 'space-between', padding: '24px 24px 16px' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#1A1916" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <div style={{ color: '#1A1916', fontFamily: '"DM Sans", sans-serif', fontSize: '17px', fontWeight: 600, letterSpacing: '-0.01em' }}>Review Receipt</div>
        <div style={{ color: '#D4502C', fontFamily: '"DM Sans", sans-serif', fontSize: '15px', fontWeight: 500 }}>Edit</div>
      </div>
      <div style={{ ...fadeUp(f, 8, fps), alignItems: 'center', backgroundColor: '#E8F5E9', borderRadius: '12px', display: 'flex', gap: '10px', margin: '0 24px', padding: '14px 16px' }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#2E7D32" strokeWidth="1.5"/><path d="M7 10L9 12L13 8" stroke="#2E7D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <div style={{ color: '#2E7D32', fontFamily: '"DM Sans", sans-serif', fontSize: '14px', fontWeight: 500 }}>Receipt scanned successfully</div>
      </div>
      <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '6px', padding: '28px 24px 20px' }}>
        <div style={{ ...fadeIn(f, 14, 8), color: '#9A9690', fontFamily: '"DM Sans", sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Detected Amount</div>
        <div style={{ ...scaleIn(f, 16, fps, 0.9), color: '#1A1916', fontFamily: '"Instrument Serif", serif', fontSize: '52px', letterSpacing: '-0.03em', lineHeight: '64px' }}>$46.28</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', padding: '0 24px' }}>
        {[
          { label: 'Merchant', value: 'Hilton Hotels', delay: 22 },
          { label: 'Date', value: 'Mar 28, 2026', delay: 26 },
          { label: 'Category', value: 'Travel', isBadge: true, delay: 30 },
          { label: 'Subtotal', value: '$42.50', delay: 34 },
          { label: 'Tax', value: '$3.78', delay: 38 },
          { label: 'Address', value: '123 Main St, New York', delay: 42 },
        ].map((row, i, arr) => (
          <div key={row.label} style={{ ...fadeRight(f, row.delay, fps), alignItems: 'center', borderBottom: i < arr.length - 1 ? '1px solid #E5E2DC' : 'none', display: 'flex', justifyContent: 'space-between', padding: '14px 0' }}>
            <div style={{ color: '#9A9690', fontFamily: '"DM Sans", sans-serif', fontSize: '14px' }}>{row.label}</div>
            {row.isBadge ? (
              <div style={{ alignItems: 'center', backgroundColor: '#D4502C', borderRadius: '100px', display: 'flex', gap: '6px', padding: '4px 12px' }}>
                <div style={{ color: '#FFF', fontFamily: '"DM Sans", sans-serif', fontSize: '12px', fontWeight: 600 }}>{row.value}</div>
              </div>
            ) : (
              <div style={{ color: '#1A1916', fontFamily: '"DM Sans", sans-serif', fontSize: '14px', fontWeight: 500 }}>{row.value}</div>
            )}
          </div>
        ))}
      </div>
      <div style={{ ...fadeUp(f, 46, fps, 16), display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'auto', padding: '24px 24px 40px' }}>
        <div style={{ alignItems: 'center', backgroundColor: '#D4502C', borderRadius: '12px', display: 'flex', justifyContent: 'center', padding: '16px' }}>
          <div style={{ color: '#FFF', fontFamily: '"DM Sans", sans-serif', fontSize: '16px', fontWeight: 600 }}>Confirm & Save</div>
        </div>
        <div style={{ alignItems: 'center', backgroundColor: '#EEEDE9', borderRadius: '12px', display: 'flex', justifyContent: 'center', padding: '16px' }}>
          <div style={{ color: '#1A1916', fontFamily: '"DM Sans", sans-serif', fontSize: '16px', fontWeight: 600 }}>Retake Photo</div>
        </div>
      </div>
    </div>
  );
};
