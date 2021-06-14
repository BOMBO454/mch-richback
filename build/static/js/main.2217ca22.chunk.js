(this["webpackJsonpmch-richback"]=this["webpackJsonpmch-richback"]||[]).push([[0],{48:function(e,n,t){},72:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),a=t(16),o=t.n(a),i=(t(48),t(43)),s=t(3),d=t(17),l=t(18);function u(e){return e?(+e).toLocaleString("en-US",{minimumFractionDigits:+e%1===0?0:2,maximumFractionDigits:2}).replace(/,/g," "):"0"}var j=t(36),b=t.n(j).a.create({baseURL:"http://84.201.168.52/api/v1",headers:{"Content-Type":"application/json"}}),h=t(1);var p,f,x=function(e){var n=e.places,t=Object(r.useRef)();return Object(r.useEffect)((function(){(function(e){var n=e.lat,t=e.lng,r=e.radius;return new Promise((function(e,c){b({url:"heatmap",method:"POST",data:{lat:n,lng:t,radius:r}}).then((function(n){return e(n.data)})).catch((function(e){return c(e)}))}))})({lat:55.731061,lng:37.579445,radius:.005}).then((function(e){console.log("data",e),console.log("window.ymaps",window.ymaps),window.ymaps.modules.require(["Heatmap"],(function(n){console.log("Heatmap",n),new n(e.heatmap.map((function(e){return[e.lng,e.lat]}))).setMap(t.current)}))})).catch((function(e){alert(e),console.log("err",e)}))}),[]),Object(h.jsx)(l.c,{modules:["Heatmap"],query:{apikey:"3a938c7f-953d-484c-9fee-5d2b9c12bb53"},children:Object(h.jsx)(l.a,{instanceRef:t,style:{flexGrow:1},width:"100%",height:"100%",defaultState:{center:[55.75,37.57],zoom:9,modules:["geoObject.addon.balloon","geoObject.addon.hint"]},children:n&&n.map((function(e){return Object(h.jsx)(l.b,{geometry:[e.lat,e.lng],properties:{iconContent:e.usertime,iconCaption:u(e.cost),hintContent:"3",balloonContentHeader:"\u0421\u043d\u044f\u0442\u044c \u0432 \u0430\u0440\u0435\u043d\u0434\u0443 ".concat(e.area,"\u043c^2 \u0437\u0430 ").concat(u(e.cost)),balloonContentBody:"\u042d\u0442\u0430\u0436 ".concat(e.floor)},modules:["geoObject.addon.balloon","geoObject.addon.hint"],options:{preset:"islands#circleIcon",iconImageSize:[30,30]}})}))})})},O=t(5),m=t(2),g=t(37),v=t(38),w=t(39),y=t(23),C=(t(67),p=function(){function e(){Object(v.a)(this,e),Object(g.a)(this,"address",f,this),Object(m.m)(this)}return Object(w.a)(e,[{key:"setAddress",value:function(e){this.address=e}}]),e}(),f=Object(y.a)(p.prototype,"address",[m.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"\u041c\u0435\u0442\u0440\u043e \u041f\u0430\u0440\u043a \u041a\u0443\u043b\u044c\u0442\u0443\u0440\u044b"}}),Object(y.a)(p.prototype,"setAddress",[m.f],Object.getOwnPropertyDescriptor(p.prototype,"setAddress"),p.prototype),p);function S(){return{mapStore:new C}}Object(m.g)({useProxies:"never"});var k=c.a.createContext(null),P=function(e){var n=e.children,t=Object(O.d)(S);return Object(h.jsx)(k.Provider,{value:t,children:n})},z=function(){var e=c.a.useContext(k);if(!e)throw new Error("useStore must be used within a StoreProvider.");return e},A=t(22);var E,H,D,I,R=Object(A.a)((function(){var e=Object(r.useState)([]),n=Object(d.a)(e,2),t=n[0],c=n[1],a=z().mapStore;return Object(r.useEffect)((function(){a.address&&function(e){var n=e.address;return new Promise((function(e,t){b({url:"places",method:"POST",data:{type:"\u043a\u0430\u0444\u0435",address:n,topk:10}}).then((function(n){return e(n.data)})).catch((function(e){return t(e)}))}))}({address:a.address}).then((function(e){console.log("data",e),c(e.places)})).catch((function(e){alert(e),console.log("err",e)}))}),[a.address]),Object(h.jsx)(x,{places:t})})),T=t(10),q=t(11),B=q.a.main(E||(E=Object(T.a)(["\n  display: flex;\n  flex-grow: 1;\n  height: 100%;\n"]))),F=q.a.div(H||(H=Object(T.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]))),J="0 16px 36px rgba(0,0,0,0.25)",L="#828282",M=q.a.header(D||(D=Object(T.a)(["\n  flex: 0 0 60px;\n  align-items: center;\n  padding: 0 40px;\n  box-shadow: ",";\n  z-index: 1;\n  display: flex;\n"])),J),U=q.a.button(I||(I=Object(T.a)(["\n  height: 45px;\n  padding: 0 20px;\n  border: 1px solid ",";\n  border-radius: ",";\n  background-color: ",";\n  cursor: pointer;\n  transition: ",";\n  &:hover{\n    box-shadow: ",";\n  }\n"])),L,"8px","#ffffff","0.15s ease-out",J);function G(e){var n=e.children,t=e.onClick;return Object(h.jsx)(U,{onClick:t,children:n})}function K(e){var n=e.value,t=e.onChange;return Object(h.jsx)("label",{children:Object(h.jsx)("input",{value:n,onChange:t})})}var N,Q=function(){var e=z().mapStore,n=Object(r.useState)(e.address),t=Object(d.a)(n,2),c=t[0],a=t[1];return Object(h.jsxs)(M,{children:[Object(h.jsx)(G,{children:"\u0424\u0438\u043b\u044c\u0442\u0440"}),Object(h.jsx)(K,{value:c,onChange:function(e){a(e.target.value)}}),Object(h.jsx)(G,{onClick:function(){e.setAddress(c)},children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"})]})},V=q.a.div(N||(N=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px 10px;\n  width: 200px;\n  border-right: 1px solid ",";\n"])),L);function W(){return Object(h.jsxs)(V,{children:[Object(h.jsx)(G,{children:"\u041a\u0430\u0440\u0442\u0430"}),Object(h.jsx)(G,{children:"\u0410\u043d\u0430\u043b\u0438\u0437 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),Object(h.jsx)(G,{children:"\u041e\u0442\u0447\u0451\u0442"})]})}function X(e){var n=e.children;return Object(h.jsxs)(F,{children:[Object(h.jsx)(Q,{}),Object(h.jsxs)(B,{children:[Object(h.jsx)(W,{}),n]})]})}var Y=function(){return Object(h.jsx)(i.a,{children:Object(h.jsx)(P,{children:Object(h.jsx)(X,{children:Object(h.jsx)(s.c,{children:Object(h.jsx)(s.a,{exact:!0,path:"/",children:Object(h.jsx)(R,{})})})})})})};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(Y,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.2217ca22.chunk.js.map