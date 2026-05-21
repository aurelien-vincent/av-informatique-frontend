import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../styles/site-pages.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faVideo,
  faHardDrive,
  faGlobe,
  faGraduationCap,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Réalisations | AV Informatique",
  description:
    "Exemples de missions réalisées : réseau Wi-Fi, vidéosurveillance, récupération de données, site web et formation.",
};

const projects = [
  {
    icon: faWifi,
    title: "Installation réseau",
    description:
      "Mise en place réseau Wi-Fi maillé pour maison de vacances — 4 points d’accès, 15+ appareils.",
    tags: ["Réseau", "Wi-Fi"],
  },
  {
    icon: faVideo,
    title: "Vidéosurveillance",
    description:
      "Installation 4 caméras IP + NVR avec accès smartphone à distance pour un commerce.",
    tags: ["Caméras IP", "NVR"],
  },
  {
    icon: faHardDrive,
    title: "Récupération données",
    description:
      "Récupération complète de photos et documents sur disque dur défaillant.",
    tags: ["HDD", "Données"],
  },
  {
    icon: faGlobe,
    title: "Site web — Kidsweek",
    description:
      "Application mobile de gestion d’emploi du temps — React Native, Node.js, MongoDB.",
    tags: ["React Native", "Node.js"],
  },
  {
    icon: faGraduationCap,
    title: "Formation senior",
    description:
      "10 séances de formation pour un particulier : smartphone, messagerie, visio.",
    tags: ["Formation", "Particulier"],
  },
  {
    icon: faPlus,
    title: "Votre projet ici",
    description: "Décrivez votre besoin, je vous propose une solution adaptée.",
    tags: ["Contactez-moi"],
    isCallToAction: true,
  },
];

export default function RealisationsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>Réalisations</h1>
        <p>Quelques exemples de missions réalisées.</p>
      </header>

      <section className={styles.gridThree}>
        {projects.map((project) => (
          <article key={project.title} className={styles.cardBorder}>
            <div className={styles.iconBox}>
              <FontAwesomeIcon
                icon={project.icon}
                className={styles.fontIcon}
              />
            </div>

            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className={styles.tags}>
              {project.tags.map((tag) =>
                project.isCallToAction ? (
                  <Link key={tag} href="/contact" className={styles.tag}>
                    {tag}
                  </Link>
                ) : (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ),
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
