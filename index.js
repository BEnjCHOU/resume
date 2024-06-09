function changeTab(evt, tabName) {
    if (tabName == "resume") {
        // close portfolio tab
        document.getElementById("portfolio").style.display = "none";
        document.getElementById("portfolio-button").className = document.getElementById("portfolio-button").className.replace(" active", "");
        // 
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    else {
        // close resume tab
        document.getElementById("resume").style.display = "none";
        document.getElementById("resume-button").className = document.getElementById("resume-button").className.replace(" active", "");
        // 
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }
}