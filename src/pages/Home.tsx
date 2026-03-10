import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

/* ─── DATA ───────────────────────────────────────────────────────── */
const products = [
  { num:'01', name:'Hydration Core', type:'Face Serum',        active:'Hyaluronic Acid 5%',    badge:'AM/PM',   color:'#A8D1E7', dark:'#0d3d6e', img:'/prod-serums.jpg',  pos:'center 30%' },
  { num:'02', name:'Vitamin C Glow', type:'Brightening Serum', active:'L-Ascorbic Acid 20%',   badge:'AM only', color:'#E88B4D', dark:'#7a3000', img:'/prod-pumps.jpg',   pos:'center 35%' },
  { num:'03', name:'Night Repair',   type:'Retinol Serum',     active:'Retinol 0.5%',          badge:'PM only', color:'#8E7CC3', dark:'#2e1f7a', img:'/prod-jars.jpg',    pos:'center 40%' },
  { num:'04', name:'Calming Cica',   type:'Face Wash',         active:'Centella Asiatica 10%', badge:'AM/PM',   color:'#8FBC8F', dark:'#1b5e20', img:'/prod-tubes.jpg',   pos:'center 40%' },
  { num:'05', name:'Peptide Firm',   type:'Facial Lotion',     active:'Copper Tripeptide-1',   badge:'AM/PM',   color:'#C0C0C0', dark:'#333333', img:'/prod-lotions.jpg', pos:'center 35%' },
]

const pillars = [
  { n:'01', title:'K-Beauty\nScience',  stat:'5×',   unit:'Deeper',      color:'#A8D1E7' },
  { n:'02', title:'Zero\nCompromise',   stat:'0%',   unit:'Parabens',    color:'#8FBC8F' },
  { n:'03', title:'30 Second\nAbsorb',  stat:'<30s', unit:'Penetration', color:'#8E7CC3' },
  { n:'04', title:'Derma\nEfficacy',    stat:'100%', unit:'Bioactive',   color:'#E88B4D' },
]

const tickerWords = [
  'Depth Redefined','Hydro-Lock Molecule','K-Beauty Science','Paraben Free',
  'Derma Efficacy','Fragrance Free','Zero Compromise','30s Absorption','Biotech Nepal',
]

/* ─── STYLES ─────────────────────────────────────────────────────── */
const STYLES = `
  @keyframes mq        { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  @keyframes fadeUp    { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
  @keyframes slideUp   { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
  @keyframes slideLeft { from{opacity:0;transform:translateX(-36px)} to{opacity:1;transform:translateX(0)} }
  @keyframes slideRight{ from{opacity:0;transform:translateX(36px)} to{opacity:1;transform:translateX(0)} }
  @keyframes countUp   { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
  @keyframes lineGrow  { from{width:0;opacity:0} to{width:28px;opacity:1} }
  @keyframes bgTextIn  { from{opacity:0;letter-spacing:.55em} to{opacity:1;letter-spacing:.08em} }
  @keyframes shimmer   { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
  @keyframes dotPulse  { 0%,100%{transform:scale(1)} 50%{transform:scale(1.5)} }
  @keyframes glowPulse { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:.8;transform:scale(1.05)} }
  @keyframes imgFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
  @keyframes badgePop  { 0%{opacity:0;transform:scale(.6) translateY(10px)} 70%{transform:scale(1.06) translateY(-2px)} 100%{opacity:1;transform:scale(1) translateY(0)} }
  @keyframes pulseDot  { 0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(168,209,231,.6)} 50%{opacity:.7;box-shadow:0 0 0 5px rgba(168,209,231,0)} }
  @keyframes revealBar { from{width:0} to{width:100%} }
  @keyframes fadeSlide { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }

  /* stagger */
  .fu0{animation:fadeUp .75s cubic-bezier(.22,1,.36,1) both}
  .fu1{animation:fadeUp .75s .15s cubic-bezier(.22,1,.36,1) both}
  .fu2{animation:fadeUp .75s .28s cubic-bezier(.22,1,.36,1) both}
  .fu3{animation:fadeUp .75s .42s cubic-bezier(.22,1,.36,1) both}
  .fu4{animation:fadeUp .75s .56s cubic-bezier(.22,1,.36,1) both}
  .fu5{animation:fadeUp .75s .70s cubic-bezier(.22,1,.36,1) both}

  .h-line-1{animation:slideUp .85s .05s cubic-bezier(.22,1,.36,1) both}
  .h-line-2{animation:slideUp .85s .20s cubic-bezier(.22,1,.36,1) both}

  .bg-text-anim { animation: bgTextIn 1.4s .1s cubic-bezier(.22,1,.36,1) both }
  .img-float    { animation: imgFloat 6s 1s ease-in-out infinite }
  .glow-orb     { animation: glowPulse 5s ease-in-out infinite }
  .badge-pop    { animation: badgePop .65s .9s cubic-bezier(.22,1,.36,1) both }
  .pulse-dot    { animation: pulseDot 2s ease-in-out infinite }
  .card-left    { animation: slideLeft  .7s .75s cubic-bezier(.22,1,.36,1) both }
  .card-right   { animation: slideRight .7s .88s cubic-bezier(.22,1,.36,1) both }
  .line-grow    { animation: lineGrow   .8s .5s  cubic-bezier(.22,1,.36,1) both }
  .stat-1       { animation: countUp .6s .65s cubic-bezier(.22,1,.36,1) both }
  .stat-2       { animation: countUp .6s .78s cubic-bezier(.22,1,.36,1) both }
  .stat-3       { animation: countUp .6s .91s cubic-bezier(.22,1,.36,1) both }

  /* CTA */
  .cta-primary {
    background: linear-gradient(90deg,#A8D1E7 0%,#cce8f4 45%,#A8D1E7 100%);
    background-size: 200% 100%;
    animation: shimmer 3s 1.8s linear infinite;
    transition: transform .2s, box-shadow .2s;
  }
  .cta-primary:hover  { transform:translateY(-2px); box-shadow:0 10px 36px rgba(168,209,231,.45)!important }
  .cta-secondary      { transition: all .25s }
  .cta-secondary:hover{ background:rgba(168,209,231,.08)!important; border-color:#A8D1E7!important; transform:translateY(-2px) }

  /* Marquee */
  .marquee-track { animation: mq 30s linear infinite }
  .marquee-track:hover { animation-play-state: paused }

  /* Utility */
  .safe-x { padding-left:max(1.25rem,env(safe-area-inset-left)); padding-right:max(1.25rem,env(safe-area-inset-right)) }

  /* Image hover scale */
  .img-zoom { overflow:hidden }
  .img-zoom img { transition: transform .7s cubic-bezier(.22,1,.36,1) }
  .img-zoom:hover img { transform: scale(1.06) }

  /* Section reveal */
  .section-fade { opacity:0; transform:translateY(32px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1) }
  .section-fade.in { opacity:1; transform:translateY(0) }
`

