---
layout:         post
title:          "Dividendo"
date:           2019-01-26 17:30:58 +0100
categories:     jekyll update
tag:            [ux, prototyping, mobile]
permalink:      dividendo
card-image:     dividendo/aggiungiSpesaManuale.svg
first-image:    /assets/img/dividendo/Overview.svg
periodo:        27 dic 2018 - 14 gen 2019 (18 giorni)
ruolo:          Ricerca, Progettazione, Prototipo, Motion
tools:          Figma, ProtoPie
team:           io e MCB
overview:       

---

<!-- Pippone sul seguire un design system -->

## The design problem
L'obiettivo del progetto è aumentare l’efficienza e semplificare il processo di divisione dei costi tra persone che condividono esperienze.

Nel concreto queste esperienze potrebbero ad esempio essere la condivisione di un appartamento (es: tra studenti universitari) oppure esperienze tra amici (es: viaggio all’estero, giornata sulle piste da sci ecc). 

> Spesso il problema non sono i soldi, ma —ancora peggio— l'impressione di sentirsi fregati dai propri amici.

tensione ed imbarazzo che potrebbero crearsi per questioni di soldi


## Gli ostacoli
Una divisione equa delle spese potrebbe non sembrare una sfida impegnativa, ma può facilmente trasformarsi in un compito ingrato e portare a sentimenti di *frustrazione*, per questo tante persone scelgono di non effettuarlo proprio.

> Gestire le spese comuni spesso richiede tempo, provoca imbarazzo e comporta numerosi calcoli, non sarebbe bello se ci fosse una soluzione che permettesse di semplificare tutto il processo?

Cercare di ricordarsi ogni spesa fatta senza alcuna nota scritta è infattibile se le spese sono numerose. <br>
Una tecnica spesso adottata è di tenere lo scontrino e di posporre il problema. Nella teoria questa soluzione funziona, ma nella pratica possono presentarsi diversi problemi: 

* **Tempo**: La divisione è dispendiosa in termini di tempo e richiede una concentrazione mentale che può essere inappropriata per la situazione in cui ci si trova. 
* **Calcoli**: I calcoli da effettuare possono scalare di complessità rapidamente ( Alcuni prodotti da dividere solo tra alcuni, )
Alcune volte all’interno dello scontrino ci sono prodotti da dividere, mentre altri no. Questo aggiunge un ulteriore livello di complessità nei calcoli.
* **Fatica mentale**: Anche una volta effettuati tutti i calcoli, spesso non si hanno a disposizione esattamente i contanti richiesti. Questo porta a tenere il debito “aperto” e a doversene ricordare nei giorni successivi generando *fatica mentale*
* **Imbarazzo**: nel ricordare ad altri che si hanno debiti ancora aperti o nel ricordare ad altri spese ritenute molto piccole (nota: la concezione di *piccola spesa* varia molto da persona a persona)




## Il processo
La progettazione ha seguito il modello del *Double Diamond*.

{:.full-width}
![Double Diamond]({{site.baseurl }}/assets/img/dividendo/doublediamonddesignprocess.png)

### Discover-Define
Questa fase cerchiamo di capire perché il nostro utente dovrebbe utilizzare la nostra soluzione: quali potrebbero essere le sue *motivazioni* e i suoi *desideri*.

#### Design Brief

{:.full-width}
![Design Brief]({{site.baseurl }}/assets/img/dividendo/design brief.png)


#### User research
Abbiamo effettuato diverse interviste a persone per scoprire come se la vivendo rispetto al problema, per vedere se fosse effettivamente percepito e in che dimensione.
Abbiamo utilizzato tecniche di guerriglia research. 

Dalla ricerca siamo riusciti ad effettuare una analisi degli stakeholders, abbiamo esaminato meglio il mondo gli oggetti e i processi del dominio.

> Il problema della divisione dei soldi può essere affrontato in maniera diverse. è importante che la nostra soluzione non obblighi ad utilizzare un singolo metodo ma sia **flessibile** e si adatti alle esigenze.

#### Personas
Per comunicare efficacemente i risultati emersi dalla user research abbiamo pensato di estrapolare 3 personas significative.
Ognuna di esse è accompagnata da un activity scenario per aiutare il lettore a contestualizzare rispetto al problema.

