// Switch Zoom rooms using JQuery
$(document).ready( function () {

    // $('.uw-btn')[0].onclick = null;
    // $('.uw-btn').click(function() {
    //     openNav();
    // });

    var currentRoom = 1;
    var numRooms  = 7
    $(function() {
        $('#room-1-button').addClass("chosen"); 

        for (let i = 1; i <=numRooms; i++) {
            $('#room-'+i+'-button').addClass("notChosen");
        }
    });

    $('.room-button').click(function(e) {
        let roomId = $(this).attr('data-section')[5]
      
        switchRoom(e, roomId);
    });
        
    var switchRoom = function(e, roomId) {
        e.preventDefault();
        currentRoom = roomId;
   
        for (let i = 1; i <= numRooms; i++) {
            $('#room-' + i + "-button").removeClass("chosen").addClass("notChosen");
            $('#room-' + i + "-presentations").hide();
        }
        $('#room-' + roomId + "-button").removeClass("notChosen").addClass("chosen");
        $('#room-' + roomId + "-presentations").fadeIn(400);

        return false;
    };
    $(document).ready(function() {
        $('.sidenav').on('click', '.sidenav-title', function(e) {
            e.preventDefault();
            // closeNav();
            projectId = $(this).attr('data-id');
           
            room = parseInt(projectId[5]);
    
            if (room !== currentRoom) {
                $.when(switchRoom(e, room)).done(scrollToProject(projectId));
            } else {
                scrollToProject(projectId);
            }
        });
    });
    
    var scrollToProject = function(projectId) {
        
       
        $('html, body').animate({
            scrollTop: $('#' + projectId).offset().top
        }, 1000);
    }
});
$(document).ready(function() {
    $("#searchBar").on("input", function() {
        const searchTerm = $(this).val().toLowerCase();
        $(".sidenav-title").each(function() {
            const searchContent = $(this).data("search").toLowerCase();
            if (searchContent.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});