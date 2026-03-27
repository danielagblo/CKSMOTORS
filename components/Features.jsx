import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Clock, Award, Star } from 'lucide-react'

const features = [
  { icon: Shield, title: 'Secure & Insured', desc: 'Every vehicle in our fleet is comprehensively insured for your peace of mind.' },
  { icon: Clock, title: '24/7 Availability', desc: 'Round-the-clock support and real-time tracking for all logistics operations.' },
  { icon: Award, title: 'Expert Chauffeurs', desc: 'Professional, defensive-trained drivers dedicated to your safety and comfort.' },
  { icon: Star, title: 'Premium Selection', desc: 'Curated collection of the latest luxury and executive mobility solutions.' }
]

export default function Features() {
  return (
    <section style={{ padding: '100px 20px', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle background glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(227, 6, 19, 0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />
      
      <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
           <div className="text-gradient-gold" style={{ fontSize: 13, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 16 }}>Distinction in Motion</div>
           <h2 style={{ fontSize: 42, color: 'var(--text)', marginBottom: 20 }}>The CKS Standards</h2>
           <div style={{ width: 60, height: 3, background: 'var(--accent)', margin: '0 auto' }}></div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
          {features.map((f, i) => (
            <motion.div 
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="premium-glass glow-card"
              style={{ padding: 40, borderRadius: 24, textAlign: 'center', transition: 'transform 0.3s ease' }}
              whileHover={{ y: -10 }}
            >
              <div style={{ 
                width: 72, height: 72, borderRadius: 20, background: 'rgba(212, 175, 55, 0.05)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px',
                color: '#D4AF37', border: '1px solid rgba(212, 175, 55, 0.2)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
              }}>
                <f.icon size={32} />
              </div>
              <h3 style={{ fontSize: 22, marginBottom: 14, color: 'var(--text)', fontWeight: 700 }}>{f.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
