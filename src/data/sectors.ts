import type { Sector } from "@/types";

/**
 * Sectors - structured content, easily extended.
 * `image` empty => elegant placeholder is rendered automatically.
 */
export const sectors: Sector[] = [
  {
    id: "transport",
    slug: "transport",
    name: { fr: "Transport", en: "Transport", pt: "Transportes" },
    short: {
      fr: "Mobilité des personnes et des marchandises.",
      en: "Mobility of people and goods.",
      pt: "Mobilidade de pessoas e mercadorias.",
    },
    description: {
      fr: "Les infrastructures de transport structurent l'économie des territoires en reliant les populations, les marchés et les zones de production. Nous développons des projets de transport qui réduisent les distances, fluidifient les échanges et ouvrent l'accès aux services essentiels.",
      en: "Transport infrastructure structures economies by connecting people, markets and production areas. We develop transport projects that reduce distances, ease trade and open access to essential services.",
      pt: "As infraestruturas de transporte estruturam as economias ligando populações, mercados e zonas de produção. Desenvolvemos projetos de transporte que reduzem distâncias, facilitam o comércio e abrem o acesso aos serviços essenciais.",
    },
    issues: {
      fr: "Urbanisation rapide, corridors d'échange transfrontaliers, désenclavement des territoires et logistique des marchandises exigent des infrastructures modernes, financées et réalisables.",
      en: "Rapid urbanisation, cross-border trade corridors, opening up of territories and freight logistics call for modern, financed and deliverable infrastructure.",
      pt: "Urbanização rápida, corredores de comércio transfronteiriços, abertura de territórios e logística de mercadorias exigem infraestruturas modernas, financiadas e realizáveis.",
    },
    approach: {
      fr: "Dans le secteur des transports, nous identifions les corridors structurants et les maillons manquants des réseaux, nous évaluons la demande et la bancabilité des projets, puis nous construisons les montages financiers qui permettent leur réalisation. Nous accompagnons les États et les opérateurs de la définition du projet à la mise en service, en veillant à la viabilité à long terme des infrastructures.",
      en: "In transport, we identify the structuring corridors and the missing links in networks, assess demand and bankability, then build the financial structures that make projects happen. We support governments and operators from project definition to commissioning, ensuring the long-term viability of the infrastructure.",
      pt: "No setor dos transportes, identificamos os corredores estruturantes e os elos em falta das redes, avaliamos a procura e a bancabilidade dos projetos e construímos as montagens financeiras que permitem a sua realização. Acompanhamos os Estados e os operadores da definição do projeto à entrada em serviço, garantindo a viabilidade a longo prazo das infraestruturas.",
    },
    outcomes: [
      {
        fr: "Désenclavement des territoires et accès élargi aux marchés",
        en: "Opening up territories and broadening access to markets",
        pt: "Abertura de territórios e acesso alargado aos mercados",
      },
      {
        fr: "Réduction des coûts et des temps de transport",
        en: "Lower transport costs and shorter journey times",
        pt: "Redução dos custos e dos tempos de transporte",
      },
      {
        fr: "Un cadre juridique et financier pérenne pour chaque projet",
        en: "A durable legal and financial framework for every project",
        pt: "Um enquadramento jurídico e financeiro duradouro para cada projeto",
      },
    ],
    projectTypes: [
      {
        title: { fr: "Infrastructures de transport", en: "Transport infrastructure", pt: "Infraestruturas de transporte" },
        items: [
          { fr: "Aéroports", en: "Airports", pt: "Aeroportos" },
          { fr: "Autoroutes", en: "Highways", pt: "Autoestradas" },
          { fr: "Ponts", en: "Bridges", pt: "Pontes" },
          { fr: "Ports", en: "Ports", pt: "Portos" },
          { fr: "Chemins de fer", en: "Railways", pt: "Caminhos de ferro" },
          { fr: "Transport urbain", en: "Urban transport", pt: "Transporte urbano" },
          { fr: "Terminaux et infrastructures logistiques", en: "Logistics terminals and infrastructure", pt: "Terminais e infraestruturas logísticas" },
        ],
      },
    ],
    examples: [
      {
        fr: "Développement de corridors routiers reliant des bassins de production aux ports.",
        en: "Development of road corridors linking production basins to ports.",
        pt: "Desenvolvimento de corredores rodoviários ligando bacias de produção aos portos.",
      },
      {
        fr: "Structuration de projets de transport urbain pour les grandes agglomérations.",
        en: "Structuring of urban transport projects for major cities.",
        pt: "Estruturação de projetos de transporte urbano para as grandes aglomerações.",
      },
    ],
    image: "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=1200&q=80",
    icon: "Plane",
  },
  {
    id: "energy",
    slug: "energy",
    name: { fr: "Énergie", en: "Energy", pt: "Energia" },
    short: {
      fr: "Électrifier et sécuriser l'approvisionnement.",
      en: "Electrifying and securing supply.",
      pt: "Eletrificar e garantir o abastecimento.",
    },
    description: {
      fr: "L'énergie est le moteur du développement économique et social. Nous développons des projets de production, de transport et de distribution d'électricité qui répondent aux besoins croissants des populations et des industries.",
      en: "Energy powers economic and social development. We develop electricity generation, transmission and distribution projects that answer the growing needs of populations and industries.",
      pt: "A energia é o motor do desenvolvimento económico e social. Desenvolvemos projetos de produção, transporte e distribuição de eletricidade que respondem às necessidades crescentes das populações e das indústrias.",
    },
    issues: {
      fr: "Taux d'accès à l'électricité, coût de l'énergie, intégration des renouvelables et fiabilité des réseaux sont au cœur des priorités des États.",
      en: "Electrification rates, energy costs, renewable integration and grid reliability sit at the heart of national priorities.",
      pt: "Taxas de acesso à eletricidade, custo da energia, integração das renováveis e fiabilidade das redes estão no centro das prioridades dos Estados.",
    },
    approach: {
      fr: "En énergie, nous accompagnons les projets de production, de transport et de distribution d'électricité, des énergies renouvelables aux solutions de stockage. Nous évaluons la demande, structurons les contrats d'achat et les montages de financement, et mobilisons les partenaires industriels capables de réaliser les ouvrages.",
      en: "In energy, we support generation, transmission and distribution projects, from renewables to storage solutions. We assess demand, structure power-purchase agreements and financing packages, and bring together the industrial partners able to deliver the works.",
      pt: "Em energia, acompanhamos projetos de produção, transporte e distribuição de eletricidade, das energias renováveis às soluções de armazenamento. Avaliamos a procura, estruturamos os contratos de compra e as montagens de financiamento e mobilizamos os parceiros industriais capazes de realizar as obras.",
    },
    outcomes: [
      {
        fr: "Élargissement de l'accès à l'électricité",
        en: "Broadening access to electricity",
        pt: "Alargamento do acesso à eletricidade",
      },
      {
        fr: "Sécurisation de l'approvisionnement et des réseaux",
        en: "Securing supply and grid reliability",
        pt: "Garantia do abastecimento e da fiabilidade das redes",
      },
      {
        fr: "Intégration réussie des énergies renouvelables",
        en: "Successful integration of renewable energy",
        pt: "Integração bem-sucedida das energias renováveis",
      },
    ],
    projectTypes: [
      {
        title: { fr: "Infrastructures énergétiques", en: "Energy infrastructure", pt: "Infraestruturas energéticas" },
        items: [
          { fr: "Centrales électriques", en: "Power plants", pt: "Centrais elétricas" },
          { fr: "Énergies renouvelables", en: "Renewable energy", pt: "Energias renováveis" },
          { fr: "Réseaux électriques", en: "Electricity grids", pt: "Redes elétricas" },
          { fr: "Stockage", en: "Storage", pt: "Armazenamento" },
        ],
      },
    ],
    examples: [
      {
        fr: "Développement de projets de production d'énergie renouvelable.",
        en: "Development of renewable energy production projects.",
        pt: "Desenvolvimento de projetos de produção de energia renovável.",
      },
      {
        fr: "Structuration de projets de transport et de distribution d'électricité.",
        en: "Structuring of electricity transmission and distribution projects.",
        pt: "Estruturação de projetos de transporte e distribuição de eletricidade.",
      },
    ],
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    icon: "Zap",
  },
  {
    id: "water",
    slug: "water",
    name: { fr: "Eau", en: "Water", pt: "Água" },
    short: {
      fr: "Sécuriser la ressource, améliorer l'accès.",
      en: "Securing the resource, improving access.",
      pt: "Garantir o recurso, melhorar o acesso.",
    },
    description: {
      fr: "L'accès à l'eau potable et à l'assainissement est un enjeu vital. Nous développons des projets hydrauliques qui sécurisent la ressource, améliorent l'accès et préservent la santé des populations.",
      en: "Access to safe water and sanitation is a vital issue. We develop hydraulic projects that secure the resource, improve access and protect public health.",
      pt: "O acesso à água potável e ao saneamento é uma questão vital. Desenvolvemos projetos hidráulicos que garantem o recurso, melhoram o acesso e protegem a saúde das populações.",
    },
    issues: {
      fr: "Pression sur les ressources, croissance urbaine, adaptation au climat et exigence d'un accès durable à l'eau potable.",
      en: "Pressure on resources, urban growth, climate adaptation and the demand for sustainable access to safe water.",
      pt: "Pressão sobre os recursos, crescimento urbano, adaptação ao clima e exigência de acesso sustentável à água potável.",
    },
    approach: {
      fr: "Dans le secteur de l'eau, nous développons des projets d'adduction, de distribution et d'assainissement qui sécurisent la ressource et améliorent l'accès des populations. Nous structurons les modèles économiques qui garantissent l'exploitation et l'entretien durable des infrastructures.",
      en: "In water, we develop supply, distribution and sanitation projects that secure the resource and improve people's access. We structure the economic models that guarantee long-term operation and maintenance of the infrastructure.",
      pt: "No setor da água, desenvolvemos projetos de abastecimento, distribuição e saneamento que garantem o recurso e melhoram o acesso das populações. Estruturamos os modelos económicos que asseguram a exploração e a manutenção duradoura das infraestruturas.",
    },
    outcomes: [
      {
        fr: "Accès durable à l'eau potable",
        en: "Sustainable access to safe water",
        pt: "Acesso sustentável à água potável",
      },
      {
        fr: "Réduction des pertes et modernisation des réseaux",
        en: "Reducing losses and modernising networks",
        pt: "Redução das perdas e modernização das redes",
      },
      {
        fr: "Protection de la santé des populations",
        en: "Protecting public health",
        pt: "Proteção da saúde das populações",
      },
    ],
    projectTypes: [
      {
        title: { fr: "Infrastructures hydrauliques", en: "Water infrastructure", pt: "Infraestruturas hidráulicas" },
        items: [
          { fr: "Eau potable", en: "Drinking water", pt: "Água potável" },
          { fr: "Traitement des eaux", en: "Water treatment", pt: "Tratamento de águas" },
          { fr: "Assainissement", en: "Sanitation", pt: "Saneamento" },
          { fr: "Réseaux hydrauliques", en: "Water networks", pt: "Redes hidráulicas" },
        ],
      },
    ],
    examples: [
      {
        fr: "Développement de projets d'adduction et de distribution d'eau potable.",
        en: "Development of drinking water supply and distribution projects.",
        pt: "Desenvolvimento de projetos de abastecimento e distribuição de água potável.",
      },
    ],
    image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=1200&q=80",
    icon: "Droplets",
  },
  {
    id: "digital",
    slug: "numerique-telecommunications",
    name: {
      fr: "Numérique & Télécommunications",
      en: "Digital & Telecommunications",
      pt: "Digital & Telecomunicações",
    },
    short: {
      fr: "Connecter les territoires et l'économie.",
      en: "Connecting territories and the economy.",
      pt: "Ligar territórios e economia.",
    },
    description: {
      fr: "Data centers, réseaux télécoms et infrastructures numériques : nous développons les fondations de l'économie connectée de demain.",
      en: "Data centres, telecom networks and digital infrastructure: we develop the foundations of tomorrow's connected economy.",
      pt: "Data centers, redes de telecomunicações e infraestruturas digitais: desenvolvemos os alicerces da economia conectada de amanhã.",
    },
    issues: {
      fr: "Souveraineté numérique, couverture des territoires et besoin croissant de capacités de stockage et de traitement des données.",
      en: "Digital sovereignty, territory coverage and growing demand for data storage and processing capacity.",
      pt: "Soberania digital, cobertura dos territórios e necessidade crescente de capacidades de armazenamento e processamento de dados.",
    },
    approach: {
      fr: "Dans le numérique, nous développons des data centers, des réseaux de télécommunications et des infrastructures de connectivité. Nous structurons des projets qui renforcent la souveraineté numérique des États et préparent l'économie connectée de demain.",
      en: "In digital, we develop data centres, telecom networks and connectivity infrastructure. We structure projects that strengthen the digital sovereignty of States and prepare tomorrow's connected economy.",
      pt: "No digital, desenvolvemos data centers, redes de telecomunicações e infraestruturas de conectividade. Estruturamos projetos que reforçam a soberania digital dos Estados e preparam a economia conectada de amanhã.",
    },
    outcomes: [
      {
        fr: "Renforcement de la souveraineté numérique",
        en: "Strengthening digital sovereignty",
        pt: "Reforço da soberania digital",
      },
      {
        fr: "Extension de la couverture des territoires",
        en: "Extending territory coverage",
        pt: "Extensão da cobertura dos territórios",
      },
      {
        fr: "Des capacités de stockage et de traitement des données",
        en: "Data storage and processing capacity",
        pt: "Capacidades de armazenamento e processamento de dados",
      },
    ],
    projectTypes: [
      {
        title: { fr: "Infrastructures numériques", en: "Digital infrastructure", pt: "Infraestruturas digitais" },
        items: [
          { fr: "Data centers", en: "Data centres", pt: "Data centers" },
          { fr: "Réseaux télécoms", en: "Telecom networks", pt: "Redes de telecomunicações" },
          { fr: "Connectivité", en: "Connectivity", pt: "Conectividade" },
        ],
      },
    ],
    examples: [
      {
        fr: "Développement de projets de data centers et de connectivité.",
        en: "Development of data centre and connectivity projects.",
        pt: "Desenvolvimento de projetos de data centers e de conectividade.",
      },
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    icon: "Server",
  },
];
