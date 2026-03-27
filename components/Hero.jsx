import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { getCldImageUrl } from './CldOptimizedImage'
import React from 'react'
import IMAGES from '../data/images'
import { Shield, MapPin, PhoneCall, Clock } from 'lucide-react'

const heading = { hidden: { x: -40, opacity: 0 }, show: { x: 0, opacity: 1 } }

export default function Hero() {
    const router = useRouter()
    const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' && window.innerWidth <= 768)
    const videoRef = React.useRef(null)
    const [videoError, setVideoError] = React.useState(false)

    // Generate Cloudinary URL for CSS background
    const heroBgUrl = IMAGES.hero.startsWith('http') || IMAGES.hero.startsWith('/')
        ? IMAGES.hero
        : getCldImageUrl({
            src: IMAGES.hero,
            width: 1920,
            height: 1080,
            crop: 'fill',
            gravity: 'center'
        });

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    React.useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(err => {
                if (err && err.name === 'AbortError') return
                setVideoError(true)
            })
        }
    }, [])

    return (
        <section style={{
            position: 'relative',
            minHeight: isMobile ? '80vh' : '90vh',
            padding: isMobile ? '100px 0 80px' : '0',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            background: '#000'
        }}>
            {/* Background elements */}
            {!videoError ? (
                <motion.video
                    ref={videoRef} autoPlay loop muted playsInline preload="auto"
                    onError={() => setVideoError(true)}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1.2 }}
                    transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse' }}
                    style={{
                        position: 'absolute', inset: 0, width: '100%', height: '100%',
                        objectFit: 'cover', zIndex: 0, filter: 'brightness(0.6) contrast(1.1)'
                    }}
                >
                    <source src="https://cdn.coverr.co/videos/coverr-driving-luxury-car-at-night-1959/1080p.mp4" type="video/mp4" />
                </motion.video>
            ) : (
                <div style={{ position: 'absolute', inset: 0, background: `url(${heroBgUrl}) center/cover`, zIndex: 0, filter: 'brightness(0.6)' }} />
            )}

            {/* Overlays for depth */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)', zIndex: 1 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 50%, rgba(227, 6, 19, 0.1), transparent 40%)', zIndex: 1 }} />

            <div style={{ maxWidth: 1400, width: '100%', margin: '0 auto', padding: isMobile ? '0 24px' : '0 64px', position: 'relative', zIndex: 2, display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: 64 }}>
                
                {/* Content Side */}
                <div style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
                    <motion.div variants={heading} initial="hidden" animate="show" transition={{ duration: 0.8 }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: 99, color: '#D4AF37', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24 }}>
                           <Shield size={14} /> The Gold Standard of Mobility
                        </div>
                        <h1 style={{ fontSize: isMobile ? 42 : 72, fontWeight: 900, lineHeight: 1.05, marginBottom: 24, color: '#fff' }}>
                            Precision Logistics. <br />
                            <span className="text-gradient-gold">Absolute Luxury.</span>
                        </h1>
                        <p style={{ fontSize: isMobile ? 16 : 20, color: 'rgba(255,255,255,0.8)', marginBottom: 40, maxWidth: 600, lineHeight: 1.6 }}>
                            Redefining transport logistics and executive mobility. Discover a curated selection of premium vehicles, driven by professional chauffeurs to deliver unparalleled safety and comfort.
                        </p>
                        
                        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 16, justifyContent: isMobile ? 'center' : 'flex-start' }}>
                            <button className="primary" onClick={() => router.push('/models')} style={{ padding: '18px 40px', fontSize: 16, borderRadius: 99, border: 0, fontWeight: 800, cursor: 'pointer' }}>
                                Explore The Fleet
                            </button>
                            <button className="ghost" onClick={() => router.push('/contact')} style={{ padding: '18px 40px', fontSize: 16, borderRadius: 99, fontWeight: 800, cursor: 'pointer' }}>
                                Reserve Consultation
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Visual/Feature Side */}
                {!isMobile && (
                    <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 1 }} style={{ flex: 0.8, display: 'flex', justifyContent: 'flex-end' }}>
                        <div className="premium-glass float-animation" style={{ padding: 40, borderRadius: 32, width: '100%', maxWidth: 400, border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ marginBottom: 32 }}>
                                <div style={{ fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Available Now</div>
                                <div style={{ fontSize: 24, fontWeight: 800, color: '#fff' }}>Executive Booking</div>
                            </div>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                                {[
                                    { icon: MapPin, text: 'Nationwide Coverage', sub: 'Across Ghana' },
                                    { icon: Clock, text: 'Real-time Tracking', sub: 'GPS Integrated' },
                                    { icon: PhoneCall, text: '24/7 VIP Support', sub: 'Dedicated Staff' }
                                ].map((item, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                                        <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37' }}>
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{item.text}</div>
                                            <div style={{ fontSize: 12, color: 'var(--muted)' }}>{item.sub}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div style={{ marginTop: 40, padding: 20, background: 'rgba(255,255,255,0.03)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ fontSize: 11, color: '#D4AF37', fontWeight: 800, textTransform: 'uppercase', marginBottom: 4 }}>Current Status</div>
                                <div style={{ fontSize: 14, color: '#fff', fontWeight: 600 }}>Fleet Available for Reservation</div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Decorative SVG */}
            <svg style={{ position: 'absolute', right: -100, bottom: -100, opacity: 0.05, pointerEvents: 'none' }} width="600" height="600" viewBox="0 0 600 600">
                <circle cx="300" cy="300" r="250" stroke="url(#g1)" strokeWidth="40" fill="none" />
                <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                        <stop offset="0%" stopColor="#E30613" />
                        <stop offset="100%" stopColor="#D4AF37" />
                    </linearGradient>
                </defs>
            </svg>
        </section>
    )
}