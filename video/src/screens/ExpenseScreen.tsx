import React from "react";
import { fadeUp, fadeIn, fadeRight, scaleIn } from "../anim";

export interface ExpenseScreenProps {
  animFrame?: number;
  fps?: number;
}

export const ExpenseScreen: React.FC<ExpenseScreenProps> = ({
  animFrame = 999,
  fps = 30,
}) => {
  const f = animFrame;

  return (
    <div style={{ backgroundColor: '#FAF9F6', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', height: '880px', lineHeight: '16px', overflow: 'clip', WebkitFontSmoothing: 'antialiased', width: '390px' }}>
      {/* Status bar spacer — visual handled by fixed overlay in AppFlowVideo */}
      <div style={{ height: '50px' }} />
      <div style={{ ...fadeIn(f, 3, 6), alignItems: 'center', display: 'flex', justifyContent: 'space-between', padding: '24px 24px 16px' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <div style={{ color: '#1A1916', fontFamily: '"DM Sans", sans-serif', fontSize: '17px', fontWeight: 600, letterSpacing: '-0.01em' }}>New Expense</div>
        <div style={{ color: '#8A8A86', fontFamily: '"DM Sans", sans-serif', fontSize: '15px', fontWeight: 500 }}>Cancel</div>
      </div>
      <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '8px', padding: '32px 24px 28px' }}>
        <div style={{ ...fadeIn(f, 8, 8), color: '#9A9690', fontFamily: '"DM Sans", sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Amount</div>
        <div style={{ ...scaleIn(f, 10, fps, 0.9), color: '#1A1A1A', fontFamily: '"Instrument Serif", serif', fontSize: '56px', letterSpacing: '-0.03em', lineHeight: '68px' }}>$42.50</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '0 24px 24px' }}>
        <div style={{ ...fadeIn(f, 18, 8), color: '#9A9690', fontFamily: '"DM Sans", sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Category</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {[
            { label: 'Travel', active: true, hasIcon: true, delay: 22 },
            { label: 'Food', active: false, delay: 25 },
            { label: 'Transport', active: false, delay: 28 },
            { label: 'Shopping', active: false, delay: 31 },
            { label: 'Office', active: false, delay: 34 },
          ].map(cat => (
            <div key={cat.label} style={{ ...scaleIn(f, cat.delay, fps, 0.85), alignItems: 'center', backgroundColor: cat.active ? '#D4502C' : '#EEEDE9', borderRadius: '100px', display: 'flex', gap: '6px', padding: '8px 16px' }}>
              {cat.hasIcon && <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2C5.8 2 4 3.8 4 6C4 9 8 14 8 14C8 14 12 9 12 6C12 3.8 10.2 2 8 2ZM8 7.5C7.2 7.5 6.5 6.8 6.5 6C6.5 5.2 7.2 4.5 8 4.5C8.8 4.5 9.5 5.2 9.5 6C9.5 6.8 8.8 7.5 8 7.5Z" fill="#FFF"/></svg>}
              <div style={{ color: cat.active ? '#FFF' : '#1A1A1A', fontFamily: '"DM Sans", sans-serif', fontSize: '14px', fontWeight: cat.active ? 600 : 500 }}>{cat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', padding: '8px 24px 0' }}>
        {[
          { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="14" rx="2" stroke="#8A8A86" strokeWidth="1.5"/><path d="M2 8H18" stroke="#8A8A86" strokeWidth="1.5"/><path d="M6 2V5" stroke="#8A8A86" strokeWidth="1.5" strokeLinecap="round"/><path d="M14 2V5" stroke="#8A8A86" strokeWidth="1.5" strokeLinecap="round"/></svg>, label: 'Date', value: 'Mar 28, 2026', border: true, delay: 32 },
          { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 10V17H17V10" stroke="#8A8A86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M1 6L3 3H17L19 6" stroke="#8A8A86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M1 6H19V8C19 9.1 18.1 10 17 10C15.9 10 15 9.1 15 8C15 9.1 14.1 10 13 10C11.9 10 11 9.1 11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 9.1 6.1 10 5 10C3.9 10 3 9.1 3 8C3 9.1 2.1 10 1 10V6Z" stroke="#8A8A86" strokeWidth="1.5" strokeLinejoin="round"/></svg>, label: 'Merchant', value: 'Hilton Hotels', border: true, delay: 36 },
          { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 4H16V16H4V4Z" stroke="#8A8A86" strokeWidth="1.5" strokeLinejoin="round"/><path d="M7 8H13" stroke="#8A8A86" strokeWidth="1.5" strokeLinecap="round"/><path d="M7 11H11" stroke="#8A8A86" strokeWidth="1.5" strokeLinecap="round"/></svg>, label: 'Note', value: 'Client dinner stay', border: false, delay: 40 },
        ].map(row => (
          <div key={row.label} style={{ ...fadeRight(f, row.delay, fps), alignItems: 'center', borderBottom: row.border ? '1px solid #E5E2DC' : 'none', display: 'flex', justifyContent: 'space-between', padding: '16px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {row.icon}
              <div style={{ color: '#9A9690', fontFamily: '"DM Sans", sans-serif', fontSize: '15px' }}>{row.label}</div>
            </div>
            <div style={{ color: '#1A1916', fontFamily: '"DM Sans", sans-serif', fontSize: '15px', fontWeight: 500 }}>{row.value}</div>
          </div>
        ))}
      </div>
      <div style={{ ...fadeUp(f, 44, fps), display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px' }}>
        <div style={{ color: '#8A8A86', fontFamily: '"DM Sans", sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Receipt</div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ alignItems: 'center', border: '1.5px dashed #DDD9D2', borderRadius: '12px', display: 'flex', flex: '1 1 0%', flexDirection: 'column', gap: '8px', justifyContent: 'center', padding: '24px 16px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 3L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5H16.83L15 3H9Z" stroke="#FF5C35" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="12" cy="13" r="4" stroke="#FF5C35" strokeWidth="1.5"/></svg>
            <div style={{ color: '#D4502C', fontFamily: '"DM Sans", sans-serif', fontSize: '13px', fontWeight: 600 }}>Take Photo</div>
          </div>
          <div style={{ alignItems: 'center', border: '1.5px dashed #DDD9D2', borderRadius: '12px', display: 'flex', flex: '1 1 0%', flexDirection: 'column', gap: '8px', justifyContent: 'center', padding: '24px 16px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15" stroke="#8A8A86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 10L12 15L17 10" stroke="#8A8A86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15V3" stroke="#8A8A86" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <div style={{ color: '#8A8A86', fontFamily: '"DM Sans", sans-serif', fontSize: '13px', fontWeight: 500 }}>Upload File</div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flex: '1 1 0%', alignItems: 'flex-end', padding: '24px 24px 40px' }}>
        <div style={{ ...fadeUp(f, 50, fps, 16), alignItems: 'center', backgroundColor: '#D4502C', borderRadius: '12px', display: 'flex', justifyContent: 'center', padding: '16px', width: '100%' }}>
          <div style={{ color: '#FFF', fontFamily: '"DM Sans", sans-serif', fontSize: '16px', fontWeight: 600, letterSpacing: '-0.01em' }}>Save Expense</div>
        </div>
      </div>
    </div>
  );
};
