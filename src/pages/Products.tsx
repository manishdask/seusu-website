import { useState } from 'react'
import { Link } from 'react-router-dom'

const products = [
  {
    num:'01', name:'Hydration Core',  type:'Face Serum',        vol:'30ml',  color:'#A8D1E7', dark:'#0d3d6e',
    badge:'AM / PM',  tag:'Bestseller',
    conc:'5% HA', active:'Hyaluronic Acid Complex',
    benefit:'Deep structural moisture that locks in — permanently.',
    desc:'Multi-weight hyaluronic acid delivered directly into the stratum corneum. Skin feels genuinely plump from the inside, not coated on the surface.',
    ings:['Hyaluronic Acid 5%','Ceramide NP','Niacinamide 3%','Hydro-Lock Molecule'],
    steps:'Cleanse → Tone → 2–3 drops → Moisturise',
    img:'/prod-serums.jpg', pos:'center 30%',
  },
  {
    num:'02', name:'Vitamin C Glow',  type:'Brightening Serum', vol:'30ml',  color:'#E88B4D', dark:'#7a3000',
    badge:'AM only',  tag:'New',
    conc:'20% Vit C', active:'L-Ascorbic Acid',
    benefit:'Antioxidant protection and targeted brightening.',
    desc:'L-Ascorbic Acid at 20% stabilised by encapsulation. Delivered precisely where pigmentation forms — not sitting on the surface.',
    ings:['L-Ascorbic Acid 20%','Vitamin E 1%','Ferulic Acid','Hydro-Lock Molecule'],
    steps:'Cleanse → 2–3 drops AM only → SPF always',
    img:'/prod-pumps.jpg', pos:'center 35%',
  },
  {
    num:'03', name:'Night Repair',    type:'Retinol Serum',     vol:'30ml',  color:'#8E7CC3', dark:'#2e1f7a',
    badge:'PM only',  tag:'PM Formula',
    conc:'0.5% Retinol', active:'Retinol + Bakuchiol',
    benefit:'Cell turnover and deep repair while you sleep.',
    desc:'Retinol paired with Bakuchiol for regeneration without irritation. Hydro-Lock carries both actives to the dermis where real repair happens.',
    ings:['Retinol 0.5%','Bakuchiol 1%','Peptide Complex','Hydro-Lock Molecule'],
    steps:'Cleanse → 2–3 drops PM → Night Moisturiser',
    img:'/prod-jars.jpg', pos:'center 40%',
  },
  {
    num:'04', name:'Calming Cica',    type:'Face Wash',         vol:'150ml', color:'#8FBC8F', dark:'#1b5e20',
    badge:'AM / PM',  tag:'Sensitive',
    conc:'10% Cica', active:'Centella Asiatica',
    benefit:'Barrier repair and anti-inflammation in every wash.',
    desc:'Zero sulphates. Zero fragrance. Centella at 10% actively rebuilds the skin barrier while cleansing. Not just gentle — genuinely repairing.',
    ings:['Centella Asiatica 10%','Panthenol 5%','Allantoin','Hydro-Lock Molecule'],
    steps:'Wet face → Massage → Rinse thoroughly',
    img:'/prod-tubes.jpg', pos:'center 40%',
  },
  {
    num:'05', name:'Peptide Firm',    type:'Facial Lotion',     vol:'50ml',  color:'#C0C0C0', dark:'#333',
    badge:'AM / PM',  tag:'Advanced',
    conc:'5ppm CTP-1', active:'Copper Tripeptide-1',
    benefit:'Measurable firming and long-term collagen support.',
    desc:'Copper Tripeptide-1 paired with Matrixyl 3000. Measurable firmness improvement within 4 weeks of consistent use.',
    ings:['Copper Tripeptide-1','Matrixyl 3000','Argireline 10%','Hydro-Lock Molecule'],
    steps:'After Serum → Small amount → Press gently',
    img:'/prod-lotions.jpg', pos:'center 35%',
  },
]

const STYLES = `
  @keyframes slideDown { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }
  .slide-down { animation: slideDown .35s ease both }
  .safe-x { padding-left: max(1rem, env(safe-area-inset-left)); padding-right: max(1rem, env(safe-area-inset-right)); }
`

