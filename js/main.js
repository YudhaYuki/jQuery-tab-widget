$(document).ready(function() {

    function startOverLay(overlayId) {
            
        $('.overlay-veil').fadeTo("500", "0.8", function() {
            var element = $('div[data-overlayItem="'+ overlayId + '"]');

            element.fadeIn("300");
            element.addClass('active');
        })
    }


    function closeOverlayAll(overlayId) {
        //

        startOverLay(overlayId)


    }


    $('.overlay-item-click').on("click", function(e) {
        e.preventDefault();

        var overlayId = $(this).data("overlay");
        closeOverlayAll(overlayId)
    })

});



