(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,a,t){},141:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(21),c=t.n(o),r=t(9),s=t(10),i=t(13),m=t(11),u=t(12),d=t(29),h=t(25),p=t(24),g=t(8),E=t(148),f=t(146),b=t(142),v=t(143),y=t(144),C=t(145),k=t(147),S=t(22),N=t.n(S),w=t(68),j=t.n(w),x=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.url,t=e.playing,n=e.controls,o=e.volume,c=e.muted,r=e.loop;return l.a.createElement("div",{className:"videoplayer",style:this.props.videoplayer},l.a.createElement(j.a,{className:"react-player",width:"100%",height:"100%",url:a,playing:t,controls:n,loop:r,volume:o,muted:c}))}}]),a}(n.Component),O=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"comment_item"},l.a.createElement("div",{className:"avatar"},l.a.createElement("img",{srcSet:this.props.imageSrc,alt:"Avatar"})),l.a.createElement("div",{className:"content",style:this.props.customFont},l.a.createElement("span",{className:"name"},this.props.name," "),l.a.createElement("span",{className:"message"},this.props.message)))}}]),a}(n.Component),I=t(69),F=t.n(I),T=t(70),P=t.n(T),A=t(71),B=t.n(A),_=t(72),L=t.n(_),V=t(73),G=t.n(V),U=t(74),R=t.n(U),z=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"reactions",style:this.props.reactionsParent},l.a.createElement("div",{className:"reaction-item",style:this.props.reactionItem},l.a.createElement("img",{srcSet:F.a,alt:"likeicon"}),l.a.createElement("span",{className:"countText",style:this.props.countText},this.props.like)),l.a.createElement("div",{className:"reaction-item",style:this.props.reactionItem},l.a.createElement("img",{srcSet:P.a,alt:"loveicon"}),l.a.createElement("span",{className:"countText",style:this.props.countText},this.props.love)),l.a.createElement("div",{className:"reaction-item",style:this.props.reactionItem},l.a.createElement("img",{srcSet:B.a,alt:"hahaicon"}),l.a.createElement("span",{className:"countText",style:this.props.countText},this.props.haha)),l.a.createElement("div",{className:"reaction-item",style:this.props.reactionItem},l.a.createElement("img",{srcSet:L.a,alt:"sadicon"}),l.a.createElement("span",{className:"countText",style:this.props.countText},this.props.sad)),l.a.createElement("div",{className:"reaction-item",style:this.props.reactionItem},l.a.createElement("img",{srcSet:G.a,alt:"wowicon"}),l.a.createElement("span",{className:"countText",style:this.props.countText},this.props.wow)),l.a.createElement("div",{className:"reaction-item",style:this.props.reactionItem},l.a.createElement("img",{srcSet:R.a,alt:"angryicon"}),l.a.createElement("span",{className:"countText",style:this.props.countText},this.props.angry)))}}]),a}(n.Component),D=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("video",{className:"playerBG",key:this.props.videoBG,autoPlay:!0,muted:!0,loop:!0},l.a.createElement("source",{src:this.props.videoBG,type:"video/mp4"}))}}]),a}(n.Component);t(113);function H(){document.querySelector("#chooseFile").click()}function M(){document.querySelector("#bgVideoFile").click()}function W(){document.querySelector("#bgFile").click()}var q="like,love,wow,haha,sad,angry".split(",").map(function(e){return"reactions.type(".concat(e.toUpperCase(),").limit(0).summary(total_count).as(").concat(e,")")}).join(","),K=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleClick=function(){t.setState(function(e){return e.status?clearInterval(t.timer):t.timer=setInterval(function(){t.getReactions(),t.getComments()},e.timeout<1?3e3:1e3*e.timeout),{status:!e.status}})},t.tokenChange=function(e){t.setState({token:e.target.value})},t.bgChange=function(e){t.setState({backgroundUrl:e.target.value})},t.fontSizeChange=function(e){t.setState({fontSize:parseFloat(e.target.value)})},t.urlChange=function(e){t.setState({url:e.target.value})},t.videoBGChange=function(e){t.setState({videoBG:e.target.value})},t.postIdChange=function(e){t.setState({postId:e.target.value})},t.timeoutChange=function(e){t.setState({timeout:e.target.value})},t.savefbdata=function(e,a){t.setState({token:e,postId:a},function(){t.handleClick()})},t.load=function(e){t.setState({url:e,played:0,loaded:0,pip:!1})},t.toggleControls=function(){var e=t.state.url;t.setState({controls:!t.state.controls,url:null},function(){return t.load(e)})},t.toggleLoop=function(){t.setState({loop:!t.state.loop})},t.toggleMuted=function(){t.setState({muted:!t.state.muted})},t.setVolume=function(e){t.setState({volume:parseFloat(e.target.value)})},t.handleChangeFile=function(e){t.setState({url:URL.createObjectURL(e)})},t.handleChangeFile2=function(e){t.setState({videoBG:URL.createObjectURL(e)})},t.handleChangeImage=function(e){t.setState({backgroundUrl:URL.createObjectURL(e)})},t.playPause=function(){t.setState({playing:!t.state.playing})},t.handleShow=t.handleShow.bind(Object(g.a)(t)),t.handleClose=t.handleClose.bind(Object(g.a)(t)),t.tokenChange=t.tokenChange.bind(Object(g.a)(t)),t.postIdChange=t.postIdChange.bind(Object(g.a)(t)),t.after="",t.state={status:!1,modalShow:!1,token:"",postId:"",backgroundUrl:"",fontSize:"14",url:"",playing:!0,controls:!1,volume:.8,muted:!1,loop:!1,timeout:3,like:"",love:"",haha:"",sad:"",wow:"",angry:"",videoBG:"",comments:[]},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"handleClose",value:function(){this.setState({modalShow:!1})}},{key:"handleShow",value:function(){this.setState({modalShow:!0})}},{key:"getReactions",value:function(){var e=this;N.a.get("https://graph.facebook.com/".concat(this.state.postId,"?fields=").concat(q,"&access_token=").concat(this.state.token)).then(function(a){e.setState({like:a.data.like.summary.total_count,love:a.data.love.summary.total_count,haha:a.data.haha.summary.total_count,sad:a.data.sad.summary.total_count,wow:a.data.wow.summary.total_count,angry:a.data.angry.summary.total_count})})}},{key:"getComments",value:function(){var e=this;N.a.get("https://graph.facebook.com/".concat(this.state.postId,"/comments?fields=message,from{name,picture}&limit=50&access_token=").concat(this.state.token,"&after=").concat(this.after)).then(function(a){a.data.data.length>0&&(e.after=a.data.paging.cursors.after,e.setState({comments:[].concat(Object(p.a)(a.data.data),Object(p.a)(e.state.comments))}))}).catch(function(e){console.log(e)})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this,a=this.state,t=a.like,n=a.love,o=a.haha,c=a.sad,r=a.wow,s=a.angry,i=a.token,m=a.postId,u=a.status,h=a.videoBG,p=a.modalShow,g=a.backgroundUrl,S=a.playing,N=a.timeout,w=a.url,j=a.fontSize,I=a.controls,F=a.volume,T=a.muted,P=a.loop,A={fontSize:j};return l.a.createElement("div",{className:"live-main",style:{backgroundImage:"url(".concat(g,")")}},l.a.createElement("div",{className:"live-controls"},l.a.createElement(E.a,{variant:"primary",className:"btn-control",onClick:this.handleShow})),l.a.createElement(f.a,{show:p,size:"lg",onHide:this.handleClose},l.a.createElement(f.a.Header,{closeButton:!0},l.a.createElement(f.a.Title,null,"Controls"),l.a.createElement(d.b,{to:"/dualposts",className:"ml-2 btn btn-danger"},"Dual Posts")),l.a.createElement(f.a.Body,null,l.a.createElement(b.a,null,l.a.createElement("h5",null,"Facebook Connect"),l.a.createElement(v.a,null,l.a.createElement(y.a,{md:12,className:"mb-3"},l.a.createElement(C.a,{className:"mb-3"},l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,{id:"basic-addon1"},"Access Token")),l.a.createElement(k.a,{placeholder:"EAAAAAYsX7TsBAGNuxoKZC6V1DVi...","aria-label":"Access Token",value:i,onChange:this.tokenChange})),l.a.createElement(C.a,{className:"mb-3"},l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,null,"Post ID")),l.a.createElement(k.a,{placeholder:"1010500792634...","aria-label":"Post ID",value:m,onChange:this.postIdChange})),l.a.createElement(C.a,null,l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,null,"Request Time (Default: 3s)")),l.a.createElement(k.a,{type:"number",value:N,onChange:this.timeoutChange,placeholder:"Set time each get comments and reactions (Default: 3s)"}),l.a.createElement(C.a.Append,null,l.a.createElement(E.a,{variant:"primary",className:"btn-load",onClick:function(){return e.savefbdata(i,m)}},u?"Pause":"Load"))))),l.a.createElement("h5",null,"Live Customize"),l.a.createElement(v.a,{className:"mb-3"},l.a.createElement(y.a,{md:6},l.a.createElement(C.a,null,l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,{id:"basic-addon1"},"Background")),l.a.createElement(k.a,{placeholder:"Ex: https://i.imgur.com/G2....jpg","aria-label":"Background",value:g,onChange:this.bgChange}),l.a.createElement(C.a.Append,null,l.a.createElement(E.a,{variant:"primary",className:"btn-load",onClick:function(){return W()}},"Choose File"),l.a.createElement(k.a,{type:"file",id:"bgFile","aria-label":"Image File",accept:"image/png, image/jpeg",onChange:function(a){return e.handleChangeImage(a.target.files[0])},hidden:!0})))),l.a.createElement(y.a,{md:6,className:"mb-3"},l.a.createElement(C.a,null,l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,{id:"basic-addon1"},"Font Size (",j,"px)")),l.a.createElement(k.a,{className:"slider",type:"range",max:40,"aria-label":"Font Size",value:j,onChange:this.fontSizeChange}))),l.a.createElement(y.a,{md:12},l.a.createElement(C.a,{className:"mb-3"},l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,{id:"basic-addon3"},"Video Background(.mp4)")),l.a.createElement(k.a,{placeholder:"Ex: https:https://sample-videos.com/..._bunny_720p_10mb.mp4","aria-label":"Background",value:h,onChange:this.videoBGChange}),l.a.createElement(C.a.Append,null,l.a.createElement(E.a,{variant:"primary",className:"btn-load",onClick:function(){return M()}},"Choose File"),l.a.createElement(k.a,{type:"file",id:"bgVideoFile","aria-label":"Video/Audio File",onChange:function(a){return e.handleChangeFile2(a.target.files[0])},hidden:!0})))),l.a.createElement(y.a,{md:12},l.a.createElement(C.a,null,l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,{id:"basic-addon1"},"Video/Audio Link")),l.a.createElement(k.a,{placeholder:"Ex: https://youtube.com/...","aria-label":"Video/Audio Link",value:w,onChange:this.urlChange}),l.a.createElement(C.a.Append,null,l.a.createElement(E.a,{variant:"primary",className:"btn-load",onClick:function(){return H()}},"Choose File"),l.a.createElement(k.a,{type:"file",id:"chooseFile","aria-label":"Video/Audio File",onChange:function(a){return e.handleChangeFile(a.target.files[0])},hidden:!0}))))),l.a.createElement(v.a,null,l.a.createElement(y.a,{md:12},l.a.createElement(C.a.Prepend,null,l.a.createElement(E.a,{variant:"primary",className:"btn-load",onClick:this.playPause},S?"Pause":"Play"),l.a.createElement(C.a.Checkbox,{checked:I,onChange:this.toggleControls}),l.a.createElement(k.a,{value:"Controls",disabled:!0,className:"mr-2"}),l.a.createElement(C.a.Checkbox,{checked:T,onChange:this.toggleMuted}),l.a.createElement(k.a,{value:"Mute",disabled:!0,className:"mr-2"}),l.a.createElement(C.a.Checkbox,{checked:P,onChange:this.toggleLoop}),l.a.createElement(k.a,{value:"Loop",disabled:!0,className:"mr-2"}),l.a.createElement(C.a.Text,{id:"basic-addon1"},"Volume"),l.a.createElement(k.a,{className:"slider",type:"range","aria-label":"Volume",min:0,max:1,step:"any",value:F,onChange:this.setVolume})))))),l.a.createElement(f.a.Footer,null,l.a.createElement("span",null,"\xa9 2019 made with \u2661 by ",l.a.createElement("a",{href:"https://fb.com/5515886"},"L\xea H\u1eadu")))),l.a.createElement("div",{className:"videoBG"},l.a.createElement("div",{className:"overlay"}),l.a.createElement(D,{videoBG:h})),l.a.createElement("div",{className:"main-area"},l.a.createElement(x,{url:w,playing:S,controls:I,volume:F,muted:T,loop:P}),l.a.createElement(z,{like:t,love:n,haha:o,sad:c,wow:r,angry:s}),l.a.createElement("div",{className:"comments"},this.state.comments.map(function(e,a){return l.a.createElement(O,{customFont:A,key:a,imageSrc:e.from.picture,name:e.from.name,message:e.message})}))))}}]),a}(n.Component),Y=t(44),J={display:"grid",gridTemplateColumns:"repeat(12, 1fr)"},X={bottom:"27%",left:"46%"},Z={gridColumn:"3 / 11",gridRow:"8 / 11",margin:"0 4.5rem",marginTop:"2rem"},$={textAlign:"center",paddingTop:"10px"},Q={gridTemplateColumns:"60px"},ee={gridRow:"2 / 11"},ae={gridColumn:"10 / 13",gridRow:"2 / 11"},te={gridColumn:"3 / 11",gridRow:"2 / 8",margin:"0 4.5rem",marginBottom:"1.7rem"},ne="like,love,wow,haha,sad,angry".split(",").map(function(e){return"reactions.type(".concat(e.toUpperCase(),").limit(0).summary(total_count).as(").concat(e,")")}).join(","),le=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleClick=function(){t.setState(function(e){return e.status?clearInterval(t.timer):t.timer=setInterval(function(){t.getReactions(),t.getComments()},e.timeout<1?3e3:1e3*e.timeout),{status:!e.status}})},t.tokenChange=function(e){t.setState({token:e.target.value})},t.bgChange=function(e){t.setState({backgroundUrl:e.target.value})},t.fontSizeChange=function(e){t.setState({fontSize:parseFloat(e.target.value)})},t.urlChange=function(e){t.setState({url:e.target.value})},t.videoBGChange=function(e){t.setState({videoBG:e.target.value})},t.postIdChange=function(e){t.setState({postId:e.target.value})},t.postId2Change=function(e){t.setState({postId2:e.target.value})},t.timeoutChange=function(e){t.setState({timeout:e.target.value})},t.savefbdata=function(e,a){t.setState({token:e,postId:a},function(){t.handleClick()})},t.load=function(e){t.setState({url:e,played:0,loaded:0,pip:!1})},t.toggleControls=function(){var e=t.state.url;t.setState({controls:!t.state.controls,url:null},function(){return t.load(e)})},t.toggleLoop=function(){t.setState({loop:!t.state.loop})},t.toggleMuted=function(){t.setState({muted:!t.state.muted})},t.setVolume=function(e){t.setState({volume:parseFloat(e.target.value)})},t.handleChangeFile=function(e){t.setState({url:URL.createObjectURL(e)})},t.handleChangeFile2=function(e){t.setState({videoBG:URL.createObjectURL(e)})},t.handleChangeImage=function(e){t.setState({backgroundUrl:URL.createObjectURL(e)})},t.playPause=function(){t.setState({playing:!t.state.playing})},t.handleShow=t.handleShow.bind(Object(g.a)(t)),t.handleClose=t.handleClose.bind(Object(g.a)(t)),t.tokenChange=t.tokenChange.bind(Object(g.a)(t)),t.postIdChange=t.postIdChange.bind(Object(g.a)(t)),t.after="",t.after2="",t.state={status:!1,modalShow:!1,token:"",postId:"",postId2:"",backgroundUrl:"",fontSize:"14",url:"",playing:!0,controls:!1,volume:.8,muted:!1,loop:!1,timeout:3,like:"",love:"",haha:"",sad:"",wow:"",angry:"",videoBG:"",comments:[],commentsSecondary:[]},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"handleClose",value:function(){this.setState({modalShow:!1})}},{key:"handleShow",value:function(){this.setState({modalShow:!0})}},{key:"getReactions",value:function(){var e=this;Promise.all([N.a.get("https://graph.facebook.com/".concat(this.state.postId,"?fields=").concat(ne,"&access_token=").concat(this.state.token)),N.a.get("https://graph.facebook.com/".concat(this.state.postId2,"?fields=").concat(ne,"&access_token=").concat(this.state.token))]).then(function(a){var t=Object(Y.a)(a,2),n=t[0],l=t[1];e.setState({like:n.data.like.summary.total_count+l.data.like.summary.total_count,love:n.data.love.summary.total_count+l.data.love.summary.total_count,haha:n.data.wow.summary.total_count+l.data.love.summary.total_count,sad:n.data.haha.summary.total_count+l.data.haha.summary.total_count,wow:n.data.sad.summary.total_count+l.data.sad.summary.total_count,angry:n.data.angry.summary.total_count+l.data.angry.summary.total_count})})}},{key:"getComments",value:function(){var e=this;Promise.all([N.a.get("https://graph.facebook.com/".concat(this.state.postId,"/comments?fields=message,from{name,picture}&limit=50&access_token=").concat(this.state.token,"&after=").concat(this.after)),N.a.get("https://graph.facebook.com/".concat(this.state.postId2,"/comments?fields=message,from{name,picture}&limit=50&access_token=").concat(this.state.token,"&after=").concat(this.after2))]).then(function(a){var t=Object(Y.a)(a,2),n=t[0],l=t[1];n.data.data.length>0&&(e.after=n.data.paging.cursors.after,e.setState({comments:[].concat(Object(p.a)(n.data.data),Object(p.a)(e.state.comments))})),l.data.data.length>0&&(e.after2=l.data.paging.cursors.after,e.setState({commentsSecondary:[].concat(Object(p.a)(l.data.data),Object(p.a)(e.state.commentsSecondary))}))}).catch(function(e){console.log(e)})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this,a=this.state,t=a.like,n=a.love,o=a.haha,c=a.sad,r=a.wow,s=a.angry,i=a.token,m=a.postId,u=a.status,h=a.videoBG,p=a.modalShow,g=a.backgroundUrl,S=a.playing,N=a.timeout,w=a.url,j=a.postId2,I=a.fontSize,F=a.controls,T=a.volume,P=a.muted,A=a.loop,B={fontSize:I};return l.a.createElement("div",{className:"live-main",style:{backgroundImage:"url(".concat(g,")")}},l.a.createElement("div",{className:"live-controls",style:X},l.a.createElement(E.a,{variant:"primary",className:"btn-control",onClick:this.handleShow})),l.a.createElement(f.a,{show:p,size:"lg",onHide:this.handleClose},l.a.createElement(f.a.Header,{closeButton:!0},l.a.createElement(f.a.Title,null,"Controls"),l.a.createElement(d.b,{to:"/",className:"ml-2 btn btn-danger"},"Single Posts")),l.a.createElement(f.a.Body,null,l.a.createElement(b.a,null,l.a.createElement("h5",null,"Facebook Connect"),l.a.createElement(v.a,null,l.a.createElement(y.a,{md:12,className:"mb-3"},l.a.createElement(C.a,{className:"mb-3"},l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,{id:"basic-addon1"},"Access Token")),l.a.createElement(k.a,{placeholder:"EAAAAAYsX7TsBAGNuxoKZC6V1DVi...","aria-label":"Access Token",value:i,onChange:this.tokenChange})),l.a.createElement(C.a,{className:"mb-3"},l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,null,"Post 1 | Post 2")),l.a.createElement(k.a,{placeholder:"1010500792634...","aria-label":"Post ID",value:m,onChange:this.postIdChange}),l.a.createElement(k.a,{className:"post2Input",placeholder:"1010500654256...","aria-label":"Post ID 2",value:j,onChange:this.postId2Change})),l.a.createElement(C.a,null,l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,null,"Request Time (Default: 3s)")),l.a.createElement(k.a,{type:"number",value:N,onChange:this.timeoutChange,placeholder:"Set time each get data (Default: 3s)"}),l.a.createElement(C.a.Append,null,l.a.createElement(E.a,{variant:"primary",className:"btn-load",onClick:function(){return e.savefbdata(i,m)}},u?"Pause":"Load"))))),l.a.createElement("h5",null,"Live Customize"),l.a.createElement(v.a,{className:"mb-3"},l.a.createElement(y.a,{md:6},l.a.createElement(C.a,null,l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,{id:"basic-addon1"},"Background")),l.a.createElement(k.a,{placeholder:"Ex: https://i.imgur.com/G2....jpg","aria-label":"Background",value:g,onChange:this.bgChange}),l.a.createElement(C.a.Append,null,l.a.createElement(E.a,{variant:"primary",className:"btn-load",onClick:function(){return W()}},"Choose File"),l.a.createElement(k.a,{type:"file",id:"bgFile","aria-label":"Image File",accept:"image/png, image/jpeg",onChange:function(a){return e.handleChangeImage(a.target.files[0])},hidden:!0})))),l.a.createElement(y.a,{md:6,className:"mb-3"},l.a.createElement(C.a,null,l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,{id:"basic-addon1"},"Font Size (",I,"px)")),l.a.createElement(k.a,{className:"slider",type:"range",max:40,"aria-label":"Font Size",value:I,onChange:this.fontSizeChange}))),l.a.createElement(y.a,{md:12},l.a.createElement(C.a,{className:"mb-3"},l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,{id:"basic-addon3"},"Video Background(.mp4)")),l.a.createElement(k.a,{placeholder:"Ex: https:https://sample-videos.com/..._bunny_720p_10mb.mp4","aria-label":"Background",value:h,onChange:this.videoBGChange}),l.a.createElement(C.a.Append,null,l.a.createElement(E.a,{variant:"primary",className:"btn-load",onClick:function(){return M()}},"Choose File"),l.a.createElement(k.a,{type:"file",id:"bgVideoFile","aria-label":"Video/Audio File",onChange:function(a){return e.handleChangeFile2(a.target.files[0])},hidden:!0})))),l.a.createElement(y.a,{md:12},l.a.createElement(C.a,null,l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,{id:"basic-addon1"},"Video/Audio Link")),l.a.createElement(k.a,{placeholder:"Ex: https://youtube.com/...","aria-label":"Video/Audio Link",value:w,onChange:this.urlChange}),l.a.createElement(C.a.Append,null,l.a.createElement(E.a,{variant:"primary",className:"btn-load",onClick:function(){return H()}},"Choose File"),l.a.createElement(k.a,{type:"file",id:"chooseFile","aria-label":"Video/Audio File",onChange:function(a){return e.handleChangeFile(a.target.files[0])},hidden:!0}))))),l.a.createElement(v.a,null,l.a.createElement(y.a,{md:12},l.a.createElement(C.a.Prepend,null,l.a.createElement(E.a,{variant:"primary",className:"btn-load",onClick:this.playPause},S?"Pause":"Play"),l.a.createElement(C.a.Checkbox,{checked:F,onChange:this.toggleControls}),l.a.createElement(k.a,{value:"Controls",disabled:!0,className:"mr-2"}),l.a.createElement(C.a.Checkbox,{checked:P,onChange:this.toggleMuted}),l.a.createElement(k.a,{value:"Mute",disabled:!0,className:"mr-2"}),l.a.createElement(C.a.Checkbox,{checked:A,onChange:this.toggleLoop}),l.a.createElement(k.a,{value:"Loop",disabled:!0,className:"mr-2"}),l.a.createElement(C.a.Text,{id:"basic-addon1"},"Volume"),l.a.createElement(k.a,{className:"slider",type:"range","aria-label":"Volume",min:0,max:1,step:"any",value:T,onChange:this.setVolume})))))),l.a.createElement(f.a.Footer,null,l.a.createElement("span",null,"\xa9 2019 made with \u2661 by ",l.a.createElement("a",{href:"https://fb.com/5515886"},"L\xea H\u1eadu")))),l.a.createElement("div",{className:"videoBG"},l.a.createElement("div",{className:"overlay"}),l.a.createElement(D,{videoBG:h})),l.a.createElement("div",{className:"main-area",style:J},l.a.createElement(x,{videoplayer:te,url:w,playing:S,controls:F,volume:T,muted:P,loop:A}),l.a.createElement(z,{reactionsParent:Z,countText:$,reactionItem:Q,like:t,love:n,haha:o,sad:c,wow:r,angry:s}),l.a.createElement("div",{className:"comments",style:ee},this.state.comments.map(function(e,a){return l.a.createElement(O,{customFont:B,key:a,imageSrc:e.from.picture,name:e.from.name,message:e.message})})),l.a.createElement("div",{className:"comments",style:ae},this.state.commentsSecondary.map(function(e,a){return l.a.createElement(O,{customFont:B,key:a,imageSrc:e.from.picture,name:e.from.name,message:e.message})}))))}}]),a}(n.Component),oe=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(h.a,{exact:!0,path:"/",component:K}),l.a.createElement(h.a,{path:"/dualposts",component:le}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},69:function(e,a,t){e.exports=t.p+"static/media/LIKE.7b593078.gif"},70:function(e,a,t){e.exports=t.p+"static/media/LOVE.801526e1.gif"},71:function(e,a,t){e.exports=t.p+"static/media/HAHA.7c8dac3b.gif"},72:function(e,a,t){e.exports=t.p+"static/media/SAD.447909ad.gif"},73:function(e,a,t){e.exports=t.p+"static/media/WOW.9baf7e7f.gif"},74:function(e,a,t){e.exports=t.p+"static/media/ANGRY.16f6c102.gif"},82:function(e,a,t){e.exports=t(141)}},[[82,1,2]]]);
//# sourceMappingURL=main.bff0301f.chunk.js.map