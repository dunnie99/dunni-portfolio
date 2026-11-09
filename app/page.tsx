import Image from 'next/image';
import image1 from '../image1.jpeg';
import image2 from '../image2.jpeg';
import ProjectCard from './project-card';

const focusAreas = [
  { number: '01', title: 'Build', detail: 'Smart contracts & dApps' },
  { number: '02', title: 'Test', detail: 'Quality, workflows & edge cases' },
  { number: '03', title: 'Secure', detail: 'Cybersecurity & threat thinking' },
  { number: '04', title: 'Explain', detail: 'Technical writing & documentation' },
];

const projects = [
  {
    id: '01',
    label: 'SECURITY / WEB3',
    status: 'IN DEVELOPMENT',
    ecosystem: 'STELLAR ECOSYSTEM',
    title: 'AgentShield',
    description:
      'A transaction-security concept exploring risk analysis before signing. Designed as a standalone wallet with a possible extension layer for existing wallets, beginning on Stellar.',
    tags: ['Stellar', 'Wallet security', 'Product architecture'],
    accent: 'featured',
  },
  {
    id: '02',
    label: 'SECURE STORAGE / WEB3',
    status: 'PRIZE WINNING PROJECT',
    ecosystem: 'NAVH • CONSENSYS',
    title: 'COFFER',
    description:
      'Developed a platform for secure media sharing using advanced data encryption. Applied Data Protection principles to ensure user sovereignty over sensitive information.',
    tags: ['Encryption', 'Data protection', 'Secure sharing'],
    accent: 'stellar',
  },
  {
    id: '03',
    label: 'EVENT TICKETING / WEB3',
    status: 'PROJECT',
    ecosystem: 'SOMNIA PROTOCOL',
    title: 'TRUCE',
    description:
      'Utilized Factory Smart Contract patterns (OOP logic) to eliminate intermediaries and reduce fraud risk. Implemented secure financial transaction logic to prevent ticket duplication and unauthorized access.',
    tags: ['Factory contracts', 'Smart contracts', 'Ticket security'],
    accent: 'nest',
  },
  {
    id: '04',
    label: 'SMART CONTRACTS',
    status: 'PROJECT',
    ecosystem: 'ETHEREUM / EVM',
    title: 'TokenVoting',
    description:
      'An on-chain voting project exploring token-based participation and transparent proposal outcomes through smart contracts.',
    tags: ['Solidity', 'Smart contracts', 'Governance'],
    accent: 'vote',
  },
  {
    id: '05',
    label: 'PRODUCT QUALITY',
    status: 'PROFESSIONAL WORK',
    ecosystem: 'AUDITTRAIL / SAFEOPS',
    title: 'Product QA & Assurance',
    description:
      'Testing product workflows across compliance and ESG features: validating behaviour, identifying defects, documenting findings and suggesting practical improvements.',
    tags: ['Manual QA', 'Bug reporting', 'ESG workflows'],
    accent: 'qa',
  },
];

