import{walkerIndexGenerator as e,isTokenNode as t,isFunctionNode as i,ComponentValueType as a,isWhiteSpaceOrCommentNode as n,TokenNode as r,parseListOfComponentValues as s,isWhitespaceNode as o,isCommentNode as u,isSimpleBlockNode as d,parseCommaSeparatedListOfComponentValues as l}from"@csstools/css-parser-algorithms";import{stringify as h,isTokenWhiteSpaceOrComment as m,isTokenIdent as f,TokenType as c,isTokenNumber as M,isTokenDimension as p,isTokenDelim as y,isTokenColon as v,mutateIdent as g,isTokenOpenParen as k,tokenize as F,isTokenEOF as w,cloneTokens as N}from"@csstools/css-tokenizer";var O;!function(e){e.CustomMedia="custom-media",e.GeneralEnclosed="general-enclosed",e.MediaAnd="media-and",e.MediaCondition="media-condition",e.MediaConditionListWithAnd="media-condition-list-and",e.MediaConditionListWithOr="media-condition-list-or",e.MediaFeature="media-feature",e.MediaFeatureBoolean="mf-boolean",e.MediaFeatureName="mf-name",e.MediaFeaturePlain="mf-plain",e.MediaFeatureRangeNameValue="mf-range-name-value",e.MediaFeatureRangeValueName="mf-range-value-name",e.MediaFeatureRangeValueNameValue="mf-range-value-name-value",e.MediaFeatureValue="mf-value",e.MediaInParens="media-in-parens",e.MediaNot="media-not",e.MediaOr="media-or",e.MediaQueryWithType="media-query-with-type",e.MediaQueryWithoutType="media-query-without-type",e.MediaQueryInvalid="media-query-invalid"}(O||(O={}));class MediaCondition{type=O.MediaCondition;media;constructor(e){this.media=e}tokens(){return this.media.tokens()}toString(){return this.media.toString()}hasLeadingSpace(){return this.media.hasLeadingSpace()}indexOf(e){return e===this.media?"media":-1}at(e){if("media"===e)return this.media}walk(e,t){let i;return t&&(i={...t}),!1!==e({node:this.media,parent:this,state:i},"media")&&this.media.walk(e,i)}toJSON(){return{type:this.type,media:this.media.toJSON()}}isMediaCondition(){return MediaCondition.isMediaCondition(this)}static isMediaCondition(e){return!!e&&(e instanceof MediaCondition&&e.type===O.MediaCondition)}}class MediaInParens{type=O.MediaInParens;media;before;after;constructor(e,t=[],i=[]){this.media=e,this.before=t,this.after=i}tokens(){return[...this.before,...this.media.tokens(),...this.after]}toString(){return h(...this.before)+this.media.toString()+h(...this.after)}hasLeadingSpace(){return this.before.length?m(this.before[0]):this.media.hasLeadingSpace()}indexOf(e){return e===this.media?"media":-1}at(e){if("media"===e)return this.media}walk(e,t){let i;return t&&(i={...t}),!1!==e({node:this.media,parent:this,state:i},"media")&&("walk"in this.media?this.media.walk(e,i):void 0)}toJSON(){return{type:this.type,media:this.media.toJSON(),before:this.before,after:this.after}}isMediaInParens(){return MediaInParens.isMediaInParens(this)}static isMediaInParens(e){return!!e&&(e instanceof MediaInParens&&e.type===O.MediaInParens)}}class MediaQueryWithType{type=O.MediaQueryWithType;modifier;mediaType;and=void 0;media=void 0;constructor(e,t,i,a){this.modifier=e,this.mediaType=t,i&&a&&(this.and=i,this.media=a)}getModifier(){if(!this.modifier.length)return"";for(let e=0;e<this.modifier.length;e++){const t=this.modifier[e];if(f(t))return t[4].value}return""}negateQuery(){const e="not"===this.getModifier().toLowerCase(),t=this.getMediaType();return this.and&&this.media?e?[new MediaQueryWithType([],[[c.Ident,t,-1,-1,{value:t}]]),new MediaQueryWithoutType(this.media)]:[new MediaQueryWithType([[c.Ident,"not",-1,-1,{value:"not"}],[c.Whitespace," ",-1,-1,void 0]],[[c.Ident,t,-1,-1,{value:t}]]),...new MediaQueryWithoutType(this.media).negateQuery()]:e?[new MediaQueryWithType([],[[c.Ident,t,-1,-1,{value:t}]])]:[new MediaQueryWithType([[c.Ident,"not",-1,-1,{value:"not"}],[c.Whitespace," ",-1,-1,void 0]],[[c.Ident,t,-1,-1,{value:t}]])]}getMediaType(){if(!this.mediaType.length)return"";for(let e=0;e<this.mediaType.length;e++){const t=this.mediaType[e];if(f(t))return t[4].value}return""}tokens(){return this.and&&this.media?[...this.modifier,...this.mediaType,...this.and,...this.media.tokens()]:[...this.modifier,...this.mediaType]}toString(){return this.and&&this.media?h(...this.modifier)+h(...this.mediaType)+h(...this.and)+this.media.toString():h(...this.modifier)+h(...this.mediaType)}indexOf(e){return e===this.media?"media":-1}at(e){if("media"===e)return this.media}walk(e,t){let i;if(t&&(i={...t}),this.media)return!1!==e({node:this.media,parent:this,state:i},"media")&&this.media.walk(e,i)}toJSON(){return{type:this.type,string:this.toString(),modifier:this.modifier,mediaType:this.mediaType,and:this.and,media:this.media}}isMediaQueryWithType(){return MediaQueryWithType.isMediaQueryWithType(this)}static isMediaQueryWithType(e){return!!e&&(e instanceof MediaQueryWithType&&e.type===O.MediaQueryWithType)}}class MediaQueryWithoutType{type=O.MediaQueryWithoutType;media;constructor(e){this.media=e}negateQuery(){let e=this.media;if(e.media.type===O.MediaNot)return[new MediaQueryWithoutType(new MediaCondition(e.media.media))];e.media.type!==O.MediaConditionListWithOr&&e.media.type!==O.MediaConditionListWithAnd||(e=new MediaCondition(new MediaInParens(e,[[c.Whitespace," ",-1,-1,void 0],[c.OpenParen,"(",-1,-1,void 0]],[[c.CloseParen,")",-1,-1,void 0]]))),"before"in e.media&&(e.media.hasLeadingSpace()||e.media.before.splice(0,0,[c.Whitespace," ",-1,-1,void 0]));return[new MediaQueryWithType([[c.Ident,"not",-1,-1,{value:"not"}],[c.Whitespace," ",-1,-1,void 0]],[[c.Ident,"all",-1,-1,{value:"all"}],[c.Whitespace," ",-1,-1,void 0]],[[c.Ident,"and",-1,-1,{value:"and"}]],e)]}tokens(){return this.media.tokens()}toString(){return this.media.toString()}indexOf(e){return e===this.media?"media":-1}at(e){if("media"===e)return this.media}walk(e,t){let i;return t&&(i={...t}),!1!==e({node:this.media,parent:this,state:i},"media")&&this.media.walk(e,i)}toJSON(){return{type:this.type,string:this.toString(),media:this.media}}isMediaQueryWithoutType(){return MediaQueryWithoutType.isMediaQueryWithoutType(this)}static isMediaQueryWithoutType(e){return!!e&&(e instanceof MediaQueryWithoutType&&e.type===O.MediaQueryWithoutType)}}class MediaQueryInvalid{type=O.MediaQueryInvalid;media;constructor(e){this.media=e}negateQuery(){return[new MediaQueryInvalid(this.media)]}tokens(){return this.media.flatMap((e=>e.tokens()))}toString(){return this.media.map((e=>e.toString())).join("")}walk(t,i){if(0===this.media.length)return;const a=e(this.media);let n=0;for(;n<this.media.length;){const e=this.media[n];let r;if(i&&(r={...i}),!1===t({node:e,parent:this,state:r},n))return!1;if("walk"in e&&this.media.includes(e)&&!1===e.walk(t,r))return!1;if(n=a(this.media,e,n),-1===n)break}}toJSON(){return{type:this.type,string:this.toString(),media:this.media}}isMediaQueryInvalid(){return MediaQueryInvalid.isMediaQueryInvalid(this)}static isMediaQueryInvalid(e){return!!e&&(e instanceof MediaQueryInvalid&&e.type===O.MediaQueryInvalid)}}class GeneralEnclosed{type=O.GeneralEnclosed;value;constructor(e){this.value=e}tokens(){return this.value.tokens()}toString(){return this.value.toString()}hasLeadingSpace(){return m(this.value.tokens()[0])}indexOf(e){return e===this.value?"value":-1}at(e){if("value"===e)return this.value}walk(e,t){let i;return t&&(i={...t}),!1!==e({node:this.value,parent:this,state:i},"value")&&("walk"in this.value?this.value.walk(e,i):void 0)}toJSON(){return{type:this.type,tokens:this.tokens()}}isGeneralEnclosed(){return GeneralEnclosed.isGeneralEnclosed(this)}static isGeneralEnclosed(e){return!!e&&(e instanceof GeneralEnclosed&&e.type===O.GeneralEnclosed)}}class MediaAnd{type=O.MediaAnd;modifier;media;constructor(e,t){this.modifier=e,this.media=t}tokens(){return[...this.modifier,...this.media.tokens()]}toString(){return h(...this.modifier)+this.media.toString()}hasLeadingSpace(){return m(this.modifier[0])}indexOf(e){return e===this.media?"media":-1}at(e){return"media"===e?this.media:null}walk(e,t){let i;return t&&(i={...t}),!1!==e({node:this.media,parent:this,state:i},"media")&&this.media.walk(e,i)}toJSON(){return{type:this.type,modifier:this.modifier,media:this.media.toJSON()}}isMediaAnd(){return MediaAnd.isMediaAnd(this)}static isMediaAnd(e){return!!e&&(e instanceof MediaAnd&&e.type===O.MediaAnd)}}class MediaConditionListWithAnd{type=O.MediaConditionListWithAnd;leading;list;before;after;constructor(e,t,i=[],a=[]){this.leading=e,this.list=t,this.before=i,this.after=a}tokens(){return[...this.before,...this.leading.tokens(),...this.list.flatMap((e=>e.tokens())),...this.after]}toString(){return h(...this.before)+this.leading.toString()+this.list.map((e=>e.toString())).join("")+h(...this.after)}hasLeadingSpace(){return this.before.length?m(this.before[0]):this.leading.hasLeadingSpace()}indexOf(e){return e===this.leading?"leading":e.type===O.MediaAnd?this.list.indexOf(e):-1}at(e){return"leading"===e?this.leading:"number"==typeof e?(e<0&&(e=this.list.length+e),this.list[e]):void 0}walk(t,i){let a;if(i&&(a={...i}),!1===t({node:this.leading,parent:this,state:a},"leading"))return!1;if("walk"in this.leading&&!1===this.leading.walk(t,a))return!1;if(0===this.list.length)return;const n=e(this.list);let r=0;for(;r<this.list.length;){const e=this.list[r];if(i&&(a={...i}),!1===t({node:e,parent:this,state:a},r))return!1;if("walk"in e&&this.list.includes(e)&&!1===e.walk(t,a))return!1;if(r=n(this.list,e,r),-1===r)break}}toJSON(){return{type:this.type,leading:this.leading.toJSON(),list:this.list.map((e=>e.toJSON())),before:this.before,after:this.after}}isMediaConditionListWithAnd(){return MediaConditionListWithAnd.isMediaConditionListWithAnd(this)}static isMediaConditionListWithAnd(e){return!!e&&(e instanceof MediaConditionListWithAnd&&e.type===O.MediaConditionListWithAnd)}}class MediaConditionListWithOr{type=O.MediaConditionListWithOr;leading;list;before;after;constructor(e,t,i=[],a=[]){this.leading=e,this.list=t,this.before=i,this.after=a}tokens(){return[...this.before,...this.leading.tokens(),...this.list.flatMap((e=>e.tokens())),...this.after]}toString(){return h(...this.before)+this.leading.toString()+this.list.map((e=>e.toString())).join("")+h(...this.after)}hasLeadingSpace(){return this.before.length?m(this.before[0]):this.leading.hasLeadingSpace()}indexOf(e){return e===this.leading?"leading":e.type===O.MediaOr?this.list.indexOf(e):-1}at(e){return"leading"===e?this.leading:"number"==typeof e?(e<0&&(e=this.list.length+e),this.list[e]):void 0}walk(t,i){let a;if(i&&(a={...i}),!1===t({node:this.leading,parent:this,state:a},"leading"))return!1;if("walk"in this.leading&&!1===this.leading.walk(t,a))return!1;if(0===this.list.length)return;const n=e(this.list);let r=0;for(;r<this.list.length;){const e=this.list[r];if(i&&(a={...i}),!1===t({node:e,parent:this,state:a},r))return!1;if("walk"in e&&this.list.includes(e)&&!1===e.walk(t,a))return!1;if(r=n(this.list,e,r),-1===r)break}}toJSON(){return{type:this.type,leading:this.leading.toJSON(),list:this.list.map((e=>e.toJSON())),before:this.before,after:this.after}}isMediaConditionListWithOr(){return MediaConditionListWithOr.isMediaConditionListWithOr(this)}static isMediaConditionListWithOr(e){return!!e&&(e instanceof MediaConditionListWithOr&&e.type===O.MediaConditionListWithOr)}}function isNumber(e){return!!(t(e)&&M(e.value)||i(e)&&T.has(e.getName().toLowerCase()))}const T=new Set(["abs","acos","asin","atan","atan2","calc","clamp","cos","exp","hypot","log","max","min","mod","pow","rem","round","sign","sin","sqrt","tan"]);function isDimension(e){return t(e)&&p(e.value)}function isIdent(e){return t(e)&&f(e.value)}function isEnvironmentVariable(e){return i(e)&&"env"===e.getName().toLowerCase()}class MediaFeatureName{type=O.MediaFeatureName;name;before;after;constructor(e,t=[],i=[]){this.name=e,this.before=t,this.after=i}getName(){return this.name.value[4].value}getNameToken(){return this.name.value}tokens(){return[...this.before,...this.name.tokens(),...this.after]}toString(){return h(...this.before)+this.name.toString()+h(...this.after)}indexOf(e){return e===this.name?"name":-1}at(e){if("name"===e)return this.name}toJSON(){return{type:this.type,name:this.getName(),tokens:this.tokens()}}isMediaFeatureName(){return MediaFeatureName.isMediaFeatureName(this)}static isMediaFeatureName(e){return!!e&&(e instanceof MediaFeatureName&&e.type===O.MediaFeatureName)}}function parseMediaFeatureName(e){let t=-1;for(let i=0;i<e.length;i++){const n=e[i];if(n.type!==a.Whitespace&&n.type!==a.Comment){if(!isIdent(n))return!1;if(-1!==t)return!1;t=i}}return-1!==t&&new MediaFeatureName(e[t],e.slice(0,t).flatMap((e=>e.tokens())),e.slice(t+1).flatMap((e=>e.tokens())))}class MediaFeatureBoolean{type=O.MediaFeatureBoolean;name;constructor(e){this.name=e}getName(){return this.name.getName()}getNameToken(){return this.name.getNameToken()}tokens(){return this.name.tokens()}toString(){return this.name.toString()}indexOf(e){return e===this.name?"name":-1}at(e){if("name"===e)return this.name}toJSON(){return{type:this.type,name:this.name.toJSON(),tokens:this.tokens()}}isMediaFeatureBoolean(){return MediaFeatureBoolean.isMediaFeatureBoolean(this)}static isMediaFeatureBoolean(e){return!!e&&(e instanceof MediaFeatureBoolean&&e.type===O.MediaFeatureBoolean)}}function parseMediaFeatureBoolean(e){const t=parseMediaFeatureName(e);return!1===t?t:new MediaFeatureBoolean(t)}class MediaFeatureValue{type=O.MediaFeatureValue;value;before;after;constructor(e,t=[],i=[]){Array.isArray(e)&&1===e.length?this.value=e[0]:this.value=e,this.before=t,this.after=i}tokens(){return Array.isArray(this.value)?[...this.before,...this.value.flatMap((e=>e.tokens())),...this.after]:[...this.before,...this.value.tokens(),...this.after]}toString(){return Array.isArray(this.value)?h(...this.before)+this.value.map((e=>e.toString())).join("")+h(...this.after):h(...this.before)+this.value.toString()+h(...this.after)}indexOf(e){return e===this.value?"value":-1}at(e){return"value"===e?this.value:Array.isArray(this.value)&&"number"==typeof e?(e<0&&(e=this.value.length+e),this.value[e]):void 0}walk(t,i){if(Array.isArray(this.value)){if(0===this.value.length)return;const a=e(this.value);let n=0;for(;n<this.value.length;){const e=this.value[n];let r;if(i&&(r={...i}),!1===t({node:e,parent:this,state:r},n))return!1;if("walk"in e&&this.value.includes(e)&&!1===e.walk(t,r))return!1;if(n=a(this.value,e,n),-1===n)break}}else{let e;if(i&&(e={...i}),!1===t({node:this.value,parent:this,state:e},"value"))return!1;if("walk"in this.value)return this.value.walk(t,e)}}toJSON(){return Array.isArray(this.value)?{type:this.type,value:this.value.map((e=>e.toJSON())),tokens:this.tokens()}:{type:this.type,value:this.value.toJSON(),tokens:this.tokens()}}isMediaFeatureValue(){return MediaFeatureValue.isMediaFeatureValue(this)}static isMediaFeatureValue(e){return!!e&&(e instanceof MediaFeatureValue&&e.type===O.MediaFeatureValue)}}function parseMediaFeatureValue(e,t=!1){let i=-1,n=-1;for(let r=0;r<e.length;r++){const s=e[r];if(s.type!==a.Whitespace&&s.type!==a.Comment){if(-1!==i)return!1;if(isNumber(s)){const t=matchesRatioExactly(e.slice(r));if(-1!==t){i=t[0]+r,n=t[1]+r,r+=t[1]-t[0];continue}i=r,n=r}else if(isEnvironmentVariable(s))i=r,n=r;else if(isDimension(s))i=r,n=r;else{if(t||!isIdent(s))return!1;i=r,n=r}}}return-1!==i&&new MediaFeatureValue(e.slice(i,n+1),e.slice(0,i).flatMap((e=>e.tokens())),e.slice(n+1).flatMap((e=>e.tokens())))}function matchesRatioExactly(e){let t=-1,i=-1;const a=matchesRatio(e);if(-1===a)return-1;t=a[0],i=a[1];for(let t=i+1;t<e.length;t++){const i=e[t];if(!n(i))return-1}return[t,i]}function matchesRatio(e){let i=-1,a=-1;for(let r=0;r<e.length;r++){const s=e[r];if(!n(s)){if(t(s)){const e=s.value;if(y(e)&&"/"===e[4].value){if(-1===i)return-1;if(-1!==a)return-1;a=r;continue}}if(!isNumber(s))return-1;if(-1!==a)return[i,r];if(-1!==i)return-1;i=r}}return-1}class MediaFeaturePlain{type=O.MediaFeaturePlain;name;colon;value;constructor(e,t,i){this.name=e,this.colon=t,this.value=i}getName(){return this.name.getName()}getNameToken(){return this.name.getNameToken()}tokens(){return[...this.name.tokens(),this.colon,...this.value.tokens()]}toString(){return this.name.toString()+h(this.colon)+this.value.toString()}indexOf(e){return e===this.name?"name":e===this.value?"value":-1}at(e){return"name"===e?this.name:"value"===e?this.value:void 0}walk(e,t){let i;return t&&(i={...t}),!1!==e({node:this.value,parent:this,state:i},"value")&&this.value.walk(e,i)}toJSON(){return{type:this.type,name:this.name.toJSON(),value:this.value.toJSON(),tokens:this.tokens()}}isMediaFeaturePlain(){return MediaFeaturePlain.isMediaFeaturePlain(this)}static isMediaFeaturePlain(e){return!!e&&(e instanceof MediaFeaturePlain&&e.type===O.MediaFeaturePlain)}}function parseMediaFeaturePlain(e){let t=[],i=[],n=null;for(let r=0;r<e.length;r++){const s=e[r];if(s.type===a.Token){const a=s.value;if(v(a)){t=e.slice(0,r),i=e.slice(r+1),n=a;break}}}if(!t.length||!i.length||!n)return!1;const r=parseMediaFeatureName(t);if(!1===r)return!1;const s=parseMediaFeatureValue(i);return!1!==s&&new MediaFeaturePlain(r,n,s)}var S,C,Q,W;function matchesComparison(e){let t=-1;for(let i=0;i<e.length;i++){const n=e[i];if(n.type===a.Token){const e=n.value;if(y(e)){if(e[4].value===Q.EQ)return-1!==t?[t,i]:[i,i];if(e[4].value===S.LT){t=i;continue}if(e[4].value===C.GT){t=i;continue}}}break}return-1!==t&&[t,t]}function comparisonFromTokens(e){if(1!==e.length&&2!==e.length)return!1;if(!y(e[0]))return!1;if(1===e.length)switch(e[0][4].value){case Q.EQ:return Q.EQ;case S.LT:return S.LT;case C.GT:return C.GT;default:return!1}if(!y(e[1]))return!1;if(e[1][4].value!==Q.EQ)return!1;switch(e[0][4].value){case S.LT:return S.LT_OR_EQ;case C.GT:return C.GT_OR_EQ;default:return!1}}function invertComparison(e){switch(e){case Q.EQ:return Q.EQ;case S.LT:return C.GT;case S.LT_OR_EQ:return C.GT_OR_EQ;case C.GT:return S.LT;case C.GT_OR_EQ:return S.LT_OR_EQ;default:return!1}}!function(e){e.LT="<",e.LT_OR_EQ="<="}(S||(S={})),function(e){e.GT=">",e.GT_OR_EQ=">="}(C||(C={})),function(e){e.EQ="="}(Q||(Q={}));class MediaFeatureRangeNameValue{type=O.MediaFeatureRangeNameValue;name;operator;value;constructor(e,t,i){this.name=e,this.operator=t,this.value=i}operatorKind(){return comparisonFromTokens(this.operator)}getName(){return this.name.getName()}getNameToken(){return this.name.getNameToken()}tokens(){return[...this.name.tokens(),...this.operator,...this.value.tokens()]}toString(){return this.name.toString()+h(...this.operator)+this.value.toString()}indexOf(e){return e===this.name?"name":e===this.value?"value":-1}at(e){return"name"===e?this.name:"value"===e?this.value:void 0}walk(e,t){let i;return t&&(i={...t}),!1!==e({node:this.value,parent:this,state:i},"value")&&("walk"in this.value?this.value.walk(e,i):void 0)}toJSON(){return{type:this.type,name:this.name.toJSON(),value:this.value.toJSON(),tokens:this.tokens()}}isMediaFeatureRangeNameValue(){return MediaFeatureRangeNameValue.isMediaFeatureRangeNameValue(this)}static isMediaFeatureRangeNameValue(e){return!!e&&(e instanceof MediaFeatureRangeNameValue&&e.type===O.MediaFeatureRangeNameValue)}}class MediaFeatureRangeValueName{type=O.MediaFeatureRangeValueName;name;operator;value;constructor(e,t,i){this.name=e,this.operator=t,this.value=i}operatorKind(){return comparisonFromTokens(this.operator)}getName(){return this.name.getName()}getNameToken(){return this.name.getNameToken()}tokens(){return[...this.value.tokens(),...this.operator,...this.name.tokens()]}toString(){return this.value.toString()+h(...this.operator)+this.name.toString()}indexOf(e){return e===this.name?"name":e===this.value?"value":-1}at(e){return"name"===e?this.name:"value"===e?this.value:void 0}walk(e,t){let i;return t&&(i={...t}),!1!==e({node:this.value,parent:this,state:i},"value")&&("walk"in this.value?this.value.walk(e,i):void 0)}toJSON(){return{type:this.type,name:this.name.toJSON(),value:this.value.toJSON(),tokens:this.tokens()}}isMediaFeatureRangeValueName(){return MediaFeatureRangeValueName.isMediaFeatureRangeValueName(this)}static isMediaFeatureRangeValueName(e){return!!e&&(e instanceof MediaFeatureRangeValueName&&e.type===O.MediaFeatureRangeValueName)}}class MediaFeatureRangeValueNameValue{type=O.MediaFeatureRangeValueNameValue;name;valueOne;valueOneOperator;valueTwo;valueTwoOperator;constructor(e,t,i,a,n){this.name=e,this.valueOne=t,this.valueOneOperator=i,this.valueTwo=a,this.valueTwoOperator=n}valueOneOperatorKind(){return comparisonFromTokens(this.valueOneOperator)}valueTwoOperatorKind(){return comparisonFromTokens(this.valueTwoOperator)}getName(){return this.name.getName()}getNameToken(){return this.name.getNameToken()}tokens(){return[...this.valueOne.tokens(),...this.valueOneOperator,...this.name.tokens(),...this.valueTwoOperator,...this.valueTwo.tokens()]}toString(){return this.valueOne.toString()+h(...this.valueOneOperator)+this.name.toString()+h(...this.valueTwoOperator)+this.valueTwo.toString()}indexOf(e){return e===this.name?"name":e===this.valueOne?"valueOne":e===this.valueTwo?"valueTwo":-1}at(e){return"name"===e?this.name:"valueOne"===e?this.valueOne:"valueTwo"===e?this.valueTwo:void 0}walk(e,t){let i;return t&&(i={...t}),!1!==e({node:this.valueOne,parent:this,state:i},"valueOne")&&((!("walk"in this.valueOne)||!1!==this.valueOne.walk(e,i))&&(t&&(i={...t}),!1!==e({node:this.valueTwo,parent:this,state:i},"valueTwo")&&((!("walk"in this.valueTwo)||!1!==this.valueTwo.walk(e,i))&&void 0)))}toJSON(){return{type:this.type,name:this.name.toJSON(),valueOne:this.valueOne.toJSON(),valueTwo:this.valueTwo.toJSON(),tokens:this.tokens()}}isMediaFeatureRangeValueNameValue(){return MediaFeatureRangeValueNameValue.isMediaFeatureRangeValueNameValue(this)}static isMediaFeatureRangeValueNameValue(e){return!!e&&(e instanceof MediaFeatureRangeValueNameValue&&e.type===O.MediaFeatureRangeValueNameValue)}}function parseMediaFeatureRange(e){let t=!1,i=!1;for(let n=0;n<e.length;n++){const r=e[n];if(r.type===a.Token){const a=r.value;if(y(a)){const a=matchesComparison(e.slice(n));if(!1!==a){if(!1!==t){i=[a[0]+n,a[1]+n];break}t=[a[0]+n,a[1]+n],n+=a[1]}}}}if(!1===t)return!1;const n=[e[t[0]].value];if(t[0]!==t[1]&&n.push(e[t[1]].value),!1===i){const i=e.slice(0,t[0]),a=e.slice(t[1]+1),r=parseMediaFeatureName(i);if(r){const e=parseMediaFeatureValue(a,!0);return!!e&&new MediaFeatureRangeNameValue(r,n,e)}const s=parseMediaFeatureName(a);if(s){const e=parseMediaFeatureValue(i,!0);return!!e&&new MediaFeatureRangeValueName(s,n,e)}return!1}const r=[e[i[0]].value];i[0]!==i[1]&&r.push(e[i[1]].value);const s=e.slice(0,t[0]),o=e.slice(t[1]+1,i[0]),u=e.slice(i[1]+1),d=parseMediaFeatureValue(s,!0),l=parseMediaFeatureName(o),h=parseMediaFeatureValue(u,!0);if(!d||!l||!h)return!1;{const e=comparisonFromTokens(n);if(!1===e||e===Q.EQ)return!1;const t=comparisonFromTokens(r);if(!1===t||t===Q.EQ)return!1;if(!(e!==S.LT&&e!==S.LT_OR_EQ||t!==C.GT&&t!==C.GT_OR_EQ))return!1;if(!(e!==C.GT&&e!==C.GT_OR_EQ||t!==S.LT&&t!==S.LT_OR_EQ))return!1}return new MediaFeatureRangeValueNameValue(l,d,n,h,r)}class MediaFeature{type=O.MediaFeature;feature;before;after;constructor(e,t=[],i=[]){this.feature=e,this.before=t,this.after=i}getName(){return this.feature.getName()}getNameToken(){return this.feature.getNameToken()}tokens(){return[...this.before,...this.feature.tokens(),...this.after]}toString(){return h(...this.before)+this.feature.toString()+h(...this.after)}hasLeadingSpace(){return m(this.before[0])}indexOf(e){return e===this.feature?"feature":-1}at(e){if("feature"===e)return this.feature}walk(e,t){let i;return t&&(i={...t}),!1!==e({node:this.feature,parent:this,state:i},"feature")&&("walk"in this.feature?this.feature.walk(e,i):void 0)}toJSON(){return{type:this.type,feature:this.feature.toJSON(),before:this.before,after:this.after}}isMediaFeature(){return MediaFeature.isMediaFeature(this)}static isMediaFeature(e){return!!e&&(e instanceof MediaFeature&&e.type===O.MediaFeature)}}function parseMediaFeature(e,t=[],i=[]){if(!k(e.startToken))return!1;const a=parseMediaFeatureBoolean(e.value);if(!1!==a)return new MediaFeature(a,t,i);const n=parseMediaFeaturePlain(e.value);if(!1!==n)return new MediaFeature(n,t,i);const r=parseMediaFeatureRange(e.value);return!1!==r&&new MediaFeature(r,t,i)}function newMediaFeatureBoolean(e){const t=[c.Ident,"",-1,-1,{value:""}];return g(t,e),new MediaFeature(new MediaFeatureBoolean(new MediaFeatureName(new r(t))),[[c.OpenParen,"(",-1,-1,void 0]],[[c.CloseParen,")",-1,-1,void 0]])}function newMediaFeaturePlain(e,...t){const i=[c.Ident,"",-1,-1,{value:""}];g(i,e);const a=s(t);return new MediaFeature(new MediaFeaturePlain(new MediaFeatureName(new r(i)),[c.Colon,":",-1,-1,void 0],new MediaFeatureValue(1===a.length?a[0]:a)),[[c.OpenParen,"(",-1,-1,void 0]],[[c.CloseParen,")",-1,-1,void 0]])}class MediaNot{type=O.MediaNot;modifier;media;constructor(e,t){this.modifier=e,this.media=t}tokens(){return[...this.modifier,...this.media.tokens()]}toString(){return h(...this.modifier)+this.media.toString()}hasLeadingSpace(){return this.modifier.length?m(this.modifier[0]):this.media.hasLeadingSpace()}indexOf(e){return e===this.media?"media":-1}at(e){if("media"===e)return this.media}walk(e,t){let i;return t&&(i={...t}),!1!==e({node:this.media,parent:this,state:i},"media")&&this.media.walk(e,i)}toJSON(){return{type:this.type,modifier:this.modifier,media:this.media.toJSON()}}isMediaNot(){return MediaNot.isMediaNot(this)}static isMediaNot(e){return!!e&&(e instanceof MediaNot&&e.type===O.MediaNot)}}class MediaOr{type=O.MediaOr;modifier;media;constructor(e,t){this.modifier=e,this.media=t}tokens(){return[...this.modifier,...this.media.tokens()]}toString(){return h(...this.modifier)+this.media.toString()}indexOf(e){return e===this.media?"media":-1}at(e){if("media"===e)return this.media}walk(e,t){let i;return t&&(i={...t}),!1!==e({node:this.media,parent:this,state:i},"media")&&this.media.walk(e,i)}toJSON(){return{type:this.type,modifier:this.modifier,media:this.media.toJSON()}}isMediaOr(){return MediaOr.isMediaOr(this)}static isMediaOr(e){return!!e&&(e instanceof MediaOr&&e.type===O.MediaOr)}}function modifierFromToken(e){if(!f(e))return!1;switch(e[4].value.toLowerCase()){case W.Not:return W.Not;case W.Only:return W.Only;default:return!1}}function parseMediaQuery(e){{const t=parseMediaCondition(e);if(!1!==t)return new MediaQueryWithoutType(t)}{let i=-1,a=-1,n=-1;for(let r=0;r<e.length;r++){const s=e[r];if(!o(s)&&!u(s)){if(t(s)){const t=s.value;if(-1===i&&f(t)&&modifierFromToken(t)){i=r;continue}if(-1===a&&f(t)&&!modifierFromToken(t)){a=r;continue}if(-1===n&&f(t)&&R.test(t[4].value)){n=r;if(!1===parseMediaConditionWithoutOr(e.slice(r+1)))return!1;break}return!1}return!1}}let r=[],s=[];-1!==i?(r=e.slice(0,i+1).flatMap((e=>e.tokens())),-1!==a&&(s=e.slice(i+1,a+1).flatMap((e=>e.tokens())))):-1!==a&&(s=e.slice(0,a+1).flatMap((e=>e.tokens())));const d=parseMediaConditionWithoutOr(e.slice(Math.max(i,a,n)+1));return!1===d?new MediaQueryWithType(r,[...s,...e.slice(a+1).flatMap((e=>e.tokens()))]):new MediaQueryWithType(r,s,e.slice(a+1,n+1).flatMap((e=>e.tokens())),d)}}function parseMediaConditionListWithOr(e){let t=!1;const i=[];let n=-1,r=-1;for(let s=0;s<e.length;s++){if(t){const t=parseMediaOr(e.slice(s));if(!1!==t){s+=t.advance,i.push(t.node),r=s;continue}}const o=e[s];if(o.type!==a.Whitespace&&o.type!==a.Comment){if(t)return!1;if(!1!==t||!d(o))return!1;if(o.normalize(),t=parseMediaInParensFromSimpleBlock(o),!1===t)return!1;n=s}}return!(!t||!i.length)&&new MediaConditionListWithOr(t,i,e.slice(0,n).flatMap((e=>e.tokens())),e.slice(r+1).flatMap((e=>e.tokens())))}function parseMediaConditionListWithAnd(e){let t=!1;const i=[];let n=-1,r=-1;for(let s=0;s<e.length;s++){if(t){const t=parseMediaAnd(e.slice(s));if(!1!==t){s+=t.advance,i.push(t.node),r=s;continue}}const o=e[s];if(o.type!==a.Whitespace&&o.type!==a.Comment){if(t)return!1;if(!1!==t||!d(o))return!1;if(o.normalize(),t=parseMediaInParensFromSimpleBlock(o),!1===t)return!1;n=s}}return!(!t||!i.length)&&new MediaConditionListWithAnd(t,i,e.slice(0,n).flatMap((e=>e.tokens())),e.slice(r+1).flatMap((e=>e.tokens())))}function parseMediaCondition(e){const t=parseMediaNot(e);if(!1!==t)return new MediaCondition(t);const i=parseMediaConditionListWithAnd(e);if(!1!==i)return new MediaCondition(i);const a=parseMediaConditionListWithOr(e);if(!1!==a)return new MediaCondition(a);const n=parseMediaInParens(e);return!1!==n&&new MediaCondition(n)}function parseMediaConditionWithoutOr(e){const t=parseMediaNot(e);if(!1!==t)return new MediaCondition(t);const i=parseMediaConditionListWithAnd(e);if(!1!==i)return new MediaCondition(i);const a=parseMediaInParens(e);return!1!==a&&new MediaCondition(a)}function parseMediaInParens(e){let t=-1;for(let i=0;i<e.length;i++){const n=e[i];if(n.type!==a.Whitespace&&n.type!==a.Comment){if(!d(n))return!1;if(-1!==t)return!1;t=i}}if(-1===t)return!1;const i=e[t];if(!k(i.startToken))return!1;i.normalize();const n=[...e.slice(0,t).flatMap((e=>e.tokens())),i.startToken],r=[i.endToken,...e.slice(t+1).flatMap((e=>e.tokens()))],s=parseMediaFeature(i,n,r);if(!1!==s)return new MediaInParens(s);const o=parseMediaCondition(i.value);return!1!==o?new MediaInParens(o,n,r):new MediaInParens(new GeneralEnclosed(i),e.slice(0,t).flatMap((e=>e.tokens())),e.slice(t+1).flatMap((e=>e.tokens())))}function parseMediaInParensFromSimpleBlock(e){if(!k(e.startToken))return!1;const t=parseMediaFeature(e,[e.startToken],[e.endToken]);if(!1!==t)return new MediaInParens(t);const i=parseMediaCondition(e.value);return!1!==i?new MediaInParens(i,[e.startToken],[e.endToken]):new MediaInParens(new GeneralEnclosed(e))}!function(e){e.Not="not",e.Only="only"}(W||(W={}));const V=/^not$/i;function parseMediaNot(e){let t=!1,i=null;for(let n=0;n<e.length;n++){const r=e[n];if(r.type!==a.Whitespace&&r.type!==a.Comment){if(isIdent(r)){const e=r.value;if(V.test(e[4].value)){if(t)return!1;t=!0;continue}return!1}if(!t||!d(r))return!1;{r.normalize();const t=parseMediaInParensFromSimpleBlock(r);if(!1===t)return!1;i=new MediaNot(e.slice(0,n).flatMap((e=>e.tokens())),t)}}}return i||!1}const L=/^or$/i;function parseMediaOr(e){let t=!1;for(let i=0;i<e.length;i++){const n=e[i];if(n.type!==a.Whitespace&&n.type!==a.Comment){if(isIdent(n)){const e=n.value;if(L.test(e[4].value)){if(t)return!1;t=!0;continue}return!1}if(t&&d(n)){n.normalize();const t=parseMediaInParensFromSimpleBlock(n);return!1!==t&&{advance:i,node:new MediaOr(e.slice(0,i).flatMap((e=>e.tokens())),t)}}return!1}}return!1}const R=/^and$/i;function parseMediaAnd(e){let t=!1;for(let i=0;i<e.length;i++){const n=e[i];if(n.type!==a.Whitespace&&n.type!==a.Comment){if(isIdent(n)){const e=n.value;if(R.test(e[4].value)){if(t)return!1;t=!0;continue}return!1}if(t&&d(n)){n.normalize();const t=parseMediaInParensFromSimpleBlock(n);return!1!==t&&{advance:i,node:new MediaAnd(e.slice(0,i).flatMap((e=>e.tokens())),t)}}return!1}}return!1}function parseFromTokens(e,t){const i=l(e,{onParseError:t?.onParseError});return i.map(((e,a)=>{const n=parseMediaQuery(e);return!1===n&&!0===t?.preserveInvalidMediaQueries?new MediaQueryInvalid(i[a]):n})).filter((e=>!!e))}function parse(e,t){return parseFromTokens(F({css:e},{onParseError:t?.onParseError}),t)}class CustomMedia{type=O.CustomMedia;name;mediaQueryList=null;trueOrFalseKeyword=null;constructor(e,t,i){this.name=e,this.mediaQueryList=t,this.trueOrFalseKeyword=i??null}getName(){for(let e=0;e<this.name.length;e++){const t=this.name[e];if(f(t))return t[4].value}return""}getNameToken(){for(let e=0;e<this.name.length;e++){const t=this.name[e];if(f(t))return t}return null}hasMediaQueryList(){return!!this.mediaQueryList}hasTrueKeyword(){if(!this.trueOrFalseKeyword)return!1;for(let e=0;e<this.trueOrFalseKeyword.length;e++){const t=this.trueOrFalseKeyword[e];if(!m(t))return!!f(t)&&"true"===t[4].value.toLowerCase()}return!1}hasFalseKeyword(){if(!this.trueOrFalseKeyword)return!1;for(let e=0;e<this.trueOrFalseKeyword.length;e++){const t=this.trueOrFalseKeyword[e];if(!m(t))return!!f(t)&&"false"===t[4].value.toLowerCase()}return!1}tokens(){if(this.trueOrFalseKeyword)return[...this.name,...this.trueOrFalseKeyword];if(!this.mediaQueryList)return[...this.name];const e=[];for(let t=0;t<this.mediaQueryList.length;t++){const i=this.mediaQueryList[t];0!==t&&e.push([c.Comma,",",-1,-1,void 0]),e.push(...i.tokens())}return[...this.name,...e]}toString(){return h(...this.tokens())}toJSON(){return{type:this.type,string:this.toString(),nameValue:this.getName(),name:this.name,hasFalseKeyword:this.hasFalseKeyword(),hasTrueKeyword:this.hasTrueKeyword(),trueOrFalseKeyword:this.trueOrFalseKeyword,mediaQueryList:this.mediaQueryList?.map((e=>e.toJSON()))}}isCustomMedia(){return CustomMedia.isCustomMedia(this)}static isCustomMedia(e){return!!e&&(e instanceof CustomMedia&&e.type===O.CustomMedia)}}function parseCustomMediaFromTokens(e,t){let i=[],a=e;for(let t=0;t<e.length;t++)if(!m(e[t])){if(f(e[t])){if(e[t][4].value.startsWith("--")){i=e.slice(0,t+1),a=e.slice(t+1);break}}return!1}let n=!0;for(let e=0;e<a.length;e++)if(!m(a[e])){if(f(a[e])){const t=a[e][4].value.toLowerCase();if("false"===t)continue;if("true"===t)continue}if(w(a[e]))break;n=!1}return n?new CustomMedia(i,null,a):new CustomMedia(i,parseFromTokens(N(a),t))}function parseCustomMedia(e,t){return parseCustomMediaFromTokens(F({css:e},{onParseError:t?.onParseError}),t)}function isCustomMedia(e){return CustomMedia.isCustomMedia(e)}function isGeneralEnclosed(e){return GeneralEnclosed.isGeneralEnclosed(e)}function isMediaAnd(e){return MediaAnd.isMediaAnd(e)}function isMediaConditionList(e){return isMediaConditionListWithAnd(e)||isMediaConditionListWithOr(e)}function isMediaConditionListWithAnd(e){return MediaConditionListWithAnd.isMediaConditionListWithAnd(e)}function isMediaConditionListWithOr(e){return MediaConditionListWithOr.isMediaConditionListWithOr(e)}function isMediaCondition(e){return MediaCondition.isMediaCondition(e)}function isMediaFeatureBoolean(e){return MediaFeatureBoolean.isMediaFeatureBoolean(e)}function isMediaFeatureName(e){return MediaFeatureName.isMediaFeatureName(e)}function isMediaFeatureValue(e){return MediaFeatureValue.isMediaFeatureValue(e)}function isMediaFeaturePlain(e){return MediaFeaturePlain.isMediaFeaturePlain(e)}function isMediaFeatureRange(e){return isMediaFeatureRangeNameValue(e)||isMediaFeatureRangeValueName(e)||isMediaFeatureRangeValueNameValue(e)}function isMediaFeatureRangeNameValue(e){return MediaFeatureRangeNameValue.isMediaFeatureRangeNameValue(e)}function isMediaFeatureRangeValueName(e){return MediaFeatureRangeValueName.isMediaFeatureRangeValueName(e)}function isMediaFeatureRangeValueNameValue(e){return MediaFeatureRangeValueNameValue.isMediaFeatureRangeValueNameValue(e)}function isMediaFeature(e){return MediaFeature.isMediaFeature(e)}function isMediaInParens(e){return MediaInParens.isMediaInParens(e)}function isMediaNot(e){return MediaNot.isMediaNot(e)}function isMediaOr(e){return MediaOr.isMediaOr(e)}function isMediaQuery(e){return isMediaQueryWithType(e)||isMediaQueryWithoutType(e)||isMediaQueryInvalid(e)}function isMediaQueryWithType(e){return MediaQueryWithType.isMediaQueryWithType(e)}function isMediaQueryWithoutType(e){return MediaQueryWithoutType.isMediaQueryWithoutType(e)}function isMediaQueryInvalid(e){return MediaQueryInvalid.isMediaQueryInvalid(e)}function cloneMediaQuery(e){const t=N(e.tokens()),i=parseFromTokens(t,{preserveInvalidMediaQueries:!0})[0];if(!i)throw new Error(`Failed to clone media query for : "${h(...t)}"`);if(isMediaQueryInvalid(e)&&isMediaQueryInvalid(i))return i;if(isMediaQueryWithType(e)&&isMediaQueryWithType(i))return i;if(isMediaQueryWithoutType(e)&&isMediaQueryWithoutType(i))return i;throw new Error(`Failed to clone media query for : "${h(...t)}"`)}var b;function typeFromToken(e){if(!f(e))return!1;switch(e[4].value.toLowerCase()){case b.All:return b.All;case b.Print:return b.Print;case b.Screen:return b.Screen;case b.Tty:return b.Tty;case b.Tv:return b.Tv;case b.Projection:return b.Projection;case b.Handheld:return b.Handheld;case b.Braille:return b.Braille;case b.Embossed:return b.Embossed;case b.Aural:return b.Aural;case b.Speech:return b.Speech;default:return!1}}!function(e){e.All="all",e.Print="print",e.Screen="screen",e.Tty="tty",e.Tv="tv",e.Projection="projection",e.Handheld="handheld",e.Braille="braille",e.Embossed="embossed",e.Aural="aural",e.Speech="speech"}(b||(b={}));export{CustomMedia,GeneralEnclosed,MediaAnd,MediaCondition,MediaConditionListWithAnd,MediaConditionListWithOr,MediaFeature,MediaFeatureBoolean,Q as MediaFeatureEQ,C as MediaFeatureGT,S as MediaFeatureLT,MediaFeatureName,MediaFeaturePlain,MediaFeatureRangeNameValue,MediaFeatureRangeValueName,MediaFeatureRangeValueNameValue,MediaFeatureValue,MediaInParens,MediaNot,MediaOr,MediaQueryInvalid,W as MediaQueryModifier,MediaQueryWithType,MediaQueryWithoutType,b as MediaType,O as NodeType,cloneMediaQuery,comparisonFromTokens,invertComparison,isCustomMedia,isGeneralEnclosed,isMediaAnd,isMediaCondition,isMediaConditionList,isMediaConditionListWithAnd,isMediaConditionListWithOr,isMediaFeature,isMediaFeatureBoolean,isMediaFeatureName,isMediaFeaturePlain,isMediaFeatureRange,isMediaFeatureRangeNameValue,isMediaFeatureRangeValueName,isMediaFeatureRangeValueNameValue,isMediaFeatureValue,isMediaInParens,isMediaNot,isMediaOr,isMediaQuery,isMediaQueryInvalid,isMediaQueryWithType,isMediaQueryWithoutType,matchesComparison,matchesRatio,matchesRatioExactly,modifierFromToken,newMediaFeatureBoolean,newMediaFeaturePlain,parse,parseCustomMedia,parseCustomMediaFromTokens,parseFromTokens,typeFromToken};
