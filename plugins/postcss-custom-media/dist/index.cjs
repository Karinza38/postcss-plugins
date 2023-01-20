"use strict";var e=require("postcss-value-parser"),t=require("fs"),n=require("path"),r=require("postcss");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var i=s(e),a=s(t),c=s(n);function u(e,t){const n=[];let r="",s=!1,o=0,i=-1;for(;++i<e.length;){const a=e[i];"("===a?o+=1:")"===a?o>0&&(o-=1):0===o&&(t&&g.test(r+a)?s=!0:t||","!==a||(s=!0)),s?(n.push(t?new l(r+a):new d(r)),r="",s=!1):r+=a}return""!==r&&n.push(t?new l(r):new d(r)),n}class f{constructor(e){this.nodes=u(e)}invert(){return this.nodes.forEach((e=>{e.invert()})),this}clone(){return new f(String(this))}toString(){return this.nodes.join(",")}}class d{constructor(e){const[,t,n,r]=e.match(b),[,s="",o=" ",i="",a="",c="",f="",d="",l=""]=n.match(y)||[],p={before:t,after:r,afterModifier:o,originalModifier:s||"",beforeAnd:a,and:c,beforeExpression:f},m=u(d||l,!0);Object.assign(this,{modifier:s,type:i,raws:p,nodes:m})}clone(e){const t=new d(String(this));return Object.assign(t,e),t}invert(){return this.modifier=this.modifier?"":this.raws.originalModifier,this}toString(){const{raws:e}=this;return`${e.before}${this.modifier}${this.modifier?`${e.afterModifier}`:""}${this.type}${e.beforeAnd}${e.and}${e.beforeExpression}${this.nodes.join("")}${this.raws.after}`}}class l{constructor(e){const[,t,n="",r="",s=""]=e.match(g)||[null,e],o={after:n,and:r,afterAnd:s};Object.assign(this,{value:t,raws:o})}clone(e){const t=new l(String(this));return Object.assign(t,e),t}toString(){const{raws:e}=this;return`${this.value}${e.after}${e.and}${e.afterAnd}`}}const p="([\\W\\w]+)",m="(\\s*)",w="(\\s+)",h="(?:(\\s+)(and))",g=new RegExp(`^${p}(?:${h}${w})$`,"i"),b=new RegExp(`^${m}([\\W\\w]*)${m}$`),y=new RegExp(`^(?:(not|only)${w})?(?:(all|print|screen|speech)(?:${h}${w}${p})?|${p})$`,"i");var j=e=>new f(e),$=(e,t)=>{const n={};return e.nodes.slice().forEach((e=>{if("atrule"!==e.type)return;if("custom-media"!==e.name.toLowerCase())return;let r=null;try{r=i.default(e.params)}catch(e){return}if(!r||!r.nodes||!r.nodes.length)return;let s=-1;for(let e=0;e<r.nodes.length;e++){const t=r.nodes[e];if("space"!==t.type&&"comment"!==t.type){if("word"===t.type&&t.value.startsWith("--")){s=e;break}return}}if(s<0)return;const o=r.nodes[s].value.trim(),a=i.default.stringify(r.nodes.slice(s+1)).trim();n[o]=j(a),Object(t).preserve||e.remove()})),n};function O(e){const t=Object.assign({},Object(e).customMedia,Object(e)["custom-media"]);for(const e in t)t[e]=j(t[e]);return t}function v(e){return e.map((e=>{if(e instanceof Promise)return e;if(e instanceof Function)return e();const t=e===Object(e)?e:{from:String(e)};if(Object(t).customMedia||Object(t)["custom-media"])return t;const n=c.default.resolve(String(t.from||""));return{type:(t.type||c.default.extname(n).slice(1)).toLowerCase(),from:n}})).reduce((async(e,t)=>{const{type:n,from:s}=await t;return"css"===n||"pcss"===n?Object.assign(await e,await async function(e){const t=await S(e),n=r.parse(t,{from:e});return $(n,{preserve:!0})}(s)):"js"===n?Object.assign(await e,await async function(e){var t;return O(await(t=e,Promise.resolve().then((function(){return o(require(t))}))))}(s)):"json"===n?Object.assign(await e,await async function(e){return O(await x(e))}(s)):Object.assign(await e,O(await t))}),{})}const S=e=>new Promise(((t,n)=>{a.default.readFile(e,"utf8",((e,r)=>{e?n(e):t(r)}))})),x=async e=>JSON.parse(await S(e));function M(e){if(!e)return;let t=null;try{t=i.default(e)}catch(e){return}if(!t||!t.nodes||!t.nodes.length)return;if(1!==t.nodes.length)return;for(;"function"===t.nodes[0].type&&""===t.nodes[0].value;)t=t.nodes[0];let n=-1;for(let e=0;e<t.nodes.length;e++){const r=t.nodes[e];if("space"!==r.type&&"comment"!==r.type){if("word"===r.type&&r.value.startsWith("--")){n=e;break}return}}return n<0?void 0:t.nodes[n].value.trim()}function E(e,t){let n=e.nodes.length-1;for(;n>=0;){const r=P(e.nodes[n],t);r.length&&e.nodes.splice(n,1,...r),--n}return e}function P(e,t){const n=[];for(const r in e.nodes){const{value:s,nodes:o}=e.nodes[r],i=M(s);if(i&&i in t){for(const s of t[i].nodes){const o=e.modifier!==s.modifier?e.modifier||s.modifier:"",a=e.clone({modifier:o,raws:!o||e.modifier?{...e.raws}:{...s.raws},type:e.type||s.type});a.type===s.type&&Object.assign(a.raws,{and:s.raws.and,beforeAnd:s.raws.beforeAnd,beforeExpression:s.raws.beforeExpression}),a.nodes.splice(r,1,...s.clone().nodes.map((t=>(e.nodes[r].raws.and&&(t.raws={...e.nodes[r].raws}),t.spaces={...e.nodes[r].spaces},t))));const c=P(a,k(t,i));c.length?n.push(...c):n.push(a)}return n}o&&o.length&&E(e.nodes[r],t)}return n}const k=(e,t)=>{const n=Object.assign({},e);return delete n[t],n};function A(e,t){return Promise.all(t.map((async t=>{if(t instanceof Function)await t(q(e));else{const n=t===Object(t)?t:{to:String(t)},r=n.toJSON||q;if("customMedia"in n)n.customMedia=r(e);else if("custom-media"in n)n["custom-media"]=r(e);else{const t=String(n.to||""),s=(n.type||c.default.extname(t).slice(1)).toLowerCase(),o=r(e);"css"===s&&await async function(e,t){const n=`${Object.keys(t).reduce(((e,n)=>(e.push(`@custom-media ${n} ${t[n]};`),e)),[]).join("\n")}\n`;await F(e,n)}(t,o),"js"===s&&await async function(e,t){const n=`module.exports = {\n\tcustomMedia: {\n${Object.keys(t).reduce(((e,n)=>(e.push(`\t\t'${R(n)}': '${R(t[n])}'`),e)),[]).join(",\n")}\n\t}\n};\n`;await F(e,n)}(t,o),"json"===s&&await async function(e,t){const n=`${JSON.stringify({"custom-media":t},null,"\t")}\n`;await F(e,n)}(t,o),"mjs"===s&&await async function(e,t){const n=`export const customMedia = {\n${Object.keys(t).reduce(((e,n)=>(e.push(`\t'${R(n)}': '${R(t[n])}'`),e)),[]).join(",\n")}\n};\n`;await F(e,n)}(t,o)}}})))}const q=e=>Object.keys(e).reduce(((t,n)=>(t[n]=String(e[n]),t)),{}),F=(e,t)=>new Promise(((n,r)=>{a.default.writeFile(e,t,(e=>{e?r(e):n()}))})),R=e=>e.replace(/\\([\s\S])|(')/g,"\\$1$2").replace(/\n/g,"\\n").replace(/\r/g,"\\r"),W=e=>{const t="preserve"in Object(e)&&Boolean(e.preserve),n=[].concat(Object(e).importFrom||[]),r=[].concat(Object(e).exportTo||[]),s=v(n),o=Symbol("customMediaHelper");return{postcssPlugin:"postcss-custom-media",Once:async(e,n)=>{n[o]=Object.assign(await s,$(e,{preserve:t})),await A(n[o],r)},AtRule:(e,n)=>{"media"===e.name&&((e,t,{preserve:n})=>{if(e.params.indexOf("--")>-1){const r=j(e.params),s=String(E(r,t));if(null===s)return;if(s===e.params)return;e.cloneBefore({params:s}),n||e.remove()}})(e,n[o],{preserve:t})}}};W.postcss=!0,module.exports=W;