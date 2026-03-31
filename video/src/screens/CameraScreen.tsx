import React from "react";
import { staticFile } from "remotion";
import { fadeUp, fadeIn, scaleIn } from "../anim";

export interface CameraScreenProps {
  animFrame?: number;
  fps?: number;
}

export const CameraScreen: React.FC<CameraScreenProps> = ({
  animFrame = 999,
  fps = 30,
}) => {
  const f = animFrame;


  return (
    <div style={{ backgroundColor: '#0A0A0A', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', height: '880px', lineHeight: '16px', overflow: 'clip', WebkitFontSmoothing: 'antialiased', width: '390px' }}>
      {/* Status bar spacer — visual handled by fixed overlay in AppFlowVideo */}
      <div style={{ height: '50px' }} />
      <div style={{ ...fadeIn(f, 3, 6), alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', paddingLeft: '24px', paddingRight: '24px', paddingTop: '24px' }}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M20 8L8 20M8 8L20 20" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/></svg>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 3L4 14H12L11 21L20 10H12L13 3Z" stroke="#FFF" strokeWidth="1.5" strokeLinejoin="round"/></svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 4L20 20" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round"/><path d="M13 3L4 14H12L11 21L20 10H12L13 3Z" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinejoin="round"/></svg>
        </div>
      </div>
      <div style={{ display: 'flex', flex: '1 1 0%', justifyContent: 'center', alignItems: 'center', padding: '24px', position: 'relative' }}>
        <div style={{ ...scaleIn(f, 6, fps, 0.92), alignSelf: 'stretch', backgroundColor: '#1A1A18', borderRadius: '16px', display: 'flex', flex: '1 1 0%', overflow: 'clip', position: 'relative' }}>
          <div style={{ backgroundImage: `url(${staticFile('wood-table.png')})`, backgroundSize: 'cover', backgroundPosition: '51% 58%', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
          <div style={{ ...fadeIn(f, 14, 10), backgroundColor: 'rgba(255,255,255,0.94)', borderRadius: '3px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', position: 'absolute', top: '40px', left: '44px', right: '44px', bottom: '160px', display: 'flex', flexDirection: 'column', gap: '0px', padding: '20px 16px' }}>
            {/* Header */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', paddingBottom: '10px' }}>
              <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '13px', fontWeight: 700, color: '#333' }}>HILTON HOTELS</div>
              <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', color: '#888' }}>123 Main Street</div>
              <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', color: '#888' }}>New York, NY 10001</div>
              <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', color: '#888' }}>Tel: (212) 555-0147</div>
            </div>
            <div style={{ borderTop: '1px dashed #CCC', margin: '4px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', color: '#555' }}>Date: 03/28/2026</span>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', color: '#555' }}>14:32</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2px 0 6px' }}>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', color: '#555' }}>Server: Maria</span>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', color: '#555' }}>Chk #4072</span>
            </div>
            <div style={{ borderTop: '1px dashed #CCC', margin: '2px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0 2px' }}>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', color: '#555' }}>1x Room Service – Club</span>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', color: '#555' }}>28.00</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2px 0' }}>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', color: '#555' }}>1x Sparkling Water</span>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', color: '#555' }}>6.50</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2px 0 6px' }}>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', color: '#555' }}>1x Espresso</span>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', color: '#555' }}>8.00</span>
            </div>
            <div style={{ borderTop: '1px solid #DDD', margin: '2px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', color: '#555' }}>Subtotal</span>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', color: '#555' }}>42.50</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2px 0 4px' }}>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', color: '#555' }}>Tax (8.875%)</span>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', color: '#555' }}>3.78</span>
            </div>
            <div style={{ borderTop: '1px solid #CCC', margin: '2px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '11px', fontWeight: 700, color: '#333' }}>TOTAL</span>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '11px', fontWeight: 700, color: '#333' }}>$46.28</span>
            </div>
            <div style={{ borderTop: '1px dashed #D44', margin: '2px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', color: '#555' }}>VISA ****4821</span>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '9px', color: '#555' }}>$46.28</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', paddingTop: '6px' }}>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '8px', color: '#999', fontStyle: 'italic' }}>Thank you for staying with us!</span>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '8px', color: '#999' }}>Guest: Room 412</span>
            </div>
          </div>
        </div>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ ...fadeIn(f, 10, 8), position: 'absolute', top: '56px', left: '24px' }}><path d="M2 12V4C2 2.9 2.9 2 4 2H12" stroke="#FF5C35" strokeWidth="2.5" strokeLinecap="round"/></svg>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ ...fadeIn(f, 10, 8), position: 'absolute', top: '56px', right: '24px' }}><path d="M30 12V4C30 2.9 29.1 2 28 2H20" stroke="#FF5C35" strokeWidth="2.5" strokeLinecap="round"/></svg>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ ...fadeIn(f, 10, 8), position: 'absolute', bottom: '200px', left: '24px' }}><path d="M2 20V28C2 29.1 2.9 30 4 30H12" stroke="#FF5C35" strokeWidth="2.5" strokeLinecap="round"/></svg>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ ...fadeIn(f, 10, 8), position: 'absolute', bottom: '200px', right: '24px' }}><path d="M30 20V28C30 29.1 29.1 30 28 30H20" stroke="#FF5C35" strokeWidth="2.5" strokeLinecap="round"/></svg>
      </div>
      <div style={{ ...fadeIn(f, 25, 8), display: 'flex', justifyContent: 'center', paddingTop: '16px', paddingBottom: '4px' }}>
        <div style={{ color: 'rgba(255,255,255,0.55)', fontFamily: '"DM Sans", sans-serif', fontSize: '14px', letterSpacing: '0.01em' }}>Align receipt within the frame</div>
      </div>
      <div style={{ ...fadeUp(f, 30, fps, 16), display: 'flex', gap: '48px', justifyContent: 'center', alignItems: 'center', paddingTop: '16px', paddingBottom: '48px' }}>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.25)', borderRadius: '8px', height: '44px', width: '44px' }} />
        <div style={{ alignItems: 'center', border: '3px solid #FFF', borderRadius: '100px', display: 'flex', height: '72px', justifyContent: 'center', width: '72px' }}>
          <div style={{ backgroundColor: '#FFF', borderRadius: '100px', height: '58px', width: '58px' }} />
        </div>
        <div style={{ alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '100px', display: 'flex', height: '44px', justifyContent: 'center', width: '44px' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M16 7H20V3" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 11C2 6 6 2 11 2C14.5 2 17.5 4 19 7" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round"/><path d="M6 15H2V19" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round"/><path d="M20 11C20 16 16 20 11 20C7.5 20 4.5 18 3 15" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
      </div>
    </div>
  );
};
