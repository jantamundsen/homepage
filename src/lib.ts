import { getCollection, type CollectionEntry } from 'astro:content';

const visUtkast = import.meta.env.DEV;

export async function hentProsjekter() {
  const alle = await getCollection('prosjekter', ({ data }) => visUtkast || !data.utkast);
  return alle.sort((a, b) => a.data.rekkefølge - b.data.rekkefølge);
}

// Aktive prosjekter i valgt rekkefølge.
export async function hentAktiveProsjekter() {
  return (await hentProsjekter()).filter((p) => !p.data.arkivert);
}

// Eldre prosjekter, nyeste først.
export async function hentArkiverteProsjekter() {
  return (await hentProsjekter())
    .filter((p) => p.data.arkivert)
    .sort((a, b) => b.data.år - a.data.år || a.data.rekkefølge - b.data.rekkefølge);
}

// Arkiverte prosjekter uten tekst får ingen egen side.
export const harSide = (p: CollectionEntry<'prosjekter'>) => !p.data.arkivert || !!p.body?.trim();

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

export const storForbokstav = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
