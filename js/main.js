$(document).ready(function() {

    var current = 1;
 
    $('.cardSlider .btn_prev').on("click", function() {
        current -= 1;
        showSlider(current);
    })

    $('.cardSlider .btn_next').on("click", function() {

        current += 1;
        showSlider(current);
    })

    function showSlider(current) {
        $('.cards_container .item').removeClass('active');

        $('div[data-id="'+ current + '"]').addClass('active');
    }
});



