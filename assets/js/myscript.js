$( document ).ready(function() {

    $(".drop").click(function(){
        $(".dropContent").not(this).removeClass("active");
        $(".dropContent", this).addClass("active");
    });

});