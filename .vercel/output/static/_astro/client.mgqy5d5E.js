import{_ as p}from"./preload-helper.hlDPvxQM.js";import{y as n,q as c,B as v}from"./preact.module.dOkjm3yY.js";const d=({value:t,name:e,hydrate:a=!0})=>t?n(a?"astro-slot":"astro-static-slot",{name:e,dangerouslySetInnerHTML:{__html:t}}):null;d.shouldComponentUpdate=()=>!1;var f=d;const i=new Map;var w=t=>async(e,a,{default:s,...g},{client:_})=>{if(!t.hasAttribute("ssr"))return;for(const[o,r]of Object.entries(g))a[o]=n(f,{value:r,name:o});if(t.dataset.preactSignals){const{signal:o}=await p(()=>import("./signals.module.h1iPSpVJ.js"),__vite__mapDeps([0,1,2]));let r=JSON.parse(t.dataset.preactSignals);for(const[u,l]of Object.entries(r)){if(!i.has(l)){const m=o(a[u]);i.set(l,m)}a[u]=i.get(l)}}(_!=="only"?v:c)(n(e,a,s!=null?n(f,{value:s}):s),t),t.addEventListener("astro:unmount",()=>c(null,t),{once:!0})};export{w as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/signals.module.h1iPSpVJ.js","_astro/preact.module.dOkjm3yY.js","_astro/hooks.module.dxZU798w.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
