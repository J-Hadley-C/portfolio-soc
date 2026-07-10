import { motion } from 'framer-motion'

const TOOLS = [
  { name: 'n8n', cat: 'Automatisation SOAR' },
  { name: 'VirusTotal / MISP / AbuseIPDB', cat: 'Threat Intelligence' },
  { name: 'Claude API (Anthropic)', cat: 'Analyse IA' },
  { name: 'Wazuh SIEM 4.12.0', cat: 'SIEM' },
  { name: 'Windows Server 2022', cat: 'OS / Active Directory' },
  { name: 'Kali Linux', cat: 'OS Attaquant' },
  { name: 'Metasploit / msfvenom', cat: 'Exploitation' },
  { name: 'Nmap', cat: 'Reconnaissance' },
  { name: 'Wireshark / tshark', cat: 'Analyse réseau' },
  { name: 'Impacket', cat: 'Post-Exploitation' },
  { name: 'Docker / WSL2', cat: 'Infrastructure' },
  { name: 'VirtualBox', cat: 'Virtualisation' },
  { name: 'MITRE ATT&CK', cat: 'Framework' },
  { name: 'PowerShell', cat: 'Scripting Windows' },
  { name: 'Bash', cat: 'Scripting Linux' },
]

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
        className="flex flex-wrap justify-center gap-6"
      >
        {TOOLS.map(t => (
          <motion.div
            key={t.name}
            variants={item}
            className="relative w-[220px] h-[220px] rounded-full border-[3px] border-accent bg-surface
              flex flex-col items-center justify-center text-center p-5 cursor-default
              transition-transform duration-300 hover:z-10 hover:scale-[1.08] hover:-rotate-2
              hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]"
          >
            <span className="font-display font-bold text-sm leading-tight text-zinc-100 mb-1 select-none">
              {t.name}
            </span>
            <span className="text-xs text-zinc-500 uppercase tracking-wide select-none">{t.cat}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
