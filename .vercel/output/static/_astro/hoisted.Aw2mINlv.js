import"./hoisted.l-JsOPk0.js";const d=document.querySelectorAll(".counter"),i=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(f(),i.disconnect())})},{rootMargin:"10px"});i.observe(document.getElementById("metrics"));function f(){d.forEach(t=>{const e=parseFloat(t.textContent??"0"),a=t.textContent?.split(".")[1]?.length??0;let n=0;const u=1800,o=0;function r(s){n||(n=s);const l=s-n,c=Math.min(l/u,1),m=(o+c*(e-o)).toFixed(a);t.innerText=m,c<1&&requestAnimationFrame(r)}requestAnimationFrame(r)})}