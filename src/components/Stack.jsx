import { motion } from 'framer-motion'

const TOOLS = [
  { name: 'Wazuh SIEM 4.12.0', cat: 'SIEM', accent: 'accent' },
  { name: 'Windows Server 2022', cat: 'OS / Active Directory', accent: 'info' },
  { name: 'Kali Linux', cat: 'OS Attaquant', accent: 'critical' },
  { name: 'Metasploit / msfvenom', cat: 'Exploitation', accent: 'critical' },
  { name: 'Nmap', cat: 'Reconnaissance', accent: 'high' },
  { name: 'Wireshark / tshark', cat: 'Analyse réseau', accent: 'high' },
  { name: 'Impacket', cat: 'Post-Exploitation', accent: 'medium' },
  { name: 'Docker / WSL2', cat: 'Infrastructure', accent: 'info' },
  { name: 'VirtualBox', cat: 'Virtualisation', accent: 'info' },
  { name: 'MITRE ATT&CK', cat: 'Framework', accent: 'none' },
  { name: 'PowerShell', cat: 'Scripting Windows', accent: 'info' },
  { name: 'Bash', cat: 'Scripting Linux', accent: 'accent' },
]

const COLOR = {
  accent: { border: 'border-accent/20', dot: 'bg-accent', name: 'text-accent' },
  info: { border: 'border-info/20', dot: 'bg-info', name: 'text-info' },
  critical: { border: 'border-critical/20', dot: 'bg-critical', name: 'text-critical' },
  high: { border: 'border-high/20', dot: 'bg-high', name: 'text-high' },
  medium: { border: 'border-medium/20', dot: 'bg-medium', name: 'text-medium' },
  none: { border: 'border-divider', dot: 'bg-zinc-600', name: 'text-zinc-300' },
}

const container = {
  whileInView: { transition: { staggerChildren: 0.05 } },
  viewport: { once: true },
}
const item = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.35 },
}

export default function Stack() {
  return (
    <section id="stack" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">
          Stack technique
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-zinc-100 uppercase">
          Outils du lab
        </h2>
        <p className="text-zinc-500 mt-3 max-w-md">
          Utilisés en conditions réelles, pas en simulation.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
      >
        {TOOLS.map(t => {
          const c = COLOR[t.accent]
          return (
            <motion.div
              key={t.name}
              variants={item}
              className={`bg-surface border ${c.border} p-4
                hover:-translate-y-0.5 transition-transform duration-200 cursor-default`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
                <span className={`font-display font-semibold text-base leading-tight ${c.name}`}>
                  {t.name}
                </span>
              </div>
              <p className="text-xs text-zinc-600 uppercase tracking-wide pl-4">{t.cat}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
