import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../styles/site-pages.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faWrench,
  faFloppyDisk,
  faVideo,
  faGraduationCap,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Services | AV Informatique",
  description:
    "Dépannage informatique, récupération de données, installation réseau, vidéosurveillance, formation et conseil dans le Var.",
};

const services = [
  {
    icon: faWrench,
    title: "Dépannage à domicile",
    description:
      "Diagnostic, suppression virus, PC lent, crash système, mise à jour et résolution de pannes courantes.",
    price: "À partir de 50 €",
  },
  {
    icon: faFloppyDisk,
    title: "Récupération de données",
    description:
      "Disque dur défaillant, fichiers supprimés, formatage accidentel ou support difficilement accessible.",
    price: "Sur devis",
  },
  {
    icon: faWifi,
    title: "Installation réseau",
    description:
      "Box internet, Wi-Fi, réseau câblé, partage de fichiers, imprimante et optimisation de la connexion.",
    price: "À partir de 60 €",
  },
  {
    icon: faVideo,
    title: "Vidéosurveillance",
    description:
      "Installation et configuration de caméras IP, NVR, accès à distance et application mobile.",
    price: "Sur devis",
  },
  {
    icon: faGraduationCap,
    title: "Formation personnalisée",
    description:
      "Internet, messagerie, Office, smartphone, tablette et ordinateur, à votre rythme et chez vous.",
    price: "30 €/heure",
  },
  {
    icon: faLaptop,
    title: "Conseil & achat",
    description:
      "Aide au choix, commande, configuration et prise en main de votre nouvel équipement.",
    price: "Gratuit à l’achat",
  },
];

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>Tous mes services</h1>
        <p>Tarifs indicatifs — devis gratuit sur demande.</p>
      </header>

      <section className={styles.gridTwo}>
        {services.map((service) => (
          <article key={service.title} className={styles.card}>
            <span className={styles.smallIcon}>
              <FontAwesomeIcon
                icon={service.icon}
                className={styles.fontIcon}
              />
            </span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <span className={styles.price}>{service.price}</span>
          </article>
        ))}
      </section>

      <section className={styles.ctaBox}>
        <div>
          <p>Besoin d’un service personnalisé ?</p>
          <strong>Je vous établis un devis gratuit sous 24h.</strong>
        </div>

        <Link href="/contact" className={styles.button}>
          Demander un devis
        </Link>
      </section>
    </div>
  );
}
