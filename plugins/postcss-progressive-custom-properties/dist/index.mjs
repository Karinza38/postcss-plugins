import e from"postcss-value-parser";const a=[{supports:"color-mix(in lch, red, blue)",property:"color",sniff:"color-mix",matchers:[{type:"function",value:"color-mix",nodes:[{type:"word",value:"in"},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0}]},{type:"function",value:"color-mix",nodes:[{type:"word",value:"in"},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0}]},{type:"function",value:"color-mix",nodes:[{type:"word",value:"in"},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color-mix",nodes:[{type:"word",value:"in"},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color-mix",nodes:[{type:"word",value:"in"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0}]},{type:"function",value:"color-mix",nodes:[{type:"word",value:"in"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0}]},{type:"function",value:"color-mix",nodes:[{type:"word",value:"in"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color-mix",nodes:[{type:"word",value:"in"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]}]},{supports:"rgb(from red r g b)",property:"color",sniff:"from ",matchers:[{type:"function",value:"rgb",nodes:[{type:"word",value:"from"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"rgb",nodes:[{type:"word",value:"from"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]},{type:"function",value:"hsl",nodes:[{type:"word",value:"from"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"hsl",nodes:[{type:"word",value:"from"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]},{type:"function",value:"hwb",nodes:[{type:"word",value:"from"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"hwb",nodes:[{type:"word",value:"from"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]},{type:"function",value:"lch",nodes:[{type:"word",value:"from"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"lch",nodes:[{type:"word",value:"from"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]},{type:"function",value:"oklch",nodes:[{type:"word",value:"from"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"oklch",nodes:[{type:"word",value:"from"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]},{type:"function",value:"lab",nodes:[{type:"word",value:"from"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"lab",nodes:[{type:"word",value:"from"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]},{type:"function",value:"oklab",nodes:[{type:"word",value:"from"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"oklab",nodes:[{type:"word",value:"from"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]},{type:"function",value:"color",nodes:[{type:"word",value:"from"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color",nodes:[{type:"word",value:"from"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"color(srgb 0 0 0)",property:"color",sniff:"color",matchers:[{type:"function",value:"color",nodes:[{type:"word",value:"srgb"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color",nodes:[{type:"word",value:"srgb"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"color(srgb-linear 0 0 0)",property:"color",sniff:"color",matchers:[{type:"function",value:"color",nodes:[{type:"word",value:"srgb-linear"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color",nodes:[{type:"word",value:"srgb-linear"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"color(a98-rgb 0 0 0)",property:"color",sniff:"color",matchers:[{type:"function",value:"color",nodes:[{type:"word",value:"a98-rgb"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color",nodes:[{type:"word",value:"a98-rgb"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"color(prophoto-rgb 0 0 0)",property:"color",sniff:"color",matchers:[{type:"function",value:"color",nodes:[{type:"word",value:"prophoto-rgb"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color",nodes:[{type:"word",value:"prophoto-rgb"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"color(display-p3 0 0 0)",property:"color",sniff:"color",matchers:[{type:"function",value:"color",nodes:[{type:"word",value:"display-p3"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color",nodes:[{type:"word",value:"display-p3"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"color(rec2020 0 0 0)",property:"color",sniff:"color",matchers:[{type:"function",value:"color",nodes:[{type:"word",value:"rec2020"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color",nodes:[{type:"word",value:"rec2020"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"color(xyz-d50 0 0 0)",property:"color",sniff:"color",matchers:[{type:"function",value:"color",nodes:[{type:"word",value:"xyz-d50"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color",nodes:[{type:"word",value:"xyz-d50"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"color(xyz-d65 0 0 0)",property:"color",sniff:"color",matchers:[{type:"function",value:"color",nodes:[{type:"word",value:"xyz-d65"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color",nodes:[{type:"word",value:"xyz-d65"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"color(xyz 0 0 0)",property:"color",sniff:"color",matchers:[{type:"function",value:"color",nodes:[{type:"word",value:"xyz"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color",nodes:[{type:"word",value:"xyz"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"hsl(0, 0%, 0%)",property:"color",sniff:"hsl",matchers:[{type:"function",value:"hsl",nodes:[{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0}]}]},{supports:"hsl(0 0% 0% / 0)",property:"color",sniff:"hsl",matchers:[{type:"function",value:"hsl",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"hsl",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"hsla(0 0% 0% / 0)",property:"color",sniff:"hsla",matchers:[{type:"function",value:"hsla",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"hwb(0 0% 0%)",property:"color",sniff:"hwb",matchers:[{type:"function",value:"hwb",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"hwb",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"lab(0% 0 0)",property:"color",sniff:"lab",matchers:[{type:"function",value:"lab",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"lab",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"lch(0% 0 0)",property:"color",sniff:"lch",matchers:[{type:"function",value:"lch",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"lch",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"oklab(0% 0 0)",property:"color",sniff:"oklab",matchers:[{type:"function",value:"oklab",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"oklab",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"oklch(0% 0 0)",property:"color",sniff:"oklch",matchers:[{type:"function",value:"oklch",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"oklch",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"rgb(0, 0, 0, 0)",property:"color",sniff:"rgb",matchers:[{type:"function",value:"rgb",nodes:[{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0}]}]},{supports:"rgb(0 0 0 / 0)",property:"color",sniff:"rgb",matchers:[{type:"function",value:"rgb",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"rgb",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"rgba(0 0 0 / 0)",property:"color",sniff:"rgba",matchers:[{type:"function",value:"rgba",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"1ic",property:"font-size",sniff:"ic",matchers:[{type:"word",value:"1ic",dimension:{unit:"ic"}}]}];function matches(e,a){if(e.isVariable&&a&&("word"===a.type||"string"===a.type||"function"===a.type))return!0;if(e.type!==a.type)return!1;if(doesNotMatchValue(e,a))return!1;if(e.nodes&&a.nodes){for(let r=0;r<Math.max(e.nodes.length,a.nodes.length);r++){let p=r,t=r;for(;e.nodes[p]&&"space"===e.nodes[p].type;)p++;for(;a.nodes[t]&&"space"===a.nodes[t].type;)t++;if(!!e.nodes[p]!=!!a.nodes[t])return!1;if(!matches(e.nodes[p],a.nodes[t]))return!1}return!0}return!0}function doesNotMatchValue(e,a){var r,p,t,i;return("space"!==e.type||"space"!==a.type||(null==(r=e.value)?void 0:r.trim())!==(null==(p=a.value)?void 0:p.trim()))&&(e.dimension&&a.dimension?e.dimension.unit!==a.dimension.unit:"string"===e.type?e.value!==a.value:(null==(t=e.value)?void 0:t.toLowerCase())!==(null==(i=a.value)?void 0:i.toLowerCase()))}const r=["at","bottom","center","circle","closest-corner","closest-side","ellipse","farthest-corner","farthest-side","from","in","left","right","to","top"];function doublePositionGradients(e){const a=[],p=e.value.toLowerCase();if("function"===e.type&&("conic-gradient"===p||"linear-gradient"===p||"radial-gradient"===p||"repeating-conic-gradient"===p||"repeating-linear-gradient"===p||"repeating-radial-gradient"===p)){let p=0,t=!1,i=!1;e:for(let o=0;o<e.nodes.length;o++){const s=e.nodes[o];if("word"===s.type&&r.includes(s.value.toLowerCase())&&(t=!0),"div"!==s.type||","!==s.value.trim())if("word"!==s.type||"in"!==s.value.toLowerCase()){if("word"!==s.type&&"function"!==s.type||p++,i)switch(e.value.toLowerCase()){case"conic-gradient":a.push("(background: conic-gradient(in oklch, red 0deg, red 0deg 1deg, red 2deg))");break e;case"linear-gradient":a.push("(background: linear-gradient(in oklch, red 0%, red 0% 1%, red 2%))");break e;case"radial-gradient":a.push("(background: radial-gradient(in oklch, red, red 1px 2px, red 3px))");break e;case"repeating-conic-gradient":a.push("(background: repeating-conic-gradient(in oklch from 0deg, red 0deg, red 0deg 1deg, red 2deg))");break e;case"repeating-linear-gradient":a.push("(background: repeating-linear-gradient(in oklch, red 0%, red 0% 1%, red 2%))");break e;case"repeating-radial-gradient":a.push("(background: repeating-radial-gradient(in oklch, red, red 1px 2px, red 3px))");break e}if(!t&&3===p)switch(e.value.toLowerCase()){case"conic-gradient":a.push("(background: conic-gradient(red 0deg, red 0deg 1deg, red 2deg))");break e;case"linear-gradient":a.push("(background: linear-gradient(red 0%, red 0% 1%, red 2%))");break e;case"radial-gradient":a.push("(background: radial-gradient(red, red 1px 2px, red 3px))");break e;case"repeating-conic-gradient":a.push("(background: repeating-conic-gradient(from 0deg, red 0deg, red 0deg 1deg, red 2deg))");break e;case"repeating-linear-gradient":a.push("(background: repeating-linear-gradient(red 0%, red 0% 1%, red 2%))");break e;case"repeating-radial-gradient":a.push("(background: repeating-radial-gradient(red, red 1px 2px, red 3px))");break e}}else i=!0;else p=0,t=!1}}return a}const p=/^var$/i;function supportConditionsFromValue(r,t=!1){const i=[],o=[];a.forEach((e=>{r.indexOf(e.sniff)>-1&&o.push(e)}));let s=!1;try{e(r).walk((a=>{"function"===a.type&&p.test(a.value)&&(s=!0);try{a.dimension=e.unit(a.value)}finally{!1===a.dimension&&delete a.dimension}for(let e=0;e<o.length;e++){const r=o[e];for(let e=0;e<r.matchers.length;e++){if(matches(r.matchers[e],a))return void i.push(`(${r.property}: ${r.supports})`)}}i.push(...doublePositionGradients(a))}))}catch(e){}return t&&!s?[]:(s&&i.length>0&&i.push("(top: var(--f))"),Array.from(new Set(i)))}const t=/var\(/i,creator=()=>({postcssPlugin:"postcss-progressive-custom-properties",RuleExit:(e,{postcss:a})=>{const r=[],p=new Map,i=new Set;e.each((o=>{if("decl"!==o.type)return;if(o.variable){if(!i.has(o.prop.toString()))return void i.add(o.prop.toString())}else if(!i.has(o.prop.toString().toLowerCase()))return void i.add(o.prop.toString().toLowerCase());if(!o.variable&&!t.test(o.value))return;if("initial"===o.value.trim().toLowerCase())return;if(""===o.value.trim())return;const s=!o.variable,y=supportConditionsFromValue(o.value,s);if(!y.length)return;const l=y.join(" and ");if(r.length&&r[r.length-1].params===l){const e=r[r.length-1],a=p.get(e);if(a)return a.append(o.clone()),void o.remove()}const d=a.atRule({name:"supports",params:l,source:e.source,raws:{before:"\n\n",after:"\n"}}),c=e.clone();c.removeAll(),c.raws.before="\n",c.append(o.clone()),o.remove(),p.set(d,c),d.append(c),r.push(d)})),0!==r.length&&r.reverse().forEach((a=>{e.after(a)}))}});creator.postcss=!0;export{creator as default};
