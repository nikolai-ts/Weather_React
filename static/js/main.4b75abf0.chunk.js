(this.webpackJsonpweather_react=this.webpackJsonpweather_react||[]).push([[0],{20:function(e,t,a){e.exports=a(31)},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(17),o=a.n(l),r=(a(25),a(6)),i=a(8),s=a(1);function u(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)({temp:null,description:null}),i=Object(r.a)(o,2),s=i[0],u=s.temp,m=s.description,f=i[1];return Object(n.useEffect)((function(){fetch("http://ip-api.com/json/?lang=ru&fields=status,lat,lon,city").then((function(e){return e.json()})).then((function(e){console.log(e),"success"===e.status&&(l(e.city),fetch("http://api.openweathermap.org/data/2.5/weather?lat=".concat(e.lat,"&lon=").concat(e.lon,"&appid=").concat("c47a67513f793be01fd78b932ab39567","&units=metric&lang=ru")).then((function(e){return e.json()})).then((function(e){e.main&&(e.main.temp,f({temp:"+".concat(e.main.temp),description:e.weather[0].description}))})))}))}),[]),c.a.createElement("div",{id:"weather"},a&&u?c.a.createElement("div",null,c.a.createElement("p",{id:"weather__title"},"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u043f\u043e\u0433\u043e\u0434\u0430"),c.a.createElement("p",null,a,c.a.createElement("span",{id:"weather__description"},u," (",m,")"))):"")}var m=a(19),f=Object(n.createContext)(null);function p(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),i=Object(r.a)(o,2),u=i[0],p=i[1],h=Object(n.useContext)(f),b=h.isAuthed;h.setIsAuthed;Object(n.useEffect)((function(){localStorage.getItem("favCities")?p(JSON.parse(localStorage.getItem("favCities"))):p([])}),[]);var E=function(e){e.preventDefault(),console.log(a);var t=[].concat(Object(m.a)(u),[a]);v(t),l("")},v=function(e){p(e),localStorage.setItem("favCities",JSON.stringify(e))};return!1===b?c.a.createElement(s.a,{to:"/logIn"}):c.a.createElement("div",{id:"grid_2-columns"},c.a.createElement("div",{className:"left_column"},c.a.createElement("form",{onSubmit:E,className:"form"},c.a.createElement("input",{className:"form__input",name:"text",value:a,onChange:function(e){return l(e.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430..."}),c.a.createElement("button",{onClick:E},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))),c.a.createElement("div",null,u.map((function(e,t){return c.a.createElement(d,{city:e,key:"".concat(e).concat(t),removeCard:function(){return function(e){var t=u.filter((function(t,a){return a!==e}));v(t)}(t)}})}))))}function d(e){var t=Object(n.useState)(null),a=Object(r.a)(t,2),l=a[0],o=a[1];return Object(n.useEffect)((function(){fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(e.city,"&appid=").concat("c47a67513f793be01fd78b932ab39567","&units=metric ")).then((function(e){return e.json()})).then((function(e){e.main?(console.log(e),console.log("temp",e.main.temp),e.main.temp,o("+".concat(e.main.temp))):o("\u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")}))}),[]),c.a.createElement("div",{className:"cityCard"},c.a.createElement("button",{className:"cityCard__remove",onClick:e.removeCard},"x"),c.a.createElement("div",{className:"cityCard__info"},c.a.createElement("span",null,e.city),c.a.createElement("span",{className:"cityCard__temp"},l)))}function h(){var e=this,t=Object(n.useContext)(f),a=(t.isAuthed,t.setIsAuthed),l=Object(s.f)();return c.a.createElement("div",null,c.a.createElement("h2",null,"Sign in"),c.a.createElement("form",{className:"form"},c.a.createElement("input",{onChange:function(t){e.handleChange(t,"title")},value:"user",className:"form__input",placeholder:"Login"}),c.a.createElement("input",{onChange:function(t){e.handleChange(t,"title")},value:"password1234",className:"form__input",type:"password",placeholder:"Password"}),c.a.createElement("div",{className:"form__submit-container"},c.a.createElement("button",{className:"form__submit-button",onClick:function(){localStorage.setItem("isAuthed",!0),a(!0),l.push("/cities")}},"Sign in"))))}function b(){var e=Object(n.useContext)(f).setIsAuthed;return Object(n.useEffect)((function(){localStorage.setItem("isAuthed",!1),e(!1),console.log("isAuthed")}),[]),c.a.createElement(s.a,{to:"/"})}var E=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){void 0!==localStorage.getItem("isAuthed")?l(localStorage.getItem("isAuthed")):l(!1)}),[]);var o=Object(n.useMemo)((function(){return{isAuthed:a,setIsAuthed:l}}),[a,l]);return c.a.createElement(i.a,null,c.a.createElement(f.Provider,{value:o},c.a.createElement("div",null,c.a.createElement("nav",{className:"nav"},c.a.createElement("div",{className:"container_nav"},c.a.createElement(i.b,{className:"link",to:"/"},"Home"),c.a.createElement(i.b,{className:"link",to:"/cities"},"Cities"),a?c.a.createElement(i.b,{className:"link auth-link aside",to:"/logOut"},"Sign Out"):c.a.createElement(i.b,{className:"link auth-link aside",to:"/logIn"},"Sign In")))),c.a.createElement("div",{className:"container__content"},c.a.createElement(s.b,{path:"/",exact:!0,component:u}),c.a.createElement(s.b,{path:"/cities",component:p}),c.a.createElement(s.b,{path:"/logOut",component:b}),c.a.createElement(s.b,{path:"/logIn",component:h}))))};o.a.render(c.a.createElement(E,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.4b75abf0.chunk.js.map