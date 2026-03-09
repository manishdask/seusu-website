import { Link } from 'react-router-dom'

const STYLES = `
  @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
  .fu0 { animation: fadeUp .65s ease both }
  .fu1 { animation: fadeUp .65s .15s ease both }
  .fu2 { animation: fadeUp .65s .30s ease both }
  @keyframes barGrow { from{width:0} to{width:var(--w)} }
  .bar-anim { animation: barGrow 1.2s cubic-bezier(.4,0,.2,1) .5s both }
  .safe-x { padding-left:max(1.25rem,env(safe-area-inset-left)); padding-right:max(1.25rem,env(safe-area-inset-right)); }
`

const phases = [
  { n:'01', phase:'Surface',       depth:'0–5μm',   color:'#A8D1E7',
    desc:'The Hydro-Lock Molecule detects skin pH and temperature on contact. Surface tension begins shifting within milliseconds.' },
  { n:'02', phase:'Activation',    depth:'5–15μm',  color:'#336699',
    desc:'Surface tension reduces 60%, dissolving resistance of the intercellular lipid matrix. The formula finds pathways through.' },
  { n:'03', phase:'Penetration',   depth:'15–30μm', color:'#8E7CC3',
    desc:'High-performance actives are carried deep into the stratum corneum layers — arriving in under 30 seconds.' },
  { n:'04', phase:'Replenishment', depth:'30μm+',   color:'#8FBC8F',
    desc:'Actives anchor to skin proteins, creating permanent structural bonds. Not temporary moisture — cellular repair.' },
]

