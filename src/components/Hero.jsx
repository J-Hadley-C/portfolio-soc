import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ROLES = [
  'SOC Analyst Junior',
  'Threat Detection',
  'Incident Response',
  'SIEM Engineering',
]

function Typewriter({ words }) {
  const [text, setText] = useState(words[0])
  const [wIdx, setWIdx] = useState(0)
  const [cIdx, setCIdx] = useState(words[0].length)
  const [deleting, setDeleting] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    const word = words[wIdx % words.length]
    const delay = deleting ? 40 : 90
    timer.current = setTimeout(() => {
      if (!deleting) {
        if (cIdx < word.length) {
          setText(word.slice(0, cIdx + 1))
          setCIdx(c => c + 1)
        } else {
          setTimeout(() => setDeleting(true), 2000)
        }
      } else {
        if (cIdx > 0) {
          setText(word.slice(0, cIdx - 1))
          setCIdx(c => c - 1)
        } else {
          setDeleting(false)
          setWIdx(w => w + 1)
        }
      }
    }, delay)
    return () => clearTimeout(timer.current)
  }, [cIdx, deleting, wIdx, words])

  return (
    <span>
      {text}
      <span className="animate-blink text-accent ml-0.5">|</span>
    </span>
  )
}

const STATS = [
  { label: 'Agents Wazuh', value: '4 actifs' },
  { label: 'Alertes prouvées', value: '10+' },
  { label: 'SIEM', value: 'Wazuh 4.12' },
  { label: 'Disponibilité', value: 'Immédiate' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-grid">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #0a2a33 55%, #0a0a0f 100%)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(0,229,255,0.06) 0%, transparent 65%)' }}
      />
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 pt-20 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Label */}
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500 mb-5">
            Portfolio — Cybersécurité SOC
          </p>

          {/* Name — Poppins ExtraBold, the only place we spend our boldness */}
          <h1
            className="font-display font-extrabold uppercase text-hero leading-none mb-4"
            style={{ letterSpacing: '-0.01em' }}
          >
            <span className="text-zinc-100">CHERY</span>
            {' '}
            <span className="text-accent name-glow">Jean-Hadley</span>
          </h1>

          {/* Role — typewriter, no decorative prompts */}
          <p className="font-display font-bold text-hero-sub text-zinc-300 mb-6">
            <Typewriter words={ROLES} />
          </p>

          {/* Subtitle */}
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
            Développeur en reconversion cybersécurité. Lab SOC complet monté de A à Z —
            Wazuh 4.12, Active Directory, Kali. Détection de menaces prouvée, cas par cas.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-accent text-bg text-sm font-semibold px-7 py-3
                hover:bg-accent/90 active:scale-95 transition-all duration-150"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="border border-accent text-accent text-sm font-semibold px-7 py-3
                hover:bg-accent-dim active:scale-95 transition-all duration-150"
            >
              Me contacter
            </a>
            <a
              href="/CV-CHERY-Jean-Hadley-SOC-Analyst.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-divider text-zinc-300 text-sm font-semibold px-7 py-3
                hover:border-accent hover:text-accent active:scale-95 transition-all duration-150"
            >
              Voir mon CV
            </a>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-divider grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {STATS.map(s => (
            <div key={s.label}>
              <p className="font-display font-bold text-2xl text-zinc-100">{s.value}</p>
              <p className="text-xs text-zinc-500 mt-0.5 uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-accent/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}
