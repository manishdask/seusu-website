import { useState } from 'react'

const STYLES = `
  @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
  .fu0 { animation: fadeUp .65s ease both }
  .fu1 { animation: fadeUp .65s .15s ease both }
  .fu2 { animation: fadeUp .65s .30s ease both }
  .safe-x { padding-left:max(1.25rem,env(safe-area-inset-left)); padding-right:max(1.25rem,env(safe-area-inset-right)); }

  /* form inputs — dark border, dark text, visible placeholder */
  .seusu-input {
    width:100%;
    border:2px solid #d0d0d0;
    padding:14px 16px;
    font-size:15px;
    color:#111111;
    background:#ffffff;
    outline:none;
    transition:border-color .25s, box-shadow .25s;
    font-family:'Josefin Sans',sans-serif;
    letter-spacing:.02em;
  }
  .seusu-input::placeholder { color:#999999; }
  .seusu-input:focus { border-color:#336699; box-shadow:0 0 0 3px rgba(51,102,153,.1); }
`

const details = [
  { l:'Company',   v:'Biotech Solutions Private Limited' },
  { l:'Location',  v:'Kathmandu, Nepal' },
  { l:'Brand',     v:'SEUSU SKIN' },
  { l:'Enquiries', v:'Brand · Partnership · Press' },
]

const socials = ['Instagram','TikTok','Facebook','LinkedIn']

