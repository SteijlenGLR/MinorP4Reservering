*Deno demo REST API for Students

Deze code is onderdeel van de lessenserie MINOR1 - KD (Keuzedeel) - Digital Signage.
De code maakt gebruik van:

Deno, een (beter?) alternatief voor Node.js (Server Side Javascript): 
OAK voor het routeren van de requests (Router): https://deno.land/x/oak
SQLite voor het opslaan van de database data (Database): 
Om vanuit Deno https://dyedgreen.github.io/deno-sqlite/#/examples

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