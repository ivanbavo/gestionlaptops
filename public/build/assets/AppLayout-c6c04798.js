import{o as s,e as r,a as e,d as C,k as x,K as T,s as N,u as a,n as g,f as c,t as y,i as $,x as P,y as D,r as f,m as j,l as L,z as B,b as u,w as i,A as O,c as v,j as S,Z as E,g as p,F as w,h as z,O as A}from"./app-526b2a0b.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const I={},R={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},H=e("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),K=e("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1),U=[H,K];function Z(l,n){return s(),r("svg",R,U)}const q=V(I,[["render",Z]]),G={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},J={class:"flex items-center justify-between flex-wrap"},Q={class:"w-0 flex-1 flex items-center min-w-0"},W={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},X=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Y=[X],ee={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},te=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),se=[te],oe={class:"ml-3 font-medium text-sm text-white truncate"},re={class:"shrink-0 sm:ml-3"},ne=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),ae=[ne],ie={__name:"Banner",setup(l){const n=C(!0),o=x(()=>{var t;return((t=T().props.jetstream.flash)==null?void 0:t.bannerStyle)||"success"}),h=x(()=>{var t;return((t=T().props.jetstream.flash)==null?void 0:t.banner)||""});return N(h,async()=>{n.value=!0}),(t,_)=>(s(),r("div",null,[n.value&&a(h)?(s(),r("div",{key:0,class:g({"bg-indigo-500":a(o)=="success","bg-red-700":a(o)=="danger"})},[e("div",G,[e("div",J,[e("div",Q,[e("span",{class:g(["flex p-2 rounded-lg",{"bg-indigo-600":a(o)=="success","bg-red-600":a(o)=="danger"}])},[a(o)=="success"?(s(),r("svg",W,Y)):c("",!0),a(o)=="danger"?(s(),r("svg",ee,se)):c("",!0)],2),e("p",oe,y(a(h)),1)]),e("div",re,[e("button",{type:"button",class:g(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":a(o)=="success","hover:bg-red-600 focus:bg-red-600":a(o)=="danger"}]),"aria-label":"Dismiss",onClick:_[0]||(_[0]=$(d=>n.value=!1,["prevent"]))},ae,2)])])])],2)):c("",!0)]))}},le={class:"relative"},F={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(l){const n=l;let o=C(!1);const h=d=>{o.value&&d.key==="Escape"&&(o.value=!1)};P(()=>document.addEventListener("keydown",h)),D(()=>document.removeEventListener("keydown",h));const t=x(()=>({48:"w-48"})[n.width.toString()]),_=x(()=>n.align==="left"?"origin-top-left left-0":n.align==="right"?"origin-top-right right-0":"origin-top");return(d,m)=>(s(),r("div",le,[e("div",{onClick:m[0]||(m[0]=M=>j(o)?o.value=!a(o):o=!a(o))},[f(d.$slots,"trigger")]),L(e("div",{class:"fixed inset-0 z-40",onClick:m[1]||(m[1]=M=>j(o)?o.value=!1:o=!1)},null,512),[[B,a(o)]]),u(O,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:i(()=>[L(e("div",{class:g(["absolute z-50 mt-2 rounded-md shadow-lg",[a(t),a(_)]]),style:{display:"none"},onClick:m[2]||(m[2]=M=>j(o)?o.value=!1:o=!1)},[e("div",{class:g(["rounded-md ring-1 ring-black ring-opacity-5",l.contentClasses])},[f(d.$slots,"content")],2)],2),[[B,a(o)]])]),_:3})]))}},de={key:0,type:"submit",class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},ue=["href"],k={__name:"DropdownLink",props:{href:String,as:String},setup(l){return(n,o)=>(s(),r("div",null,[l.as=="button"?(s(),r("button",de,[f(n.$slots,"default")])):l.as=="a"?(s(),r("a",{key:1,href:l.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},[f(n.$slots,"default")],8,ue)):(s(),v(a(S),{key:2,href:l.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:i(()=>[f(n.$slots,"default")]),_:3},8,["href"]))]))}},ce={__name:"NavLink",props:{href:String,active:Boolean},setup(l){const n=l,o=x(()=>n.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(h,t)=>(s(),v(a(S),{href:l.href,class:g(a(o))},{default:i(()=>[f(h.$slots,"default")]),_:3},8,["href","class"]))}},b={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(l){const n=l,o=x(()=>n.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-left text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(h,t)=>(s(),r("div",null,[l.as=="button"?(s(),r("button",{key:0,class:g([a(o),"w-full text-left"])},[f(h.$slots,"default")],2)):(s(),v(a(S),{key:1,href:l.href,class:g(a(o))},{default:i(()=>[f(h.$slots,"default")]),_:3},8,["href","class"]))]))}},he={class:"min-h-screen bg-gray-100"},pe={class:"bg-white border-b border-gray-100"},ge={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},fe={class:"flex justify-between h-16"},me={class:"flex"},ve={class:"shrink-0 flex items-center"},_e={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},be={class:"hidden sm:flex sm:items-center sm:ml-6"},ye={class:"ml-3 relative"},we={class:"inline-flex rounded-md"},ke={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},xe=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),$e={class:"w-60"},Se=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),je=e("div",{class:"border-t border-gray-200"},null,-1),Ce=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Me=["onSubmit"],Te={class:"flex items-center"},Le={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Be=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ze=[Be],Ae={class:"ml-3 relative"},Fe={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Ne=["src","alt"],Pe={key:1,class:"inline-flex rounded-md"},De={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},Oe=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1),Ee=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Ve=e("div",{class:"border-t border-gray-200"},null,-1),Ie=["onSubmit"],Re={class:"-mr-2 flex items-center sm:hidden"},He={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Ke={class:"pt-2 pb-3 space-y-1"},Ue={class:"pt-4 pb-1 border-t border-gray-200"},Ze={class:"flex items-center px-4"},qe={key:0,class:"shrink-0 mr-3"},Ge=["src","alt"],Je={class:"font-medium text-base text-gray-800"},Qe={class:"font-medium text-sm text-gray-500"},We={class:"mt-3 space-y-1"},Xe=["onSubmit"],Ye=e("div",{class:"border-t border-gray-200"},null,-1),et=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),tt=e("div",{class:"border-t border-gray-200"},null,-1),st=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),ot=["onSubmit"],rt={class:"flex items-center"},nt={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},at=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),it=[at],lt={key:0,class:"bg-white shadow"},dt={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ht={__name:"AppLayout",props:{title:String},setup(l){const n=C(!1),o=t=>{A.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},h=()=>{A.post(route("logout"))};return(t,_)=>(s(),r("div",null,[u(a(E),{title:l.title},null,8,["title"]),u(ie),e("div",he,[e("nav",pe,[e("div",ge,[e("div",fe,[e("div",me,[e("div",ve,[u(a(S),{href:t.route("dashboard")},{default:i(()=>[u(q,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",_e,[u(ce,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:i(()=>[p(" Dashboard ")]),_:1},8,["href","active"])])]),e("div",be,[e("div",ye,[t.$page.props.jetstream.hasTeamFeatures?(s(),v(F,{key:0,align:"right",width:"60"},{trigger:i(()=>[e("span",we,[e("button",ke,[p(y(t.$page.props.auth.user.current_team.name)+" ",1),xe])])]),content:i(()=>[e("div",$e,[t.$page.props.jetstream.hasTeamFeatures?(s(),r(w,{key:0},[Se,u(k,{href:t.route("teams.show",t.$page.props.auth.user.current_team)},{default:i(()=>[p(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(s(),v(k,{key:0,href:t.route("teams.create")},{default:i(()=>[p(" Create New Team ")]),_:1},8,["href"])):c("",!0),t.$page.props.auth.user.all_teams.length>1?(s(),r(w,{key:1},[je,Ce,(s(!0),r(w,null,z(t.$page.props.auth.user.all_teams,d=>(s(),r("form",{key:d.id,onSubmit:$(m=>o(d),["prevent"])},[u(k,{as:"button"},{default:i(()=>[e("div",Te,[d.id==t.$page.props.auth.user.current_team_id?(s(),r("svg",Le,ze)):c("",!0),e("div",null,y(d.name),1)])]),_:2},1024)],40,Me))),128))],64)):c("",!0)],64)):c("",!0)])]),_:1})):c("",!0)]),e("div",Ae,[u(F,{align:"right",width:"48"},{trigger:i(()=>[t.$page.props.jetstream.managesProfilePhotos?(s(),r("button",Fe,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,Ne)])):(s(),r("span",Pe,[e("button",De,[p(y(t.$page.props.auth.user.name)+" ",1),Oe])]))]),content:i(()=>[Ee,u(k,{href:t.route("profile.show")},{default:i(()=>[p(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(s(),v(k,{key:0,href:t.route("api-tokens.index")},{default:i(()=>[p(" API Tokens ")]),_:1},8,["href"])):c("",!0),Ve,e("form",{onSubmit:$(h,["prevent"])},[u(k,{as:"button"},{default:i(()=>[p(" Log Out ")]),_:1})],40,Ie)]),_:1})])]),e("div",Re,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",onClick:_[0]||(_[0]=d=>n.value=!n.value)},[(s(),r("svg",He,[e("path",{class:g({hidden:n.value,"inline-flex":!n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:g({hidden:!n.value,"inline-flex":n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:g([{block:n.value,hidden:!n.value},"sm:hidden"])},[e("div",Ke,[u(b,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:i(()=>[p(" Dashboard ")]),_:1},8,["href","active"])]),e("div",Ue,[e("div",Ze,[t.$page.props.jetstream.managesProfilePhotos?(s(),r("div",qe,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,Ge)])):c("",!0),e("div",null,[e("div",Je,y(t.$page.props.auth.user.name),1),e("div",Qe,y(t.$page.props.auth.user.email),1)])]),e("div",We,[u(b,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:i(()=>[p(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(s(),v(b,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:i(()=>[p(" API Tokens ")]),_:1},8,["href","active"])):c("",!0),e("form",{method:"POST",onSubmit:$(h,["prevent"])},[u(b,{as:"button"},{default:i(()=>[p(" Log Out ")]),_:1})],40,Xe),t.$page.props.jetstream.hasTeamFeatures?(s(),r(w,{key:1},[Ye,et,u(b,{href:t.route("teams.show",t.$page.props.auth.user.current_team),active:t.route().current("teams.show")},{default:i(()=>[p(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(s(),v(b,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:i(()=>[p(" Create New Team ")]),_:1},8,["href","active"])):c("",!0),t.$page.props.auth.user.all_teams.length>1?(s(),r(w,{key:1},[tt,st,(s(!0),r(w,null,z(t.$page.props.auth.user.all_teams,d=>(s(),r("form",{key:d.id,onSubmit:$(m=>o(d),["prevent"])},[u(b,{as:"button"},{default:i(()=>[e("div",rt,[d.id==t.$page.props.auth.user.current_team_id?(s(),r("svg",nt,it)):c("",!0),e("div",null,y(d.name),1)])]),_:2},1024)],40,ot))),128))],64)):c("",!0)],64)):c("",!0)])])],2)]),t.$slots.header?(s(),r("header",lt,[e("div",dt,[f(t.$slots,"header")])])):c("",!0),e("main",null,[f(t.$slots,"default")])])]))}};export{ht as _};
