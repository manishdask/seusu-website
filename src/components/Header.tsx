import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = ['Story', 'Science', 'Products', 'Packaging', 'Contact']

const STYLES = `
  @keyframes drawerIn { from{transform:translateX(100%)} to{transform:translateX(0)} }
  .drawer-enter { animation: drawerIn .3s cubic-bezier(.4,0,.2,1) both }
  .safe-x { padding-left:max(1.25rem,env(safe-area-inset-left)); padding-right:max(1.25rem,env(safe-area-inset-right)); }
`

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (item: string) =>
    location.pathname === `/${item.toLowerCase()}` ||
    (item === 'Story' && location.pathname === '/')

  return (
    <>
      <style>{STYLES}</style>

      <header
        style={{
          position:'fixed', top:0, left:0, right:0, zIndex:100,
          background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.97)',
          backdropFilter:'blur(12px)',
          boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.1)' : '0 1px 0 rgba(0,0,0,0.08)',
          transition:'all .4s ease',
          fontFamily:"'Josefin Sans',sans-serif",
        }}>

        {/* Top accent line */}
        <div style={{ position:'absolute', top:0, left:0, right:0, height:'2.5px', background:'linear-gradient(to right,transparent,#336699 30%,#A8D1E7 70%,transparent)' }} />

        <div className="safe-x flex items-center justify-between" style={{ height:'60px' }}>

          {/* Logo */}
          <Link to="/" style={{ minHeight:'unset', flexShrink:0 }}>
            <img src="/logo.png" alt="SEUSU SKIN" style={{ height:'32px', width:'auto' }} />
          </Link>

          {/* Desktop nav — hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(item => (
              <Link key={item} to={`/${item.toLowerCase()}`}
                style={{
                  minHeight:'unset', textDecoration:'none',
                  fontSize:'10px', letterSpacing:'.28em', fontWeight:700,
                  color: isActive(item) ? '#336699' : '#555555',
                  borderBottom: isActive(item) ? '1.5px solid #336699' : '1.5px solid transparent',
                  paddingBottom:'2px', transition:'all .25s',
                }}
                onMouseEnter={e=>{ if(!isActive(item)){ e.currentTarget.style.color='#336699'; e.currentTarget.style.borderBottomColor='#336699' }}}
                onMouseLeave={e=>{ if(!isActive(item)){ e.currentTarget.style.color='#555555'; e.currentTarget.style.borderBottomColor='transparent' }}}>
                {item.toUpperCase()}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Desktop shop CTA */}
            <Link to="/products"
              className="hidden lg:inline-flex items-center justify-center font-black uppercase transition-colors"
              style={{ minHeight:'38px', padding:'0 1.25rem', background:'#336699', color:'#fff', fontSize:'10px', letterSpacing:'.32em', textDecoration:'none' }}
              onMouseEnter={e=>(e.currentTarget.style.background='#1a3d5c')}
              onMouseLeave={e=>(e.currentTarget.style.background='#336699')}>
              Shop Now
            </Link>

            {/* Hamburger — bigger tap target */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden flex flex-col items-center justify-center gap-[6px]"
              style={{ width:'44px', height:'44px', background:'none', border:'none', cursor:'pointer', padding:0 }}
              aria-label="Toggle menu">
              <span style={{ display:'block', height:'2px', background:'#336699', transition:'all .3s', transformOrigin:'center',
                width:'24px', transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }} />
              <span style={{ display:'block', height:'2px', background:'#336699', transition:'all .3s',
                width:'16px', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display:'block', height:'2px', background:'#336699', transition:'all .3s', transformOrigin:'center',
                width:'24px', transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 lg:hidden"
          style={{ zIndex:99 }}
          onClick={() => setMenuOpen(false)}>

          {/* Backdrop */}
          <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.55)', backdropFilter:'blur(3px)' }} />

          {/* Drawer panel */}
          <div
            className="drawer-enter absolute top-0 right-0 bottom-0 flex flex-col"
            style={{ width:'82vw', maxWidth:'320px', background:'#0a1e30', fontFamily:"'Josefin Sans',sans-serif" }}
            onClick={e => e.stopPropagation()}>

            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 py-5"
              style={{ borderBottom:'1px solid rgba(255,255,255,.1)' }}>
              <img src="/logo.png" alt="SEUSU SKIN"
                style={{ height:'28px', width:'auto', filter:'brightness(0) invert(1)' }} />
              <button
                onClick={() => setMenuOpen(false)}
                style={{ width:'40px', height:'40px', background:'rgba(255,255,255,.08)', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Nav links — big tap targets, bright text */}
            <nav className="flex-1 flex flex-col justify-center px-6">
              {navLinks.map((item, i) => (
                <Link key={item} to={`/${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-4 py-4"
                  style={{
                    borderBottom:'1px solid rgba(255,255,255,.07)',
                    textDecoration:'none', minHeight:'56px',
                    color: isActive(item) ? '#A8D1E7' : '#ffffff',
                  }}>
                  <span style={{ color: isActive(item) ? '#A8D1E7' : 'rgba(255,255,255,.35)', fontSize:'9px', fontWeight:700, letterSpacing:'.3em', width:'20px' }}>
                    0{i + 1}
                  </span>
                  <span style={{ fontSize:'13px', fontWeight:800, letterSpacing:'.32em' }}>
                    {item.toUpperCase()}
                  </span>
                  {isActive(item) && (
                    <span style={{ marginLeft:'auto', color:'#A8D1E7', fontSize:'14px' }}>→</span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="px-6 py-6" style={{ borderTop:'1px solid rgba(255,255,255,.1)' }}>
              <Link to="/products"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-full font-black uppercase transition-colors"
                style={{ minHeight:'52px', background:'#A8D1E7', color:'#0a1e30', fontSize:'10px', letterSpacing:'.35em', textDecoration:'none' }}
                onMouseEnter={e=>(e.currentTarget.style.background='#fff')}
                onMouseLeave={e=>(e.currentTarget.style.background='#A8D1E7')}>
                Shop Now
              </Link>
              <p className="text-center font-bold uppercase mt-3"
                style={{ color:'rgba(255,255,255,.3)', fontSize:'8px', letterSpacing:'.4em' }}>
                Depth Redefined · Kathmandu
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}