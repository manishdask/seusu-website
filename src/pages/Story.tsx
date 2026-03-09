import { Link } from 'react-router-dom'

const STYLES = `
  @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
  .fu0 { animation: fadeUp .65s ease both }
  .fu1 { animation: fadeUp .65s .15s ease both }
  .fu2 { animation: fadeUp .65s .30s ease both }
  .safe-x { padding-left:max(1.25rem,env(safe-area-inset-left)); padding-right:max(1.25rem,env(safe-area-inset-right)); }
`

const timeline = [
  { yr:'The Gap',   color:'#A8D1E7', title:'The problem nobody talks about',
    body:'Most skincare molecules are too large to cross the skin\'s lipid barrier. They sit on the surface, create a temporary feeling of moisture, then evaporate — taking your money with them. The industry calls this \'topical delivery\'. We call it a broken promise.' },
  { yr:'The Lab',   color:'#8E7CC3', title:'Two years of biotech research',
    body:'Biotech Solutions Private Limited, Kathmandu. Our team spent two years studying pH-responsive surface chemistry and intercellular lipid pathways. The question was simple: how does the skin move its own moisture around? Can we replicate that?' },
  { yr:'The Break', color:'#8FBC8F', title:'The Hydro-Lock Molecule',
    body:'A proprietary compound that reads skin pH on contact and reduces its own surface tension to match the intercellular environment. No damage. No inflammation. A frictionless pathway inward — delivering actives to the stratum corneum in under 30 seconds.' },
  { yr:'SEUSU',     color:'#E88B4D', title:'Five formulas. One system.',
    body:'SEUSU SKIN launched with five targeted formulas, each built around the Hydro-Lock Molecule. K-Beauty methodology. Biotech precision. Designed for the 22–38 year old who demands proof — not promises.' },
]

