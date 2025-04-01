// Switch Zoom rooms using JQuery
$(function() {

    $('#room-1-button').addClass("chosen");
    $('#room-2-button').addClass("notChosen");

    $('#room-1-button').on('click', function() {
        $('#room-2-button').removeClass("chosen").addClass("notChosen");
        $('#room-1-button').removeClass("notChosen").addClass("chosen");
        $('#room-2-presentations').hide();
        $('#room-1-presentations').fadeIn(400);
    });

    $('#room-2-button').on('click', function(index) {
        $('#room-1-button').removeClass("chosen").addClass("notChosen");
        $('#room-2-button').removeClass("notChosen").addClass("chosen");
        $('#room-1-presentations').hide();
        $('#room-2-presentations').fadeIn(400);

    });
});