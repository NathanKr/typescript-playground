<h2>Motivation</h2>
JavaScript is great but it lack the following
<ol>
<li>enum</li>
<li>static type</li>
<li>interface</li>
</ol>

<h2>Installation</h2>
<h3>Once</h3>
npm install -g typescript  ---> install globally

<h3>Per project</h3>
npm init -y ---> crate package.json

Inside package.json update "scripts":{"tsc" : "tsc"}
npm run tsc -- --init  ---> create tsconfig.json
change  "outDir": "./build" ---> Redirect output structure to this directory. 

<h3>Per run</h3>
npm run tsc ---> compile .ts to .js
node build/index.js ---> invoke node
