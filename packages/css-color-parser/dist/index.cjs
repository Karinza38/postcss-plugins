"use strict";var e,o,a=require("@csstools/css-tokenizer"),n=require("@csstools/css-parser-algorithms"),t=require("@csstools/color-helpers"),r=require("@csstools/css-calc");function colorData_to_XYZ_D50(e){switch(e.colorNotation){case exports.ColorNotation.HEX:case exports.ColorNotation.RGB:return{...e,colorNotation:exports.ColorNotation.XYZ_D50,channels:t.xyz.sRGB_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case exports.ColorNotation.Linear_RGB:return{...e,colorNotation:exports.ColorNotation.XYZ_D50,channels:t.xyz.lin_sRGB_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case exports.ColorNotation.Display_P3:return{...e,colorNotation:exports.ColorNotation.XYZ_D50,channels:t.xyz.P3_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case exports.ColorNotation.Rec2020:return{...e,colorNotation:exports.ColorNotation.XYZ_D50,channels:t.xyz.rec_2020_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case exports.ColorNotation.A98_RGB:return{...e,colorNotation:exports.ColorNotation.XYZ_D50,channels:t.xyz.a98_RGB_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case exports.ColorNotation.ProPhoto_RGB:return{...e,colorNotation:exports.ColorNotation.XYZ_D50,channels:t.xyz.ProPhoto_RGB_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case exports.ColorNotation.HSL:return{...e,colorNotation:exports.ColorNotation.XYZ_D50,channels:t.xyz.HSL_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case exports.ColorNotation.HWB:return{...e,colorNotation:exports.ColorNotation.XYZ_D50,channels:t.xyz.HWB_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case exports.ColorNotation.Lab:return{...e,colorNotation:exports.ColorNotation.XYZ_D50,channels:t.xyz.Lab_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case exports.ColorNotation.OKLab:return{...e,colorNotation:exports.ColorNotation.XYZ_D50,channels:t.xyz.OKLab_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case exports.ColorNotation.LCH:return{...e,colorNotation:exports.ColorNotation.XYZ_D50,channels:t.xyz.LCH_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case exports.ColorNotation.OKLCH:return{...e,colorNotation:exports.ColorNotation.XYZ_D50,channels:t.xyz.OKLCH_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case exports.ColorNotation.XYZ_D50:return{...e,colorNotation:exports.ColorNotation.XYZ_D50,channels:t.xyz.XYZ_D50_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case exports.ColorNotation.XYZ_D65:return{...e,colorNotation:exports.ColorNotation.XYZ_D50,channels:t.xyz.XYZ_D65_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};default:throw new Error("Unsupported color notation")}}exports.ColorNotation=void 0,(e=exports.ColorNotation||(exports.ColorNotation={})).A98_RGB="a98-rgb",e.Display_P3="display-p3",e.HEX="hex",e.HSL="hsl",e.HWB="hwb",e.LCH="lch",e.Lab="lab",e.Linear_RGB="srgb-linear",e.OKLCH="oklch",e.OKLab="oklab",e.ProPhoto_RGB="prophoto-rgb",e.RGB="rgb",e.Rec2020="rec2020",e.XYZ_D50="xyz-d50",e.XYZ_D65="xyz-d65",exports.SyntaxFlag=void 0,(o=exports.SyntaxFlag||(exports.SyntaxFlag={})).ColorKeyword="color-keyword",o.HasAlpha="has-alpha",o.HasDimensionValues="has-dimension-values",o.HasNoneKeywords="has-none-keywords",o.HasNumberValues="has-number-values",o.HasPercentageAlpha="has-percentage-alpha",o.HasPercentageValues="has-percentage-values",o.HasVariableAlpha="has-variable-alpha",o.Hex="hex",o.LegacyHSL="legacy-hsl",o.LegacyRGB="legacy-rgb",o.NamedColor="named-color",o.RelativeColorSyntax="relative-color-syntax",o.ColorMix="color-mix";const s=new Set([exports.ColorNotation.A98_RGB,exports.ColorNotation.Display_P3,exports.ColorNotation.HEX,exports.ColorNotation.Linear_RGB,exports.ColorNotation.ProPhoto_RGB,exports.ColorNotation.RGB,exports.ColorNotation.Rec2020,exports.ColorNotation.XYZ_D50,exports.ColorNotation.XYZ_D65]);function colorDataTo(e,o){const a=colorData_to_XYZ_D50(e),n={...e};switch(o){case exports.ColorNotation.HEX:case exports.ColorNotation.RGB:n.colorNotation=exports.ColorNotation.RGB,n.channels=t.xyz.XYZ_D50_to_sRGB(a.channels);break;case exports.ColorNotation.Linear_RGB:n.colorNotation=exports.ColorNotation.Linear_RGB,n.channels=t.xyz.XYZ_D50_to_lin_sRGB(a.channels);break;case exports.ColorNotation.Display_P3:n.colorNotation=exports.ColorNotation.Display_P3,n.channels=t.xyz.XYZ_D50_to_P3(a.channels);break;case exports.ColorNotation.Rec2020:n.colorNotation=exports.ColorNotation.Rec2020,n.channels=t.xyz.XYZ_D50_to_rec_2020(a.channels);break;case exports.ColorNotation.ProPhoto_RGB:n.colorNotation=exports.ColorNotation.ProPhoto_RGB,n.channels=t.xyz.XYZ_D50_to_ProPhoto(a.channels);break;case exports.ColorNotation.A98_RGB:n.colorNotation=exports.ColorNotation.A98_RGB,n.channels=t.xyz.XYZ_D50_to_a98_RGB(a.channels);break;case exports.ColorNotation.HSL:n.colorNotation=exports.ColorNotation.HSL,n.channels=t.xyz.XYZ_D50_to_HSL(a.channels);break;case exports.ColorNotation.HWB:n.colorNotation=exports.ColorNotation.HWB,n.channels=t.xyz.XYZ_D50_to_HWB(a.channels);break;case exports.ColorNotation.Lab:n.colorNotation=exports.ColorNotation.Lab,n.channels=t.xyz.XYZ_D50_to_Lab(a.channels);break;case exports.ColorNotation.LCH:n.colorNotation=exports.ColorNotation.LCH,n.channels=t.xyz.XYZ_D50_to_LCH(a.channels);break;case exports.ColorNotation.OKLCH:n.colorNotation=exports.ColorNotation.OKLCH,n.channels=t.xyz.XYZ_D50_to_OKLCH(a.channels);break;case exports.ColorNotation.OKLab:n.colorNotation=exports.ColorNotation.OKLab,n.channels=t.xyz.XYZ_D50_to_OKLab(a.channels);break;case exports.ColorNotation.XYZ_D50:n.colorNotation=exports.ColorNotation.XYZ_D50,n.channels=t.xyz.XYZ_D50_to_XYZ_D50(a.channels);break;case exports.ColorNotation.XYZ_D65:n.colorNotation=exports.ColorNotation.XYZ_D65,n.channels=t.xyz.XYZ_D50_to_XYZ_D65(a.channels);break;default:throw new Error("Unsupported color notation")}if(o===e.colorNotation)n.channels=carryForwardMissingComponents(e.channels,[0,1,2],n.channels,[0,1,2]);else if(s.has(o)&&s.has(e.colorNotation))n.channels=carryForwardMissingComponents(e.channels,[0,1,2],n.channels,[0,1,2]);else switch(o){case exports.ColorNotation.HSL:switch(e.colorNotation){case exports.ColorNotation.HWB:n.channels=carryForwardMissingComponents(e.channels,[0],n.channels,[0]);break;case exports.ColorNotation.Lab:case exports.ColorNotation.OKLab:n.channels=carryForwardMissingComponents(e.channels,[2],n.channels,[0]);break;case exports.ColorNotation.LCH:case exports.ColorNotation.OKLCH:n.channels=carryForwardMissingComponents(e.channels,[0,1,2],n.channels,[2,1,0])}break;case exports.ColorNotation.HWB:switch(e.colorNotation){case exports.ColorNotation.HSL:n.channels=carryForwardMissingComponents(e.channels,[0],n.channels,[0]);break;case exports.ColorNotation.LCH:case exports.ColorNotation.OKLCH:n.channels=carryForwardMissingComponents(e.channels,[0],n.channels,[2])}break;case exports.ColorNotation.Lab:case exports.ColorNotation.OKLab:switch(e.colorNotation){case exports.ColorNotation.HSL:n.channels=carryForwardMissingComponents(e.channels,[0],n.channels,[2]);break;case exports.ColorNotation.Lab:case exports.ColorNotation.OKLab:case exports.ColorNotation.LCH:case exports.ColorNotation.OKLCH:n.channels=carryForwardMissingComponents(e.channels,[0],n.channels,[0])}break;case exports.ColorNotation.LCH:case exports.ColorNotation.OKLCH:switch(e.colorNotation){case exports.ColorNotation.HSL:n.channels=carryForwardMissingComponents(e.channels,[0,1,2],n.channels,[2,1,0]);break;case exports.ColorNotation.HWB:n.channels=carryForwardMissingComponents(e.channels,[0],n.channels,[2]);break;case exports.ColorNotation.Lab:case exports.ColorNotation.OKLab:n.channels=carryForwardMissingComponents(e.channels,[0],n.channels,[0]);break;case exports.ColorNotation.LCH:case exports.ColorNotation.OKLCH:n.channels=carryForwardMissingComponents(e.channels,[0,1,2],n.channels,[0,1,2])}}return n.channels=convertPowerlessComponentsToMissingComponents(n.channels,o),n}function convertPowerlessComponentsToMissingComponents(e,o){const a=[...e];switch(o){case exports.ColorNotation.HSL:(reducePrecision(a[2])<=0||reducePrecision(a[2])>=100)&&(a[0]=NaN,a[1]=NaN),a[1]<=0&&(a[0]=NaN);break;case exports.ColorNotation.HWB:Math.max(0,reducePrecision(a[1]))+Math.max(0,reducePrecision(a[2]))>=100&&(a[0]=NaN);break;case exports.ColorNotation.Lab:(reducePrecision(a[0])<=0||reducePrecision(a[0])>=100)&&(a[1]=NaN,a[2]=NaN);break;case exports.ColorNotation.LCH:reducePrecision(a[1])<=0&&(a[2]=NaN),(reducePrecision(a[0])<=0||reducePrecision(a[0])>=100)&&(a[1]=NaN,a[2]=NaN);break;case exports.ColorNotation.OKLab:(reducePrecision(a[0])<=0||reducePrecision(a[0])>=1)&&(a[1]=NaN,a[2]=NaN);break;case exports.ColorNotation.OKLCH:reducePrecision(a[1])<=0&&(a[2]=NaN),(reducePrecision(a[0])<=0||reducePrecision(a[0])>=1)&&(a[1]=NaN,a[2]=NaN)}return a}function carryForwardMissingComponents(e,o,a,n){const t=[...a];for(const a of o)Number.isNaN(e[o[a]])&&(t[n[a]]=NaN);return t}function fillInMissingComponents(e,o){const a=[...e];for(let n=0;n<e.length;n++)Number.isNaN(e[n])&&(a[n]=o[n]);return a}function reducePrecision(e,o=7){const a=Math.pow(10,o);return Math.round(e*a)/a}function normalize(e,o,a,n){return Math.min(Math.max(e/o,a),n)}const l=/[A-Z]/g;function toLowerCaseAZ(e){return e.replace(l,(e=>String.fromCharCode(e.charCodeAt(0)+32)))}function normalize_Color_ChannelValues(e,o){const n=[];for(let t=0;t<e.length;t++){const r=e[t];if(r[0]!==a.TokenType.Ident||"none"!==toLowerCaseAZ(r[4].value))if(r[0]!==a.TokenType.Percentage){if(r[0]!==a.TokenType.Number)return!1;{3!==t&&o.syntaxFlags.add(exports.SyntaxFlag.HasNumberValues);let e=normalize(r[4].value,1,-1/0,1/0);3===t&&(e=normalize(r[4].value,1,0,1)),n.push([a.TokenType.Number,e.toString(),r[2],r[3],{value:r[4].value,type:a.NumberType.Number}])}}else{3!==t&&o.syntaxFlags.add(exports.SyntaxFlag.HasPercentageValues);let e=normalize(r[4].value,100,-1/0,1/0);3===t&&(e=normalize(r[4].value,100,0,1)),n.push([a.TokenType.Number,e.toString(),r[2],r[3],{value:e,type:a.NumberType.Number}])}else o.syntaxFlags.add(exports.SyntaxFlag.HasNoneKeywords),n.push([a.TokenType.Number,"none",r[2],r[3],{value:NaN,type:a.NumberType.Number}])}return n}function threeChannelSpaceSeparated(e,o,t,s){const l=[],i=[],c=[],u=[],p={colorNotation:t,channels:[0,0,0],alpha:1,syntaxFlags:new Set(s)};let N=l;for(let o=0;o<e.value.length;o++){let t=e.value[o];if(n.isWhitespaceNode(t)||n.isCommentNode(t)){for(;n.isWhitespaceNode(e.value[o+1])||n.isCommentNode(e.value[o+1]);)o++;if(!l.length)continue;if(N===l){N=i;continue}if(N===i){N=c;continue}}else if(n.isTokenNode(t)&&t.value[0]===a.TokenType.Delim&&"/"===t.value[4].value){if(N===u)return!1;N=u}else{if(n.isFunctionNode(t)){if(N===u&&"var"===toLowerCaseAZ(t.getName())){p.syntaxFlags.add(exports.SyntaxFlag.HasVariableAlpha),N.push(t);continue}if(!r.mathFunctionNames.has(toLowerCaseAZ(t.getName())))return!1;const[[e]]=r.calcFromComponentValues([[t]],{toCanonicalUnits:!0,precision:100});if(!e||!n.isTokenNode(e)||(e.value[0]===a.TokenType.Percentage||e.value[0]===a.TokenType.Number||e.value[0]===a.TokenType.Dimension)&&Number.isNaN(e.value[4].value))return!1;t=e}if(!n.isTokenNode(t))return!1;N.push(t)}}if(1!==N.length)return!1;if(1!==l.length||1!==i.length||1!==c.length)return!1;if(!n.isTokenNode(l[0])||!n.isTokenNode(i[0])||!n.isTokenNode(c[0]))return!1;const h=[l[0].value,i[0].value,c[0].value];1===u.length&&(p.syntaxFlags.add(exports.SyntaxFlag.HasAlpha),n.isTokenNode(u[0])?h.push(u[0].value):p.alpha=u[0]);const x=o(h,p);return!1!==x&&(p.channels=[x[0][4].value,x[1][4].value,x[2][4].value],4===x.length&&(p.alpha=x[3][4].value),p)}const i=new Set(["srgb","srgb-linear","display-p3","a98-rgb","prophoto-rgb","rec2020","xyz","xyz-d50","xyz-d65"]);function color$1(e,o){for(let o=0;o<e.value.length;o++){const t=e.value[o];if(!n.isWhitespaceNode(t)&&!n.isCommentNode(t)){if(n.isTokenNode(t)&&t.value[0]===a.TokenType.Ident){const a=toLowerCaseAZ(t.value[4].value);return!!i.has(a)&&threeChannelSpaceSeparated(new n.FunctionNode(e.name,e.endToken,e.value.slice(o+1)),normalize_Color_ChannelValues,colorSpaceNameToColorNotation(a),[])}return!1}}return!1}function colorSpaceNameToColorNotation(e){switch(e){case"srgb":return exports.ColorNotation.RGB;case"srgb-linear":return exports.ColorNotation.Linear_RGB;case"display-p3":return exports.ColorNotation.Display_P3;case"a98-rgb":return exports.ColorNotation.A98_RGB;case"prophoto-rgb":return exports.ColorNotation.ProPhoto_RGB;case"rec2020":return exports.ColorNotation.Rec2020;case"xyz":case"xyz-d65":return exports.ColorNotation.XYZ_D65;case"xyz-d50":return exports.ColorNotation.XYZ_D50;default:throw new Error("Unknown color space name: "+e)}}const c=new Set(["srgb","srgb-linear","lab","oklab","xyz","xyz-d50","xyz-d65"]),u=new Set(["hsl","hwb","lch","oklch"]),p=new Set(["shorter","longer","increasing","decreasing"]);function colorMix(e,o){let t=null,r=null,s=null,l=!1;for(let i=0;i<e.value.length;i++){const N=e.value[i];if(!n.isWhitespaceNode(N)&&!n.isCommentNode(N)){if(n.isTokenNode(N)&&N.value[0]===a.TokenType.Ident){if(!t&&"in"===toLowerCaseAZ(N.value[4].value)){t=N;continue}if(t&&!r){r=toLowerCaseAZ(N.value[4].value);continue}if(t&&r&&!s&&u.has(r)){s=toLowerCaseAZ(N.value[4].value);continue}if(t&&r&&s&&!l&&"hue"===toLowerCaseAZ(N.value[4].value)){l=!0;continue}return!1}return!(!n.isTokenNode(N)||N.value[0]!==a.TokenType.Comma)&&(!!r&&(s||l?!!(r&&s&&l&&u.has(r)&&p.has(s))&&colorMixPolar(r,s,colorMixComponents(e.value.slice(i+1),o)):c.has(r)?colorMixRectangular(r,colorMixComponents(e.value.slice(i+1),o)):!!u.has(r)&&colorMixPolar(r,"shorter",colorMixComponents(e.value.slice(i+1),o))))}}return!1}function colorMixComponents(e,o){const t=[];let s=1,l=!1,i=!1;for(let s=0;s<e.length;s++){let c=e[s];if(!n.isWhitespaceNode(c)&&!n.isCommentNode(c)){if(!n.isTokenNode(c)||c.value[0]!==a.TokenType.Comma){if(!l){const e=o(c);if(e){l=e;continue}}if(!i){if(n.isFunctionNode(c)&&r.mathFunctionNames.has(toLowerCaseAZ(c.getName()))&&([[c]]=r.calcFromComponentValues([[c]],{toCanonicalUnits:!0,precision:100}),!c||!n.isTokenNode(c)||(c.value[0]===a.TokenType.Percentage||c.value[0]===a.TokenType.Number||c.value[0]===a.TokenType.Dimension)&&Number.isNaN(c.value[4].value)))return!1;if(n.isTokenNode(c)&&c.value[0]===a.TokenType.Percentage&&c.value[4].value>=0){i=c.value[4].value;continue}}return!1}if(!l)return!1;t.push({color:l,percentage:i}),l=!1,i=!1}}if(l&&t.push({color:l,percentage:i}),2!==t.length)return!1;let c=t[0].percentage,u=t[1].percentage;return(!1===c||!(c<0||c>100))&&((!1===u||!(u<0||u>100))&&(!1===c&&!1===u?(c=50,u=50):!1!==c&&!1===u?u=100-c:!1===c&&!1!==u&&(c=100-u),(0!==c||0!==u)&&(!1!==c&&!1!==u&&(c+u>100&&(c=c/(c+u)*100,u=u/(c+u)*100),c+u<100&&(s=(c+u)/100,c=c/(c+u)*100,u=u/(c+u)*100),{a:{color:t[0].color,percentage:c},b:{color:t[1].color,percentage:u},alphaMultiplier:s}))))}function colorMixRectangular(e,o){if(!o)return!1;const a=o.a.color,n=o.b.color,t=o.a.percentage/100;let r=a.channels,s=n.channels,l=exports.ColorNotation.RGB,i=a.alpha;if("number"!=typeof i)return!1;let c=n.alpha;if("number"!=typeof c)return!1;switch(i=Number.isNaN(i)?c:i,c=Number.isNaN(c)?i:c,e){case"srgb":l=exports.ColorNotation.RGB,a.colorNotation!==exports.ColorNotation.RGB&&a.colorNotation!==exports.ColorNotation.HEX&&(r=colorDataTo(a,exports.ColorNotation.RGB).channels),n.colorNotation!==exports.ColorNotation.RGB&&a.colorNotation!==exports.ColorNotation.HEX&&(s=colorDataTo(n,exports.ColorNotation.RGB).channels);break;case"srgb-linear":l=exports.ColorNotation.Linear_RGB,a.colorNotation!==exports.ColorNotation.Linear_RGB&&(r=colorDataTo(a,exports.ColorNotation.Linear_RGB).channels),n.colorNotation!==exports.ColorNotation.Linear_RGB&&(s=colorDataTo(n,exports.ColorNotation.Linear_RGB).channels);break;case"lab":l=exports.ColorNotation.Lab,a.colorNotation!==exports.ColorNotation.Lab&&(r=colorDataTo(a,exports.ColorNotation.Lab).channels),n.colorNotation!==exports.ColorNotation.Lab&&(s=colorDataTo(n,exports.ColorNotation.Lab).channels);break;case"oklab":l=exports.ColorNotation.OKLab,a.colorNotation!==exports.ColorNotation.OKLab&&(r=colorDataTo(a,exports.ColorNotation.OKLab).channels),n.colorNotation!==exports.ColorNotation.OKLab&&(s=colorDataTo(n,exports.ColorNotation.OKLab).channels);break;case"xyz-d50":l=exports.ColorNotation.XYZ_D50,a.colorNotation!==exports.ColorNotation.XYZ_D50&&(r=colorDataTo(a,exports.ColorNotation.XYZ_D50).channels),n.colorNotation!==exports.ColorNotation.XYZ_D50&&(s=colorDataTo(n,exports.ColorNotation.XYZ_D50).channels);break;case"xyz":case"xyz-d65":l=exports.ColorNotation.XYZ_D65,a.colorNotation!==exports.ColorNotation.XYZ_D65&&(r=colorDataTo(a,exports.ColorNotation.XYZ_D65).channels),n.colorNotation!==exports.ColorNotation.XYZ_D65&&(s=colorDataTo(n,exports.ColorNotation.XYZ_D65).channels)}r=fillInMissingComponents(r,s),s=fillInMissingComponents(s,r),r[0]=premultiply(r[0],i),r[1]=premultiply(r[1],i),r[2]=premultiply(r[2],i),s[0]=premultiply(s[0],c),s[1]=premultiply(s[1],c),s[2]=premultiply(s[2],c);const u=interpolate(i,c,t);return{colorNotation:l,channels:[un_premultiply(interpolate(r[0],s[0],t),u),un_premultiply(interpolate(r[1],s[1],t),u),un_premultiply(interpolate(r[2],s[2],t),u)],alpha:u*o.alphaMultiplier,syntaxFlags:new Set([exports.SyntaxFlag.ColorMix])}}function colorMixPolar(e,o,a){if(!a)return!1;const n=a.a.color,t=a.b.color,r=a.a.percentage/100;let s=n.channels,l=t.channels,i=0,c=0,u=0,p=0,N=0,h=0,x=exports.ColorNotation.RGB,m=n.alpha;if("number"!=typeof m)return!1;let y=t.alpha;if("number"!=typeof y)return!1;switch(m=Number.isNaN(m)?y:m,y=Number.isNaN(y)?m:y,e){case"hsl":x=exports.ColorNotation.HSL,n.colorNotation!==exports.ColorNotation.HSL&&(s=colorDataTo(n,exports.ColorNotation.HSL).channels),t.colorNotation!==exports.ColorNotation.HSL&&(l=colorDataTo(t,exports.ColorNotation.HSL).channels);break;case"hwb":x=exports.ColorNotation.HWB,n.colorNotation!==exports.ColorNotation.HWB&&(s=colorDataTo(n,exports.ColorNotation.HWB).channels),t.colorNotation!==exports.ColorNotation.HWB&&(l=colorDataTo(t,exports.ColorNotation.HWB).channels);break;case"lch":x=exports.ColorNotation.LCH,n.colorNotation!==exports.ColorNotation.LCH&&(s=colorDataTo(n,exports.ColorNotation.LCH).channels),t.colorNotation!==exports.ColorNotation.LCH&&(l=colorDataTo(t,exports.ColorNotation.LCH).channels);break;case"oklch":x=exports.ColorNotation.OKLCH,n.colorNotation!==exports.ColorNotation.OKLCH&&(s=colorDataTo(n,exports.ColorNotation.OKLCH).channels),t.colorNotation!==exports.ColorNotation.OKLCH&&(l=colorDataTo(t,exports.ColorNotation.OKLCH).channels)}switch(s=fillInMissingComponents(s,l),l=fillInMissingComponents(l,s),e){case"hsl":case"hwb":i=s[0],c=l[0],u=s[1],p=l[1],N=s[2],h=l[2];break;case"lch":case"oklch":u=s[0],p=l[0],N=s[1],h=l[1],i=s[2],c=l[2]}const C=c-i;switch(o){case"shorter":C>180?i+=360:C<-180&&(c+=360);break;case"longer":-180<C&&C<180&&(C>0?i+=360:c+=360);break;case"increasing":C<0&&(c+=360);break;case"decreasing":C>0&&(i+=360);break;default:throw new Error("Unknown hue interpolation method")}u=premultiply(u,m),N=premultiply(N,m),p=premultiply(p,y),h=premultiply(h,y);let T=[0,0,0];const b=interpolate(m,y,r);switch(e){case"hsl":case"hwb":T=[interpolate(i,c,r),un_premultiply(interpolate(u,p,r),b),un_premultiply(interpolate(N,h,r),b)];break;case"lch":case"oklch":T=[un_premultiply(interpolate(u,p,r),b),un_premultiply(interpolate(N,h,r),b),interpolate(i,c,r)]}return{colorNotation:x,channels:T,alpha:b*a.alphaMultiplier,syntaxFlags:new Set([exports.SyntaxFlag.ColorMix])}}function interpolate(e,o,a){return Number.isNaN(e)?o:Number.isNaN(o)?e:e*a+o*(1-a)}function premultiply(e,o){return Number.isNaN(o)?e:Number.isNaN(e)?NaN:e*o}function un_premultiply(e,o){return 0===o||Number.isNaN(o)?e:Number.isNaN(e)?NaN:e/o}function hex(e){const o=toLowerCaseAZ(e[4].value);if(o.match(/[^a-f0-9]/))return!1;const a={colorNotation:exports.ColorNotation.HEX,channels:[0,0,0],alpha:1,syntaxFlags:new Set([exports.SyntaxFlag.Hex])},n=o.length;if(3===n){const e=o[0],n=o[1],t=o[2];return a.channels=[parseInt(e+e,16)/255,parseInt(n+n,16)/255,parseInt(t+t,16)/255],a}if(6===n){const e=o[0]+o[1],n=o[2]+o[3],t=o[4]+o[5];return a.channels=[parseInt(e,16)/255,parseInt(n,16)/255,parseInt(t,16)/255],a}if(4===n){const e=o[0],n=o[1],t=o[2],r=o[3];return a.channels=[parseInt(e+e,16)/255,parseInt(n+n,16)/255,parseInt(t+t,16)/255],a.alpha=parseInt(r+r,16)/255,a.syntaxFlags.add(exports.SyntaxFlag.HasAlpha),a}if(8===n){const e=o[0]+o[1],n=o[2]+o[3],t=o[4]+o[5],r=o[6]+o[7];return a.channels=[parseInt(e,16)/255,parseInt(n,16)/255,parseInt(t,16)/255],a.alpha=parseInt(r,16)/255,a.syntaxFlags.add(exports.SyntaxFlag.HasAlpha),a}return!1}function normalizeHue(e){if(e[0]===a.TokenType.Number)return e[4].value=e[4].value%360,e[1]=e[4].value.toString(),e;if(e[0]===a.TokenType.Dimension){let o=e[4].value;switch(toLowerCaseAZ(e[4].unit)){case"deg":break;case"rad":o=180*e[4].value/Math.PI;break;case"grad":o=.9*e[4].value;break;case"turn":o=360*e[4].value;break;default:return!1}return o%=360,[a.TokenType.Number,o.toString(),e[2],e[3],{value:o,type:a.NumberType.Number}]}return!1}function normalize_legacy_HSL_ChannelValues(e,o){const n=[];for(let t=0;t<e.length;t++){const r=e[t];if(0!==t)if(r[0]!==a.TokenType.Percentage){if(r[0]!==a.TokenType.Number)return!1;{3!==t&&o.syntaxFlags.add(exports.SyntaxFlag.HasNumberValues);let e=normalize(r[4].value,1,0,100);3===t&&(e=normalize(r[4].value,1,0,1)),n.push([a.TokenType.Number,e.toString(),r[2],r[3],{value:e,type:a.NumberType.Number}])}}else{3===t?o.syntaxFlags.add(exports.SyntaxFlag.HasPercentageAlpha):o.syntaxFlags.add(exports.SyntaxFlag.HasPercentageValues);let e=normalize(r[4].value,1,0,100);3===t&&(e=normalize(r[4].value,100,0,1)),n.push([a.TokenType.Number,e.toString(),r[2],r[3],{value:e,type:a.NumberType.Number}])}else{const e=normalizeHue(r);if(!1===e)return!1;r[0]===a.TokenType.Dimension&&o.syntaxFlags.add(exports.SyntaxFlag.HasDimensionValues),n.push(e)}}return!o.syntaxFlags.has(exports.SyntaxFlag.HasNumberValues)&&n}function normalize_modern_HSL_ChannelValues(e,o){const n=[];for(let t=0;t<e.length;t++){const r=e[t];if(r[0]!==a.TokenType.Ident||"none"!==toLowerCaseAZ(r[4].value))if(0!==t)if(r[0]!==a.TokenType.Percentage){if(r[0]!==a.TokenType.Number)return!1;{3!==t&&o.syntaxFlags.add(exports.SyntaxFlag.HasNumberValues);let e=normalize(r[4].value,1,0,100);3===t&&(e=normalize(r[4].value,1,0,1)),n.push([a.TokenType.Number,e.toString(),r[2],r[3],{value:e,type:a.NumberType.Number}])}}else{3===t?o.syntaxFlags.add(exports.SyntaxFlag.HasPercentageAlpha):o.syntaxFlags.add(exports.SyntaxFlag.HasPercentageValues);let e=normalize(r[4].value,1,0,100);3===t&&(e=normalize(r[4].value,100,0,1)),n.push([a.TokenType.Number,e.toString(),r[2],r[3],{value:e,type:a.NumberType.Number}])}else{const e=normalizeHue(r);if(!1===e)return!1;r[0]===a.TokenType.Dimension&&o.syntaxFlags.add(exports.SyntaxFlag.HasDimensionValues),n.push(e)}else o.syntaxFlags.add(exports.SyntaxFlag.HasNoneKeywords),n.push([a.TokenType.Number,"none",r[2],r[3],{value:NaN,type:a.NumberType.Number}])}return n}function threeChannelLegacySyntax(e,o,t,s){const l=[],i=[],c=[],u=[],p={colorNotation:t,channels:[0,0,0],alpha:1,syntaxFlags:new Set(s)};let N=l;for(let o=0;o<e.value.length;o++){let t=e.value[o];if(!n.isWhitespaceNode(t)&&!n.isCommentNode(t)){if(n.isTokenNode(t)&&t.value[0]===a.TokenType.Comma){if(N===l){N=i;continue}if(N===i){N=c;continue}if(N===c){N=u;continue}if(N===u)return!1}if(n.isFunctionNode(t)){if(N===u&&"var"===toLowerCaseAZ(t.getName())){p.syntaxFlags.add(exports.SyntaxFlag.HasVariableAlpha),N.push(t);continue}if(!r.mathFunctionNames.has(toLowerCaseAZ(t.getName())))return!1;const[[e]]=r.calcFromComponentValues([[t]],{toCanonicalUnits:!0,precision:100});if(!e||!n.isTokenNode(e)||(e.value[0]===a.TokenType.Percentage||e.value[0]===a.TokenType.Number||e.value[0]===a.TokenType.Dimension)&&Number.isNaN(e.value[4].value))return!1;t=e}if(!n.isTokenNode(t))return!1;N.push(t)}}if(1!==N.length)return!1;if(1!==l.length||1!==i.length||1!==c.length)return!1;if(!n.isTokenNode(l[0])||!n.isTokenNode(i[0])||!n.isTokenNode(c[0]))return!1;const h=[l[0].value,i[0].value,c[0].value];1===u.length&&(p.syntaxFlags.add(exports.SyntaxFlag.HasAlpha),n.isTokenNode(u[0])?h.push(u[0].value):p.alpha=u[0]);const x=o(h,p);return!1!==x&&(p.channels=[x[0][4].value,x[1][4].value,x[2][4].value],4===x.length&&(p.alpha=x[3][4].value),p)}function hsl(e,o){if(e.value.some((e=>n.isTokenNode(e)&&e.value[0]===a.TokenType.Comma))){const o=hslCommaSeparated(e);if(!1!==o)return o}{const o=hslSpaceSeparated(e);if(!1!==o)return o}return!1}function hslCommaSeparated(e){return threeChannelLegacySyntax(e,normalize_legacy_HSL_ChannelValues,exports.ColorNotation.HSL,[exports.SyntaxFlag.LegacyHSL])}function hslSpaceSeparated(e){return threeChannelSpaceSeparated(e,normalize_modern_HSL_ChannelValues,exports.ColorNotation.HSL,[])}function normalize_HWB_ChannelValues(e,o){const n=[];for(let t=0;t<e.length;t++){const r=e[t];if(r[0]!==a.TokenType.Ident||"none"!==toLowerCaseAZ(r[4].value))if(0!==t)if(r[0]!==a.TokenType.Percentage){if(r[0]!==a.TokenType.Number)return!1;{if(3!==t)return!1;const e=normalize(r[4].value,1,0,1);n.push([a.TokenType.Number,e.toString(),r[2],r[3],{value:e,type:a.NumberType.Number}])}}else{3===t?o.syntaxFlags.add(exports.SyntaxFlag.HasPercentageAlpha):o.syntaxFlags.add(exports.SyntaxFlag.HasPercentageValues);let e=normalize(r[4].value,1,0,100);3===t&&(e=normalize(r[4].value,100,0,1)),n.push([a.TokenType.Number,e.toString(),r[2],r[3],{value:e,type:a.NumberType.Number}])}else{const e=normalizeHue(r);if(!1===e)return!1;r[0]===a.TokenType.Dimension&&o.syntaxFlags.add(exports.SyntaxFlag.HasDimensionValues),n.push(e)}else o.syntaxFlags.add(exports.SyntaxFlag.HasNoneKeywords),n.push([a.TokenType.Number,"none",r[2],r[3],{value:NaN,type:a.NumberType.Number}])}return n}function normalize_Lab_ChannelValues(e,o){const n=[];for(let t=0;t<e.length;t++){const r=e[t];if(r[0]!==a.TokenType.Ident||"none"!==toLowerCaseAZ(r[4].value))if(r[0]!==a.TokenType.Percentage){if(r[0]!==a.TokenType.Number)return!1;{3!==t&&o.syntaxFlags.add(exports.SyntaxFlag.HasNumberValues);let e=normalize(r[4].value,1,0,100);1===t||2===t?e=normalize(r[4].value,1,-1/0,1/0):3===t&&(e=normalize(r[4].value,1,0,1)),n.push([a.TokenType.Number,e.toString(),r[2],r[3],{value:r[4].value,type:a.NumberType.Number}])}}else{3!==t&&o.syntaxFlags.add(exports.SyntaxFlag.HasPercentageValues);let e=normalize(r[4].value,1,0,100);1===t||2===t?e=normalize(r[4].value,.8,-1/0,1/0):3===t&&(e=normalize(r[4].value,100,0,1)),n.push([a.TokenType.Number,e.toString(),r[2],r[3],{value:e,type:a.NumberType.Number}])}else o.syntaxFlags.add(exports.SyntaxFlag.HasNoneKeywords),n.push([a.TokenType.Number,"none",r[2],r[3],{value:NaN,type:a.NumberType.Number}])}return n}function normalize_LCH_ChannelValues(e,o){const n=[];for(let t=0;t<e.length;t++){const r=e[t];if(r[0]!==a.TokenType.Ident||"none"!==toLowerCaseAZ(r[4].value))if(2!==t)if(r[0]!==a.TokenType.Percentage){if(r[0]!==a.TokenType.Number)return!1;{3!==t&&o.syntaxFlags.add(exports.SyntaxFlag.HasNumberValues);let e=normalize(r[4].value,1,0,100);1===t?e=normalize(r[4].value,1,0,1/0):3===t&&(e=normalize(r[4].value,1,0,1)),n.push([a.TokenType.Number,e.toString(),r[2],r[3],{value:r[4].value,type:a.NumberType.Number}])}}else{3!==t&&o.syntaxFlags.add(exports.SyntaxFlag.HasPercentageValues);let e=normalize(r[4].value,1,0,100);1===t?e=normalize(r[4].value,100/150,0,1/0):3===t&&(e=normalize(r[4].value,100,0,1)),n.push([a.TokenType.Number,e.toString(),r[2],r[3],{value:e,type:a.NumberType.Number}])}else{const e=normalizeHue(r);if(!1===e)return!1;r[0]===a.TokenType.Dimension&&o.syntaxFlags.add(exports.SyntaxFlag.HasDimensionValues),n.push(e)}else o.syntaxFlags.add(exports.SyntaxFlag.HasNoneKeywords),n.push([a.TokenType.Number,"none",r[2],r[3],{value:NaN,type:a.NumberType.Number}])}return n}const N=new Map;for(const[e,o]of Object.entries(t.namedColors))N.set(e,o);function namedColor(e){const o=N.get(toLowerCaseAZ(e));return!!o&&{colorNotation:exports.ColorNotation.RGB,channels:[o[0]/255,o[1]/255,o[2]/255],alpha:1,syntaxFlags:new Set([exports.SyntaxFlag.ColorKeyword,exports.SyntaxFlag.NamedColor])}}function normalize_OKLab_ChannelValues(e,o){const n=[];for(let t=0;t<e.length;t++){const r=e[t];if(r[0]!==a.TokenType.Ident||"none"!==toLowerCaseAZ(r[4].value))if(r[0]!==a.TokenType.Percentage){if(r[0]!==a.TokenType.Number)return!1;{3!==t&&o.syntaxFlags.add(exports.SyntaxFlag.HasNumberValues);let e=normalize(r[4].value,1,0,1);1===t||2===t?e=normalize(r[4].value,1,-1/0,1/0):3===t&&(e=normalize(r[4].value,1,0,1)),n.push([a.TokenType.Number,e.toString(),r[2],r[3],{value:r[4].value,type:a.NumberType.Number}])}}else{3!==t&&o.syntaxFlags.add(exports.SyntaxFlag.HasPercentageValues);let e=normalize(r[4].value,100,0,1);1===t||2===t?e=normalize(r[4].value,250,-1/0,1/0):3===t&&(e=normalize(r[4].value,100,0,1)),n.push([a.TokenType.Number,e.toString(),r[2],r[3],{value:e,type:a.NumberType.Number}])}else o.syntaxFlags.add(exports.SyntaxFlag.HasNoneKeywords),n.push([a.TokenType.Number,"none",r[2],r[3],{value:NaN,type:a.NumberType.Number}])}return n}function normalize_OKLCH_ChannelValues(e,o){const n=[];for(let t=0;t<e.length;t++){const r=e[t];if(r[0]!==a.TokenType.Ident||"none"!==toLowerCaseAZ(r[4].value))if(2!==t)if(r[0]!==a.TokenType.Percentage){if(r[0]!==a.TokenType.Number)return!1;{3!==t&&o.syntaxFlags.add(exports.SyntaxFlag.HasNumberValues);let e=normalize(r[4].value,1,0,1);1===t?e=normalize(r[4].value,1,0,1/0):3===t&&(e=normalize(r[4].value,1,0,1)),n.push([a.TokenType.Number,e.toString(),r[2],r[3],{value:r[4].value,type:a.NumberType.Number}])}}else{3!==t&&o.syntaxFlags.add(exports.SyntaxFlag.HasPercentageValues);let e=normalize(r[4].value,100,0,1);1===t?e=normalize(r[4].value,250,0,1/0):3===t&&(e=normalize(r[4].value,100,0,1)),n.push([a.TokenType.Number,e.toString(),r[2],r[3],{value:e,type:a.NumberType.Number}])}else{const e=normalizeHue(r);if(!1===e)return!1;r[0]===a.TokenType.Dimension&&o.syntaxFlags.add(exports.SyntaxFlag.HasDimensionValues),n.push(e)}else o.syntaxFlags.add(exports.SyntaxFlag.HasNoneKeywords),n.push([a.TokenType.Number,"none",r[2],r[3],{value:NaN,type:a.NumberType.Number}])}return n}function normalize_legacy_sRGB_ChannelValues(e,o){const n=[];for(let t=0;t<e.length;t++){const r=e[t];if(r[0]!==a.TokenType.Percentage){if(r[0]!==a.TokenType.Number)return!1;{3!==t&&o.syntaxFlags.add(exports.SyntaxFlag.HasNumberValues);let e=normalize(r[4].value,255,0,1);3===t&&(e=normalize(r[4].value,1,0,1)),n.push([a.TokenType.Number,e.toString(),r[2],r[3],{value:e,type:a.NumberType.Number}])}}else{3===t?o.syntaxFlags.add(exports.SyntaxFlag.HasPercentageAlpha):o.syntaxFlags.add(exports.SyntaxFlag.HasPercentageValues);const e=normalize(r[4].value,100,0,1);n.push([a.TokenType.Number,e.toString(),r[2],r[3],{value:e,type:a.NumberType.Number}])}}return(!o.syntaxFlags.has(exports.SyntaxFlag.HasNumberValues)||!o.syntaxFlags.has(exports.SyntaxFlag.HasPercentageValues))&&n}function normalize_modern_sRGB_ChannelValues(e,o){const n=[];for(let t=0;t<e.length;t++){const r=e[t];if(r[0]!==a.TokenType.Ident||"none"!==toLowerCaseAZ(r[4].value))if(r[0]!==a.TokenType.Percentage){if(r[0]!==a.TokenType.Number)return!1;{3!==t&&o.syntaxFlags.add(exports.SyntaxFlag.HasNumberValues);let e=normalize(r[4].value,255,0,1);3===t&&(e=normalize(r[4].value,1,0,1)),n.push([a.TokenType.Number,e.toString(),r[2],r[3],{value:e,type:a.NumberType.Number}])}}else{3!==t&&o.syntaxFlags.add(exports.SyntaxFlag.HasPercentageValues);const e=normalize(r[4].value,100,0,1);n.push([a.TokenType.Number,e.toString(),r[2],r[3],{value:e,type:a.NumberType.Number}])}else o.syntaxFlags.add(exports.SyntaxFlag.HasNoneKeywords),n.push([a.TokenType.Number,"none",r[2],r[3],{value:NaN,type:a.NumberType.Number}])}return n}function rgb(e,o){if(e.value.some((e=>n.isTokenNode(e)&&e.value[0]===a.TokenType.Comma))){const o=rgbCommaSeparated(e);if(!1!==o)return o}else{const o=rgbSpaceSeparated(e);if(!1!==o)return o}return!1}function rgbCommaSeparated(e){return threeChannelLegacySyntax(e,normalize_legacy_sRGB_ChannelValues,exports.ColorNotation.RGB,[exports.SyntaxFlag.LegacyRGB])}function rgbSpaceSeparated(e){return threeChannelSpaceSeparated(e,normalize_modern_sRGB_ChannelValues,exports.ColorNotation.RGB,[])}function toPrecision(e,o=7){e=+e,o=+o;const a=(Math.floor(e)+"").length;if(o>a)return+e.toFixed(o-a);{const n=10**(a-o);return Math.round(e/n)*n}}function XYZ_D50_to_P3_Gamut(e){const o=t.xyz.XYZ_D50_to_P3(e);if(t.utils.inGamut(o))return t.utils.clip(o);let a=e.slice();return a=t.conversions.D50_to_D65(a),a=t.conversions.XYZ_to_OKLab(a),a=t.conversions.OKLab_to_OKLCH(a),a[0]<1e-6&&(a=[0,0,0]),a[0]>.999999&&(a=[1,0,0]),t.calculations.mapGamut(a,(e=>(e=t.conversions.OKLCH_to_OKLab(e),e=t.conversions.OKLab_to_XYZ(e),e=t.conversions.XYZ_to_lin_P3(e),t.conversions.gam_P3(e))),(e=>(e=t.conversions.lin_P3(e),e=t.conversions.lin_P3_to_XYZ(e),e=t.conversions.XYZ_to_OKLab(e),t.conversions.OKLab_to_OKLCH(e))))}function XYZ_D50_to_sRGB_Gamut(e){const o=t.xyz.XYZ_D50_to_sRGB(e);if(t.utils.inGamut(o))return t.utils.clip(o);let a=e.slice();return a=t.conversions.D50_to_D65(a),a=t.conversions.XYZ_to_OKLab(a),a=t.conversions.OKLab_to_OKLCH(a),a[0]<1e-6&&(a=[0,0,0]),a[0]>.999999&&(a=[1,0,0]),t.calculations.mapGamut(a,(e=>(e=t.conversions.OKLCH_to_OKLab(e),e=t.conversions.OKLab_to_XYZ(e),e=t.conversions.XYZ_to_lin_sRGB(e),t.conversions.gam_sRGB(e))),(e=>(e=t.conversions.lin_sRGB(e),e=t.conversions.lin_sRGB_to_XYZ(e),e=t.conversions.XYZ_to_OKLab(e),t.conversions.OKLab_to_OKLCH(e))))}exports.color=function color(e){if(n.isFunctionNode(e)){switch(toLowerCaseAZ(e.getName())){case"rgb":case"rgba":return rgb(e);case"hsl":case"hsla":return hsl(e);case"hwb":return threeChannelSpaceSeparated(e,normalize_HWB_ChannelValues,exports.ColorNotation.HWB,[]);case"lab":return threeChannelSpaceSeparated(e,normalize_Lab_ChannelValues,exports.ColorNotation.Lab,[]);case"lch":return threeChannelSpaceSeparated(e,normalize_LCH_ChannelValues,exports.ColorNotation.LCH,[]);case"oklab":return threeChannelSpaceSeparated(e,normalize_OKLab_ChannelValues,exports.ColorNotation.OKLab,[]);case"oklch":return threeChannelSpaceSeparated(e,normalize_OKLCH_ChannelValues,exports.ColorNotation.OKLCH,[]);case"color":return color$1(e);case"color-mix":return colorMix(e,color);default:return!1}}if(n.isTokenNode(e)){if(e.value[0]===a.TokenType.Hash)return hex(e.value);if(e.value[0]===a.TokenType.Ident){const o=namedColor(e.value[4].value);if(!1!==o)return o;const a="transparent"===toLowerCaseAZ(e.value[4].value)&&{colorNotation:exports.ColorNotation.RGB,channels:[0,0,0],alpha:0,syntaxFlags:new Set([exports.SyntaxFlag.ColorKeyword])};return!1!==a&&a}return!1}return!1},exports.colorDataFitsRGB_Gamut=function colorDataFitsRGB_Gamut(e){return!colorDataTo(e,exports.ColorNotation.RGB).channels.find((e=>e<-1e-5||e>1.00001))},exports.colorDataTo=colorDataTo,exports.serializeP3=function serializeP3(e,o=!0){e.channels=convertPowerlessComponentsToMissingComponents(e.channels,e.colorNotation);let r=e.channels.map((e=>Number.isNaN(e)?0:e));e.colorNotation!==exports.ColorNotation.Display_P3&&(r=o?XYZ_D50_to_P3_Gamut(colorData_to_XYZ_D50(e).channels):t.xyz.XYZ_D50_to_P3(colorData_to_XYZ_D50(e).channels));const s=toPrecision(r[0],6),l=toPrecision(r[1],6),i=toPrecision(r[2],6),c=[a.TokenType.Function,"color(",-1,-1,{value:"color"}],u=[a.TokenType.CloseParen,")",-1,-1,void 0],p=[a.TokenType.Whitespace," ",-1,-1,void 0],N=[new n.TokenNode([a.TokenType.Ident,"display-p3",-1,-1,{value:"display-p3"}]),new n.TokenNode(p),new n.TokenNode([a.TokenType.Number,s.toString(),-1,-1,{value:r[0],type:a.NumberType.Number}]),new n.TokenNode(p),new n.TokenNode([a.TokenType.Number,l.toString(),-1,-1,{value:r[1],type:a.NumberType.Number}]),new n.TokenNode(p),new n.TokenNode([a.TokenType.Number,i.toString(),-1,-1,{value:r[2],type:a.NumberType.Number}])];if("number"==typeof e.alpha){const o=Math.min(1,Math.max(0,toPrecision(Number.isNaN(e.alpha)?0:e.alpha)));return 1===o?new n.FunctionNode(c,u,N):new n.FunctionNode(c,u,[...N,new n.TokenNode(p),new n.TokenNode([a.TokenType.Delim,"/",-1,-1,{value:"/"}]),new n.TokenNode(p),new n.TokenNode([a.TokenType.Number,o.toString(),-1,-1,{value:e.alpha,type:a.NumberType.Integer}])])}return new n.FunctionNode(c,u,[...N,new n.TokenNode(p),new n.TokenNode([a.TokenType.Delim,"/",-1,-1,{value:"/"}]),new n.TokenNode(p),e.alpha])},exports.serializeRGB=function serializeRGB(e,o=!0){e.channels=convertPowerlessComponentsToMissingComponents(e.channels,e.colorNotation);let r=e.channels.map((e=>Number.isNaN(e)?0:e));e.colorNotation!==exports.ColorNotation.RGB&&e.colorNotation!==exports.ColorNotation.HEX&&(r=o?XYZ_D50_to_sRGB_Gamut(colorData_to_XYZ_D50(e).channels):t.xyz.XYZ_D50_to_sRGB(colorData_to_XYZ_D50(e).channels));const s=Math.min(255,Math.max(0,Math.round(255*toPrecision(r[0])))),l=Math.min(255,Math.max(0,Math.round(255*toPrecision(r[1])))),i=Math.min(255,Math.max(0,Math.round(255*toPrecision(r[2])))),c=[a.TokenType.CloseParen,")",-1,-1,void 0],u=[a.TokenType.Whitespace," ",-1,-1,void 0],p=[a.TokenType.Comma,",",-1,-1,void 0],N=[new n.TokenNode([a.TokenType.Number,s.toString(),-1,-1,{value:r[0],type:a.NumberType.Integer}]),new n.TokenNode(p),new n.TokenNode(u),new n.TokenNode([a.TokenType.Number,l.toString(),-1,-1,{value:r[1],type:a.NumberType.Integer}]),new n.TokenNode(p),new n.TokenNode(u),new n.TokenNode([a.TokenType.Number,i.toString(),-1,-1,{value:r[2],type:a.NumberType.Integer}])];if("number"==typeof e.alpha){const o=Math.min(1,Math.max(0,toPrecision(Number.isNaN(e.alpha)?0:e.alpha)));return 1===o?new n.FunctionNode([a.TokenType.Function,"rgb(",-1,-1,{value:"rgb"}],c,N):new n.FunctionNode([a.TokenType.Function,"rgba(",-1,-1,{value:"rgba"}],c,[...N,new n.TokenNode(p),new n.TokenNode(u),new n.TokenNode([a.TokenType.Number,o.toString(),-1,-1,{value:e.alpha,type:a.NumberType.Integer}])])}return new n.FunctionNode([a.TokenType.Function,"rgba(",-1,-1,{value:"rgba"}],c,[...N,new n.TokenNode(p),new n.TokenNode(u),e.alpha])};