(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1244:function(e,t,a){Promise.resolve().then(a.bind(a,3841))},8716:function(e,t,a){"use strict";a.d(t,{wS:function(){return p},hr:function(){return f},ZP:function(){return j}});var n=a(7437),s=a(6648),r=a(2265),c=a(1313),i=a.n(c),l=a(3079),o=a.n(l),d=a(6463),_=a(9441),h={src:"/_next/static/media/maximize.0403de10.svg"},m={src:"/_next/static/media/minimize.0451f7ca.svg"},u={src:"/_next/static/media/darkmode.307f9e7e.svg"},g={src:"/_next/static/media/lightmode.25af3caf.svg"},x=a(3627);let f=(0,_.cn)({key:"dark_theme",default:!1}),p=(0,_.cn)({key:"audio_window",default:!1});function j(){let e=(0,d.useRouter)(),[t,a]=(0,_.FV)(f),[c,l]=(0,r.useState)(!1),p="dark_theme";(0,r.useEffect)(()=>{JSON.parse(String(localStorage.getItem(p)))?a(!0):a(!1);let e=()=>{l(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",e),()=>{document.removeEventListener("fullscreenchange",e)}},[]);let j=()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen().catch(e=>{console.error("フルスクリーンモードに切り替えられませんでした: ".concat(e.message))})};function b(){e.push("/")}function v(){e.push("/todo")}function N(){e.push("/whatstudy")}function S(){e.push("/character")}function k(){a(e=>(e=!e,localStorage.setItem(p,String(e)),e))}return(0,x.y1)("1",()=>b()),(0,x.y1)("2",()=>v()),(0,x.y1)("3",()=>N()),(0,x.y1)("4",()=>S()),(0,x.y1)("5",()=>k()),(0,x.y1)("6",()=>j()),(0,n.jsx)("main",{children:(0,n.jsx)("div",{className:t?"".concat(i().dark_mode," ").concat(o().dark_mode):"",children:(0,n.jsxs)("header",{className:i().header,children:[(0,n.jsx)("div",{className:i()["header-left"],children:(0,n.jsx)("h1",{className:i().header_text,children:"タイマーテスト"})}),(0,n.jsxs)("div",{className:i()["header-right"],children:[(0,n.jsxs)("div",{className:i().header_btn_container,children:[(0,n.jsx)("div",{children:(0,n.jsx)("button",{onClick:b,className:o().header_btn,children:(0,n.jsx)("span",{className:i().label,children:"TOP"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{onClick:v,className:o().header_btn,children:(0,n.jsx)("span",{className:i().label,children:"TODO"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{onClick:S,className:o().header_btn,children:(0,n.jsx)("span",{className:i().label,children:"CHARACTER"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{onClick:N,className:o().header_btn,children:(0,n.jsx)("span",{className:i().label,children:"What study?"})})}),(0,n.jsxs)("button",{className:o().header_btn,onClick:k,children:[t?"":(0,n.jsx)("div",{className:i().icon_container,children:(0,n.jsx)(s.default,{src:g.src,width:20,height:20,alt:"",loading:"lazy",className:i().icon})}),(0,n.jsx)("span",{className:i().label,children:t?"Light Mode":"Dark Mode"}),t?(0,n.jsx)("div",{className:i().icon_container,children:(0,n.jsx)(s.default,{src:u.src,width:20,height:20,alt:"",loading:"lazy",className:i().icon})}):""]}),(0,n.jsx)("button",{className:o().header_btn,onClick:j,children:(0,n.jsx)("div",{children:c?(0,n.jsxs)("div",{className:i().icon_container,children:[(0,n.jsx)(s.default,{src:m.src,width:20,height:20,alt:"",loading:"lazy",className:i().icon}),(0,n.jsx)("div",{children:"minimize"})]}):(0,n.jsxs)("div",{className:i().icon_container,children:[(0,n.jsx)(s.default,{src:h.src,width:20,height:20,alt:"",loading:"lazy",className:i().icon}),"maxmize"]})})})]}),(0,n.jsx)("div",{className:i().overlay,children:(0,n.jsx)(s.default,{src:"/_next/static/media/landscape-screen.f8d7322a.gif",width:100,height:100,alt:"",loading:"lazy",className:i().landscape_screen,sizes:"100%",style:{width:"100%",height:"auto"}})})]})]})})})}},2621:function(e,t){"use strict";t.Z=function(e,t,a){return a?localStorage.getItem(e)?t=String(localStorage.getItem(e)):localStorage.setItem(e,String(t)):localStorage.setItem(e,t),[e,t,a]}},3841:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var n=a(7437),s=a(6648),r=a(2265),c=a(1076),i=a.n(c),l=a(3079),o=a.n(l),d=function(e){return(0,r.useMemo)(()=>{let t=e=>String(e).padStart(2,"0");return"".concat(t(Math.floor(e/3600)),":").concat(t(Math.floor(e%3600/60)),":").concat(t(e%60))},[e])},_=e=>{let{resttime_Num:t,isRest_Bool:a}=e,[s,c]=(0,r.useState)(0),i=d(s);return(0,r.useEffect)(()=>{a&&c(t)},[a,t]),(0,r.useEffect)(()=>{document.title=i},[s]),(0,r.useEffect)(()=>{let e=window.setInterval(()=>{a&&s>0&&c(e=>e-1)},1e3);return()=>clearInterval(e)},[a,s]),(0,n.jsx)("main",{children:(0,n.jsx)("div",{children:i})})},h=a(2264),m=a.n(h);function u(){let[e,t]=(0,r.useState)(0),[a,s]=(0,r.useState)(!1),c=d(e),[i,l]=(0,r.useState)(0),[o,_]=(0,r.useState)(""),h=["北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];function u(){a||t(e=>e+1)}return(0,r.useEffect)(()=>{t(Math.floor(1e4*Math.random()));let e=window.setInterval(u,1e3);_(h[Math.floor(Math.random()*h.length)]);let a=setTimeout(()=>{s(!0),console.log("休憩開始"),setTimeout(()=>{s(!1),console.log("休憩終了")},3e5)},6e4*(Math.floor(21*Math.random())+30));return()=>{clearInterval(e),clearTimeout(a)}},[]),(0,r.useEffect)(()=>{a||l(()=>e%100)},[e,a]),(0,n.jsx)("main",{children:(0,n.jsxs)("div",{className:"parent",children:[(0,n.jsx)("div",{className:"CPU",children:o}),(0,n.jsx)("div",{className:m().set_font_size,children:(0,n.jsxs)("div",{children:[a?"休憩中":c," "]})}),(0,n.jsx)("div",{className:m().progress_bar_wrapper,children:(0,n.jsx)("div",{className:m().progress_bar,children:(0,n.jsx)("div",{className:m().progress,style:{width:"".concat(i,"%")}})})})]})})}var g=a(8716),x=a(9441),f=a(3627),p=a(2621);function j(){var e;let[t,a]=(0,r.useState)(0),[c,l]=(0,r.useState)(0),[h,m]=(0,r.useState)(0),[j]=(0,x.FV)(g.hr),[b]=(0,x.FV)(g.wS),[v,N]=(0,r.useState)(""),[S,k]=(0,r.useState)(!1),[y]=(0,r.useState)(!1),[w]=(0,r.useState)(100),E="time",z="check-count",I="whatstudy",C=d(t),[M,T]=(0,r.useState)(null);function Z(){k(e=>!e)}return(0,r.useEffect)(()=>{(0,p.Z)(E,String(t),!0),(0,p.Z)(z,String(h),!0),(0,p.Z)("dark_theme",String(j),!0),(0,p.Z)(I,"",!0),(0,p.Z)("open_modal_window",String(b),!0),a(Number(localStorage.getItem(E))),N(String(localStorage.getItem(I)))},[]),(0,r.useEffect)(()=>{let e=localStorage.getItem("Selected_image");e&&T(e)},[]),(0,r.useEffect)(()=>{document.title=C},[t]),(0,r.useEffect)(()=>{let e=window.setInterval(()=>{S||a(e=>(e+=1,localStorage.setItem(E,String(e)),e))},1e3);return()=>clearInterval(e)},[S]),(0,f.y1)("space",()=>Z()),(0,r.useEffect)(()=>{l(e=>(e=t%600,599===h&&(m(e=>e+1),localStorage.setItem(z,String(h))),e))},[t]),(0,n.jsx)("main",{id:"app",children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:i().timer_container,children:[(0,n.jsx)("h1",{children:"タイマーテスト"}),(0,n.jsxs)("p",{children:["今勉強していること：",v]}),(0,n.jsxs)("p",{children:["check: ",String(h)," time: ",t]}),(0,n.jsxs)("div",{className:i().maincontent,children:[!S&&(0,n.jsx)("div",{children:C}),S&&(0,n.jsx)("div",{className:i().maincontent_rest,children:(0,n.jsx)(_,{resttime_Num:w,isRest_Bool:S})})]}),(0,n.jsx)("div",{style:{position:"relative"},children:(0,n.jsx)(s.default,{src:"/_next/static/media/running-stickman-transparency.806383fc.gif",width:1,height:1,alt:"stickman",loading:"lazy",className:i().running_stickman,sizes:"100vw",style:{width:"100%",height:"auto"}})}),(0,n.jsx)("div",{className:i().progress_bar,children:(0,n.jsx)("div",{className:i().progress,style:{width:"".concat(1/6*c,"%"),backgroundColor:(e=1/6*c,"hsl(".concat(e/100*360,", ",100,"%, ",50,"%)"))}})})]}),(0,n.jsxs)("div",{className:i().btn_main,children:[(0,n.jsx)("button",{className:"".concat(o().primary_btn," ").concat(y?"hover":""),onClick:Z,children:S?"REST":"studying"}),(0,n.jsx)("button",{className:o().secondary_btn,onClick:function(){localStorage.setItem(E,"0"),localStorage.setItem(z,"0"),a(0),l(0),m(0)},children:"ClearTime"})]}),M&&(0,n.jsx)("div",{className:i().selected_image,children:(0,n.jsx)(s.default,{src:M,alt:"Selected",width:200,height:200})}),(0,n.jsxs)("div",{className:i().bot_container,children:[(0,n.jsx)(u,{}),(0,n.jsx)(u,{}),(0,n.jsx)(u,{})]})]})})}},2264:function(e){e.exports={set_font_size:"bot_set_font_size__aBi8t",parent:"bot_parent__WoEHu",CPU:"bot_CPU__Y9Avm",progress_bar_wrapper:"bot_progress_bar_wrapper__vg9zB",progress_bar:"bot_progress_bar__XznkL",progress:"bot_progress__voaUP"}},1313:function(e){e.exports={header:"header_header__NFqH8","header-left":"header_header-left__C29fa","header-right":"header_header-right__W4fIZ",header_btn_container:"header_header_btn_container__wgK8p",header_text:"header_header_text__cKRAp",maximize_img:"header_maximize_img__Ssk6W",icon_container:"header_icon_container__4kaxl",icon:"header_icon__gqsiN",dark_mode:"header_dark_mode__tpyKo",overlay:"header_overlay__iTrXZ",landscape_screen:"header_landscape_screen__nbEdm",label:"header_label__r3yCc"}},3079:function(e){e.exports={primary_btn:"btn_primary_btn__TJQkT",secondary_btn:"btn_secondary_btn__Z8wYk",header_btn:"btn_header_btn__D7iYY",dark_mode:"btn_dark_mode__wPcZB"}},1076:function(e){e.exports={app:"page_app__YzTRe",timer_container:"page_timer_container__NkXzW",maincontent:"page_maincontent__YJUXS",maincontent_rest:"page_maincontent_rest__tlkA7",progress_bar:"page_progress_bar__xXLDp",progress:"page_progress__GNJr0",btn_main:"page_btn_main__m9wmR",running_stickman:"page_running_stickman__a_sIM",bot_container:"page_bot_container__kL62O",dark_mode:"page_dark_mode__pepkd","clear-button":"page_clear-button__Sjhje",selected_image:"page_selected_image__LuVxN"}}},function(e){e.O(0,[263,882,691,638,971,23,744],function(){return e(e.s=1244)}),_N_E=e.O()}]);