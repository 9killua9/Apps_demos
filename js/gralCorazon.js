/* @author: Leandro Salar, Marcelo Salar. @version: 0.1;  */

/* Declaracion de variables
============================ */
$(document).ready(function(){

});// Fin de ready

function checkOrientation(){
      var currMode = "";
 
      switch(window.orientation){
 
           case 0:
           currMode = "portrait";
           break;
 
           case -90:
            currMode = "landscape";
            $h = parseInt($(window).height());
            $w = parseInt($(window).width());

            $(".contenedorCorazon").width($w);
            $(".botonVerMas1").css({marginTop:$h-180})

           break;
 
           case 90:
            currMode = "landscape";
            $h = parseInt($(window).height());
            $w = parseInt($(window).width());

            $(".contenedorCorazon").width($w);
            $(".botonVerMas1").css({marginTop:$h-180})
           
           break;
 
           case 180:
           currMode = "landscape";
           break;
     }
     document.getElementsByTagName("body")[0].setAttribute("class", currMode);
}

window.onorientationchange = function(){
      checkOrientation();
}

function cargaAlgo()
{
    $h = parseInt($(window).height());
    $w = parseInt($(window).width());

    $(".contenedorCorazon").width($w);
    $(".botonVerMas1").css({marginTop:$h-180})

    $(".botonVerMas1").click(function(){

        n1 = $("input[name=nombre1]").val();
        n2 = $("input[name=nombre2]").val();
        if(n1 != "" && n2 != "")
        {
            var porcent = new Array();

            porcent[0]  = "10%";
            porcent[1]  = "21%";
            porcent[2]  = "35%";
            porcent[3]  = "40%";
            porcent[4]  = "51%";
            porcent[5]  = "66%";
            porcent[6]  = "75%";
            porcent[7]  = "85%";
            porcent[7]  = "93%";
            porcent[8]  = "100%";
            porcent[10] = "70%";

            $rand = Math.floor(Math.random()*10);

            $fina = porcent[$rand];
            
            if ($fina != undefined)
            {
                switch($fina)
                {
                    case "10%":
                        corazonMuyTriste();
                    break;
                    case "21%":
                        corazonMuyTriste();
                    break;
                    case "35%":
                        corazonTriste();
                    break;
                    case "40%":
                        corazonTriste();
                    break;
                    case "51%":
                        corazonBlink('otro');
                    break;
                    case "66%":
                        corazonBlink('otro');
                    break;
                    case "75%":
                        corazonEpa();
                    break;
                    case "85%":
                        corazonEpa();
                    break;
                    case "93%":
                        corazonEpa();
                    break;
                    case "100%":
                        corazonEpa();
                    break;
                    case "70%":
                        corazonEpa();
                    break;
                }
            }
            else
            {
                $fina = "100%"
                corazonEpa();
            }
            $("#coinciden").html('Coinciden en un <br>'+$fina);
        }
        else
            alert("Complete los nombres para saber tu coincidencia.");
    });
    
        
        $t = setTimeout(function(){
                corazonBlink();
            },1000);
}
function corazonBlink(q)
{
    if(q == "otro")
    {
        $('#corazonito').destroy();
        $('#corazonito').removeClass("muyTriste").removeClass("triste").removeClass("epa").addClass("blink");
    }
    
    $('#corazonito').sprite({
                            fps: 9, 
                            no_of_frames: 11, 
                            on_first_frame: function(obj) {
                                obj.spState(1); // change to state 1 (first row) on frame 1
                            }, 
                            on_last_frame: function(obj) {
                                obj.spStop(); // stop the animation on the last frame
                                $t = setTimeout(function(){
                                    if(q == "triste")
                                        corazonTriste();
                                    else
                                        obj.spStart();
                                },4000);
                            }
                        });
    clearTimeout($t);
}
function corazonEpa()
{
    $('#corazonito').destroy();
    $('#corazonito').removeClass("muyTriste").removeClass("triste").removeClass("blink").addClass("epa");
    $('#corazonito').sprite({
                            fps: 9, 
                            no_of_frames: 32, 
                            on_first_frame: function(obj) {
                                obj.spState(1); // change to state 1 (first row) on frame 1
                            }, 
                            on_last_frame: function(obj) {
                                obj.spStop(true); // stop the animation on the last frame
                                /*$t = setTimeout(function(){
                                        obj.spStart();
                                },4000);*/
                            }
                        });
    clearTimeout($t);
}
function corazonMuyTriste()
{
    $('#corazonito').destroy();
    $('#corazonito').removeClass("epa").removeClass("triste").removeClass("blink").addClass("muyTriste");
    $('#corazonito').sprite({
                            fps: 9, 
                            no_of_frames: 40,
                            on_first_frame: function(obj) {
                                obj.spState(); // change to state 1 (first row) on frame 1
                            }, 
                            on_last_frame: function(obj) {
                                obj.spToggle();
                            }
                        });
}
function corazonTriste()
{
    $('#corazonito').destroy();
    $('#corazonito').removeClass("muyTriste").removeClass("epa").removeClass("blink").addClass("triste");
    $('#corazonito').sprite({
                            fps: 9, 
                            no_of_frames: 25, 
                            on_first_frame: function(obj) {
                                obj.spState(1); // change to state 1 (first row) on frame 1
                            },
                            on_last_frame: function(obj) {
                                obj.spStop(true); // stop the animation on the last frame
                                /*$t = setTimeout(function(){
                                    //corazonBlink('otro');
                                },4000);*/
                            }
                            
                        });
    clearTimeout($t);
}
/* Funciones de el framework para leer los resultados del ajax
=================================================================== */
function termina(xq,v)
{
    /**
     * xq -> corresponde al caso del switch
     * v -> resultado en array que envia el ajax
     */
    if( xq == "traeFotos" )
    {
        
    }
    

}