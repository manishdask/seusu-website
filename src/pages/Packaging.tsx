const items = [
  { num:'01', title:'Serum Dropper Bottles', sub:'Frosted Glass · 30ml',      color:'#A8D1E7', dark:'#0d3d6e', img:'/prod-serums.jpg',  pos:'center 30%',
    specs:[{l:'Material',v:'Frosted Borosilicate Glass'},{l:'Dispenser',v:'Glass Dropper'},{l:'Decoration',v:'Screen Print + Gold Foil'},{l:'Finish',v:'Acid-Etched Frost'}] },
  { num:'02', title:'Lotion Dispensers',      sub:'Frosted PETG · 50ml',       color:'#C0C0C0', dark:'#333', img:'/prod-lotions.jpg', pos:'center 35%',
    specs:[{l:'Material',v:'Frosted PETG / PET'},{l:'Pump',v:'Dip-Tube Press'},{l:'Output',v:'1.5ml per stroke'},{l:'Safety',v:'Clip-Lock Seal'}] },
  { num:'03', title:'Face Wash Tubes',        sub:'Soft-Touch PE · 150ml',     color:'#8FBC8F', dark:'#1b5e20', img:'/prod-tubes.jpg',   pos:'center 40%',
    specs:[{l:'Material',v:'5-Layer PE + EVOH'},{l:'Cap',v:'Flip-Top Closure'},{l:'Decoration',v:'Offset Gradient Print'},{l:'Finish',v:'Soft-Touch Matte'}] },
  { num:'04', title:'Premium Glass Vessels',  sub:'Chrome Lid · 30–50ml',      color:'#E88B4D', dark:'#7a3000', img:'/prod-jars.jpg',    pos:'center 35%',
    specs:[{l:'Material',v:'Grade A Frosted Glass'},{l:'Lid',v:'High-Gloss Silver Chrome'},{l:'Finish',v:'Soft-Touch Matte Frost'},{l:'Neck',v:'GCMI 53/400'}] },
  { num:'05', title:'Pump Bottle Range',      sub:'Frosted PET · Multi-volume', color:'#8E7CC3', dark:'#2e1f7a', img:'/prod-pumps.jpg',   pos:'center 35%',
    specs:[{l:'Material',v:'Frosted PET / PETG'},{l:'Pump',v:'Dip-Tube Press'},{l:'Decoration',v:'UV Print + Chrome Cap'},{l:'Finish',v:'Smooth Frost'}] },
  { num:'06', title:'Outer Box Packaging',    sub:'Kraft Paperboard · FSC',    color:'#336699', dark:'#0d2137', img:'/prod-boxes.jpg',   pos:'center 35%',
    specs:[{l:'Inner Wrap',v:'120gsm FSC Paper'},{l:'Outer Box',v:'350gsm White Kraft'},{l:'Finish',v:'Soft-Touch Matte + UV Spot'},{l:'Notes',v:'Sustainable sourcing'}] },
]

const colors = [
  { color:'#A8D1E7', name:'Hydration Sky',   product:'Hydration Core',  note:'Purity · Water · Balance' },
  { color:'#E88B4D', name:'Sunset Orange',   product:'Vitamin C Glow',  note:'Energy · Antioxidants · Morning' },
  { color:'#8E7CC3', name:'Lavender Indigo', product:'Night Repair',    note:'Calm · Sleep · Regeneration' },
  { color:'#8FBC8F', name:'Sage Green',      product:'Calming Cica',    note:'Nature · Healing · Sensitivity' },
  { color:'#C0C0C0', name:'Clinical Silver', product:'Peptide Firm',    note:'Science · Structure · High-tech' },
]

const STYLES = `
  .safe-x { padding-left:max(1rem,env(safe-area-inset-left)); padding-right:max(1rem,env(safe-area-inset-right)); }
  @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
  .pkg-card { transition: box-shadow .3s, transform .3s; }
  .pkg-card:hover { box-shadow: 0 16px 48px rgba(0,0,0,.12) !important; transform: translateY(-2px); }
`

