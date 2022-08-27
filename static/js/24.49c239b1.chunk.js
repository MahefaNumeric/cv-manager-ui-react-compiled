(this["webpackJsonp@mahefa/cvmanager-ui"]=this["webpackJsonp@mahefa/cvmanager-ui"]||[]).push([[24],{690:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return f}));var i=n(187),r=n(188),o=n(189),a=n(190),c=n(1),s=n.n(c),l=n(683),u=n(24),d=function(t){Object(o.a)(n,t);var e=Object(a.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props,e=t.item,n=(t.index,t.clickHandlers),i=t.vertical;return Object(u.jsx)("td",{children:Object(u.jsxs)(l.CButtonGroup,{vertical:i,style:{minWidth:i?78:null},children:[this.renderButtonView(e),n&&n.downloadHandler&&Object(u.jsx)(l.CButton,{color:"success",variant:"outline",shape:"square",size:"sm",onClick:function(){return n.downloadHandler(e)},children:"Download"}),Object(u.jsx)(l.CButton,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){return n.editHandler(e)},children:"Edit"}),Object(u.jsx)(l.CButton,{color:"danger",variant:"outline",shape:"square",size:"sm",onClick:function(){return n.deleteHandler(e)},children:"Del"})]})})}},{key:"renderButtonView",value:function(t){var e=this.props,n=(e.index,e.clickHandlers),i=(e.vertical,e.viewDropdown),r=i&&Array.isArray(i)&&i.length>0,o=function(e){return Object(u.jsx)(l.CButton,{color:"primary",variant:1==e?"ghost":"outline",shape:"square",size:"sm",style:{width:"100%"},onClick:function(){return n.viewHandler(t)},children:"View"})};return r?Object(u.jsxs)(l.CDropdown,{children:[Object(u.jsx)(l.CDropdownToggle,{split:!0,color:"primary",variant:"outline",shape:"square",size:"sm",style:{padding:0},children:o(r)}),Object(u.jsx)(l.CDropdownMenu,{children:i.map((function(e){return Object(u.jsx)(l.CDropdownItem,{onClick:function(){return e.action(t)},children:e.text})}))})]}):o(r)}}]),n}(s.a.Component),h=function(t,e,n){return Object(u.jsx)("td",{children:t[n]?Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:t[n]}}):f(null)})},f=function(t){return t||Object(u.jsx)("em",{children:"(empty)"})}},692:function(t,e,n){"use strict";var i=n(187),r=n(188),o=n(189),a=n(190),c=n(1),s=n.n(c),l=n(683),u=n(24),d=function(t){Object(o.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={show:!1,title:"",text:"",onOk:null,withCancelButton:!0},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.ref;t&&t(this)}},{key:"render",value:function(){var t=this,e=this.state,n=e.title,i=e.text,r=e.show,o=e.onOk,a=e.withCancelButton;return Object(u.jsxs)(l.CModal,{show:r,onClose:this.onCancel.bind(this),children:[Object(u.jsx)(l.CModalHeader,{closeButton:!0,children:Object(u.jsx)(l.CModalTitle,{children:n})}),Object(u.jsx)(l.CModalBody,{children:i}),Object(u.jsxs)(l.CModalFooter,{children:[Object(u.jsx)(l.CButton,{color:"primary",onClick:function(){return o&&o()},children:"Ok"})," ",a&&Object(u.jsx)(l.CButton,{color:"secondary",onClick:function(){return t.onCancel&&t.onCancel()},children:"Cancel"})]})]})}},{key:"show",value:function(t,e,n){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.setState({show:!0,title:t,text:e,onOk:n,withCancelButton:i}),console.log("ModalConfirmation::show")}},{key:"onCancel",value:function(){this.setState({show:!1}),console.log("ModalConfirmation::onCancel")}}]),n}(s.a.Component);e.a=d},705:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(187),r=n(188),o=function(){function t(){Object(i.a)(this,t)}return Object(r.a)(t,[{key:"getAllForCurrentUser",value:function(t){return new Promise((function(e,n){fetch("".concat("https://api.manager.cv.wecours.com","/").concat(t,"/position/all")).then((function(t){return t.json()})).then((function(t){return e(t)}),(function(t){return n(t)}))}))}},{key:"getDetail",value:function(t,e){return new Promise((function(n,i){fetch("".concat("https://api.manager.cv.wecours.com","/").concat(t,"/position/item/").concat(e)).then((function(t){return t.json()})).then((function(t){return n(t)}),(function(t){return i(t)}))}))}},{key:"createOrUpdate",value:function(t,e){var n=e.id?"edit":"add";console.log("JobAppService::createOrUpdate",e,n);var i="edit"==n?"PUT":"POST",r="edit"==n?e.id:"";return new Promise((function(n,o){fetch("".concat("https://api.manager.cv.wecours.com","/").concat(t,"/position/item/").concat(r),{method:i,headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()})).then((function(t){return n(t)}),(function(t){return o(t)}))}))}}]),t}()},790:function(t,e,n){"use strict";n.r(e);var i=n(187),r=n(188),o=n(189),a=n(190),c=n(1),s=n.n(c),l=n(683),u=n(690),d=n(705),h=n(687),f=n(692),j=n(24),p=function(t){Object(o.a)(n,t);var e=Object(a.a)(n);function n(t){var r;return Object(i.a)(this,n),(r=e.call(this,t)).state={listEducation:[],listEducationForDatatable:[],fields:[],isoLang:"fr",refModalConfirm:null},r.positionService=new d.a,r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.isoLang;this.setState({isoLang:e}),this.positionService.getAllForCurrentUser(e).then((function(e){return t.setupDataToShow(e)}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.listEducationForDatatable,i=e.fields;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.CRow,{children:Object(j.jsx)(l.CCol,{children:Object(j.jsxs)(l.CCard,{children:[Object(j.jsxs)(l.CCardHeader,{children:["Position List",this.renderListHeader()]}),Object(j.jsx)(l.CCardBody,{children:Object(j.jsx)(l.CDataTable,{items:n,fields:i,hover:!0,striped:!0,bordered:!0,size:"sm",itemsPerPage:10,pagination:!0,scopedSlots:{actions:function(e,n){return Object(j.jsx)(u.a,{item:e,index:n,clickHandlers:t.getClickHandlers()})}}})})]})})}),Object(j.jsx)(f.a,{ref:function(e){return t.state.refModalConfirm=e}})]})}},{key:"setupDataToShow",value:function(t){console.log("setupDataToShow",t);var e=[];Array.isArray(t)&&t.forEach((function(t){e.push({id:t.id,slug:t.slug,title:t.langValues[0].title,description:t.langValues[0].description})}));this.setState({listEducation:t,listEducationForDatatable:e,fields:["id",{key:"slug",label:"Slug",sorter:!1,filter:!1},"title","description","actions"]})}},{key:"renderBadgeItem",value:function(t,e){return Object(j.jsx)("td",{children:Object(j.jsxs)(l.CBadge,{color:(n=t.progress,100===n?"success":n>80?"secondary":n>40?"warning":n>0?"danger":"primary"),children:[t.progress," %"]})});var n}},{key:"getClickHandlers",value:function(){var t=this;return{viewHandler:function(e){return t.itemViewHandler(e)},editHandler:function(e){return t.itemEditHandler(e)},deleteHandler:function(e){return t.itemDeleteHandler(e)}}}},{key:"renderListHeader",value:function(){var t=this;return Object(j.jsx)("div",{className:"card-header-actions",children:Object(j.jsx)(l.CTooltip,{content:"Add new Position",placement:"top",children:Object(j.jsxs)(l.CLink,{className:"card-header-action",onClick:function(){return t.props.history.push("/".concat(t.state.isoLang,"/position/add"))},children:[Object(j.jsx)(h.a,{name:"cil-settings"})," "," "," Add"]})})})}},{key:"itemViewHandler",value:function(t){console.log("PositionList::itemViewHandler",t),this.props.history.push("/".concat(this.state.isoLang,"/position/").concat(t.id))}},{key:"itemEditHandler",value:function(t){console.log("PositionList::itemEditHandler",t),this.props.history.push("/".concat(this.state.isoLang,"/position/").concat(t.id,"/edit"))}},{key:"itemDeleteHandler",value:function(t){var e=this.state.refModalConfirm;console.log("PositionList::itemDeleteHandler",t),e&&e.show("Delete Position","Are you sure to delete this Position : '".concat(t.slug,"' (").concat(t.id,")?"),(function(){e&&e.onCancel()}))}}]),n}(s.a.Component);e.default=p}}]);