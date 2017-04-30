var jsonData = {};
var availableMemes = [];
getMemes();

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

jQuery.ui.autocomplete.prototype._resizeMenu = function () {
  let ul = this.menu.element;
  ul.outerWidth(this.element.outerWidth());
  ul.outerHeight(this.element.outerHeight() * 6);
}

function noogleSearch() {
    var searchText = $.trim($("#tags").val());
    if (searchText == "") {
        alert("You can't search for nothing bro beans");
    } else {
        if (availableMemes.contains(searchText)) {
            for(let i = 0; i < jsonData.length; i++) {
                if (jsonData[i].name == searchText) {
                    displayMeme(jsonData[i].url);
                    break;
                } 
            }
        } else {
            alert("That's not even a meme bro");
        }
    }
}

function feelingLucky() {
    alert("hahahahahahahah bro!!! you're not lucky at all!");
    rickRoll();
}

function rickRoll() {
    displayMeme("media/rickRolled.gif");
    let audio = new Audio('media/rickRolling.mp3');
    audio.play();  
}

//makes GET request to memeGenerating API and stores data in availableMemes
function getMemes() {
    $.when($.getJSON("https://api.imgflip.com/get_memes", function(data) {
        jsonData = data.data.memes;
    })).then(function() {
        for (let i = 0; i < jsonData.length; i++) {
            availableMemes.push(jsonData[i].name);
        }
        $( "#tags" ).autocomplete({
            source: availableMemes
        });
    });
}

function displayMeme(memeURL) {
    document.body.innerHTML = '';
    let newMeme = document.createElement("IMG");
    newMeme.src = memeURL;
    newMeme.style.display = "block";
    newMeme.style.margin = "auto";
    newMeme.style.width = "100%";
    newMeme.style.height = "100%";
    document.body.appendChild(newMeme);
}