export default function Products() {
  const [open, setOpen] = useState<number|null>(null)

  return (
    <div style={{ fontFamily:"'Josefin Sans',sans-serif", overflowX:'hidden' }}>
      <style>{STYLES}</style>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden"
        style={{ paddingTop:'4.5rem', paddingBottom:'3rem', background:'linear-gradient(165deg,#03090f 0%,#0a1e30 50%,#091a2a 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'linear-gradient(rgba(168,209,231,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(168,209,231,.04) 1px,transparent 1px)', backgroundSize:'44px 44px' }} />

        <div className="relative z-10 safe-x">
          <div className="flex items-center gap-2.5 mb-4">
            <div style={{ width:'24px', height:'1.5px', background:'#A8D1E7' }} />
            <span style={{ color:'#A8D1E7', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold">The Collection</span>
          </div>
          <h1 className="font-black text-white leading-none mb-4"
            style={{ fontSize:'clamp(2.6rem,11vw,8.5rem)', letterSpacing:'-.01em', textShadow:'0 4px 40px rgba(0,0,0,.5)' }}>
            FIVE<br />
            <span style={{ color:'#A8D1E7', textShadow:'0 0 35px rgba(168,209,231,.35)' }}>FORMULAS.</span>
          </h1>
          <p style={{ color:'rgba(255,255,255,.85)', fontSize:'clamp(13px,3.8vw,16px)', lineHeight:'1.8', maxWidth:'360px' }}>
            Five skin challenges. One delivery system. Every product carries the Hydro-Lock Molecule.
          </p>
        </div>
      </section>

      {/* ── PRODUCT CARDS ── */}
      <section style={{ background:'#f7f8fa', paddingTop:'1.25rem', paddingBottom:'1.25rem' }}>
        <div className="safe-x max-w-4xl mx-auto space-y-3">
          {products.map((p, i) => {
            const isOpen = open === i
            const badgeTextColor = p.color === '#C0C0C0' ? '#111' : '#fff'

            return (
              <div key={i} style={{
                background:'#fff', overflow:'hidden',
                boxShadow: isOpen ? '0 16px 48px rgba(0,0,0,.1)' : '0 2px 12px rgba(0,0,0,.05)',
                transition:'box-shadow .35s ease',
              }}>

                {/* ── Tappable card ── */}
                <div onClick={() => setOpen(isOpen ? null : i)} style={{ cursor:'pointer' }}>

                  {/* Photo — full width, tall on mobile */}
                  <div className="relative overflow-hidden" style={{ height:'clamp(200px,54vw,300px)' }}>
                    <div style={{ position:'absolute', top:0, left:0, right:0, height:'3px', background:p.color, zIndex:3 }} />

                    <img src={p.img} alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-600"
                      style={{ objectPosition:p.pos, transform: isOpen ? 'scale(1.04)' : 'scale(1)' }} />

                    <div className="absolute inset-0"
                      style={{ background:'linear-gradient(to top,rgba(0,0,0,.86) 0%,rgba(0,0,0,.12) 55%,transparent 100%)' }} />

                    {/* number watermark */}
                    <div className="absolute top-3 left-3.5" style={{ zIndex:2 }}>
                      <span className="font-black" style={{ color:'rgba(255,255,255,.15)', fontSize:'clamp(2.2rem,9vw,4.5rem)', lineHeight:1 }}>{p.num}</span>
                    </div>

                    {/* tag */}
                    <div className="absolute top-3.5 right-3.5" style={{ zIndex:2 }}>
                      <span className="font-black uppercase" style={{ background:p.color, color:badgeTextColor, fontSize:'8px', letterSpacing:'.32em', padding:'4px 10px' }}>{p.tag}</span>
                    </div>

                    {/* product name on photo */}
                    <div className="absolute bottom-0 left-0 right-0 z-10" style={{ padding:'1rem 1.1rem' }}>
                      <p style={{ color:'rgba(255,255,255,.55)', fontSize:'8px', letterSpacing:'.38em' }} className="uppercase font-bold mb-0.5">
                        {p.type} · {p.vol}
                      </p>
                      <h3 className="font-black text-white leading-none mb-2"
                        style={{ fontSize:'clamp(1.45rem,5.5vw,2.2rem)', textShadow:'0 2px 16px rgba(0,0,0,.5)' }}>
                        {p.name}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-black uppercase" style={{ background:'rgba(0,0,0,.5)', color:'#fff', fontSize:'8px', letterSpacing:'.28em', padding:'4px 8px', border:`1px solid ${p.color}50` }}>{p.badge}</span>
                        <span className="font-black uppercase" style={{ background:p.color, color:badgeTextColor, fontSize:'8px', letterSpacing:'.28em', padding:'4px 8px' }}>{p.conc}</span>
                      </div>
                    </div>

                    {/* expand icon */}
                    <div className="absolute bottom-3.5 right-3.5 z-10">
                      <div style={{
                        width:'30px', height:'30px', border:'1.5px solid rgba(255,255,255,.35)',
                        display:'flex', alignItems:'center', justifyContent:'center',
                        background:'rgba(0,0,0,.35)', backdropFilter:'blur(4px)',
                        transform: isOpen ? 'rotate(45deg)' : 'none', transition:'transform .3s ease',
                      }}>
                        <span style={{ color:'#fff', fontSize:'18px', fontWeight:300, lineHeight:1 }}>+</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick strip */}
                  <div className="flex items-center justify-between px-4 py-3"
                    style={{ borderBottom: isOpen ? '1px solid rgba(0,0,0,.06)' : 'none' }}>
                    <div className="flex items-center gap-2">
                      <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:p.color, flexShrink:0 }} />
                      <span style={{ color:p.dark, fontSize:'9px', letterSpacing:'.28em' }} className="uppercase font-bold">{p.active}</span>
                    </div>
                    <span style={{ color:'rgba(0,0,0,.4)', fontSize:'9px', letterSpacing:'.22em' }} className="uppercase font-bold">{p.badge}</span>
                  </div>
                </div>

                {/* ── Expandable detail ── */}
                <div style={{
                  maxHeight: isOpen ? '700px' : '0',
                  overflow:'hidden',
                  transition:'max-height .5s cubic-bezier(.4,0,.2,1)',
                }}>
                  <div className="px-4 pb-6 pt-4 space-y-5">

                    {/* benefit highlight */}
                    <div className="flex gap-3">
                      <div style={{ width:'3px', minHeight:'40px', background:p.color, borderRadius:'2px', flexShrink:0 }} />
                      <div>
                        <p style={{ color:p.dark, fontSize:'8px', letterSpacing:'.38em' }} className="uppercase font-bold mb-1">Core Benefit</p>
                        <p className="font-black text-black" style={{ fontSize:'clamp(.9rem,3.5vw,1.05rem)', lineHeight:'1.35' }}>{p.benefit}</p>
                      </div>
                    </div>

                    {/* description */}
                    <p style={{ color:'rgba(0,0,0,.65)', fontSize:'clamp(13px,3.5vw,15px)', lineHeight:'1.8' }}>{p.desc}</p>

                    {/* how to use */}
                    <div>
                      <p style={{ color:'rgba(0,0,0,.32)', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold mb-2">How To Use</p>
                      <p style={{ color:'rgba(0,0,0,.65)', fontSize:'clamp(11px,3vw,13px)', letterSpacing:'.1em', lineHeight:'1.7' }} className="font-bold uppercase">{p.steps}</p>
                    </div>

                    {/* ingredients */}
                    <div>
                      <p style={{ color:'rgba(0,0,0,.32)', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold mb-2">Key Ingredients</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.ings.map(ing => (
                          <span key={ing} className="font-bold uppercase"
                            style={{ fontSize:'8px', letterSpacing:'.26em', padding:'5px 9px', border:`1px solid ${p.color}`, color:p.dark, background:`${p.color}12` }}>
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link to="/science"
                      style={{ color:'#336699', fontSize:'9px', letterSpacing:'.38em', borderBottom:'1.5px solid rgba(51,102,153,.3)', paddingBottom:'2px', minHeight:'unset', display:'inline-flex', alignItems:'center', gap:'6px', textDecoration:'none' }}
                      className="uppercase font-bold">
                      Learn the Science →
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── FOOTNOTE ── */}
      <div className="py-4 text-center" style={{ background:'#0a1e30' }}>
        <p style={{ color:'rgba(168,209,231,.45)', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold">
          All products · Hydro-Lock Molecule · Paraben Free · Fragrance Free
        </p>
      </div>

      {/* ── CTA ── */}
      <section style={{ background:'#fff' }} className="safe-x py-12">
        <div style={{ borderTop:'2px solid #000', paddingTop:'2rem' }}>
          <p style={{ color:'rgba(0,0,0,.32)', fontSize:'8px', letterSpacing:'.45em' }} className="uppercase font-bold mb-2">Go deeper</p>
          <h3 className="font-black text-black leading-none mb-6"
            style={{ fontSize:'clamp(1.4rem,5.5vw,2.8rem)', letterSpacing:'-.01em' }}>
            THE SCIENCE<br /><span style={{ color:'#336699' }}>BEHIND EVERY DROP.</span>
          </h3>
          <div className="flex flex-col sm:flex-row gap-3" style={{ maxWidth:'400px' }}>
            <Link to="/science"
              className="flex items-center justify-center font-black uppercase flex-1 transition-colors"
              style={{ minHeight:'52px', background:'#336699', color:'#fff', fontSize:'10px', letterSpacing:'.35em', textDecoration:'none' }}
              onMouseEnter={e=>(e.currentTarget.style.background='#1a3d5c')}
              onMouseLeave={e=>(e.currentTarget.style.background='#336699')}>
              Explore Science →
            </Link>
            <Link to="/contact"
              className="flex items-center justify-center font-black uppercase flex-1 transition-all"
              style={{ minHeight:'52px', border:'2px solid #000', color:'#000', fontSize:'10px', letterSpacing:'.35em', textDecoration:'none' }}
              onMouseEnter={e=>{ e.currentTarget.style.background='#000'; e.currentTarget.style.color='#fff' }}
              onMouseLeave={e=>{ e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#000' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}