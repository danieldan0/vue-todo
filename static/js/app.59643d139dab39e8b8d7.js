webpackJsonp([1],{NHnr:function(e,t,n){"use strict";function o(e){n("cTYG")}function r(e){n("es3p")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i={name:"app"},s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],u={render:s,staticRenderFns:c},d=u,l=n("VU/8"),p=o,v=l(i,d,!1,p,null,null),_=v.exports,f=n("/ocq"),m={name:"HelloWorld",data:function(){return{todos:[],new_todo:""}},methods:{add:function(){this.todos.push(this.new_todo),this.new_todo=""},remove:function(e){this.todos.splice(e,1)}}},w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v("TODO:")]),e._v(" "),n("ol",e._l(e.todos,function(t,o){return n("li",[e._v("\n      "+e._s(t)+"\n      "),n("button",{on:{click:function(t){e.remove(o)}}},[e._v("Delete")])])})),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_todo,expression:"new_todo"}],domProps:{value:e.new_todo},on:{input:function(t){t.target.composing||(e.new_todo=t.target.value)}}}),e._v(" "),n("button",{on:{click:e.add}},[e._v("Add")])])},h=[],b={render:w,staticRenderFns:h},g=b,H=n("VU/8"),T=r,k=H(m,g,!1,T,"data-v-615e7acc",null),x=k.exports;a.a.use(f.a);var A=new f.a({routes:[{path:"/",name:"HelloWorld",component:x}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:A,template:"<App/>",components:{App:_}})},cTYG:function(e,t){},es3p:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.59643d139dab39e8b8d7.js.map