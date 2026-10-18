---
tittel: Juralis
beskrivelse: Verifiserte og versjonerte data om EUs og FATFs lister over høyrisikoland, slik at man alltid kan bevise hvilken liste som gjaldt på en gitt dato.
år: 2026
rekkefølge: 3
type: Data og nettsider
lenke: https://highriskcountries.eu
historikk:
  - dato: 2026-10-06
    tekst: Prosjektet startet, med teknisk spesifikasjon, database og import av historikken til EU- og FATF-listene.
  - dato: 2026-10-09
    tekst: highriskcountries.eu publisert, med dagens lister og en side per land.
  - dato: 2026-10-14
    tekst: Varsel på e-post når listene endres, og juralis.eu publisert.
  - dato: 2026-10-15
    tekst: highriskcountries.eu på tysk, fransk og spansk.
---

Banker og andre som må følge hvitvaskingsregelverket, må vite hvilke land som står på EUs og FATFs lister over høyrisikoland. Listene endres jevnlig, og de publiseres på hver sin måte. Det er lett å gå glipp av en endring, og vanskelig å dokumentere i ettertid hvilken liste som gjaldt da en beslutning ble tatt.

Juralis samler listene som verifiserte og versjonerte data. Målet er at du aldri går glipp av en endring, og at du alltid kan vise hvilken liste som gjaldt på en bestemt dato.

## Hva det består av

- **[highriskcountries.eu](https://highriskcountries.eu)**: en gratis side som viser dagens lister, en side per land og forklaringer på hvordan listene fungerer. Den finnes på engelsk, tysk, fransk og spansk, og du kan få varsel på e-post når listene endres.
- **[juralis.eu](https://juralis.eu)**: produktsiden. Planen er et betalt API med full historikk, oppslag på dato og endringsvarsler.

## Slik er det laget

Hver endring lagres som en hendelse som aldri overskrives, i PostgreSQL. Hele historikken er importert, blant annet rundt 600 hendelser fra FATF. Ved hver utgivelse bygges et komplett og uforanderlig øyeblikksbilde av dataene, og nettsidene leser bare fra dette. Dataene skiller mellom når en endring ble *kunngjort* og når den faktisk *gjelder*.

Nettsidene er bygget med Astro og kjører på Cloudflare Pages. En liten jobb på Cloudflare bygger dem på nytt hver natt, slik at datoene alltid stemmer.
