(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[638],{6648:function(e,t,n){"use strict";n.d(t,{default:function(){return i.a}});var r=n(5601),i=n.n(r)},6463:function(e,t,n){"use strict";var r=n(1169);n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},8173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let r=n(9920),i=n(1452),o=n(7437),u=i._(n(2265)),l=r._(n(4887)),a=r._(n(8321)),s=n(497),c=n(7103),d=n(3938);n(2301);let f=n(291),p=r._(n(1241)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,n,r,i,o,u){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function g(e){return u.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v=(0,u.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:l,width:a,decoding:s,className:c,style:d,fetchPriority:f,placeholder:p,loading:m,unoptimized:v,fill:y,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:_,setShowAltText:C,sizesInput:S,onLoad:j,onError:k,...x}=e;return(0,o.jsx)("img",{...x,...g(f),loading:m,width:a,height:l,decoding:s,"data-nimg":y?"fill":"1",className:c,style:d,sizes:i,srcSet:r,src:n,ref:(0,u.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&h(e,p,b,w,_,v,S))},[n,p,b,w,_,k,v,S,t]),onLoad:e=>{h(e.currentTarget,p,b,w,_,v,S)},onError:e=>{C(!0),"empty"!==p&&_(!0),k&&k(e)}})});function y(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...g(n.fetchPriority)};return t&&l.default.preload?(l.default.preload(n.src,r),null):(0,o.jsx)(a.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let b=(0,u.forwardRef)((e,t)=>{let n=(0,u.useContext)(f.RouterContext),r=(0,u.useContext)(d.ImageConfigContext),i=(0,u.useMemo)(()=>{let e=m||r||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:l,onLoadingComplete:a}=e,h=(0,u.useRef)(l);(0,u.useEffect)(()=>{h.current=l},[l]);let g=(0,u.useRef)(a);(0,u.useEffect)(()=>{g.current=a},[a]);let[b,w]=(0,u.useState)(!1),[_,C]=(0,u.useState)(!1),{props:S,meta:j}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:b,showAltText:_});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...S,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:w,setShowAltText:C,sizesInput:e.sizes,ref:t}),j.priority?(0,o.jsx)(y,{isAppRouter:!n,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2901:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(9920)._(n(2265)).default.createContext({})},687:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},497:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),n(2301);let r=n(1564),i=n(7103);function o(e){return void 0!==e.default}function u(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var n;let l,a,s,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:m,className:h,quality:g,width:v,height:y,fill:b=!1,style:w,overrideSrc:_,onLoad:C,onLoadingComplete:S,placeholder:j="empty",blurDataURL:k,fetchPriority:x,layout:E,objectFit:O,objectPosition:P,lazyBoundary:L,lazyRoot:A,...M}=e,{imgConf:R,showAltText:z,blurComplete:I,defaultLoader:T}=t,D=R||i.imageConfigDefault;if("allSizes"in D)l=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);l={...D,allSizes:e,deviceSizes:t}}if(void 0===T)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let N=M.loader||T;delete M.loader,delete M.srcSet;let K="__next_img_default"in N;if(K){if("custom"===l.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=N;N=t=>{let{config:n,...r}=t;return e(r)}}if(E){"fill"===E&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!d&&(d=t)}let U="",F=u(v),G=u(y);if("object"==typeof(n=c)&&(o(n)||void 0!==n.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,s=e.blurHeight,k=k||e.blurDataURL,U=e.src,!b){if(F||G){if(F&&!G){let t=F/e.width;G=Math.round(e.height*t)}else if(!F&&G){let t=G/e.height;F=Math.round(e.width*t)}}else F=e.width,G=e.height}}let B=!p&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:U)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,B=!1),l.unoptimized&&(f=!0),K&&c.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),p&&(x="high");let W=u(g),H=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:P}:{},z?{}:{color:"transparent"},w),V=I||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:F,heightInt:G,blurWidth:a,blurHeight:s,blurDataURL:k||"",objectFit:H.objectFit})+'")':'url("'+j+'")',q=V?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},$=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:u,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:a,kind:s}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,u),c=a.length-1;return{sizes:u||"w"!==s?u:"100vw",srcSet:a.map((e,r)=>l({config:t,src:n,quality:o,width:e})+" "+("w"===s?e:r+1)+s).join(", "),src:l({config:t,src:n,quality:o,width:a[c]})}}({config:l,src:c,unoptimized:f,width:F,quality:W,sizes:d,loader:N});return{props:{...M,loading:B?"lazy":m,fetchPriority:x,width:F,height:G,decoding:"async",className:h,style:{...H,...q},sizes:$.sizes,srcSet:$.srcSet,src:_||$.src},meta:{unoptimized:f,priority:p,placeholder:j,fill:b}}}},8321:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return h},defaultHead:function(){return d}});let r=n(9920),i=n(1452),o=n(7437),u=i._(n(2265)),l=r._(n(5960)),a=n(2901),s=n(6590),c=n(687);function d(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(2301);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(d(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,u=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){u=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!u)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,u.default.cloneElement(e,t)}return u.default.cloneElement(e,{key:r})})}let h=function(e){let{children:t}=e,n=(0,u.useContext)(a.AmpStateContext),r=(0,u.useContext)(s.HeadManagerContext);return(0,o.jsx)(l.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,c.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1564:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:u}=e,l=r?40*r:t,a=i?40*i:n,s=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===u?"xMidYMid":"cover"===u?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},3938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=n(9920)._(n(2265)),i=n(7103),o=r.default.createContext(i.imageConfigDefault)},7103:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return a},getImageProps:function(){return l}});let r=n(9920),i=n(497),o=n(8173),u=r._(n(1241));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let a=o.Image},1241:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});let r=n(9920)._(n(2265)).default.createContext(null)},5960:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(2265),i="undefined"==typeof window,o=i?()=>{}:r.useLayoutEffect,u=i?()=>{}:r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var a;null==t||null==(a=t.mountedInstances)||a.add(e.children),l()}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),u(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},3627:function(e,t,n){"use strict";n.d(t,{y1:function(){return w}});var r=n(2265);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}n(7437);var o=["shift","alt","meta","mod","ctrl"],u={esc:"escape",return:"enter",".":"period",",":"comma","-":"slash"," ":"space","`":"backquote","#":"backslash","+":"bracketright",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta",OSLeft:"meta",OSRight:"meta",ControlLeft:"ctrl",ControlRight:"ctrl"};function l(e){return(e&&u[e]||e||"").trim().toLowerCase().replace(/key|digit|numpad|arrow/,"")}function a(e,t){return void 0===t&&(t=","),e.split(t)}function s(e,t,n){void 0===t&&(t="+");var r=e.toLocaleLowerCase().split(t).map(function(e){return l(e)}),u={alt:r.includes("alt"),ctrl:r.includes("ctrl")||r.includes("control"),shift:r.includes("shift"),meta:r.includes("meta"),mod:r.includes("mod")},a=r.filter(function(e){return!o.includes(e)});return i({},u,{keys:a,description:n})}"undefined"!=typeof document&&(document.addEventListener("keydown",function(e){void 0!==e.key&&f([l(e.key),l(e.code)])}),document.addEventListener("keyup",function(e){void 0!==e.key&&p([l(e.key),l(e.code)])})),"undefined"!=typeof window&&window.addEventListener("blur",function(){c.clear()});var c=new Set;function d(e){return Array.isArray(e)}function f(e){var t=Array.isArray(e)?e:[e];c.has("meta")&&c.forEach(function(e){return!o.includes(e)&&c.delete(e.toLowerCase())}),t.forEach(function(e){return c.add(e.toLowerCase())})}function p(e){var t=Array.isArray(e)?e:[e];"meta"===e?c.clear():t.forEach(function(e){return c.delete(e.toLowerCase())})}function m(e,t){var n=e.target;void 0===t&&(t=!1);var r=n&&n.tagName;return d(t)?!!(r&&t&&t.some(function(e){return e.toLowerCase()===r.toLowerCase()})):!!(r&&t&&!0===t)}var h=function(e,t,n){void 0===n&&(n=!1);var r,i=t.alt,o=t.meta,u=t.mod,a=t.shift,s=t.ctrl,f=t.keys,p=e.key,m=e.code,h=e.ctrlKey,g=e.metaKey,v=e.shiftKey,y=e.altKey,b=l(m),w=p.toLowerCase();if(!(null!=f&&f.includes(b))&&!(null!=f&&f.includes(w))&&!["ctrl","control","unknown","meta","alt","shift","os"].includes(b))return!1;if(!n){if(!y===i&&"alt"!==w||!v===a&&"shift"!==w)return!1;if(u){if(!g&&!h)return!1}else if(!g===o&&"meta"!==w&&"os"!==w||!h===s&&"ctrl"!==w&&"control"!==w)return!1}return!!(f&&1===f.length&&(f.includes(w)||f.includes(b)))||(f?(void 0===r&&(r=","),(d(f)?f:f.split(r)).every(function(e){return c.has(e.trim().toLowerCase())})):!f)},g=(0,r.createContext)(void 0),v=(0,r.createContext)({hotkeys:[],enabledScopes:[],toggleScope:function(){},enableScope:function(){},disableScope:function(){}}),y=function(e){e.stopPropagation(),e.preventDefault(),e.stopImmediatePropagation()},b="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function w(e,t,n,i){var o,u=(0,r.useState)(null),c=u[0],w=u[1],_=(0,r.useRef)(!1),C=n instanceof Array?i instanceof Array?void 0:i:n,S=d(e)?e.join(null==C?void 0:C.splitKey):e,j=n instanceof Array?n:i instanceof Array?i:void 0,k=(0,r.useCallback)(t,null!=j?j:[]),x=(0,r.useRef)(k);j?x.current=k:x.current=t;var E=(!function e(t,n){return t&&n&&"object"==typeof t&&"object"==typeof n?Object.keys(t).length===Object.keys(n).length&&Object.keys(t).reduce(function(r,i){return r&&e(t[i],n[i])},!0):t===n}((o=(0,r.useRef)(void 0)).current,C)&&(o.current=C),o.current),O=(0,r.useContext)(v).enabledScopes,P=(0,r.useContext)(g);return b(function(){if((null==E?void 0:E.enabled)!==!1&&(e=null==E?void 0:E.scopes,0===O.length&&e?(console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'),!0):!!(!e||O.some(function(t){return e.includes(t)})||O.includes("*")))){var e,t=function(e,t){var n;if(void 0===t&&(t=!1),!m(e,["input","textarea","select"])||m(e,null==E?void 0:E.enableOnFormTags)){if(null!==c){var r=c.getRootNode();if((r instanceof Document||r instanceof ShadowRoot)&&r.activeElement!==c&&!c.contains(r.activeElement)){y(e);return}}(null==(n=e.target)||!n.isContentEditable||null!=E&&E.enableOnContentEditable)&&a(S,null==E?void 0:E.splitKey).forEach(function(n){var r,i,o,u=s(n,null==E?void 0:E.combinationKey);if(h(e,u,null==E?void 0:E.ignoreModifiers)||null!=(o=u.keys)&&o.includes("*")){if(null!=E&&null!=E.ignoreEventWhen&&E.ignoreEventWhen(e)||t&&_.current)return;if(("function"==typeof(r=null==E?void 0:E.preventDefault)&&r(e,u)||!0===r)&&e.preventDefault(),"function"==typeof(i=null==E?void 0:E.enabled)?!i(e,u):!0!==i&&void 0!==i){y(e);return}x.current(e,u),t||(_.current=!0)}})}},n=function(e){void 0!==e.key&&(f(l(e.code)),((null==E?void 0:E.keydown)===void 0&&(null==E?void 0:E.keyup)!==!0||null!=E&&E.keydown)&&t(e))},r=function(e){void 0!==e.key&&(p(l(e.code)),_.current=!1,null!=E&&E.keyup&&t(e,!0))},i=c||(null==C?void 0:C.document)||document;return i.addEventListener("keyup",r),i.addEventListener("keydown",n),P&&a(S,null==E?void 0:E.splitKey).forEach(function(e){return P.addHotkey(s(e,null==E?void 0:E.combinationKey,null==E?void 0:E.description))}),function(){i.removeEventListener("keyup",r),i.removeEventListener("keydown",n),P&&a(S,null==E?void 0:E.splitKey).forEach(function(e){return P.removeHotkey(s(e,null==E?void 0:E.combinationKey,null==E?void 0:E.description))})}}},[c,S,E,O]),w}},5566:function(e){var t,n,r,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var a=[],s=!1,c=-1;function d(){s&&r&&(s=!1,r.length?a=r.concat(a):c=-1,a.length&&f())}function f(){if(!s){var e=l(d);s=!0;for(var t=a.length;t;){for(r=a,a=[];++c<t;)r&&r[c].run();c=-1,t=a.length}r=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new p(e,t)),1!==a.length||s||l(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}}]);