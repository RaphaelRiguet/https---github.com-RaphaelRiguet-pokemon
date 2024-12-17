
function masquerimage(){
        document.getElementById('junko').style.display='none'
        document.getElementById('oratoria').style.display='none'
        document.getElementById('pirobut').style.display='none'
}

function afficherImage() { 
    document.getElementById("junko").style.display = "block";

}

function afficherImage1() { 
    document.getElementById('oratoria').style.display='block'
}

function afficherImage2() { 
    document.getElementById('pirobut').style.display='block'
}




function afficherTemporairement() {
    setTimeout(function() {
        let junko = document.getElementById("junko");
        junko.style.display = "none";
    }, 2000);
}
masquerimage()

