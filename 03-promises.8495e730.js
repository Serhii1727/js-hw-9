!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("6JpON"),u={form:document.querySelector(".form"),button:document.querySelector("button")},a=function(){return{delay:u.form.elements.delay.value,step:u.form.elements.step.value,amount:u.form.elements.amount.value}};function l(e,n){var t=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){t?o({position:e,delayTime:n}):i({position:e,delayTime:n})}),n)}))}u.form.addEventListener("input",a),u.form.addEventListener("submit",(function(n){n.preventDefault();for(var t=a(),o=t.delay,i=t.step,u=t.amount,f=Number(o),d=1;d<=u;d+=1)position=d,l(position,f).then((function(n){var t=n.position,o=n.delayTime;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delayTime;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),f+=Number(i)}))}();
//# sourceMappingURL=03-promises.8495e730.js.map
