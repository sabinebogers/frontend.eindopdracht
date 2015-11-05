var radiobuttons = document.querySelectorAll(".radio");
var project = document.getElementById("project");
var stage = document.getElementById("stage");

for(var i = 0; i < radiobuttons.length; i++) {
    radiobuttons[i].onclick = function() {
        var val = this.value;
        if (val == 'project') {
            project.classList.remove("displaynone");
            stage.classList.add("displaynone");
        }
        else if (val == 'stage') {
            stage.classList.remove("displaynone");
            project.classList.add("displaynone");
        }
    }
}

var hamburger = document.getElementById("hamburger");
var navigatie = document.getElementById("navigatie");


hamburger.onclick = function() {
        navigatie.classList.toggle("displaynone2");
}






