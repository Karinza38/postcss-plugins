"use strict";var e=require("node:url"),n=require("node:fs/promises"),t=require("node:path"),i=require("node:os"),o=require("node:process"),a=require("node:child_process"),r="undefined"!=typeof document?document.currentScript:null;const s="package";async function findPackageJsonFromDir(e,i=10){const o=t.join(e,"package.json");try{return await n.access(o),o}catch{if("/"===e||i<=0)throw new Error("Could not find package.json")}return findPackageJsonFromDir(t.dirname(e),i-1)}async function pack(e,i){const r=await n.mkdir(t.join(i,"pack"),{recursive:!0}),s=a.spawn("npm",["pack","--pack-destination",r],{cwd:e,shell:"win32"===o.platform}),c=await new Promise(((e,n)=>{let t="",i="";s.stdout.on("data",(e=>{t+=e.toString()})),s.stderr.on("data",(e=>{i+=e.toString()})),s.on("close",(o=>{0===o?e(t.trim()):(console.error(i),n(new Error(`npm pack exited with code ${o}`)))}))}));return t.join(r,c)}async function unpack(e,i){const o=t.join(i,s);await n.mkdir(o,{recursive:!0});const r=a.spawn("tar",["-xf",e,"-C",s,"--strip-components","1"],{cwd:i});return await new Promise(((e,n)=>{r.on("close",(t=>{0===t?e():n(new Error(`tar exited with code ${t}`))}))})),o}async function eraseDevDependenciesInfo(e){const t=JSON.parse(await n.readFile(e,"utf8"));delete t.devDependencies,await n.writeFile(e,JSON.stringify(t,null,"\t"))}async function getPackageInfo(e){return JSON.parse(await n.readFile(e,"utf8"))}async function createRootPackage(e,i){await n.writeFile(t.join(e,"package.json"),JSON.stringify({name:"@csstools/pack-test--root",private:!0,type:"module",version:"1.0.0",description:"",workspaces:[s],dependencies:i.peerDependencies??{},scripts:{test:"node --test"}},null,"\t")),await n.writeFile(t.join(e,"index.mjs"),`import '${i.name}';`)}async function runNPMInstall(e){const n=a.spawn("npm",["install","--omit","dev"],{cwd:e,stdio:"inherit",shell:"win32"===o.platform});await new Promise(((e,t)=>{n.on("close",(n=>{0===n?e():t(new Error(`npm install exited with code ${n}`))}))}))}async function runTest(e){const n=a.spawn("node",["index.mjs"],{cwd:e,stdio:"inherit",shell:"win32"===o.platform});await new Promise(((e,t)=>{n.on("close",(n=>{0===n?e():t(new Error(`npm install exited with code ${n}`))}))}))}exports.testPack=async function testPack(a){if(o.platform.startsWith("win"))return void console.log("Skipping test on Windows");if(!("resolve"in{url:"undefined"==typeof document?require("url").pathToFileURL(__filename).href:r&&r.src||new URL("index.cjs",document.baseURI).href}))return void console.log("Skipping test on platform without `import.meta.resolve` support");const s=await n.mkdtemp(t.join(i.tmpdir(),"csstools-pack-test-"));let c=!1;try{const n=new URL((void 0)(a));console.log(`Testing module: ${a}`);const i=e.fileURLToPath(n),o=await findPackageJsonFromDir(t.dirname(i)),r=t.dirname(o),c=await pack(r,s),d=await unpack(c,s),p=await getPackageInfo(t.join(d,"package.json"));await eraseDevDependenciesInfo(t.join(d,"package.json")),await createRootPackage(s,p),await runNPMInstall(s),await runTest(s)}catch(e){console.error(e),c=!0}finally{await n.rm(s,{recursive:!0})}c&&process.exit(1)};
