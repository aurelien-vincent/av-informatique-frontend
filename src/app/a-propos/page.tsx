import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../styles/site-pages.module.css";

export const metadata: Metadata = {
  title: "À propos | AV Informatique",
  description:
    "Découvrez le parcours d’Aurélien Vincent, technicien informatique et développeur Full Stack dans le Var.",
};

const badges = [
  "20 ans d’expérience",
  "Développeur Full Stack",
  "RNCP Niv. 6",
  "Auto-entrepreneur",
];

const timeline = [
  {
    year: "2025",
    title: "Développeur Web & Mobile Full Stack",
    description: "La Capsule · RNCP Niv. 6 · Bac+3/4",
  },
  {
    year: "2022",
    title: "Création d’AV Informatique",
    description: "Auto-entrepreneur · dépannage, formation, conseil",
  },
  {
    year: "2011",
    title: "Technicien IT — Assomption Méditerranée",
    description: "Cogolin · gestion parc, réseau, site web",
  },
  {
    year: "2004",
    title: "BTS Informatique de Gestion",
    description: "Option Développement",
  },
];

export default function AProposPage() {
  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>Qui suis-je ?</h1>
      </header>

      <section className={styles.profile}>
        <div className={styles.avatar}>AV</div>

        <div>
          <h2>Aurélien Vincent</h2>
          <p>
            Technicien & Développeur Full Stack · Var
            <br />
            Passionné d’informatique depuis plus de 20 ans, j’aide particuliers
            et entreprises à résoudre leurs problèmes tech simplement, sans
            jargon.
          </p>

          <div className={styles.tags}>
            {badges.map((badge) => (
              <span key={badge} className={styles.tag}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.timeline}>
        <h2>Mon parcours</h2>

        <div className={styles.timelineList}>
          {timeline.map((item) => (
            <article
              key={`${item.year}-${item.title}`}
              className={styles.timelineItem}
            >
              <span className={styles.timelineDot}></span>
              <span className={styles.timelineYear}>{item.year}</span>

              <div className={styles.timelineContent}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaBox}>
        <div>
          <p>Envie de travailler avec moi ?</p>
          <strong>Je suis disponible pour vos projets IT.</strong>
        </div>

        <Link href="/contact" className={styles.button}>
          Me contacter
        </Link>
      </section>
    </div>
  );
}
