(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(21),c=a.n(o),r=a(9),s=a(10),i=a(12),m=a(11),u=a(13),d=a(29),h=a(25),g=a(24),p=a(8),E=a(149),f=a(150),b=a(155),v=a(151),C=a(152),y=a(153),k=a(154),S=a(156),w=a(22),N=a.n(w),x=a(73),I=a.n(x),j=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.url,a=e.playing,n=e.controls,o=e.volume,c=e.muted,r=e.loop;return l.a.createElement("div",{className:"videoplayer",style:this.props.videoplayer},l.a.createElement(I.a,{className:"react-player",width:"100%",height:"100%",url:t,playing:a,controls:n,loop:r,volume:o,muted:c}))}}]),t}(n.Component),O=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"comment_item"},l.a.createElement("div",{className:"avatar"},l.a.createElement("img",{srcSet:this.props.imageSrc,alt:"Avatar"})),l.a.createElement("div",{className:"content",style:this.props.customFont},l.a.createElement("span",{className:"name"},this.props.name," "),l.a.createElement("span",{className:"message"},this.props.message)))}}]),t}(n.Component),A=a(74),F=a.n(A),T=a(75),B=a.n(T),P=a(76),L=a.n(P),R=a(77),_=a.n(R),U=a(78),G=a.n(U),V=a(79),z=a.n(V),D=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"reactions",style:this.props.reactionsParent},l.a.createElement("div",{className:"reaction-item",style:this.props.reactionItem},l.a.createElement("img",{srcSet:F.a,alt:"likeicon"}),l.a.createElement("span",{className:"countText",style:this.props.countText},this.props.like)),l.a.createElement("div",{className:"reaction-item",style:this.props.reactionItem},l.a.createElement("img",{srcSet:B.a,alt:"loveicon"}),l.a.createElement("span",{className:"countText",style:this.props.countText},this.props.love)),l.a.createElement("div",{className:"reaction-item",style:this.props.reactionItem},l.a.createElement("img",{srcSet:L.a,alt:"hahaicon"}),l.a.createElement("span",{className:"countText",style:this.props.countText},this.props.haha)),l.a.createElement("div",{className:"reaction-item",style:this.props.reactionItem},l.a.createElement("img",{srcSet:_.a,alt:"sadicon"}),l.a.createElement("span",{className:"countText",style:this.props.countText},this.props.sad)),l.a.createElement("div",{className:"reaction-item",style:this.props.reactionItem},l.a.createElement("img",{srcSet:G.a,alt:"wowicon"}),l.a.createElement("span",{className:"countText",style:this.props.countText},this.props.wow)),l.a.createElement("div",{className:"reaction-item",style:this.props.reactionItem},l.a.createElement("img",{srcSet:z.a,alt:"angryicon"}),l.a.createElement("span",{className:"countText",style:this.props.countText},this.props.angry)))}}]),t}(n.Component),H=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("video",{className:"playerBG",key:this.props.videoBG,autoPlay:!0,muted:!0,loop:!0},l.a.createElement("source",{src:this.props.videoBG,type:"video/mp4"}))}}]),t}(n.Component);a(118);function q(){document.querySelector("#chooseFile").click()}function M(){document.querySelector("#bgVideoFile").click()}function W(){document.querySelector("#bgFile").click()}function J(){document.querySelector("#bgButton").click()}var K={display:"flex",flexDirection:"column"},Y={display:"flex",flexDirection:"column-reverse"},X="like,love,wow,haha,sad,angry".split(",").map(function(e){return"reactions.type(".concat(e.toUpperCase(),").limit(0).summary(total_count).as(").concat(e,")")}).join(","),Z=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(){a.setState(function(e){return e.status?clearInterval(a.timer):a.timer=setInterval(function(){a.getReactions(),a.getComments()},e.timeout<1?3e3:1e3*e.timeout),{status:!e.status}})},a.tokenChange=function(e){a.setState({token:e.target.value})},a.bgChange=function(e){a.setState({backgroundUrl:e.target.value})},a.fontSizeChange=function(e){a.setState({fontSize:parseFloat(e.target.value)})},a.urlChange=function(e){a.setState({url:e.target.value})},a.videoBGChange=function(e){a.setState({videoBG:e.target.value})},a.postIdChange=function(e){a.setState({postId:e.target.value})},a.timeoutChange=function(e){a.setState({timeout:e.target.value})},a.savefbdata=function(e,t){a.setState({token:e,postId:t},function(){a.handleClick()})},a.load=function(e){a.setState({url:e,played:0,loaded:0,pip:!1})},a.toggleControls=function(){var e=a.state.url;a.setState({controls:!a.state.controls,url:null},function(){return a.load(e)})},a.toggleLoop=function(){a.setState({loop:!a.state.loop})},a.toggleMuted=function(){a.setState({muted:!a.state.muted})},a.setVolume=function(e){a.setState({volume:parseFloat(e.target.value)})},a.handleChangeFile=function(e){e&&a.setState({url:URL.createObjectURL(e)})},a.handleChangeFile2=function(e){e&&a.setState({videoBG:URL.createObjectURL(e)})},a.handleChangeImage=function(e){e&&a.setState({backgroundUrl:URL.createObjectURL(e)})},a.playPause=function(){a.setState({playing:!a.state.playing})},a.buttonImgChange=function(e){a.setState({buttonImg:e.target.value})},a.handleBtnImage=function(e){e&&a.setState({buttonImg:URL.createObjectURL(e)})},a.toggleReverse=function(){a.setState({reverseComment:!a.state.reverseComment})},a.handleShow=a.handleShow.bind(Object(p.a)(a)),a.handleClose=a.handleClose.bind(Object(p.a)(a)),a.tokenChange=a.tokenChange.bind(Object(p.a)(a)),a.postIdChange=a.postIdChange.bind(Object(p.a)(a)),a.after="",a.state={status:!1,modalShow:!1,token:"",postId:"",backgroundUrl:"",fontSize:"14",url:"",playing:!0,controls:!1,volume:.8,muted:!1,loop:!1,timeout:3,like:"",love:"",haha:"",sad:"",wow:"",angry:"",videoBG:"",buttonImg:"https://raw.githubusercontent.com/j2teamlbh/J2TeamLive/master/logo-j2team-w.png",comments:[],reverseComment:!1,showingAlert:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClickShowAlert",value:function(){var e=this;this.setState({showingAlert:!0}),setTimeout(function(){e.setState({showingAlert:!1})},2e3)}},{key:"handleClose",value:function(){this.setState({modalShow:!1})}},{key:"handleShow",value:function(){this.setState({modalShow:!0})}},{key:"getReactions",value:function(){var e=this;N.a.get("https://graph.facebook.com/".concat(this.state.postId,"?fields=").concat(X,"&access_token=").concat(this.state.token)).then(function(t){e.setState({like:t.data.like.summary.total_count,love:t.data.love.summary.total_count,haha:t.data.haha.summary.total_count,sad:t.data.sad.summary.total_count,wow:t.data.wow.summary.total_count,angry:t.data.angry.summary.total_count})})}},{key:"getComments",value:function(){var e=this;N.a.get("https://graph.facebook.com/".concat(this.state.postId,"/comments?fields=message,from{name,picture}&limit=50&access_token=").concat(this.state.token,"&after=").concat(this.after)).then(function(t){t.data.data.length>0&&(e.after=t.data.paging.cursors.after,e.setState({comments:[].concat(Object(g.a)(t.data.data),Object(g.a)(e.state.comments))}))}).catch(function(t){t.response&&(e.alert=t.response.data.error.message,e.handleClickShowAlert()),e.setState(function(t){return t.status&&clearInterval(e.timer),{status:!1}})})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this,t=this.state,a=t.like,n=t.love,o=t.haha,c=t.sad,r=t.wow,s=t.angry,i=t.token,m=t.showingAlert,u=t.buttonImg,h=t.reverseComment,g=t.comments,p=t.postId,w=t.status,N=t.videoBG,x=t.modalShow,I=t.backgroundUrl,A=t.playing,F=t.timeout,T=t.url,B=t.fontSize,P=t.controls,L=t.volume,R=t.muted,_=t.loop,U={fontSize:B};return l.a.createElement("div",{className:"live-main",style:{backgroundImage:"url(".concat(I,")")}},l.a.createElement(E.a,{variant:"danger",show:m,className:"errorAlert"},this.alert),l.a.createElement("div",{className:"live-controls"},l.a.createElement(f.a,{variant:"primary",className:"btn-control",onClick:this.handleShow,style:{backgroundImage:"url(".concat(u,")")}})),l.a.createElement(b.a,{show:x,size:"lg",onHide:this.handleClose},l.a.createElement(b.a.Header,{closeButton:!0},l.a.createElement(b.a.Title,null,"Controls"),l.a.createElement(d.b,{to:"/dualposts",className:"ml-2 btn btn-danger"},"Dual Posts")),l.a.createElement(b.a.Body,null,l.a.createElement(v.a,null,l.a.createElement("h5",null,"Facebook Connect"),l.a.createElement(C.a,null,l.a.createElement(y.a,{md:12,className:"mb-2"},l.a.createElement(k.a,{className:"mb-2"},l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Text,{id:"basic-addon1"},"Access Token")),l.a.createElement(S.a,{placeholder:"EAAAAAYsX7TsBAGNuxoKZC6V1DVi...","aria-label":"Access Token",value:i,onChange:this.tokenChange})),l.a.createElement(k.a,{className:"mb-2"},l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Text,null,"Post ID")),l.a.createElement(S.a,{placeholder:"1010500792634...","aria-label":"Post ID",value:p,onChange:this.postIdChange})),l.a.createElement(k.a,null,l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Text,null,"Request Time (Default: 3s)")),l.a.createElement(S.a,{type:"number",value:F,onChange:this.timeoutChange,placeholder:"Set time each get comments and reactions (Default: 3s)"}),l.a.createElement(k.a.Append,null,l.a.createElement(f.a,{variant:"primary",className:"btn-load",onClick:function(){return e.savefbdata(i,p)}},w?"Pause":"Load"))))),l.a.createElement("h5",null,"Live Customize"),l.a.createElement(C.a,{className:"mb-2"},l.a.createElement(y.a,{md:12,className:"mb-2"},l.a.createElement(k.a,null,l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Text,{id:"basic-addon1"},"Button Image")),l.a.createElement(S.a,{placeholder:"Ex: https://i.imgur.com/G2....jpg","aria-label":"Background",value:u,onChange:this.buttonImgChange}),l.a.createElement(k.a.Append,null,l.a.createElement(f.a,{variant:"primary",className:"btn-load",onClick:function(){return J()}},"Choose File"),l.a.createElement(S.a,{type:"file",id:"bgButton","aria-label":"Image File",accept:"image/png, image/jpeg",onChange:function(t){return e.handleBtnImage(t.target.files[0])},hidden:!0})))),l.a.createElement(y.a,{md:6},l.a.createElement(k.a,null,l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Text,{id:"basic-addon1"},"Background")),l.a.createElement(S.a,{placeholder:"Ex: https://i.imgur.com/G2....jpg","aria-label":"Background",value:I,onChange:this.bgChange}),l.a.createElement(k.a.Append,null,l.a.createElement(f.a,{variant:"primary",className:"btn-load",onClick:function(){return W()}},"Choose File"),l.a.createElement(S.a,{type:"file",id:"bgFile","aria-label":"Image File",accept:"image/png, image/jpeg",onChange:function(t){return e.handleChangeImage(t.target.files[0])},hidden:!0})))),l.a.createElement(y.a,{md:6,className:"mb-2"},l.a.createElement(k.a,null,l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Text,{id:"basic-addon1"},"Font Size (",B,"px)")),l.a.createElement(S.a,{className:"slider",type:"range",max:40,"aria-label":"Font Size",value:B,onChange:this.fontSizeChange}))),l.a.createElement(y.a,{md:12},l.a.createElement(k.a,{className:"mb-2"},l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Text,{id:"basic-addon3"},"Video Background(.mp4)")),l.a.createElement(S.a,{placeholder:"Ex: https:https://sample-videos.com/..._bunny_720p_10mb.mp4","aria-label":"Background",value:N,onChange:this.videoBGChange}),l.a.createElement(k.a.Append,null,l.a.createElement(f.a,{variant:"primary",className:"btn-load",onClick:function(){return M()}},"Choose File"),l.a.createElement(S.a,{type:"file",id:"bgVideoFile","aria-label":"Video/Audio File",onChange:function(t){return e.handleChangeFile2(t.target.files[0])},hidden:!0})))),l.a.createElement(y.a,{md:12},l.a.createElement(k.a,null,l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Text,{id:"basic-addon1"},"Video/Audio Link")),l.a.createElement(S.a,{placeholder:"Ex: https://youtube.com/...","aria-label":"Video/Audio Link",value:T,onChange:this.urlChange}),l.a.createElement(k.a.Append,null,l.a.createElement(f.a,{variant:"primary",className:"btn-load",onClick:function(){return q()}},"Choose File"),l.a.createElement(S.a,{type:"file",id:"chooseFile","aria-label":"Video/Audio File",onChange:function(t){return e.handleChangeFile(t.target.files[0])},hidden:!0})),l.a.createElement(f.a,{variant:"primary",className:"btn-load ml-2 btn-play",onClick:this.playPause},""===T?"Play":A?"Pause":"Play")))),l.a.createElement(C.a,{className:"mb-2"},l.a.createElement(y.a,{md:12},l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Checkbox,{checked:P,onChange:this.toggleControls}),l.a.createElement(S.a,{value:"Controls",disabled:!0,className:"mr-2"}),l.a.createElement(k.a.Checkbox,{checked:R,onChange:this.toggleMuted}),l.a.createElement(S.a,{value:"Mute",disabled:!0,className:"mr-2"}),l.a.createElement(k.a.Checkbox,{checked:_,onChange:this.toggleLoop}),l.a.createElement(S.a,{value:"Loop",disabled:!0,className:"mr-2"}),l.a.createElement(k.a.Text,{id:"basic-addon1"},"Volume"),l.a.createElement(S.a,{className:"slider",type:"range","aria-label":"Volume",min:0,max:1,step:"any",value:L,onChange:this.setVolume})))),l.a.createElement(C.a,null,l.a.createElement(y.a,{md:12},l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Checkbox,{checked:h,onChange:this.toggleReverse}),l.a.createElement(S.a,{value:"Reverse Comment",disabled:!0,className:"mr-2"})))))),l.a.createElement(b.a.Footer,null,l.a.createElement("span",null,"\xa9 2019 made with \u2661 by L\xea H\u1eadu"))),l.a.createElement("div",{className:"videoBG"},l.a.createElement("div",{className:"overlay"}),l.a.createElement(H,{videoBG:N})),l.a.createElement("div",{className:"main-area"},l.a.createElement(j,{url:T,playing:A,controls:P,volume:L,muted:R,loop:_}),l.a.createElement(D,{like:a,love:n,haha:o,sad:c,wow:r,angry:s}),l.a.createElement("div",{className:"comments",style:h?Y:K},g.map(function(e,t){return l.a.createElement(O,{customFont:U,key:t,imageSrc:e.from.picture,name:e.from.name,message:e.message})}))))}}]),t}(n.Component),$=a(49),Q={display:"grid",gridTemplateColumns:"repeat(12, 1fr)"},ee={bottom:"26%",left:"46%"},te={gridColumn:"3 / 11",gridRow:"8 / 11",margin:"0 4.5rem",marginTop:"2rem"},ae={textAlign:"center",paddingTop:"10px"},ne={gridTemplateColumns:"60px"},le={gridRow:"2 / 11",display:"flex",flexDirection:"column"},oe={gridRow:"2 / 11",display:"flex",flexDirection:"column-reverse"},ce={gridColumn:"10 / 13",gridRow:"2 / 11",display:"flex",flexDirection:"column"},re={gridColumn:"10 / 13",gridRow:"2 / 11",display:"flex",flexDirection:"column-reverse"},se={gridColumn:"3 / 11",gridRow:"2 / 8",margin:"0 4.5rem",marginBottom:"1.7rem"},ie="like,love,wow,haha,sad,angry".split(",").map(function(e){return"reactions.type(".concat(e.toUpperCase(),").limit(0).summary(total_count).as(").concat(e,")")}).join(","),me=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(){a.setState(function(e){return e.status?clearInterval(a.timer):a.timer=setInterval(function(){a.getReactions(),a.getComments()},e.timeout<1?3e3:1e3*e.timeout),{status:!e.status}})},a.tokenChange=function(e){a.setState({token:e.target.value})},a.bgChange=function(e){a.setState({backgroundUrl:e.target.value})},a.buttonImgChange=function(e){a.setState({buttonImg:e.target.value})},a.fontSizeChange=function(e){a.setState({fontSize:parseFloat(e.target.value)})},a.urlChange=function(e){a.setState({url:e.target.value})},a.videoBGChange=function(e){a.setState({videoBG:e.target.value})},a.postIdChange=function(e){a.setState({postId:e.target.value})},a.postId2Change=function(e){a.setState({postId2:e.target.value})},a.timeoutChange=function(e){a.setState({timeout:e.target.value})},a.savefbdata=function(e,t){a.setState({token:e,postId:t},function(){a.handleClick()})},a.load=function(e){a.setState({url:e,played:0,loaded:0,pip:!1})},a.toggleControls=function(){var e=a.state.url;a.setState({controls:!a.state.controls,url:null},function(){return a.load(e)})},a.toggleLoop=function(){a.setState({loop:!a.state.loop})},a.toggleMuted=function(){a.setState({muted:!a.state.muted})},a.togglefullHeight=function(){a.setState({fullHeight:!a.state.fullHeight})},a.setVolume=function(e){a.setState({volume:parseFloat(e.target.value)})},a.handleChangeFile=function(e){e&&a.setState({url:URL.createObjectURL(e)})},a.handleChangeFile2=function(e){e&&a.setState({videoBG:URL.createObjectURL(e)})},a.handleChangeImage=function(e){e&&a.setState({backgroundUrl:URL.createObjectURL(e)})},a.handleBtnImage=function(e){e&&a.setState({buttonImg:URL.createObjectURL(e)})},a.playPause=function(){a.setState({playing:!a.state.playing})},a.toggleReverse=function(){a.setState({reverseComment:!a.state.reverseComment})},a.handleShow=a.handleShow.bind(Object(p.a)(a)),a.handleClose=a.handleClose.bind(Object(p.a)(a)),a.tokenChange=a.tokenChange.bind(Object(p.a)(a)),a.postIdChange=a.postIdChange.bind(Object(p.a)(a)),a.after="",a.after2="",a.alert="",a.state={status:!1,modalShow:!1,token:"",postId:"",postId2:"",backgroundUrl:"",fontSize:"14",url:"",playing:!0,controls:!1,volume:.8,muted:!1,loop:!1,timeout:3,like:"",love:"",haha:"",sad:"",wow:"",angry:"",videoBG:"",buttonImg:"https://raw.githubusercontent.com/j2teamlbh/J2TeamLive/master/logo-j2team-w.png",comments:[],commentsSecondary:[],reverseComment:!1,showingAlert:!1,fullHeight:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClickShowAlert",value:function(){var e=this;this.setState({showingAlert:!0}),setTimeout(function(){e.setState({showingAlert:!1})},2e3)}},{key:"handleClose",value:function(){this.setState({modalShow:!1})}},{key:"handleShow",value:function(){this.setState({modalShow:!0})}},{key:"getReactions",value:function(){var e=this;Promise.all([N.a.get("https://graph.facebook.com/".concat(this.state.postId,"?fields=").concat(ie,"&access_token=").concat(this.state.token)),N.a.get("https://graph.facebook.com/".concat(this.state.postId2,"?fields=").concat(ie,"&access_token=").concat(this.state.token))]).then(function(t){var a=Object($.a)(t,2),n=a[0],l=a[1];e.setState({like:n.data.like.summary.total_count+l.data.like.summary.total_count,love:n.data.love.summary.total_count+l.data.love.summary.total_count,haha:n.data.wow.summary.total_count+l.data.love.summary.total_count,sad:n.data.haha.summary.total_count+l.data.haha.summary.total_count,wow:n.data.sad.summary.total_count+l.data.sad.summary.total_count,angry:n.data.angry.summary.total_count+l.data.angry.summary.total_count})})}},{key:"getComments",value:function(){var e=this;Promise.all([N.a.get("https://graph.facebook.com/".concat(this.state.postId,"/comments?fields=message,from{name,picture}&limit=50&access_token=").concat(this.state.token,"&after=").concat(this.after)),N.a.get("https://graph.facebook.com/".concat(this.state.postId2,"/comments?fields=message,from{name,picture}&limit=50&access_token=").concat(this.state.token,"&after=").concat(this.after2))]).then(function(t){var a=Object($.a)(t,2),n=a[0],l=a[1];n.data.data.length>0&&(e.after=n.data.paging.cursors.after,e.setState({comments:[].concat(Object(g.a)(n.data.data),Object(g.a)(e.state.comments))})),l.data.data.length>0&&(e.after2=l.data.paging.cursors.after,e.setState({commentsSecondary:[].concat(Object(g.a)(l.data.data),Object(g.a)(e.state.commentsSecondary))}))}).catch(function(t){t.response&&(e.alert=t.response.data.error.message,e.handleClickShowAlert()),e.setState(function(t){return t.status&&clearInterval(e.timer),{status:!1}})})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this,t=this.state,a=t.like,n=t.love,o=t.haha,c=t.sad,r=t.wow,s=t.comments,i=t.showingAlert,m=t.fullHeight,u=t.commentsSecondary,h=t.angry,g=t.token,p=t.postId,w=t.buttonImg,N=t.reverseComment,x=t.status,I=t.videoBG,A=t.modalShow,F=t.backgroundUrl,T=t.playing,B=t.timeout,P=t.url,L=t.postId2,R=t.fontSize,_=t.controls,U=t.volume,G=t.muted,V=t.loop,z={fontSize:R};return l.a.createElement("div",{className:"live-main",style:{backgroundImage:"url(".concat(F,")")}},l.a.createElement(E.a,{variant:"danger",show:i,className:"errorAlert"},this.alert),l.a.createElement("div",{className:"live-controls",style:ee},l.a.createElement(f.a,{variant:"primary",className:"btn-control",onClick:this.handleShow,style:{backgroundImage:"url(".concat(w,")")}})),l.a.createElement(b.a,{show:A,size:"lg",onHide:this.handleClose},l.a.createElement(b.a.Header,{closeButton:!0},l.a.createElement(b.a.Title,null,"Controls"),l.a.createElement(d.b,{to:"/",className:"ml-2 btn btn-danger"},"Single Posts")),l.a.createElement(b.a.Body,null,l.a.createElement(v.a,null,l.a.createElement("h5",null,"Facebook Connect"),l.a.createElement(C.a,null,l.a.createElement(y.a,{md:12,className:"mb-2"},l.a.createElement(k.a,{className:"mb-2"},l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Text,{id:"basic-addon1"},"Access Token")),l.a.createElement(S.a,{placeholder:"EAAAAAYsX7TsBAGNuxoKZC6V1DVi...","aria-label":"Access Token",value:g,onChange:this.tokenChange})),l.a.createElement(k.a,{className:"mb-2"},l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Text,null,"Post 1 | Post 2")),l.a.createElement(S.a,{placeholder:"1010500792634...","aria-label":"Post ID",value:p,onChange:this.postIdChange}),l.a.createElement(S.a,{className:"post2Input",placeholder:"1010500654256...","aria-label":"Post ID 2",value:L,onChange:this.postId2Change})),l.a.createElement(k.a,null,l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Text,null,"Request Time (Default: 3s)")),l.a.createElement(S.a,{type:"number",value:B,onChange:this.timeoutChange,placeholder:"Set time each get data (Default: 3s)"}),l.a.createElement(k.a.Append,null,l.a.createElement(f.a,{variant:"primary",className:"btn-load",onClick:function(){return e.savefbdata(g,p)}},x?"Pause":"Load"))))),l.a.createElement("h5",null,"Live Customize"),l.a.createElement(C.a,{className:"mb-2"},l.a.createElement(y.a,{md:12,className:"mb-2"},l.a.createElement(k.a,null,l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Text,{id:"basic-addon1"},"Button Image")),l.a.createElement(S.a,{placeholder:"Ex: https://i.imgur.com/G2....jpg","aria-label":"Background",value:w,onChange:this.buttonImgChange}),l.a.createElement(k.a.Append,null,l.a.createElement(f.a,{variant:"primary",className:"btn-load",onClick:function(){return J()}},"Choose File"),l.a.createElement(S.a,{type:"file",id:"bgButton","aria-label":"Image File",accept:"image/png, image/jpeg",onChange:function(t){return e.handleBtnImage(t.target.files[0])},hidden:!0})))),l.a.createElement(y.a,{md:6},l.a.createElement(k.a,null,l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Text,{id:"basic-addon1"},"Background")),l.a.createElement(S.a,{placeholder:"Ex: https://i.imgur.com/G2....jpg","aria-label":"Background",value:F,onChange:this.bgChange}),l.a.createElement(k.a.Append,null,l.a.createElement(f.a,{variant:"primary",className:"btn-load",onClick:function(){return W()}},"Choose File"),l.a.createElement(S.a,{type:"file",id:"bgFile","aria-label":"Image File",accept:"image/png, image/jpeg",onChange:function(t){return e.handleChangeImage(t.target.files[0])},hidden:!0})))),l.a.createElement(y.a,{md:6,className:"mb-2"},l.a.createElement(k.a,null,l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Text,{id:"basic-addon1"},"Font Size (",R,"px)")),l.a.createElement(S.a,{className:"slider",type:"range",max:40,"aria-label":"Font Size",value:R,onChange:this.fontSizeChange}))),l.a.createElement(y.a,{md:12},l.a.createElement(k.a,{className:"mb-2"},l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Text,{id:"basic-addon3"},"Video Background(.mp4)")),l.a.createElement(S.a,{placeholder:"Ex: https:https://sample-videos.com/..._bunny_720p_10mb.mp4","aria-label":"Background",value:I,onChange:this.videoBGChange}),l.a.createElement(k.a.Append,null,l.a.createElement(f.a,{variant:"primary",className:"btn-load",onClick:function(){return M()}},"Choose File"),l.a.createElement(S.a,{type:"file",id:"bgVideoFile","aria-label":"Video/Audio File",onChange:function(t){return e.handleChangeFile2(t.target.files[0])},hidden:!0})))),l.a.createElement(y.a,{md:12},l.a.createElement(k.a,null,l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Text,{id:"basic-addon1"},"Video/Audio Link")),l.a.createElement(S.a,{placeholder:"Ex: https://youtube.com/...","aria-label":"Video/Audio Link",value:P,onChange:this.urlChange}),l.a.createElement(k.a.Append,null,l.a.createElement(f.a,{variant:"primary",className:"btn-load",onClick:function(){return q()}},"Choose File"),l.a.createElement(S.a,{type:"file",id:"chooseFile","aria-label":"Video/Audio File",onChange:function(t){return e.handleChangeFile(t.target.files[0])},hidden:!0}),l.a.createElement(f.a,{variant:"primary",className:"btn-load ml-2 btn-play",onClick:this.playPause},""===P?"Play":T?"Pause":"Play"))))),l.a.createElement(C.a,{className:"mb-2"},l.a.createElement(y.a,{md:12},l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Checkbox,{checked:_,onChange:this.toggleControls}),l.a.createElement(S.a,{value:"Controls",disabled:!0,className:"mr-2"}),l.a.createElement(k.a.Checkbox,{checked:G,onChange:this.toggleMuted}),l.a.createElement(S.a,{value:"Mute",disabled:!0,className:"mr-2"}),l.a.createElement(k.a.Checkbox,{checked:V,onChange:this.toggleLoop}),l.a.createElement(S.a,{value:"Loop",disabled:!0,className:"mr-2"}),l.a.createElement(k.a.Text,{id:"basic-addon1"},"Volume"),l.a.createElement(S.a,{className:"slider",type:"range","aria-label":"Volume",min:0,max:1,step:"any",value:U,onChange:this.setVolume})))),l.a.createElement(C.a,null,l.a.createElement(y.a,{md:12},l.a.createElement(k.a.Prepend,null,l.a.createElement(k.a.Checkbox,{checked:N,onChange:this.toggleReverse}),l.a.createElement(S.a,{value:"Reverse Comment",disabled:!0,className:"mr-2"}),l.a.createElement(k.a.Checkbox,{checked:m,onChange:this.togglefullHeight}),l.a.createElement(S.a,{value:"Full Height Comment",disabled:!0,className:"mr-2"})))))),l.a.createElement(b.a.Footer,null,l.a.createElement("span",null,"\xa9 2019 made with \u2661 by ",l.a.createElement("a",{href:"https://fb.com/5515886"},"L\xea H\u1eadu")))),l.a.createElement("div",{className:"videoBG"},l.a.createElement("div",{className:"overlay"}),l.a.createElement(H,{videoBG:I})),l.a.createElement("div",{className:"main-area",style:Q},l.a.createElement(j,{videoplayer:se,url:P,playing:T,controls:_,volume:U,muted:G,loop:V}),l.a.createElement(D,{reactionsParent:te,countText:ae,reactionItem:ne,like:a,love:n,haha:o,sad:c,wow:r,angry:h}),l.a.createElement("div",{className:"comments ".concat(m?"fullHeight":""),style:N?oe:le},s.map(function(e,t){return l.a.createElement(O,{customFont:z,key:t,imageSrc:e.from.picture,name:e.from.name,message:e.message})})),l.a.createElement("div",{className:"comments ".concat(m?"fullHeight":""),style:N?re:ce},u.map(function(e,t){return l.a.createElement(O,{customFont:z,key:t,imageSrc:e.from.picture,name:e.from.name,message:e.message})}))))}}]),t}(n.Component),ue=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(h.a,{exact:!0,path:"/",component:Z}),l.a.createElement(h.a,{path:"/dualposts",component:me}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e,t,a){e.exports=a.p+"static/media/LIKE.7b593078.gif"},75:function(e,t,a){e.exports=a.p+"static/media/LOVE.801526e1.gif"},76:function(e,t,a){e.exports=a.p+"static/media/HAHA.7c8dac3b.gif"},77:function(e,t,a){e.exports=a.p+"static/media/SAD.447909ad.gif"},78:function(e,t,a){e.exports=a.p+"static/media/WOW.9baf7e7f.gif"},79:function(e,t,a){e.exports=a.p+"static/media/ANGRY.16f6c102.gif"},87:function(e,t,a){e.exports=a(148)}},[[87,1,2]]]);
//# sourceMappingURL=main.e2136aac.chunk.js.map