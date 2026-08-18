import type { Localized } from "@/types";

export interface LegalSection {
  title: Localized;
  body: Localized[];
}

const SHARED: LegalSection[] = [
  {
    title: { fr: "Éditeur du site", en: "Website publisher", pt: "Editor do site" },
    body: [
      {
        fr: "Fil Investment Group - société anonyme au capital de 10 000 000 F CFA, immatriculée au registre du commerce et du crédit mobilier de Brazzaville sous le numéro RCCM B 2011 B 01452. Siège social : Avenue Amilcar Cabral, Centre-ville, Brazzaville - République du Congo.",
        en: "Fil Investment Group - a public limited company with a share capital of 10,000,000 F CFA, registered with the Brazzaville trade and personal property credit register under number RCCM B 2011 B 01452. Registered office: Avenue Amilcar Cabral, city centre, Brazzaville - Republic of the Congo.",
        pt: "Fil Investment Group - sociedade anónima com capital social de 10.000.000 F CFA, registada no registo comercial e de crédito mobiliário de Brazzaville sob o número RCCM B 2011 B 01452. Sede social: Avenida Amilcar Cabral, centro da cidade, Brazzaville - República do Congo.",
      },
      {
        fr: "Directeur de la publication : Surya Aniel MACKLYMAN. Contact : contact@filinvestmentgroup.com.",
        en: "Publication director: Surya Aniel MACKLYMAN. Contact: contact@filinvestmentgroup.com.",
        pt: "Diretor de publicação: Surya Aniel MACKLYMAN. Contacto: contact@filinvestmentgroup.com.",
      },
    ],
  },
  {
    title: { fr: "Hébergement", en: "Hosting", pt: "Alojamento" },
    body: [
      {
        fr: "InfraCloud SAS - 12 rue des Flandres, 75019 Paris, France.",
        en: "InfraCloud SAS - 12 rue des Flandres, 75019 Paris, France.",
        pt: "InfraCloud SAS - 12 rue des Flandres, 75019 Paris, França.",
      },
    ],
  },
  {
    title: { fr: "Propriété intellectuelle", en: "Intellectual property", pt: "Propriedade intelectual" },
    body: [
      {
        fr: "L'ensemble des contenus du site (textes, images, logo, marques) est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation ou diffusion sans autorisation est interdite.",
        en: "All content of the website (texts, images, logo, trademarks) is protected by intellectual property law. Any reproduction, representation or distribution without authorisation is prohibited.",
        pt: "Todo o conteúdo do site (textos, imagens, logotipo, marcas) está protegido pela legislação de propriedade intelectual. É proibida qualquer reprodução, representação ou distribuição sem autorização.",
      },
    ],
  },
  {
    title: { fr: "Responsabilité", en: "Liability", pt: "Responsabilidade" },
    body: [
      {
        fr: "Le site présente des informations générales sur la société et ses activités. Ces informations ne constituent ni une offre, ni un engagement contractuel. Les éléments relatifs aux projets sont donnés à titre illustratif.",
        en: "The website presents general information about the company and its activities. This information does not constitute an offer or a contractual commitment. Elements relating to projects are given for illustrative purposes.",
        pt: "O site apresenta informações gerais sobre a empresa e as suas atividades. Estas informações não constituem uma oferta nem um compromisso contratual. Os elementos relativos aos projetos são apresentados a título ilustrativo.",
      },
    ],
  },
];

const PRIVACY: LegalSection[] = [
  {
    title: { fr: "Données personnelles", en: "Personal data", pt: "Dados pessoais" },
    body: [
      {
        fr: "Les informations transmises via les formulaires du site sont utilisées uniquement pour traiter vos demandes. Elles ne sont ni vendues, ni transmises à des tiers en dehors de ce cadre.",
        en: "Information transmitted through the website forms is used solely to process your requests. It is neither sold nor transferred to third parties outside this scope.",
        pt: "As informações transmitidas através dos formulários do site são utilizadas apenas para tratar os seus pedidos. Não são vendidas nem transmitidas a terceiros fora deste âmbito.",
      },
      {
        fr: "Conformément à la réglementation applicable, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour l'exercer, contactez-nous : contact@filinvestmentgroup.com.",
        en: "In accordance with applicable regulations, you have the right to access, rectify and delete your data. To exercise it, contact us: contact@filinvestmentgroup.com.",
        pt: "Em conformidade com a regulamentação aplicável, tem o direito de aceder, retificar e eliminar os seus dados. Para o exercer, contacte-nos: contact@filinvestmentgroup.com.",
      },
    ],
  },
  {
    title: { fr: "Confidentialité des projets", en: "Project confidentiality", pt: "Confidencialidade dos projetos" },
    body: [
      {
        fr: "Les documents transmis dans le cadre d'une soumission de projet sont traités comme des informations potentiellement confidentielles. Ils ne sont utilisés que dans le cadre de l'évaluation de votre projet.",
        en: "Documents transmitted as part of a project submission are treated as potentially confidential information. They are used solely for the evaluation of your project.",
        pt: "Os documentos transmitidos no âmbito de uma submissão de projeto são tratados como informações potencialmente confidenciais. São utilizados apenas no âmbito da avaliação do seu projeto.",
      },
    ],
  },
  {
    title: { fr: "Cookies", en: "Cookies", pt: "Cookies" },
    body: [
      {
        fr: "Le site utilise des cookies techniques nécessaires à son bon fonctionnement (préférences de langue, session) ainsi que des cookies d'audience anonymisés destinés à mesurer la fréquentation. Aucune donnée personnelle n'est utilisée à des fins publicitaires. Vous pouvez configurer votre navigateur pour refuser les cookies ; certaines fonctionnalités du site pourraient alors être altérées.",
        en: "The website uses technical cookies required for its proper operation (language preferences, session) as well as anonymised audience cookies to measure traffic. No personal data is used for advertising purposes. You can configure your browser to refuse cookies; some features of the website may then be affected.",
        pt: "O site utiliza cookies técnicos necessários ao seu funcionamento (preferências de idioma, sessão) bem como cookies de audiência anonimizados para medir o tráfego. Nenhum dado pessoal é utilizado para fins publicitários. Pode configurar o seu navegador para recusar cookies; algumas funcionalidades do site podem então ser afetadas.",
      },
    ],
  },
];

export const legalSections: Record<"legal" | "privacy", LegalSection[]> = {
  legal: SHARED,
  privacy: [...SHARED, ...PRIVACY],
};
