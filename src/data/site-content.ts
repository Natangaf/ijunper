export type NavItem = {
  href: string;
  label: string;
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  problem: string;
  howItWorks: string[];
  benefits: string[];
  cta: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  segment: string;
  before: string;
  strategy: string;
  result: string;
  metrics: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: "Estratégia" | "Branding" | "Marketing" | "Empreendedorismo";
  excerpt: string;
  readTime: string;
  publishedAt: string;
  content: string[];
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/cases", label: "Cases" },
  { href: "/blog", label: "Blog" },
  { href: "/lp", label: "Captação" },
  { href: "/contato", label: "Contato" },
];

export const stats = [
  { value: "+120", label: "marcas atendidas com estratégia e execução" },
  { value: "4x", label: "mais clareza no posicionamento em ciclos de consultoria" },
  { value: "93%", label: "dos clientes chegam por indicação ou recorrência" },
];

export const pains = [
  "Sua empresa investe, mas não transforma marketing em vendas previsíveis.",
  "A marca até aparece, mas não ocupa um lugar forte na mente do cliente.",
  "As ações acontecem sem direção, sem prioridade e sem leitura de resultado.",
];

export const solutionPillars = [
  {
    title: "Estratégia",
    text: "Diagnóstico real do negócio, posicionamento claro e plano de crescimento com metas viáveis.",
  },
  {
    title: "Execução",
    text: "Ações integradas de marketing, branding e comunicação para sair do papel com consistência.",
  },
  {
    title: "Crescimento",
    text: "Acompanhamento contínuo para ajustar rota, escalar o que funciona e sustentar autoridade.",
  },
];

export const services: Service[] = [
  {
    slug: "marketing-estrategico",
    name: "Marketing Estratégico",
    short: "Plano de ação para gerar demanda, autoridade e crescimento sustentável.",
    description:
      "Para empresas que já entenderam que postar não basta. A I Jumper conecta objetivos comerciais, posicionamento e comunicação em um plano que move o negócio.",
    problem:
      "Resolve a falta de direção comercial e de marketing, quando a empresa faz muito e avança pouco.",
    howItWorks: [
      "Mapeamento do cenário atual, concorrência, percepção de marca e oportunidades.",
      "Definição de metas, persona, canais prioritários e mensagem central.",
      "Desdobramento do plano em calendário, campanhas, indicadores e rotina de acompanhamento.",
    ],
    benefits: [
      "Mais clareza sobre onde investir.",
      "Comunicação alinhada com vendas.",
      "Decisões guiadas por objetivo e não por improviso.",
    ],
    cta: "Quero estruturar meu marketing",
  },
  {
    slug: "branding",
    name: "Branding",
    short: "Construa percepção de valor, consistência visual e presença memorável.",
    description:
      "Branding para empresas que precisam parar de competir por preço e começar a ser lembradas pelo valor que entregam.",
    problem:
      "Resolve a falta de identidade, diferenciação e coerência na forma como a empresa se apresenta.",
    howItWorks: [
      "Imersão na essência da marca, proposta de valor e mercado.",
      "Construção de território verbal, narrativa e direcionamento visual.",
      "Criação de guias práticos para aplicação consistente em canais e materiais.",
    ],
    benefits: [
      "Mais autoridade percebida.",
      "Marca mais forte e coerente.",
      "Maior conexão com o público certo.",
    ],
    cta: "Quero fortalecer minha marca",
  },
  {
    slug: "lancamentos",
    name: "Lançamentos",
    short: "Estratégias para abrir mercado, validar ofertas e vender com tração.",
    description:
      "Planejamento e operação de campanhas de lançamento para negócios, serviços e produtos que precisam ganhar velocidade com estrutura.",
    problem:
      "Resolve lançamentos improvisados, sem narrativa, sem esteira de conversão e sem acompanhamento de performance.",
    howItWorks: [
      "Definição da oferta, promessa, público e gatilhos de campanha.",
      "Estruturação de aquecimento, captação, relacionamento e fechamento.",
      "Análise de métricas para otimizar aquisição, conversão e retenção.",
    ],
    benefits: [
      "Maior taxa de conversão.",
      "Melhor aproveitamento da audiência.",
      "Campanhas com mensagem e fluxo mais claros.",
    ],
    cta: "Quero lançar com estratégia",
  },
  {
    slug: "consultoria-empresarial",
    name: "Consultoria Empresarial",
    short: "Decisão estratégica para crescer com organização, foco e propósito.",
    description:
      "Consultoria para líderes que precisam enxergar o negócio com mais clareza, corrigir gargalos e crescer com uma estratégia consistente.",
    problem:
      "Resolve estagnação, desalinhamento entre áreas e ausência de plano de crescimento para o negócio.",
    howItWorks: [
      "Levantamento dos principais gargalos comerciais, operacionais e de posicionamento.",
      "Priorização das frentes com maior impacto em receita, percepção e estrutura.",
      "Plano de ação com acompanhamento consultivo e tomada de decisão orientada por cenário.",
    ],
    benefits: [
      "Gestão mais estratégica.",
      "Crescimento com menos dispersão.",
      "Decisões mais seguras e rápidas.",
    ],
    cta: "Quero apoio consultivo",
  },
];

