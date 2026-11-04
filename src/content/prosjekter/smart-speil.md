---
tittel: Smart-speil
beskrivelse: Et speil i gangen som våkner når noen står foran det, og hilser med navn ved hjelp av ansiktsgjenkjenning.
år: 2016
rekkefølge: 100
type: Raspberry Pi og Arduino
kildekode: https://github.com/jantamundsen/MMM-Facial-Recognition
arkivert: true
historikk:
  - dato: 2016-10-11
    tekst: Første versjon med ansiktsgjenkjenning og lys i rammen.
  - dato: 2017-09-15
    tekst: Sjekk av humør, og varmere farge på lyset i rammen.
  - dato: 2018-05-10
    tekst: Raskere gjenkjenning og nye hilsener for kjente og ukjente.
---

![Speilet på veggen i gangen viser vær, klokke og «Hei Jan!».](./bilder/smart-speil.jpg)

Bak et toveisspeil sitter en skjerm, en Raspberry Pi med kamera og en avstandssensor. Når noen kommer nær nok, slås skjermen og lyset rundt rammen på. Kameraet tar et bilde, og Microsofts ansiktsgjenkjenning (Azure Face API) finner ut hvem i husstanden det er. Speilet hilser deg med navn, og ukjente får en egen hilsen.

Skjermen kjører [MagicMirror²](https://magicmirror.builders) med klokke, værvarsel og nyheter. Ansiktsgjenkjenningen er en egen modul skrevet i Python og JavaScript. En Arduino styrer LED-stripen rundt rammen.

Speilet hang i gangen til vi pusset opp leiligheten. Da ble det tatt ned, og det har ikke blitt hengt opp igjen.

![Prototypen på skrivebordet, med kamera og Raspberry Pi ved siden av.](./bilder/smart-speil-prototype.jpg)

![Innmaten: skjerm, Raspberry Pi og Arduino bak glasset.](./bilder/smart-speil-innmat.jpg)

![Speilet ferdig montert i gangen.](./bilder/smart-speil-gangen.jpg)
