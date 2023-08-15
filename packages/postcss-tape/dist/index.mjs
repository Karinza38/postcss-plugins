import o from"fs";import n from"path";import e from"postcss";import t from"postcss-8.4";import s from"postcss-html";import{strict as r}from"assert";const noopPlugin=()=>({postcssPlugin:"noop-plugin",Rule(){}});noopPlugin.postcss=!0;const c="----------------------------------------";function formatCSSAssertError(o,n,e,t=!1){let s="";if(s+=`\n${o}\n\n`,n.message&&(s+=`message :\n  ${n.message}\n\n`),n.options)try{s+=`options :\n${JSON.stringify(n.options,null,2)}\n\n`}catch(o){}return s+=`output changed :\n${prettyDiff(e.message)}\n`,t||(s+="\n"+c),s}function formatWarningsAssertError(o,n,e,t,s=!1){let r="";if(r+=`\n${o}\n\n`,n.message&&(r+=`message :\n  ${n.message}\n\n`),n.options)try{r+=`options :\n${JSON.stringify(n.options,null,2)}\n\n`}catch(o){}return r+=`unexpected or missing warnings :\n+ actual ${e.length}\n- expected ${t}\n`,s||(e.forEach((o=>{r+=`\n[${o.plugin}]: ${o.text}`})),e.length&&(r+="\n"),r+="\n"+c),r}function prettyDiff(o){return o.replace(/[^\\](\\n)/gm,((o,n)=>o.replace(n," "))).replace(/(\\t)/gm,((o,n)=>o.replace(n," "))).replace(/\+$/gm,"").replace(/^Expected values to be strictly equal:\n/,"")}function formatGitHubActionAnnotation(o,e="error",t={}){let s="::"+e;const r=Object.keys(t).map((o=>{let e=String(t[o]);return"file"===o&&process.env.GITHUB_WORKSPACE&&(e=n.relative(process.env.GITHUB_WORKSPACE,n.resolve(e))),`${o}=${s=e,s.replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/]/g,"%5D").replace(/;/g,"%3B")}`;var s})).join(",");return r&&(s+=` ${r}`),`${s}::${c=o||"",c.replace(/\r/g,"%0D").replace(/\n/g,"%0A")}`;var c}function reduceInformationInCssSyntaxError(o){process.env.DEBUG||(delete o.source,o.input&&delete o.input.source,delete o.postcssNode)}const a=process.env.GITHUB_ACTIONS&&"true"===process.env.ENABLE_ANNOTATIONS_FOR_NODE&&"true"===process.env.ENABLE_ANNOTATIONS_FOR_OS;function postcssSyntax(o){if(o.postcssSyntaxHTML)return s()}function postcssSyntaxSupportsSourceMaps(o){return!o.postcssSyntaxHTML}function postcssTape(s){let i=!1;{!0!==s.postcss&&(i=!0,a?console.log(formatGitHubActionAnnotation('postcss flag not set to "true" on exported plugin object',"error",{file:"./package.json",line:1,col:1})):console.error(`\npostcss flag not set to "true"\n\n${c}`));const n=s();n.postcssPlugin&&"string"==typeof n.postcssPlugin||(i=!0,a?console.log(formatGitHubActionAnnotation('plugin name not set via "postcssPlugin"',"error",{file:"./package.json",line:1,col:1})):console.error(`\nplugin name not set via "postcssPlugin"\n\n${c}`));const e=JSON.parse(o.readFileSync("./package.json","utf-8").toString());e.keywords&&e.keywords.includes("postcss-plugin")||(i=!0,a?console.log(formatGitHubActionAnnotation('package.json does not include "postcss-plugin" keyword',"error",{file:"./package.json",line:1,col:1})):console.error(`\npackage.json does not include "postcss-plugin" keyword\n\n${c}`));const t=["css-has-pseudo","css-blank-pseudo","css-prefers-color-scheme","@csstools/css-has-pseudo-experimental"].includes(e.name);let r=e.name;if(r.startsWith("@")){r=e.name.split("/").slice(1).join("/")}r.startsWith("postcss-")||t||(i=!0,a?console.log(formatGitHubActionAnnotation('plugin name in package.json does not start with "postcss-"',"error",{file:"./package.json",line:1,col:1})):console.error(`\nplugin name in package.json does not start with "postcss-"\n\n${c}`)),Object.keys(Object(e.dependencies)).includes("postcss")&&!("postcssTapeSelfTest"in s)&&(i=!0,a?console.log(formatGitHubActionAnnotation("postcss should only be a peer and/or dev dependency","error",{file:"./package.json",line:1,col:1})):console.error(`\npostcss should only be a peer and/or dev dependency\n\n${c}`))}return async l=>{const p=new Set;for(const u in l){const f=l[u];f.before&&await f.before();const g=n.join(".","test",u.split(":")[0]),d=n.join(".","test",u.replace(/:/g,"."));let m="css";f.postcssSyntaxHTML&&(m="html");const S=`${g}.${m}`;let y=`${d}.expect.${m}`,A=`${d}.result.${m}`;f.expect&&(y=n.join(".","test",f.expect)),f.result&&(A=n.join(".","test",f.result));const $=f.plugins??[s(f.options)],h=o.readFileSync(S,"utf8");let w,x="";try{x=o.readFileSync(y,"utf8")}catch(o){i=!0,x=!1,a?console.log(formatGitHubActionAnnotation(`${u}\n\nmissing or broken "expect" file: "${n.parse(y).base}"`,"error",{file:S,line:1,col:1})):(p.add(u),console.error(`\n${u}\n\nmissing or broken "expect" file: "${n.parse(y).base}"\n\n${c}`))}let b=!1;try{w=await e($).process(h,{from:S,to:A,map:!!postcssSyntaxSupportsSourceMaps(f)&&{inline:!1,annotation:!1},syntax:postcssSyntax(f)})}catch(o){if(reduceInformationInCssSyntaxError(o),b=!0,f.exception&&f.exception.test(o.message))continue;throw o}!b&&f.exception&&(i=!0,a?console.log(formatGitHubActionAnnotation(`${u}\n\nexpected an exception but got none`,"error",{file:S,line:1,col:1})):(p.add(u),console.error(`\n${u}\n\nexpected an exception but got none\n\n${c}`)));const E=w.css.toString();if(o.writeFileSync(A,E,"utf8"),process.env.REWRITE_EXPECTS&&o.writeFileSync(y,E,"utf8"),!1!==x){try{r.strictEqual(E,x)}catch(o){i=!0,a?console.log(formatGitHubActionAnnotation(formatCSSAssertError(u,f,o,!0),"error",{file:y,line:1,col:1})):(p.add(u),console.error(formatCSSAssertError(u,f,o)))}try{if(!f.postcssSyntaxHTML&&w.map.toJSON().sources.includes("<no source>"))throw new Error("Sourcemap is broken")}catch(o){i=!0;const n='\nThis is most likely a newly created PostCSS AST Node without a value for "source".\nsee :\n- https://github.com/postcss/postcss/blob/main/docs/guidelines/plugin.md#24-set-nodesource-for-new-nodes\n- https://postcss.org/api/#node-source';a?console.log(formatGitHubActionAnnotation(`${u}\n\nbroken source map: ${JSON.stringify(w.map.toJSON().sources)}\n${n}`,"error",{file:S,line:1,col:1})):(p.add(u),console.error(`\n${u}\n\nbroken source map: ${JSON.stringify(w.map.toJSON().sources)}\n${n}\n\n${c}`))}f.after&&await f.after();try{const n=o.readFileSync(A,"utf8");if((await e([noopPlugin()]).process(n,{from:A,to:A,map:!!postcssSyntaxSupportsSourceMaps(f)&&{inline:!1,annotation:!1},syntax:postcssSyntax(f)})).warnings().length)throw new Error("Unexpected warnings on second pass")}catch(o){i=!0,a?console.log(formatGitHubActionAnnotation(`${u}\n\nresult was not parsable with PostCSS.`,"error",{file:y,line:1,col:1})):(p.add(u),console.error(`\n${u}\n\nresult was not parsable with PostCSS.\n\n${c}`))}if(e([noopPlugin()]).version!==t([noopPlugin()]).version){const o=await t($).process(h,{from:S,to:A,map:!!postcssSyntaxSupportsSourceMaps(f)&&{inline:!1,annotation:!1}});try{r.strictEqual(o.css.toString(),E)}catch(o){reduceInformationInCssSyntaxError(o),i=!0,a?console.log(formatGitHubActionAnnotation("testing older PostCSS:\n"+formatCSSAssertError(u,f,o,!0),"error",{file:y,line:1,col:1})):(p.add(u),console.error("testing older PostCSS:\n"+formatCSSAssertError(u,f,o)))}}try{(w.warnings().length||f.warnings)&&r.strictEqual(w.warnings().length,f.warnings)}catch(o){i=!0,a?console.log(formatGitHubActionAnnotation(formatWarningsAssertError(u,f,w.warnings(),f.warnings??0,!0),"error",{file:y,line:1,col:1})):(p.add(u),console.error(formatWarningsAssertError(u,f,w.warnings(),f.warnings??0)))}}}if(p.size){console.error("\nunexpected failures:");for(const o of p.values())console.error("  - "+o)}i&&process.exit(1),console.warn("pass "+s().postcssPlugin)}}const i={postcssPlugin:"declaration-cloner",Declaration(o){"to-clone"===o.prop&&o.cloneBefore({prop:"cloned"})}},l={postcssPlugin:"rule-cloner",prepare(){const o=new WeakSet;return{RuleExit(n){o.has(n)||"to-clone"===n.selector&&(o.add(n),n.cloneBefore({selector:"cloned"}))}}}},p={postcssPlugin:"at-rule-cloner",prepare(){const o=new WeakSet;return{AtRuleExit(n){if(!o.has(n))return"to-clone"===n.params?(o.add(n),void n.cloneBefore({params:"cloned"})):"to-clone"===n.name?(o.add(n),void n.cloneBefore({name:"cloned"})):void 0}}}};export{p as atRuleClonerPlugin,i as declarationClonerPlugin,postcssTape,l as ruleClonerPlugin};
