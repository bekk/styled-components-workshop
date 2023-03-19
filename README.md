# Styled components workshop

Dette er en workshop for deg som vil lære Styled Components rammeverket for React. Workshopen består av et sett med oppgaver, med gode forklaringer etter hver oppgave.

Styled Components dokumentasjon som du kan lese: https://styled-components.com/

## Starte applikasjonen
Last ned repoet ved å kjøre kommandoen:  
 `git clone https://github.com/bekk/styled-components-workshop/` i terminalen.  
Naviger til root-folderen ved å kjøre cd styled-components-workshop.
Start appen ved å kjøre `npm install` og deretter `npm start`.  
Åpne koden i din favoritteditor, naviger til src/App og følg instruksjonene derifra!

### Oppgave 0

(Ting Ingrid og Anne Line skal gjere)
2023-03-16
Startpunkt til neste gong
- Finne ut kva vi gjer med oppgåve 2b (kanskje lage ein nav-bar?)
- lage fasit for 3b
- lag Button-komponent og oppgåve 4
- bytt plass på oppg. 4 og 5
- lag komponent som kan stylast i oppg "5" (like-knapp, så kan dei overskrive fargen)
- Anne Line startar på presentasjon

- Gjer det mogleg å vise fasit på oppgåve 3
- Skrive inn hint i readme
- Lage nav-bar-komponent som ein kan style ???
- _Lage Button, den skal ha default-size="medium"_
- _Lage størrelsesobjekt for knapp_

### Oppgave 1 - Lag din første Styled Component

Du skal style oversikrifta på sida. Trekk ut `h1` til ein Styled Component i same fil.

Vi vil ha følgande styling:

-   tekststorleik 3rem
-   feit tekst (bold)
-   bølgete understrek

<details>
<summary>Hint</summary>
hint: text-decoration-style
https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style
</details>

```
styled.h1`


`;
```

### Oppgave 2 - Selectorer

a) Vi vil at når du peiker på overskrifta så retter understreken seg ut

hint: `:hover`

```
`
  &:hover {
    // Rett ut understrek
  }
`

```

b)

```
`
  p { // eller eit anna barn
    // Finn på noe bra
  }
`

```

c) Media queries
Tittelen på sida vart litt stor på mobil. Endre tekststorleiken slik at den er 2rem for mobil mindre enn tablet, og 3 rem på alt frå tablet og opp.

Du finn breakpoints i `src/StyleTokens/breakpoints.ts`

<details>
<summary>Hint</summary>
(@media...) og template strings
</details>

<details>
<summary>Hint</summary>
Tablet-and-up
Den fancy enkle måten å gjere det på
</details>

### Oppgave 3 - Ta inn props i komponent (Button)

a)
Komponenten Plant har ein prop "backgroundColor". Ta denne i bruk så ein kan endre bakgrunnsfargen på kortet basert på verdien av backgroundColor.


```
const Something =styled.div<{size: string}>`
  width: ${(props) => props.size}rem;
`
```

<details>
<summary>Hint</summary>

</details>


b) Skjul beskrivelsen 
Mål: lære "hvis something vis dette else noko anna"

### Oppgave 4 - Ta inn props frå objekt

(Obligatorisk "her er det mange måter å gjøre det på", men vi har valgt en.)

Vi har laga eit objekt med styling for 3 størrelser. (padding, font-size)
Send inn ein storleik basert på input i komponenten
Bruk verdier i objektet der dei skal endre ting.

b) Designsystemet har blitt oppdatert og fra nå av skal vi ha ulik border-radius på ulike størrelser.
small: 4px
medium: 4px
large: 8px

### Oppgave 5 - Style en eksisterende komponent

Det finst ein Button allereie. Vi har lyst på ein deleknapp som skal vere [annan farge].

Hint: Lag ein styled component som wrapper den eksisterende komponenten Button.

```
styled(EksisterendeKomponent)`


`;
```

### Oppgave n - Deleknapp revisited

Vi vil at deleknappen alltid skal vere Button size="small", men vil slippe å skrive det hver gang den brukes. Kan du fikse dette?

### Oppgave 6 - Den der du lærer at du må ha med className

Vi har ein komponent som har litt state. Du skal lage en style'a utgave av denne. [skriv kva anna styling den skal ha.]

Lykke til.

Hint: du må feilsøke, hehe

### Oppgave 7 - Velge elementer inni seg basert på state

Når vi hovrer kort vil vi ha undrestrek på overskriften inni der - og bare den

```
&:hover h2 {


}
```

### Oppgave 8 - Animasjoner <3

Uten å bruke js

### Oppgave n -
