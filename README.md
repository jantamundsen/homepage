# janamundsen.dev

Personlig nettside med prosjekter og notater. Bygget med [Astro](https://astro.build) og publisert med GitHub Pages.

## Kom i gang

```sh
npm install
npm run dev      # http://localhost:4321, viser også utkast
npm run build    # bygger til dist/
```

## Innhold

- **Prosjekter** ligger i `src/content/prosjekter/`, én Markdown-fil per prosjekt. Forsiden sorterer etter `rekkefølge` (lavest øverst), ikke etter dato.
- **Notater** ligger i `src/content/notater/` og sorteres etter `dato`, nyeste først. Sett `prosjekt: <filnavn uten .md>` for å knytte et notat til et prosjekt.
- **Navn, intro og kontaktinfo** står i `src/site.ts`. Tomme felt vises ikke.

Når du tar opp et gammelt prosjekt igjen, legger du til en linje i `historikk`. Prosjektet beholder plassen sin, men får merket «Oppdatert ÅÅÅÅ» på forsiden.

```yaml
historikk:
  - dato: 2026-10-01
    tekst: Første versjon.
  - dato: 2027-03-15
    tekst: La til budsjettet for 2027.
```

Sett `utkast: true` på et prosjekt eller notat for å skjule det på den publiserte siden.

## Publisering

Hver push til `main` bygges og publiseres av `.github/workflows/deploy.yml`. Engangsoppsett:

1. I repoet: **Settings → Pages → Source: GitHub Actions**.
2. Under **Custom domain**: skriv `janamundsen.dev` og huk av **Enforce HTTPS** når sertifikatet er klart.
3. Hos domeneleverandøren: legg inn A-postene `185.199.108.153`, `185.199.109.153`, `185.199.110.153` og `185.199.111.153` for `janamundsen.dev`, og eventuelt en CNAME-post `www` → `jantamundsen.github.io`.
