(this["webpackJsonp@mahefa/cvmanager-ui"]=this["webpackJsonp@mahefa/cvmanager-ui"]||[]).push([[36],{686:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var c=t(50),n=t(191),r=t(1),i=t.n(r),s=t(683),j=t(24),l=["name","text"],d=function(e){var a=e.name,t=e.text,r=Object(n.a)(e,l),i=a?"https://coreui.io/react/docs/components/".concat(a):e.href;return Object(j.jsx)("div",{className:"card-header-actions",children:Object(j.jsx)(s.CLink,Object(c.a)(Object(c.a)({},r),{},{href:i,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(j.jsx)("small",{className:"text-muted",children:t||"docs"})}))})},b=i.a.memo(d)},688:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var c=t(691);function n(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var c,n,r=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(c=t.next()).done)&&(r.push(c.value),!a||r.length!==a);i=!0);}catch(j){s=!0,n=j}finally{try{i||null==t.return||t.return()}finally{if(s)throw n}}return r}}(e,a)||Object(c.a)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},753:function(e,a,t){"use strict";t.r(a);var c=t(688),n=t(1),r=t(683),i=t(687),s=t(686),j=t(24);a.default=function(){var e=Object(n.useState)(1),a=Object(c.a)(e,2),t=a[0],l=a[1],d="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.";return Object(j.jsxs)(r.CRow,{children:[Object(j.jsx)(r.CCol,{xs:"12",md:"6",className:"mb-4",children:Object(j.jsxs)(r.CCard,{children:[Object(j.jsxs)(r.CCardHeader,{children:["Index indentifiers",Object(j.jsx)(s.a,{name:"CTabs"})]}),Object(j.jsx)(r.CCardBody,{children:Object(j.jsxs)(r.CTabs,{children:[Object(j.jsxs)(r.CNav,{variant:"tabs",children:[Object(j.jsx)(r.CNavItem,{children:Object(j.jsx)(r.CNavLink,{children:"Home"})}),Object(j.jsx)(r.CNavItem,{children:Object(j.jsx)(r.CNavLink,{children:"Profile"})}),Object(j.jsx)(r.CNavItem,{children:Object(j.jsx)(r.CNavLink,{children:"Messages"})})]}),Object(j.jsxs)(r.CTabContent,{children:[Object(j.jsx)(r.CTabPane,{children:"1. ".concat(d)}),Object(j.jsx)(r.CTabPane,{children:"2. ".concat(d)}),Object(j.jsx)(r.CTabPane,{children:"3. ".concat(d)})]})]})})]})}),Object(j.jsx)(r.CCol,{xs:"12",md:"6",className:"mb-4",children:Object(j.jsxs)(r.CCard,{children:[Object(j.jsx)(r.CCardHeader,{children:"Id indentifiers"}),Object(j.jsx)(r.CCardBody,{children:Object(j.jsxs)(r.CTabs,{activeTab:"home",children:[Object(j.jsxs)(r.CNav,{variant:"tabs",children:[Object(j.jsx)(r.CNavItem,{children:Object(j.jsx)(r.CNavLink,{"data-tab":"home",children:"Home"})}),Object(j.jsx)(r.CNavItem,{children:Object(j.jsx)(r.CNavLink,{"data-tab":"profile",children:"Profile"})}),Object(j.jsx)(r.CNavItem,{children:Object(j.jsx)(r.CNavLink,{"data-tab":"messages",children:"Messages"})})]}),Object(j.jsxs)(r.CTabContent,{children:[Object(j.jsx)(r.CTabPane,{"data-tab":"home",children:"1. ".concat(d)}),Object(j.jsx)(r.CTabPane,{"data-tab":"profile",children:"2. ".concat(d)}),Object(j.jsx)(r.CTabPane,{"data-tab":"messages",children:"3. ".concat(d)})]})]})})]})}),Object(j.jsx)(r.CCol,{xs:"12",md:"6",className:"mb-4",children:Object(j.jsxs)(r.CCard,{children:[Object(j.jsx)(r.CCardHeader,{children:"No fade animation tabs"}),Object(j.jsx)(r.CCardBody,{children:Object(j.jsxs)(r.CTabs,{children:[Object(j.jsxs)(r.CNav,{variant:"tabs",children:[Object(j.jsx)(r.CNavItem,{children:Object(j.jsx)(r.CNavLink,{children:Object(j.jsx)(i.a,{name:"cil-calculator"})})}),Object(j.jsx)(r.CNavItem,{children:Object(j.jsx)(r.CNavLink,{children:Object(j.jsx)(i.a,{name:"cil-basket"})})}),Object(j.jsx)(r.CNavItem,{children:Object(j.jsx)(r.CNavLink,{children:Object(j.jsx)(i.a,{name:"cil-chart-pie"})})})]}),Object(j.jsxs)(r.CTabContent,{fade:!1,children:[Object(j.jsx)(r.CTabPane,{children:"1. ".concat(d)}),Object(j.jsx)(r.CTabPane,{children:"2. ".concat(d)}),Object(j.jsx)(r.CTabPane,{children:"3. ".concat(d)})]})]})})]})}),Object(j.jsx)(r.CCol,{xs:"12",md:"6",className:"mb-4",children:Object(j.jsxs)(r.CCard,{children:[Object(j.jsx)(r.CCardHeader,{children:"Controlled tabs"}),Object(j.jsx)(r.CCardBody,{children:Object(j.jsxs)(r.CTabs,{activeTab:t,onActiveTabChange:function(e){return l(e)},children:[Object(j.jsxs)(r.CNav,{variant:"tabs",children:[Object(j.jsx)(r.CNavItem,{children:Object(j.jsxs)(r.CNavLink,{children:[Object(j.jsx)(i.a,{name:"cil-calculator"}),0===t&&" Home"]})}),Object(j.jsx)(r.CNavItem,{children:Object(j.jsxs)(r.CNavLink,{children:[Object(j.jsx)(i.a,{name:"cil-basket"}),1===t&&" Profile"]})}),Object(j.jsx)(r.CNavItem,{children:Object(j.jsxs)(r.CNavLink,{children:[Object(j.jsx)(i.a,{name:"cil-chart-pie"}),2===t&&" Messages"]})})]}),Object(j.jsxs)(r.CTabContent,{children:[Object(j.jsx)(r.CTabPane,{children:"1. ".concat(d)}),Object(j.jsx)(r.CTabPane,{children:"2. ".concat(d)}),Object(j.jsx)(r.CTabPane,{children:"3. ".concat(d)})]})]})})]})})]})}}}]);