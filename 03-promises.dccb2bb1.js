function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var l=r("7Y9D8");const i={form:document.querySelector(".form"),button:document.querySelector("button")};let s=null,u=0;const a=()=>({delay:i.form.elements.delay.value,step:i.form.elements.step.value,amount:i.form.elements.amount.value});i.form.addEventListener("input",a),i.form.addEventListener("submit",(t=>{t.preventDefault();const{delay:n,step:o,amount:r}=a();s=setInterval((()=>{u+=1;let t=1;(function(e,t){const n=Math.random()>.3,o=new Promise(((o,r)=>{n?o({position:e,delay:t}):r({position:e,delay:t})}));return console.log(o),o})(r,n).then((({position:t,delay:n})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),t+=1,u!==Number(r)||clearInterval(s)}),o)}));
//# sourceMappingURL=03-promises.dccb2bb1.js.map
