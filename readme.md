#Deno demo REST API for Students

Deze code is onderdeel van de lessenserie MINOR1 - KD (Keuzedeel) - Digital Signage.
In deze module bouwen studenten in teams van maximaal 2 een Digital Signage applicatie om een ruimte te kunnen reserveren vanaf een lichtgewicht HTML/CSS client die middels een JSON Rest API een koppeling maakt met een back-end server om de data op te slaan.

Deze module geeft een voorbeeld van een server API die studenten als basis kunnen gebruiken om zelf ook een Server API te bouwen. De code in dit voorbeeld is wel MVC opgezet, maar op een zeer basis niveau dat hopelijk voor iedereen is te gebruiken. Zie de reader voor details!

De voorbeeld API is gebouwd met Deno.JS (concurent van Node.JS). Uiteraard kunnen de studenten zelf kiezen welke server code ze gebruiken, dit mag ook PHP, .NET Core, Node of wat dan ook zijn, zolang ze maar een werkende oplossing maken. Waarom maakt dit voorbeeld dan gebruik van Deno? Nou dat is vrij simpel:

1.  Studenten hebben het gehele jaar al geleerd te programmeren in JavaScript, en Deno.JS maakt het mogelijk om ook de back-end code volledig te bouwen in JavaScript.
2.  Deno.JS is relatief nieuw en wordt gezien als een veiliger en makkelijker alternatief op Node.JS, in potentie heeft Deno.JS dus veel potentie en is de kans aanwezig dat studenten er in de praktijk ook mee in aanraking komen.
3.  Omdat het gewoon leuk is om ook weer eens iets nieuws te proberen en voor te blijven lopen met de beschikbare technologie.


De code maakt gebruik van:

1.  Deno, een (Veilige, lichter en misschien wel beter?) alternatief voor Node.js (Server Side Javascript):  https://deno.land/
2.  OAK voor het routeren van de requests (Router): https://deno.land/x/oak
3.  SQLite voor het opslaan van de database data (Database): https://www.sqlite.org/index.html
4.  Om vanuit Deno te koppelen met SQLite maken we gebruik van deno-sqlite: https://dyedgreen.github.io/deno-sqlite/#/examples

Om Deno te kunnen gebruiken op je PC/Server moet je daarvoor eerst deno installeren.
Meer details over de installatie van deno kan je vinden op:
https://deno.land/#installation


Tools die je kunt gebruiken voor het werken met deno:
1.  Microsoft Visual Studio Code
2.  Deno for Visual Studio Code Extension: denoland.vscode-deno (V3.2.0 op moment van schrijven)
3.  DB Browser for SQLite voor het bewerken en aanmaken van SQLite databases: https://sqlitebrowser.org/




***Om de code te runnen:*** 

Om de code te starten zonder deze te kunnen debuggen start je deno met onderstaand commando.

```deno run --allow-net --allow-env --allow-read --allow-write index.js```

***Om de code te debuggen:***

Om te debuggen gebruik je onderstaande optie om de code te starten.

```deno run --allow-net --allow-env --allow-read --allow-write --inspect-brk index.js```

Of je gebruikt de onderstaande launch.json code om de geintegreegde debugging in VSC te gebruiken:
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Debug Deno",
            "type": "pwa-node",
            "request": "launch",
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": "deno",
            "program": "${file}",
            "runtimeArgs": [
                "run",
                "--inspect-brk",
                "--allow-all"
            ],
            "outputCapture": "std",
            "attachSimplePort": 9229
        }
    ]
}
```