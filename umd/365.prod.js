"use strict";(globalThis.webpackChunktinode_webapp=globalThi.webpackChunktinode_webapp||[]).push([[365],{1365:(e,a,t)=>{t.r(a),t.d(a,{default:()=>g});var d=t(7363),l=t.n(d),i=t(916),o=t(6198),s=t(7432),c=t(955),n=t(8405),r=t(8962),m=t(2078);const h=(0,i.defineMessages)({password_reset_email_sent:{id:"password_reset_email_sent",defaultMessage:[{type:0,value:"An email with security code has been sent."}]},password_reset_sms_sent:{id:"password_reset_sms_sent",defaultMessage:[{type:0,value:"A text message with security code has been sent."}]}});class u extends l().PureComponent{constructor(e){super(e),this.state={code:"",tel:"",email:"",sent:!1},this.handleSubmit=this.handleSubmit.bind(this),this.handleEmailChange=this.handleEmailChange.bind(this),this.handlePhoneChange=this.handlePhoneChange.bind(this),this.handleCodeChange=this.handleCodeChange.bind(this)}static formatPhoneNumber(e){let a;try{a=(0,o.h)(e)}catch(e){}return a?a.formatInternational():e}handleEmailChange(e){this.setState({email:e.target.value})}handlePhoneChange(e){this.setState({tel:e})}handleCodeChange(e){this.setState({code:e.target.value.replace(/[^\d]/g,"")})}handleSubmit(e){e.preventDefault();const a="email"==this.props.method?this.state.email:this.state.tel;if(this.state.code)this.props.onError(null),this.props.onCredConfirm(this.props.method,this.state.code);else if(a){this.props.onCredAdd(this.props.method,a),this.setState({sent:!0});const e="email"==this.props.method?h.password_reset_email_sent:h.password_reset_sms_sent;this.props.onError(this.props.intl.formatMessage(e),"info")}}render(){const e=this.state.sent||!this.props.done,a=e?this.state.tel||this.state.email:this.props.val,t="tel"==this.props.method?u.formatPhoneNumber(a):a,d=l().createElement(l().Fragment,null,l().createElement("div",{className:"panel-form-row"},l().createElement("label",{className:"large"},l().createElement(i.FormattedMessage,{id:"change_email",defaultMessage:[{type:0,value:"Change email"}]}))),l().createElement("div",{className:"group"},l().createElement("label",{className:"small gray"},l().createElement(i.FormattedMessage,{id:"current_email",defaultMessage:[{type:0,value:"Current email"}]})))),o=l().createElement(l().Fragment,null,l().createElement("div",{className:"panel-form-row"},l().createElement("label",{className:"large"},l().createElement(i.FormattedMessage,{id:"change_phone",defaultMessage:[{type:0,value:"Change phone number"}]}))),l().createElement("div",{className:"group"},l().createElement("label",{className:"small gray"},l().createElement(i.FormattedMessage,{id:"current_phone",defaultMessage:[{type:0,value:"Current phone number"}]})))),s=l().createElement("label",{className:"small gray"},l().createElement(i.FormattedMessage,{id:"new_email",defaultMessage:[{type:0,value:"New email"}]})),c=l().createElement(l().Fragment,null,l().createElement("div",{className:"group"},s),l().createElement("div",{className:"group"},l().createElement(i.FormattedMessage,{id:"email_prompt",defaultMessage:[{type:0,value:"Email, e.g. jdoe@example.com"}]},(e=>l().createElement("input",{type:"email",placeholder:e,autoComplete:"email",value:this.state.email,onChange:this.handleEmailChange,required:!0}))))),n=l().createElement("label",{className:"small gray"},l().createElement(i.FormattedMessage,{id:"new_phone_number",defaultMessage:[{type:0,value:"New phone number"}]})),r=l().createElement(l().Fragment,null,l().createElement("div",{className:"group"},n),l().createElement("div",{className:"panel-form-row"},l().createElement(m.Z,{autoFocus:!0,onShowCountrySelector:this.props.onShowCountrySelector,onSubmit:this.handlePhoneChange}))),h=l().createElement(l().Fragment,null,l().createElement("div",{className:"group"},l().createElement("label",{className:"small gray"},l().createElement(i.FormattedMessage,{id:"enter_confirmation_code_prompt",defaultMessage:[{type:0,value:"Confirmation code"}]}))),l().createElement("div",{className:"group"},l().createElement(i.FormattedMessage,{id:"numeric_confirmation_code_prompt",defaultMessage:[{type:0,value:"Numbers only"}]},(e=>l().createElement("input",{type:"text",placeholder:e,maxLength:10,value:this.state.code,onChange:this.handleCodeChange,required:!0})))));return l().createElement("form",{className:"panel-form-column",onSubmit:this.handleSubmit},e?"email"==this.props.method?s:"tel"==this.props.method?n:null:"email"==this.props.method?d:"tel"==this.props.method?o:null,l().createElement("div",{className:"panel-form-row"},l().createElement("tt",{className:"quoted"},t)),e?null:"email"==this.props.method?c:"tel"==this.props.method?r:null,e?h:null,l().createElement("div",{className:"dialog-buttons"},l().createElement("button",{className:"secondary",onClick:this.props.onCancel},l().createElement(i.FormattedMessage,{id:"button_cancel",defaultMessage:[{type:0,value:"Cancel"}]})),l().createElement("button",{className:"primary",type:"submit"},l().createElement(i.FormattedMessage,{id:"button_ok",defaultMessage:[{type:0,value:"OK"}]}))))}}const p=(0,i.injectIntl)(u);function E(e,a){return e&&e.substring(0,a)}class g extends l().Component{constructor(e){super(e);const a=this.props.tinode.getMeTopic();this.state={fullName:E(a.public?a.public.fn:void 0,r.S8),description:E(a.public?a.public.note:void 0,r.EI),avatar:(0,n.PD)(a.public?a.public.photo:null),credentials:a.getCredentials()||[],credEdit:void 0}}componentDidMount(){const e=this.props.tinode.getMeTopic();e.onCredsUpdated=a=>this.setState({credentials:e.getCredentials()})}componentWillUnmount(){this.props.tinode.getMeTopic().onCredsUpdated=null}render(){if(this.state.credEdit)return l().createElement(p,{method:this.state.credEdit.meth,val:this.state.credEdit.val,done:this.state.credEdit.done,onShowCountrySelector:this.props.onShowCountrySelector,onCredAdd:this.props.onCredAdd,onCredConfirm:this.props.onCredConfirm,onCancel:e=>this.setState({credEdit:void 0}),onError:this.props.onError});const e={};this.state.credentials.forEach((a=>{a.done&&(e[a.meth]=(e[a.meth]||0)+1)}));const a=[];return this.state.credentials.forEach(((t,d)=>{if(!["email","tel"].includes(t.meth))return;let i=t.val;if("tel"==t.meth){const e=(0,o.h)(t.val);i=e?e.formatInternational():t.val}a.push(l().createElement("div",{className:"group quoted",key:d},l().createElement("tt",{className:"clickable",onClick:e=>{e.preventDefault(),this.setState({credEdit:t})}},i),l().createElement("span",null," ",t.done?null:l().createElement("i",{className:"material-icons"},"pending")," ",!t.done||e[t.meth]>1||this.props.reqCredMethod!=t.meth?l().createElement("a",{href:"#",onClick:e=>{e.preventDefault(),this.props.onCredDelete(t.meth,t.val)}},l().createElement("i",{className:"material-icons"},"delete")):null)))})),a.length>0&&a.unshift(l().createElement("label",{className:"small",key:"title"},l().createElement(i.FormattedMessage,{id:"label_user_contacts",defaultMessage:[{type:0,value:"Contacts"}]}))),l().createElement("div",{className:"scrollable-panel"},l().createElement("div",{className:"panel-form-column"},l().createElement("a",{href:"#",className:"flat-button float-right",onClick:e=>{e.preventDefault(),this.props.onNavigate("general")}},l().createElement("i",{className:"material-icons"},"edit")," ",l().createElement(i.FormattedMessage,{id:"button_edit",defaultMessage:[{type:0,value:"Edit"}]})),l().createElement("center",null,l().createElement(s.Z,{tinode:this.props.tinode,avatar:this.state.avatar,readOnly:!0,uid:this.props.myUserId,title:this.state.fullName})),l().createElement("div",{className:"group"},l().createElement("label",{className:"small"},l().createElement(i.FormattedMessage,{id:"label_your_name",defaultMessage:[{type:0,value:"Your name"}]})),l().createElement("div",{className:"large ellipsized"},this.state.fullName)),l().createElement("div",{className:"group"},l().createElement("label",{className:"small"},l().createElement(i.FormattedMessage,{id:"label_user_id",defaultMessage:[{type:0,value:"ID:"}]}))," ",l().createElement("tt",null,this.props.myUserId)),l().createElement("div",{className:"group"},l().createElement(c.Z,{trustedBadges:this.props.trustedBadges})),this.state.description?l().createElement("div",{className:"group"},l().createElement("label",{className:"small"},l().createElement(i.FormattedMessage,{id:"label_description",defaultMessage:[{type:0,value:"Description"}]})),l().createElement("div",{className:"quoted"},this.state.description)):null),l().createElement("div",{className:"hr"}),l().createElement("div",{className:"panel-form-column"},l().createElement("div",{className:"group"},a)),l().createElement("div",{className:"hr"}),l().createElement("div",{className:"panel-form-column"},l().createElement("a",{href:"#",className:"flat-button",onClick:e=>{e.preventDefault(),this.props.onNavigate("notif")}},l().createElement("i",{className:"material-icons"},"notifications")," ",l().createElement(i.FormattedMessage,{id:"sidepanel_title_acc_notifications",defaultMessage:[{type:0,value:"Notifications"}]})),l().createElement("a",{href:"#",className:"flat-button",onClick:e=>{e.preventDefault(),this.props.onNavigate("security")}},l().createElement("i",{className:"material-icons"},"security")," ",l().createElement(i.FormattedMessage,{id:"button_security",defaultMessage:[{type:0,value:"Security"}]})),l().createElement("a",{href:"#",className:"flat-button",onClick:e=>{e.preventDefault(),this.props.onNavigate("support")}},l().createElement("i",{className:"material-icons"},"contact_support")," ",l().createElement(i.FormattedMessage,{id:"sidepanel_title_acc_support",defaultMessage:[{type:0,value:"Support"}]}))))}}},2078:(e,a,t)=>{t.d(a,{Z:()=>p});var d=t(7363),l=t.n(d),i=t(916),o=t(306),s=t(6198),c=t(2689),n=t(6359),r=t(6670),m=t(3905);const h=(0,i.defineMessages)({mobile_number_required:{id:"mobile_number_required",defaultMessage:[{type:0,value:"Mobile phone number required"}]}});class u extends l().PureComponent{constructor(e){super(e),this.codeMap={},r.forEach((e=>{this.codeMap[e.code]=e.dial}));const a=e.countryCode||"US",t=this.codeMap[a];this.state={countryCode:a,dialCode:t,localNumber:"",placeholderNumber:this.placeholderNumber(a,t)},this.handleChange=this.handleChange.bind(this),this.handleFinished=this.handleFinished.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.showCountrySelector=this.showCountrySelector.bind(this)}handleChange(e){const a=`+${this.state.dialCode}`;let t=(new o.R).input(`${a}${this.filterNumber(e.target.value)}`);t=t.substring(a.length).trim(),this.setState({localNumber:t})}handleFinished(e){e.preventDefault();const a=`${this.state.dialCode}${this.state.localNumber.trim()}`.replace(/[^\d]/g,"");let t=null;try{t=(0,s.h)(`+${a}`)}catch(e){}t&&t.isValid()?(this.inputField.setCustomValidity(""),this.props.onSubmit(t.format("E.164"))):this.inputField.setCustomValidity(this.props.intl.formatMessage(h.mobile_number_required))}handleKeyDown(e){"Enter"===e.key&&this.handleFinished(e)}showCountrySelector(){this.props.onShowCountrySelector(this.state.countryCode,this.state.dialCode,((e,a)=>{this.setState({countryCode:e,dialCode:a,placeholderNumber:this.placeholderNumber(e,a)})}))}filterNumber(e){return e?e.replace(/[^-\s().\d]/g,""):e}placeholderNumber(e,a){const t=(0,c.L)(e,n.Z);return t?t.formatInternational().substring(a.length+1).trim():"123 0123"}render(){return l().createElement(l().Fragment,null,l().createElement("span",{className:"dial-code",onClick:this.showCountrySelector},l().createElement("span",{className:"country-flag"},(0,m.Yu)(this.state.countryCode)," "),"+",this.state.dialCode," "),l().createElement("input",{type:"tel",ref:e=>{this.inputField=e},placeholder:this.state.placeholderNumber,value:this.state.localNumber,onChange:this.handleChange,maxLength:17,onKeyDown:this.handleKeyDown,onBlur:this.handleFinished,required:!0,autoFocus:this.props.autoFocus}))}}const p=(0,i.injectIntl)(u)},6670:e=>{e.exports=JSON.parse('[{"dial":"93","code":"AF"},{"dial":"355","code":"AL"},{"dial":"213","code":"DZ"},{"dial":"1-684","code":"AS"},{"dial":"376","code":"AD"},{"dial":"244","code":"AO"},{"dial":"1-264","code":"AI"},{"dial":"672","code":"AQ"},{"dial":"1-268","code":"AG"},{"dial":"54","code":"AR"},{"dial":"374","code":"AM"},{"dial":"297","code":"AW"},{"dial":"61","code":"AU"},{"dial":"43","code":"AT"},{"dial":"994","code":"AZ"},{"dial":"1-242","code":"BS"},{"dial":"973","code":"BH"},{"dial":"880","code":"BD"},{"dial":"1-246","code":"BB"},{"dial":"375","code":"BY"},{"dial":"32","code":"BE"},{"dial":"501","code":"BZ"},{"dial":"229","code":"BJ"},{"dial":"1-441","code":"BM"},{"dial":"975","code":"BT"},{"dial":"591","code":"BO"},{"dial":"387","code":"BA"},{"dial":"267","code":"BW"},{"dial":"55","code":"BR"},{"dial":"246","code":"IO"},{"dial":"1-284","code":"VG"},{"dial":"673","code":"BN"},{"dial":"359","code":"BG"},{"dial":"226","code":"BF"},{"dial":"257","code":"BI"},{"dial":"855","code":"KH"},{"dial":"237","code":"CM"},{"dial":"1","code":"CA"},{"dial":"238","code":"CV"},{"dial":"1-345","code":"KY"},{"dial":"236","code":"CF"},{"dial":"235","code":"TD"},{"dial":"56","code":"CL"},{"dial":"86","code":"CN"},{"dial":"61","code":"CX"},{"dial":"61","code":"CC"},{"dial":"57","code":"CO"},{"dial":"269","code":"KM"},{"dial":"682","code":"CK"},{"dial":"506","code":"CR"},{"dial":"385","code":"HR"},{"dial":"53","code":"CU"},{"dial":"599","code":"CW"},{"dial":"357","code":"CY"},{"dial":"420","code":"CZ"},{"dial":"243","code":"CD"},{"dial":"45","code":"DK"},{"dial":"253","code":"DJ"},{"dial":"1-767","code":"DM"},{"dial":"1-809, 1-829, 1-849","code":"DO"},{"dial":"670","code":"TL"},{"dial":"593","code":"EC"},{"dial":"20","code":"EG"},{"dial":"503","code":"SV"},{"dial":"240","code":"GQ"},{"dial":"291","code":"ER"},{"dial":"372","code":"EE"},{"dial":"251","code":"ET"},{"dial":"500","code":"FK"},{"dial":"298","code":"FO"},{"dial":"679","code":"FJ"},{"dial":"358","code":"FI"},{"dial":"33","code":"FR"},{"dial":"689","code":"PF"},{"dial":"241","code":"GA"},{"dial":"220","code":"GM"},{"dial":"995","code":"GE"},{"dial":"49","code":"DE"},{"dial":"233","code":"GH"},{"dial":"350","code":"GI"},{"dial":"30","code":"GR"},{"dial":"299","code":"GL"},{"dial":"1-473","code":"GD"},{"dial":"1-671","code":"GU"},{"dial":"502","code":"GT"},{"dial":"44-1481","code":"GG"},{"dial":"224","code":"GN"},{"dial":"245","code":"GW"},{"dial":"592","code":"GY"},{"dial":"509","code":"HT"},{"dial":"504","code":"HN"},{"dial":"852","code":"HK"},{"dial":"36","code":"HU"},{"dial":"354","code":"IS"},{"dial":"91","code":"IN"},{"dial":"62","code":"ID"},{"dial":"98","code":"IR"},{"dial":"964","code":"IQ"},{"dial":"353","code":"IE"},{"dial":"44-1624","code":"IM"},{"dial":"972","code":"IL"},{"dial":"39","code":"IT"},{"dial":"225","code":"CI"},{"dial":"1-876","code":"JM"},{"dial":"81","code":"JP"},{"dial":"44-1534","code":"JE"},{"dial":"962","code":"JO"},{"dial":"7, 997","code":"KZ"},{"dial":"254","code":"KE"},{"dial":"686","code":"KI"},{"dial":"383","code":"XK"},{"dial":"965","code":"KW"},{"dial":"996","code":"KG"},{"dial":"856","code":"LA"},{"dial":"371","code":"LV"},{"dial":"961","code":"LB"},{"dial":"266","code":"LS"},{"dial":"231","code":"LR"},{"dial":"218","code":"LY"},{"dial":"423","code":"LI"},{"dial":"370","code":"LT"},{"dial":"352","code":"LU"},{"dial":"853","code":"MO"},{"dial":"389","code":"MK"},{"dial":"261","code":"MG"},{"dial":"265","code":"MW"},{"dial":"60","code":"MY"},{"dial":"960","code":"MV"},{"dial":"223","code":"ML"},{"dial":"356","code":"MT"},{"dial":"692","code":"MH"},{"dial":"222","code":"MR"},{"dial":"230","code":"MU"},{"dial":"262","code":"YT"},{"dial":"52","code":"MX"},{"dial":"691","code":"FM"},{"dial":"373","code":"MD"},{"dial":"377","code":"MC"},{"dial":"976","code":"MN"},{"dial":"382","code":"ME"},{"dial":"1-664","code":"MS"},{"dial":"212","code":"MA"},{"dial":"258","code":"MZ"},{"dial":"95","code":"MM"},{"dial":"264","code":"NA"},{"dial":"674","code":"NR"},{"dial":"977","code":"NP"},{"dial":"31","code":"NL"},{"dial":"599","code":"CW"},{"dial":"687","code":"NC"},{"dial":"64","code":"NZ"},{"dial":"505","code":"NI"},{"dial":"227","code":"NE"},{"dial":"234","code":"NG"},{"dial":"683","code":"NU"},{"dial":"850","code":"KP"},{"dial":"1-670","code":"MP"},{"dial":"47","code":"NO"},{"dial":"968","code":"OM"},{"dial":"92","code":"PK"},{"dial":"680","code":"PW"},{"dial":"970","code":"PS"},{"dial":"507","code":"PA"},{"dial":"675","code":"PG"},{"dial":"595","code":"PY"},{"dial":"51","code":"PE"},{"dial":"63","code":"PH"},{"dial":"64","code":"PN"},{"dial":"48","code":"PL"},{"dial":"351","code":"PT"},{"dial":"1-787, 1-939","code":"PR"},{"dial":"974","code":"QA"},{"dial":"242","code":"CG"},{"dial":"262","code":"RE"},{"dial":"40","code":"RO"},{"dial":"7","code":"RU"},{"dial":"250","code":"RW"},{"dial":"590","code":"BL"},{"dial":"290","code":"SH"},{"dial":"1-869","code":"KN"},{"dial":"1-758","code":"LC"},{"dial":"590","code":"MF"},{"dial":"508","code":"PM"},{"dial":"1-784","code":"VC"},{"dial":"685","code":"WS"},{"dial":"378","code":"SM"},{"dial":"239","code":"ST"},{"dial":"966","code":"SA"},{"dial":"221","code":"SN"},{"dial":"381","code":"RS"},{"dial":"248","code":"SC"},{"dial":"232","code":"SL"},{"dial":"65","code":"SG"},{"dial":"1-721","code":"SX"},{"dial":"421","code":"SK"},{"dial":"386","code":"SI"},{"dial":"677","code":"SB"},{"dial":"252","code":"SO"},{"dial":"27","code":"ZA"},{"dial":"82","code":"KR"},{"dial":"211","code":"SS"},{"dial":"34","code":"ES"},{"dial":"94","code":"LK"},{"dial":"249","code":"SD"},{"dial":"597","code":"SR"},{"dial":"47","code":"SJ"},{"dial":"268","code":"SZ"},{"dial":"46","code":"SE"},{"dial":"41","code":"CH"},{"dial":"963","code":"SY"},{"dial":"886","code":"TW"},{"dial":"992","code":"TJ"},{"dial":"255","code":"TZ"},{"dial":"66","code":"TH"},{"dial":"228","code":"TG"},{"dial":"690","code":"TK"},{"dial":"676","code":"TO"},{"dial":"1-868","code":"TT"},{"dial":"216","code":"TN"},{"dial":"90","code":"TR"},{"dial":"993","code":"TM"},{"dial":"1-649","code":"TC"},{"dial":"688","code":"TV"},{"dial":"1-340","code":"VI"},{"dial":"256","code":"UG"},{"dial":"380","code":"UA"},{"dial":"971","code":"AE"},{"dial":"44","code":"GB"},{"dial":"1","code":"US"},{"dial":"598","code":"UY"},{"dial":"998","code":"UZ"},{"dial":"678","code":"VU"},{"dial":"379","code":"VA"},{"dial":"58","code":"VE"},{"dial":"84","code":"VN"},{"dial":"681","code":"WF"},{"dial":"212","code":"EH"},{"dial":"967","code":"YE"},{"dial":"260","code":"ZM"},{"dial":"263","code":"ZW"}]')}}]);
//# sourceMappingURL=365.prod.js.map
