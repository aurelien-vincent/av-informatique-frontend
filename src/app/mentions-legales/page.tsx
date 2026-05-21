import type { Metadata } from "next";
import Link from "next/link";
import styles from "../site-pages.module.css";

export const metadata: Metadata = {
  title: "Mentions légales | AV Informatique",
  description:
    "Mentions légales du site AV Informatique : éditeur, hébergeur, propriété intellectuelle, responsabilité et médiation.",
};

export default function MentionsLegalesPage() {
  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>Mentions légales</h1>
        <p>Informations légales relatives au site AV Informatique.</p>
      </header>

      <main className={styles.legalContent}>
        <section>
          <h2>1. Éditeur du site</h2>
          <p>
            Le présent site est édité par <strong>AV Informatique</strong>,
            activité exercée par <strong>Aurélien Vincent EI</strong>,
            entrepreneur individuel.
          </p>

          <ul>
            <li>Nom commercial : AV Informatique</li>
            <li>Responsable de publication : Aurélien Vincent</li>
            <li>SIRET : 911 917 698 00019 </li>
            <li>
              Adresse professionnelle : 34 AVENUE BERTHIE ALBRECHT, 83120
              SAINTE-MAXIME
            </li>
            <li>Téléphone : 07 65 56 26 45</li>
            <li>Email : av.informatique.83@gmail.com</li>
            <li>
              TVA : [TVA non applicable, art. 293 B du CGI — si applicable]
            </li>
          </ul>
        </section>

        <section>
          <h2>2. Activité</h2>
          <p>
            AV Informatique propose des prestations de dépannage informatique,
            installation de matériel, configuration réseau, récupération de
            données, formation informatique, conseil et accompagnement numérique
            à domicile ou sur site.
          </p>
        </section>

        <section>
          <h2>3. Hébergement</h2>
          <p>Le site est hébergé par :</p>

          <ul>
            <li>Hébergeur : Aurélien VINCENT</li>
            <li>Adresse : 34 AVENUE BERTHIE ALBRECHT, 83120 SAINTE-MAXIME</li>
            <li>Site internet : av-informatique.fr</li>
            <li>Téléphone : 07 65 56 26 45</li>
          </ul>
        </section>

        <section>
          <h2>4. Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus présents sur ce site, notamment les textes,
            images, logos, éléments graphiques, structure, code et mise en page,
            est protégé par le droit de la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication ou
            adaptation, totale ou partielle, sans autorisation écrite préalable
            d’AV Informatique est interdite.
          </p>
        </section>

        <section>
          <h2>5. Responsabilité</h2>
          <p>
            AV Informatique met tout en œuvre pour fournir des informations
            exactes et à jour. Toutefois, des erreurs ou omissions peuvent
            exister. L’utilisateur est invité à signaler toute correction à
            l’adresse contact@av-informatique.fr.
          </p>
          <p>
            AV Informatique ne peut être tenu responsable d’un dommage direct ou
            indirect résultant de l’utilisation du site ou de l’impossibilité
            d’y accéder.
          </p>
        </section>

        <section>
          <h2>6. Liens externes</h2>
          <p>
            Le site peut contenir des liens vers des sites externes. AV
            Informatique n’exerce aucun contrôle sur ces sites et ne peut être
            tenu responsable de leur contenu, de leur disponibilité ou de leur
            politique de confidentialité.
          </p>
        </section>

        <section>
          <h2>7. Médiation de la consommation</h2>
          <p>
            Conformément aux règles applicables aux relations avec les
            consommateurs, le client particulier peut recourir gratuitement à un
            médiateur de la consommation en cas de litige non résolu directement
            avec AV Informatique.
          </p>

          <ul>
            <li>Médiateur : [nom du médiateur choisi]</li>
            <li>Adresse : [adresse du médiateur]</li>
            <li>Site internet : [site du médiateur]</li>
          </ul>

          <p>
            Ces informations doivent être complétées avec les coordonnées du
            médiateur effectivement choisi par l’entreprise.
          </p>
        </section>

        <section>
          <h2>8. Données personnelles</h2>
          <p>
            Les informations relatives au traitement des données personnelles
            sont détaillées dans la{" "}
            <Link href="/politique-confidentialite">
              politique de confidentialité
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>9. Contact</h2>
          <p>
            Pour toute question concernant le site ou les présentes mentions
            légales, vous pouvez contacter AV Informatique à l’adresse suivante
            : av.informatique.83@gmail.com.
          </p>
        </section>
      </main>
    </div>
  );
}
