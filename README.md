# Styled components workshop

Dette er ein workshop for deg som vil lære å bruke rammeverket Styled Components for React. Workshoppen tek utgangspunkt i at du har grunnleggande kjenskap til React, TypeScript og CSS.

Workshopen består av eit sett med oppgåver med gode forklaringar etter kvar oppgave. Oppgåvene har hint som kan hjelpe deg på vegen. Det finst også løysingsforslag i mappa "Solutions". Om du vil sjå løysingsforslaga i nettlesaren kommenterer du inn rett komponent i `Solutions.tsx` og huker av for "Vis fasit" i nettlesaren. "Vis fasit" let deg toggle mellom arbeidet ditt og fasiten.

[Styled Components sin dokumentasjon](https://styled-components.com/) kan også vere eit godt verktøy om du står fast. 

_Finn du bugs eller skrivefeil i koden vår er det veldig hyggeleg om du opprettar ein PR ås kan vi gjere koden betre saman_

## Starte applikasjonen

Last ned repoet ved å køyre følgjande kommandoar i terminalen:  
Klon repo: `git clone https://github.com/bekk/styled-components-workshop/`  
Naviger til mappa: `cd styled-components-workshop`  
Installer avhengigheiter: `npm install`  
Start applikasjonen: `npm run start`  

Åpne koden i din favoritteditor. Oppgåvene finn du her i README.


## Oppgåver

### Oppgåve 1 - Lag din første Styled Component

Du skal style oversikrifta på sida. Trekk ut `h1` til ein Styled Component i same fil.

Vi vil ha følgande styling:

-   tekststorleik 3rem
-   feit tekst (bold)
-   bølgete understrek

<br>
<details>
<summary>Hint 1</summary>

For å style understrek sjå: [text-decoration-style](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style)

</details>

<br>
<details>
<summary>Hint 2</summary>
Om vi vil style ei lenke gjer vi slik:

```typescript
styled.a`
  // styling her

`;
```

Du skal gjere det same, men for eit overskriftselement.

</details>

<br>

### Oppgave 2 - Selectorer

#### a) Rett ut understrek
Vi vil at når du peiker på overskrifta så retter understreken seg ut. 

<details>
<summary>Hint 1</summary>

I styled-components kan du nøste css-selectorar. Nøstinga i Styled components er veldig lik den i rammeverket [SCSS/Sass](https://sass-lang.com/guide) for dei som kjenner til det.

Døme:  
Vi har følgjande JSX-layout i ein komponent:

```jsx
<Container className="sc-container">
  <p>Vi vil at denne teksten skal bli raud</p>
  Denne teksten skal framleis vere svart.
</Container>
```

For å få få raud tekst på `p`-elementet kan vi gjere slik:

```typescript
const Container = styled.div`
  color: black;

  p {
    color: red;
  }
`;
```

Med rein CSS ville dette sett slik ut:

```css
div {
  color: black;
}

div p {
  color: red;
}
```

<br>

Nokre fordelar med at ein kan nøste selectorar i styled components:

-   Du slepp repetere selectorar
-   Det er lett å samle ulike tilstandar for ein komponent på same stad
-   Du kan manipulere innhaldet i komponentar du ikkje har laga sjølv

</details>

<br>
<details>
<summary>Hint 2</summary>

Nøsting fungerer også på pseudo-selektorar som :hover :first-child og :not().

Vi bruker teiknet `&` for å referere til gjeldande komponent.

</details>

<details>
<summary>Løysing</summary>

```typescript
`
  &:hover {
    // Rett ut understrek
  }
`
```
</details>


<br>

#### b) Media queries

Tittelen på sida vart litt stor på mobil. Endre tekststorleiken slik at den er 2rem for mobil, og 3 rem på alt frå tablet og opp.

Du finn breakpoints i `src/StyleTokens/breakpoints.ts`

Gjerne tenk mobile-first.

<br>
<details>
<summary>Hint 1</summary>

Styled components gjer det ikkje berre mogleg å nøste selectorar, men også [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries). Vi vil setje eigen styling for alle skjermar med ei breidd større enn storleiken til ein tablet.

</details>

<br>
<details>
<summary>Hint 2</summary>
Ein media query som ser på skjermstorleik kan sjå slik ut:

```css
@media (min-width: 40rem) {
  /* some styling here */
}
```

</details>

<br>
<details>
<summary>Hint 3</summary>
Styled components er basert på [template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Desse er notert med backticks (``). Template strings gjer at du kan veksle mellom å skrive "css" (tekststrengar) og JavaScript/TypeScript.

For å veksle mellom css og typescript bruker du `${}` inne i template stringen.

Dette gjer at du kan bruke dei forhandsdefinerte breakpointsa vi har laga inne i stylinga di.

</details>

<br>
<details>
<summary>Hint 4</summary>
Sidan vi kan blande inn TypeScript i koden vår har vi juksa litt og laga klart nokre konstantar for "tabletAndUp" og 
`tabletAndUp` og `desktopAndUp`. Desse er alias for `@media (min-width: ${someBreakpointValue})`.

For å bruke desse brukar du `tabletAndUp` på same måte som du ville brukt ein selector:

```
// inne i template string

  tabletAndUp {
    // some styling here
  }

```

Fordelen med dette er at det trengst litt mindre tenking for å lese at denne stylinga gjeld for tablet'ar og større skjermar enn det gjer å lese det same frå `@media (min-width: ${BREAKPOINTS.TABLET})`.

</details>

<br>

### Oppgave 3 - Ta inn props i komponent

#### a) Ta i bruk prop'en "backgroundColor"

Komponenten Plant har ein prop "backgroundColor". Ta denne i bruk så ein kan endre bakgrunnsfargen på kortet basert på verdien av backgroundColor.

Test løysinga di ved å sende inn for eksempel `COLORS.LIME_200` som bakgrunnsfarge på plantekorta.

_Bonusoppgave: Klarer du å farge annakvart kort grønt og grått?_

<br>
<details>
<summary>Hint 1</summary>

For å kunne bruke verdien av backgroundColor må den sendast vidare frå `Plant` til `Card`. Dette gjer vi på same måte som med props i vanlege React-komponentar.

</details>

<br>
<details>
<summary>Hint 2</summary>
Når vi sendar `backgroundColor` inn i `Card`-elementet i JSX vil editoren vår klage over at den ikkje er ein gyldig prop.

Sidan vi bruker TypeScript må vi definere forma på `props`-objektet til den styla komponenten.

Det kan for eksempel sjå slik ut:

```typescript
styled.div<{someProp: SomeType, anotherProp: AnotherType}>`
  // styling here
`
```

</details>

<br>
<details>
<summary>Hint 3</summary>
Vi har sendt backgroundColor inn i komponenten og definert typen av den – men korleis får vi eigentleg tak i sjølve verdien av props?

`{someProp: SomeType, anotherProp: AnotherType}`-objektet frå hint 2 heiter eigentleg "props". For å hente ut `someProp` gjer vi slik inne i template stringen:

```
  someCSSProperty: ${props => props.someProp};
```

</details>

<br>

#### b) Når fleire verdiar skal endrast basert på ein prop komponenten får inn

I components-mappa finn du komponenten Buttons som rendrar to Buttons. Vi vil at dei skal få ulik styling basert på kva variant vi sender inn som prop.

PRIMARY

-   tekst: `COLORS.BLUE_900`
-   bakgrunn: `COLORS.BLUE_500`

Andre variantar

-   tekst: `COLORS.WHITE`
-   bakgrunn: `palevioletred`

Du finn ein enum for variantar i `/StyleTokens/variants.ts`

<br>
<details>
<summary>Hint 1</summary>
I staden for å sende inn ein prop for tekst og ein for bakgrunn kan vi styre kva som skal visast basert på verdien til ein variant-prop.

Slik som i oppgåve 2a må vi sende inn ein prop til Button, definere type for den og hente den ut med `${props => props.propName}`. Du vel sjølv kva du vil kalle propen.

</details>

<br>

#### b) Justere farge basert på variant

I komponents mappa finner du en Button, vi ønsker at du bruker denne komponenten og sender in en prop som setter fargen COLORS.BLUE_900 om det er en PrimaryKnapp med med bakgrunnsfargen COLORS.BLUE_500 eller sette fargen til palevioletred med hvit bakgrunn.

<br>
<details>
<summary>Hint 2</summary>

Sidan vi skal ha lik styling for alle andre variantar enn PRIMARY kan vi bruke ein [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) til å velje kva farge som skal brukast, basert på verdien til prop-en du sendte inn til Button.

</details>

<br>

### Oppgave 4 - Style en eksisterende komponent

#### a) Overskrive bakgrunnsfarge

På plantekorta våre har vi ein "like"-knapp forma som eit hjarte (`LikeButton.tsx`). Vi vil at denne skal vere grøn på plantekorta våre (`Plant.tsx`), men den skal framleis vere raud om ein bruker den andre stadar.

Denne oppgåva skal løysast utan å endre koden i `LikeButton`.

<br>
<details>
<summary>Hint</summary>
Lag ein styled component som wrappar `LikeButton`
</details>

<br>
<details>
<summary>Hint 2</summary>

`styled.div` er ein forenkla måte å skrive `styled('div')` på. 'div' representerar html-elementet div slik <div> gjer det i JSX.

</details>

<br>
<details>
<summary>Hint 3</summary>

```typescript
import Component from 'componentLocation/component'

const SomeComponent = styled(Component)`
  // styling here
`;
```

(Hugs at du må bytte ut den "ustyla" komponenten med den nye du har laga)

</details>

<br>

#### b) Overskrive ein prop

Vi vil at like-knappen alltid skal ha size="big" på korta våre, men vil slippe å skrive det hver gang den brukes. Kan du fikse dette utan å endre `LikeButton.tsx`?

<br>
<details>
<summary>Hint 1</summary>
Det vi kallar "props" i JSX til vert kalla "attributes" når dei skal sendast vidare til ein styla komponent.
</details>

<br>
<details>
<summary>Hint 2</summary>

Les om `attrs` i dokumentasjonen til Styled Components:  https://styled-components.com/docs/basics#attaching-additional-props

</details>



<br>
<details>
<summary>Løysing</summary>

```typescript
const PlantLikeButton = styled(LikeButton).attrs({ size: "large" })`
    color: ${COLORS.LIME_600};
`;
```

</details>

<br>

### Oppgave 5 - Lag din eigen komponent

I denne oppgåva skal du få gjere alt sjølv.

<br>

#### a) Lag ein "tag"-komponent

Vi har lyst på ein komponent vi kan bruke som merkelapp, for eksempel til å markere ulike plantar i kategoriar. Tag-komponenten skal kunne ta inn ein prop "hidden" som gjer at den ikkje vert rendra (`return null`). Det skal gå an å sende inn valfri tekst til taggen.

<br>
Outputten av komponenten i DOMen skal vere noko liknande dette:

```html
<!-- HTML-->
<span class="sc-some-generated-classname some-other-hash"
    >Some tag text here</span
>
```

```css
/* CSS */
.some-other-hash {
    background: #ecfccb;
    border: 1px solid #65a30d;
    color: black;
    padding: 0.125rem 0.75rem;
    border-radius: 2px;
    width: fit-content;
}
```

Idé til korleis komponenten kan testast:  
Legg til ein tag med teksten "Indoor plant" på alle korta i Plants.

<br>

#### b) Lag ein custom-tag for "water"

Vi har lyst på ein forhandslaga Tag for kor mykje vatn planten treng. Kall denne WaterTag.

Alle Watertags skal ha teksten "Water: " og så valfri tekst ein kan sende inn i komponenten, slik at ein ikkje treng skrive inn dette for kvar enkelt Tag.

WaterTag skal ha denne stylinga annleis enn Tag:
bakgrunnsfarge: `BLUE_200`  
border: `BLUE_600`

Idé til korleis komponenten kan testast:  
Legg på WaterTags i Plant-komponenten og bruk `water`-verdien til plantane som tekst i tagen.

<br>

### Oppgave 6 - Theme Provider

Ved å bruke ThemeProvider kan vi wrappe in komponenter og dermed raskt sette opp flere tilpassede temaer.
Lag et theme som har fargen `BLUE_500` og `WHITE` som bakgrundsfarge, bruk tema for å sette farge på knapper plasser disse knappene under alle plantekortene.

 <details>
<summary>Hint</summary>

Ta i bruk en ThemeProvider rundt knappen

```
<ThemeProvider></ThemeProvider>

```

</details>

#### b) Gi knapper en Default farge

Nå ønsker vi at alle knapper som ikke bruker themet skal få fargen "palevioletred".

<details>
<summary>Hint</summary>

Ta i bruk `defaultProps` på knappen.

</details>

#### Mer tid ?

Les mer her om [Hvordan bruke ThemeProvider for å bytte mellom forskjellige temar](https://blog.logrocket.com/build-react-theme-switcher-app-styled-components/)
