$(document).ready(function() {
    var $doc = $('html, body');
            $('.scrollslow').click(function() {
                $doc.animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top - 80
            }, 750);
            return false;
    });
    $('.menu-btn').on('click', function(){
        $('#menu-mobile').toggleClass('active');
    });
});