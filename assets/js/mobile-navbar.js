'use strict';

$(document).ready(function() {
    $('.mobile-sandwitch').click(function() {
        if ($('.mobile-top-section').hasClass('active-mobile')) {
            $('.mobile-top-section').removeClass('active-mobile');
            $('.mobile-sandwitch').removeClass('active-nav-btn');
        } else {
            $('.mobile-top-section').addClass('active-mobile');
            $('.mobile-sandwitch').addClass('active-nav-btn');
        }
    });
});