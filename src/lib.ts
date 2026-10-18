import { getCollection, type CollectionEntry } from 'astro:content';

const visUtkast = import.meta.env.DEV;

export async function hentProsjekter() {
  const alle = await getCollection('prosjekter', ({ data }) => visUtkast || !data.utkast);
  return alle.sort((a, b) => a.data.rekkefølge - b.data.rekkefølge);
}

export async function hentNotater() {
  const alle = await getCollection('notater', ({ data }) => visUtkast || !data.utkast);
  return alle.sort((a, b) => b.data.dato.getTime() - a.data.dato.getTime());
}

const måned = new Intl.DateTimeFormat('nb-NO', { month: 'short', year: 'numeric' });
export const formaterMåned = (d: Date) => måned.format(d);

// Året for siste oppdatering, hvis den er senere enn startåret.
export function oppdatertÅr(p: CollectionEntry<'prosjekter'>) {
  const siste = Math.max(...p.data.historikk.map((h) => h.dato.getFullYear()), p.data.år);
  return siste > p.data.år ? siste : undefined;
}
