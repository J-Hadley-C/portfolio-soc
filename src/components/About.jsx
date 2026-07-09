import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
})

const KEY_POINTS = [
  { label: 'Formation initiale', value: 'Développement logiciel' },
  { label: 'Reconversion', value: 'Cybersécurité SOC' },
  { label: 'Lab monté', value: 'VirtualBox + Wazuh + AD + Kali' },
  { label: 'Statut', value: 'Disponible — 1er poste SOC Junior' },
  { label: 'Email', value: 'jhadleyc@mail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/hadley-chery' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div {...fadeUp()} className="mb-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">
          À propos
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-zinc-100 uppercase">
          Qui suis-je
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Text — 3 columns */}
        <motion.div {...fadeUp(0.1)} className="lg:col-span-3 space-y-5">
          <p className="text-zinc-300 leading-relaxed text-lg">
            Développeur de formation, j'ai choisi de me reconvertir vers la{' '}
            <strong className="text-zinc-100 font-semibold">cybersécurité SOC</strong> — attiré
            par la détection de menaces, l'investigation d'incidents et la défense des systèmes.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Pour valider mes compétences de manière concrète, j'ai monté un{' '}
            <strong className="text-zinc-300 font-medium">lab SOC complet de A à Z</strong> :{' '}
            VirtualBox, Wazuh 4.12.0 en Docker/WSL2, un Active Directory Windows Server 2022 et
            Kali Linux comme machine attaquante sur un réseau isolé.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Dans ce lab, je reproduis des techniques d'attaque réelles référencées dans le
            framework MITRE ATT&CK, je construis les règles de détection Wazuh, et je prouve que
            les alertes se déclenchent — de bout en bout, en conditions réelles.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Je cherche un{' '}
            <span className="text-accent font-semibold">premier poste de SOC Analyst Junior</span>{' '}
            pour continuer à apprendre au contact d'une équipe Blue Team.
          </p>

          <div className="flex flex-wrap gap-3 pt-3">
            <a
              href="https://www.linkedin.com/in/hadley-chery/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm border border-divider text-zinc-400 px-4 py-2
                hover:border-accent hover:text-accent transition-colors duration-200"
            >
              LinkedIn →
            </a>
            <a
              href="mailto:jhadleyc@mail.com"
              className="text-sm border border-divider text-zinc-400 px-4 py-2
                hover:border-accent hover:text-accent transition-colors duration-200"
            >
              jhadleyc@mail.com →
            </a>
          </div>
        </motion.div>

        {/* Key points card — 2 columns */}
        <motion.div {...fadeUp(0.2)} className="lg:col-span-2">
          <div className="bg-surface border border-divider divide-y divide-divider">
            {KEY_POINTS.map(kp => (
              <div key={kp.label} className="px-5 py-4">
                <p className="text-xs uppercase tracking-wider text-zinc-600 mb-1">{kp.label}</p>
                <p className="text-sm text-zinc-200 font-medium">{kp.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
