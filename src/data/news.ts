import type { NewsItem } from "@/types";

/**
 * News - structured content, easily extended.
 * Demo content: realistic but fictional news items, oriented towards
 * African infrastructure markets. Replace with the company's real
 * publications before any public publishing.
 * `date` should be an ISO date string (YYYY-MM-DD).
 * `published: true` renders the item on the site (temporarily enabled for demo).
 */
export const news: NewsItem[] = [
  {
    id: "n1",
    slug: "accord-cadre-partenariat-afrique-de-l-ouest",
    title: {
      fr: "Méridian signe un accord-cadre de partenariat avec un État d'Afrique de l'Ouest",
      en: "Méridian signs a framework partnership agreement with a West African state",
      pt: "Méridian assina um acordo-quadro de parceria com um Estado da África Ocidental",
    },
    category: "partnership",
    date: "2026-06-15",
    image:
      "https://images.unsplash.com/photo-1758519289200-384c7ef2d163?auto=format&fit=crop&w=1200&q=80",
    excerpt: {
      fr: "Méridian a signé un accord-cadre avec un État d'Afrique de l'Ouest portant sur le développement et la structuration d'un portefeuille d'infrastructures stratégiques à horizon 2030.",
      en: "Méridian has signed a framework agreement with a West African state covering the development and structuring of a portfolio of strategic infrastructure projects by 2030.",
      pt: "A Méridian assinou um acordo-quadro com um Estado da África Ocidental relativo ao desenvolvimento e à estruturação de um portfólio de infraestruturas estratégicas até 2030.",
    },
    body: [
      {
        fr: "Méridian et les autorités nationales ont officialisé, le 12 juin 2026, la signature d'un accord-cadre de partenariat portant sur le développement, la structuration et le financement d'un portefeuille d'infrastructures stratégiques.",
        en: "On 12 June 2026, Méridian and the national authorities formalised the signing of a framework partnership agreement covering the development, structuring and financing of a portfolio of strategic infrastructure projects.",
        pt: "A 12 de junho de 2026, a Méridian e as autoridades nacionais formalizaram a assinatura de um acordo-quadro de parceria relativo ao desenvolvimento, à estruturação e ao financiamento de um portefólio de infraestruturas estratégicas.",
      },
      {
        fr: "Le portefeuille prioritaire comprend des projets de transport, d'énergie et d'accès à l'eau identifiés pour leur impact structurant sur l'économie du pays. Chaque projet fera l'objet d'un montage dédié, associant partenaires financiers internationaux et investisseurs privés.",
        en: "The priority portfolio includes transport, energy and water access projects identified for their structuring impact on the country's economy. Each project will be given a dedicated structure, bringing together international financial partners and private investors.",
        pt: "O portefólio prioritário inclui projetos de transporte, energia e acesso à água identificados pelo seu impacto estruturante na economia do país. Cada projeto será objeto de uma estrutura dedicada, reunindo parceiros financeiros internacionais e investidores privados.",
      },
      {
        fr: "Cet accord confirme la confiance accordée à Méridian pour faire émerger des projets bancables, mobiliser les financements adaptés et accompagner leur réalisation, dans le respect des priorités stratégiques du pays.",
        en: "This agreement confirms the trust placed in Méridian to bring bankable projects to life, mobilise appropriate financing and support their delivery, in line with the country's strategic priorities.",
        pt: "Este acordo confirma a confiança depositada na Méridian para fazer emergir projetos bancáveis, mobilizar os financiamentos adequados e acompanhar a sua realização, em conformidade com as prioridades estratégicas do país.",
      },
    ],
    published: true,
  },
  {
    id: "n2",
    slug: "pose-premiere-pierre-port-sec-ouagadougou",
    title: {
      fr: "Pose de la première pierre du port sec de Ouagadougou",
      en: "Groundbreaking ceremony for the Ouagadougou dry port",
      pt: "Colocação da primeira pedra do porto seco de Ouagadougou",
    },
    category: "project",
    date: "2026-04-08",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    excerpt: {
      fr: "La cérémonie de pose de la première pierre du port sec de Ouagadougou s'est tenue en présence des autorités, marquant le lancement des travaux d'une infrastructure logistique majeure.",
      en: "The groundbreaking ceremony for the Ouagadougou dry port was held in the presence of the authorities, marking the start of works on a major logistics infrastructure.",
      pt: "A cerimónia de colocação da primeira pedra do porto seco de Ouagadougou realizou-se na presença das autoridades, marcando o início das obras de uma importante infraestrutura logística.",
    },
    body: [
      {
        fr: "Le 4 avril 2026, la pose de la première pierre du port sec de Ouagadougou a réuni les autorités nationales, les partenaires financiers et les équipes de Méridian autour du lancement officiel des travaux.",
        en: "On 4 April 2026, the groundbreaking ceremony for the Ouagadougou dry port brought together national authorities, financial partners and Méridian's teams for the official launch of works.",
        pt: "A 4 de abril de 2026, a colocação da primeira pedra do porto seco de Ouagadougou reuniu as autoridades nacionais, os parceiros financeiros e as equipas da Méridian em torno do lançamento oficial das obras.",
      },
      {
        fr: "Étendu sur 40 hectares, l'ouvrage accueillera une plateforme logistique, des zones de stockage et des services douaniers intégrés. Il viendra doubler la capacité de traitement des conteneurs du pays et réduire sensiblement les coûts logistiques.",
        en: "Spanning 40 hectares, the facility will host a logistics platform, storage areas and integrated customs services. It will double the country's container handling capacity and significantly reduce logistics costs.",
        pt: "Com 40 hectares, a obra acolherá uma plataforma logística, zonas de armazenamento e serviços aduaneiros integrados. Duplicará a capacidade de tratamento de contentores do país e reduzirá significativamente os custos logísticos.",
      },
      {
        fr: "La livraison est prévue dans 24 mois. À terme, l'infrastructure devrait générer plusieurs centaines d'emplois directs et renforcer la compétitivité du corridor Abidjan – Ouagadougou.",
        en: "Delivery is scheduled within 24 months. In time, the infrastructure should generate several hundred direct jobs and strengthen the competitiveness of the Abidjan – Ouagadougou corridor.",
        pt: "A entrega está prevista em 24 meses. A infraestrutura deverá gerar várias centenas de postos de trabalho diretos e reforçar a competitividade do corredor Abidjan – Ouagadougou.",
      },
    ],
    published: true,
  },
  {
    id: "n3",
    slug: "cloture-structuration-financiere-parc-solaire-dosso",
    title: {
      fr: "Méridian clôture la structuration financière du parc solaire de Dosso",
      en: "Méridian closes the financial structuring of the Dosso solar park",
      pt: "Méridian conclui a estruturação financeira do parque solar de Dosso",
    },
    category: "press",
    date: "2025-12-10",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    excerpt: {
      fr: "La structuration financière du parc solaire photovoltaïque de Dosso (80 MWc) est finalisée : un financement mixte associant institutions de développement et investisseurs privés est sécurisé.",
      en: "The financial structuring of the Dosso solar photovoltaic park (80 MWp) is complete: a blended financing combining development institutions and private investors has been secured.",
      pt: "A estruturação financeira do parque solar fotovoltaico de Dosso (80 MWp) está concluída: foi assegurado um financiamento misto que combina instituições de desenvolvimento e investidores privados.",
    },
    body: [
      {
        fr: "Méridian annonce la finalisation de la structuration financière du parc solaire photovoltaïque de Dosso, d'une puissance de 80 MWc, situé au Niger.",
        en: "Méridian announces the completion of the financial structuring of the Dosso solar photovoltaic park, with a capacity of 80 MWp, located in Niger.",
        pt: "A Méridian anuncia a conclusão da estruturação financeira do parque solar fotovoltaico de Dosso, com uma potência de 80 MWp, localizado no Níger.",
      },
      {
        fr: "Le montage réunit des institutions financières de développement, un fonds dédié aux énergies renouvelables et des investisseurs privés, dans le cadre d'un financement mixte adapté à l'envergure du projet. Le contrat de construction a été notifié et la réalisation a débuté.",
        en: "The structure brings together development finance institutions, a dedicated renewable energy fund and private investors under a blended financing tailored to the project's scale. The construction contract has been awarded and delivery has started.",
        pt: "A estrutura reúne instituições de financiamento ao desenvolvimento, um fundo dedicado às energias renováveis e investidores privados, no âmbito de um financiamento misto adaptado à dimensão do projeto. O contrato de construção foi notificado e a realização começou.",
      },
      {
        fr: "Mise en service prévue en 2028, l'installation alimentera plus de 250 000 foyers et contribuera à la diversification du mix énergétique national.",
        en: "Scheduled for commissioning in 2028, the facility will power more than 250,000 households and contribute to diversifying the national energy mix.",
        pt: "Com entrada em serviço prevista para 2028, a instalação alimentará mais de 250.000 lares e contribuirá para a diversificação do mix energético nacional.",
      },
    ],
    published: true,
  },
  {
    id: "n4",
    slug: "Méridian-au-forum-infrastructures-dakar",
    title: {
      fr: "Méridian au Forum africain des infrastructures de Dakar",
      en: "Méridian at the Dakar African Infrastructure Forum",
      pt: "Méridian no Fórum africano das infraestruturas de Dakar",
    },
    category: "conference",
    date: "2025-10-22",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    excerpt: {
      fr: "Méridian a participé au Forum africain des infrastructures de Dakar, dédié au financement des grands projets structurants du continent.",
      en: "Méridian took part in the Dakar African Infrastructure Forum, dedicated to financing the continent's major structuring projects.",
      pt: "A Méridian participou no Fórum africano das infraestruturas de Dakar, dedicado ao financiamento dos grandes projetos estruturantes do continente.",
    },
    body: [
      {
        fr: "Du 20 au 22 octobre 2025, l'équipe de Méridian a participé au Forum africain des infrastructures de Dakar, réunissant gouvernements, institutions financières et développeurs de projets.",
        en: "From 20 to 22 October 2025, the Méridian team took part in the Dakar African Infrastructure Forum, bringing together governments, financial institutions and project developers.",
        pt: "De 20 a 22 de outubro de 2025, a equipa da Méridian participou no Fórum africano das infraestruturas de Dakar, reunindo governos, instituições financeiras e promotores de projetos.",
      },
      {
        fr: "Dans le cadre d'un panel dédié à la bancabilité des projets, Méridian a partagé son retour d'expérience sur les facteurs clés qui transforment un besoin territorial en infrastructure financée et réalisée.",
        en: "During a panel dedicated to project bankability, Méridian shared its experience on the key factors that turn a territorial need into a financed and delivered infrastructure.",
        pt: "Num painel dedicado à bancabilidade dos projetos, a Méridian partilhou a sua experiência sobre os fatores-chave que transformam uma necessidade territorial numa infraestrutura financiada e realizada.",
      },
      {
        fr: "Ce rendez-vous a également permis d'engager de nouvelles discussions avec des partenaires financiers et institutionnels autour de projets en développement.",
        en: "The event also provided an opportunity to open new discussions with financial and institutional partners around projects under development.",
        pt: "O evento permitiu igualmente iniciar novas discussões com parceiros financeiros e institucionais em torno de projetos em desenvolvimento.",
      },
    ],
    published: true,
  },
  {
    id: "n5",
    slug: "infrastructures-afrique-du-besoin-au-projet-bancable",
    title: {
      fr: "Infrastructures en Afrique : du besoin au projet bancable",
      en: "Infrastructure in Africa: from need to bankable project",
      pt: "Infraestruturas em África: da necessidade ao projeto bancável",
    },
    category: "analysis",
    date: "2025-09-03",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    excerpt: {
      fr: "L'Afrique présente le déficit d'infrastructures le plus important du monde. Analyse des conditions qui permettent de transformer un besoin en projet finançable.",
      en: "Africa faces the world's largest infrastructure gap. An analysis of the conditions that turn a need into a financeable project.",
      pt: "África apresenta o maior défice de infraestruturas do mundo. Análise das condições que permitem transformar uma necessidade num projeto financiável.",
    },
    body: [
      {
        fr: "Le déficit d'infrastructures du continent est estimé à plusieurs centaines de milliards d'euros par an. Pourtant, les besoins ne manquent pas : mobilité, énergie, eau, santé, connectivité. Ce qui fait défaut, c'est la capacité à transformer ces besoins en projets structurés et bancables.",
        en: "The continent's infrastructure gap is estimated at several hundred billion euros per year. Yet needs are plentiful: mobility, energy, water, health, connectivity. What is lacking is the capacity to turn these needs into structured and bankable projects.",
        pt: "O défice de infraestruturas do continente é estimado em várias centenas de milhares de milhões de euros por ano. No entanto, as necessidades não faltam: mobilidade, energia, água, saúde, conectividade. O que falta é a capacidade de transformar estas necessidades em projetos estruturados e bancáveis.",
      },
      {
        fr: "Un projet bancable repose sur quatre piliers : une demande clairement documentée, un cadre juridique et contractuel solide, un modèle économique crédible et une répartition maîtrisée des risques. Chacun de ces piliers doit être construit avec rigueur dès les premières études.",
        en: "A bankable project rests on four pillars: a clearly documented demand, a solid legal and contractual framework, a credible economic model and a controlled allocation of risks. Each pillar must be built rigorously from the earliest studies.",
        pt: "Um projeto bancável assenta em quatro pilares: uma procura claramente documentada, um quadro jurídico e contratual sólido, um modelo económico credível e uma repartição controlada dos riscos. Cada um destes pilares deve ser construído com rigor desde os primeiros estudos.",
      },
      {
        fr: "C'est précisément ce travail de structuration - technique, juridique, financière et opérationnelle - qui fait émerger des projets que les banques, les fonds et les investisseurs peuvent accompagner. Il constitue le cœur du métier de Méridian.",
        en: "It is precisely this structuring work - technical, legal, financial and operational - that brings to life projects that banks, funds and investors can support. It is the core of Méridian's business.",
        pt: "É precisamente este trabalho de estruturação - técnico, jurídico, financeiro e operacional - que faz emergir projetos que os bancos, os fundos e os investidores podem apoiar. Constitui o núcleo da atividade da Méridian.",
      },
    ],
    published: true,
  },
];
