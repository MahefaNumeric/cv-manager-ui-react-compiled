(this["webpackJsonp@mahefa/cvmanager-ui"]=this["webpackJsonp@mahefa/cvmanager-ui"]||[]).push([[18],{692:function(t,e,n){"use strict";var o=n(187),i=n(188),a=n(189),r=n(190),c=n(1),l=n.n(c),s=n(683),u=n(24),h=function(t){Object(a.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={show:!1,title:"",text:"",onOk:null,withCancelButton:!0},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.ref;t&&t(this)}},{key:"render",value:function(){var t=this,e=this.state,n=e.title,o=e.text,i=e.show,a=e.onOk,r=e.withCancelButton;return Object(u.jsxs)(s.CModal,{show:i,onClose:this.onCancel.bind(this),children:[Object(u.jsx)(s.CModalHeader,{closeButton:!0,children:Object(u.jsx)(s.CModalTitle,{children:n})}),Object(u.jsx)(s.CModalBody,{children:o}),Object(u.jsxs)(s.CModalFooter,{children:[Object(u.jsx)(s.CButton,{color:"primary",onClick:function(){return a&&a()},children:"Ok"})," ",r&&Object(u.jsx)(s.CButton,{color:"secondary",onClick:function(){return t.onCancel&&t.onCancel()},children:"Cancel"})]})]})}},{key:"show",value:function(t,e,n){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.setState({show:!0,title:t,text:e,onOk:n,withCancelButton:o}),console.log("ModalConfirmation::show")}},{key:"onCancel",value:function(){this.setState({show:!1}),console.log("ModalConfirmation::onCancel")}}]),n}(l.a.Component);e.a=h},698:function(t,e,n){"use strict";var o=n(187),i=n(188),a=n(189),r=n(190),c=n(683),l=n(1),s=n.n(l),u=n(692),h=n(24),d=function(t){Object(a.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={detailMainEntity:{},listAssociateEntity:{},haveChanged:!1,refModalConfirm:null},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){console.log("EntityEditorComponent::componentDidMount"),this.getDetailMainEntity(),this.getAllListEntity()}},{key:"render",value:function(){var t=this,e=this.props.formInfos;this.state.detailMainEntity;return Object(h.jsxs)("div",{children:[Object(h.jsxs)(c.CRow,{children:[Object(h.jsx)(c.CCol,{lg:9}),Object(h.jsx)(c.CCol,{lg:3,children:Object(h.jsx)(c.CButton,{block:!0,variant:"outline",color:"success",onClick:function(){return t.onSave()},children:"Save"})})]}),Object(h.jsx)("br",{}),Object(h.jsx)(c.CRow,{children:Object(h.jsx)(c.CCol,{children:this.renderCardForm(e)})}),Object(h.jsx)(u.a,{ref:function(e){return t.state.refModalConfirm=e}})]})}},{key:"renderCardForm",value:function(t){var e=this;if(!t)return Object(h.jsx)(h.Fragment,{});var n=this.organizeRowColumn(t.fieldsDefinition);return Object(h.jsxs)(c.CCard,{children:[Object(h.jsx)(c.CCardHeader,{children:t.formTitle}),Object(h.jsx)(c.CCardBody,{children:n.map((function(t){return Object(h.jsxs)(c.CRow,{children:[" ",t.map((function(t){return e.renderItem(t)}))," "]})}))})]})}},{key:"organizeRowColumn",value:function(t){var e=[];return t.forEach((function(t){"undefined"==typeof e[t.formPosition.row]&&(e[t.formPosition.row]=[]),e[t.formPosition.row].push(t)})),e}},{key:"getDetailMainEntity",value:function(){var t=this,e=this.props.formInfos,n=e.detailPromised,o=e.mappingDetail,i=this.state.detailMainEntity;n&&n.then((function(e){console.log("EntityEditorComponent::getDetailMainEntity, result ",e),i=o(e),t.setState({detailMainEntity:i})})).catch((function(t){return console.log("EntityEditorComponent::getDetailMainEntity, eroor",t)}))}},{key:"getAllListEntity",value:function(){var t=this,e=this.props.formInfos,n=this.state.listAssociateEntity;console.log("EntityEditorComponent::getAllListEntity, formInfos, listAssociateEntity",e,n),e&&e.fieldsDefinition.forEach((function(e){if("entity"===e.type){var o=e.sourcePromise,i=e.mapEntity,a=e.name;o.then((function(e){console.log("EntityEditorComponent::renderEntityList, result ",e),e&&Array.isArray(e)?(n[a]=[],e.forEach((function(t){return n[a].push(i(t))})),t.setState({listAssociateEntity:n})):console.log("EntityEditorComponent::renderEntityList, resultnot array",e)})).catch((function(t){return console.log("EntityEditorComponent::renderEntityList, itemField, error",e,t)}))}}))}},{key:"renderItem",value:function(t){switch(t.type){case"text":return this.renderInputText(t);case"textarea":return this.renderInputTextArea(t);case"entity":return this.renderEntityList(t);case"boolean":return this.renderSwitch(t)}}},{key:"renderInputText",value:function(t){var e=this,n=this.state.detailMainEntity,o=t.label,i=t.tip,a=t.name,r=t.placeholder;return Object(h.jsx)(c.CCol,{children:Object(h.jsxs)(c.CFormGroup,{children:[Object(h.jsx)(c.CLabel,{htmlFor:a,children:o}),Object(h.jsx)(c.CInput,{type:"text",id:a,name:a,placeholder:r,onChange:function(n){return e.onChangeFieldValue(n.target.value,t)},defaultValue:n[a]}),Object(h.jsx)(c.CFormText,{className:"help-block",children:i})]})})}},{key:"renderInputTextArea",value:function(t){var e=this,n=this.state.detailMainEntity,o=t.label,i=t.tip,a=t.name,r=t.placeholder;return Object(h.jsx)(c.CCol,{children:Object(h.jsxs)(c.CFormGroup,{children:[Object(h.jsx)(c.CLabel,{htmlFor:a,children:o}),Object(h.jsx)(c.CTextarea,{id:a,name:a,rows:"9",placeholder:r,defaultValue:n[a],onChange:function(n){return e.onChangeFieldValue(n.target.value,t)}}),Object(h.jsx)(c.CFormText,{className:"help-block",children:i})]})})}},{key:"renderEntityList",value:function(t){var e=this,n=t.label,o=t.tip,i=t.name,a=t.mapLabelToShow,r=this.state,l=r.listAssociateEntity,s=r.detailMainEntity[i];if(l[i])return Object(h.jsx)(c.CCol,{children:Object(h.jsxs)(c.CFormGroup,{children:[Object(h.jsx)(c.CLabel,{htmlFor:i,children:n}),Object(h.jsxs)(c.CSelect,{custom:!0,name:i,id:i,onChange:function(n){return e.onChangeFieldValue(n.target.value,t)},children:[Object(h.jsx)("option",{value:"0",children:"Please select"}),l[i].map((function(t){return Object(h.jsx)("option",{value:t.id,selected:s===t.id,children:a(t)})}))]}),Object(h.jsx)(c.CFormText,{className:"help-block",children:o})]})})}},{key:"renderSwitch",value:function(t){var e=this,n=this.state.detailMainEntity,o=t.label,i=t.tip,a=t.name,r=(t.placeholder,n[a]);return Object(h.jsx)(c.CCol,{children:Object(h.jsxs)(c.CFormGroup,{children:[Object(h.jsx)(c.CLabel,{htmlFor:a,children:o}),Object(h.jsx)("br",{}),Object(h.jsx)(c.CSwitch,{className:"mx-1",shape:"pill",color:"primary",id:a,name:a,defaultChecked:r,onChange:function(n){return e.onChangeFieldValue(n.target.checked,t)}}),Object(h.jsx)(c.CFormText,{className:"help-block",children:i})]})})}},{key:"onChangeFieldValue",value:function(t,e){var n=e.name,o=this.state.detailMainEntity;console.log("onChangeFieldValue",t,e),o[n]=t,this.setState({detailMainEntity:o,haveChanged:!0})}},{key:"onSave",value:function(){var t=this.state,e=t.haveChanged,n=t.detailMainEntity,o=this.props.formInfos;if(e)o.onSave(n);else{var i=this.state.refModalConfirm;i&&i.show("Error","You do not change anything, you can't save it",(function(){i&&i.onCancel()}),!1)}}}]),n}(s.a.Component);e.a=d},704:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n(187),i=n(188),a=function(){function t(){Object(o.a)(this,t)}return Object(i.a)(t,[{key:"getAllForCurrentUser",value:function(t){return new Promise((function(e,n){fetch("".concat("http://localhost:3000","/").concat(t,"/company/all")).then((function(t){return t.json()})).then((function(t){return e(t)}),(function(t){return n(t)}))}))}},{key:"getDetail",value:function(t,e){return new Promise((function(n,o){fetch("".concat("http://localhost:3000","/").concat(t,"/company/item/").concat(e)).then((function(t){return t.json()})).then((function(t){return n(t)}),(function(t){return o(t)}))}))}},{key:"createOrUpdate",value:function(t,e){var n=e.id?"edit":"add";console.log("JobAppService::createOrUpdate",e,n);var o="edit"==n?"PUT":"POST",i="edit"==n?e.id:"";return new Promise((function(n,a){fetch("".concat("http://localhost:3000","/").concat(t,"/company/item/").concat(i),{method:o,headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()})).then((function(t){return n(t)}),(function(t){return a(t)}))}))}}]),t}()},789:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));var o=n(192),i=n(187),a=n(188),r=n(189),c=n(190),l=n(1),s=n.n(l),u=n(698),h=n(704),d=n(24),p=function(t){Object(r.a)(n,t);var e=Object(c.a)(n);function n(t){var o;return Object(i.a)(this,n),(o=e.call(this,t)).state={listJobapp:[],listJobappForDatatable:[],fields:[],isoLang:"fr"},o.companyService=new h.a,o}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.isoLang;this.setState({isoLang:t})}},{key:"render",value:function(){var t=this.setupFormInfo();return Object(d.jsx)(u.a,{formInfos:t})}},{key:"setupFormInfo",value:function(){var t=this,e=this.props.match.params.id,n="slug",i="name",a="description",r="alreadyWorkWith",c="urlWebsite";return{formTitle:"Company",detailPromised:e?this.companyService.getDetail(this.state.isoLang,e):null,mappingDetail:function(t){var e,l=t.langValues&&t.langValues[0];return e={id:t.id},Object(o.a)(e,n,t.slug),Object(o.a)(e,i,l?l.name:"(empty)"),Object(o.a)(e,a,l?l.description:"(empty)"),Object(o.a)(e,r,t.alreadyWorkWith),Object(o.a)(e,c,t.urlWebsite),e},onSave:function(e){console.log("CompanyEdit::setupFormInfo::onSave, detailMainEntity",e),t.companyService.createOrUpdate(t.state.isoLang,e).then((function(e){e&&e.code&&"SUCCESS"===e.code?t.props.history.push("/".concat(t.state.isoLang,"/company/")):console.error("CompanyEdit::setupFormInfo::onSave, result not success",e)})).catch((function(t){return console.log("JoAppEdit::setupFormInfo::onSave, error",t)}))},fieldsDefinition:[{name:n,type:"text",value:"",placeholder:"Slug of company",tip:"Slug, unique, can be lowercase or uppcase",label:"Slug",formPosition:{row:1,col:1}},{name:r,type:"boolean",value:"",placeholder:"Already Work With",tip:"Already Work With",label:"Already Work With",formPosition:{row:1,col:2}},{name:i,type:"text",value:"",placeholder:"Name of company",tip:"Name of company",label:"Name",formPosition:{row:2,col:1}},{name:c,type:"text",value:"",placeholder:"Url Website",tip:"Url Website",label:"Url Website",formPosition:{row:2,col:2}},{name:a,type:"textarea",value:"",placeholder:"Description of company",tip:"Description of company",label:"Description",formPosition:{row:3,col:1}}]}}}]),n}(s.a.Component)}}]);