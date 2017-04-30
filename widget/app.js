jQuery.ui.autocomplete.prototype._resizeMenu = function () {
  let ul = this.menu.element;
  ul.outerWidth(this.element.outerWidth());
  ul.outerHeight(this.element.outerHeight() * 6);
}

$( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );


function noogleSearch() {
    if ($.trim($("#tags").val()) == "") {
        alert("You can't search for nothing bro beans");
    } else {
        //this is where you make a GET request to a web API
        console.log($.trim($("#tags").val()));
    }
}

function feelingLucky() {
    alert("hahahahahahahah bro!!! you're not lucky at all!");
    rickRoll();
}

function rickRoll() {
    let elements = document.getElementsByTagName("*");
    document.body.innerHTML = '';
    var rick = document.createElement("IMG");
    rick.src = "rickRolled.gif";
    rick.style.display = "block";
    rick.style.margin = "auto";
    rick.style.width = "100%";
    rick.style.height = "100%";
    var audio = new Audio('rickRolling.mp3');
    audio.play();
    document.body.appendChild(rick);
}