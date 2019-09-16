$(document).on('init-share-buttons', function () {
    $(this).trigger('reset-share-buttons');

    $('.sb--facebook').each(function (k, e) {
        var $e = $(e);
        var url = $e.data('url');

        if (url) {
            $e.click(function (e) {
                e.preventDefault();

                var shareUrl = 'https://www.facebook.com/sharer/sharer.php' +
                    '?u=' + encodeURIComponent(url);

                window.open(shareUrl, '_blank', 'width=600,height=460');
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

                var shareUrl = 'https://twitter.com/intent/tweet' +
                    '?via=' + encodeURIComponent(via) +
                    '&url=' + encodeURIComponent(url) +
                    '&text=' + encodeURIComponent(text);

                window.open(shareUrl, '_blank', 'width=600,height=460');
            });
        }
    });

    $('.sb--pinterest').each(function (k, e) {
        var $e = $(e);
        var url = $e.data('url');
        var media = $e.data('media');

        if (url) {
            $e.click(function (e) {
                e.preventDefault();

                var shareUrl = 'https://www.pinterest.com/pin/create/link/' +
                    '?url=' + encodeURIComponent(url) +
                    '&media=' + encodeURIComponent(media);

                window.open(shareUrl, '_blank', 'width=400,height=460');
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

                window.open(shareUrl, '_blank');
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

                window.open(shareUrl, '_blank');
            });
        }
    });
}).on('reset-share-buttons', function () {
    $('.sb--facebook, .sb--twitter, .sb--pinterest, .sb--mail, .sb--whatsapp').each(function (k, e) {
        $(e).off('click');
    });
}).trigger('init-share-buttons');
