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
    id: "health",
    slug: "health",
    name: { fr: "Santé", en: "Health", pt: "Saúde" },
    short: {
      fr: "Bâtir des systèmes de santé accessibles.",
      en: "Building accessible health systems.",
      pt: "Construir sistemas de saúde acessíveis.",
    },
    description: {
      fr: "Des infrastructures de santé performantes sont essentielles au bien-être des populations. Nous développons des hôpitaux, cliniques et centres de santé répondant aux besoins des territoires.",
      en: "High-performing health facilities are essential to the well-being of populations. We develop hospitals, clinics and health centres that meet the needs of territories.",
      pt: "Infraestruturas de saúde de qualidade são essenciais ao bem-estar das populações. Desenvolvemos hospitais, clínicas e centros de saúde que respondem às necessidades dos territórios.",
    },
    issues: {
      fr: "Démographie croissante, accès aux soins et besoin d'équipements médicaux spécialisés dans les régions les moins desservies.",
      en: "Growing population, access to care and the need for specialised medical facilities in underserved regions.",
      pt: "Crescimento demográfico, acesso aos cuidados e necessidade de equipamentos médicos especializados nas regiões menos servidas.",
    },
    approach: {
      fr: "En santé, nous développons des hôpitaux, des cliniques et des centres de santé qui répondent aux besoins des territoires. Nous structurons les projets sur les plans technique, juridique et financier, et mobilisons les partenaires capables de les réaliser et de les exploiter.",
      en: "In health, we develop hospitals, clinics and health centres that answer the needs of territories. We structure projects on the technical, legal and financial fronts, and bring together the partners able to build and operate them.",
      pt: "Na saúde, desenvolvemos hospitais, clínicas e centros de saúde que respondem às necessidades dos territórios. Estruturamos os projetos nos planos técnico, jurídico e financeiro e mobilizamos os parceiros capazes de os construir e explorar.",
    },
    outcomes: [
      {
        fr: "Renforcement de l'offre de soins",
        en: "Strengthening the supply of care",
        pt: "Reforço da oferta de cuidados",
      },
      {
        fr: "Accès aux équipements médicaux spécialisés",
        en: "Access to specialised medical equipment",
        pt: "Acesso a equipamentos médicos especializados",
      },
      {
        fr: "Durabilité des infrastructures de santé",
        en: "Long-lasting health infrastructure",
        pt: "Durabilidade das infraestruturas de saúde",
      },
    ],
    projectTypes: [
      {
        title: { fr: "Infrastructures de santé", en: "Health infrastructure", pt: "Infraestruturas de saúde" },
        items: [
          { fr: "Hôpitaux", en: "Hospitals", pt: "Hospitais" },
          { fr: "Cliniques", en: "Clinics", pt: "Clínicas" },
          { fr: "Centres de santé", en: "Health centres", pt: "Centros de saúde" },
          { fr: "Infrastructures médicales spécialisées", en: "Specialised medical facilities", pt: "Infraestruturas médicas especializadas" },
        ],
      },
    ],
    examples: [
      {
        fr: "Développement de projets hospitaliers structurants pour des territoires.",
        en: "Development of structuring hospital projects for territories.",
        pt: "Desenvolvimento de projetos hospitalares estruturantes para territórios.",
      },
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    icon: "HeartPulse",
  },
  {
    id: "public-infrastructure",
    slug: "infrastructures-publiques",
    name: {
      fr: "Infrastructures publiques",
      en: "Public infrastructure",
      pt: "Infraestruturas públicas",
    },
    short: {
      fr: "Des équipements au service de tous.",
      en: "Facilities serving everyone.",
      pt: "Equipamentos ao serviço de todos.",
    },
    description: {
      fr: "Administrations, universités, écoles et équipements publics : nous développons les bâtiments et infrastructures qui renforcent la capacité des institutions à servir les populations.",
      en: "Administrations, universities, schools and public facilities: we develop the buildings and infrastructure that strengthen the capacity of institutions to serve populations.",
      pt: "Administrações, universidades, escolas e equipamentos públicos: desenvolvemos os edifícios e infraestruturas que reforçam a capacidade das instituições de servir as populações.",
    },
    issues: {
      fr: "Modernisation de l'État, accès à l'éducation et qualité des services publics exigent des équipements adaptés et durables.",
      en: "State modernisation, access to education and quality public services call for adapted and durable facilities.",
      pt: "Modernização do Estado, acesso à educação e qualidade dos serviços públicos exigem equipamentos adaptados e duradouros.",
    },
    approach: {
      fr: "Pour les infrastructures publiques, nous accompagnons la modernisation de l'État et de ses équipements : administrations, universités, écoles et bâtiments publics. Nous développons des projets durables, financièrement soutenables et adaptés aux besoins des institutions.",
      en: "For public infrastructure, we support the modernisation of the State and its facilities: administrations, universities, schools and public buildings. We develop sustainable, financially sound projects adapted to the needs of institutions.",
      pt: "Para as infraestruturas públicas, acompanhamos a modernização do Estado e dos seus equipamentos: administrações, universidades, escolas e edifícios públicos. Desenvolvemos projetos duradouros, financeiramente sustentáveis e adaptados às necessidades das instituições.",
    },
    outcomes: [
      {
        fr: "Modernisation des services publics",
        en: "Modernising public services",
        pt: "Modernização dos serviços públicos",
      },
      {
        fr: "Accès élargi à l'éducation et à la formation",
        en: "Broader access to education and training",
        pt: "Acesso alargado à educação e à formação",
      },
      {
        fr: "Des équipements durables et adaptés aux territoires",
        en: "Durable facilities adapted to territories",
        pt: "Equipamentos duradouros e adaptados aos territórios",
      },
    ],
    projectTypes: [
      {
        title: { fr: "Équipements publics", en: "Public facilities", pt: "Equipamentos públicos" },
        items: [
          { fr: "Administrations", en: "Administrations", pt: "Administrações" },
          { fr: "Universités", en: "Universities", pt: "Universidades" },
          { fr: "Écoles", en: "Schools", pt: "Escolas" },
          { fr: "Infrastructures gouvernementales", en: "Government infrastructure", pt: "Infraestruturas governamentais" },
        ],
      },
    ],
    examples: [
      {
        fr: "Développement de campus universitaires et d'établissements d'enseignement.",
        en: "Development of university campuses and educational institutions.",
        pt: "Desenvolvimento de campi universitários e estabelecimentos de ensino.",
      },
    ],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    icon: "Landmark",
  },
  {
    id: "sport",
    slug: "sport",
    name: { fr: "Sport", en: "Sport", pt: "Desporto" },
    short: {
      fr: "Des infrastructures d'exception pour les grands événements.",
      en: "Exceptional venues for major events.",
      pt: "Infraestruturas de exceção para grandes eventos.",
    },
    description: {
      fr: "Stades, complexes sportifs et infrastructures événementielles : nous développons des équipements qui accueillent de grands événements et servent durablement les communautés.",
      en: "Stadiums, sports complexes and event infrastructure: we develop venues that host major events and durably serve communities.",
      pt: "Estádios, complexos desportivos e infraestruturas de eventos: desenvolvemos equipamentos que acolhem grandes eventos e servem duradouramente as comunidades.",
    },
    issues: {
      fr: "Organisation de compétitions internationales, développement du sport et valorisation économique des équipements après les événements.",
      en: "Hosting international competitions, sport development and the economic value of venues beyond events.",
      pt: "Organização de competições internacionais, desenvolvimento do desporto e valorização económica dos equipamentos após os eventos.",
    },
    approach: {
      fr: "Dans le sport, nous développons des stades, des complexes sportifs et des infrastructures événementielles capables d'accueillir de grands rendez-vous. Nous concevons des modèles économiques qui valorisent ces équipements bien au-delà des événements.",
      en: "In sport, we develop stadiums, sports complexes and event infrastructure able to host major gatherings. We design economic models that keep these venues valuable well beyond the events.",
      pt: "No desporto, desenvolvemos estádios, complexos desportivos e infraestruturas de eventos capazes de acolher grandes encontros. Concebemos modelos económicos que valorizam estes equipamentos muito para além dos eventos.",
    },
    outcomes: [
      {
        fr: "Accueil de compétitions internationales",
        en: "Hosting international competitions",
        pt: "Acolhimento de competições internacionais",
      },
      {
        fr: "Valorisation économique des équipements après les événements",
        en: "Economic value of venues beyond events",
        pt: "Valorização económica dos equipamentos após os eventos",
      },
      {
        fr: "Un héritage durable pour les communautés",
        en: "A lasting legacy for communities",
        pt: "Um legado duradouro para as comunidades",
      },
    ],
    projectTypes: [
      {
        title: { fr: "Infrastructures sportives", en: "Sports infrastructure", pt: "Infraestruturas desportivas" },
        items: [
          { fr: "Stades", en: "Stadiums", pt: "Estádios" },
          { fr: "Complexes sportifs", en: "Sports complexes", pt: "Complexos desportivos" },
          { fr: "Infrastructures événementielles", en: "Event infrastructure", pt: "Infraestruturas de eventos" },
        ],
      },
    ],
    examples: [
      {
        fr: "Développement de stades et de complexes pour des événements continentaux.",
        en: "Development of stadiums and complexes for continental events.",
        pt: "Desenvolvimento de estádios e complexos para eventos continentais.",
      },
    ],
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=1200&q=80",
    icon: "Trophy",
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
