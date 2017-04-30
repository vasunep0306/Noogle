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
    document.body.innerHTML = '';
    let rick = document.createElement("IMG");
    rick.src = "media/rickRolled.gif";
    rick.style.display = "block";
    rick.style.margin = "auto";
    rick.style.width = "100%";
    rick.style.height = "100%";
    document.body.appendChild(rick);
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
    let noogle = document.getElementById("Noogle");
    let newMeme = document.createElement("IMG");
    newMeme.src = memeURL;
    newMeme.setAttribute("id", "Noogle");
    noogle.parentNode.replaceChild(newMeme, noogle);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function noogleMic() {
    //maybe add some more catchPhrases for the voice lady
    let catchPhrases = [
        "Do you even code?",
    ];
    let randomPhraseNumber = getRandomIntInclusive(0, (catchPhrases.length - 1));
    responsiveVoice.speak(catchPhrases[randomPhraseNumber]);
}