export default function Home() {
  const canvasRef           = useRef<HTMLCanvasElement>(null)
  const [active, setActive] = useState(0)
  const [ready,  setReady]  = useState(false)

  /* ready flag */
  useEffect(() => { const t = setTimeout(() => setReady(true), 80); return () => clearTimeout(t) }, [])

  /* intersection observer for section reveals */
  useEffect(() => {
    const els = document.querySelectorAll('.section-fade')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) } })
    }, { threshold: 0.12 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [ready])

  /* particle canvas */
  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return
    const cx = cv.getContext('2d')!; let raf: number
    const resize = () => { cv.width = cv.offsetWidth; cv.height = cv.offsetHeight }
    resize(); window.addEventListener('resize', resize)
    const N = window.innerWidth < 600 ? 20 : 50
    const pts = Array.from({ length: N }, () => ({
      x: Math.random()*cv.width,  y: Math.random()*cv.height,
      vx:(Math.random()-.5)*.18,  vy:(Math.random()-.5)*.18,
      r: Math.random()*.9+.4,     a: Math.random()*.4+.12,
    }))
    const loop = () => {
      cx.clearRect(0,0,cv.width,cv.height)
      pts.forEach(p => {
        p.x=(p.x+p.vx+cv.width )%cv.width
        p.y=(p.y+p.vy+cv.height)%cv.height
        cx.beginPath(); cx.arc(p.x,p.y,p.r,0,Math.PI*2)
        cx.fillStyle=`rgba(168,209,231,${p.a})`; cx.fill()
      })
      const D=100
      for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
        const d=Math.hypot(pts[i].x-pts[j].x,pts[i].y-pts[j].y)
        if(d<D){ cx.beginPath(); cx.moveTo(pts[i].x,pts[i].y); cx.lineTo(pts[j].x,pts[j].y)
          cx.strokeStyle=`rgba(168,209,231,${.12*(1-d/D)})`; cx.lineWidth=.5; cx.stroke() }
      }
      raf=requestAnimationFrame(loop)
    }
    loop()
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize',resize) }
  }, [])

  /* auto-advance products */
  useEffect(()=>{
    const t=setInterval(()=>setActive(a=>(a+1)%products.length),4000)
    return ()=>clearInterval(t)
  },[])

  const prod = products[active]

  return (
    <div style={{ fontFamily:"'Josefin Sans',sans-serif", overflowX:'hidden', color:'#fff' }}>
      <style>{STYLES}</style>

      {/* ══════════════════════════════════════════════════════════════
          §1 — HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden"
        style={{ minHeight:'100svh', background:'linear-gradient(160deg,#020810 0%,#071525 40%,#0d2035 72%,#040c18 100%)', display:'flex', flexDirection:'column' }}>

        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex:0,
          backgroundImage:'radial-gradient(circle at 1.5px 1.5px, rgba(168,209,231,.1) 1px, transparent 0)',
          backgroundSize:'48px 48px' }} />

        {/* Glow orbs */}
        <div className="glow-orb absolute pointer-events-none" style={{ zIndex:0,
          top:'-5%', left:'50%', transform:'translateX(-50%)',
          width:'min(700px,110vw)', height:'min(500px,70vw)',
          background:'radial-gradient(ellipse,rgba(51,102,153,.26) 0%,rgba(168,209,231,.04) 45%,transparent 70%)',
          filter:'blur(2px)' }} />
        <div className="absolute pointer-events-none" style={{ zIndex:0,
          bottom:'5%', right:'-5%', width:'300px', height:'300px',
          background:'radial-gradient(ellipse,rgba(168,209,231,.04) 0%,transparent 65%)',
          filter:'blur(40px)', animation:'glowPulse 8s 2s ease-in-out infinite' }} />

        {/* Particles */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity:.38, zIndex:1 }} />

        {/* Giant watermark */}
        {ready && (
          <div className="bg-text-anim absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" style={{ zIndex:1 }}>
            <span className="font-black" style={{ fontSize:'clamp(5rem,22vw,16rem)', letterSpacing:'.08em', color:'rgba(255,255,255,.028)', whiteSpace:'nowrap', lineHeight:1 }}>
              SEUSU SKIN
            </span>
          </div>
        )}

        {/* TOP — eyebrow + headline */}
        <div className="relative safe-x text-center" style={{ zIndex:10, paddingTop:'clamp(5rem,13vw,6.5rem)', paddingBottom:'clamp(.5rem,1.5vw,.9rem)' }}>
          {ready && <>
            <div className="fu0 flex items-center justify-center gap-4 mb-5">
              <div className="line-grow" style={{ height:'1px', background:'linear-gradient(to right,transparent,#A8D1E7)', flexShrink:0 }} />
              <span className="font-black uppercase" style={{ color:'#A8D1E7', fontSize:'8px', letterSpacing:'.5em' }}>Hydro-Lock Technology · Nepal</span>
              <div className="line-grow" style={{ height:'1px', background:'linear-gradient(to left,transparent,#A8D1E7)', flexShrink:0 }} />
            </div>

            <div style={{ lineHeight:'.88', marginBottom:'clamp(.6rem,2vw,1rem)' }}>
              <div className="h-line-1">
                <h1 className="font-black text-white"
                  style={{ fontSize:'clamp(3.2rem,14vw,10rem)', letterSpacing:'-.03em', textShadow:'0 4px 50px rgba(0,0,0,.9)' }}>DEPTH</h1>
              </div>
              <div className="h-line-2">
                <h1 className="font-black"
                  style={{ fontSize:'clamp(3.2rem,14vw,10rem)', letterSpacing:'-.03em',
                    color:'transparent', WebkitTextStroke:'2px #A8D1E7',
                    filter:'drop-shadow(0 0 16px rgba(168,209,231,.5))' }}>REDEFINED.</h1>
              </div>
            </div>

            <p className="fu2 mx-auto" style={{ color:'rgba(255,255,255,.62)', fontSize:'clamp(12px,3.2vw,14px)', letterSpacing:'.06em', maxWidth:'300px', lineHeight:1.85, fontWeight:300 }}>
              Biotech skincare that penetrates deeper in under{' '}
              <span style={{ color:'#A8D1E7', fontWeight:700 }}>30 seconds</span>.
            </p>
          </>}
        </div>

        {/* CENTER — image + floating cards */}
        <div className="relative flex-1 flex items-center justify-center"
          style={{ zIndex:10, minHeight:'clamp(280px,58vw,480px)', padding:'0.5rem 0' }}>
          {ready && (
            <div className="relative flex justify-center items-center w-full"
              style={{ maxWidth:'540px', paddingLeft:'clamp(100px,22vw,140px)', paddingRight:'clamp(100px,22vw,140px)' }}>

              {/* Product image */}
              <div className="img-float relative" style={{ width:'clamp(180px,46vw,290px)', height:'clamp(240px,60vw,390px)', zIndex:3 }}>
                <img src="/prod-serums.jpg" alt="SEUSU SKIN"
                  className="w-full h-full object-cover"
                  style={{ objectPosition:'center 18%', boxShadow:'0 40px 100px rgba(0,0,0,.8), 0 0 80px rgba(168,209,231,.1)' }} />
                <div className="absolute inset-0" style={{ background:'linear-gradient(to top,rgba(2,8,16,.9) 0%,rgba(2,8,16,.12) 45%,transparent 68%)' }} />

                {/* Corner accents — all 4 */}
                <div className="absolute top-0 left-0" style={{ zIndex:5 }}>
                  <div style={{ width:'22px', height:'1.5px', background:'#A8D1E7', opacity:.85 }} />
                  <div style={{ width:'1.5px', height:'22px', background:'#A8D1E7', opacity:.85 }} />
                </div>
                <div className="absolute top-0 right-0" style={{ zIndex:5, display:'flex', flexDirection:'column', alignItems:'flex-end' }}>
                  <div style={{ width:'22px', height:'1.5px', background:'#A8D1E7', opacity:.85 }} />
                  <div style={{ width:'1.5px', height:'22px', background:'#A8D1E7', opacity:.85 }} />
                </div>
                <div className="absolute bottom-0 left-0" style={{ zIndex:5, display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
                  <div style={{ width:'1.5px', height:'22px', background:'#A8D1E7', opacity:.85 }} />
                  <div style={{ width:'22px', height:'1.5px', background:'#A8D1E7', opacity:.85 }} />
                </div>
                <div className="absolute bottom-0 right-0" style={{ zIndex:5, display:'flex', flexDirection:'column', alignItems:'flex-end', justifyContent:'flex-end' }}>
                  <div style={{ width:'1.5px', height:'22px', background:'#A8D1E7', opacity:.85 }} />
                  <div style={{ width:'22px', height:'1.5px', background:'#A8D1E7', opacity:.85 }} />
                </div>

                {/* Product label */}
                <div className="absolute bottom-0 left-0 right-0 p-3" style={{ zIndex:5 }}>
                  <p className="font-black uppercase" style={{ color:'rgba(168,209,231,.5)', fontSize:'7px', letterSpacing:'.5em', marginBottom:'4px' }}>No. 01 · Bestseller</p>
                  <p className="font-black text-white" style={{ fontSize:'clamp(.85rem,3.2vw,1.1rem)', letterSpacing:'-.01em' }}>Hydration Core Serum</p>
                  <div style={{ width:'24px', height:'1px', background:'#A8D1E7', marginTop:'6px', opacity:.5 }} />
                </div>
              </div>

              {/* Card LEFT */}
              <div className="card-left absolute left-0" style={{ top:'18%', zIndex:6,
                background:'rgba(5,14,26,.94)', border:'1px solid rgba(168,209,231,.22)',
                backdropFilter:'blur(20px)', padding:'16px 18px', width:'clamp(108px,22vw,136px)',
                boxShadow:'0 16px 50px rgba(0,0,0,.6), inset 0 1px 0 rgba(168,209,231,.1)' }}>
                <p className="font-black uppercase" style={{ color:'rgba(168,209,231,.45)', fontSize:'7px', letterSpacing:'.4em', marginBottom:'8px' }}>Active</p>
                <p className="font-black text-white" style={{ fontSize:'clamp(1.2rem,4.5vw,1.6rem)', lineHeight:1, letterSpacing:'-.02em' }}>5×</p>
                <p className="font-bold uppercase mt-2" style={{ color:'rgba(255,255,255,.55)', fontSize:'7px', letterSpacing:'.3em', lineHeight:1.6 }}>Deeper<br/>Penetration</p>
                <div style={{ marginTop:'12px', height:'1px', background:'linear-gradient(to right,rgba(168,209,231,.35),transparent)' }} />
                <p className="font-bold uppercase mt-2" style={{ color:'rgba(168,209,231,.38)', fontSize:'6px', letterSpacing:'.3em' }}>vs Standard</p>
              </div>

              {/* Card RIGHT */}
              <div className="card-right absolute right-0" style={{ bottom:'18%', zIndex:6,
                background:'rgba(5,14,26,.94)', border:'1px solid rgba(168,209,231,.22)',
                backdropFilter:'blur(20px)', padding:'16px 18px', width:'clamp(108px,22vw,136px)',
                boxShadow:'0 16px 50px rgba(0,0,0,.6), inset 0 1px 0 rgba(168,209,231,.1)' }}>
                <p className="font-black uppercase" style={{ color:'rgba(168,209,231,.45)', fontSize:'7px', letterSpacing:'.4em', marginBottom:'8px' }}>Formula</p>
                <p className="font-black text-white" style={{ fontSize:'clamp(1.2rem,4.5vw,1.6rem)', lineHeight:1, letterSpacing:'-.02em' }}>100%</p>
                <p className="font-bold uppercase mt-2" style={{ color:'rgba(255,255,255,.55)', fontSize:'7px', letterSpacing:'.3em', lineHeight:1.6 }}>Paraben<br/>Free</p>
                <div style={{ marginTop:'12px', height:'1px', background:'linear-gradient(to right,rgba(168,209,231,.35),transparent)' }} />
                <p className="font-bold uppercase mt-2" style={{ color:'rgba(168,209,231,.38)', fontSize:'6px', letterSpacing:'.3em' }}>Clean Science</p>
              </div>

              {/* Pulse badge */}
              <div className="badge-pop absolute" style={{ top:'-10px', right:'calc(50% - clamp(90px,23vw,145px) - 10px)', zIndex:7 }}>
                <div style={{ background:'rgba(5,14,26,.96)', border:'1px solid rgba(168,209,231,.3)',
                  backdropFilter:'blur(16px)', borderRadius:'30px', padding:'8px 14px',
                  display:'flex', alignItems:'center', gap:'7px',
                  boxShadow:'0 8px 30px rgba(0,0,0,.5), 0 0 20px rgba(168,209,231,.08)' }}>
                  <div className="pulse-dot" style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#A8D1E7', flexShrink:0 }} />
                  <span className="font-black" style={{ color:'rgba(255,255,255,.88)', fontSize:'9px', letterSpacing:'.18em', whiteSpace:'nowrap' }}>Absorbs in 30s</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* BOTTOM — CTAs + stats */}
        <div className="relative safe-x text-center pb-6" style={{ zIndex:10 }}>
          {ready && <>
            <div className="fu4 flex flex-col sm:flex-row gap-2.5 justify-center mx-auto mb-7" style={{ maxWidth:'380px' }}>
              <Link to="/products" className="cta-primary flex items-center justify-center font-black uppercase flex-1"
                style={{ minHeight:'52px', color:'#071525', fontSize:'10px', letterSpacing:'.38em', textDecoration:'none', boxShadow:'0 8px 32px rgba(168,209,231,.3)' }}>
                Shop Collection
              </Link>
              <Link to="/science" className="cta-secondary flex items-center justify-center font-bold uppercase flex-1"
                style={{ minHeight:'52px', border:'1px solid rgba(168,209,231,.32)', color:'rgba(255,255,255,.72)', fontSize:'10px', letterSpacing:'.35em', textDecoration:'none' }}>
                How It Works →
              </Link>
            </div>

            <div className="grid grid-cols-3 mx-auto pt-5" style={{ maxWidth:'340px', borderTop:'1px solid rgba(255,255,255,.07)' }}>
              {([['<30s','Absorb','stat-1'],['5×','Deeper','stat-2'],['100%','Paraben\nFree','stat-3']] as [string,string,string][]).map(([v,l,cls])=>(
                <div key={l} className={`${cls} text-center`}>
                  <p className="font-black text-white leading-none mb-1.5"
                    style={{ fontSize:'clamp(1.2rem,4vw,1.75rem)', textShadow:'0 0 22px rgba(168,209,231,.45)' }}>{v}</p>
                  <p className="font-bold whitespace-pre-line leading-tight"
                    style={{ color:'rgba(168,209,231,.55)', fontSize:'7px', letterSpacing:'.3em' }}>{l}</p>
                </div>
              ))}
            </div>
          </>}
        </div>

        {/* Scroll cue */}
        {ready && (
          <div className="fu5 relative flex flex-col items-center gap-2 pb-5" style={{ zIndex:10 }}>
            <div style={{ width:'1px', height:'32px', background:'linear-gradient(to bottom,transparent,rgba(168,209,231,.22),transparent)' }} />
            <span className="font-black uppercase" style={{ color:'rgba(168,209,231,.2)', fontSize:'7px', letterSpacing:'.55em' }}>Scroll</span>
          </div>
        )}

        {/* Bottom gradient fade into ticker */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height:'80px', background:'linear-gradient(to bottom,transparent,rgba(168,209,231,.06))', zIndex:8 }} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          §2 — TICKER
      ══════════════════════════════════════════════════════════════ */}
      <div className="overflow-hidden" style={{ background:'#A8D1E7', padding:'11px 0' }}>
        <div className="marquee-track flex whitespace-nowrap w-max">
          {[...tickerWords,...tickerWords,...tickerWords].map((w,i)=>(
            <span key={i} className="flex items-center font-black uppercase"
              style={{ color:'#0a1e30', fontSize:'8px', letterSpacing:'.45em', margin:'0 1.25rem' }}>
              {w}<span className="ml-5 opacity-30">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          §3 — FEATURED INTRO  (dark navy, 2-col text + image)
          This was completely missing — the gap between hero and products
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-fade relative overflow-hidden" style={{ background:'#071525' }}>

        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage:'linear-gradient(rgba(168,209,231,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(168,209,231,.03) 1px,transparent 1px)',
          backgroundSize:'44px 44px' }} />

        <div className="relative safe-x" style={{ paddingTop:'clamp(3.5rem,10vw,5.5rem)', paddingBottom:'clamp(3.5rem,10vw,5.5rem)' }}>

          {/* Two-col: text left, image right */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-10">

            {/* LEFT — text */}
            <div className="flex-1" style={{ maxWidth:'480px' }}>
              <div className="flex items-center gap-3 mb-5">
                <div style={{ width:'24px', height:'1.5px', background:'#A8D1E7' }} />
                <span className="font-black uppercase" style={{ color:'#A8D1E7', fontSize:'8px', letterSpacing:'.45em' }}>The Collection</span>
              </div>

              <h2 className="font-black leading-none mb-5"
                style={{ fontSize:'clamp(2rem,8vw,4.5rem)', letterSpacing:'-.02em', lineHeight:'.92' }}>
                <span className="text-white">FIVE<br/>FORMULAS.</span><br/>
                <span style={{ color:'#A8D1E7' }}>ONE GOAL.</span>
              </h2>

              <p style={{ color:'rgba(255,255,255,.62)', fontSize:'clamp(13px,3.5vw,15px)', lineHeight:'1.88', maxWidth:'360px', fontWeight:300, marginBottom:'2rem' }}>
                Every SEUSU product is built around the Hydro-Lock Molecule —
                a proprietary biotech complex that opens skin pathways and delivers
                actives <span style={{ color:'#A8D1E7', fontWeight:600 }}>5× deeper</span> than standard formulas.
              </p>

              {/* Mini product pills */}
              <div className="flex flex-wrap gap-2 mb-7">
                {products.map(p=>(
                  <div key={p.num}
                    style={{ border:`1px solid ${p.color}44`, background:`${p.color}0e`,
                      padding:'6px 12px', display:'flex', alignItems:'center', gap:'7px', cursor:'default' }}>
                    <div style={{ width:'5px', height:'5px', borderRadius:'50%', background:p.color }} />
                    <span className="font-black uppercase" style={{ color:p.color, fontSize:'7px', letterSpacing:'.3em' }}>{p.name}</span>
                  </div>
                ))}
              </div>

              <Link to="/products"
                className="inline-flex items-center justify-center font-black uppercase transition-all duration-300"
                style={{ minHeight:'50px', padding:'0 2rem', border:'1px solid rgba(168,209,231,.35)', color:'rgba(255,255,255,.8)', fontSize:'9px', letterSpacing:'.38em', textDecoration:'none' }}
                onMouseEnter={e=>{ e.currentTarget.style.background='rgba(168,209,231,.1)'; e.currentTarget.style.borderColor='#A8D1E7' }}
                onMouseLeave={e=>{ e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='rgba(168,209,231,.35)' }}>
                View All Products →
              </Link>
            </div>

            {/* RIGHT — stacked images */}
            <div className="flex-1 w-full min-w-0">
              <div className="grid grid-cols-2 gap-2 w-full">

                {/* Large image — full width, 16:9 ratio */}
                <div className="img-zoom col-span-2 relative w-full" style={{ aspectRatio:'16/9' }}>
                  <img src="/prod-pumps.jpg" alt="Vitamin C Glow" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition:'center 35%' }} />
                  <div className="absolute inset-0" style={{ background:'linear-gradient(to top,rgba(7,21,37,.9) 0%,transparent 55%)' }} />
                  <div className="absolute bottom-3 left-3">
                    <p className="font-black uppercase" style={{ color:'rgba(232,139,77,.7)', fontSize:'7px', letterSpacing:'.38em', marginBottom:'3px' }}>No. 02</p>
                    <p className="font-black text-white" style={{ fontSize:'clamp(.85rem,2.8vw,1.05rem)' }}>Vitamin C Glow</p>
                  </div>
                </div>

                {/* Small left — square */}
                <div className="img-zoom relative w-full" style={{ aspectRatio:'1/1' }}>
                  <img src="/prod-jars.jpg" alt="Night Repair" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition:'center 40%' }} />
                  <div className="absolute inset-0" style={{ background:'linear-gradient(to top,rgba(7,21,37,.88) 0%,transparent 60%)' }} />
                  <div className="absolute bottom-2 left-2">
                    <p className="font-black uppercase" style={{ color:'rgba(142,124,195,.7)', fontSize:'7px', letterSpacing:'.3em', marginBottom:'2px' }}>No. 03</p>
                    <p className="font-black text-white" style={{ fontSize:'clamp(.78rem,2.5vw,.9rem)' }}>Night Repair</p>
                  </div>
                </div>

                {/* Small right — square */}
                <div className="img-zoom relative w-full" style={{ aspectRatio:'1/1' }}>
                  <img src="/prod-lotions.jpg" alt="Peptide Firm" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition:'center 35%' }} />
                  <div className="absolute inset-0" style={{ background:'linear-gradient(to top,rgba(7,21,37,.88) 0%,transparent 60%)' }} />
                  <div className="absolute bottom-2 left-2">
                    <p className="font-black uppercase" style={{ color:'rgba(192,192,192,.65)', fontSize:'7px', letterSpacing:'.3em', marginBottom:'2px' }}>No. 05</p>
                    <p className="font-black text-white" style={{ fontSize:'clamp(.78rem,2.5vw,.9rem)' }}>Peptide Firm</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          §4 — INTERACTIVE PRODUCT SHOWCASE
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background:'#f4f5f7' }}>

        {/* Section header */}
        <div className="section-fade safe-x" style={{ paddingTop:'clamp(3rem,8vw,4.5rem)', paddingBottom:'1.5rem' }}>
          <div className="flex items-center gap-3 mb-3">
            <div style={{ width:'24px', height:'1.5px', background:'#336699' }} />
            <span className="font-black uppercase" style={{ color:'#336699', fontSize:'8px', letterSpacing:'.42em' }}>Explore Range</span>
          </div>
          <h2 className="font-black text-black leading-none"
            style={{ fontSize:'clamp(1.6rem,6vw,3.2rem)', letterSpacing:'-.01em' }}>
            THE FULL<br /><span style={{ color:'#336699' }}>LINEUP.</span>
          </h2>
        </div>

        {/* Product tabs */}
        <div className="overflow-x-auto scrollbar-hide" style={{ borderBottom:'1px solid rgba(0,0,0,.09)' }}>
          <div className="flex w-max min-w-full">
            {products.map((p,i)=>(
              <button key={p.num} onClick={()=>setActive(i)}
                className="flex-shrink-0 flex flex-col items-start font-black uppercase transition-all duration-300"
                style={{ minWidth:'clamp(110px,28vw,160px)', padding:'14px 16px',
                  borderBottom: active===i ? `2px solid ${p.color}` : '2px solid transparent',
                  background: active===i ? '#fff' : 'transparent',
                  color: active===i ? '#111' : 'rgba(0,0,0,.35)',
                  cursor:'pointer', fontSize:'8px', letterSpacing:'.32em' }}>
                <span style={{ color: active===i ? p.color : 'rgba(0,0,0,.2)', fontSize:'7px', letterSpacing:'.3em', marginBottom:'3px' }}>{p.num}</span>
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product detail panel */}
        <div className="relative overflow-hidden" style={{ height:'clamp(320px,75vw,540px)' }}>
          <img key={prod.img} src={prod.img} alt={prod.name}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition:prod.pos, opacity:1, transition:'opacity .5s' }} />
          <div className="absolute inset-0" style={{ background:`linear-gradient(to right, ${prod.dark}f0 0%, ${prod.dark}99 45%, transparent 100%)` }} />
          <div className="absolute inset-0 safe-x flex flex-col justify-center" style={{ maxWidth:'360px' }}>
            <span className="font-black uppercase mb-1" style={{ color:`${prod.color}bb`, fontSize:'8px', letterSpacing:'.42em' }}>{prod.num} / 05</span>
            <h2 className="font-black text-white leading-none mb-1" style={{ fontSize:'clamp(1.8rem,7vw,4rem)', letterSpacing:'-.02em' }}>{prod.name}</h2>
            <p className="font-bold uppercase mb-4" style={{ color:'rgba(255,255,255,.5)', fontSize:'9px', letterSpacing:'.3em' }}>{prod.type}</p>
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width:'20px', height:'1.5px', background:prod.color }} />
              <span className="font-black uppercase" style={{ color:prod.color, fontSize:'8px', letterSpacing:'.32em' }}>{prod.active}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-black uppercase" style={{ background:'rgba(255,255,255,.12)', color:'#fff', fontSize:'7px', letterSpacing:'.28em', padding:'5px 10px' }}>{prod.badge}</span>
              <Link to="/products"
                className="flex items-center justify-center font-black uppercase"
                style={{ minHeight:'34px', padding:'0 16px', background:prod.color, color:prod.dark, fontSize:'8px', letterSpacing:'.28em', textDecoration:'none', transition:'opacity .2s' }}
                onMouseEnter={e=>(e.currentTarget.style.opacity='.8')}
                onMouseLeave={e=>(e.currentTarget.style.opacity='1')}>
                View →
              </Link>
            </div>
          </div>
          {/* Dot nav */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {products.map((_,i)=>(
              <button key={i} onClick={()=>setActive(i)}
                style={{ width:active===i?'20px':'6px', height:'6px', borderRadius:'3px',
                  background:active===i?prod.color:'rgba(255,255,255,.3)',
                  transition:'all .3s', border:'none', cursor:'pointer', padding:0 }} />
            ))}
          </div>
        </div>

        {/* Bottom padding */}
        <div style={{ height:'clamp(2.5rem,6vw,4rem)' }} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          §5 — BRAND PILLARS  (dark navy)
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-fade" style={{ background:'#0a1e30' }}>
        <div className="safe-x" style={{ paddingTop:'clamp(3rem,8vw,5rem)', paddingBottom:'clamp(3rem,8vw,5rem)' }}>
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width:'24px', height:'1.5px', background:'#A8D1E7' }} />
            <span style={{ color:'#A8D1E7', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold">Why SEUSU</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background:'rgba(255,255,255,.07)' }}>
            {pillars.map(p=>(
              <div key={p.n} style={{ background:'#0a1e30', padding:'clamp(1.25rem,4vw,2rem)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:p.color, animation:'dotPulse 2.5s ease-in-out infinite' }} />
                  <span style={{ color:'rgba(255,255,255,.25)', fontSize:'8px', letterSpacing:'.35em', fontWeight:700 }} className="uppercase">{p.n}</span>
                </div>
                <p className="font-black text-white leading-none mb-3"
                  style={{ fontSize:'clamp(1.8rem,5.5vw,2.8rem)', textShadow:`0 0 20px ${p.color}55` }}>{p.stat}</p>
                <p style={{ color:p.color, fontSize:'8px', letterSpacing:'.32em', fontWeight:700 }} className="uppercase mb-2">{p.unit}</p>
                <p className="font-bold whitespace-pre-line" style={{ color:'rgba(255,255,255,.42)', fontSize:'9px', lineHeight:1.7 }}>{p.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          §6 — PHOTO GALLERY  (white)
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-fade" style={{ background:'#fff' }}>
        <div className="safe-x" style={{ paddingTop:'clamp(3rem,8vw,5rem)', paddingBottom:'clamp(3rem,8vw,5rem)' }}>

          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <div style={{ width:'24px', height:'1.5px', background:'#336699' }} />
                <span style={{ color:'#336699', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold">The Range</span>
              </div>
              <h2 className="font-black text-black leading-none" style={{ fontSize:'clamp(1.55rem,6vw,3.5rem)', letterSpacing:'-.01em' }}>
                CRAFTED<br /><span style={{ color:'#336699' }}>IN DETAIL.</span>
              </h2>
            </div>
            <Link to="/packaging"
              className="font-black uppercase hidden sm:inline-flex items-center gap-2 transition-colors"
              style={{ textDecoration:'none', color:'rgba(0,0,0,.35)', fontSize:'8px', letterSpacing:'.35em' }}
              onMouseEnter={e=>(e.currentTarget.style.color='#336699')}
              onMouseLeave={e=>(e.currentTarget.style.color='rgba(0,0,0,.35)')}>
              See Packaging →
            </Link>
          </div>

          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2.5">
            {/* Left tall — height = 2 × right + gap (205×2 + 10 = 420) */}
            <div className="img-zoom relative sm:row-span-2" style={{ height:'clamp(200px,54vw,420px)' }}>
              <img src="/prod-serums.jpg" alt="Serum Collection" className="w-full h-full object-cover" style={{ objectPosition:'center 30%' }} />
              <div className="absolute inset-0" style={{ background:'linear-gradient(to top,rgba(10,30,48,.88) 0%,transparent 55%)' }} />
              <div className="absolute bottom-4 left-4">
                <p style={{ color:'rgba(255,255,255,.5)', fontSize:'8px', letterSpacing:'.4em' }} className="uppercase font-bold mb-1">Hydro-Lock Serums</p>
                <p className="font-black text-white" style={{ fontSize:'clamp(.95rem,3.2vw,1.3rem)' }}>The Core Collection</p>
              </div>
            </div>
            {/* Right top — height = (420 - 10) / 2 = 205 */}
            <div className="img-zoom relative" style={{ height:'clamp(95px,26vw,205px)' }}>
              <img src="/prod-jars.jpg" alt="Glass Vessels" className="w-full h-full object-cover" style={{ objectPosition:'center 40%' }} />
              <div className="absolute inset-0" style={{ background:'linear-gradient(to top,rgba(10,30,48,.8) 0%,transparent 60%)' }} />
              <div className="absolute bottom-3 left-3">
                <p className="font-black text-white" style={{ fontSize:'clamp(.8rem,2.8vw,1rem)' }}>Glass Vessels</p>
              </div>
            </div>
            {/* Right bottom — same height as top */}
            <div className="img-zoom relative" style={{ height:'clamp(95px,26vw,205px)' }}>
              <img src="/prod-tubes.jpg" alt="Face Wash" className="w-full h-full object-cover" style={{ objectPosition:'center 40%' }} />
              <div className="absolute inset-0" style={{ background:'linear-gradient(to top,rgba(10,30,48,.8) 0%,transparent 60%)' }} />
              <div className="absolute bottom-3 left-3">
                <p className="font-black text-white" style={{ fontSize:'clamp(.8rem,2.8vw,1rem)' }}>Face Wash</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          §7 — SCIENCE CALLOUT  (dark)
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-fade relative overflow-hidden safe-x text-center"
        style={{ background:'linear-gradient(160deg,#03090f 0%,#0a1e30 100%)', paddingTop:'clamp(4rem,10vw,6rem)', paddingBottom:'clamp(4rem,10vw,6rem)' }}>

        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage:'linear-gradient(rgba(168,209,231,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(168,209,231,.04) 1px,transparent 1px)',
          backgroundSize:'44px 44px' }} />
        <div className="absolute inset-0 hidden sm:flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black" style={{ fontSize:'clamp(5rem,22vw,18rem)', color:'rgba(168,209,231,.025)', letterSpacing:'-.05em' }}>HYDRO</span>
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div style={{ width:'20px', height:'1.5px', background:'rgba(168,209,231,.4)' }} />
            <span style={{ color:'#A8D1E7', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold">Proprietary Technology</span>
            <div style={{ width:'20px', height:'1.5px', background:'rgba(168,209,231,.4)' }} />
          </div>
          <h2 className="font-black text-white leading-none mb-2"
            style={{ fontSize:'clamp(2rem,9.5vw,7rem)', letterSpacing:'-.01em', textShadow:'0 4px 40px rgba(0,0,0,.5)' }}>
            THE HYDRO-LOCK
          </h2>
          <h2 className="font-black leading-none mb-7"
            style={{ fontSize:'clamp(2rem,9.5vw,7rem)', letterSpacing:'-.01em', color:'#A8D1E7', textShadow:'0 0 40px rgba(168,209,231,.3)' }}>
            MOLECULE.
          </h2>
          <p style={{ color:'rgba(255,255,255,.82)', fontSize:'clamp(13px,3.8vw,16px)', lineHeight:'1.9', maxWidth:'360px', margin:'0 auto 2.5rem', fontWeight:300 }}>
            Opens intercellular pathways. Delivers actives deeper than any standard formula in under{' '}
            <span style={{ color:'#A8D1E7', fontWeight:700 }}>30 seconds.</span>
          </p>
          <Link to="/science"
            className="inline-flex items-center justify-center font-black uppercase transition-colors duration-300"
            style={{ minHeight:'52px', padding:'0 2.5rem', background:'#A8D1E7', color:'#0a1e30', fontSize:'10px', letterSpacing:'.35em', textDecoration:'none' }}
            onMouseEnter={e=>(e.currentTarget.style.background='#fff')}
            onMouseLeave={e=>(e.currentTarget.style.background='#A8D1E7')}>
            Explore The Science →
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          §8 — FOOTER CTA  (white)
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-fade" style={{ background:'#fff' }}>
        <div className="safe-x" style={{ paddingTop:'clamp(3rem,8vw,5rem)', paddingBottom:'clamp(3rem,8vw,5rem)' }}>
          <div style={{ borderTop:'2px solid #000', paddingTop:'2rem' }}>
            <p style={{ color:'rgba(0,0,0,.32)', fontSize:'8px', letterSpacing:'.45em' }} className="uppercase font-bold mb-2">Ready to begin?</p>
            <h3 className="font-black text-black leading-none mb-7" style={{ fontSize:'clamp(1.5rem,5.8vw,3rem)', letterSpacing:'-.01em' }}>
              EXPERIENCE<br /><span style={{ color:'#336699' }}>THE DIFFERENCE.</span>
            </h3>
            <div className="flex flex-col sm:flex-row gap-3" style={{ maxWidth:'400px' }}>
              <Link to="/products"
                className="flex items-center justify-center font-black uppercase transition-colors duration-300 flex-1"
                style={{ minHeight:'52px', background:'#336699', color:'#fff', fontSize:'10px', letterSpacing:'.35em', textDecoration:'none' }}
                onMouseEnter={e=>(e.currentTarget.style.background='#1a3d5c')}
                onMouseLeave={e=>(e.currentTarget.style.background='#336699')}>
                View Collection
              </Link>
              <Link to="/contact"
                className="flex items-center justify-center font-black uppercase transition-all duration-300 flex-1"
                style={{ minHeight:'52px', border:'2px solid #000', color:'#000', fontSize:'10px', letterSpacing:'.35em', textDecoration:'none' }}
                onMouseEnter={e=>{ e.currentTarget.style.background='#000'; e.currentTarget.style.color='#fff' }}
                onMouseLeave={e=>{ e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#000' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}