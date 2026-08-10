import type { TeamMember } from "@/types";

/**
 * Team - structured content.
 * Demo content: realistic but fictional leadership profiles.
 * Replace with the company's real team before any public publishing.
 * Members are hidden until `published` is set to `true`.
 */
export const team: TeamMember[] = [
  {
    id: "member-1",
    name: { fr: "Surya Aniel MACKLYMAN", en: "Surya Aniel MACKLYMAN", pt: "Surya Aniel MACKLYMAN" },
    role: {
      fr: "Président & Directeur général",
      en: "President & Chief Executive Officer",
      pt: "Presidente & Diretor-Geral",
    },
    bio: {
      fr: "Plus de 20 ans d'expérience dans le développement de projets d'infrastructures en Afrique. Il a fondé Méridian en 2011 à Brazzaville avec la conviction que les projets structurants naissent d'un travail rigoureux de structuration.",
      en: "More than 20 years of experience in infrastructure project development in Africa. He founded Méridian in 2011 in Brazzaville with the conviction that structuring projects are born from rigorous structuring work.",
      pt: "Mais de 20 anos de experiência no desenvolvimento de projetos de infraestruturas em África. Fundou a Méridian em 2011 em Brazzaville com a convicção de que os projetos estruturantes nascem de um trabalho rigoroso de estruturação.",
    },
    linkedin: undefined,
    photo: undefined,
    published: false,
  },
  {
    id: "member-2",
    name: { fr: "Gloire Loemba", en: "Gloire Loemba", pt: "Gloire Loemba" },
    role: {
      fr: "Directeur de la structuration financière",
      en: "Director of Financial Structuring",
      pt: "Diretor de Estruturação Financeira",
    },
    bio: {
      fr: "Expert en ingénierie financière et montage de projets, il pilote les plans de financement et les relations avec les banques, les fonds et les institutions financières internationales.",
      en: "An expert in financial engineering and project finance, he leads financing plans and relations with banks, funds and international financial institutions.",
      pt: "Especialista em engenharia financeira e financiamento de projetos, lidera os planos de financiamento e as relações com bancos, fundos e instituições financeiras internacionais.",
    },
    linkedin: undefined,
    photo: undefined,
    published: false,
  },
  {
    id: "member-3",
    name: { fr: "Grâce Milandou", en: "Grâce Milandou", pt: "Grâce Milandou" },
    role: {
      fr: "Directrice du développement de projets",
      en: "Director of Project Development",
      pt: "Diretora de Desenvolvimento de Projetos",
    },
    bio: {
      fr: "Elle conduit l'identification, le cadrage et le développement des projets, de l'émergence de l'opportunité jusqu'à la constitution d'un dossier crédible et documenté.",
      en: "She leads the identification, scoping and development of projects, from the emergence of the opportunity to the constitution of a credible and documented file.",
      pt: "Conduz a identificação, o enquadramento e o desenvolvimento dos projetos, desde a emergência da oportunidade até à constituição de um dossier credível e documentado.",
    },
    linkedin: undefined,
    photo: undefined,
    published: false,
  },
  {
    id: "member-4",
    name: { fr: "Roland Samba", en: "Roland Samba", pt: "Roland Samba" },
    role: {
      fr: "Directeur des partenariats institutionnels",
      en: "Director of Institutional Partnerships",
      pt: "Diretor de Parcerias Institucionais",
    },
    bio: {
      fr: "Il anime l'écosystème de partenaires publics, financiers et techniques, et coordonne les consortiums de réalisation des grands projets d'infrastructures.",
      en: "He fosters the ecosystem of public, financial and technical partners, and coordinates the delivery consortia of major infrastructure projects.",
      pt: "Dinamiza o ecossistema de parceiros públicos, financeiros e técnicos e coordena os consórcios de realização dos grandes projetos de infraestruturas.",
    },
    linkedin: undefined,
    photo: undefined,
    published: false,
  },
];