export default function Contact() {
  const [sent, setSent] = useState(false)

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
            <span style={{ color:'#A8D1E7', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold">Contact</span>
          </div>
          <h1 className="fu1 font-black text-white leading-none mb-4"
            style={{ fontSize:'clamp(2.6rem,11vw,8.5rem)', letterSpacing:'-.01em', textShadow:'0 4px 40px rgba(0,0,0,.5)' }}>
            GET IN<br />
            <span style={{ color:'#A8D1E7', textShadow:'0 0 35px rgba(168,209,231,.35)' }}>TOUCH.</span>
          </h1>
          <p className="fu2" style={{ color:'rgba(255,255,255,.92)', fontSize:'clamp(13px,3.8vw,16px)', lineHeight:'1.85', maxWidth:'360px' }}>
            Questions about formulations, partnership enquiries, or press requests — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ── COMPANY DETAILS — dark background so everything pops ── */}
      <section style={{ background:'#0a1e30' }} className="safe-x py-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2.5 mb-5">
            <div style={{ width:'24px', height:'1.5px', background:'#A8D1E7' }} />
            <span style={{ color:'#A8D1E7', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold">Our Details</span>
          </div>

          {/* Detail rows */}
          <div className="mb-5" style={{ border:'1px solid rgba(255,255,255,.1)' }}>
            {details.map(({ l, v }, i) => (
              <div key={l} className="flex gap-4 px-5 py-4"
                style={{ borderBottom: i < details.length - 1 ? '1px solid rgba(255,255,255,.08)' : 'none' }}>
                <span className="font-bold uppercase shrink-0"
                  style={{ color:'rgba(168,209,231,.7)', fontSize:'8px', letterSpacing:'.35em', width:'4.5rem', paddingTop:'2px' }}>
                  {l}
                </span>
                <span className="font-bold" style={{ color:'#ffffff', fontSize:'clamp(13px,3.5vw,14px)' }}>{v}</span>
              </div>
            ))}
          </div>

          {/* About blurb */}
          <div className="mb-6 p-5" style={{ borderLeft:'3px solid #A8D1E7', background:'rgba(168,209,231,.06)' }}>
            <p style={{ color:'rgba(255,255,255,.82)', fontSize:'clamp(13px,3.5vw,15px)', lineHeight:'1.9' }}>
              SEUSU SKIN is the flagship skincare brand of Biotech Solutions Private Limited, a biotech company based in Kathmandu, Nepal focused on science-driven personal care formulations.
            </p>
          </div>

          {/* Social links */}
          <div>
            <p style={{ color:'rgba(168,209,231,.6)', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold mb-3">Follow Us</p>
            <div className="grid grid-cols-2 gap-2">
              {socials.map(s => (
                <a key={s} href="#"
                  className="flex items-center justify-center font-black uppercase transition-all"
                  style={{ minHeight:'48px', border:'1.5px solid rgba(255,255,255,.2)', color:'rgba(255,255,255,.8)', fontSize:'9px', letterSpacing:'.32em', textDecoration:'none' }}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor='#A8D1E7'; e.currentTarget.style.color='#A8D1E7'; e.currentTarget.style.background='rgba(168,209,231,.08)' }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(255,255,255,.2)'; e.currentTarget.style.color='rgba(255,255,255,.8)'; e.currentTarget.style.background='transparent' }}>
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM — light grey bg so white inputs stand out clearly ── */}
      <section style={{ background:'#f0f2f5' }} className="safe-x py-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2.5 mb-2">
            <div style={{ width:'24px', height:'1.5px', background:'#336699' }} />
            <span style={{ color:'#336699', fontSize:'8px', letterSpacing:'.42em' }} className="uppercase font-bold">Send a Message</span>
          </div>
          <h2 className="font-black text-black leading-none mb-6"
            style={{ fontSize:'clamp(1.5rem,5.5vw,2.6rem)', letterSpacing:'-.01em' }}>
            WRITE TO<br /><span style={{ color:'#336699' }}>US.</span>
          </h2>

          {sent ? (
            /* Success state */
            <div className="py-12 text-center" style={{ background:'#fff', border:'2px solid #336699' }}>
              <div style={{ width:'52px', height:'52px', borderRadius:'50%', background:'#336699', margin:'0 auto 1rem', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <span style={{ color:'#fff', fontSize:'22px' }}>✓</span>
              </div>
              <h3 className="font-black text-black mb-2" style={{ fontSize:'clamp(1.1rem,4vw,1.4rem)' }}>Message Sent</h3>
              <p style={{ color:'#555555', fontSize:'14px' }}>We'll respond within 1–2 business days.</p>
            </div>
          ) : (
            <div style={{ background:'#ffffff', padding:'clamp(1.25rem,5vw,2rem)', boxShadow:'0 4px 24px rgba(0,0,0,.08)' }}>
              <div className="space-y-5">

                {/* Full Name */}
                <div>
                  <label style={{ color:'#222222', fontSize:'9px', letterSpacing:'.42em', display:'block', marginBottom:'8px' }} className="uppercase font-black">
                    Full Name
                  </label>
                  <input type="text" placeholder="Your full name" className="seusu-input" />
                </div>

                {/* Email */}
                <div>
                  <label style={{ color:'#222222', fontSize:'9px', letterSpacing:'.42em', display:'block', marginBottom:'8px' }} className="uppercase font-black">
                    Email Address
                  </label>
                  <input type="email" placeholder="your@email.com" className="seusu-input" />
                </div>

                {/* Subject */}
                <div>
                  <label style={{ color:'#222222', fontSize:'9px', letterSpacing:'.42em', display:'block', marginBottom:'8px' }} className="uppercase font-black">
                    Subject
                  </label>
                  <input type="text" placeholder="Brand enquiry / Press / Partnership / Other" className="seusu-input" />
                </div>

                {/* Message */}
                <div>
                  <label style={{ color:'#222222', fontSize:'9px', letterSpacing:'.42em', display:'block', marginBottom:'8px' }} className="uppercase font-black">
                    Message
                  </label>
                  <textarea rows={5} placeholder="Tell us what you're looking for..."
                    className="seusu-input" style={{ resize:'none' }} />
                </div>

                {/* Submit */}
                <button
                  onClick={() => setSent(true)}
                  className="w-full font-black uppercase transition-colors"
                  style={{ minHeight:'52px', background:'#336699', color:'#ffffff', fontSize:'10px', letterSpacing:'.35em', border:'none', cursor:'pointer' }}
                  onMouseEnter={e=>(e.currentTarget.style.background='#1a3d5c')}
                  onMouseLeave={e=>(e.currentTarget.style.background='#336699')}>
                  Send Message
                </button>

                <p className="text-center font-bold"
                  style={{ color:'#888888', fontSize:'11px', letterSpacing:'.2em' }}>
                  We typically respond within 1–2 business days.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}