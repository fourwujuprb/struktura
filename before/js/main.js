$(document).ready(function () {
    // console.log('jquery działa');
    // console.log($('.accordion-item'));
    $('.accordion-item').click(function () {
        // console.log('klikam');
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).find('.accordion-content').slideUp();
        } else {
            $(this).addClass('open');
            $(this).find('.accordion-content').slideDown();
        }
    });
});