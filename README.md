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
<ol>
<li>npm init -y ---> crate package.json</li>
<li>Inside package.json update "scripts":{"tsc" : "tsc"}</li>
<li>npm run tsc -- --init  ---> create tsconfig.json</li>
<li>change  "outDir": "./build" ---> Redirect output structure to this directory</li>
<li>npm install @types/node --save-dev -> if you need e.g. require</li>
</ol>

<h3>compilation</h3>
in seperate terminal : tsc -w (this compile ts to js and put them in build directory)

<h3>Per run</h3>
in seperate terminal : node build/index.js ---> invoke node

<h3>Debugging</h3>
done easyly using vs code (no need for tsc -w)