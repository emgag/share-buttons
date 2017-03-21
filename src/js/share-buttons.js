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
        var text = $e.data('text') || '';

        if (url) {
            $e.click(function (e) {
                e.preventDefault();

                var shareUrl = 'https://twitter.com/intent/tweet?' +
                    '?via=' + encodeURIComponent(via) +
                    '&url=' + encodeURIComponent(url) +
                    '&text=' + encodeURIComponent(text);

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

    $('.sb--mail').each(function (k, e) {
        var $e = $(e);
        var url = $e.data('url');
        var subject = $e.data('subject') || '';

        if (url) {
            $e.click(function (e) {
                e.preventDefault();

                var shareUrl = 'mailto:' +
                    '?subject=' + encodeURIComponent(subject) +
                    '&body=' + encodeURIComponent(url);

                window.open(
                    shareUrl,
                    '_blank'
                );
            });
        }
    });

    $('.sb--whatsapp').each(function (k, e) {
        var $e = $(e);
        var url = $e.data('url');
        var text = $e.data('text') || '';

        if (url) {
            $e.click(function (e) {
                e.preventDefault();

                var shareUrl = 'whatsapp://send' +
                    '?text=' + encodeURIComponent(url) + '%20' + encodeURIComponent(text);

                window.open(
                    shareUrl,
                    '_blank'
                );
            });
        }
    });

});


