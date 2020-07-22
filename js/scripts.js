$("document").ready(function(){
    $("#javascript").click(function(){
        $("#js-descr").slideDown();
    });
    $("#js-descr").click(function(){
        $(this).hide();
    });
});