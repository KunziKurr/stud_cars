window._walkmeWebpackJP&&(window._walkmeWebpackJP=window._walkmeWebpackJP||[]).push([[0],{1081:function(t,e,r){(function(n,e){var H=r(26).get();n.register("ActionBotInitializer").asCtor(function(v,w,f,C,b,h,M,A,y,P,E,F,I,k,j,W,B,L,U,G,J,Q,x,R,T,_,z){this.start=function(S){return new e(function(e,n){try{var t=(u=y.getSettingsFile(),d=H&&H.getItem("wm-actionbot-dialog-ui-public-path"),p=d&&d+"main.js",m=u&&u.Components&&u.Components.actionBot,p||m),r=(c=y.getSettingsFile(),g=H&&H.getItem("wm-actionbot-dialog-ui-public-path"),l=(c&&c.Components&&c.Components.actionBot||"").replace(/main\.js$/,""),g||l),i=(s=y.getSettingsFile(),H&&H.getItem("wm-actionbot-dialog-ui-api-base-url")||s.PlayerApiServer);if(!(t&&r&&i)){var a=y.getSettingsFile(),o=y.getCdnServerName();if(W.isSelfHosted){if(!b.isFeatureEnabled("ActionBotsAllowedInSelfHosted"))return e();o=a.PlayerApiServer&&a.PlayerApiServer.replace("papi","cdn")}if(!((t=(r=o+"/chatbot/3/")+"main.js")&&r&&i))return e()}v.addScriptWithCallback(t,"onActionBotReadyCb",function(){return{resolve:e,reject:n,wmDependencies:{publicPath:r,apiBaseUrl:i,dataFile:S,clientStorageManager:f,jQuerySelectorRunner:C,actionStagesFactory:h,inputGenerator:M,consts:A,settingsFile:y,wmjQuery:P,wmLogger:w,eventSender:E,userGuidContainer:F,endUsersManager:I,auditSourceManager:k,classWalkMeAPI:j,launchersModule:B,wmInternals:W,wmAjax:L,eventsTrigger:U,commonEvents:G,topContainerProvider:J,newApiEventsConfigProvider:Q,siteConfigManager:x,shuttlesManager:R,shoutOutsManager:T,eventSenderErrorLogger:_,win:z,eventsListener:{bind:function(){return W.bind.apply(void 0,arguments)},unbind:function(){return W.unbind.apply(void 0,arguments)}}}}},function(){n(new Error("Failed to addScriptWithCallback for: "+t))})}catch(e){n(e)}var s,c,g,l,u,d,p,m})}}).dependencies("CommonUtils, Logger, ClientStorageManager, JQuerySelectorRunner, FeaturesManager,ActionStagesFactory, InputGenerator, Consts, SettingsFile, wmjQuery, EventSender,UserGuidContainer, EndUsersManager, AuditSourceManager, ClassWalkMeAPI, WmInternals, LaunchersModule, WmAjax, EventsTrigger, CommonEvents, TopContainerProvider, NewApiEventsConfigProvider, SiteConfigManager, ShuttlesManager,ShoutOutsManager, EventSenderErrorLogger, win"),t.exports={init:function(e){return n.get("ActionBotInitializer").start(e).catch(function(e){n.get("Logger").error(e)})}}}).call(this,r(1),r(11))}}]);