# Styled components workshop

Dette er en workshop for deg som vil lære Styled Components rammeverket for React. Workshopen består av et sett med oppgaver, med gode forklaringer etter hver oppgave.

Styled Components dokumentasjon som du kan lese: https://styled-components.com/

## Starte applikasjonen

Last ned repoet ved å kjøre kommandoen:  
 `git clone https://github.com/bekk/styled-components-workshop/` i terminalen.  
Naviger til root-folderen ved å kjøre cd styled-components-workshop.
Start appen ved å kjøre `npm install` og deretter `npm start`.  
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
 // TODO skriv om nøsting

</details>

<br>
<details>
<summary>Hint 2</summary>

```
`
  &:hover {
    // Rett ut understrek
  }
`

```

</details>


b) Media queries
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


### Oppgave 3 - Ta inn props i komponent

a) Komponenten Plant har ein prop "backgroundColor". Ta denne i bruk så ein kan endre bakgrunnsfargen på kortet basert på verdien av backgroundColor.

<details>
<summary>Hint</summary>
```
const Something =styled.div<{size: string}>`
  width: ${(props) => props.size}rem;
`
```
</details>
 
### Oppgave 4 - Ta inn props frå objekt
 a) I komponents mappa finner du en Button, vi ønsker at du bruker denne komponenten og sender in en prop som setter fargen COLORS.BLUE_900 om det er en PrimaryKnapp med med bakgrunnsfargen COLORS.BLUE_500 eller sette fargen til palevioletred med vit bakgrunn.

<details>
<summary>Hint</summary>
I styleTokens kan du sende in variants som en prop til Button- komponentem.
</details>
 
b) Vi har laga eit objekt med styling for 3 størrelser. (padding, font-size)
Send inn ein storleik basert på input i komponenten
Bruk verdier i objektet der dei skal endre ting.

c) Designsystemet har blitt oppdatert og fra nå av skal vi ha ulik border-radius på ulike størrelser.
small: 4px
medium: 4px
large: 8px

### Oppgave 5 - Style en eksisterende komponent

På plantekorta våre har vi ein "like"-knapp forma som eit hjarte (`LikeButton.tsx`). Vi vil at denne skal vere grøn på plantekorta våre (`Plant.tsx`), men den skal framleis vere raud om ein bruker den andre stadar. 

Denne oppgåva skal løysast utan å endre koden i `LikeButton`.


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


5 b) Ta i bruk Theme

 <details>
<summary>Hint</summary>
  Wrappe knappen med en ThemeProvider

```
<ThemeProvider></ThemeProvider>

```

</details>


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
```
