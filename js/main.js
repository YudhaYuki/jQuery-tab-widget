$(document).ready(function() {

    $('.tab_header .item').on("click", function() {

        var number = $(this).data("option");
        
        // Remove all active
        $('.tab_header .item').removeClass('active');

        // Add active
        $(this).addClass('active');

        // 
        $('.tab_container .container_item').hide();
        $('div[data-item="' + number + '"]').show();
    })

});







