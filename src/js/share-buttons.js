(function (window, document, $) {
    var reset = function () {
        $('.sb--button').each(function (k, e) {
            $(e).off('click');
        });
    };

    var init = function () {
        // show/hide share buttons marked as native fallback depending on native share availability
        $('.sb--native-fallback').each(function (k, e) {
            navigator.share ? $(e).hide() : $(e).show();
        });

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
                        '?url=' + encodeURIComponent(url) +
                        '&text=' + encodeURIComponent(text);

                    if (via) {
                        shareUrl += '&via=' + encodeURIComponent(via);
                    }

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

        $('.sb--native').each(function (k, e) {
            var $e = $(e);
            var url = $e.data('url');
            var text = $e.data('text') || '';

            if (!navigator.share) {
                $e.hide();
                return;
            }

            $e.show();

            if (url) {
                $e.click(function (e) {
                    e.preventDefault();

                    navigator.share({
                        title: text,
                        url: url
                    });
                });
            }
        });
    };

    $(document).on('init-share-buttons', function () {
        reset();
        init()
    });
    $(document).on('reset-share-buttons', function () {
        reset()
    });
    $(init);
}(window, document, window.jQuery));
