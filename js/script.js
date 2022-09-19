// JavaScript


// jQuery

// jQuery Events start===================

// click()

$(document).ready(function(){

  $("p").click(function(){
    $(this).hide();
  });

});

// dblclick()

$(document).ready(function(){
  $("p").dblclick(function(){
    $(this).hide();
  });
});

// mouseenter()

$(document).ready(function(){
  $("#p1").mouseenter(function(){
    alert("You entered p1!");
  });
});

// mouseleave()

$(document).ready(function(){
  $("#p2").mouseleave(function(){
    alert("Bye! You now leave p2!");
  });
});

// mousedown()

$(document).ready(function(){
  $("#p3").mousedown(function(){
    alert("Mouse down over p3!");
  });
});

// mouseup()

$(document).ready(function(){
  $("#p4").mouseup(function(){
    alert("Mouse up over p4!");
  });
});

// hover()

$(document).ready(function(){
  $("#p5").hover(function(){
    alert("You entered p5!");
  },
  function(){
    alert("Bye! You now leave p5!");
  }); 
});

// focus()

$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){
    $(this).css("background-color", "grey");
  });
});

// blur()

$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){
    $(this).css("background-color", "skyblue");
  });
});

// on()

$(document).ready(function(){
  $("p").on("click", function(){
    $(this).hide();
  });
});

// on()  - Multiple Functions

$(document).ready(function(){
  $("h5").on({
    mouseenter: function(){
      $(this).css("background-color", "skyblue");
    },  
    mouseleave: function(){
      $(this).css("background-color", "grey");
    }, 
    click: function(){
      $(this).css("background-color", "yellow");
    }  
  });
});
// jQuery Events end===================

// jQuery Selectors start===================

// element Selector

$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});

// The #id Selector

$(document).ready(function(){
  $("button").click(function(){
    $("#test1").hide();
  });
});

// The .class Selector

$(document).ready(function(){
  $("button").click(function(){
    $(".test2").hide();
  });
});

// The " * " Selector

//$(document).ready(function(){
  //$("button").click(function(){
    //$("*").hide();
  //});
//});

// The " this " Selector

$(document).ready(function(){
  $("button").click(function(){
    $(this).hide();
  });
});

// The " p.intro " Selector

$(document).ready(function(){
  $("button").click(function(){
    $("p.intro").hide();
  });
});

// The " p:first " Selector

$(document).ready(function(){
  $("button").click(function(){
    $("p:first").hide();
  });
});
// jQuery Selectors end===================