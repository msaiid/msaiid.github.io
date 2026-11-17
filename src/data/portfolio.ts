export const profile = {
  name: 'Muhammadsaiid Ibrohimov',
  shortName: 'M.Ibrohimov',
  title: 'Frontend Developer',
  role: 'Full-Stack',
  roleSuffix: 'Developer',
  tagline:
    'Создаю быстрые, масштабируемые и красивые продукты: сайты и веб-приложения, мобильные приложения для Android и iOS, боты и Telegram-боты — с вниманием к каждой детали.',
  available: 'Доступен для проектов',
  location: 'Душанбе, Таджикистан',
  email: 'muhammadsaiid@yandex.ru',
  github: 'https://github.com/msaiid',
  telegram: 'https://t.me/msaiid',
  photo: '/img/me.png',
} as const

export const stats = [
  { value: '6+', label: 'Лет опыта' },
  { value: '50+', label: 'Проектов' },
  { value: '5', label: 'Компаний' },
] as const

export const marqueeTech = [
  'React',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'SASS',
  'Tailwind',
  'Redux',
  'Zustand',
  'WordPress',
  'Bootstrap',
  'Figma',
  'Node.js',
  'Python',
  'PostgreSQL',
  'MongoDB',
] as const

export const navLinks = [
  { href: '#services', label: 'Услуги' },
  { href: '#experience', label: 'Опыт' },
  { href: '#skills', label: 'Навыки' },
  { href: '#contact', label: 'Контакт' },
] as const

export const services = [
  {
    icon: '⚛',
    title: 'Frontend-разработка',
    description:
      'Разработка фронтэнд части веб-сайтов и веб-приложений любой сложности',
    tags: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'SASS',
      'Redux',
      'Zustand',
      'Tailwind',
      'Bootstrap',
    ],
  },
  {
    icon: '◻',
    title: 'Адаптивная вёрстка',
    description:
      'Пиксельно точная вёрстка по макету или прототипу для любых устройств',
    tags: ['HTML5', 'CSS3', 'SASS/LESS', 'Tailwind', 'Bootstrap'],
  },
  {
    icon: '◈',
    title: 'Full-stack разработка',
    description:
      'Разработка сайтов начиная от лендинга, визитки и до интернет-магазинов',
    tags: ['WordPress', 'Tilda', 'Bitrix', 'Woocommerce', 'Elementor'],
  },
  {
    icon: '📱',
    title: 'Приложения и боты',
    description:
      'Мобильные приложения для Android и iOS, а также боты и Telegram-боты для автоматизации и сервисов',
    tags: ['Android', 'iOS', 'Telegram Bot', 'Боты', 'API интеграции'],
  },
] as const

export const experience = [
  {
    period: '2025 — Сейчас',
    company: 'Хуросон Холдинг',
    role: 'Разработчик ПО',
    location: 'Душанбе',
    index: '01',
  },
  {
    period: '2023 — 2024',
    company: 'Softclub Academy',
    role: 'Frontend Developer · Ментор',
    location: 'Душанбе',
    index: '02',
  },
  {
    period: '2022 — 2023',
    company: 'IT-Hill',
    role: 'Frontend Developer · Ментор · Team Lead',
    location: 'Бохтар',
    index: '03',
  },
  {
    period: '2021 — 2025',
    company: 'Freelance',
    role: 'Web Developer',
    location: null as string | null,
    note: 'Разработка, вёрстка, доработка сайтов',
    index: '04',
  },
  {
    period: '—',
    company: 'Havas T',
    role: 'Web Developer',
    location: 'Душанбе',
    index: '05',
  },
] as const

export const skillGroups = [
  {
    title: 'Frontend',
    items: [
      'React',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'Стилизация',
    items: [
      'SASS / LESS',
      'Tailwind CSS',
      'Bootstrap',
      'CSS Modules',
      'Styled Components',
    ],
  },
  {
    title: 'State / Tools',
    items: ['Redux', 'Zustand', 'Git / GitHub', 'Figma', 'Vite / Webpack'],
  },
  {
    title: 'CMS / Platforms',
    items: ['WordPress', 'Tilda', 'Bitrix', 'WooCommerce', 'Elementor'],
  },
  {
    title: 'Backend',
    items: [
      'Node.js',
      'Python',
      'Express',
      'REST API',
      'Telegram Bot API',
      'JWT / Auth',
    ],
  },
  {
    title: 'База данных',
    items: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'SQLite',
      'Redis',
      'Prisma / ORM',
    ],
  },
] as const