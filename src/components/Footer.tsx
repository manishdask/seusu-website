import { Link } from 'react-router-dom'

const STYLES = `
  .safe-x { padding-left:max(1.25rem,env(safe-area-inset-left)); padding-right:max(1.25rem,env(safe-area-inset-right)); }
`

const navLinks = ['Story', 'Science', 'Products', 'Packaging', 'Contact']

const company = [
  { l:'Legal Name', v:'Biotech Solutions Pvt. Ltd.' },
  { l:'Brand',      v:'SEUSU SKIN' },
  { l:'HQ',         v:'Kathmandu, Nepal' },
  { l:'Focus',      v:'Biotech Skincare Innovation' },
]

const socials = ['Instagram', 'TikTok', 'Facebook', 'LinkedIn']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background:'#0a1e30', fontFamily:"'Josefin Sans',sans-serif", position:'relative', overflow:'hidden' }}>
      <style>{STYLES}</style>

      {/* subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage:'linear-gradient(rgba(168,209,231,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(168,209,231,.03) 1px,transparent 1px)', backgroundSize:'44px 44px' }} />

      {/* glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width:'400px', height:'120px', background:'radial-gradient(ellipse,rgba(51,102,153,.25) 0%,transparent 70%)' }} />

      <div className="relative z-10 safe-x pt-12 sm:pt-16 pb-8">

        {/* ── MAIN GRID ─
             Mobile  : stacked single column
             sm      : 2 columns
             lg      : brand (5) | nav (3) | company (4)
        ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-10"
          style={{ borderBottom:'1px solid rgba(255,255,255,.1)' }}>

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link to="/" style={{ minHeight:'unset', display:'inline-block', marginBottom:'1.25rem' }}>
              <img src="/logo.png" alt="SEUSU SKIN"
                style={{ height:'34px', width:'auto' }} />
            </Link>
            <p style={{ color:'rgba(255,255,255,.78)', fontSize:'clamp(13px,3.5vw,14px)', lineHeight:'1.85', maxWidth:'280px', marginBottom:'1.25rem' }}>
              Proprietary biotech formulations engineered for the urban environment.
              Bridging the evaporation gap through structural replenishment.
            </p>

            {/* Social links — big tap targets on mobile */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2" style={{ maxWidth:'280px' }}>
              {socials.map(s => (
                <a key={s} href="#"
                  className="flex items-center justify-center font-black uppercase transition-all"
                  style={{ minHeight:'44px', border:'1.5px solid rgba(255,255,255,.2)', color:'rgba(255,255,255,.85)', fontSize:'8px', letterSpacing:'.32em', textDecoration:'none', padding:'0 .75rem' }}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor='#A8D1E7'; e.currentTarget.style.color='#A8D1E7' }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(255,255,255,.2)'; e.currentTarget.style.color='rgba(255,255,255,.85)' }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div className="lg:col-span-3">
            <h4 className="font-black uppercase mb-5"
              style={{ color:'rgba(255,255,255,.45)', fontSize:'8px', letterSpacing:'.42em' }}>
              Navigation
            </h4>
            <div className="flex flex-col gap-1">
              {navLinks.map((item, i) => (
                <Link key={item} to={`/${item.toLowerCase()}`}
                  className="flex items-center gap-3 transition-colors"
                  style={{ minHeight:'40px', textDecoration:'none', color:'rgba(255,255,255,.75)', fontSize:'10px', fontWeight:700, letterSpacing:'.28em' }}
                  onMouseEnter={e=>{ e.currentTarget.style.color='#A8D1E7' }}
                  onMouseLeave={e=>{ e.currentTarget.style.color='rgba(255,255,255,.75)' }}>
                  <span style={{ color:'rgba(255,255,255,.25)', fontSize:'8px', letterSpacing:'.3em', width:'18px' }}>0{i+1}</span>
                  {item.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          {/* Company column */}
          <div className="lg:col-span-4">
            <h4 className="font-black uppercase mb-5"
              style={{ color:'rgba(255,255,255,.45)', fontSize:'8px', letterSpacing:'.42em' }}>
              Company
            </h4>
            <div className="space-y-0 mb-7">
              {company.map(({ l, v }, i) => (
                <div key={l} className="flex gap-4 py-3"
                  style={{ borderBottom:'1px solid rgba(255,255,255,.08)' }}>
                  <span className="font-bold uppercase shrink-0"
                    style={{ color:'rgba(168,209,231,.65)', fontSize:'8px', letterSpacing:'.3em', width:'4.5rem', paddingTop:'1px' }}>
                    {l}
                  </span>
                  <span style={{ color:'#ffffff', fontSize:'12px', fontWeight:600 }}>{v}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div style={{ borderLeft:'2px solid rgba(168,209,231,.35)', paddingLeft:'1rem' }}>
              <p style={{ color:'rgba(255,255,255,.7)', fontSize:'12px', lineHeight:'1.8', fontStyle:'italic' }}>
                "The skin is not a wall. It is a gateway."
              </p>
              <p className="font-black uppercase mt-2"
                style={{ color:'rgba(168,209,231,.4)', fontSize:'7px', letterSpacing:'.4em' }}>
                — Founding Principle
              </p>
            </div>
          </div>
        </div>

        {/* ── LEGAL BAR — stacked on mobile ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6">
          <p className="font-bold uppercase"
            style={{ color:'rgba(255,255,255,.4)', fontSize:'8px', letterSpacing:'.35em' }}>
            © {year} SEUSU SKIN · Biotech Solutions Private Limited
          </p>
          <div className="flex gap-6">
            {['Privacy','Terms'].map(t => (
              <span key={t} className="font-bold uppercase cursor-pointer transition-colors"
                style={{ color:'rgba(255,255,255,.4)', fontSize:'8px', letterSpacing:'.35em' }}
                onMouseEnter={e=>(e.currentTarget.style.color='rgba(255,255,255,.75)')}
                onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,.4)')}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}