import{_ as u,d as m,f,r as v,o as h,h as g,a as x,e as i,b as e,i as k,g as r,u as y,z as E}from"./index.f360af3a.js";import{u as w}from"./useNavigation.8af6d714.js";import{_ as I,a as S,b as B}from"./example3.de378835.js";const C=m(()=>f(()=>import("./BaseHeader.3eaba090.js"),["assets/BaseHeader.3eaba090.js","assets/index.f360af3a.js","assets/index.496be95f.css","assets/useNavigation.8af6d714.js"])),L=m(()=>f(()=>import("./BaseFooter.b0f50c03.js"),["assets/BaseFooter.b0f50c03.js","assets/index.f360af3a.js","assets/index.496be95f.css"])),T={components:{baseHeader:C,baseFooter:L},setup(p){v("/ux-journey/"),y();const{goto:s}=w(),{showSuccessGrowl:d,showErrorGrowl:l,showWhiteout:b,setOrigin:_}=E();h(()=>{});const o=()=>{let t=document.getElementById("m2-1"),c=document.getElementById("m2-2"),n=document.getElementById("m2-3");t.checked&&n.checked&&!c.checked?(s("/learning/level-1/certificate"),d({title:"Correct",useIcon:"true",msg:"Great, you are now certified as Level 1."})):(s("/learning/level-1/step-1"),l({title:"Incorrect",useIcon:"true",msg:"Oh no! It looks like you need to review the content again."})),a()},a=()=>{let t=document.getElementById("m2-1"),c=document.getElementById("m2-2"),n=document.getElementById("m2-3");t.checked=!1,c.checked=!1,n.checked=!1};return{goto:s,submit:o}}},V={id:"main-content",tabindex:"-1"},A=e("div",{class:"fds-section"},[e("div",{class:"fds-section__bd"},[e("div",{class:"fds-m-t--s fds-m-b--m"},[e("h1",null,"Learning - Level 2 Exam")])])],-1),G={class:"fds-section"},H={class:"fds-section__bd"},N={class:"fds-level fds-level--none@s fds-level--full@m fds-level--grow-even fds-level--align-top fds-level--gutter-l"},O={class:"ds-article"},P=k('<p class="fds-text-size--4 fds-m-b--l">Your client wants to implement the below navigation system. Please select the examples below, that would be a better alternative, based on Jakob&#39;s Law.</p><div class="fds-field fds-field--fill"><ul class="fds-form-list" aria-describedby="millers-help" aria-labelledby="s"><li class="fds-level fds-level--none fds-m-b--s fds-box fds-box--bg-0"><p><input class="fds-checkbox" id="m2-1" type="checkbox" name="millers"><label for="m2-1">Select Example 1</label></p><p class=""><img src="'+I+'"></p></li><li class="fds-level fds-level--none fds-m-b--s fds-box fds-box--bg-0"><p><input class="fds-checkbox" id="m2-2" type="checkbox" name="millers"><label for="m2-2">Select Example 2</label></p><p class=""><img src="'+S+'"></p></li><li class="fds-level fds-level--none fds-m-b--s fds-box fds-box--bg-0"><p><input class="fds-checkbox" id="m2-3" type="checkbox" name="millers"><label for="m2-3">Select Example 3</label></p><p class=""><img src="'+B+'"></p></li></ul><span class="fds-field__help" id="millers-help">Select all that apply</span></div>',2),F={class:"fds-field fds-m-t--xl"};function R(p,s,d,l,b,_){const o=r("baseHeader"),a=r("baseFooter");return g(),x("div",null,[i(o,{USE_SEARCH:"true"}),e("main",V,[A,e("div",G,[e("div",H,[e("div",N,[e("article",O,[P,e("div",F,[e("p",null,[e("button",{onClick:s[0]||(s[0]=(...t)=>l.submit&&l.submit(...t)),class:"fds-btn fds-btn--primary"},"Submit Test")])])])])])])]),i(a)])}const j=u(T,[["render",R]]);export{j as default};
