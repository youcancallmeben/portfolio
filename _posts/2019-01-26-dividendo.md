---
layout:         post
title:          Dividendo
titleh1:        Dividendo
description:    Aumentare l’efficienza e semplificare il processo di divisione dei costi tra persone che condividono esperienze
date:           2019-01-26 17:30:58 +0100
categories:     jekyll update
tag:            [ux, product design]
permalink:      dividendo
card-image:     img/dividendo/cardMockup.png
first-image:    /assets/img/dividendo/Overview.png
periodo:        3 settimane  <br> <em>(gennaio 2019)</em>
ruolo:          User Personas, <br> Prototyping, <br> Motion
tools:          Figma, <br> Sketch, <br> ProtoPie
# team:           io e MCB
# overview:       Progettazione un'app per gestire le spese condivise. Seguite le guideline di Google Material Design per Android.
overview:       Aumentare l’efficienza e semplificare il processo di divisione dei costi tra persone che condividono esperienze
---

<section id="designProblem" markdown="1">
## The design problem
L'obiettivo del progetto è aumentare l’efficienza e semplificare il processo di divisione dei costi tra persone che condividono esperienze.

Nel concreto queste esperienze potrebbero ad esempio essere la condivisione di un appartamento (es: tra studenti universitari) oppure esperienze tra amici (es: viaggio all’estero, giornata sulle piste da sci ecc). 

> Spesso il problema non sono i soldi, ma la tensione e l'imbarazzo che potrebbero nascere
</section>


<section id="obstacles" markdown="1">

## Gli ostacoli
Una divisione equa delle spese potrebbe non sembrare una sfida impegnativa, ma può facilmente trasformarsi in un compito ingrato e portare a sentimenti di *frustrazione*.

> Gestire le spese comuni spesso richiede tempo, provoca imbarazzo e comporta numerosi calcoli, non sarebbe bello se ci fosse una soluzione che permettesse di semplificare tutto il processo?

Cercare di ricordarsi ogni spesa fatta senza alcuna nota scritta è infattibile se le spese sono numerose. <br>
Una tecnica spesso adottata è di tenere lo scontrino e di posporre il problema. 

<details markdown="1" >
<summary> Nella teoria questa soluzione funziona, ma nella pratica possono presentarsi diversi problemi: </summary>
* **Tempo**: La divisione è dispendiosa in termini di tempo e richiede una concentrazione mentale che può essere inappropriata per la situazione in cui ci si trova. 
* **Calcoli**: I calcoli da effettuare possono scalare di complessità rapidamente ( Alcuni prodotti da dividere solo tra alcuni, )
Alcune volte all’interno dello scontrino ci sono prodotti da dividere, mentre altri no. Questo aggiunge un ulteriore livello di complessità nei calcoli.
* **Fatica mentale**: Anche una volta effettuati tutti i calcoli, spesso non si hanno a disposizione esattamente i contanti richiesti. Questo porta a tenere il debito “aperto” e a doversene ricordare nei giorni successivi generando *fatica mentale*
* **Imbarazzo**: nel ricordare ad altri che si hanno debiti ancora aperti o nel ricordare ad altri spese ritenute molto piccole (nota: la concezione di *piccola spesa* varia molto da persona a persona)
</details>

</section>


<section id="process" markdown="1">

