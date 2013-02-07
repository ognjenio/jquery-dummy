(function($){
  $.fn.dummy = function() {    
    this.each(function(index) {      
      var defaultSize = 5;
      
      dimen = {
        height: $(this).height() == 0? defaultSize : $(this).height(), 
        width: $(this).width() == 0? defaultSize : $(this).width()
      };
      
      if ($(this).data("dummy") != "")
      {
        dimen.height = isNaN(parseInt($(this).data("dummy").split("x")[1]))? defaultSize : parseInt($(this).data("dummy").split("x")[1]);
        dimen.width = isNaN(parseInt($(this).data("dummy").split("x")[0]))? defaultSize : parseInt($(this).data("dummy").split("x")[0]);;
      }
      
      var p = new PNGlib(dimen.width, dimen.height, 256);
      var background = p.color(0, 0, 0, 0);
      
      for (var i = 0; i < dimen.width; i++) {
        for (var j = 0; j < dimen.height; j++) {
          p.buffer[p.index(i, j)] = p.color(0x00, 0xcc, 0x44);
        }
      }
      
      $(this).html('<img src="data:image/png;base64,'+p.getBase64()+'">');
    });
  };
})(jQuery);

$(document).ready(function(){    
  $("[data-dummy]").dummy();  
});

