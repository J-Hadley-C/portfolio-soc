import { motion } from 'framer-motion'

const ETAPES = [
  { titre: 'Formation initiale', texte: 'Développement logiciel' },
  { titre: 'Reconversion', texte: 'Cybersécurité SOC' },
  { titre: 'Lab monté', texte: 'VirtualBox + Wazuh + AD + Kali' },
  { titre: 'Statut', texte: 'Disponible — 1er poste SOC Junior' },
]

// Dégradé violet -> cyan appliqué étape par étape (0 = violet, dernière = cyan)
const COULEURS = ['#8b5cf6', '#7a6ee0', '#4aa3d8', '#00e5ff']

const item = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export default function Parcours() {
  return (
    <section id="parcours" className="py-24 px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">
          Parcours
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-zinc-100 uppercase">
          De développeur à SOC
        </h2>
      </motion.div>

      <div className="relative">
        {ETAPES.map((etape, i) => (
          <motion.div
            key={etape.titre}
            variants={item}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="relative bg-surface border border-divider p-6 mb-12 last:mb-0"
            style={{ borderTopColor: COULEURS[i], borderTopWidth: '3px' }}
          >
            {i > 0 && (
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-8 w-0 h-0"
                style={{
                  borderLeft: '14px solid transparent',
                  borderRight: '14px solid transparent',
                  borderBottom: `14px solid ${COULEURS[i]}`,
                }}
              />
            )}
            <h3 className="font-display font-semibold text-lg text-zinc-100 mb-1">
              {etape.titre}
            </h3>
            <p className="text-sm text-zinc-400">{etape.texte}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
