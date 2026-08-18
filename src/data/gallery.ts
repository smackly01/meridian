import type { GalleryPhoto } from "@/types";

/**
 * Client photo gallery - "Des partenariats construits sur le terrain".
 * Demo content: captions and locations are realistic but illustrative.
 * Real client photos take priority over stock imagery.
 */
export const gallery: GalleryPhoto[] = [
  {
    id: "g1",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    caption: {
      fr: "Rencontre institutionnelle avec les autorités autour du corridor autoroutier.",
      en: "Institutional meeting with the authorities on the highway corridor.",
      pt: "Encontro institucional com as autoridades sobre o corredor rodoviário.",
    },
    context: {
      fr: "Avancement du partenariat public-privé.",
      en: "Progress of the public-private partnership.",
      pt: "Progresso da parceria público-privada.",
    },
    location: { fr: "Dakar, Sénégal", en: "Dakar, Senegal", pt: "Dakar, Senegal" },
  },
  {
    id: "g2",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    caption: {
      fr: "Signature de l'accord-cadre de partenariat.",
      en: "Signing of the framework partnership agreement.",
      pt: "Assinatura do acordo-quadro de parceria.",
    },
    context: {
      fr: "Engagement réciproque autour d'un portefeuille de projets.",
      en: "Mutual commitment around a portfolio of projects.",
      pt: "Compromisso mútuo em torno de um portefólio de projetos.",
    },
    location: { fr: "Ouagadougou, Burkina Faso", en: "Ouagadougou, Burkina Faso", pt: "Ouagadougou, Burquina Faso" },
  },
  {
    id: "g3",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    caption: {
      fr: "Visite technique de site dans le cadre du programme d'eau potable.",
      en: "Technical site visit as part of the drinking water programme.",
      pt: "Visita técnica ao local no âmbito do programa de água potável.",
    },
    context: {
      fr: "Présence terrain avec les équipes du projet.",
      en: "On-site presence with the project teams.",
      pt: "Presença no terreno com as equipas do projeto.",
    },
    location: { fr: "Bouaké, Côte d'Ivoire", en: "Bouaké, Côte d'Ivoire", pt: "Bouaké, Costa do Marfim" },
  },
  {
    id: "g4",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    caption: {
      fr: "Conférence sur le financement des infrastructures africaines.",
      en: "Conference on African infrastructure financing.",
      pt: "Conferência sobre o financiamento das infraestruturas africanas.",
    },
    context: {
      fr: "Échanges avec la communauté financière internationale.",
      en: "Discussions with the international finance community.",
      pt: "Debates com a comunidade financeira internacional.",
    },
    location: { fr: "Paris, France", en: "Paris, France", pt: "Paris, França" },
  },
  {
    id: "g5",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    caption: {
      fr: "Concertation sur la structuration et le financement du parc solaire.",
      en: "Consultation on the structuring and financing of the solar park.",
      pt: "Concertação sobre a estruturação e o financiamento do parque solar.",
    },
    context: {
      fr: "Avec les partenaires financiers et institutionnels.",
      en: "With financial and institutional partners.",
      pt: "Com os parceiros financeiros e institucionais.",
    },
    location: { fr: "Niamey, Niger", en: "Niamey, Niger", pt: "Niamey, Níger" },
  },
  {
    id: "g6",
    image:
      "https://images.unsplash.com/photo-1758519289200-384c7ef2d163?auto=format&fit=crop&w=1200&q=80",
    caption: {
      fr: "Réunion de travail avec les partenaires du data center.",
      en: "Working session with the data centre partners.",
      pt: "Sessão de trabalho com os parceiros do data center.",
    },
    context: {
      fr: "Avancement du projet et prochaines étapes.",
      en: "Project progress and next steps.",
      pt: "Progresso do projeto e próximos passos.",
    },
    location: { fr: "Kigali, Rwanda", en: "Kigali, Rwanda", pt: "Kigali, Ruanda" },
  },
];
