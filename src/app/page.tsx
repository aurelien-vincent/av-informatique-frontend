import Link from "next/link";
import styles from "../styles/page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faGraduationCap,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faWrench,
    title: "Dépannage",
    description:
      "PC lent, virus, panne matérielle, récupération de données et résolution de problèmes informatiques.",
  },
  {
    icon: faGlobe,
    title: "Installation",
    description:
      "Réseau Wi-Fi, configuration Box, imprimantes, caméras, logiciels et nouveaux équipements.",
  },
  {
    icon: faGraduationCap,
    title: "Formation",
    description:
      "Prise en main PC, internet, messagerie, tablette, smartphone et accompagnement numérique.",
  },
];

const cities = [
  "Ampus",
  "Draguignan",
  "Flayosc",
  "Salernes",
  "Trans-en-Provence",
  "Lorgues",
  "Sainte-Maxime",
  "+ alentours",
];

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Dépannage · Installation · Formation informatique à domicile
          </h1>

          <p className={styles.heroSubtitle}>
            Intervention rapide dans le Var pour les particuliers, indépendants
            et petites entreprises.
          </p>

          <div className={styles.badges}>
            <span className={styles.badge}>Intervention sous 48h</span>
            <span className={styles.badge}>Données sécurisées</span>
            <span className={styles.badge}>Accompagnement personnalisé</span>
          </div>

          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryButton}>
              Demander une intervention →
            </Link>

            <Link href="/services" className={styles.secondaryButton}>
              Voir les services
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Services</p>

          <h2 className={styles.sectionTitle}>
            Ce que je peux faire pour vous
          </h2>

          <p className={styles.sectionSubtitle}>
            Des prestations simples, claires et adaptées à votre niveau.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <article key={service.title} className={styles.serviceCard}>
              <span className={styles.serviceIcon}>
                <FontAwesomeIcon
                  icon={service.icon}
                  className={styles.fontIcon}
                />
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Zone d’intervention</p>

          <h2 className={styles.sectionTitle}>
            Je me déplace dans le Var et ses alentours
          </h2>

          <p className={styles.sectionSubtitle}>
            Intervention à domicile ou sur site selon votre besoin.
          </p>
        </div>

        <div className={styles.cityList}>
          {cities.map((city) => (
            <span key={city} className={styles.city}>
              {city}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div>
          <p className={styles.ctaSmall}>Un problème informatique ?</p>

          <h2>Contactez-moi, je vous réponds rapidement.</h2>
        </div>

        <Link href="/contact" className={styles.ctaButton}>
          Nous contacter
        </Link>
      </section>
    </div>
  );
}
