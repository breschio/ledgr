import React from "react";
import { fadeUp, fadeRight, scaleIn, barFill } from "../anim";

interface Props {
  animFrame?: number;
  fps?: number;
}

export const InsightsScreen: React.FC<Props> = ({
  animFrame = 999,
  fps = 30,
}) => {
  const f = animFrame;
  return (
    <div style={{ backgroundColor: '#FAF9F6', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', height: '880px', lineHeight: '16px', overflow: 'clip', WebkitFontSmoothing: 'antialiased', width: '390px' }}>
      {/* Status bar spacer — visual handled by fixed overlay in AppFlowVideo */}
      <div style={{ height: '50px' }} />
      <div style={{ ...fadeUp(f, 4, fps), display: 'flex', flexDirection: 'column', gap: '4px', padding: '24px' }}>
        <div style={{ color: '#1A1916', fontFamily: '"Instrument Serif", serif', fontSize: '28px', letterSpacing: '-0.02em', lineHeight: '34px' }}>Insights</div>
        <div style={{ color: '#9A9690', fontFamily: '"DM Sans", sans-serif', fontSize: '13px' }}>March 2026</div>
      </div>
      <div style={{ ...fadeUp(f, 10, fps), backgroundColor: '#FFF', border: '1px solid #E5E2DC', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '20px', margin: '0 24px', padding: '24px' }}>
        <div style={{ color: '#9A9690', fontFamily: '"DM Sans", sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>By Category</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { label: 'Travel', amount: '$1,240', pct: 82, color: '#D4502C', delay: 14, barDelay: 16 },
            { label: 'Food', amount: '$892', pct: 59, color: '#E8956E', delay: 20, barDelay: 22 },
            { label: 'Office', amount: '$715', pct: 47, color: '#C4BFB6', delay: 26, barDelay: 28 },
          ].map((cat) => (
            <div key={cat.label} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ ...fadeRight(f, cat.delay, fps), display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ color: '#1A1916', fontFamily: '"DM Sans", sans-serif', fontSize: '14px', fontWeight: 500 }}>{cat.label}</div>
                <div style={{ color: '#1A1916', fontFamily: '"DM Sans", sans-serif', fontSize: '14px', fontWeight: 600 }}>{cat.amount}</div>
              </div>
              <div style={{ backgroundColor: '#EEEDE9', borderRadius: '100px', height: '8px', width: '100%' }}>
                <div style={{ backgroundColor: cat.color, borderRadius: '100px', height: '8px', width: barFill(f, cat.barDelay, fps, cat.pct) }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '12px', padding: '16px 24px' }}>
        {[
          { label: 'Avg / Day', value: '$101', color: '#1A1916', delay: 34 },
          { label: 'Receipts', value: '12', color: '#1A1916', delay: 38 },
          { label: 'vs Feb', value: '+18%', color: '#D4502C', delay: 42 },
        ].map((stat) => (
          <div key={stat.label} style={{ ...scaleIn(f, stat.delay, fps, 0.88), backgroundColor: '#FFF', border: '1px solid #E5E2DC', borderRadius: '14px', display: 'flex', flex: '1 1 0%', flexDirection: 'column', gap: '4px', padding: '16px' }}>
            <div style={{ color: '#9A9690', fontFamily: '"DM Sans", sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{stat.label}</div>
            <div style={{ color: stat.color, fontFamily: '"Instrument Serif", serif', fontSize: '28px', letterSpacing: '-0.02em', lineHeight: '34px' }}>{stat.value}</div>
          </div>
        ))}
      </div>
      <div style={{ ...fadeUp(f, 44, fps), backgroundColor: '#FFF', border: '1px solid #E5E2DC', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px', margin: '0 24px', padding: '24px' }}>
        <div style={{ color: '#9A9690', fontFamily: '"DM Sans", sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Top Merchants</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            { rank: '1', name: 'Hilton Hotels', visits: '3 visits', amount: '$890', delay: 48 },
            { rank: '2', name: 'WeWork', visits: '1 visit', amount: '$350', delay: 52 },
            { rank: '3', name: 'Osteria Francescana', visits: '2 visits', amount: '$312', delay: 56 },
          ].map((m, i, arr) => (
            <div key={m.rank} style={{ ...fadeRight(f, m.delay, fps), alignItems: 'center', borderBottom: i < arr.length - 1 ? '1px solid #EEEDE9' : 'none', display: 'flex', gap: '12px', padding: '10px 0' }}>
              <div style={{ color: '#C4BFB6', fontFamily: '"DM Sans", sans-serif', fontSize: '13px', fontWeight: 500, width: '20px' }}>{m.rank}</div>
              <div style={{ color: '#1A1916', fontFamily: '"DM Sans", sans-serif', fontSize: '14px', fontWeight: 500, flex: '1 1 0%' }}>{m.name}</div>
              <div style={{ color: '#9A9690', fontFamily: '"DM Sans", sans-serif', fontSize: '13px' }}>{m.visits}</div>
              <div style={{ color: '#1A1916', fontFamily: '"DM Sans", sans-serif', fontSize: '14px', fontWeight: 600 }}>{m.amount}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab bar */}
      <div style={{ ...fadeUp(f, 58, fps, 12), alignItems: 'center', backgroundColor: '#FAF9F6', borderTop: '1px solid #E5E2DC', display: 'flex', justifyContent: 'space-around', marginTop: 'auto', paddingBottom: '28px', paddingLeft: '24px', paddingRight: '24px', paddingTop: '12px' }}>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 8.5L11 2L19 8.5V19C19 19.6 18.6 20 18 20H4C3.4 20 3 19.6 3 19V8.5Z" stroke="#C4BFB6" strokeWidth="1.5" strokeLinejoin="round"/></svg>
          <div style={{ color: '#C4BFB6', fontFamily: '"DM Sans", sans-serif', fontSize: '10px', fontWeight: 600 }}>Home</div>
        </div>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 6H18M4 11H18M4 16H12" stroke="#1A1916" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <div style={{ color: '#1A1916', fontFamily: '"DM Sans", sans-serif', fontSize: '10px', fontWeight: 500 }}>Insights</div>
        </div>
        <div style={{ alignItems: 'center', backgroundColor: '#D4502C', borderRadius: '100px', display: 'flex', height: '48px', justifyContent: 'center', marginTop: '-20px', width: '48px' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 5V17M5 11H17" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/></svg>
        </div>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M18 8H4L5 19H17L18 8Z" stroke="#C4BFB6" strokeWidth="1.5" strokeLinejoin="round"/><path d="M8 8V5C8 3.3 9.3 2 11 2C12.7 2 14 3.3 14 5V8" stroke="#C4BFB6" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <div style={{ color: '#C4BFB6', fontFamily: '"DM Sans", sans-serif', fontSize: '10px', fontWeight: 500 }}>Receipts</div>
        </div>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="4" stroke="#C4BFB6" strokeWidth="1.5"/><path d="M4 20C4 16.7 7.1 14 11 14C14.9 14 18 16.7 18 20" stroke="#C4BFB6" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <div style={{ color: '#C4BFB6', fontFamily: '"DM Sans", sans-serif', fontSize: '10px', fontWeight: 500 }}>Profile</div>
        </div>
      </div>
    </div>
  );
};
