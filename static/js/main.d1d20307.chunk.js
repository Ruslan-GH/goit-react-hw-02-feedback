(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(5),s=a.n(o),i=(a(15),a(6)),r=a(7),d=a(8),l=a(10),b=a(9),u=a(0);var j=function(e){var t=e.title,a=e.children;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{style:{color:"purple"},children:[" ",t]}),a]})},k=a(2),h=a.n(k),F=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,o=e.positivePercentage;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Statistics"}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("ul",{className:h.a.FeedbackContainerLabels,children:[Object(u.jsxs)("li",{className:h.a.FeedbackLabelGood,style:{color:"green"},children:["Good: ",t]}),Object(u.jsxs)("li",{className:h.a.FeedbackLabelNeutral,style:{color:"yellow"},children:["Neutral: ",a]}),Object(u.jsxs)("li",{className:h.a.FeedbackLabelBad,style:{color:"red"},children:["Bad: ",n]})]}),Object(u.jsxs)("ul",{className:h.a.CountContainerLabels,children:[Object(u.jsxs)("li",{className:h.a.CountTotalFeedback,children:["Total: ",c]}),Object(u.jsxs)("li",{className:h.a.CountPositiveFeedbackPercentage,children:["Positive Feedback: ",o," %"]})]})]})]})},O=a(4),_=a.n(O),f=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(u.jsx)("ul",{className:_.a.FeedbackContainerButtons,children:t.map((function(e){return Object(u.jsx)("button",{className:_.a.FeedbackButton,onClick:function(){return a(e)},children:e},e)}))})},v=function(e){var t=e.message;return Object(u.jsx)("p",{style:{fontWeight:700},children:t})},x=function(e){Object(l.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.counterFeedback=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=0===this.state.good?0:this.countPositiveFeedbackPercentage();return Object(u.jsxs)(j,{title:" \u2615\ufe0f \u0421afe ''Expresso'' \u2615\ufe0f",children:[Object(u.jsx)(f,{options:["good","neutral","bad"],onLeaveFeedback:this.counterFeedback}),e>0?Object(u.jsx)(F,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,positivePercentage:t}):Object(u.jsx)(v,{message:" \ud83e\udd37\u200d\u2642\ufe0f There is no feedback \ud83e\udd37\u200d\u2642\ufe0f "})]})}}]),a}(n.Component),g=x;s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))},2:function(e,t,a){e.exports={FeedbackContainerButtons:"Statistics_FeedbackContainerButtons__1esCl",FeedbackButtonGood:"Statistics_FeedbackButtonGood__2twdc",FeedbackButtonNeutral:"Statistics_FeedbackButtonNeutral__2gevK",FeedbackButtonBad:"Statistics_FeedbackButtonBad__3NPJv",FeedbackContainerLabels:"Statistics_FeedbackContainerLabels__2_y85",CountContainerLabels:"Statistics_CountContainerLabels__attDf",CountTotalFeedback:"Statistics_CountTotalFeedback__12E_X"}},4:function(e,t,a){e.exports={FeedbackContainerButtons:"FeedbackOptions_FeedbackContainerButtons__10BLI",FeedbackButton:"FeedbackOptions_FeedbackButton__i-xi7"}}},[[17,1,2]]]);
//# sourceMappingURL=main.d1d20307.chunk.js.map