/* @author: Leandro Salar, Marcelo Salar. @version: 0.1;  */

/* Declaracion de variables
============================ */
function cargaAlgo()
{

    $( window ).on( "orientationchange", function( event ) {
      if(event.orientation == "portrait")
      {
       setTimeout(function(){
            $(".contenedorCorazon").css("-webkit-transform","rotate(0deg)").css("margin-left","0px");
        },600);
      }
      else
      {
        setTimeout(function(){
            $(".contenedorCorazon").css("-webkit-transform","rotate(-90deg)").css("margin-left","-16px");
        },600);
      }
    });

    $h = parseInt($(window).height());
    $w = parseInt($(window).width());

    $(".contenedorCorazon").width($w);
    $(".botonVerMas1").css({marginTop:$h-508});

    $(".botonVerMas1").click(function(){

       
        $id = $(this).prop("id");

        if($id == "nuevo")
        {
            $("input[name=nombre1]").val("");
            $("input[name=nombre2]").val("");
            $("#coinciden").html("");
            $(this).html("Calcular");
            $(this).prop("id","nada");
        }
        else
        {
            
            n1 = $("input[name=nombre1]").val();
            n2 = $("input[name=nombre2]").val();

            if(n1 != "" && n2 != "")
            {
                $(".loaad").fadeIn("fast",function(){
                    $(".ball").css("-webkit-animation","loading 1s linear infinite");
                });

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
                
                setTimeout(function(){
                    $(".loaad").fadeOut("fast",function(){
                        $("#coinciden").html('Su compatibilidad es de un : '+$fina);
                    });
                },"1000")
                $(".botonVerMas1").html('Volver a calcular').prop("id","nuevo");
            }
            else
                alert("Complete los nombres para saber tu coincidencia.");
        
        } // fin else
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