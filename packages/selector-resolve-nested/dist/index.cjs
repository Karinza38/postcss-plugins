"use strict";var e=require("postcss-selector-parser");function sortCompoundSelectorsInsideComplexSelector(t){const o=[];let r=[];t.each((t=>{if("combinator"===t.type)return o.push(r,[t]),void(r=[]);if(e.isPseudoElement(t))return o.push(r),void(r=[t]);if("universal"===t.type&&r.find((e=>"universal"===e.type)))t.remove();else{if("tag"===t.type&&r.find((e=>"tag"===e.type))){t.remove();const o=e.pseudo({value:":is"});return o.append(e.selector({nodes:[t],value:""})),void r.push(o)}r.push(t)}})),o.push(r);const n=[];for(let e=0;e<o.length;e++){const t=o[e];t.sort(((e,t)=>selectorTypeOrder(e)-selectorTypeOrder(t))),n.push(...t)}t.removeAll();for(let e=n.length-1;e>=0;e--)n[e].remove(),t.prepend(n[e])}function selectorTypeOrder(o){return e.isPseudoElement(o)?t.pseudoElement:t[o.type]}const t={universal:0,tag:1,pseudoElement:2,nesting:3,id:4,class:5,attribute:6,pseudo:7,comment:8};function prepareParentSelectors(t,o=!1){return o||!isCompoundSelector(t.nodes)?[e.pseudo({value:":is",nodes:t.nodes.map((e=>e.clone()))})]:t.nodes[0].nodes.map((e=>e.clone()))}function isCompoundSelector(t){return 1===t.length&&!t[0].nodes.some((t=>"combinator"===t.type||e.isPseudoElement(t)))}exports.resolveNestedSelector=function resolveNestedSelector(t,o){const r=[];for(let n=0;n<t.nodes.length;n++){const s=t.nodes[n].clone();{let t=!1;s.walkNesting((()=>(t=!0,!1))),t?"combinator"===s.nodes[0]?.type&&s.prepend(e.nesting({})):(s.prepend(e.combinator({value:" "})),s.prepend(e.nesting({})))}{const e=new Set;s.walkNesting((t=>{const r=t.parent;e.add(r),"pseudo"===r.parent?.type&&":has"===r.parent.value?.toLowerCase()?t.replaceWith(...prepareParentSelectors(o,!0)):t.replaceWith(...prepareParentSelectors(o))}));for(const t of e)sortCompoundSelectorsInsideComplexSelector(t)}s.walk((e=>{"combinator"===e.type&&""!==e.value.trim()?(e.rawSpaceAfter=" ",e.rawSpaceBefore=" "):(e.rawSpaceAfter="",e.rawSpaceBefore="")})),r.push(s)}return e.root({nodes:r,value:""})};
