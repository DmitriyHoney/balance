(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[4],{226:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(56);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(s){r=!0,o=s}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},228:function(e,t,a){e.exports=a.p+"static/media/default-user.8931c0d8.jpg"},229:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return u}));var n=a(250),r=a(0),o=a.n(r),l=a(230),c=a.n(l),s=function(e){return function(t){var a=t.input,r=t.meta,l=Object(n.a)(t,["input","meta"]),s=r.touched&&r.error;return o.a.createElement("div",{className:c.a.formControl+" "+(s?c.a.error:"")},o.a.createElement("div",null,o.a.createElement(e,Object.assign({},a,l))),s&&o.a.createElement("span",null,r.error))}},i=s("input"),u=s("textarea")},230:function(e,t,a){e.exports={formControl:"FormsControls_formControl__2RQcO",error:"FormsControls_error__2AXLL"}},231:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return e||"number"===typeof e?void 0:"Required"}},236:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(31),r=a(32),o=a(34),l=a(33),c=a(0),s=a.n(c),i=a(21),u=a(6),m=function(e){var t=function(t){Object(o.a)(c,t);var a=Object(l.a)(c);function c(){return Object(n.a)(this,c),a.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(u.a,{to:"/login"})}}]),c}(s.a.Component);return Object(i.b)((function(e){return{isAuth:e.authPage.isAuth}}),{})(t)}},251:function(e,t,a){e.exports={profileCardWrap:"ProfileUserCard_profileCardWrap__2b2zk",info:"ProfileUserCard_info__2eyKq",jobTrue:"ProfileUserCard_jobTrue__2koJX",jobFalse:"ProfileUserCard_jobFalse__3sgM1",fullName:"ProfileUserCard_fullName__3abl5",aboutMe:"ProfileUserCard_aboutMe__1XZSa",lookingJob:"ProfileUserCard_lookingJob__3-eto",lookingJobDescr:"ProfileUserCard_lookingJobDescr__3dwQ5"}},252:function(e,t,a){e.exports={avatarWrap:"LargeAvatar_avatarWrap__3NBG2",overlay:"LargeAvatar_overlay__W1S5X",loadFile:"LargeAvatar_loadFile__3qT1L"}},253:function(e,t,a){e.exports={statusWrap:"UserStatus_statusWrap__2jgGZ",editModeStyle:"UserStatus_editModeStyle__1TVoM"}},254:function(e,t,a){e.exports={section:"SocialBlock_section__3IRml"}},255:function(e,t,a){e.exports={section:"EditProfile_section__1vCv6"}},305:function(e,t,a){"use strict";a.r(t);var n=a(31),r=a(32),o=a(34),l=a(33),c=a(0),s=a.n(c),i=a(14),u=a(21),m=a(70),f=a(28),p=a(6),b=a(251),d=a.n(b),h=a(226),g=a(228),v=a.n(g),E=a(252),y=a.n(E),P=a(55),k=function(e){var t=Object(c.useState)(!1),a=Object(h.a)(t,2),n=a[0],r=a[1];Object(c.useEffect)((function(){r(!1)}),[e.src]);return n?s.a.createElement("div",{className:y.a.avatarWrap},s.a.createElement(P.a,null)):s.a.createElement("div",{className:y.a.avatarWrap},s.a.createElement("img",{src:e.src||v.a,alt:"Avatar"}),e.isItMyPage&&s.a.createElement("div",{className:y.a.overlay},s.a.createElement("div",{className:y.a.loadFile},s.a.createElement("label",{htmlFor:"avatarFile"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0444\u043e\u0442\u043e"),s.a.createElement("input",{type:"file",id:"avatarFile",onChange:function(t){if(t.target.files.length>0&&("image/jpeg"===t.target.files[0].type||"image/png"===t.target.files[0].type)){r(!0);var a=t.target.files[0];e.setNewProfilePhoto(a)}}}))))},_=a(253),N=a.n(_),j=function(e){var t=e.userStatus,a=Object(c.useState)(e.userStatus),n=Object(h.a)(a,2),r=n[0],o=n[1],l=Object(c.useState)(!1),i=Object(h.a)(l,2),u=i[0],m=i[1];return s.a.createElement("div",{className:"".concat(N.a.statusWrap," ").concat(e.isItMyPage&&N.a.editModeStyle)},u?s.a.createElement("input",{type:"text",onBlur:function(a){var n=a.target.value;n!==t&&e.changeUserStatus(n),m(!1)},autoFocus:!0,value:r,onChange:function(e){o(e.target.value)}}):s.a.createElement("span",{onClick:e.isItMyPage?function(){m(!0)}:function(){}},r||"\u041d\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"))},C=a(254),S=a.n(C),U=function(e){var t=function(e){var t=[],a=0;for(var n in e)if(e[n]&&""!==e[n]){var r=s.a.createElement("div",{key:a++},s.a.createElement("a",{href:e[n]},n));t.push(r)}return t}(e.contacts);return s.a.createElement("div",{className:S.a.section},t)},w=a(255),I=a.n(w),O=a(107),M=a(108),F=a(229),x=a(231),A=Object(M.a)({form:"edit-profile"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement(O.a,{name:"fullName",component:F.a,type:"text",validate:[x.a],placeholder:"Full name"}),s.a.createElement(O.a,{name:"aboutMe",component:F.b,validate:[x.a],placeholder:"About me"}),s.a.createElement(O.a,{name:"lookingForAJob",component:F.a,type:"checkbox",placeholder:"lookingForAJob"}),s.a.createElement(O.a,{name:"lookingForAJobDescription",component:F.b,validate:[x.a],placeholder:"lookingForAJobDescription"}),s.a.createElement("div",null,s.a.createElement("h3",null,"Contacts"),s.a.createElement(O.a,{name:"contacts.github",component:F.a,type:"text",placeholder:"github"}),s.a.createElement(O.a,{name:"contacts.vk",component:F.a,type:"text",placeholder:"vk"}),s.a.createElement(O.a,{name:"contacts.facebook",component:F.a,type:"text",placeholder:"facebook"}),s.a.createElement(O.a,{name:"contacts.instagram",component:F.a,type:"text",placeholder:"instagram"}),s.a.createElement(O.a,{name:"contacts.twitter",component:F.a,type:"text",placeholder:"twitter"}),s.a.createElement(O.a,{name:"contacts.website",component:F.a,type:"text",placeholder:"website"}),s.a.createElement(O.a,{name:"contacts.youtube",component:F.a,type:"text",placeholder:"youtube"}),s.a.createElement(O.a,{name:"contacts.mainLink",component:F.a,type:"text",placeholder:"mainLink"})),s.a.createElement("button",null,"Send"))})),J=function(e){var t=Object(c.useState)(!1),a=Object(h.a)(t,2),n=a[0],r=a[1],o=s.a.createElement("button",{onClick:function(){r(!0)}},"Edit Profile Info"),l=s.a.createElement("button",{onClick:function(){r(!1)},className:I.a.cancel},"Cancel"),i=n?l:o;return e.isItMyPage?s.a.createElement("div",{className:n?I.a.section:""},i,n&&s.a.createElement(A,{onSubmit:function(t){console.log(t),e.setNewUserInfo(t),r(!1)},initialValues:e.initialValues})):s.a.createElement(s.a.Fragment,null)},T=function(e){var t=e.userData,a=t.aboutMe,n=Object.assign({},t.contacts),r=t.lookingForAJob,o=t.lookingForAJobDescription,l=t.fullName,c=t.photos;return s.a.createElement("div",{className:d.a.profileCardWrap},s.a.createElement(k,{src:c.large,isItMyPage:e.isItMyPage,setNewProfilePhoto:e.setNewProfilePhoto}),s.a.createElement("div",{className:d.a.info},s.a.createElement(j,{userStatus:e.userStatus,changeUserStatus:e.changeUserStatus,isItMyPage:e.isItMyPage}),s.a.createElement("p",{className:d.a.fullName},s.a.createElement("span",null,"I`m")," ",l),s.a.createElement("p",{className:d.a.aboutMe},s.a.createElement("span",null,"About me:")," ",a),s.a.createElement("p",{className:d.a.lookingJob},s.a.createElement("span",{className:d.a.lookingJobFirstChild},"Looking for a job:")," ",r?s.a.createElement("span",{className:d.a.jobTrue},"Yes"):s.a.createElement("span",{className:d.a.jobFalse},"No")),s.a.createElement("p",{className:d.a.lookingJobDescr},s.a.createElement("span",null,"Work skills:")," ",o||"\u041f\u043e\u043a\u0430 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043b"),s.a.createElement(J,{isItMyPage:e.isItMyPage,setNewUserInfo:e.setNewUserInfo,initialValues:e.userData})),s.a.createElement(U,{contacts:n}))},D=function(e){return s.a.createElement("div",null,s.a.createElement(T,{userData:e.profilePage.userData,userStatus:e.profilePage.userStatus,isItMyPage:e.profilePage.isItMyPage,changeUserStatus:e.changeUserStatus,setNewProfilePhoto:e.setNewProfilePhoto,setNewUserInfo:e.setNewUserInfo}))},W=a(236),L=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).changeUserStatus=function(t){e.props.changeUserStatusThunkCallback(t)},e.setNewProfilePhoto=function(t){e.props.setNewProfilePhotoThunkCallback(t)},e.setNewUserInfo=function(t){e.props.setNewUserInfoThunkCallback(t)},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.requestUserProfile()}},{key:"requestUserProfile",value:function(){var e=+this.props.match.params.userId;e||(e=void 0),this.props.getProfileUserCardThunkCallback(e)}},{key:"componentDidUpdate",value:function(e,t){e.match.params.userId!==this.props.match.params.userId&&this.requestUserProfile()}},{key:"render",value:function(){return this.props.profilePreloader?s.a.createElement(P.a,null):s.a.createElement(D,{profilePage:this.props.profilePage,changeUserStatus:this.changeUserStatus,setNewProfilePhoto:this.setNewProfilePhoto,setNewUserInfo:this.setNewUserInfo})}}]),a}(s.a.PureComponent);t.default=Object(i.d)(W.a,p.f,Object(u.b)((function(e){return{profilePage:Object(f.e)(e),profilePreloader:Object(f.f)(e)}}),{getProfileUserCardThunkCallback:m.c,changeUserStatusThunkCallback:m.a,setNewProfilePhotoThunkCallback:m.d,setNewUserInfoThunkCallback:m.e}))(L)}}]);
//# sourceMappingURL=4.2be1fe4d.chunk.js.map