(this["webpackJsonplyrical-guru"]=this["webpackJsonplyrical-guru"]||[]).push([[0],{38:function(e,t,a){e.exports=a(66)},43:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),l=a.n(c),s=a(14),o=a(15),i=a(18),u=a(17),m=(a(43),a(16)),p=a(20),f=a(7),b=a(34),d=a.n(b),g=r.a.createContext(),h=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loading:void 0,results:[],trackList:[],lyrics:[],correct:0,timeBonus:0},e.setTypeText=function(e){var t,a;return"results"===e?(t="track.search?q_track=",a="&page_size=10&page=1&s_track_rating=desc&apikey="):(t="track.lyrics.get?track_id=",a="&apikey="),{typeSearch:t,moreDetails:a}},e.setTypeState=function(t,a,n){console.log("setTypeState",t),"results"===t?e.setState({results:a.data.message.body.track_list,loading:!1}):e.setState({lyrics:[].concat(Object(f.a)(e.state.lyrics),[Object(p.a)(Object(p.a)({},a.data.message.body.lyrics),{},{track_id:n})]),loading:!1}),console.log(e.state)},e.apiCall=function(t){var a=t.type,n=t.input,r="https://cors-anywhere.herokuapp.com/",c="https://api.musixmatch.com/ws/1.1/",l=e.setTypeText(a),s=l.typeSearch,o=l.moreDetails;console.log("apiCall"),e.setState({loading:!0}),console.log(r+c+s+n+o+"129815630714fa3d4967bef829a8946e"),d.a.get(r+c+s+n+o+"129815630714fa3d4967bef829a8946e").then((function(t){return e.setTypeState(a,t,n)})).catch((function(e){return console.log(e)}))},e.setDataInContext=function(t,a){return e.setState(Object(m.a)({},t,a))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=this.apiCall,a=this.setDataInContext;return r.a.createElement(g.Provider,{value:{state:e,apiCall:t,setDataInContext:a}},this.props.children)}}]),a}(n.Component),E=(g.Consumer,a(11)),v=a(8),y=a(6);var k=function(e){var t=Object(n.useContext)(g);return r.a.createElement("div",{className:"suggested",onClick:function(){return t.setDataInContext("trackList",[].concat(Object(f.a)(t.state.trackList),[e.song]))}},r.a.createElement("div",null,r.a.createElement("p",null,e.song.track_name)),r.a.createElement("div",null,r.a.createElement("p",null,e.song.artist_name)),r.a.createElement("div",null,r.a.createElement("p",null,e.song.album_name)))};var j=function(){var e=Object(n.useState)(""),t=Object(y.a)(e,2),a=t[0],c=t[1],l=Object(n.useContext)(g),s=l.state,o=s.results,i=s.loading,u=o.length||i?"submit-form-button-results":"submit-form-button";return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l.apiCall({type:"results",input:a})},className:u},r.a.createElement("input",{value:a,onChange:function(e){!1===i&&l.setDataInContext("results",[]),c(e.target.value)}}),r.a.createElement("button",null,"SUBMIT")," ",r.a.createElement("br",null),r.a.createElement("br",null),i?"Loading...":"",o.length?r.a.createElement("div",{id:"header"},r.a.createElement("h6",null,"TITLE"),r.a.createElement("h6",null,"ARTIST"),r.a.createElement("h6",null,"ALBUM")):"",o.length?o.map((function(e,t){return r.a.createElement(k,{key:t,song:e.track})})):"")};var O=function(e){var t=Object(n.useContext)(g);return r.a.createElement("div",{className:"choice"},r.a.createElement("div",null,r.a.createElement("p",null,e.song.track_name)),r.a.createElement("div",null,r.a.createElement("p",null,e.song.artist_name)),r.a.createElement("div",null,r.a.createElement("p",null,e.song.album_name)),r.a.createElement("div",{className:"undo-choice",onClick:function(){return t.setDataInContext("trackList",Object(f.a)(t.state.trackList).filter((function(t){return t.track_id!==e.song.track_id})))}},"X"))};var C=function(){var e=Object(n.useContext)(g);return r.a.createElement("ul",null,console.log(e.state.trackList),e.state.trackList.map((function(t,a){return r.a.createElement(O,{key:a,song:t,onClick:function(){return a=t.track_id,e.apiCall({type:"lyrics",input:a});var a}})})))},_=a(35);var x=function(e){var t=Object(n.useState)(""),a=Object(y.a)(t,2),c=a[0],l=a[1],s=Object(n.useContext)(g);return Object(n.useEffect)((function(){var t,a=e.answer[0].lyrics_body.split("...")[0],n=(t=a,Math.floor(Math.random()*t.length)),r=n<a.length-30?n:a.length-30,s=r+30;l(a.slice(r,s)),console.log(c)}),[]),r.a.createElement("div",{id:"answers"},r.a.createElement("ul",null,e.possible.map((function(t,a){return r.a.createElement("li",{key:a,className:"pick",onClick:function(){return t[0].track_id===e.answer[0].track_id&&(s.setDataInContext("correct",s.state.correct+1),alert("correct")),void console.log(s)}},t[0].track_name," - ",r.a.createElement("i",null,t[0].artist_name))}))),r.a.createElement("div",{id:"answer-piece"},"... ",c," ..."))};var S=function(){var e=Object(n.useContext)(g),t=Object(n.useState)(!1),a=Object(y.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),o=Object(y.a)(s,2),i=(o[0],o[1]),u=Object(n.useState)([]),m=Object(y.a)(u,2),p=m[0],b=m[1],d=Object(n.useState)([]),h=Object(y.a)(d,2),E=h[0],v=h[1];Object(n.useEffect)((function(){var t,a=Object(_.a)(e.state.trackList);try{for(a.s();!(t=a.n()).done;){var n=t.value.track_id;e.apiCall({type:"lyrics",input:n})}}catch(r){a.e(r)}finally{a.f()}}),[]),Object(n.useEffect)((function(){var t=e.state,a=t.trackList,n=t.lyrics;a.length===n.length&&(l(!0),j())}),[e.state.lyrics]);var k=function(e){return Math.floor(Math.random()*e.length)},j=function(){var e=["lyric-piece"];i(e[k(e)]),O()},O=function(){for(var t=e.state,a=t.trackList,n=t.lyrics,r=Object(f.a)(a),c=n.length>=5?5:n.length,l=[];c;)l.push(r.splice(k(r),1)),c--;var s=l.length&&l[k(l)][0].track_id;console.log(s);var o=n.filter((function(e){return e.track_id===s}));b(l),v(o),console.log(o)};return r.a.createElement("div",null,c?"Quiz":"Loading...",E.length?r.a.createElement(x,{possible:p,answer:E}):"")},L=function(){var e=Object(n.useContext)(g),t=e.state.trackList.length>=3?r.a.createElement(E.b,{to:"/start"},"Start"):"".concat(e.state.trackList.length,"/3"),a=!(!e.state.results.length&&!e.state.loading),c=a?r.a.createElement(E.b,{to:"/"},"Lyrical Guru"):r.a.createElement("div",{className:"default-page"},"Lyrical Guru"),l=r.a.createElement("p",{className:"starter-text"},"Try your best to identify lyrics from your favorite songs... or test your friends!",r.a.createElement("br",null),"Choose at least three songs, but preferably five.",r.a.createElement("br",null),r.a.createElement("br",null),"Hopefully you listen to music!",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.b,{to:"/choices"},"Choices")," ",t),s=a?r.a.createElement(E.b,{to:"/choices"},"Choices"):l,o=a?t:"",i=a?"normal-nav":null;return r.a.createElement(E.a,null,r.a.createElement("div",{className:i},c,s,o),r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",component:j}),r.a.createElement(v.a,{path:"/choices",component:C}),r.a.createElement(v.a,{path:"/start",component:S})))},T=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(L,null))}}]),a}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.4bfffc32.chunk.js.map