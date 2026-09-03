// Fuente única de verdad para las categorías del blog.
// Añadir una categoría aquí la habilita en el frontmatter (Zod), en el listado
// y en la página del artículo. No dupliques este mapa en los componentes.

export const CATEGORY_SLUGS = [
  'control-de-peso',
  'lesiones-deportivas',
  'enfermedades-cronicas',
  'sarcopenia',
  'medicina-del-deporte',
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export const CATEGORY_LABELS: Record<CategorySlug, string> = {
  'control-de-peso':       'Control de peso',
  'lesiones-deportivas':   'Lesiones deportivas',
  'enfermedades-cronicas': 'Enfermedades crónicas',
  'sarcopenia':            'Sarcopenia',
  'medicina-del-deporte':  'Medicina del Deporte',
};

export function categoryLabel(slug: string): string {
  return CATEGORY_LABELS[slug as CategorySlug] ?? slug;
}
