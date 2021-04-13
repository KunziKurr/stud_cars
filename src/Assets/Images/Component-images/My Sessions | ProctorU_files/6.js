window._walkmeWebpackJP&&(window._walkmeWebpackJP=window._walkmeWebpackJP||[]).push([[6],{1078:function(e,t,n){var s=n(1110),i={init:function(){var e=s.get("CaliforniaBalloonStyleChecker"),t=s.get("CaliforniaBalloonStyleGetter"),n=s.get("CaliforniaBalloonStyleSetter"),o=s.get("CaliforniaSurveyStyleGetter"),r=s.get("CaliforniaSurveyStyleSetter"),l=s.get("CaliforniaBalloonEditorWrapper").getFunc;i.isCaliforniaBalloonStyle=function(){return l(e.isCaliforniaBalloonStyle).apply(null,arguments)},i.getMinPopupWidth=function(){return l(t.getMinPopupWidth).apply(null,arguments)},i.addClickAndHover=function(){return l(n.addClickAndHover).apply(null,arguments)},i.setTemplateData=function(){return l(n.setTemplateData).apply(null,arguments)},i.getStaticStyles=function(){return l(o.getStaticStyles).apply(null,arguments)},i.getStateStyles=function(){return l(o.getStateStyles).apply(null,arguments)},i.setErrorDiv=function(){return l(r.setErrorDiv).apply(null,arguments)},i.setSurveyTitleDivStyles=function(){return l(r.setSurveyTitleDivStyles).apply(null,arguments)},i.setSurveyQuestionTitleStyles=function(){return l(r.setSurveyQuestionTitleStyles).apply(null,arguments)},i.setSurveyQuestionSubTitleStyles=function(){return l(r.setSurveyQuestionSubTitleStyles).apply(null,arguments)},i.setQuestionCountStyles=function(){return l(r.setQuestionCountStyles).apply(null,arguments)},i.setAnswerTextStyles=function(){return l(r.setAnswerTextStyles).apply(null,arguments)},i.setAnswerTextAreaStyles=function(){return l(r.setAnswerTextAreaStyles).apply(null,arguments)},i.setAnswerTitleStyles=function(){return l(r.setAnswerTitleStyles).apply(null,arguments)},i.setSurveyContentStyles=function(){return l(r.setSurveyContentStyles).apply(null,arguments)},i.setSurveyWithNpsStyles=function(){return l(r.setSurveyWithNpsStyles).apply(null,arguments)}},services:[],types:[]};n(1194),n(1195),n(1196),n(1197),n(1198),n(1199),n(1200),n(9).registerApi(i,s),e.exports=i},1110:function(e,t,n){e.exports=n(9).create()},1194:function(e,t,n){n(1110).register("CaliforniaBalloonStyleChecker").asCtor(function(e){this.isCaliforniaBalloonStyle=function(){return"california"===e.get().BalloonSettings.BalloonStyle}}).dependencies("SiteConfigManager")},1195:function(e,t,n){n(1110).register("CaliforniaBalloonStyleGetter").asCtor(function(){this.getMinPopupWidth=function(){return 370}})},1196:function(e,t,n){n(1110).register("CaliforniaBalloonStyleSetter").asCtor(function(l,n,s,e,i){var a="border-color",u="background-color",c="color",p="box-shadow",o=".walkme-custom-balloon-normal-button",r=".walkme-custom-balloon-weak-button";function d(e,t,n,o){var r={cssProperty:t,elemSelector:n,balloonDiv:o};switch(t){case a:S(e.ButtonBgColor,e.ButtonBgHoverColor,e.ButtonBgClickColor,r);break;case u:S(e.BalloonColor2,e.ButtonBgHoverColor,e.ButtonBgClickColor,r);break;case c:S(e.FooterTextColor,e.FooterTextColor,e.FooterTextColor,r);break;case p:S(s.calculate(i.SHADOW_TYPES.Button,i.SHADOW_LEVEL.Medium,l.get().BalloonSettings.ButtonBorderColor),"none","none",r)}return r}function S(e,t,n,o){o.regularColor=e,o.hoverColor=t,o.clickColor=n}this.addClickAndHover=function(e,t){n.addClickAndHover(d(e,a,o,t)),n.addClickAndHover(d(e,a,r,t)),n.addClickAndHover(d(e,p,o,t)),n.addClickAndHover(d(e,p,r,t)),n.addClickAndHover(d(e,u,r,t)),n.addClickAndHover(d(e,c,".walkme-custom-powered-by",t))},this.setTemplateData=function(e){var t=l.get().BalloonSettings;e.isCaliforniaStyle=!0,e.data.title||(e.noTitle=!0),e.data.content||(e.noContent=!0),e.data.stepIndexText&&(e.stepIndexText=!0),e.shadow=s.calculate(t.ShadowType,t.ShadowLevel,t.ShadowColor),e.colors.btnShadow=s.calculate(i.SHADOW_TYPES.Button,i.SHADOW_LEVEL.Medium,t.ButtonBorderColor)}}).dependencies("SiteConfigManager, ClickAndHoverAdder, CaliforniaShadowCalculator, CommonUtils, Consts")},1197:function(e,t,n){n(1110).register("CaliforniaShadowCalculator").asCtor(function(o,e){var r,l;this.calculate=function(e,t,n){if(e===r.Shadow)switch(t){case l.Light:return"0px 0px 24px 6px rgba(42, 89, 138, 0.15)";case l.Medium:return"0px 0px 24px 6px rgba(42, 89, 138, 0.25)";case l.Intense:return"0px 0px 24px 6px rgba(42, 89, 138, 0.50)"}else if(e===r.Glow)switch(t){case l.Light:return"0px 0px 24px 6px rgba"+o.hexToRgba(n,.15);case l.Medium:return"0px 0px 24px 6px rgba"+o.hexToRgba(n,.25);case l.Intense:return"0px 0px 24px 6px rgba"+o.hexToRgba(n,.5)}else if(e===r.Button)return"0px 2px 4px 0px rgba"+o.hexToRgba(n,.25)},r=e.SHADOW_TYPES,l=e.SHADOW_LEVEL}).dependencies("UiUtils, Consts")},1198:function(e,t,n){n(1110).register("CaliforniaSurveyStyleGetter").asCtor(function(n,o,r){this.getStaticStyles=function(){var e=n.get().BalloonSettings,t=o.calculate(r.SHADOW_TYPES.Button,r.SHADOW_LEVEL.Medium,e.ButtonBorderColor);return{".walkme-nps-survey":{width:"500px","margin-left":"0px"},".walkme-survey-question-nps-answers":{display:"table",margin:"10px 0 0",width:"100%"},".walkme-survey-nps-answer":{display:"inline-block",margin:"0 2px"},".walkme-survey-nps-answer#walkme-survey-answer-0":{"margin-left":"1px"},".walkme-survey-nps-answer#walkme-survey-answer-10":{"margin-right":"0px"},".walkme-survey-answer-label-nps-radiobutton":{display:"inline-block","max-width":"545px",width:"39px",height:"39px","border-radius":"50%",border:"1px solid #A2ABBD",margin:"0 0 0 -17.5px","text-align":"center","line-height":"40px",color:e.ContentColor,cursor:"pointer",transition:"all 150ms","box-shadow":t},".walkme-survey-question-nps-scores-wrapper":{display:"block",margin:"0"},".walkme-survey-low-score-div, .walkme-survey-high-score-div":{display:"inline-block","font-size":"12px",color:"#A2ABBD"},".walkme-survey-high-score-div":{float:"right"},".walkme-survey-low-score-div > span, .walkme-survey-high-score-div > span":{display:"inline-block","max-width":"196px"},".walkme-survey-high-score-div > span":{float:"right","text-align":"right"}}},this.getStateStyles=function(){var e=n.get().BalloonSettings;return{hoverSelector:".walkme-survey-answer-label-nps-radiobutton",hoverStyle:{"background-color":e.ButtonBgHoverColor,"border-color":e.ButtonBgHoverColor,color:e.ButtonTextColor,transition:"all .1s","box-shadow":"none"},selectionSelector:".walkme-survey-nps-answer.selected .walkme-survey-answer-label-nps-radiobutton",selectionStyle:{"background-color":e.ButtonBgClickColor,"border-color":e.ButtonBgClickColor,color:e.BalloonColor2,transition:"all .1s","box-shadow":"none"},noneSelectionSelector:".walkme-survey-nps-answer:not(.selected) .walkme-survey-answer-label-nps-radiobutton"}}}).dependencies("SiteConfigManager, CaliforniaShadowCalculator, Consts")},1199:function(e,t,n){n(1110).register("CaliforniaSurveyStyleSetter").asCtor(function(e,n,o){var t=this;function r(){return e.get().BalloonSettings}t.setSurveyTitleDivStyles=function(e){e.css("font-size","18px"),e.css("padding","0"),e.css("line-height","31px"),e.css("margin","0 20px 0 0"),e.css("font-weight","normal")},t.setSurveyQuestionTitleStyles=function(e){e.css("font-weight","normal"),e.css("margin","20px 0 20px 0"),e.css("line-height","26px")},t.setSurveyQuestionSubTitleStyles=function(e){e.css("margin","20px 0 20px 0"),e.css("font-weight","normal"),e.css("padding","0"),e.css("font-size","14px"),e.css("line-height","23px")},t.setQuestionCountStyles=function(e){e.css("font-size","10px"),e.css("color","#A2ABBD")},t.setAnswerTextStyles=function(e){e.css("margin","4px 0 10px 5px"),e.css("padding","0"),e.css("font-size","12px"),e.css("font-weight","normal"),e.css("color",r().ContentColor),e.css("line-height","20px")},t.setAnswerTextAreaStyles=function(e){var t=n.calculate(o.SHADOW_TYPES.Button,o.SHADOW_LEVEL.Medium,r().ButtonBorderColor);e.css("margin","10px 0 0px 0"),e.css("padding","5px "),e.css("box-sizing","content-box"),e.css("width","96%"),e.css("border","1px solid #C7CCD7"),e.css("border-radius","4px"),e.css("box-shadow","inset "+t)},t.setAnswerTitleStyles=function(e){e.css("margin","4px 0 10px 5px"),e.css("padding","0"),e.css("font-size","12px"),e.css("font-weight","normal"),e.css("color",r().ContentColor),e.css("line-height","20px")},t.setSurveyContentStyles=function(e){e.find(".walkme-custom-balloon-content").css("margin","20px 20px 0")},t.setSurveyWithNpsStyles=function(e){if(e.is(".walkme-nps-survey-wrapper")){var t=e[0].style;t.setProperty("width","542px","important"),t.setProperty("max-width","542px","important")}else e.css("width","532px");e.css("left","calc(50% - 265px)")},t.setErrorDiv=function(e){e.css("top","8px"),e.css("color","#FF6110")}}).dependencies("SiteConfigManager, CaliforniaShadowCalculator, Consts")},1200:function(e,t,n){n(1110).register("CaliforniaBalloonEditorWrapper").asCtor(function(t){this.getFunc=function(e){return t.get().BalloonSettings.BalloonStyle===n?e:o};var n="california";function o(){}}).dependencies("SiteConfigManager")}}]);