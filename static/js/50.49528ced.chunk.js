"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[50],{6050:function(e,n,t){t.r(n),t.d(n,{default:function(){return X}});var r=t(2791),a=t(3634),o=function(e){return e.contacts.items},i=function(e){return e.contacts.filter},l=function(e){return e.contacts.isLoading},c=t(9434),s=t(4270),u=t(1538),d=t(3027),v="Filter_input__N7T3z",f=t(184),m=function(){var e=(0,c.I0)();return(0,f.jsx)(d.Z,{className:"mb-1",style:{paddingTop:20,paddingBottom:20},children:(0,f.jsxs)(d.Z.Group,{children:[(0,f.jsx)(d.Z.Label,{children:"Find contacts by name"}),(0,f.jsx)(d.Z.Control,{className:v,type:"name",onChange:function(n){var t=n.target.value.toLowerCase();e((0,u.GQ)(t))}})]})})},b=t(3360),h="ContactForm_input__Bl93P",p="ContactForm_paragraph__nRyTj",x=function(){var e=(0,c.v9)(o),n=(0,c.I0)();return(0,f.jsxs)(d.Z,{className:"no-border",onSubmit:function(t){t.preventDefault();var r=t.currentTarget,o=r.elements.name.value,i=r.elements.number.value,l=o.toLowerCase(),c=!1,s={name:o,number:i};e.forEach((function(e){e.name.toLowerCase()===l&&(alert("".concat(e.name," is already on the list")),c=!0)})),c||(n((0,a.uK)(s)),r.reset())},children:[(0,f.jsx)("p",{className:p,children:"Add a new contact"}),(0,f.jsxs)(d.Z.Group,{className:"mb-3",controlId:"inputName",children:[(0,f.jsx)(d.Z.Label,{children:"Name"}),(0,f.jsx)(d.Z.Control,{className:h,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter name",required:!0})]}),(0,f.jsxs)(d.Z.Group,{className:"mb-3",controlId:"inputPhone",children:[(0,f.jsx)(d.Z.Label,{children:"Phone"}),(0,f.jsx)(d.Z.Control,{className:h,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Enter number",required:!0})]}),(0,f.jsx)(b.Z,{variant:"secondary",type:"submit",children:"Add contact"})]})},y=t(1413),j=t(5987),g=t(1694),C=t.n(g),Z=(t(2391),t(8580)),N=Function.prototype.bind.call(Function.prototype.call,[].slice);var w=t(3201),k=r.createContext(null);k.displayName="NavContext";var I=k,_=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):n||null},K=r.createContext(null),A=r.createContext(null);function P(e){return"".concat("data-rr-ui-").concat(e)}var L=t(9439),O=t(2134),E=t(5341),z=["as","active","eventKey"];function F(e){var n=e.key,t=e.onClick,a=e.active,o=e.id,i=e.role,l=e.disabled,c=(0,r.useContext)(K),s=(0,r.useContext)(I),u=(0,r.useContext)(A),d=a,v={role:i};if(s){i||"tablist"!==s.role||(v.role="tab");var f=s.getControllerId(null!=n?n:null),m=s.getControlledId(null!=n?n:null);v[P("event-key")]=n,v.id=f||o,!(d=null==a&&null!=n?s.activeKey===n:a)&&(null!=u&&u.unmountOnExit||null!=u&&u.mountOnEnter)||(v["aria-controls"]=m)}return"tab"===v.role&&(v["aria-selected"]=d,d||(v.tabIndex=-1),l&&(v.tabIndex=-1,v["aria-disabled"]=!0)),v.onClick=(0,O.Z)((function(e){l||(null==t||t(e),null!=n&&c&&!e.isPropagationStopped()&&c(n,e))})),[v,{isActive:d}]}var R=r.forwardRef((function(e,n){var t=e.as,r=void 0===t?E.ZP:t,a=e.active,o=e.eventKey,i=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,z),l=F(Object.assign({key:_(o,i.href),active:a},i)),c=(0,L.Z)(l,2),s=c[0],u=c[1];return s[P("active")]=u.isActive,(0,f.jsx)(r,Object.assign({},i,s,{ref:n}))}));R.displayName="NavItem";var S=R,D=["as","onSelect","activeKey","role","onKeyDown"];var q=function(){},G=P("event-key"),T=r.forwardRef((function(e,n){var t,a,o=e.as,i=void 0===o?"div":o,l=e.onSelect,c=e.activeKey,s=e.role,u=e.onKeyDown,d=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,D),v=(0,r.useReducer)((function(e){return!e}),!1)[1],m=(0,r.useRef)(!1),b=(0,r.useContext)(K),h=(0,r.useContext)(A);h&&(s=s||"tablist",c=h.activeKey,t=h.getControlledId,a=h.getControllerId);var p=(0,r.useRef)(null),x=function(e){var n=p.current;if(!n)return null;var t,r,a=(t=n,r="[".concat(G,"]:not([aria-disabled=true])"),N(t.querySelectorAll(r))),o=n.querySelector("[aria-selected=true]");if(!o||o!==document.activeElement)return null;var i=a.indexOf(o);if(-1===i)return null;var l=i+e;return l>=a.length&&(l=0),l<0&&(l=a.length-1),a[l]},y=function(e,n){null!=e&&(null==l||l(e,n),null==b||b(e,n))};(0,r.useEffect)((function(){if(p.current&&m.current){var e=p.current.querySelector("[".concat(G,"][aria-selected=true]"));null==e||e.focus()}m.current=!1}));var j=(0,w.Z)(n,p);return(0,f.jsx)(K.Provider,{value:y,children:(0,f.jsx)(I.Provider,{value:{role:s,activeKey:_(c),getControlledId:t||q,getControllerId:a||q},children:(0,f.jsx)(i,Object.assign({},d,{onKeyDown:function(e){if(null==u||u(e),h){var n,t;switch(e.key){case"ArrowLeft":case"ArrowUp":n=x(-1);break;case"ArrowRight":case"ArrowDown":n=x(1);break;default:return}if(n)e.preventDefault(),y(n.dataset[(t="EventKey","".concat("rrUi").concat(t))]||null,e),m.current=!0,v()}},ref:j,role:s}))})})}));T.displayName="Nav";var B=Object.assign(T,{Item:S}),U=t(162),J=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],M=r.forwardRef((function(e,n){var t=e.bsPrefix,r=e.active,a=e.disabled,o=e.eventKey,i=e.className,l=e.variant,c=e.action,s=e.as,u=(0,j.Z)(e,J);t=(0,U.vE)(t,"list-group-item");var d=F((0,y.Z)({key:_(o,u.href),active:r},u)),v=(0,L.Z)(d,2),m=v[0],b=v[1],h=(0,O.Z)((function(e){if(a)return e.preventDefault(),void e.stopPropagation();m.onClick(e)}));a&&void 0===u.tabIndex&&(u.tabIndex=-1,u["aria-disabled"]=!0);var p=s||(c?u.href?"a":"button":"div");return(0,f.jsx)(p,(0,y.Z)((0,y.Z)((0,y.Z)({ref:n},u),m),{},{onClick:h,className:C()(i,t,b.isActive&&"active",a&&"disabled",l&&"".concat(t,"-").concat(l),c&&"".concat(t,"-action"))}))}));M.displayName="ListGroupItem";var Q=M,$=["className","bsPrefix","variant","horizontal","numbered","as"],H=r.forwardRef((function(e,n){var t,r=(0,Z.Ch)(e,{activeKey:"onSelect"}),a=r.className,o=r.bsPrefix,i=r.variant,l=r.horizontal,c=r.numbered,s=r.as,u=void 0===s?"div":s,d=(0,j.Z)(r,$),v=(0,U.vE)(o,"list-group");return l&&(t=!0===l?"horizontal":"horizontal-".concat(l)),(0,f.jsx)(B,(0,y.Z)((0,y.Z)({ref:n},d),{},{as:u,className:C()(a,v,i&&"".concat(v,"-").concat(i),t&&"".concat(v,"-").concat(t),c&&"".concat(v,"-numbered"))}))}));H.displayName="ListGroup";var V=Object.assign(H,{Item:Q}),W=function(){var e=(0,c.v9)(o),n=(0,c.v9)(i),t=(0,c.I0)(),r=function(e,n){return n?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):e}(e,n);return(0,f.jsx)("div",{children:(0,f.jsx)(V,{as:"ol",numbered:!0,class:"no-border",children:r.map((function(e,n){return(0,f.jsxs)(V.Item,{as:"li",children:[(0,f.jsxs)("p",{children:[e.name,": ",e.number]}),(0,f.jsx)(b.Z,{variant:"secondary",type:"button",onClick:function(){return function(e){return t((0,a.GK)(e))}(e.id)},children:"Delete"})]},n)}))})})};function X(){var e=(0,c.I0)(),n=(0,c.v9)(l);return(0,r.useEffect)((function(){e((0,a.yF)())}),[e]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.q,{children:(0,f.jsx)("title",{children:"Phonebook"})}),(0,f.jsx)(x,{}),(0,f.jsx)(m,{}),(0,f.jsx)("div",{style:{marginTop:20,marginBottom:20},children:n&&"Processing request..."}),(0,f.jsx)(W,{})]})}}}]);
//# sourceMappingURL=50.49528ced.chunk.js.map