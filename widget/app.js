$(document).ready(function() {
	$("#tags").keyup(function() {
		$("#x").fadeIn();
		if ($.trim($("#tags").val()) == "") {
			$("#x").fadeOut();
		}
	});
	$("#x").click(function() {
		$("#tags").val("");
		$(this).hide();
	});
});

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
    if (document.getElementById("tags").innerHTML == "") {
        alert("You can't search for nothing bro beans");
    } else {
        //do something cool
    }
}

function feelingLucky() {
    alert("hahahahahahahah bro!!! you're not lucky at all!");
}