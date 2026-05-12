import Link from "next/link";
import styles from "../../styles/Footer.module.css";
import Image from "next/image";
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.brandColumn}>
          <Link href="/" className={styles.footerLogo}>
            <Image src="/Logo.png" alt="Logo" width={50} height={50} />

            <span className={styles.logoText}>
              <strong>AV Informatique</strong>
              <small>Dépannage, installation & formation</small>
            </span>
          </Link>

          <p className={styles.description}>
            Accompagnement informatique à domicile dans le Var pour les
            particuliers, indépendants et petites entreprises.
          </p>

          <p className={styles.zone}>
            Zone d’intervention : Ampus, Draguignan, Salernes, Flayosc,
            Trans-en-Provence et alentours.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h2>Navigation</h2>

          <ul>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/a-propos">À propos</Link>
            </li>
            <li>
              <Link href="/realisations">Réalisations</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h2>Services</h2>

          <ul>
            <li>Dépannage informatique</li>
            <li>Installation matériel</li>
            <li>Nettoyage & optimisation</li>
            <li>Formation informatique</li>
            <li>Aide administrative numérique</li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h2>Contact</h2>

          <ul>
            <li>
              <a href="tel:+33765562645">07 65 56 26 45</a>
            </li>
            <li>
              <a href="mailto:av.informatique.83@gmail.com">
                av.informatique.83@gmail.com
              </a>
            </li>
            <li>Intervention sur rendez-vous</li>
          </ul>

          <Link href="/contact" className={styles.footerButton}>
            Me contacter
          </Link>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {currentYear} AV Informatique. Tous droits réservés.</p>

        <div className={styles.legalLinks}>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/politique-confidentialite">
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
