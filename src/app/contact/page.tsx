import type { Metadata } from "next";
import styles from "../../styles/site-pages.module.css";

export const metadata: Metadata = {
  title: "Contact | AV Informatique",
  description:
    "Contactez AV Informatique pour une intervention, un dépannage, une installation ou une formation informatique dans le Var.",
};

const zones = [
  "Draguigan",
  "Ampus",
  "Tourtour",
  "Flayosc",
  "Figanières",
  "Sainte-Maxime",
];

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>Me contacter</h1>
        <p>Je vous réponds sous 24h.</p>
      </header>

      <section className={styles.contactLayout}>
        <form
          className={styles.contactForm}
          action="mailto:av.informatique.83@gmail.com"
          method="post"
          encType="text/plain"
        >
          <div className={styles.formRow}>
            <div className={styles.field}>
              <label htmlFor="firstname">Prénom</label>
              <input
                id="firstname"
                name="Prénom"
                type="text"
                placeholder="Jean"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="lastname">Nom</label>
              <input
                id="lastname"
                name="Nom"
                type="text"
                placeholder="Dupont"
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="Email"
              type="email"
              placeholder="jean@example.com"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="phone">Téléphone</label>
            <input
              id="phone"
              name="Téléphone"
              type="tel"
              placeholder="06 XX XX XX XX"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="requestType">Type de demande</label>
            <select
              id="requestType"
              name="Type de demande"
              defaultValue="Dépannage"
            >
              <option value="Dépannage">Dépannage</option>
              <option value="Installation">Installation</option>
              <option value="Formation">Formation</option>
              <option value="Récupération de données">
                Récupération de données
              </option>
              <option value="Vidéosurveillance">Vidéosurveillance</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="Message"
              placeholder="Décrivez votre problème ou votre besoin..."
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Envoyer ma demande →
          </button>
        </form>

        <aside>
          <div className={styles.infoBox}>
            <ul className={styles.infoList}>
              <li>
                <span>☎</span> 07 65 56 26 45
              </li>
              <li>
                <span>✉</span> av.informatique.83@gmail.com
              </li>
              <li>
                <span>⏱</span> Lun – Vend · 8h – 19h
              </li>
              <li>
                <span>⌖</span> Secteur Draguignan et alentour / Var
              </li>
            </ul>
          </div>

          <div className={styles.infoBox} style={{ marginTop: "14px" }}>
            <h2>Zone d’intervention</h2>

            <div className={styles.tags}>
              {zones.map((zone) => (
                <span key={zone} className={styles.tag}>
                  {zone}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
