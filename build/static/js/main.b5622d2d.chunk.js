(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(30)},21:function(e,t,a){},22:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),u=a.n(r),c=(a(21),a(22),a(4)),l=a(15),d=a(6),i=a(8),s=a(1),m=a(2);var p,h=function(e,t,a){if(a===t)return Object(i.a)(e);var n,o=[];n=a===t?0:a>t?1:-1;for(var r=!1,u=0;u<e.length;u+=1)u===a?(r=!r,o.push(e[t])):u===t?(r=!r,o.push(e[a])):r?o.push(e[u+n]):o.push(e[u]);return o},f="load_authors_click",b="display_author_items",I="handle_author_item_hovering",v="remove_author_item",y="place_author_item",O="handle_focus_on_author_item",N="update_input_value",E="handle_input_new_name",j="cancel_inputting",g={RENAMING:"renaming",MOVING:"moving"},A={ABOVE:"above",BELOW:"below"};var w=(p={},Object(s.a)(p,f,function(e){return Object(m.a)({},e,{loading:!0})}),Object(s.a)(p,b,function(e,t){var a=t.payload,n=[],o=a.reduce(function(e,t,a){return n.push(a.toString()),Object(m.a)({},e,Object(s.a)({},a,{authorName:t,inputValue:t}))},{});return Object(m.a)({},e,{authorsById:o,authorsRenderList:n})}),Object(s.a)(p,I,function(e,t){var a=t.payload;return Object(m.a)({},e,{hoveredAuthorId:a})}),Object(s.a)(p,N,function(e,t){var a=t.payload,n=e.authorsById,o=n[e.focusedAuthorId].authorName;return Object(m.a)({},e,{authorsById:Object(m.a)({},n,Object(s.a)({},e.focusedAuthorId,{authorName:o,inputValue:a}))})}),Object(s.a)(p,E,function(e,t){var a=t.payload;return""===a?e:Object(m.a)({},e,{authorsById:Object(m.a)({},e.authorsById,Object(s.a)({},e.focusedAuthorId,{authorName:a,inputValue:a})),focusedAuthorId:null})}),Object(s.a)(p,j,function(e){var t=e.authorsById,a=t[e.focusedAuthorId].authorName;return Object(m.a)({},e,{authorsById:Object(m.a)({},t,Object(s.a)({},e.focusedAuthorId,{authorName:a,inputValue:a})),focusedAuthorId:null,focusedItemState:null})}),Object(s.a)(p,y,function(e){var t=e.authorsRenderList,a=e.hoveredAuthorId,n=e.focusedAuthorId,o=t.indexOf(n),r=t.indexOf(a);return Object(m.a)({},e,{authorsRenderList:h(t,o,r),focusedAuthorId:null,focusedItemState:null})}),Object(s.a)(p,O,function(e,t){var a=t.payload;return Object(m.a)({},e,{focusedAuthorId:a.authorId,focusedItemState:a.selectedState})}),Object(s.a)(p,v,function(e,t){var a=t.payload;return delete e.authorsById[a],Object(m.a)({},e,{authorsById:Object(m.a)({},e.authorsById),authorsRenderList:e.authorsRenderList.reduce(function(e,t){return t!==a?[].concat(Object(i.a)(e),[t]):e},[])})}),p),_={loading:!1,authorsRenderList:null,authorsById:null,focusedAuthorId:null,focusedItemState:null,hoveredAuthorId:null};a(27),a(28);var k=function(e){var t=e.ownerId,a=e.onSelectState,n=e.onRemoveClick;return o.a.createElement("div",{className:"manipulator"},o.a.createElement("button",{type:"button",className:"manipulator-button rename",onClick:function(){return a(t,g.RENAMING)}},o.a.createElement("span",{className:"context-image",role:"img","aria-label":"Rename"},"\u270d")),o.a.createElement("button",{type:"button",className:"manipulator-button move",onClick:function(){return a(t,g.MOVING)}},o.a.createElement("span",{className:"context-image",role:"img","aria-label":"Move"},"\u2735")),o.a.createElement("button",{type:"button",className:"manipulator-button remove",onClick:function(){return n(t)}},o.a.createElement("span",{className:"context-image",role:"img","aria-label":"Remove"},"\ud83d\uddd1")))};var B=Object(c.b)(null,function(e,t){return{onRemoveClick:function(){return e((a=t.ownerId,{type:v,payload:a}));var a},onSelectState:function(t,a){return e({type:O,payload:{authorId:t,selectedState:a}})}}})(k),S=(a(29),function(e){var t=e.id,a=e.authorName,r=e.inputValue,u=e.hovered,c=e.selected,l=e.focusedItemState,d=e.marker,i=e.onMouseEnter,s=e.onUpdateInputValue,m=e.onCancelInputting,p=e.onApplyNewName,h=e.unwrapped,f=e.displaceAuthorItem;return o.a.createElement(n.Fragment,null,(d===A.ABOVE||c)&&l===g.MOVING&&o.a.createElement("button",{type:"button",className:"marker",onClick:function(){return f(t)}},c?"\u25bc":"\u25b2"),o.a.createElement("section",{className:"item-wrapper".concat(u?" hovered":""),onMouseEnter:i},o.a.createElement("label",{htmlFor:"author_".concat(t),className:"author-name"},a,o.a.createElement("input",{name:"author_".concat(t),className:h?"unwrapped":"wrapped",type:"text",value:r,disabled:!h,onKeyDown:function(e){switch(e.key){case"Enter":p(e.target.value.trim());break;case"Escape":m()}},onChange:function(e){return s(e.target.value.trim())}})),u&&!c&&o.a.createElement(B,{ownerId:t})),(d===A.BELOW||c)&&l===g.MOVING&&o.a.createElement("button",{type:"button",className:"marker",onClick:function(){return f(t)}},c?"\u25b2":"\u25bc"))});S.defaultProps={unwrapped:!1,inputValue:"",focusedItemState:null};var L=S;var R=Object(c.b)(function(e,t){var a=t.id,n=e.hoveredAuthorId,o=e.focusedAuthorId,r=e.focusedItemState,u=e.authorsById[a],c=a===o,l={authorName:u.authorName,inputValue:u.inputValue,focusedItemState:r,selected:c,hovered:!o&&a===n};return c&&(l.unwrapped=r===g.RENAMING),l},function(e,t){return{onUpdateInputValue:function(t){return e({type:N,payload:t})},onApplyNewName:function(t){return e({type:E,payload:t})},onMouseEnter:function(){return e((a=t.id,{type:I,payload:a}));var a},displaceAuthorItem:function(){return e((t.id,{type:y}))},onCancelInputting:function(){return e({type:j})}}})(L);function V(e){var t,a=e.loading,n=e.loadingAuthorsList,r=e.authorsRenderList,u=e.focusedAuthorId,c=e.focusedItemState,l=!1;return o.a.createElement("div",{className:"list-wrapper"},r?r.map(function(e){return e===u&&(l=!0),t="",c===g.MOVING&&u!==e&&(t=!0===l?A.BELOW:A.ABOVE),o.a.createElement(R,{key:e,id:e,marker:t})}):null,!a&&o.a.createElement("button",{type:"button",disabled:a,className:"load-button",onClick:n},a?"Loading data...":"Load authors data"))}V.defaultProps={loading:null,authorsRenderList:null,focusedAuthorId:null,focusedItemState:null};var M=V;var C=Object(c.b)(function(e){return{authorsRenderList:e.authorsRenderList,loading:e.loading,focusedItemState:e.focusedItemState,focusedAuthorId:e.focusedAuthorId}},function(e){return{loadingAuthorsList:function(){e({type:f});var t=new XMLHttpRequest;t.open("GET","http://my-json-server.typicode.com/mate-academy/literary-blog/authors"),t.responseType="json",t.addEventListener("load",function(){var a;4===t.readyState&&e((a=t.response,{type:b,payload:a}))}),t.send()}}})(M),G=Object(d.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;return w[t.type]?w[t.type](e,t):e},Object(d.a)(l.a));var x=function(){return o.a.createElement(c.a,{store:G},o.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.b5622d2d.chunk.js.map