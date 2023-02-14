# uzd

susikuriam uzd.js

1. ```html
   <section>
     <h2>Section title</h2>
     <p>Hello i am section text</p>
   </section>
   ```
2. ```html
   <article>
     <h3>JS</h3>
     <p>2022 02 15</p>
     <p>
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, vel?
     </p>
   </article>
   ```
3. sukurti masyva is visu savaites dienu lietuviskai. sugeneruoti rikuota sarasa is sukurto masyvo.
   3.1 sukurti funkcija kuri argumentu priima masyva ir sugeneruoja sarasa htmle.
   3.2 paduoti i [3.1] funkcijos argumenta toki masyva const elementsArr = ['red', 'green', 'blue']; isitikinti kad atspausdina

## skaiciu masyvas

const skArray = [5, -12, 74, -7, 0, 49]

1. sugeneruoti ul sarasa is sio masyvo ir patalpinti htmle
2. atrinkti skaicius didesnius uz 5 sugeneruoti htmle ol sarasa
3. atrinkti neigiamus skaicius ir surasyti juos i viena p elementa ir patalptinti html

const randArray = ['5',''true', -12, 74, 'james', -7,'bond', 0, 49];

4. is randArray atrinkti skaicius ir atspausdinti ju suma h2 elemente, patalpinti html
5. atrinkti string tipo reiksmes ir sugeneruoti ul sarasa patalpinti hmle, didziosiomis raidemis.
6. is randArray atrinkti maziausia reiksme ir atspausdinti ja tokiu pavidalu

```html
<article>
  <h2>Maziausia reiksme</h2>
  <p>XX</p>
</article>
```

6.1 sukurti funkcija printAndFindMin('Maziausia reiksme') kuria iskvietus ji sukuria [6] punkte parasyta struktura ir i antraste iraso argumento texta

6.2 sukurti tokia pat kaip [6.1] funkcija surasti diziausiai reiksmei

7. htmle sukurti section elementa ir uzdeti jam id ir klase. klase turetu ijungti flex arba grid. I vidu generuojam paveikslelius is sio masyvo

```javascript
const images = [
  'bg2.jpg',
  'bg1.jpg',
  'about.jpg',
  'team1.jpg',
  'house4.jpg',
  'house3.jpg',
  'house2.jpg',
  'house5.jpg',
];
```
