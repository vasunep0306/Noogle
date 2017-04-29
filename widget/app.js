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
    console.log(document.getElementById("tags").innerHTML);
}

function feelingLucky() {
    alert("Yeah too bad you're not lucky");
}