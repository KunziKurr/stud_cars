window._walkmeWebpackJP&&(window._walkmeWebpackJP=window._walkmeWebpackJP||[]).push([[16],{1088:function(e,t,r){var a=r(1160),n={init:function(){var e=a.get("NonWebComponentDrawableCreator");n.create=e.create},services:["NonWebComponentDrawableCreator"],types:[]};r(1299),r(9).registerApi(n,a),e.exports=n},1160:function(e,t,r){e.exports=r(9).create()},1299:function(e,t,r){r(1160).register("NonWebComponentDrawableCreator").asCtor(function(i,s,l,c,w,u){this.create=function(e){var t=l.get(e),r=w.extend({},t.innerStyle,t.outerStyle),a=e.RootVisualElement.Style;for(var n in r)void 0===a[n]&&(a[n]=r[n]);var o=i.draw(e);return s.setDefaultAttributes(o,e),c.resetCss(o),(new u).waitForAll(o).then(function(){var e,t,r;e=o,t="all-images-loaded",(r=document.createEvent("Event")).initEvent(t,!0,!0),e.dispatchEvent(r)}),o}}).dependencies("VisualDesignDrawableDrawer, WrapperAttributesSetter, DefaultWrapperStyleProvider, DrawableCssResetter, wmjQuery, ImagesLoadedListener")}}]);