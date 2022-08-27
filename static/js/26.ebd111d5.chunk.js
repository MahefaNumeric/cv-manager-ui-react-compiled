(this["webpackJsonp@mahefa/cvmanager-ui"]=this["webpackJsonp@mahefa/cvmanager-ui"]||[]).push([[26],{689:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i=function(e,t){var n=null;if("string"===typeof e)n=e;else if(Array.isArray(e))n=r(e);else{if("undefined"!=typeof e)throw console.log("StringUtils::convertToStringAndToQueryParms, ids param type unkown",e),new Error("StringUtils::convertToStringAndToQueryParms, ids param type unkown");n=""}return void 0!==t&&null!==t?n?"".concat(t,"=").concat(n):"":n},r=function(e){return e.length>0?e.join(","):void 0}},697:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(187),r=n(188),o=n(689),l=function(){function e(){Object(i.a)(this,e)}return Object(r.a)(e,[{key:"getAllForCurrentUser",value:function(e,t){var n=Object(o.a)(t,"excludesIds");return new Promise((function(t,i){fetch("".concat("https://api.manager.cv.wecours.com","/").concat(e,"/skill/all?").concat(n)).then((function(e){return e.json()})).then((function(e){return t(e)}),(function(e){return i(e)}))}))}},{key:"getTrendForCurrentUser",value:function(e,t){var n=Object(o.a)(t,"excludesIds");return new Promise((function(t,i){fetch("".concat("https://api.manager.cv.wecours.com","/").concat(e,"/skill/trend?").concat(n)).then((function(e){return e.json()})).then((function(e){return t(e)}),(function(e){return i(e)}))}))}},{key:"getDetail",value:function(e,t){return new Promise((function(n,i){fetch("".concat("https://api.manager.cv.wecours.com","/").concat(e,"/skill/item/").concat(t)).then((function(e){return e.json()})).then((function(e){return n(e)}),(function(e){return i(e)}))}))}},{key:"createOrUpdate",value:function(e,t){var n=t.id?"edit":"add";console.log("SkillService::createOrUpdate",t,n);var i="edit"==n?"PUT":"POST",r="edit"==n?t.id:"";return new Promise((function(n,o){fetch("".concat("https://api.manager.cv.wecours.com","/").concat(e,"/skill/item/").concat(r),{method:i,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return n(e)}),(function(e){return o(e)}))}))}}]),e}()},717:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(187),r=n(188),o=function(){function e(){Object(i.a)(this,e)}return Object(r.a)(e,[{key:"getAll",value:function(e){return new Promise((function(t,n){fetch("".concat("https://api.manager.cv.wecours.com","/").concat(e,"/skill/group/all")).then((function(e){return e.json()})).then((function(e){return t(e)}),(function(e){return n(e)}))}))}},{key:"getDetail",value:function(e,t){return new Promise((function(n,i){fetch("".concat("https://api.manager.cv.wecours.com","/").concat(e,"/skill/group/").concat(t)).then((function(e){return e.json()})).then((function(e){return n(e)}),(function(e){return i(e)}))}))}},{key:"createOrUpdate",value:function(e,t){throw new Error("createCore::createCore not implemented")}}]),e}()},782:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var i=n(187),r=n(188),o=n(189),l=n(190),c=n(1),a=n.n(c),s=n(683),u=(n(687),n(697)),d=n(717),h=n(24),p=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={idSkill:null,mode:"add",isoLang:"fr",skill:{},skillDetailForForm:{},listGroup:[]},r.skillService=new u.a,r.skillGroupService=new d.a,r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match,n=t.params.isoLang,i=t.params.id;console.log("componentDidMount::idSkill",i);var r=null;void 0===i?r="add":(r="edit",this.skillService.getDetail(n,i).then((function(t){return e.setupDataToShow(t)}))),this.skillGroupService.getAll(n).then((function(t){return e.setupDataSkillToShow(t)})),this.setState({isoLang:n,mode:r})}},{key:"render",value:function(){var e=this;this.props.match;return Object(h.jsxs)("div",{children:[Object(h.jsxs)(s.CRow,{children:[Object(h.jsx)(s.CCol,{lg:9}),Object(h.jsx)(s.CCol,{lg:3,children:Object(h.jsx)(s.CButton,{block:!0,variant:"outline",color:"success",onClick:function(){return e.onSaveClick()},children:"Save"})})]}),Object(h.jsx)("br",{}),Object(h.jsx)(s.CRow,{children:Object(h.jsx)(s.CCol,{lg:12,children:this.renderForm()})})]})}},{key:"renderForm",value:function(){var e=this,t=this.state,n=t.skillDetailForForm,i=t.listGroup,r=t.skill;return console.log("SkillEdit::renderForm",r,n),Object(h.jsxs)(s.CCard,{children:[Object(h.jsx)(s.CCardHeader,{children:"Skill detail"}),Object(h.jsxs)(s.CCardBody,{children:[Object(h.jsxs)(s.CRow,{children:[Object(h.jsx)(s.CCol,{children:Object(h.jsxs)(s.CFormGroup,{children:[Object(h.jsx)(s.CLabel,{htmlFor:"slug",children:"Slug"}),Object(h.jsx)(s.CInput,{id:"slug",placeholder:"Enter your slug",required:!0,defaultValue:null===n||void 0===n?void 0:n.slug,onChange:function(t){return e.handleChange_Slug(t.target.value)}})]})}),Object(h.jsx)(s.CCol,{children:Object(h.jsxs)(s.CFormGroup,{children:[Object(h.jsx)(s.CLabel,{htmlFor:"skill-group",children:"Group"}),Object(h.jsxs)(s.CSelect,{custom:!0,name:"select",id:"skill-group",onChange:function(t){return e.handleChange_Group(t.target.value)},children:[Object(h.jsx)("option",{value:"0",children:"Please select"}),i.map((function(e){return Object(h.jsx)("option",{value:e.id,selected:e.id==(r&&r.group&&r.group.id),children:e.title})}))]})]})})]}),Object(h.jsxs)(s.CRow,{children:[Object(h.jsx)(s.CCol,{children:Object(h.jsxs)(s.CFormGroup,{children:[Object(h.jsx)(s.CLabel,{htmlFor:"slug",children:"Title"}),Object(h.jsx)(s.CInput,{id:"title",placeholder:"Enter your Title",required:!0,defaultValue:null===n||void 0===n?void 0:n.title,onChange:function(t){return e.handleChange_Title(t.target.value)}})]})}),Object(h.jsx)(s.CCol,{children:Object(h.jsxs)(s.CRow,{children:[Object(h.jsx)(s.CCol,{children:Object(h.jsxs)(s.CFormGroup,{children:[Object(h.jsx)(s.CLabel,{htmlFor:"slug",children:"Note"}),Object(h.jsx)(s.CInput,{type:"number",name:"description",id:"description",placeholder:"Note ...",min:"0",max:"5"})]})}),Object(h.jsx)(s.CCol,{children:Object(h.jsxs)(s.CFormGroup,{children:[Object(h.jsx)(s.CLabel,{htmlFor:"slug",children:"Is Trend"}),Object(h.jsx)("br",{}),Object(h.jsx)(s.CSwitch,{className:"mx-1",shape:"pill",color:"primary",id:"id",name:"name",defaultChecked:!1})]})})]})})]}),Object(h.jsx)(s.CRow,{children:Object(h.jsx)(s.CCol,{children:Object(h.jsxs)(s.CFormGroup,{children:[Object(h.jsx)(s.CLabel,{htmlFor:"slug",children:"Description"}),Object(h.jsx)(s.CTextarea,{name:"description",id:"description",rows:"9",placeholder:"Description ...",defaultValue:null===n||void 0===n?void 0:n.description,onChange:function(t){return e.handleChange_Description(t.target.value)}})]})})})]})]})}},{key:"setupDataToShow",value:function(e){console.log("SkillEdit::setupDataToShow",e);var t=e.langValues?e.langValues[0]:void 0,n={id:e.id,slug:e.slug,title:t?null===t||void 0===t?void 0:t.title:"(empty)",description:t?null===t||void 0===t?void 0:t.description:"(empty)"};this.setState({skill:e,skillDetailForForm:n})}},{key:"setupDataSkillToShow",value:function(e){console.log("SkillEdit::setupDataSkillToShow, listSkillGroupResult",e);var t=[];e.forEach((function(e){t.push({id:e.id,slug:e.slug,title:e.langValues[0].title,description:e.langValues[0].description})})),console.log("SkillEdit::setupDataSkillToShow, listGroup:",t),this.setState({listGroup:t})}},{key:"onSaveClick",value:function(){var e=this,t=this.state.skillDetailForForm,n=(this.props.match,t),i=this.state.isoLang;this.skillService.createOrUpdate(i,n).then((function(t){var n,r=null===t||void 0===t||null===(n=t.savedMainEntity)||void 0===n?void 0:n.id;console.log("SkillService::onSaveClick",t,r),"SUCCESS"===t.code&&e.props.history.push("/".concat(i,"/skill/"))}))}},{key:"handleChange_Slug",value:function(e){var t=this.state.skillDetailForForm;t.slug=e,this.setState({skillDetailForForm:t})}},{key:"handleChange_Group",value:function(e){var t=this.state.skillDetailForForm;t.idGroup=e,this.setState({skillDetailForForm:t})}},{key:"handleChange_Title",value:function(e){var t=this.state.skillDetailForForm;t.title=e,this.setState({skillDetailForForm:t})}},{key:"handleChange_Description",value:function(e){var t=this.state.skillDetailForForm;t.description=e,this.setState({skillDetailForForm:t})}}]),n}(a.a.Component)}}]);