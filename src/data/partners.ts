import type { Partner } from "@/types";

/**
 * Partners - structured content.
 * Demo content: realistic but fictional partner names, aligned with the
 * types of institutions Méridian typically works with. Replace with the
 * company's real partners before any public publishing.
 * To add a real partner, duplicate the shape and set `name`/`type`.
 */
export const partners: Partner[] = [
  {
    id: "partner-public-1",
    category: "public",
    name: {
      fr: "Ministère des Infrastructures et des Transports",
      en: "Ministry of Infrastructure and Transport",
      pt: "Ministério das Infraestruturas e dos Transportes",
    },
    type: { fr: "Institution publique", en: "Public institution", pt: "Instituição pública" },
  },
  {
    id: "partner-public-2",
    category: "public",
    name: {
      fr: "Agence Nationale des Infrastructures",
      en: "National Infrastructure Agency",
      pt: "Agência Nacional das Infraestruturas",
    },
    type: { fr: "Agence publique", en: "Public agency", pt: "Agência pública" },
  },
  {
    id: "partner-finance-1",
    category: "finance",
    name: {
      fr: "Caisse Régionale d'Investissement",
      en: "Regional Investment Bank",
      pt: "Caixa Regional de Investimento",
    },
    type: { fr: "Banque de développement", en: "Development bank", pt: "Banco de desenvolvimento" },
  },
  {
    id: "partner-finance-2",
    category: "finance",
    name: {
      fr: "Banque Ouest-africaine de Crédit",
      en: "West African Credit Bank",
      pt: "Banco Oeste-africano de Crédito",
    },
    type: { fr: "Banque commerciale", en: "Commercial bank", pt: "Banco comercial" },
  },
  {
    id: "partner-investment-1",
    category: "investment",
    name: {
      fr: "Fonds Panafricain d'Investissement",
      en: "Pan-African Investment Fund",
      pt: "Fundo Pan-africano de Investimento",
    },
    type: { fr: "Fonds d'investissement", en: "Investment fund", pt: "Fundo de investimento" },
  },
  {
    id: "partner-investment-2",
    category: "investment",
    name: {
      fr: "Africa Capital Partners",
      en: "Africa Capital Partners",
      pt: "Africa Capital Partners",
    },
    type: { fr: "Investisseur", en: "Investor", pt: "Investidor" },
  },
  {
    id: "partner-technical-1",
    category: "technical",
    name: {
      fr: "Groupe d'Ingénierie du Sahel",
      en: "Sahel Engineering Group",
      pt: "Grupo de Engenharia do Sahel",
    },
    type: { fr: "Bureau d'études", en: "Engineering firm", pt: "Gabinete de estudos" },
  },
  {
    id: "partner-engineering-1",
    category: "engineering",
    name: {
      fr: "Ingénierie & Développement Afrique",
      en: "Engineering & Development Africa",
      pt: "Engenharia & Desenvolvimento África",
    },
    type: { fr: "Ingénierie des ouvrages", en: "Works engineering", pt: "Engenharia de obras" },
  },
  {
    id: "partner-construction-1",
    category: "construction",
    name: {
      fr: "BTP & Génie Civil Afrique",
      en: "Construction & Civil Works Africa",
      pt: "Construção & Obras Públicas África",
    },
    type: { fr: "Entreprise de construction", en: "Construction company", pt: "Empresa de construção" },
  },
  {
    id: "partner-technology-1",
    category: "technology",
    name: {
      fr: "Nova Tech Data",
      en: "Nova Tech Data",
      pt: "Nova Tech Data",
    },
    type: { fr: "Partenaire technologique", en: "Technology partner", pt: "Parceiro tecnológico" },
  },
];
