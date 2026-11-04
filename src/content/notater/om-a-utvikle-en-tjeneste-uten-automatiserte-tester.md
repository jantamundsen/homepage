---
tittel: Om å utvikle en tjeneste uten automatiserte tester
beskrivelse: Spleis har ingen automatiserte tester. Hvorfor de ble slettet, og hva som gjør at det fungerer.
dato: 2025-01-15
type: podkast
utkast: false
---

Jeg har jobbet i Spleis siden 2017, et fintech-selskap med to millioner unike brukere i måneden. Kodebasen har ingen automatiserte tester, og er skrevet i JavaScript i både frontend og backend, uten typer. Det høres nok uansvarlig ut for mange, men jeg har sett det fungere godt i mange år.

I 2018 slettet utviklingsteamet nesten alle testene. Bare noen få tester rundt prissetting ble igjen. Produktet var umodent og endret seg raskt, og jeg opplevde at testene bremset oss mer enn de hjalp. Jeg klarte ikke å forsvare kostnaden med å lage og vedlikeholde dem. For et lite selskap stod det mellom å lykkes eller å forsvinne, og hastighet var det som trengtes.

Hvis vi hadde tester i dag er jeg ikke sikker på om jeg ville slettet dem. Produktet er større og mer modent, og kost-nytte er nok litt annerledes. Samtidig kjenner jeg ikke på behovet for å innføre dem igjen.

Man får fleksibilitet, handlingsrom og fart. Til gjengjeld krever det en bestemt måte å organisere seg på, og et tankesett der hver utvikler tar mye ansvar selv.

Jeg mener at automatiserte tester kan gi falsk trygghet. En av de større feilene i Spleis de siste årene var på prisen på digitale skrapelodd, altså et av de få stedene det faktisk fantes tester. Testen sjekket at prisfunksjonen regnet riktig, men ikke at lodd kjøpt via en bestemt inngang fikk riktig prisfunksjon. Man må teste for utrolig mange scenarier for at testene skal fange alt.

- **Utvikleren følger endringen hele veien ut.** Man tester lokalt, lager en pull request som en annen utvikler ser på, og hver pull request får sin egen instans av appen. Etter merge går det til testmiljøet og så til produksjon, og den som skrev koden sjekker at det virker der også.
- **Små endringer og rask tilbakerulling.** Jo mindre som går ut om gangen, jo bedre. Det tar få minutter å rulle tilbake, så små feil er ikke farlige.
- **Feature-flagg.** Større funksjoner går ut bit for bit, skjult bak et flagg. Da kan man teste i produksjon med ekte data før alle får tilgang.
- **En monolitt med tydelige skiller.** Spleis er bevisst en monolitt, fordi det er enklere for et lite team. Domenene er skilt fra hverandre, og et domene kan bare snakke med et annet via en eksplisitt eksportert liste med funksjoner. Derfor oppstår det sjelden feil langt unna der endringen ble gjort. Jeg tror de fleste monolitter blir et makkverk fordi skillene mangler, ikke fordi de er monolitter.
- **Et lite, stabilt team som kjenner hele systemet.** Få utviklere, lite utskifting, og alle jobber fullstack. Ingen blir skjermet fra noen del av systemet.
- **Vaktordning.** Én utvikler har vakt en uke om gangen, og tar i tillegg småoppgaver og teknisk vedlikehold på dagtid. Når alle går vakt, lærer alle hele systemet.
- **Overvåking og kundeservice.** Varsler sier fra når noe feiler i produksjon. Kundeservice svarer i en chat på spleis.no og melder raskt fra om feil. Med så mye trafikk får vi ofte raskt info om noe er galt.
- **Alle sier fra.** Fra daglig leder til designere og de som jobber med utbetalinger, alle sier fra når noe ser rart ut. Jeg tror eierskap og kjærlighet til produktet er det aller viktigste.
- **Det er lov å gjøre feil.** Spleis er ikke en samfunnskritisk tjeneste, og feil kan rettes raskt.

Det har også sine kostnader. Etter hvert som Spleis har vokst med dugnad, organisasjoner og et samarbeid om fond i gave, har ikke alle jobbet med alt. Det blir høyere terskel for å endre noe man ikke kjenner.

Jeg tror mange team har godt av å spørre seg: Hva ville skjedd om vi slettet de automatiserte testene og sluttet å skrive nye? Ville vi fått mer gjort, og hvor mange flere feil ville dukket opp? Spørsmålet er verdt å stille seg om man plages med mye friksjon fra testene.

[Hør episoden på Acast](https://shows.acast.com/apen-kilde/episodes/er-produktutvikling-uten-automatiserte-tester-mulig)
