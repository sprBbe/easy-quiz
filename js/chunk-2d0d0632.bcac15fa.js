(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0632"],{6882:function(t,s,i){"use strict";i.r(s);var e=i("2bc5"),r=i("8336"),a=i("62ad"),l=i("2b5d"),o=i("a523"),d=i("4bd4"),n=i("0fd9"),h=i("8654"),c=i("a844"),m=function(){var t=this,s=t._self._c;return s(o["a"],{attrs:{id:"add-quiz",fluid:"",tag:"section"}},[t.breadcrumbs?s(e["a"],{attrs:{items:t.breadcrumbs,divider:"-"}}):t._e(),s(n["a"],{attrs:{justify:"center"}},[s(a["a"],{attrs:{cols:"12",md:"8"}},[s("base-material-card",{scopedSlots:t._u([{key:"heading",fn:function(){return[s("div",{staticClass:"display-2 font-weight-light"},[t._v(" "+t._s(t.id?"Chỉnh sửa":"Thêm")+" Đề thi trắc nghiệm ")]),t.id?t._e():s("div",{staticClass:"subtitle-1 font-weight-light"},[t._v(" Thêm mới đề thi trắc nghiệm ")])]},proxy:!0}])},[s(d["a"],[s(o["a"],{staticClass:"py-0"},[s(n["a"],[s(a["a"],{attrs:{cols:"12"}},[s(h["a"],{staticClass:"purple-input",attrs:{label:"Tiêu đề","error-messages":t.errors.title},model:{value:t.form.title,callback:function(s){t.$set(t.form,"title",s)},expression:"form.title"}})],1),s(a["a"],{attrs:{cols:"12"}},[s(c["a"],{staticClass:"purple-input",attrs:{label:"Chi tiết","error-messages":t.errors.description},model:{value:t.form.description,callback:function(s){t.$set(t.form,"description",s)},expression:"form.description"}})],1),s(a["a"],{attrs:{cols:"12",md:"6"}},[s(h["a"],{staticClass:"purple-input",attrs:{label:"Thời gian giới hạn (Giây.)","error-messages":t.errors.time_limit},model:{value:t.form.time_limit,callback:function(s){t.$set(t.form,"time_limit",s)},expression:"form.time_limit"}})],1),s(a["a"],{attrs:{cols:"12"}},[s(l["a"],{attrs:{"hide-selected":"",hint:"Nhập tối đa 15 nhãn",label:"Nhập một số nhãn cho đề thi",multiple:"","persistent-hint":"","small-chips":"","error-messages":t.errors.labels},model:{value:t.form.labels,callback:function(s){t.$set(t.form,"labels",s)},expression:"form.labels"}})],1),s(a["a"],{staticClass:"text-right",attrs:{cols:"12"}},[t.id?s(r["a"],{staticClass:"mr-0",attrs:{color:"success"},on:{click:t.update}},[t._v(" Cập nhật ")]):s(r["a"],{staticClass:"mr-0",attrs:{color:"success"},on:{click:t.store}},[t._v(" Lưu ")])],1)],1)],1)],1)],1)],1)],1)],1)},u=[],p=i("5ce5"),f={name:"ManageQuiz",data:()=>({loader:!1,form:{},errors:{},id:null}),watch:{"form.labels"(t){t.length>15&&this.$nextTick(()=>this.form.labels.pop())}},methods:{emptyForm(){return{id:null,title:"",description:"",time_limit:"1800",labels:[]}},store(){this.loader=!0,p["a"].post("admin/quiz",this.form).then(t=>{this.loading=!1,this.form=this.emptyForm(),this.$toastr.s(t.data.message),this.errors={}}).catch(t=>{422===t.response.status&&(this.errors=t.response.data.errors,Object.keys(this.errors).filter((function(t){return~t.indexOf("labels")})).forEach(t=>{this.$toastr.e(this.errors[t])})),this.loading=!1})},edit(){this.id=this.$route.params["id"],this.loader=!0,p["a"].get("admin/quiz/"+this.id).then(t=>{this.loading=!1;let s=t.data.data;this.form={id:s.id,title:s.title,description:s.description,time_limit:s.time_limit,labels:s.labels.map(t=>t.name)},this.errors={}}).catch(t=>{this.$toastr.e(t),this.loading=!1})},update(){this.loader=!0,p["a"].put("admin/quiz/"+this.id,this.form).then(t=>{this.loading=!1,this.$toastr.s(t.data.message),this.errors={}}).catch(t=>{422===t.response.status&&(this.errors=t.response.data.errors,Object.keys(this.errors).filter((function(t){return~t.indexOf("labels")})).forEach(t=>{this.$toastr.e(this.errors[t])})),this.loading=!1})}},created(){this.form=this.emptyForm(),this.$route.params["id"]&&this.edit()},computed:{breadcrumbs(){return[{text:"Quizzes",disabled:!1,href:"/quizzes"},{text:this.id?"Edit":"Add new",disabled:!0,href:this.id?`/quizzes/:${this.id}/edit`:"/quizzes/add"}]}}},b=f,g=i("2877"),_=Object(g["a"])(b,m,u,!1,null,null,null);s["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d0d0632.bcac15fa.js.map