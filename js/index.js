// init
var window_width = $(window).width() - $('#rocket').width();

var document_height = $(document).height() - $(window).height();

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var object_position_left = window_width * (scroll_position / document_height);
        $('#rocket').css({
            'left': object_position_left
        });
    });
});
