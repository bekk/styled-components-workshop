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
- Style "skallet" av sida (midstill og sett breidda til sånn 60rem eller noko)
- Lage Button, den skal ha default-size="medium"
- Lage størrelsesobjekt for knapp

### Oppgave 1 - Lag din første Styled Component
Trekk ut h1 til ein styla komponent. Den kan få bu i same fila.
Style heading:
 3rem, bold, sentrert, bølgete understrek


hint: text-decoration-style
https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style



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
```
`
  @media (min-width: ${mobileBreakpoint}) {
    // Mindre padding rundt alt innhald
  }
`
```

d) Idé: Media queries + flexbox


### Oppgave 3 - Ta inn props i komponent (Button)
a)
```
const Something =styled.div<{size: string}>`
  width: ${(props) => props.size}rem;
`
```

b) Ta inn farge også (background)


c) Skjul barn når størrelsen er "small"
(For eksempel Icon)


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
