export interface Marca {
  slug: string
  nombre: string
  title: string
  description: string
  h1: string
  intro: string
  electrodomesticos: string[]
  specialties: string[]
  faq: { q: string; a: string }[]
}

export const MARCAS_SEO: Marca[] = [
  {
    slug: 'siemens',
    nombre: 'Siemens',
    title: 'Servicio Técnico Siemens Pamplona | Servitec Nafarroa',
    description: 'Técnico Siemens independiente en Pamplona y Navarra. Reparamos lavadoras, lavavajillas, frigoríficos y más. Mismo día, 365 días. Llama: 634 006 304.',
    h1: 'Servicio técnico Siemens en Pamplona',
    intro: 'Siemens es una de las marcas de electrodomésticos más vendidas y valoradas en España. En Servitec Nafarroa somos técnicos independientes especializados en electrodomésticos Siemens en Pamplona y toda Navarra. Con más de 20 años de experiencia, conocemos a fondo la tecnología de esta marca alemana y disponemos de repuestos originales para la mayoría de averías.',
    electrodomesticos: [
      'Lavadoras Siemens',
      'Lavavajillas Siemens',
      'Frigoríficos y congeladores Siemens',
      'Hornos Siemens',
      'Vitrocerámicas y placas de inducción Siemens',
      'Secadoras Siemens',
      'Microondas Siemens',
      'Campanas extractoras Siemens',
    ],
    specialties: [
      'Diagnóstico de errores electrónicos en modelos iQ300, iQ500 e iQ700',
      'Reparación de módulos WiFi y conectividad Home Connect',
      'Cambio de rodamientos y escobillas en lavadoras Siemens',
      'Reparación de placas de inducción con tecnología flexInduction',
    ],
    faq: [
      {
        q: '¿Sois el servicio técnico oficial de Siemens en Pamplona?',
        a: 'No somos el SAT oficial de Siemens, somos técnicos independientes multimarca. Esto nos permite ofrecer precios más competitivos y mayor flexibilidad horaria (365 días, incluidos festivos), sin perder calidad en la reparación.',
      },
      {
        q: '¿Cuánto cuesta reparar un electrodoméstico Siemens en Pamplona?',
        a: 'El diagnóstico a domicilio cuesta 40 € + IVA. La reparación incluye 20 € + IVA de mano de obra más el repuesto si es necesario. La mayoría de reparaciones de electrodomésticos Siemens están entre 60 € y 160 €.',
      },
      {
        q: '¿Tenéis repuestos originales Siemens?',
        a: 'Sí, trabajamos con repuestos originales Siemens y compatibles de alta calidad. Indicamos siempre qué tipo de pieza se va a instalar antes de hacer la reparación.',
      },
    ],
  },
]
