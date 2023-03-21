# Styled components workshop

Dette er en workshop for deg som vil lære Styled Components rammeverket for React. Workshopen består av et sett med oppgaver, med gode forklaringer etter hver oppgave.

Styled Components dokumentasjon som du kan lese: https://styled-components.com/

## Starte applikasjonen

Last ned repoet ved å kjøre kommandoen:  
 `git clone https://github.com/bekk/styled-components-workshop/` i terminalen.  
Naviger til root-folderen ved å kjøre cd styled-components-workshop.
Start appen ved å kjøre `npm install` og deretter `npm run start`.  
Åpne koden i din favoritteditor, naviger til src/App og følg instruksjonene derifra!


<details>
<summary>Hint</summary>


</details>

## Oppgaver

### Oppgave 1 - Lag din første Styled Component

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

```
styled.h1`
  // styling her

`;
```

</details>


### Oppgave 2 - Selectorer

 a) Vi vil at når du peiker på overskrifta så retter understreken seg ut  


<details>
<summary>Hint 1</summary>

I styled-components kan du nøste css-selectorar. Nøstinga i Styled components er veldig lik den i rammeverket [SCSS/Sass](https://sass-lang.com/guide) for dei som kjenner til det.

Døme:  
Vi har følgjande JSX-layout i ein komponent:
```
<Container className="sc-container">
  <p>Vi vil at denne teksten skal bli raud</p>
  Denne teksten skal framleis vere svart.
</Container>
```

For å få få raud tekst på `p`-elementet kan vi gjere slik:

```
const Container = styled.div`
  color: black;
  
  p {
    color: red;
  }
`;
```


Med rein CSS ville dette sett slik ut: 

```
div {
  color: black;
}

div p { 
  color: red;
}
```

<br>

Nokre fordelar med at ein kan nøste selectorar i styled components:
- Du slepp repetere selectorar
- Det er lett å samle ulike tilstandar for ein komponent på same stad
- Du kan manipulere innhaldet i komponentar du ikkje har laga sjølv

</details>

<br>
<details>
<summary>Hint 2</summary>

Nøsting fungerer også på pseudo-selektorar som :hover :first-child og :not().

Vi bruker teiknet `&` for å referere til gjeldande komponent

```
`
  &:hover {
    // Rett ut understrek
  }
`
```

</details>


b) Media queries  
Tittelen på sida vart litt stor på mobil. Endre tekststorleiken slik at den er 2rem for mobil, og 3 rem på alt frå tablet og opp.
Du finn breakpoints i `src/StyleTokens/breakpoints.ts`

Gjerne tenk mobile-first.

<br>
<details>
<summary>Hint 1</summary>
Styled components gjer det mogleg å nøste media queries.
</details>

<br>
<details>
<summary>Hint 2</summary>
Styled components er basert på template strings [lenke her]
For å veksle mellom css og typescript bruker du `${}`.
</details>

<br>
<details>
<summary>Hint 3</summary>
// TODO howto media query

</details>



<br>
<details>
<summary>Hint 4</summary>
// TODO
Tablet-and-up
Den fancy enkle måten å gjere det på
</details>


### Oppgave 3 - Ta inn props i komponent

a) Komponenten Plant har ein prop "backgroundColor". Ta denne i bruk så ein kan endre bakgrunnsfargen på kortet basert på verdien av backgroundColor.

Bonusoppgave: Klarer du å farge annakvart kort grønt og grått?

<br>
<details>
<summary>Hint 1</summary>

```
const Something =styled.div<{size: string}>`
  width: ${(props) => props.size}rem;
`
```

</details>

b) I komponents mappa finner du en Button, vi ønsker at du bruker denne komponenten og sender in en prop som setter fargen COLORS.BLUE_900 om det er en PrimaryKnapp med med bakgrunnsfargen COLORS.BLUE_500 eller sette fargen til palevioletred med vit bakgrunn.

<br>
<details>
<summary>Hint 2</summary>

I styleTokens kan du sende in variants som en prop til Button- komponenten.

</details>


### Oppgave 4 - Style en eksisterende komponent

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

```
import Component from 'componentLocation/component'

const SomeComponent = styled(Component)`
  // styling here
`;
```

(Hugs at du må bytte ut den "ustyla" komponenten med den nye du har laga)

</details>

b) Vi vil at deleknappen alltid skal vere Button size="small", men vil slippe å skrive det hver gang den brukes. Kan du fikse dette?


### Oppgave 5 - Lag din eigen komponent - og style den utanfrå

Vi har ein komponent som har litt state. Du skal lage en style'a utgave av denne. [skriv kva anna styling den skal ha.]

Lykke til.

Hint: du må feilsøke, hehe



### Oppgave 6 - Theme

Ta i bruk Theme

 <details>
<summary>Hint</summary>

  Wrappe knappen med en ThemeProvider

```
<ThemeProvider></ThemeProvider>

```

</details>



