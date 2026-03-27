import React, { useState, useEffect } from 'react'
import { ShieldCheck, Award } from 'lucide-react'

function TrustBadgesWrapper() {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        setIsMobile(window.innerWidth <= 768)
        const handleResize = () => setIsMobile(window.innerWidth <= 768)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    
    return <TrustBadges isMobile={isMobile} />
}

function TrustBadges({ isMobile }) {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? 16 : 48, alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <ShieldCheck size={24} color="#D4AF37" style={{ opacity: 0.8 }} />
          <div>
              <div style={{ color: '#fff', fontSize: 14, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>ISO 9001:2015</div>
              <div style={{ color: 'var(--muted)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Certified Service</div>
          </div>
        </div>
        
        <div style={{ width: 1, height: 30, background: 'var(--glass-border)', display: isMobile ? 'none' : 'block' }}></div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Award size={24} color="#D4AF37" style={{ opacity: 0.8 }} />
          <div>
              <div style={{ color: '#fff', fontSize: 14, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Elite EV Fleet</div>
              <div style={{ color: 'var(--muted)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Premium Mobility</div>
          </div>
        </div>
      </div>
    )
}

export default TrustBadgesWrapper;