{:.multiple-items}
![Katia]({{site.baseurl }}/assets/img/dividendo/katia.jpg)
![Jimmy]({{site.baseurl }}/assets/img/dividendo/jimmy.jpg)
![Bob]({{site.baseurl }}/assets/img/dividendo/bob.jpg)

Abbiamo pensato di approfondire ogni soggetti mediante lo strumento dell'empathy map.

{:.multiple-items}
![Empathy Map Katia]({{site.baseurl }}/assets/img/dividendo/EM Katia.jpg)
![Empathy Map Jimmy]({{site.baseurl }}/assets/img/dividendo/EM Jimmy.jpg)
![Empathy Map Bob]({{site.baseurl }}/assets/img/dividendo/EM Bob.jpg)
 
Dall'empathy map abbiamo potuto trarre interessanti considerazioni, le quali ci hanno permesso di discutere e di stilare numerosi Paint point, clusterizzati poi in 9 elementi distinti.

Nel nostro progetto I pain point sono stati l'elemento portante, sono stati il punto di riferimento per tutta la parte di progettazione dell'applicazione. 
Ogni volta che ci trovavamo di fronte a scelte nella prioritizazione dei task o quale fosse la strada giusta, ci chiedavamo se dai Paint point potevamlo trarne consiglio.

{:.multiple-items}
![Pain Point Katia]({{site.baseurl }}/assets/img/dividendo/ppKatia.jpg)
![Pain Point Jimmy]({{site.baseurl }}/assets/img/dividendo/ppJimmy.jpg)
![Pain Point Bob]({{site.baseurl }}/assets/img/dividendo/ppBob.jpg)

Sviluppare un prodotto che rispondesse a dei reali bisogni, desideri ed emozioni dell'utente è stato fin da subito il nostro obiettivo. 
Per questo motivo I pain point Sono stati il punto di riferimento durante tutta la parte successiva del processo.

#### Vincoli
Fin dall'inizio il progetto ha avuto l'esplicito vincolo di essere una applicazione mobile per Android, che seguisse in maniera rigorosa le guidelines del material design.

#### Vision Condivisa (Design Brief esteso)
A questo punto abbiamo riassunto tutti gli elementi della research in alcuni brevi paragrafi dove fossero elencati i nostri obiettivi rispetto alla progettazione dell'applicazione. 

Abbiamo scelto di concentrarci su alcuni use case specifici come la convivenza tra persone e delle esperienze tra un gruppo di amici (come una vacanza o una giornata sulle piste da sci).
Per fare in modo che queste esperienze non siano mutualmente esclusive, abbiamo pensato di introdurre l'uso di gruppi, in modo che le  possano essere gestite sia le spese per la casa che una giornata sulle piste.

L'applicazione permetterà alle persone di aggiungere delle spese, specificare chi le ha effettuate e tra chi dovrà essere divisa. Naturalmente tutta la parte di effettuare le divisioni è affidata all'applicazione.

## Develop-Deliver 

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

![Lo-Fi Prototype]({{site.baseurl }}/assets/img/dividendo/loFi prototype.jpg)

#### Hi-fi prototype

{:.multiple-items}
![Home]({{site.baseurl }}/assets/img/dividendo/Dividendo Appartamento.svg)
![Notifiche]({{site.baseurl }}/assets/img/dividendo/Notifiche.svg)
![Aggiungi Da Scontrino]({{site.baseurl }}/assets/img/dividendo/aggiungiScontrinoCorto.gif)
![Salda]({{site.baseurl }}/assets/img/dividendo/SaldaRicorda.gif)


#### Interactive Prototype

![qrCode]({{site.baseurl }}/assets/img/dividendo/qrCode.png)

[Link al prototipo](https://share.protopie.io/648wG6keh2D)






<!-- 
lo- fi prototype
add con scontrino gif

    notifiche
    saldo del gruppo
aggiungi spesa manuale

link al prototipo

storico
 -->


### Note finali

Questo lavoro è stato ispirato da una nostra personale esigenza di semplificare il processo di divisione delle spese comuni.
Il lavoro è stato svolto come elaborato finale per il corso di Progettazione di Interfacce Grafiche. 

<!-- MOCKUP

AGGIUNGI SPESA MANUALE

HOMEPAGE


Notifiche
Un aspetto insidioso nella gestione  -->
