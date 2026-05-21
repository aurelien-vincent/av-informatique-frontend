import type { Metadata } from "next";
import styles from "../site-pages.module.css";

export const metadata: Metadata = {
  title: "Politique de confidentialité | AV Informatique",
  description:
    "Politique de confidentialité du site AV Informatique : données collectées, finalités, durée de conservation et droits RGPD.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>Politique de confidentialité</h1>
        <p>
          Informations sur la collecte et l’utilisation des données
          personnelles.
        </p>
      </header>

      <main className={styles.legalContent}>
        <section>
          <h2>1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données personnelles est{" "}
            <strong>Aurélien Vincent EI</strong>, exerçant sous le nom
            commercial <strong>AV Informatique</strong>.
          </p>

          <ul>
            <li>Email de contact : av.informatique.83@gmail.com</li>
            <li>
              Adresse professionnelle : 34 AVENUE BERTHIE ALBRECHT, 83120
              SAINTE-MAXIME
            </li>
            <li>SIRET : 911 917 698 00019</li>
          </ul>
        </section>

        <section>
          <h2>2. Données collectées</h2>
          <p>
            Lorsque vous utilisez le formulaire de contact, AV Informatique peut
            collecter les données suivantes :
          </p>

          <ul>
            <li>Prénom et nom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Type de demande</li>
            <li>Message transmis via le formulaire</li>
            <li>
              Données techniques nécessaires au bon fonctionnement du site
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Finalités du traitement</h2>
          <p>Les données collectées sont utilisées uniquement pour :</p>

          <ul>
            <li>Répondre à une demande de contact</li>
            <li>Établir un devis</li>
            <li>Organiser une intervention ou un rendez-vous</li>
            <li>Assurer le suivi de la relation client</li>
            <li>
              Respecter les obligations administratives, comptables et légales
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Base légale du traitement</h2>
          <p>
            Les traitements peuvent reposer sur l’exécution de mesures
            précontractuelles lorsque vous demandez un devis ou une
            intervention, sur l’intérêt légitime d’AV Informatique pour répondre
            aux demandes, ou sur le respect d’obligations légales lorsque
            certaines données doivent être conservées à des fins comptables ou
            administratives.
          </p>
        </section>

        <section>
          <h2>5. Durée de conservation</h2>
          <p>
            Les données issues d’une demande de contact sont conservées pendant
            une durée limitée, nécessaire au traitement de la demande et au
            suivi commercial.
          </p>

          <ul>
            <li>
              Demande de contact sans suite : jusqu’à 3 ans après le dernier
              échange.
            </li>
            <li>
              Client : pendant la durée de la relation contractuelle, puis selon
              les durées légales applicables aux documents administratifs et
              comptables.
            </li>
            <li>
              Données techniques : pendant une durée strictement nécessaire au
              fonctionnement et à la sécurité du site.
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Destinataires des données</h2>
          <p>
            Les données sont destinées à AV Informatique. Elles peuvent
            également être transmises à des prestataires techniques strictement
            nécessaires au fonctionnement du site, à l’hébergement, à la
            messagerie ou à la sécurité.
          </p>
          <p>
            AV Informatique ne vend pas vos données personnelles à des tiers.
          </p>
        </section>

        <section>
          <h2>7. Sécurité</h2>
          <p>
            AV Informatique met en œuvre des mesures raisonnables pour protéger
            les données personnelles contre la perte, l’accès non autorisé, la
            modification ou la divulgation.
          </p>
        </section>

        <section>
          <h2>8. Cookies</h2>
          <p>
            Le site peut utiliser des cookies strictement nécessaires à son bon
            fonctionnement. Si des outils de mesure d’audience, de publicité ou
            des services tiers sont ajoutés ultérieurement, cette politique sera
            mise à jour et un mécanisme de consentement pourra être mis en place
            si nécessaire.
          </p>
        </section>

        <section>
          <h2>9. Vos droits</h2>
          <p>
            Conformément à la réglementation applicable, vous pouvez demander
            l’accès à vos données, leur rectification, leur suppression, la
            limitation du traitement, vous opposer à certains traitements ou
            demander la portabilité de vos données lorsque cela est applicable.
          </p>
          <p>
            Pour exercer vos droits, vous pouvez envoyer une demande à :
            av.informatique.83@gmail.com.
          </p>
        </section>

        <section>
          <h2>10. Réclamation auprès de la CNIL</h2>
          <p>
            Si vous estimez que vos droits ne sont pas respectés après avoir
            contacté AV Informatique, vous pouvez adresser une réclamation à la
            CNIL, autorité française de protection des données personnelles.
          </p>
        </section>

        <section>
          <h2>11. Mise à jour</h2>
          <p>
            La présente politique de confidentialité peut être modifiée afin de
            tenir compte des évolutions légales, techniques ou fonctionnelles du
            site.
          </p>
          <p>Dernière mise à jour : 21/05/2026</p>
        </section>
      </main>
    </div>
  );
}
