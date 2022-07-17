(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{23:function(t,e,r){},29:function(t,e,r){},32:function(t,e,r){},33:function(t,e,r){},35:function(t,e,r){"use strict";r.r(e);var n,c=r(0),a=r.n(c),i=r(10),s=r.n(i),o=(r(23),r(6)),u=(r(29),r(3)),l=r.n(u),j=r(7),p=r(5),b=r(9);!function(t){t.SET_TRIP_BRIEF="SET_TRIP_BRIEF",t.SET_TRIP_FLIGHTS="SET_TRIP_FLIGHTS"}(n||(n={}));var f=Object(b.b)(n.SET_TRIP_BRIEF),d=Object(b.b)(n.SET_TRIP_FLIGHTS),h=Object(b.c)({tripBrief:{},flights:[]},(function(t){t.addCase(f,(function(t,e){t.tripBrief=e.payload})),t.addCase(d,(function(t,e){t.flights=e.payload}))})),O=Object(b.a)({reducer:h}),x=function(t){return t.tripBrief},v=function(t){return t.flights},m=function(){var t=Object(j.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://live.vamoos.com/api/itineraries/VMD-VL1234");case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(){var t=Object(j.a)(l.a.mark((function t(e){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],e.brief.forEach((function(t){return e.flightAlerts.forEach((function(e){return e.flights.forEach((function(e){e.briefId===t.id&&r.push(e)}))}))})),t.abrupt("return",r);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=(r(32),r(33),r(1)),y=function(){var t=Object(o.c)(v);return Object(N.jsx)("div",{className:"flight",children:t.map((function(t){return Object(N.jsxs)("div",{className:"flight__card",children:[Object(N.jsx)("p",{className:"flight__airline",children:"Airline: ".concat(t.airlineName)}),Object(N.jsx)("p",{children:"Flight number: ".concat(t.flightNumber)}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{children:"Departure"}),Object(N.jsx)("hr",{}),Object(N.jsx)("p",{children:"City: ".concat(t.departure.cityName)}),Object(N.jsx)("p",{children:t.departure.airportName})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{children:"Arrival"}),Object(N.jsx)("hr",{}),Object(N.jsx)("p",{children:"City: ".concat(t.arrival.cityName)}),Object(N.jsx)("p",{children:t.arrival.airportName})]})]},t.id)}))})},g=function(){var t,e,r=Object(o.b)(),n=Object(o.c)(x),a=Object(c.useState)(-1),i=Object(p.a)(a,2),s=i[0],u=i[1],b=Object(c.useState)(1),h=Object(p.a)(b,2),O=h[0],v=h[1],g=Object(c.useState)(0),k=Object(p.a)(g,2),E=k[0],I=k[1],T=Object(c.useState)(!1),S=Object(p.a)(T,2),w=S[0],P=S[1];Object(c.useEffect)((function(){(function(){var t=Object(j.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m();case 3:return e=t.sent,t.next=6,_(e);case 6:n=t.sent,r(d(n)),I(e.brief.length),r(f(e.brief[0])),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),alert("Eror try again");case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}})()()}),[]);var R=function(){var t=Object(j.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(E!==O){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,m();case 4:e=t.sent,r(f(e.brief[O])),v(O+1),u(s+1);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=Object(j.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(s<0)){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,m();case 4:e=t.sent,r(f(e.brief[s])),v(O-1),u(s-1);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"trip",children:[Object(N.jsxs)("div",{className:"trip__container",children:[Object(N.jsx)("img",{src:n.dailyPhoto,alt:"dailyPhoto",className:"trip__foto"}),Object(N.jsx)("h2",{className:"trip__title",children:n.headline}),Object(N.jsxs)("div",{className:"trip__details",children:[Object(N.jsxs)("p",{className:"trip__description",children:[n.shortInformation,null===(t=n.documents)||void 0===t?void 0:t.map((function(t){return Object(N.jsx)("a",{href:t.node.file.httpsUrl,className:"trip__link",children:"More details..."},t.id)}))]}),Object(N.jsxs)("div",{className:"trip__location-box",children:[Object(N.jsx)("img",{src:"./image/location.png",alt:"location",className:"trip__location-image"}),Object(N.jsx)("p",{className:"trip__location",children:null===(e=n.location)||void 0===e?void 0:e.location})]})]}),Object(N.jsx)("button",{type:"button",onClick:C,className:"trip__prev-button",children:"Preview Day"}),Object(N.jsx)("button",{type:"button",className:"trip__flight-button",onClick:function(){P(!w)},children:w?"Close":"Flight info"}),Object(N.jsx)("button",{type:"button",onClick:R,className:"trip__next-button",children:"Next Day"})]}),w&&Object(N.jsx)(y,{})]})},k=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(g,{})})};s.a.render(Object(N.jsx)(o.a,{store:O,children:Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(k,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ba1acb10.chunk.js.map