export default function Story() {
  return (
    <div style={{ fontFamily:"'Josefin Sans',sans-serif", overflowX:'hidden' }}>
      <style>{STYLES}</style>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden"
        style={{ paddingTop:'4.5rem', paddingBottom:'3rem', background:'linear-gradient(165deg,#03090f 0%,#0a1e30 50%,#091a2a 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'linear-gradient(rgba(168,209,231,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(168,209,231,.04) 1px,transparent 1px)', backgroundSize:'44px 44px' }} />
        <div className="absolute pointer-events-none"
          style={{ top:0, right:0, width:'50%', height:'100%', background:'linear-gradient(to left,rgba(51,102,153,.08),transparent)' }} />

        <div className="relative z-10 safe-x">
          <div className="fu0 flex items-center gap-2.5 mb-4">
            <div style={{ width:'24px', height:'1.5px', background:'#A8D1E7' }} />
            <span style={{ color:'#A8D1E7', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold">Our Story</span>
          </div>
          <h1 className="fu1 font-black text-white leading-none mb-4"
            style={{ fontSize:'clamp(2.4rem,10.5vw,8rem)', letterSpacing:'-.01em', textShadow:'0 4px 40px rgba(0,0,0,.5)' }}>
            SOLVING<br />THE<br />
            <span style={{ color:'#A8D1E7', textShadow:'0 0 35px rgba(168,209,231,.35)' }}>EVAPORATION<br />GAP.</span>
          </h1>
          <p className="fu2 mt-4" style={{ color:'rgba(255,255,255,.88)', fontSize:'clamp(13px,3.8vw,16px)', lineHeight:'1.85', maxWidth:'360px' }}>
            Most skincare never reaches where it needs to go. SEUSU SKIN was built to change that — permanently.
          </p>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <div style={{ background:'#0a1e30', borderBottom:'1px solid rgba(255,255,255,.07)' }} className="safe-x py-8 sm:py-10">
        <p className="font-black text-white leading-snug"
          style={{ fontSize:'clamp(1rem,4.2vw,1.5rem)', maxWidth:'520px' }}>
          "The skin is not a wall. It is a gateway. Our job is to learn its language, speak it precisely, and carry what matters through."
        </p>
        <p className="font-bold uppercase mt-3"
          style={{ color:'rgba(168,209,231,.55)', fontSize:'8px', letterSpacing:'.42em' }}>
          — SEUSU SKIN Founding Principle
        </p>
      </div>

      {/* ── TIMELINE — full-width stacked cards, one per row on mobile ── */}
      <section style={{ background:'#f7f8fa' }} className="py-5 safe-x">
        <div className="max-w-3xl mx-auto space-y-3">
          {timeline.map((t, i) => (
            <div key={i} style={{ background:'#fff', boxShadow:'0 2px 14px rgba(0,0,0,.06)', overflow:'hidden' }}>
              <div style={{ height:'3px', background:t.color }} />
              <div className="p-5 sm:p-7">
                <div className="flex items-center gap-2.5 mb-3">
                  <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:t.color, flexShrink:0, boxShadow:`0 0 8px ${t.color}80` }} />
                  <span className="font-black uppercase"
                    style={{ color:t.color, fontSize:'8px', letterSpacing:'.42em' }}>{t.yr}</span>
                </div>
                <h3 className="font-black text-black leading-tight mb-3"
                  style={{ fontSize:'clamp(1rem,4vw,1.25rem)' }}>
                  {t.title}
                </h3>
                <p style={{ color:'rgba(0,0,0,.68)', fontSize:'clamp(13px,3.5vw,15px)', lineHeight:'1.85' }}>
                  {t.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PHOTO ── */}
      <div className="safe-x py-5 max-w-3xl mx-auto">
        <div className="relative overflow-hidden" style={{ height:'clamp(200px,55vw,400px)' }}>
          <img src="/prod-lotions.jpg" alt="SEUSU SKIN Collection"
            className="w-full h-full object-cover" style={{ objectPosition:'center 30%' }} />
          <div className="absolute inset-0"
            style={{ background:'linear-gradient(to top,rgba(10,30,48,.9) 0%,transparent 55%)' }} />
          <div className="absolute bottom-4 left-4">
            <p style={{ color:'rgba(255,255,255,.55)', fontSize:'8px', letterSpacing:'.4em' }} className="uppercase font-bold mb-1">The Collection</p>
            <p className="font-black text-white" style={{ fontSize:'clamp(.95rem,3.5vw,1.35rem)' }}>Hydro-Lock Series · Kathmandu</p>
          </div>
        </div>
      </div>

      {/* ── STATS — 3 col, short labels only, works at 320px ── */}
      <section style={{ background:'#0a1e30' }} className="safe-x py-10">
        <div className="grid grid-cols-3 gap-2" style={{ borderTop:'1px solid rgba(255,255,255,.08)', paddingTop:'2rem' }}>
          {[['<30s','Absorb'],['100%','Paraben\nFree'],['5×','Deeper']].map(([v,l]) => (
            <div key={l} className="text-center">
              <p className="font-black text-white leading-none mb-1"
                style={{ fontSize:'clamp(1.3rem,4.8vw,2.2rem)', textShadow:'0 0 18px rgba(168,209,231,.4)' }}>{v}</p>
              <p className="font-bold whitespace-pre-line leading-tight"
                style={{ color:'rgba(168,209,231,.75)', fontSize:'8px', letterSpacing:'.25em' }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA — full width stacked on mobile ── */}
      <section style={{ background:'#fff' }} className="safe-x py-12">
        <div style={{ borderTop:'2px solid #000', paddingTop:'2rem' }}>
          <p style={{ color:'rgba(0,0,0,.32)', fontSize:'8px', letterSpacing:'.45em' }} className="uppercase font-bold mb-2">Go deeper</p>
          <h3 className="font-black text-black leading-none mb-6"
            style={{ fontSize:'clamp(1.4rem,5.5vw,2.8rem)', letterSpacing:'-.01em' }}>
            THE SCIENCE<br /><span style={{ color:'#336699' }}>BEHIND THE STORY.</span>
          </h3>
          <div className="flex flex-col sm:flex-row gap-3" style={{ maxWidth:'400px' }}>
            <Link to="/science"
              className="flex items-center justify-center font-black uppercase flex-1 transition-colors"
              style={{ minHeight:'52px', background:'#336699', color:'#fff', fontSize:'10px', letterSpacing:'.35em', textDecoration:'none' }}
              onMouseEnter={e=>(e.currentTarget.style.background='#1a3d5c')}
              onMouseLeave={e=>(e.currentTarget.style.background='#336699')}>
              Explore Science →
            </Link>
            <Link to="/products"
              className="flex items-center justify-center font-black uppercase flex-1 transition-all"
              style={{ minHeight:'52px', border:'2px solid #000', color:'#000', fontSize:'10px', letterSpacing:'.35em', textDecoration:'none' }}
              onMouseEnter={e=>{ e.currentTarget.style.background='#000'; e.currentTarget.style.color='#fff' }}
              onMouseLeave={e=>{ e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#000' }}>
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}