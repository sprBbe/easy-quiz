(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e96ec"],{"8e09":function(t,a,s){"use strict";s.r(a);var e=s("0798"),r=s("2bc5"),i=s("62ad"),d=s("a523"),c=s("0fd9"),n=function(){var t=this,a=t._self._c;return a(d["a"],{attrs:{fluid:"",tag:"section"}},[t.breadcrumbs?a(r["a"],{attrs:{items:t.breadcrumbs,divider:"-"}}):t._e(),a(c["a"],{attrs:{justify:"center"}},[a(i["a"],{attrs:{cols:"12",md:"8"}},[a("base-material-card",{attrs:{title:"MCQ Details"}},[a(d["a"],{staticClass:"pb-0 mt-5"},[a(c["a"],{staticClass:"pb-5",attrs:{align:"center"}},[a(i["a"],{attrs:{cols:"2"}},[a("h3",[t._v("Question")])]),a(i["a"],{attrs:{cols:"10"}},[a("h3",[t._v(t._s(t.data.question))])])],1),a("hr"),a(c["a"],{staticClass:"pb-5"}),t._l(5,(function(s){return a(c["a"],{key:s,attrs:{align:"center"}},[a(i["a"],{attrs:{cols:"2"}},[a("h4",[t._v("Option "+t._s(s))])]),a(i["a"],{attrs:{cols:"10"}},[s===t.data.correct_answer_no?[a(e["a"],{attrs:{dense:"",text:"",color:"green"}},[t._v(" "+t._s(t.data["option_"+s])+" ")])]:[t._v(" "+t._s(t.data["option_"+s])+" ")]],2)],1)}))],2)],1)],1)],1)],1)},o=[],l=s("5ce5"),u={name:"MCQ",data:()=>({loader:!1,data:{},id:null}),computed:{breadcrumbs(){return[{text:"MCQs",disabled:!1,href:"/mcq"},{text:this.id,disabled:!0,href:"/mcq/"+this.id}]}},methods:{get(){this.loader=!0,l["a"].get("admin/mcq/"+this.$route.params.id).then(t=>{this.loading=!1,this.data=t.data}).catch(t=>{this.$toastr.e(t),this.loading=!1})}},created(){this.get(),this.id=this.$route.params.id}},h=u,_=s("2877"),b=Object(_["a"])(h,n,o,!1,null,null,null);a["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0e96ec.5934bf10.js.map