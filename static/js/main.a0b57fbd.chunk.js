(window["webpackJsonpml-designerly"]=window["webpackJsonpml-designerly"]||[]).push([[0],{21:function(e,n,t){e.exports=t(31)},31:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(12),i=t.n(c),o=t(7),u=t(2),l=t(6),s=t(14),f=t(20),d=t(19),p=t(16),m=t.n(p),b=t(5);function g(){var e=Object(u.a)(["\n  display: flex;\n  width: 80%;\n  height: 400px;\n  margin: 100px auto 0 auto;\n  background: lightgray;\n  border: 4px dotted darkgray;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n"]);return g=function(){return e},e}var v=b.a.div(g()),j=function(e){var n=e.setImages,t=Object(r.useCallback)(function(e){e.forEach(function(e){var t=new FileReader;t.onload=function(e){n(function(n){return[].concat(Object(f.a)(n),[{id:m()(),src:e.target.result}])})},t.readAsDataURL(e)})},[n]),c=Object(d.a)({onDrop:t}),i=c.getRootProps,o=c.getInputProps,u=c.isDragActive;return a.a.createElement(v,i(),a.a.createElement("input",o()),u?a.a.createElement("p",null,"Drop the files here ..."):a.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files"))},h=t(9),w=t.n(h),y=t(18);function E(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n"]);return E=function(){return e},e}function x(){var e=Object(u.a)(["\n  width: 200px;\n  box-shadow: 0px 0px 13px -1px rgba(0, 0, 0, 0.4);\n  margin: 16px;\n  border-radius: 8px;\n"]);return x=function(){return e},e}var O=function(e,n){return e.predict(n,5,function(e,n){return e&&console.error("Unable to make a prediction."),n})},k=b.a.img(x()),S=b.a.div(E()),D=function(e){var n=e.classifier,t=e.id,c=e.src,i=Object(r.useRef)(),u=Object(r.useState)([]),l=Object(o.a)(u,2),s=l[0],f=l[1];return Object(r.useEffect)(function(){(function(){var e=Object(y.a)(w.a.mark(function e(){var t;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(n,i.current);case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[n]),a.a.createElement("div",null,a.a.createElement(k,{key:t,alt:"img - ".concat(t),src:c,ref:i}),s.map(function(e,n){var t=e.label,r=e.confidence,c=Math.floor(1e4*r)/100+"%";return a.a.createElement(S,{key:n},a.a.createElement("span",null,t),a.a.createElement("span",null,c))}))};function R(){var e=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: center;\n  list-style: none;\n"]);return R=function(){return e},e}var I=b.a.ul(R()),U=function(e){var n=e.data,t=e.classifier;return a.a.createElement(I,null,n.map(function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(D,{id:e.id,src:e.src,classifier:t}))}))};function B(){var e=Object(u.a)(["\n  * {\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  }\n"]);return B=function(){return e},e}var C=Object(l.c)(B()),F=function(e){return s.imageClassifier("MobileNet",function(){return e&&e()})};var M=function(){var e=Object(r.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],i=Object(r.useState)(!1),u=Object(o.a)(i,2),s=u[0],f=u[1],d=Object(r.useRef)();return Object(r.useEffect)(function(){d.current=F(function(){return f(!0)})},[]),a.a.createElement("div",null,a.a.createElement(l.a,{styles:C}),!s&&a.a.createElement("h1",null,"Loading ml5 model..."),s&&a.a.createElement(j,{setImages:c}),s&&a.a.createElement(U,{data:t,classifier:d.current}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.a0b57fbd.chunk.js.map