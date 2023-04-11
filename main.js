$(document).ready(function() {
    $(".text1").mouseenter(function() {
        $(".text1").hide();
        $(".text2").show();
    });
    $(".text2").mouseleave(function() {
        $(".text2").hide();
        $(".text1").show();
    });
  
    $(".caja2").click(function() {
        $("#img").animate({
            width: "100%"
        });
    });
    $(".caja2").mouseleave(function() {
        $("#img").animate({
            width: "20%"
        });
    });
  });
  