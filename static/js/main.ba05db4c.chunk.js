(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),s=(n(18),n(5)),l=n(2),i=(n(19),n(20),n(0)),r=function(e){var t="card "+e.className;return Object(i.jsx)("div",{className:t,children:e.children})},u=(n(22),function(e){return Object(i.jsx)("div",{className:"expenses-filter",children:Object(i.jsxs)("div",{className:"expenses-filter__control",children:[Object(i.jsx)("label",{children:"Filter by year"}),Object(i.jsxs)("select",{value:e.selectedYear,onChange:function(t){e.onSaveYear(t.target.value)},children:[Object(i.jsx)("option",{value:"2022",children:"2022"}),Object(i.jsx)("option",{value:"2021",children:"2021"}),Object(i.jsx)("option",{value:"2020",children:"2020"}),Object(i.jsx)("option",{value:"2019",children:"2019"})]})]})})}),o=(n(23),n(24),n(25),function(e){var t=e.date.toLocaleString("en-us",{day:"2-digit"}),n=e.date.toLocaleString("en-us",{month:"long"}),a=e.date.getFullYear();return Object(i.jsxs)("div",{className:"expense-date",children:[Object(i.jsx)("div",{className:"expense-date__day",children:t}),Object(i.jsx)("div",{className:"expense-date__month",children:n}),Object(i.jsx)("div",{className:"expense-date__year",children:a})]})}),j=function(e){return Object(i.jsx)("li",{children:Object(i.jsxs)(r,{className:"expense-item",children:[Object(i.jsx)(o,{date:e.date}),Object(i.jsxs)("div",{className:"expense-item__description",children:[Object(i.jsx)("h2",{children:e.title}),Object(i.jsx)("div",{className:"expense-item__price",children:e.amount})]})]})})},d=function(e){return 0===e.items.length?Object(i.jsx)("h2",{className:"expenses-list__fallback",children:"No expenses found"}):Object(i.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(i.jsx)(j,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},b=n(9),x=(n(26),n(27),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(i.jsxs)("div",{className:"chart-bar",children:[Object(i.jsx)("div",{className:"chart-bar__inner",children:Object(i.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(i.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),O=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return Object(i.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(i.jsx)(x,{value:e.value,maxValue:n,label:e.label},e.label)}))})},h=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(b.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(i.jsx)(O,{dataPoints:n})},v=n(1),m=function(e){var t=Object(v.useState)("2022"),n=Object(l.a)(t,2),a=n[0],c=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(i.jsx)("div",{children:Object(i.jsxs)(r,{className:"expenses",children:[Object(i.jsx)(u,{selectedYear:a,onSaveYear:function(e){c(e)}}),Object(i.jsx)(h,{expenses:s}),Object(i.jsx)(d,{items:s})]})})},p=n(6),f=(n(28),function(e){var t=Object(v.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1],s=Object(v.useState)(""),r=Object(l.a)(s,2),u=r[0],o=r[1],j=Object(v.useState)(""),d=Object(l.a)(j,2),b=d[0],x=d[1];return Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+u,date:new Date(b)};e.onSaveExpenseData(n),c(""),o(""),x("")},children:[Object(i.jsxs)("div",{className:"new-expense__controls",children:[Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Title"}),Object(i.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},value:a})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Amount"}),Object(i.jsx)("input",{type:"number",min:"0.01",step:"0.01",onChange:function(e){o(e.target.value)},value:u})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Date"}),Object(i.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",onChange:function(e){x(e.target.value)},value:b})]})]}),Object(i.jsxs)("div",{className:"new-expense__actions",children:[Object(i.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(i.jsx)("button",{type:"submit",children:"Add Expense"})]})]})}),_=(n(29),function(e){var t=Object(v.useState)(!1),n=Object(l.a)(t,2),a=n[0],c=n[1];return Object(i.jsxs)("div",{className:"new-expense",children:[!a&&Object(i.jsx)("button",{onClick:function(){c(!0)},children:"Add New Expense"}),a&&Object(i.jsx)(f,{onSaveExpenseData:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),c(!1)},onCancel:function(){c(!1)}})]})}),N=[{id:"e1",title:"Laptop",amount:1400,date:new Date(2020,7,14)},{id:"e2",title:"Laptop stand",amount:49.99,date:new Date(2021,2,12)},{id:"e3",title:"Wireless headphones",amount:199.99,date:new Date(2021,2,28)},{id:"e4",title:"Workout clothes",amount:140.5,date:new Date(2021,5,12)},{id:"e5",title:"Boots",amount:180.99,date:new Date(2022,5,30)},{id:"e6",title:"Winter dresses",amount:250,date:new Date(2022,4,15)},{id:"e6",title:"Whitsundays holiday",amount:3e3,date:new Date(2022,3,29)}],g=function(){var e=Object(v.useState)(N),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(_,{onAddExpense:function(e){a((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(i.jsx)(m,{items:n})]})};c.a.createRoot(document.getElementById("root")).render(Object(i.jsx)(g,{}))}},[[30,1,2]]]);
//# sourceMappingURL=main.ba05db4c.chunk.js.map