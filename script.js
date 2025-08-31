document.getElementById("exp-School").addEventListener("click", function () {
    document.getElementById("projects-window").style.display = "none";
    document.getElementById("initial-window").style.display = "none";
    document.getElementById("school-window").style.display = "block";
    document.getElementById("exp-School").style.display = "none";
    document.getElementById("projects-button").style.display = "inline-block";
    document.getElementById("back-button").style.display = "inline-block";
});

document.getElementById("projects-button").addEventListener("click", function () {
    document.getElementById("initial-window").style.display = "none";
    document.getElementById("school-window").style.display = "none";
    document.getElementById("projects-window").style.display = "block";
    document.getElementById("projects-button").style.display = "none";
    document.getElementById("exp-School").style.display = "inline-block";
    document.getElementById("back-button").style.display = "inline-block";
});

document.getElementById("back-button").addEventListener("click", function () {
    document.getElementById("school-window").style.display = "none";
    document.getElementById("projects-window").style.display = "none";
    document.getElementById("initial-window").style.display = "block";
    document.getElementById("exp-School").style.display = "inline-block";
    document.getElementById("projects-button").style.display = "inline-block";
    document.getElementById("back-button").style.display = "none";
});