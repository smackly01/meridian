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
      fr: "Routes, rails, ports, aéroports, transport urbain.",
      en: "Roads, rail, ports, airports, urban transport.",
      pt: "Estradas, ferrovias, portos, aeroportos, transporte urbano.",
    },
    description: {
      fr: "Le transport décide du prix de presque tout : ce qu'un pays produit, importe ou exporte passe par une route, un rail, un port ou un aéroport. Quand un maillon manque ou sature, c'est toute une région qui est pénalisée. Nous développons des projets qui rétablissent ces liaisons et les rendent finançables.",
      en: "Transport sets the price of almost everything: what a country produces, imports or exports goes through a road, a railway, a port or an airport. When a link is missing or saturated, a whole region pays for it. We develop projects that restore these links and make them fundable.",
      pt: "O transporte determina o preço de quase tudo: o que um país produz, importa ou exporta passa por uma estrada, uma ferrovia, um porto ou um aeroporto. Quando falta um elo ou este fica saturado, é toda uma região que sai penalizada. Desenvolvemos projetos que restabelecem essas ligações e as tornam financiáveis.",
    },
    issues: {
      fr: "Villes qui grandissent vite, corridors régionaux à fiabiliser, zones de production enclavées, coût et délais du fret. Les besoins sont connus. Ce qui bloque, c'est le passage au financement.",
      en: "Fast-growing cities, regional corridors that need to become reliable, landlocked production areas, freight costs and delays. The needs are known. What holds projects back is getting to financing.",
      pt: "Cidades que crescem depressa, corredores regionais a tornar fiáveis, zonas de produção isoladas, custos e prazos do frete. As necessidades são conhecidas. O que bloqueia é a passagem ao financiamento.",
    },
    approach: {
      fr: "Nous identifions le maillon à traiter en priorité, nous vérifions le trafic attendu et la capacité à payer, puis nous montons le financement, souvent en partenariat public-privé. Nous suivons le projet des premières études jusqu'à la mise en service.",
      en: "We identify the link to tackle first, check expected traffic and ability to pay, then put the financing together, often as a public-private partnership. We follow the project from the first studies through to commissioning.",
      pt: "Identificamos o elo a tratar em prioridade, verificamos o tráfego esperado e a capacidade de pagamento e montamos o financiamento, muitas vezes em parceria público-privada. Acompanhamos o projeto desde os primeiros estudos até à entrada em serviço.",
    },
    outcomes: [
      {
        fr: "Désenclavement des territoires et accès élargi aux marchés",
        en: "Remote areas connected and wider access to markets",
        pt: "Territórios desencravados e acesso alargado aos mercados",
      },
      {
        fr: "Baisse des coûts et des temps de transport",
        en: "Lower transport costs and shorter journey times",
        pt: "Redução dos custos e dos tempos de transporte",
      },
      {
        fr: "Un cadre juridique et financier qui tient dans la durée",
        en: "A legal and financial framework that holds over time",
        pt: "Um enquadramento jurídico e financeiro que se mantém no tempo",
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
      fr: "Production, transport et distribution d'électricité.",
      en: "Power generation, transmission and distribution.",
      pt: "Produção, transporte e distribuição de eletricidade.",
    },
    description: {
      fr: "Sans électricité fiable, ni l'industrie ni les services publics ne tiennent. Beaucoup de réseaux produisent trop peu, transportent mal ou coûtent cher. Nous développons des projets de production, de transport et de distribution qui augmentent la capacité disponible et sécurisent le réseau.",
      en: "Without reliable electricity, neither industry nor public services can function. Many grids generate too little, transmit poorly or cost too much. We develop generation, transmission and distribution projects that add capacity and secure the grid.",
      pt: "Sem eletricidade fiável, nem a indústria nem os serviços públicos se aguentam. Muitas redes produzem pouco, transportam mal ou custam caro. Desenvolvemos projetos de produção, transporte e distribuição que aumentam a capacidade disponível e tornam a rede mais segura.",
    },
    issues: {
      fr: "Taux d'accès encore faible, coût du kilowattheure, place des énergies renouvelables, stabilité du réseau, équilibre financier des sociétés d'électricité.",
      en: "Access rates still low, cost per kilowatt-hour, the role of renewables, grid stability, the financial health of power utilities.",
      pt: "Taxa de acesso ainda baixa, custo do quilowatt-hora, lugar das energias renováveis, estabilidade da rede, equilíbrio financeiro das empresas de eletricidade.",
    },
    approach: {
      fr: "Nous évaluons la demande et la solvabilité de l'acheteur, nous structurons le contrat d'achat d'électricité et le financement, et nous réunissons les partenaires industriels capables de construire et d'exploiter.",
      en: "We assess demand and the buyer's creditworthiness, structure the power purchase agreement and the financing, and bring in industrial partners able to build and operate.",
      pt: "Avaliamos a procura e a solvabilidade do comprador, estruturamos o contrato de compra de eletricidade e o financiamento, e reunimos os parceiros industriais capazes de construir e explorar.",
    },
    outcomes: [
      {
        fr: "Élargissement de l'accès à l'électricité",
        en: "Wider access to electricity",
        pt: "Acesso alargado à eletricidade",
      },
      {
        fr: "Approvisionnement et réseau plus sûrs",
        en: "More secure supply and grid",
        pt: "Abastecimento e rede mais seguros",
      },
      {
        fr: "Intégration réussie des énergies renouvelables",
        en: "Renewables integrated into the grid",
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
      fr: "Production d'eau potable, distribution, assainissement.",
      en: "Drinking water production, distribution, sanitation.",
      pt: "Produção de água potável, distribuição, saneamento.",
    },
    description: {
      fr: "L'eau potable et l'assainissement conditionnent la santé publique et la vie des villes. Les réseaux vieillissent, les pertes sont fortes, la ressource se tend. Nous développons des projets qui sécurisent la production et étendent l'accès, avec un modèle qui permet de les entretenir dans la durée.",
      en: "Drinking water and sanitation shape public health and city life. Networks are ageing, losses are high, the resource is under strain. We develop projects that secure production and extend access, with a model that allows them to be maintained over time.",
      pt: "A água potável e o saneamento condicionam a saúde pública e a vida das cidades. As redes envelhecem, as perdas são elevadas, o recurso escasseia. Desenvolvemos projetos que asseguram a produção e alargam o acesso, com um modelo que permite mantê-los ao longo do tempo.",
    },
    issues: {
      fr: "Pression sur la ressource, croissance urbaine, pertes en réseau, équilibre tarifaire, adaptation au climat.",
      en: "Pressure on the resource, urban growth, network losses, tariff balance, climate adaptation.",
      pt: "Pressão sobre o recurso, crescimento urbano, perdas na rede, equilíbrio tarifário, adaptação ao clima.",
    },
    approach: {
      fr: "Nous dimensionnons le besoin, nous choisissons le montage d'exploitation (régie, affermage, concession), nous bâtissons le modèle financier et nous cherchons les financements concessionnels adaptés à un service à tarif encadré.",
      en: "We size the need, choose the operating model (direct management, lease, concession), build the financial model and seek concessional financing suited to a service with regulated tariffs.",
      pt: "Dimensionamos a necessidade, escolhemos o modelo de exploração (gestão direta, arrendamento, concessão), construímos o modelo financeiro e procuramos os financiamentos concessionais adequados a um serviço de tarifa regulada.",
    },
    outcomes: [
      {
        fr: "Accès durable à l'eau potable",
        en: "Lasting access to drinking water",
        pt: "Acesso duradouro à água potável",
      },
      {
        fr: "Moins de pertes, réseaux modernisés",
        en: "Fewer losses, modernised networks",
        pt: "Menos perdas, redes modernizadas",
      },
      {
        fr: "Santé des populations mieux protégée",
        en: "Better protected public health",
        pt: "Saúde das populações mais protegida",
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
      fr: "Réseaux, connectivité, centres de données.",
      en: "Networks, connectivity, data centres.",
      pt: "Redes, conectividade, centros de dados.",
    },
    description: {
      fr: "Réseaux, connectivité et centres de données sont devenus des infrastructures de base, au même titre que la route ou l'électricité. Nous développons des projets qui étendent la couverture et donnent aux États une capacité d'hébergement maîtrisée.",
      en: "Networks, connectivity and data centres have become basic infrastructure, just like roads or electricity. We develop projects that extend coverage and give governments hosting capacity under their own control.",
      pt: "Redes, conectividade e centros de dados tornaram-se infraestruturas de base, tal como a estrada ou a eletricidade. Desenvolvemos projetos que alargam a cobertura e dão aos Estados uma capacidade de alojamento sob o seu controlo.",
    },
    issues: {
      fr: "Zones encore non couvertes, dépendance vis-à-vis d'hébergeurs étrangers, coût du transit international, besoin croissant de capacité de calcul et de stockage.",
      en: "Areas still without coverage, dependence on foreign hosting providers, the cost of international transit, growing demand for computing and storage capacity.",
      pt: "Zonas ainda sem cobertura, dependência de alojamentos estrangeiros, custo do trânsito internacional, necessidade crescente de capacidade de cálculo e armazenamento.",
    },
    approach: {
      fr: "Nous évaluons les usages et les revenus attendus, nous structurons un modèle souvent partagé entre plusieurs opérateurs, et nous mobilisons les financements et les partenaires techniques.",
      en: "We assess expected usage and revenue, structure a model often shared between several operators, and bring in the financing and the technical partners.",
      pt: "Avaliamos as utilizações e as receitas esperadas, estruturamos um modelo muitas vezes partilhado entre vários operadores e mobilizamos os financiamentos e os parceiros técnicos.",
    },
    outcomes: [
      {
        fr: "Couverture étendue aux zones aujourd'hui hors réseau",
        en: "Coverage extended to areas currently off the network",
        pt: "Cobertura alargada às zonas hoje fora da rede",
      },
      {
        fr: "Capacité d'hébergement des données publiques maîtrisée par l'État",
        en: "Public data hosting capacity under government control",
        pt: "Capacidade de alojamento dos dados públicos controlada pelo Estado",
      },
      {
        fr: "Coût du transit international réduit",
        en: "Lower international transit costs",
        pt: "Custo do trânsito internacional reduzido",
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
