$(document).ready(function() {
    $(".results").load("./dynamics/php/Consultas.php");

    $(".submitcarr").on('click',function(){
        let carrera= $(".carrera").val();
        $.post("./dynamics/php/Consultas.php",{busq:carrera}).done(function(resp){
            $(".results").html(resp);
        }).fail(function(resp){
            alert("falle");
        });
    })
    
    $(".filtmod").on('change',function(){
        let dato= $(".filtmod").val();
        $.post("./dynamics/php/Consultas.php",{dato:dato}).done(function(resp){
            $(".results").html(resp);
        }).fail(function(resp){
            alert("falle");
        });
    })
});