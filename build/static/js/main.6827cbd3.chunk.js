(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){e.exports=a(246)},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),o=a.n(i),l=(a(107),a(19)),c=a(20),s=a(22),u=a(21),h=a(23),p=a(86),m=a.n(p),d=(a(108),a(24)),g=a(91),b=a.n(g),E=a(17),f=a.n(E),O=a(93),v=a.n(O),w=a(56),x=a.n(w),j=a(29),y=a.n(j),k=a(55),C=a.n(k),M=a(28),S=a(42),N=a(92),R=a.n(N),A=a(90),T=a.n(A),B=a(88),L=a.n(B),I=a(41),z=a.n(I),D=a(89),P=a.n(D),U=(a(109),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleProfileMenuOpen=function(e){a.setState({anchorEl:e.currentTarget})},a.handleMenuClose=function(){a.setState({anchorEl:null}),a.handleMobileMenuClose()},a.handleMobileMenuOpen=function(e){a.setState({mobileMoreAnchorEl:e.currentTarget})},a.handleMobileMenuClose=function(){a.setState({mobileMoreAnchorEl:null})},a.changeSearchState=function(){a.props.changeSearch(!0)},a.state={anchorEl:null,mobileMoreAnchorEl:null},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.anchorEl,a=e.mobileMoreAnchorEl,n=this.props.classes,i=Boolean(t),o=Boolean(a);r.a.createElement(C.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:this.handleMenuClose},r.a.createElement(y.a,{onClick:this.handleMenuClose},"Profile"),r.a.createElement(y.a,{onClick:this.handleMenuClose},"My account")),r.a.createElement(C.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:this.handleMenuClose},r.a.createElement(y.a,{onClick:this.handleMobileMenuClose},r.a.createElement(f.a,{color:"inherit"},r.a.createElement(x.a,{badgeContent:4,color:"secondary"},r.a.createElement(L.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(y.a,{onClick:this.handleMobileMenuClose},r.a.createElement(f.a,{color:"inherit"},r.a.createElement(x.a,{badgeContent:11,color:"secondary"},r.a.createElement(P.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(y.a,{onClick:this.handleProfileMenuOpen},r.a.createElement(f.a,{color:"inherit"},r.a.createElement(T.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:n.root},r.a.createElement(b.a,{style:{background:"transparent",boxShadow:"none"},position:"static"},r.a.createElement(z.a,{onClick:this.changeSearchState},r.a.createElement(R.a,null)),r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon}),r.a.createElement(v.a,{placeholder:"Search\u2026",classes:{root:n.inputRoot,input:n.inputInput}}))))}}]),t}(r.a.Component)),W=Object(S.withStyles)(function(e){return{root:{width:"60%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(d.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(d.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(M.fade)(e.palette.common.white,.1),"&:hover":{backgroundColor:Object(M.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"black",width:"100%"},inputInput:Object(d.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(d.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(d.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})(U),J=a(6),_=a.n(J),F=a(94),G=a.n(F),$=a(95),q=a.n($),H=a(96),K=a.n(H),Q=a(97),V=a.n(Q),X=a(98),Y=a.n(X),Z=a(101),ee=a.n(Z),te=a(40),ae=a.n(te),ne=a(53),re=a.n(ne),ie=a(99),oe=a.n(ie),le=a(100),ce=a.n(le),se=a(54),ue=a.n(se),he=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={expanded:!1},a.handleExpandClick=function(){a.setState(function(e){return{expanded:!e.expanded}})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(G.a,{className:e.card},r.a.createElement(q.a,{style:{direction:"rtl"},classes:{title:e.text,subheader:e.text,action:e.action},title:this.props.result.name,action:r.a.createElement(f.a,null,r.a.createElement(ue.a,null)),subheader:this.props.result.subText}),r.a.createElement(K.a,{className:e.media,image:this.props.result.imageURL}),r.a.createElement(V.a,null,r.a.createElement(ae.a,{component:"p"},this.props.result.tags.map(function(t){return r.a.createElement(z.a,{variant:"extended",size:"small",color:"primary","aria-label":"Add",className:e.margin},t)}),r.a.createElement("div",null))),r.a.createElement(Y.a,{className:e.actions,disableActionSpacing:!0},r.a.createElement(f.a,{"aria-label":"Add to favorites"},r.a.createElement(oe.a,null)),r.a.createElement(f.a,{"aria-label":"Share"},r.a.createElement(ce.a,null)),r.a.createElement(f.a,{className:_()(e.expand,Object(d.a)({},e.expandOpen,this.state.expanded))},r.a.createElement(ee.a,{"aria-label":"Recipe",className:e.avatar},this.props.result.avatar))))}}]),t}(r.a.Component),pe=Object(S.withStyles)(function(e){return{card:{maxWidth:400,margin:"8px"},media:{height:0,paddingTop:"56.25%"},actions:{display:"flex"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:re.a[500]},margin:{margin:e.spacing.unit,width:"70px !important"},extendedIcon:{marginRight:e.spacing.unit},text:{fontFamily:"inherit",display:"flex"},action:{marginTop:"8px"}}})(he),me={searchResults:[{name:"\u05e8\u05d0\u05e9 \u05d4\u05e0\u05e7\u05e8\u05d4",subText:"\u05d1\u05dc\u05d4 \u05d1\u05dc\u05d4 \u05d1\u05dc\u05d4 \u05d1\u05dc\u05d4",imageURL:"https://www.weekend.co.il/attraction/thumb.aspx?imgUrl=C:/Web/weekend2/Templates/23763/%D7%9E%D7%A2%D7%A8%D7%94%202.jpg",tags:["\u05de\u05d9\u05dd","\u05de\u05e9\u05e4\u05d7\u05d4","\u05e0\u05d5\u05e3","\u05e8\u05d5\u05de\u05e0\u05d8\u05d9","\u05e7\u05d9\u05e5","\u05e6\u05e4\u05d5\u05df","\u05d0\u05d8\u05e8\u05e7\u05e6\u05d9\u05d5\u05ea"],writtenBy:"\u05e0\u05d9\u05e7",avatar:"N"},{name:"\u05e0\u05d7\u05dc \u05d4\u05d1\u05e9\u05d5\u05e8",subText:"\u05d1\u05dc\u05d4 \u05d1\u05dc\u05d4 \u05d1\u05dc\u05d4 \u05d1\u05dc\u05d4",imageURL:"https://img.wcdn.co.il/f_auto,w_700/1/8/0/5/1805152-46.jpg",tags:["\u05d0\u05e7\u05e1\u05d8\u05e8\u05d9\u05dd","\u05e0\u05d5\u05e3","\u05e8\u05d5\u05de\u05e0\u05d8\u05d9","\u05d0\u05d1\u05d9\u05d1","\u05d3\u05e8\u05d5\u05dd","\u05d0\u05d8\u05e8\u05e7\u05e6\u05d9\u05d5\u05ea"],writtenBy:"\u05de\u05d8\u05e8",avatar:"M"}]},de=(a(245),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-result-page"},r.a.createElement("header",{className:"search-page-header"}),r.a.createElement("div",{style:{fontSize:"20px",margin:"10px"}},"\u05ea\u05d5\u05e6\u05d0\u05d5\u05ea \u05d7\u05d9\u05e4\u05d5\u05e9 ..."),r.a.createElement("div",{style:{display:"flex"}},me.searchResults.map(function(e){return r.a.createElement(pe,{result:e})})))}}]),t}(r.a.Component)),ge=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).changeSearchState=function(e){a.setState({search:e})},a.state={search:!1},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.search?r.a.createElement(de,null):r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:m.a,alt:"logo"}),r.a.createElement(W,{changeSearch:this.changeSearchState}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},86:function(e,t,a){e.exports=a.p+"static/media/logo.f06e90b8.png"}},[[102,1,2]]]);
//# sourceMappingURL=main.6827cbd3.chunk.js.map