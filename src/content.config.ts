import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const prosjekter = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/prosjekter' }),
  schema: z.object({
    tittel: z.string(),
    beskrivelse: z.string(),
    // Året prosjektet startet. Endres ikke når prosjektet tas opp igjen.
    år: z.number().int(),
    // Lavest tall står øverst på forsiden.
    rekkefølge: z.number(),
    type: z.string().optional(),
    kildekode: z.string().url().optional(),
    lenke: z.string().url().optional(),
    // Nyeste først eller sist, spiller ingen rolle: listen sorteres ved visning.
    historikk: z
      .array(z.object({ dato: z.coerce.date(), tekst: z.string() }))
      .default([]),
    utkast: z.boolean().default(false),
  }),
});

const notater = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notater' }),
  schema: z.object({
    tittel: z.string(),
    dato: z.coerce.date(),
    prosjekt: reference('prosjekter').optional(),
    utkast: z.boolean().default(false),
  }),
});

export const collections = { prosjekter, notater };