export default function Packaging() {
  return (
    <div style={{ fontFamily:"'Josefin Sans',sans-serif", overflowX:'hidden' }}>
      <style>{STYLES}</style>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden"
        style={{ paddingTop:'clamp(5.5rem,14vw,7rem)', paddingBottom:'3rem', background:'linear-gradient(165deg,#03090f 0%,#0a1e30 50%,#091a2a 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'linear-gradient(rgba(168,209,231,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(168,209,231,.04) 1px,transparent 1px)', backgroundSize:'44px 44px' }} />
        <div className="relative z-10 safe-x">
          <div className="flex items-center gap-2.5 mb-4">
            <div style={{ width:'24px', height:'1.5px', background:'#A8D1E7' }} />
            <span style={{ color:'#A8D1E7', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold">Packaging</span>
          </div>
          <h1 className="font-black text-white leading-none mb-4"
            style={{ fontSize:'clamp(2.5rem,11vw,8.5rem)', letterSpacing:'-.01em', textShadow:'0 4px 40px rgba(0,0,0,.5)' }}>
            CRAFTED<br />
            <span style={{ color:'#A8D1E7', textShadow:'0 0 35px rgba(168,209,231,.3)' }}>TO IMPRESS.</span>
          </h1>
          <p style={{ color:'rgba(255,255,255,.85)', fontSize:'clamp(13px,3.8vw,16px)', lineHeight:'1.8', maxWidth:'360px' }}>
            Every material choice is intentional. The packaging reflects the science inside.
          </p>
        </div>
      </section>

      {/* ── PACKAGING CARDS ─
           Mobile  : 1 column
           sm (640): 2 columns
           lg (1024): 3 columns
      ── */}
      <section style={{ background:'#f7f8fa', padding:'2.5rem 0 2.5rem' }}>
        <div className="safe-x max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, i) => (
              <div key={i} className="pkg-card"
                style={{ background:'#fff', overflow:'hidden', boxShadow:'0 2px 14px rgba(0,0,0,.06)' }}>

                {/* photo — clear, no heavy overlay */}
                <div className="relative overflow-hidden" style={{ height:'clamp(190px,48vw,240px)' }}>
                  <div style={{ position:'absolute', top:0, left:0, right:0, height:'3px', background:item.color, zIndex:2 }} />
                  <img src={item.img} alt={item.title}
                    className="w-full h-full object-cover pkg-img transition-transform duration-700"
                    style={{ objectPosition:item.pos }} />
                  <div className="absolute top-3 left-4" style={{ zIndex:2 }}>
                    <span className="font-black" style={{ color:'rgba(255,255,255,.25)', fontSize:'2.8rem', lineHeight:1 }}>{item.num}</span>
                  </div>
                </div>

                {/* info */}
                <div className="px-4 pb-5 pt-3">
                  <h3 className="font-black text-black leading-tight mb-1 mt-1"
                    style={{ fontSize:'clamp(.9rem,3.2vw,1.05rem)', letterSpacing:'.02em' }}>
                    {item.title}
                  </h3>
                  <p className="uppercase font-bold mb-4"
                    style={{ color:item.dark, fontSize:'8px', letterSpacing:'.38em' }}>
                    {item.sub}
                  </p>
                  <div>
                    {item.specs.map(({ l, v }) => (
                      <div key={l} className="flex gap-3 py-2.5" style={{ borderBottom:'1px solid rgba(0,0,0,.05)' }}>
                        <span className="uppercase font-bold shrink-0"
                          style={{ color:'rgba(0,0,0,.28)', fontSize:'8px', letterSpacing:'.28em', width:'4.5rem' }}>{l}</span>
                        <span style={{ color:'rgba(0,0,0,.72)', fontSize:'12px' }} className="font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLOUR SYSTEM ─
           Full-width list rows — perfect on any phone width
      ── */}
      <section style={{ background:'#0a1e30', padding:'3rem 0 3.5rem' }}>
        <div className="safe-x max-w-7xl mx-auto">
          <div className="flex items-center gap-2.5 mb-2">
            <div style={{ width:'24px', height:'1.5px', background:'#A8D1E7' }} />
            <span style={{ color:'#A8D1E7', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold">Colour System</span>
          </div>
          <h2 className="font-black text-white leading-none mb-8"
            style={{ fontSize:'clamp(1.5rem,6.5vw,3.8rem)', letterSpacing:'-.01em' }}>
            EVERY COLOUR<br />
            <span style={{ color:'#A8D1E7' }}>MEANS SOMETHING.</span>
          </h2>

          {/* List — one row per color, works at 320px */}
          <div style={{ borderTop:'1px solid rgba(255,255,255,.07)' }}>
            {colors.map((c, i) => (
              <div key={i}
                className="flex items-center gap-4 group hover:bg-white/[.03] transition-colors duration-300"
                style={{ padding:'1rem 0', borderBottom:'1px solid rgba(255,255,255,.07)' }}>

                {/* swatch — fixed size, works on all screen widths */}
                <div className="shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ width:'clamp(44px,11vw,60px)', height:'clamp(44px,11vw,60px)', background:c.color, boxShadow:`0 4px 18px ${c.color}55`, flexShrink:0 }} />

                {/* text */}
                <div className="flex-1 min-w-0">
                  <p className="font-black text-white leading-tight"
                    style={{ fontSize:'clamp(.85rem,3.5vw,1.1rem)', letterSpacing:'.03em' }}>
                    {c.name}
                  </p>
                  <p className="font-bold uppercase"
                    style={{ color:c.color, fontSize:'8px', letterSpacing:'.32em', marginTop:'2px' }}>
                    {c.product}
                  </p>
                  <p style={{ color:'rgba(255,255,255,.48)', fontSize:'11px', marginTop:'2px' }} className="font-light">{c.note}</p>
                </div>

                {/* right accent — hidden on tiny screens */}
                <div className="hidden sm:block shrink-0"
                  style={{ width:'1.5rem', height:'1.5px', background:c.color, opacity:.4 }} />
              </div>
            ))}
          </div>

          {/* philosophy */}
          <div className="mt-8 p-5 sm:p-7"
            style={{ border:'1px solid rgba(255,255,255,.08)', background:'rgba(255,255,255,.02)' }}>
            <p style={{ color:'#A8D1E7', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold mb-3">Design Philosophy</p>
            <p style={{ color:'rgba(255,255,255,.82)', fontSize:'clamp(13px,3.8vw,15px)', lineHeight:'1.85' }}>
              Each colour communicates its formula's function before the consumer reads a word.
              Cool blues for hydration. Warm oranges for energy. Deep purples for night recovery.
              Science made visible.
            </p>
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY ── */}
      <section style={{ background:'#fff' }} className="safe-x py-12">
        <div style={{ borderTop:'2px solid #000', paddingTop:'2rem' }}>
          <p style={{ color:'rgba(0,0,0,.32)', fontSize:'8px', letterSpacing:'.45em' }} className="uppercase font-bold mb-2">Our Commitment</p>
          <h2 className="font-black text-black leading-none mb-8"
            style={{ fontSize:'clamp(1.4rem,5.5vw,2.8rem)', letterSpacing:'-.01em' }}>
            PREMIUM WITH<br /><span style={{ color:'#336699' }}>PURPOSE.</span>
          </h2>

          {/* 1-col mobile, 3-col sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon:'◈', title:'FSC Certified',    desc:'All paperboard from FSC-certified sustainable forests. Every outer box sourced responsibly.' },
              { icon:'◎', title:'Refillable Design', desc:'Premium glass vessels engineered for refill compatibility — reducing single-use waste.' },
              { icon:'◇', title:'Minimal Ink',       desc:'Screen print and UV spot processes minimise unnecessary coating on every unit.' },
            ].map((v,i)=>(
              <div key={i}>
                <div style={{ color:'#D2D2D2', fontSize:'1.4rem', marginBottom:'.65rem' }}>{v.icon}</div>
                <p className="font-black text-black uppercase mb-2" style={{ fontSize:'10px', letterSpacing:'.28em' }}>{v.title}</p>
                <p style={{ color:'rgba(0,0,0,.55)', fontSize:'clamp(12px,3.2vw,14px)', lineHeight:'1.75' }} className="font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}