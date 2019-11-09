$( document ).ready(function() {

    $(".drop").click(function(){
        
        if ($(".dropContent", this).hasClass("active")) {
            $(".dropContent", this).removeClass("active");
        }else{
            $(".dropContent").not(this).removeClass("active");
            $(".dropContent", this).addClass("active");
        }
    });


});