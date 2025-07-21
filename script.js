isMobile();


$( document ).ready(function() {
    var sobreCarta = $("#sobreCarta");
    var envelope = $('#envelope');
    var cartaAbierta = $('.cartaAbierta')
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
      btn_open.addClass("resetButtonHoverClick");
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
      sobreCarta.addClass("elementToFadeInAndOut");
      
      

      
        /*setTimeout(() => {
          cartaAbierta.removeClass("oculto")
        }, 900)*/
      
      setTimeout(() => {
        cartaAbierta.removeClass("oculto")//.addClass("animationBlock");
      }, 1000)
      
    }
    function close() {
      location.reload();
        /*envelope.addClass("close")
           .removeClass("open");*/
      
      
      
      
      
    }
   
});

function isMobile() {
  let navegador = navigator.userAgent;
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    return alert("Estás usando un dispositivo móvil!!");
  } else {
    alert("No estás usando un móvil");
    
    return location.href= "/notcel.html";
  }
}
