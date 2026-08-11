import type { Project } from "@/types";

/**
 * Projects - structured content, easily editable.
 *
 * Demo content: realistic but fictional projects, oriented towards
 * African infrastructure markets. Replace with the company's real data
 * before any public publishing.
 * A project with `confidential: true` is displayed without sensitive details.
 * `published: true` renders the project on the site (temporarily enabled for demo).
 */
export const projects: Project[] = [
  {
    id: "p1",
    slug: "corridor-autoroutier-dakar-saint-louis",
    title: {
      fr: "Corridor autoroutier Dakar – Saint-Louis",
      en: "Dakar – Saint-Louis Highway Corridor",
      pt: "Corredor rodoviário Dakar – Saint-Louis",
    },
    country: { fr: "Sénégal", en: "Senegal", pt: "Senegal" },
    sector: "transport",
    status: "development",
    description: {
      fr: "Développement d'un corridor autoroutier de 190 km reliant Dakar au bassin de production de la vallée du fleuve Sénégal, visant à fluidifier les échanges et à désenclaver le nord du pays. Le projet est développé avec les autorités nationales dans le cadre d'un partenariat public-privé.",
      en: "Development of a 190 km highway corridor linking Dakar to the production basin of the Senegal River valley, aimed at easing trade and opening up the north of the country. The project is being developed with national authorities under a public-private partnership.",
      pt: "Desenvolvimento de um corredor rodoviário de 190 km ligando Dakar à bacia de produção do vale do rio Senegal, destinado a facilitar o comércio e a abrir o norte do país. O projeto está a ser desenvolvido com as autoridades nacionais no âmbito de uma parceria público-privada.",
    },
    role: {
      fr: "Développement du projet, structuration du partenariat public-privé et mobilisation des financements.",
      en: "Project development, public-private partnership structuring and financing mobilisation.",
      pt: "Desenvolvimento do projeto, estruturação da parceria público-privada e mobilização dos financiamentos.",
    },
    impact: {
      fr: "Réduction des temps de parcours de 60 %, ouverture de la vallée du fleuve aux marchés et création de plus de 3 000 emplois directs pendant la construction.",
      en: "60% reduction in travel times, opening of the river valley to markets and creation of more than 3,000 direct jobs during construction.",
      pt: "Redução de 60% dos tempos de viagem, abertura do vale do rio aos mercados e criação de mais de 3.000 postos de trabalho diretos durante a construção.",
    },
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    ],
    confidential: false,
    published: true,
  },
  {
    id: "p2",
    slug: "parc-solaire-photovoltaique-dosso",
    title: {
      fr: "Parc solaire photovoltaïque de Dosso (80 MW)",
      en: "Dosso Solar Photovoltaic Park (80 MW)",
      pt: "Parque solar fotovoltaico de Dosso (80 MW)",
    },
    country: { fr: "Niger", en: "Niger", pt: "Níger" },
    sector: "energy",
    status: "ongoing",
    description: {
      fr: "Construction d'un parc solaire de 80 MWc destiné à renforcer l'accès à l'électricité de la région de Dosso. Les financements ont été mobilisés auprès d'institutions financières internationales et la réalisation est en cours.",
      en: "Construction of an 80 MWp solar park aimed at strengthening electricity access in the Dosso region. Financing has been mobilised from international financial institutions and delivery is ongoing.",
      pt: "Construção de um parque solar de 80 MWp destinado a reforçar o acesso à eletricidade na região de Dosso. Os financiamentos foram mobilizados junto de instituições financeiras internacionais e a realização está em curso.",
    },
    role: {
      fr: "Structuration du montage, plan de financement et mobilisation des partenaires techniques.",
      en: "Deal structuring, financing plan and mobilisation of technical partners.",
      pt: "Estruturação do acordo, plano de financiamento e mobilização dos parceiros técnicos.",
    },
    impact: {
      fr: "Alimentation de plus de 250 000 foyers, réduction de 120 000 tonnes de CO₂ par an et sécurisation du réseau électrique régional.",
      en: "Power for more than 250,000 households, reduction of 120,000 tonnes of CO₂ per year and securing of the regional electricity grid.",
      pt: "Alimentação de mais de 250.000 lares, redução de 120.000 toneladas de CO₂ por ano e segurança da rede elétrica regional.",
    },
    images: [
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1200&q=80",
    ],
    confidential: false,
    published: true,
  },
  {
    id: "p3",
    slug: "adduction-eau-potable-bouake",
    title: {
      fr: "Programme d'adduction d'eau potable de Bouaké",
      en: "Bouaké Drinking Water Supply Programme",
      pt: "Programa de abastecimento de água potável de Bouaké",
    },
    country: { fr: "Côte d'Ivoire", en: "Côte d'Ivoire", pt: "Costa do Marfim" },
    sector: "water",
    status: "realized",
    description: {
      fr: "Réalisation d'un programme d'adduction et de distribution d'eau potable desservant plus de 600 000 habitants de Bouaké et de sa région. Le programme est achevé et opérationnel.",
      en: "Delivery of a drinking water supply and distribution programme serving more than 600,000 people in Bouaké and its region. The programme is completed and operational.",
      pt: "Realização de um programa de abastecimento e distribuição de água potável que serve mais de 600.000 habitantes de Bouaké e da sua região. O programa está concluído e operacional.",
    },
    role: {
      fr: "Développement, structuration et accompagnement de la réalisation.",
      en: "Development, structuring and support to delivery.",
      pt: "Desenvolvimento, estruturação e acompanhamento da realização.",
    },
    impact: {
      fr: "Accès à l'eau potable pour 600 000 personnes, réduction des maladies hydriques et appui au développement économique local.",
      en: "Access to safe water for 600,000 people, reduction of waterborne diseases and support for local economic development.",
      pt: "Acesso à água potável para 600.000 pessoas, redução das doenças de origem hídrica e apoio ao desenvolvimento económico local.",
    },
    images: [
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=1200&q=80",
    ],
    confidential: false,
    published: true,
  },
  {
    id: "p5",
    slug: "data-center-souverain-kigali",
    title: {
      fr: "Data center souverain de Kigali (TIER III)",
      en: "Kigali Sovereign Data Centre (Tier III)",
      pt: "Data center soberano de Kigali (TIER III)",
    },
    country: { fr: "Rwanda", en: "Rwanda", pt: "Ruanda" },
    sector: "digital",
    status: "development",
    description: {
      fr: "Développement d'un data center TIER III de 5 MW à Kigali, renforçant la souveraineté numérique et la capacité de traitement des données du pays et de la région.",
      en: "Development of a 5 MW Tier III data centre in Kigali, strengthening the digital sovereignty and data processing capacity of the country and the region.",
      pt: "Desenvolvimento de um data center TIER III de 5 MW em Kigali, reforçando a soberania digital e a capacidade de processamento de dados do país e da região.",
    },
    role: {
      fr: "Développement du projet et structuration du modèle économique.",
      en: "Project development and structuring of the economic model.",
      pt: "Desenvolvimento do projeto e estruturação do modelo económico.",
    },
    impact: {
      fr: "Capacité de 5 MW, hébergement des données publiques et financières et création d'un pôle d'attractivité numérique régional.",
      en: "5 MW capacity, hosting of public and financial data and creation of a regional digital hub.",
      pt: "Capacidade de 5 MW, alojamento de dados públicos e financeiros e criação de um polo de atratividade digital regional.",
    },
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    ],
    confidential: false,
    published: true,
  },
  {
    id: "p7",
    slug: "port-sec-ouagadougou",
    title: {
      fr: "Port sec et plateforme logistique de Ouagadougou",
      en: "Ouagadougou Dry Port and Logistics Platform",
      pt: "Porto seco e plataforma logística de Ouagadougou",
    },
    country: { fr: "Burkina Faso", en: "Burkina Faso", pt: "Burquina Faso" },
    sector: "transport",
    status: "ongoing",
    description: {
      fr: "Construction d'un port sec de 40 hectares et d'une plateforme logistique connectés au corridor Abidjan – Ouagadougou, facilitant le commerce extérieur du pays. La réalisation est en cours.",
      en: "Construction of a 40-hectare dry port and logistics platform connected to the Abidjan – Ouagadougou corridor, easing the country's external trade. Delivery is ongoing.",
      pt: "Construção de um porto seco de 40 hectares e de uma plataforma logística ligados ao corredor Abidjan – Ouagadougou, facilitando o comércio externo do país. A realização está em curso.",
    },
    role: {
      fr: "Développement, structuration financière et mobilisation des opérateurs logistiques.",
      en: "Development, financial structuring and mobilisation of logistics operators.",
      pt: "Desenvolvimento, estruturação financeira e mobilização dos operadores logísticos.",
    },
    impact: {
      fr: "Réduction des coûts logistiques, doublement de la capacité de traitement des conteneurs et renforcement des échanges régionaux.",
      en: "Lower logistics costs, doubling of container handling capacity and stronger regional trade.",
      pt: "Redução dos custos logísticos, duplicação da capacidade de tratamento de contentores e reforço do comércio regional.",
    },
    images: [
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80",
    ],
    confidential: false,
    published: true,
  },
  {
    id: "p8",
    slug: "interconnexion-electrique-nord-sud",
    title: {
      fr: "Interconnexion électrique Nord – Sud (220 kV)",
      en: "North – South Electricity Interconnection (220 kV)",
      pt: "Interligação elétrica Norte – Sul (220 kV)",
    },
    country: { fr: "Mozambique", en: "Mozambique", pt: "Moçambique" },
    sector: "energy",
    status: "realized",
    description: {
      fr: "Réalisation d'une ligne de transport d'électricité de 220 kV et de 480 km reliant le nord au sud du Mozambique. L'ouvrage est achevé et mis en service.",
      en: "Delivery of a 220 kV, 480 km electricity transmission line linking the north and south of Mozambique. The asset is completed and in service.",
      pt: "Realização de uma linha de transporte de eletricidade de 220 kV e 480 km que liga o norte ao sul de Moçambique. A obra está concluída e em serviço.",
    },
    role: {
      fr: "Structuration du montage, mobilisation des financements et coordination des entreprises de réalisation.",
      en: "Deal structuring, financing mobilisation and coordination of construction companies.",
      pt: "Estruturação do acordo, mobilização dos financiamentos e coordenação das empresas de construção.",
    },
    impact: {
      fr: "Sécurisation de l'approvisionnement électrique national, appui aux projets miniers et industriels et renforcement du réseau.",
      en: "Securing of national power supply, support for mining and industrial projects and reinforcement of the grid.",
      pt: "Segurança do abastecimento elétrico nacional, apoio aos projetos mineiros e industriais e reforço da rede.",
    },
    images: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    ],
    confidential: false,
    published: true,
  },
];
