(this["webpackJsonp@mahefa/cvmanager-ui"]=this["webpackJsonp@mahefa/cvmanager-ui"]||[]).push([[13],{689:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t){var n=null;if("string"===typeof e)n=e;else if(Array.isArray(e))n=i(e);else{if("undefined"!=typeof e)throw console.log("StringUtils::convertToStringAndToQueryParms, ids param type unkown",e),new Error("StringUtils::convertToStringAndToQueryParms, ids param type unkown");n=""}return void 0!==t&&null!==t?n?"".concat(t,"=").concat(n):"":n},i=function(e){return e.length>0?e.join(","):void 0}},690:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return f}));var r=n(187),i=n(188),a=n(189),o=n(190),c=n(1),s=n.n(c),u=n(683),l=n(24),d=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.item,n=(e.index,e.clickHandlers),r=e.vertical;return Object(l.jsx)("td",{children:Object(l.jsxs)(u.CButtonGroup,{vertical:r,style:{minWidth:r?78:null},children:[this.renderButtonView(t),n&&n.downloadHandler&&Object(l.jsx)(u.CButton,{color:"success",variant:"outline",shape:"square",size:"sm",onClick:function(){return n.downloadHandler(t)},children:"Download"}),Object(l.jsx)(u.CButton,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){return n.editHandler(t)},children:"Edit"}),Object(l.jsx)(u.CButton,{color:"danger",variant:"outline",shape:"square",size:"sm",onClick:function(){return n.deleteHandler(t)},children:"Del"})]})})}},{key:"renderButtonView",value:function(e){var t=this.props,n=(t.index,t.clickHandlers),r=(t.vertical,t.viewDropdown),i=r&&Array.isArray(r)&&r.length>0,a=function(t){return Object(l.jsx)(u.CButton,{color:"primary",variant:1==t?"ghost":"outline",shape:"square",size:"sm",style:{width:"100%"},onClick:function(){return n.viewHandler(e)},children:"View"})};return i?Object(l.jsxs)(u.CDropdown,{children:[Object(l.jsx)(u.CDropdownToggle,{split:!0,color:"primary",variant:"outline",shape:"square",size:"sm",style:{padding:0},children:a(i)}),Object(l.jsx)(u.CDropdownMenu,{children:r.map((function(t){return Object(l.jsx)(u.CDropdownItem,{onClick:function(){return t.action(e)},children:t.text})}))})]}):a(i)}}]),n}(s.a.Component),h=function(e,t,n){return Object(l.jsx)("td",{children:e[n]?Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:e[n]}}):f(null)})},f=function(e){return e||Object(l.jsx)("em",{children:"(empty)"})}},693:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(187),i=n(188),a=n(689),o=function(){function e(){Object(r.a)(this,e)}return Object(i.a)(e,[{key:"getAllForCurrentUser",value:function(e,t){var n=Object(a.a)(t,"excludesIds");return new Promise((function(t,r){fetch("".concat("https://api.manager.cv.wecours.com","/").concat(e,"/education/all?").concat(n)).then((function(e){return e.json()})).then((function(e){return t(e)}),(function(e){return r(e)}))}))}},{key:"getDetail",value:function(e,t){return new Promise((function(n,r){fetch("".concat("https://api.manager.cv.wecours.com","/").concat(e,"/education/item/").concat(t)).then((function(e){return e.json()})).then((function(e){return n(e)}),(function(e){return r(e)}))}))}},{key:"createOrUpdate",value:function(e,t){throw new Error("createCore::createOrUpdate not implemented")}}]),e}()},702:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(187),i=n(188),a=function(){function e(){Object(r.a)(this,e)}return Object(i.a)(e,[{key:"getAllForCurrentUser",value:function(e){return new Promise((function(t,n){fetch("".concat("https://api.manager.cv.wecours.com","/").concat(e,"/address/all")).then((function(e){return e.json()})).then((function(e){return t(e)}),(function(e){return n(e)}))}))}}]),e}()},773:function(e,t,n){"use strict";n.r(t);var r=n(187),i=n(188),a=n(189),o=n(190),c=n(1),s=n.n(c),u=n(683),l=n(702),d=n(690),h=(n(693),n(24)),f=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={listEducation:[],listEducationForDatatable:[],fields:[],isoLang:"fr"},i.addressService=new l.a,i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.isoLang;this.setState({isoLang:t}),this.addressService.getAllForCurrentUser(t).then((function(t){return e.setupDataToShow(t)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.listEducationForDatatable,r=t.fields;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(u.CRow,{children:Object(h.jsx)(u.CCol,{children:Object(h.jsxs)(u.CCard,{children:[Object(h.jsx)(u.CCardHeader,{children:"Address List"}),Object(h.jsx)(u.CCardBody,{children:Object(h.jsx)(u.CDataTable,{items:n,fields:r,hover:!0,striped:!0,bordered:!0,size:"sm",itemsPerPage:10,pagination:!0,scopedSlots:{actions:function(t,n){return Object(h.jsx)(d.a,{item:t,index:n,clickHandlers:e.getClickHandlers()})}}})})]})})})})}},{key:"setupDataToShow",value:function(e){console.log("setupDataToShow",e);var t=[];Array.isArray(e)&&e.forEach((function(e){t.push({id:e.id,slug:e.slug,value:e.langValues[0].value})}));this.setState({listEducation:e,listEducationForDatatable:t,fields:["id",{key:"slug",label:"Slug",sorter:!1,filter:!1},"value","actions"]})}},{key:"renderBadgeItem",value:function(e,t){return Object(h.jsx)("td",{children:Object(h.jsxs)(u.CBadge,{color:(n=e.progress,100===n?"success":n>80?"secondary":n>40?"warning":n>0?"danger":"primary"),children:[e.progress," %"]})});var n}},{key:"getClickHandlers",value:function(){var e=this;return{viewHandler:function(t){return e.itemViewHandler(t)},editHandler:function(t){return e.itemEditHandler(t)},deleteHandler:function(t){return e.itemDeleteHandler(t)}}}},{key:"itemViewHandler",value:function(e){console.log("AddressList::itemViewHandler",e),this.props.history.push("/".concat(this.state.isoLang,"/educations/").concat(e.id))}},{key:"itemEditHandler",value:function(e){console.log("AddressList::itemEditHandler",e),this.props.history.push("/".concat(this.state.isoLang,"/educations/").concat(e.id,"/edit"))}},{key:"itemDeleteHandler",value:function(e){console.log("AddressList::itemDeleteHandler",e)}}]),n}(s.a.Component);t.default=f}}]);