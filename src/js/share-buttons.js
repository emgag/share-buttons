$(function () {
    $('.sb--facebook').each(function (k, e) {
        var $e = $(e);
        var url = $e.data('url');

        if (url) {
            $e.click(function (e) {
                e.preventDefault();

                FB.ui({
                    method: 'share',
                    href: url
                }, function (response) {
                });
            });
        }
    });

    $('.sb--twitter').each(function (k, e) {
        var $e = $(e);
        var url = $e.data('url');
        var via = $e.data('via');

        if (url) {
            $e.click(function (e) {
                e.preventDefault();

                var shareUrl = 'https://twitter.com/intent/tweet?text='
                    + encodeURIComponent(url)
                    + ' via @' + via;

                window.open(
                    shareUrl,
                    '_blank',
                    'width=400,height=300'
                );
            });
        }
    });

    $('.sb--google-plus').each(function (k, e) {
        var $e = $(e);
        var url = $e.data('url');

        if (url) {
            $e.click(function (e) {
                e.preventDefault();

                var shareUrl = 'https://plus.google.com/share?url=' + encodeURIComponent(url);

                window.open(
                    shareUrl,
                    '_blank',
                    'width=400,height=460'
                );
            });
        }
    });
});


