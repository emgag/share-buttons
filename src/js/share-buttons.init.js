window.fbAsyncInit = function () {
    FB.init({
        appId: '159095474450164',
        xfbml: true,
        version: 'v2.8'
    });

    document.addEventListener("DOMContentLoaded", function(event) {
        $('.sb--facebook:has(.sb--counter)').each(function (k, e) {
            var $e = $(e);
            var url = $e.data('url');

            $.ajax({
                url: "https://graph.facebook.com/?id=" + url,
                jsonp: "callback",

                success: function (response) {
                    if (response.share.share_count) {
                        count = response.share.share_count;

                        if (count > 1000000) {
                            count = Math.round(count / 100000) / 10 + 'M';
                        } else if (count > 1000) {
                            count = Math.round(count / 100) / 10 + 'K';
                        }

                        $e.find('.sb--counter').text(count);
                    }
                }
            });
        });
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/de_DE/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