const skills = [
  { group: 'DEVELOPMENT', text: 'Solidity · Cairo · JavaScript · TypeScript · Python · Next.js' },
  { group: 'WEB3 & TOOLS', text: 'Stellar · EVM · OpenZeppelin · Foundry · Hardhat · ethers.js · Scarb' },
  { group: 'QUALITY & SECURITY', text: 'Manual QA · Functional testing · Bug documentation · Application security fundamentals · Data protection' },
  { group: 'CURRENT STUDIES', text: 'Programming with Python · Data Protection & Cybersecurity · OOP & Functional Programming · Operating Systems · Networks & Distributed Systems' },
];

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Oladunni Rachael home">
          ROAR<span>.</span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Selected work</a>
          <a href="#skills">Toolkit</a>
          <a href="#contact" className="nav-contact">
            Let&apos;s talk <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> DEVELOPER · SECURITY MINDED · ALWAYS LEARNING
            </p>
            <h1>
              Building for the
              <br />
              <em>decentralised</em> world.
            </h1>
            <p className="hero-intro">
              I&apos;m Oladunni Rachael — a blockchain developer and cybersecurity student interested in
              building dependable products, understanding how they fail, and making them safer.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore my work <span>↘</span>
              </a>
              <a className="text-link" href="#contact">
                Get in touch <span>↗</span>
              </a>
            </div>
          </div>

          <div className="hero-art">
            <Image
              src={image2}
              alt="Oladunni Rachael smiling in a burgundy blazer"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 42vw"
              className="hero-image"
            />
            <span className="hero-image-caption">OLADUNNI RACHAEL · LAGOS, NIGERIA</span>
          </div>

          <div className="hero-foot">
            <span>LAGOS, NIGERIA</span>
            <span>BLOCKCHAIN · CYBERSECURITY · QA</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="intro-band">
          <p>Curiosity brought me to code. Security keeps me asking better questions.</p>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-kicker">
            <span>01</span> / A LITTLE ABOUT ME
          </div>
          <div className="about-grid">
            <h2>
              Different perspectives.
              <br />
              <em>One thoughtful</em> builder.
            </h2>
            <div className="about-portrait">
              <Image
                src={image1}
                alt="Portrait of Oladunni Rachael"
                fill
                sizes="(max-width: 900px) 45vw, 22vw"
              />
            </div>
            <div className="about-body">
              <p>
                I work across blockchain development, software quality assurance and technical
                communication. My experience spans smart contracts, Web3 applications and hands-on
                product testing.
              </p>
              <p>
                Now studying cybersecurity, I&apos;m growing my understanding of secure systems — from
                application behaviour and networks to data protection and operating systems. I enjoy
                the space where building, testing and security meet.
              </p>
              <a className="under-link" href="mailto:oluwadunnirachael@gmail.com">
                Say hello <span>↗</span>
              </a>
            </div>
          </div>

          <div className="focus-row">
            {focusAreas.map((item) => (
              <div key={item.number}>
                <span className="focus-no">{item.number}</span>
                <strong>{item.title}</strong>
                <small>{item.detail}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-wrap">
            <div className="section-kicker">
              <span>02</span> / SELECTED WORK
            </div>
            <div className="work-heading">
              <h2>
                Projects with a
                <br />
                <em>purpose.</em>
              </h2>
              <p>
                A selection of experiments and builds across Web3, security and product quality. More
                details and repositories can be added as each project is published.
              </p>
            </div>

            <div className="project-list">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="toolkit section-wrap" id="skills">
          <div className="section-kicker">
            <span>03</span> / TOOLKIT & LEARNING
          </div>
          <div className="toolkit-grid">
            <h2>
              What I work
              <br />
              <em>with.</em>
            </h2>
            <div className="toolkit-content">
              {skills.map((skill) => (
                <div key={skill.group} className="skill-group">
                  <h3>{skill.group}</h3>
                  <p>{skill.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="experience">
          <div className="section-wrap experience-inner">
            <div className="section-kicker">
              <span>04</span> / HOW I CONTRIBUTE
            </div>
            <div className="experience-grid">
              <div>
                <p className="eyebrow">MY APPROACH</p>
                <h2>
                  Make it work.
                  <br />
                  <em>Make it reliable.</em>
                </h2>
              </div>
              <div className="experience-copy">
                <p>
                  <b>Blockchain development</b>
                  <br />
                  Building and exploring smart-contract-powered applications, with a growing focus on
                  Stellar and secure transaction experiences.
                </p>
                <p>
                  <b>Quality assurance</b>
                  <br />
                  Approaching products from a user&apos;s perspective, checking expected behaviour,
                  probing edge cases and communicating issues clearly.
                </p>
                <p>
                  <b>Technical communication</b>
                  <br />
                  Turning technical ideas, implementation details and testing observations into
                  documentation people can act on.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="section-kicker">
            <span>05</span> / CONTACT
          </div>
          <p className="eyebrow">HAVE A PROJECT OR AN IDEA?</p>
          <h2>
            Let&apos;s build something
            <br />
            <em>considered.</em>
          </h2>
          <a className="contact-email" href="mailto:oluwadunnirachael@gmail.com">
            oluwadunnirachael@gmail.com <span>↗</span>
          </a>
          <div className="social-links">
            <a href="https://github.com/dunnie99" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/oluwadunnirachael/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href="https://x.com/Dunnieeee_" target="_blank" rel="noreferrer">
              X / Twitter ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="wordmark" href="#home">
          ROAR<span>.</span>
        </a>
        <span>
          DESIGNED WITH INTENTION · © {new Date().getFullYear()} OLADUNNI RACHAEL
        </span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}