export const testimonials = [
  {
    name: "Ana Luiza Ferreira",
    role: "CEO, Studio Vitale",
    quote:
      "A I Jumper organizou o nosso posicionamento e transformou a comunicação em um motor de vendas. Saímos da improvisação para a clareza.",
  },
  {
    name: "Carlos Mendes",
    role: "Diretor, Grupo Atlas",
    quote:
      "Não foi só marketing. Foi revisão de estratégia, proposta de valor e processo comercial. O resultado apareceu em percepção e conversão.",
  },
  {
    name: "Patrícia Nunes",
    role: "Fundadora, N8 Educação",
    quote:
      "As campanhas passaram a ter direção, argumento e propósito. A marca ganhou autoridade e o time passou a executar com muito mais confiança.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "rebranding-studio-vitale",
    client: "Studio Vitale",
    segment: "Saúde e bem-estar",
    before:
      "A clínica tinha baixa diferenciação e dependia de indicações isoladas para crescer.",
    strategy:
      "Reposicionamento da marca, novo discurso comercial, plano de conteúdo e funil de relacionamento.",
    result:
      "Marca mais premium, agenda com maior previsibilidade e aumento consistente na procura por procedimentos de ticket alto.",
    metrics: ["+62% em leads qualificados", "+38% em ticket médio", "Reposicionamento em 90 dias"],
  },
  {
    slug: "lancamento-n8-educacao",
    client: "N8 Educação",
    segment: "Educação",
    before:
      "A empresa possuía um produto forte, mas sem narrativa clara de lançamento e sem esteira de nutrição.",
    strategy:
      "Estruturação de campanha em três fases, página de captação, sequência de relacionamento e reforço de autoridade.",
    result:
      "O lançamento ganhou previsibilidade, melhor aproveitamento da base e mensagens mais alinhadas à dor do público.",
    metrics: ["3,4x mais inscritos", "+27% de conversão na oferta", "CAC reduzido na segunda campanha"],
  },
  {
    slug: "consultoria-grupo-atlas",
    client: "Grupo Atlas",
    segment: "Serviços B2B",
    before:
      "A operação crescia sem coordenação entre marketing, vendas e posicionamento institucional.",
    strategy:
      "Diagnóstico executivo, alinhamento de proposta de valor, priorização comercial e plano de comunicação por etapa da jornada.",
    result:
      "Empresa mais organizada na aquisição de clientes e com discurso mais claro para diferentes segmentos.",
    metrics: ["Pipeline mais previsível", "Melhor alinhamento entre áreas", "Nova agenda trimestral de crescimento"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "como-posicionar-sua-marca-com-mais-clareza",
    title: "Como posicionar sua marca com mais clareza em mercados competitivos",
    category: "Estratégia",
    excerpt:
      "Posicionamento não é slogan. É a forma como o mercado entende por que escolher sua empresa.",
    readTime: "4 min",
    publishedAt: "2026-03-10",
    content: [
      "Marcas que crescem com consistência não tentam falar com todo mundo. Elas entendem a própria força, definem um território claro e repetem essa mensagem com precisão.",
      "O primeiro passo é identificar a dor central que a sua empresa resolve melhor do que outras. Isso exige olhar para clientes, concorrentes e percepção atual de mercado.",
      "Depois disso, o posicionamento precisa aparecer em tudo: proposta comercial, discurso de vendas, site, conteúdo, redes sociais e experiência de atendimento. Quando a mensagem muda o tempo inteiro, a autoridade se enfraquece.",
      "Clareza gera eficiência. E eficiência reduz desperdício de energia, verba e oportunidade.",
    ],
  },
  {
    slug: "branding-que-aumenta-percepcao-de-valor",
    title: "Branding que aumenta percepção de valor sem depender de preço baixo",
    category: "Branding",
    excerpt:
      "Quando a marca transmite valor de forma coerente, o cliente para de comparar apenas preço.",
    readTime: "5 min",
    publishedAt: "2026-03-04",
    content: [
      "Branding não é apenas identidade visual. É a soma entre linguagem, consistência, promessa e experiência percebida pelo cliente.",
      "Empresas que competem só por preço geralmente têm um problema anterior: o valor não está claro. Isso pode acontecer por comunicação genérica, oferta mal apresentada ou imagem desconectada da entrega.",
      "Trabalhar branding significa organizar esses sinais para que o mercado entenda o que torna sua empresa relevante. Quando isso acontece, a comparação deixa de ser superficial.",
      "Uma marca forte não precisa falar mais alto. Precisa falar melhor e com mais coerência.",
    ],
  },
  {
    slug: "marketing-para-empreendedores-que-precisam-vender",
    title: "Marketing para empreendedores que precisam vender com menos improviso",
    category: "Marketing",
    excerpt:
      "Marketing eficiente começa quando a empresa define prioridade, processo e leitura de resultado.",
    readTime: "6 min",
    publishedAt: "2026-02-26",
    content: [
      "A rotina de muitos empreendedores é reagir ao dia a dia. O problema é que marketing reativo quase sempre produz comunicação fragmentada.",
      "Antes de pensar em canal, ferramenta ou tendência, é preciso entender quais objetivos comerciais devem ser apoiados pelo marketing. Captação? Recompra? Autoridade? Expansão?",
      "Com isso definido, a empresa ganha foco para criar campanhas, conteúdos e ofertas que conversem com o momento do negócio. O resultado é menos dispersão e mais consistência.",
      "Improvisar consome energia. Estratégia devolve direção.",
    ],
  },
  {
    slug: "crescimento-com-proposito-para-pequenas-empresas",
    title: "Crescimento com propósito para pequenas empresas que querem escalar",
    category: "Empreendedorismo",
    excerpt:
      "Crescer não significa fazer mais de tudo. Significa fazer melhor o que realmente move o negócio.",
    readTime: "4 min",
    publishedAt: "2026-02-18",
    content: [
      "Muitas empresas crescem no volume e perdem força na direção. Isso acontece quando o crescimento não está amarrado a prioridades claras.",
      "Crescimento com propósito exige escolher quais frentes merecem investimento, quais clientes fazem mais sentido e qual percepção a marca deseja consolidar.",
      "Ao alinhar estratégia, comunicação e operação, a empresa ganha escala com mais consistência e reduz o risco de crescer desorganizada.",
      "No fim, propósito não deixa o negócio mais lento. Ele deixa o crescimento mais inteligente.",
    ],
  },
];

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/ijumpermarketing" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "WhatsApp", href: "https://wa.me/5500000000000" },
];
