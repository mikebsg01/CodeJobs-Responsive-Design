/*
-
-
-
- Titulo del Archivo: Redimensionar
- Utilidad: Eliminar contenidos pesados (como images, videos, flash o incluso 
- estilos CSS) que no sean adaptables para dispositivos móviles.
- Autor: Michael Serrato
- Correo Electrónico: mikebsg01@hotmail.com
- Twitter: @mikebsg01
-
-
*/

window.addEventListener("load", init);

function init(){


  if ( document.width <= 480 ) {

      $(".icon-codejobs-navbar").removeClass("hidden");

      $(".heading-style").each(function(){

        $(this).addClass("h-mobile");
        $(this).removeClass("heading-style");

      });

      $("div#footer").removeClass("style-for-footer");

      $(".table-data-footer").addClass("hidden");

      $(".style-for-header").css({ "display" : "none", "visibility" : "hidden" });
      $("#search-content-form").css({ "display" : "none", "visibility" : "hidden" });
      $(".content-codejobs").css({ "display" : "none", "visibility" : "hidden" });
  
      
      $("button#open-form-search").removeClass("hidden");
      $("button#open-form-search").css("margin-bottom","5px");

      $("button#open-form-search").click(function(){

          $("#search-content-form").css({ "display" : "block", "visibility" : "visible" });

          $(this).addClass("hidden");
          $(this).css("margin-bottom","0px");

      });

  }

  window.onresize = function(){

    if ( document.width <= 480 ) {

      $(".icon-codejobs-navbar").removeClass("hidden");

      $(".heading-style").each(function(){

        $(this).addClass("h-mobile");
        $(this).removeClass("heading-style");

      });
        
      $("div#footer").removeClass("style-for-footer");

      $(".table-data-footer").addClass("hidden");

      $(".style-for-header").css({ "display" : "none", "visibility" : "hidden" });
      $("#search-content-form").css({ "display" : "none", "visibility" : "hidden" });
      $(".content-codejobs").css({ "display" : "none", "visibility" : "hidden" });
      

      $("button#open-form-search").removeClass("hidden");
      $("button#open-form-search").css("margin-bottom","5px");

      $("button#open-form-search").click(function(){

          $("#search-content-form").css({ "display" : "block", "visibility" : "visible" });

          $(this).addClass("hidden");
          $(this).css("margin-bottom","0px");

      });

    }else{

      $(".icon-codejobs-navbar").addClass("hidden");

      $(".h-mobile").each(function(){

        $(this).toggleClass("h-mobile");
        $(this).addClass("heading-style");

      });

      $("div#footer").addClass("style-for-footer");

      $(".table-data-footer").removeClass("hidden");

      $(".style-for-header").css({ "display" : "block", "visibility" : "visible" });
      $("#search-content-form").css({ "display" : "block", "visibility" : "visible" });
      $(".content-codejobs").css({ "display" : "block", "visibility" : "visible" });

      $("button#open-form-search").addClass("hidden");
  
    }

  }
  

}
