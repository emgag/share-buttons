window.fbAsyncInit=function(){FB.init({appId:"159095474450164",xfbml:!0,version:"v2.8"}),$(function(){$(".sb--facebook:has(.sb--counter)").each(function(n,t){var e=$(t),o=e.data("url");$.ajax({url:"https://graph.facebook.com/?id="+o,jsonp:"callback",success:function(n){n.share.share_count&&(count=n.share.share_count,count>1e6?count=Math.round(count/1e5)/10+"M":count>1e3&&(count=Math.round(count/100)/10+"K"),e.find(".sb--counter").text(count))}})})})},function(n,t,e){var o,c=n.getElementsByTagName(t)[0];n.getElementById(e)||(o=n.createElement(t),o.id=e,o.src="//connect.facebook.net/de_DE/sdk.js",c.parentNode.insertBefore(o,c))}(document,"script","facebook-jssdk");