(this["webpackJsonp@mahefa/cvmanager-ui"]=this["webpackJsonp@mahefa/cvmanager-ui"]||[]).push([[40],{688:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(691);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,i,n=[],s=!0,d=!1;try{for(r=r.call(e);!(s=(a=r.next()).done)&&(n.push(a.value),!t||n.length!==t);s=!0);}catch(o){d=!0,i=o}finally{try{s||null==r.return||r.return()}finally{if(d)throw i}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},700:function(e,t,r){"use strict";t.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefect",registered:"2001/05/25",role:"Alien",status:"Don't panic!"}]},772:function(e,t,r){"use strict";r.r(t);var a=r(688),i=(r(1),r(683)),n=r(687),s=r(700),d=r(24);t.default=function(e){var t=e.match,r=s.a.find((function(e){return e.id.toString()===t.params.id})),o=r?Object.entries(r):[["id",Object(d.jsxs)("span",{children:[Object(d.jsx)(n.a,{className:"text-muted",name:"cui-icon-ban"})," Not found"]})]];return Object(d.jsx)(i.CRow,{children:Object(d.jsx)(i.CCol,{lg:6,children:Object(d.jsxs)(i.CCard,{children:[Object(d.jsxs)(i.CCardHeader,{children:["User id: ",t.params.id]}),Object(d.jsx)(i.CCardBody,{children:Object(d.jsx)("table",{className:"table table-striped table-hover",children:Object(d.jsx)("tbody",{children:o.map((function(e,t){var r=Object(a.a)(e,2),i=r[0],n=r[1];return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"".concat(i,":")}),Object(d.jsx)("td",{children:Object(d.jsx)("strong",{children:n})})]},t.toString())}))})})})]})})})}}}]);