## Il processo
Abbiamo seguito il design process model del [Double Diamond](https://www.designcouncil.org.uk/news-opinion/design-process-what-double-diamond){:.fancy-link} ideato dal British Design Council.

{:.full-width}
![Double Diamond]({{ site.baseurl }}/assets/img/dividendo/doublediamonddesignprocess.png)

#### Design Brief
> Aumentare l'efficienza e **semplificare il processo di divisione dei costi** tra persone che condividono esperienze

</section>

<section id="discover" markdown="1">

### Discover
Questa fase cerchiamo di capire perché il nostro utente dovrebbe utilizzare la nostra soluzione: quali potrebbero essere le sue *motivazioni* e i suoi *desideri*.

#### User research
Abbiamo effettuato diverse interviste a persone per scoprire come se la vivendo rispetto al problema, per vedere se fosse effettivamente percepito e in che dimensione.
Abbiamo utilizzato tecniche di guerriglia research. 

Dalla ricerca siamo riusciti ad effettuare una analisi degli stakeholders, abbiamo esaminato meglio il mondo gli oggetti e i processi del dominio.

</section>

<section id="define" markdown="1">

## Define
#### Personas
Per comunicare efficacemente i risultati emersi dalla user research abbiamo pensato di estrapolare 3 personas significative.
Ognuna di esse è accompagnata da un activity scenario per aiutare il lettore a contestualizzare rispetto al problema.

{:.responsive}
![Katia]({{site.baseurl }}/assets/img/dividendo/katia.jpg)
![Jimmy]({{site.baseurl }}/assets/img/dividendo/jimmy.jpg)
![Bob]({{site.baseurl }}/assets/img/dividendo/bob.jpg)

Abbiamo pensato di approfondire ogni soggetti mediante lo strumento dell'empathy map.

{:.responsive}
![Empathy Map Katia]({{site.baseurl }}/assets/img/dividendo/EM Katia.jpg)
![Empathy Map Jimmy]({{site.baseurl }}/assets/img/dividendo/EM Jimmy.jpg)
![Empathy Map Bob]({{site.baseurl }}/assets/img/dividendo/EM Bob.jpg)
 
Dall'empathy map abbiamo potuto trarre interessanti considerazioni, le quali ci hanno permesso di discutere e di stilare numerosi Paint point, clusterizzati poi in 9 elementi distinti.

> Il problema della divisione dei soldi può essere affrontato in maniera diverse. è importante che la nostra soluzione non obblighi ad utilizzare un singolo metodo ma sia **flessibile** e si adatti alle esigenze.

Nel nostro progetto I pain point sono stati il punto di riferimento per tutta la parte di progettazione dell'applicazione. Ogni volta che ci trovavamo di fronte a scelte nella prioritizazione dei task o quale fosse la strada giusta, ci chiedavamo se dai Paint point potevamlo trarne consiglio.

{:.responsive}
![Pain Point Katia]({{site.baseurl }}/assets/img/dividendo/ppKatia.jpg)
![Pain Point Jimmy]({{site.baseurl }}/assets/img/dividendo/ppJimmy.jpg)
![Pain Point Bob]({{site.baseurl }}/assets/img/dividendo/ppBob.jpg)

Sviluppare un prodotto che rispondesse a dei reali bisogni, desideri ed emozioni dell'utente è stato fin da subito il nostro obiettivo. 
Per questo motivo I pain point Sono stati il punto di riferimento durante tutta la parte successiva del processo.

#### Vincoli
Fin dall'inizio il progetto ha avuto l'esplicito vincolo di essere una applicazione mobile per Android, che seguisse in maniera rigorosa le **guidelines del material design**.
<!-- Pippone sul seguire un design system -->

#### Vision Condivisa 
A questo punto abbiamo riassunto tutti gli elementi della research in alcuni brevi paragrafi dove fossero elencati i nostri obiettivi rispetto alla progettazione dell'applicazione. 

Abbiamo scelto di concentrarci su alcuni use case specifici come la convivenza tra persone e delle esperienze tra un gruppo di amici (come una vacanza o una giornata sulle piste da sci).
Per fare in modo che queste esperienze non siano mutualmente esclusive, abbiamo pensato di introdurre l'uso di **gruppi**, in modo che le  possano essere gestite sia le spese per la casa che una giornata sulle piste.

L'applicazione permetterà alle persone di aggiungere delle spese, specificare chi le ha effettuate e tra chi dovrà essere divisa. Naturalmente tutta la parte di effettuare le divisioni è affidata all'applicazione.
</section>

<section id="develop" markdown="1">

## Develop

In questa fase volevamo concretizzare le nostre idee e i dati raccolti dalla fase di ricerca. L'obiettivo era definire cosa avremmo creato e come l'avremmo mostrato. 

Il come era chiaro poiché avevamo già deciso di seguire le linee guida material.

#### Lo-Fi Prototype

In questa fase abbiamo 

Abbiamo sviluppato un Lo-Fi prototype attraverso vari strumenti. 
Dal punto di vista puramente creativo mi sono reso conto di dare il meglio di me utilizzando lo spazio fisico che stà attorno a me.

Abbiamo deciso di utilizzare un post-it come un frame. 
La situazione è sfuggita rapidamente di mano, questo è il pavimento della stanza.

<!-- Foto pavimento della stanza -->

Arrivati ad un punto di accordo comune rispetto alla navigazione abbiamo deciso di fare un semplice schizzo.

![Lo-Fi Prototype]({{site.baseurl }}/assets/img/dividendo/loFiPrototype.jpg)

#### Hi-fi prototype

<div class="central">
<div class="constraint" markdown="1">

{: .responsive}
![Salda]({{site.baseurl }}/assets/img/dividendo/saldaRicorda.gif)
![AggiungiDaScontrino]({{site.baseurl }}/assets/img/dividendo/aggiungiScontrinoCorto.gif)
<!-- ![Notifiche]({{site.baseurl }}/assets/img/dividendo/Notifiche.svg) -->
<!-- ![Home]({{site.baseurl }}/assets/img/dividendo/Dividendo Appartamento.svg) -->
</div>
</div>
</section>

<section id="deliver" markdown="1">

## Deliver
#### Interactive Prototype

{: .central}
![qrCode]({{site.baseurl }}/assets/img/dividendo/qrCode.png)

{: .central}
[Link al prototipo](https://share.protopie.io/648wG6keh2D){:.fancy-link}

<!-- 
lo- fi prototype
add con scontrino gif

    notifiche
    saldo del gruppo
aggiungi spesa manuale

link al prototipo

storico
 -->

</section>

<section id="notes" markdown="1">

### Note finali

Questo lavoro è stato ispirato da una nostra personale esigenza di semplificare il processo di divisione delle spese comuni.

Il lavoro è stato svolto come elaborato finale per il corso di Progettazione di Interfacce Grafiche. 

<!-- MOCKUP

AGGIUNGI SPESA MANUALE

HOMEPAGE

Notifiche
Un aspetto insidioso nella gestione  -->

</section>


\\
\\
\\
\\
Vorresti vedere la versione HD dei documenti? Sei interessato a quello che hai appena letto? In realtà questa è solo una piccola finestra sul progetto, ci sarebbe ancora taaaanto da dire! Perché non [organizziamo un caffé](mailto:mail@youcancallmeben.design?Subject="Ciao Ben"){:.fancy-link} e ne parliamo di persona? :)

\\
\\
\\
[← Precedente Case study · Alma Digital]({{site.baseurl}}/almadigital){:.one-half}
[Prossimo Case study · Autoflow →]({{site.baseurl}}/autoflow){:.one-half style="text-align:right"}