export default function Science() {
  return (
    <div style={{ fontFamily:"'Josefin Sans',sans-serif", overflowX:'hidden' }}>
      <style>{STYLES}</style>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden"
        style={{ paddingTop:'4.5rem', paddingBottom:'3rem', background:'linear-gradient(165deg,#03090f 0%,#0a1e30 50%,#091a2a 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'linear-gradient(rgba(168,209,231,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(168,209,231,.04) 1px,transparent 1px)', backgroundSize:'44px 44px' }} />

        <div className="relative z-10 safe-x">
          <div className="fu0 flex items-center gap-2.5 mb-4">
            <div style={{ width:'24px', height:'1.5px', background:'#A8D1E7' }} />
            <span style={{ color:'#A8D1E7', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold">The Science</span>
          </div>
          <h1 className="fu1 font-black text-white leading-none mb-4"
            style={{ fontSize:'clamp(2.4rem,10.5vw,8rem)', letterSpacing:'-.01em', textShadow:'0 4px 40px rgba(0,0,0,.5)' }}>
            THE HYDRO-<br />LOCK<br />
            <span style={{ color:'#A8D1E7', textShadow:'0 0 35px rgba(168,209,231,.35)' }}>MOLECULE.</span>
          </h1>
          <p className="fu2 mt-4" style={{ color:'rgba(255,255,255,.88)', fontSize:'clamp(13px,3.8vw,16px)', lineHeight:'1.85', maxWidth:'360px' }}>
            A proprietary biotech compound engineered to work with your skin's natural chemistry — not against it.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS — full width, stacked on mobile ── */}
      <section style={{ background:'#fff' }} className="safe-x py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2.5 mb-5">
            <div style={{ width:'24px', height:'1.5px', background:'#336699' }} />
            <span style={{ color:'#336699', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold">How It Works</span>
          </div>
          <h2 className="font-black text-black leading-none mb-6"
            style={{ fontSize:'clamp(1.6rem,6vw,3rem)', letterSpacing:'-.01em' }}>
            NOT A SURFACE<br /><span style={{ color:'#336699' }}>TREATMENT.</span>
          </h2>

          {/* Body text — bright, readable */}
          <div className="space-y-4 mb-8">
            <p style={{ color:'rgba(0,0,0,.72)', fontSize:'clamp(13px,3.8vw,15px)', lineHeight:'1.9' }}>
              Most penetration enhancers work by <strong className="text-black">damaging</strong> the skin's lipid barrier — burning a hole to let actives through. The result is inflammation, sensitisation, and long-term barrier compromise.
            </p>
            <p style={{ color:'rgba(0,0,0,.72)', fontSize:'clamp(13px,3.8vw,15px)', lineHeight:'1.9' }}>
              The Hydro-Lock Molecule reads the skin's natural pH and temperature, then <strong className="text-black">reduces its own surface tension</strong> to match the intercellular environment — a frictionless pathway inward. No damage. No inflammation.
            </p>
          </div>

          {/* Stats — 3 col, short labels for 320px ── */}
          <div className="grid grid-cols-3 gap-2 py-6" style={{ borderTop:'1px solid rgba(0,0,0,.08)', borderBottom:'1px solid rgba(0,0,0,.08)' }}>
            {[['<30s','Absorb'],['60%','Tension\nDrop'],['5×','Deeper']].map(([v,l]) => (
              <div key={l} className="text-center p-3"
                style={{ border:'1px solid rgba(0,0,0,.07)' }}>
                <p className="font-black text-black leading-none mb-1"
                  style={{ fontSize:'clamp(1.3rem,4.5vw,2rem)', color:'#336699' }}>{v}</p>
                <p className="font-bold whitespace-pre-line leading-tight"
                  style={{ color:'rgba(0,0,0,.45)', fontSize:'8px', letterSpacing:'.25em' }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PENETRATION DEPTH BARS — simple, clear on mobile ── */}
      <section style={{ background:'#f7f8fa' }} className="safe-x py-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2.5 mb-2">
            <div style={{ width:'24px', height:'1.5px', background:'#336699' }} />
            <span style={{ color:'#336699', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold">Penetration Model</span>
          </div>
          <h2 className="font-black text-black leading-none mb-6"
            style={{ fontSize:'clamp(1.5rem,5.5vw,2.5rem)', letterSpacing:'-.01em' }}>
            LAYER BY<br /><span style={{ color:'#336699' }}>LAYER.</span>
          </h2>

          <div className="space-y-3">
            {phases.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                {/* depth label — fixed width so bars align */}
                <span className="font-bold shrink-0 text-right"
                  style={{ color:'rgba(0,0,0,.35)', fontSize:'9px', letterSpacing:'.15em', width:'42px' }}>
                  {s.depth}
                </span>
                {/* bar */}
                <div className="flex-1 relative overflow-hidden" style={{ height:'44px', background:'#fff', border:'1px solid rgba(0,0,0,.06)' }}>
                  <div className="absolute left-0 top-0 bottom-0 bar-anim"
                    style={{ ['--w' as string]:`${parseInt(s.n)*23}%`, width:`${parseInt(s.n)*23}%`, background:`linear-gradient(90deg,${s.color}55,${s.color}20)`, borderLeft:`3px solid ${s.color}` }} />
                  <div className="absolute inset-0 flex items-center px-3 gap-2.5">
                    <span className="font-black" style={{ color:s.color, fontSize:'9px', letterSpacing:'.3em' }}>{s.n}</span>
                    <span className="font-black uppercase" style={{ color:'rgba(0,0,0,.7)', fontSize:'9px', letterSpacing:'.25em' }}>{s.phase}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 PHASE CARDS — 1 col mobile, 2 col sm, 4 col lg ── */}
      <section style={{ background:'#0a1e30' }} className="safe-x py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2.5 mb-2">
            <div style={{ width:'24px', height:'1.5px', background:'#A8D1E7' }} />
            <span style={{ color:'#A8D1E7', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold">4-Phase Penetration</span>
          </div>
          <h2 className="font-black text-white leading-none mb-8"
            style={{ fontSize:'clamp(1.5rem,5.5vw,2.8rem)', letterSpacing:'-.01em' }}>
            THE FULL<br /><span style={{ color:'#A8D1E7' }}>SEQUENCE.</span>
          </h2>

          {/* 1 col on mobile, 2 col on sm, 4 col on lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {phases.map((s, i) => (
              <div key={i} style={{ background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.08)', overflow:'hidden' }}
                className="hover:bg-white/[.07] transition-colors duration-300 group">
                <div style={{ height:'3px', background:s.color }} />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-black" style={{ color:'rgba(255,255,255,.18)', fontSize:'clamp(1.8rem,6vw,2.8rem)', lineHeight:1 }}>{s.n}</span>
                    <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:s.color, boxShadow:`0 0 8px ${s.color}` }} />
                  </div>
                  <p className="font-black text-white uppercase mb-1" style={{ fontSize:'10px', letterSpacing:'.3em' }}>{s.phase}</p>
                  <p className="font-bold uppercase mb-3" style={{ color:s.color, fontSize:'8px', letterSpacing:'.3em' }}>{s.depth}</p>
                  <p style={{ color:'rgba(255,255,255,.72)', fontSize:'clamp(12px,3.2vw,13px)', lineHeight:'1.8' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON — stacked on mobile ── */}
      <section style={{ background:'#fff' }} className="safe-x py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2.5 mb-2">
            <div style={{ width:'24px', height:'1.5px', background:'#336699' }} />
            <span style={{ color:'#336699', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold">Why It Matters</span>
          </div>
          <h2 className="font-black text-black leading-none mb-5"
            style={{ fontSize:'clamp(1.5rem,5.8vw,3rem)', letterSpacing:'-.01em' }}>
            STANDARD FORMULAS<br /><span style={{ color:'#336699' }}>NEVER ARRIVE.</span>
          </h2>
          <p style={{ color:'rgba(0,0,0,.68)', fontSize:'clamp(13px,3.8vw,15px)', lineHeight:'1.9', marginBottom:'2rem' }}>
            The average skincare molecule is 500–1000 daltons. The skin only allows passage under 500 daltons. Most products sit on top — creating the illusion of hydration without the substance.
          </p>

          {/* Comparison bars — full width, clear on mobile */}
          <div className="space-y-4 mb-8">
            {[
              { label:'Standard Formula',  pct:15, color:'#D2D2D2', textColor:'#999', desc:'Sits on surface. Evaporates within hours.' },
              { label:'Hydro-Lock System', pct:92, color:'#336699', textColor:'#336699', desc:'Penetrates to dermis. Permanent replenishment.' },
            ].map((row) => (
              <div key={row.label} style={{ border:'1px solid rgba(0,0,0,.08)', padding:'1.25rem' }}>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-black uppercase" style={{ color:'rgba(0,0,0,.72)', fontSize:'10px', letterSpacing:'.25em' }}>{row.label}</span>
                  <span className="font-black" style={{ color:row.textColor, fontSize:'11px', letterSpacing:'.1em' }}>{row.pct}%</span>
                </div>
                <div style={{ height:'10px', background:'#f5f7fa', borderRadius:'2px', overflow:'hidden', marginBottom:'10px' }}>
                  <div style={{ height:'100%', width:`${row.pct}%`, background:row.color, transition:'width 1.2s ease' }} />
                </div>
                <p style={{ color:'rgba(0,0,0,.55)', fontSize:'clamp(12px,3.2vw,14px)', lineHeight:'1.6' }}>{row.desc}</p>
              </div>
            ))}
          </div>

          <Link to="/products"
            className="flex items-center justify-center font-black uppercase transition-colors"
            style={{ minHeight:'52px', background:'#336699', color:'#fff', fontSize:'10px', letterSpacing:'.35em', textDecoration:'none', maxWidth:'400px' }}
            onMouseEnter={e=>(e.currentTarget.style.background='#1a3d5c')}
            onMouseLeave={e=>(e.currentTarget.style.background='#336699')}>
            See It In Every Product →
          </Link>
        </div>
      </section>

      {/* ── CTA BAR ── */}
      <section style={{ background:'#0a1e30' }} className="safe-x py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 max-w-5xl mx-auto">
          <div>
            <p style={{ color:'rgba(168,209,231,.55)', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold mb-2">Ready to try it?</p>
            <h3 className="font-black text-white leading-none"
              style={{ fontSize:'clamp(1.3rem,5vw,2.2rem)', letterSpacing:'-.01em' }}>
              SCIENCE IN<br /><span style={{ color:'#A8D1E7' }}>EVERY DROP.</span>
            </h3>
          </div>
          <Link to="/products"
            className="flex items-center justify-center font-black uppercase transition-colors w-full sm:w-auto"
            style={{ minHeight:'52px', padding:'0 2rem', background:'#A8D1E7', color:'#0a1e30', fontSize:'10px', letterSpacing:'.35em', textDecoration:'none', flexShrink:0 }}
            onMouseEnter={e=>(e.currentTarget.style.background='#fff')}
            onMouseLeave={e=>(e.currentTarget.style.background='#A8D1E7')}>
            Explore Products →
          </Link>
        </div>
      </section>
    </div>
  )
}