var pumpkin1 = document.getElementById("pumpkin1")
var pumpkin2 = document.getElementById("pumpkin2")
var pumpkin3 = document.getElementById("pumpkin3")
var pumpkin4 = document.getElementById("pumpkin4")
var pumpkin5 = document.getElementById("pumpkin5")
var pumpkin6 = document.getElementById("pumpkin6")
var pumpkin7 = document.getElementById("pumpkin7")
var log = document.getElementById("log");
var moves = 0;
    
    pumpkin1.addEventListener("click", function(){
        Switch(pumpkin7);
        Switch(pumpkin2);
        Switch(pumpkin1);
        log.textContent += " Pumpkin 1 was Clicked";
        checkVic();
        
    })
    pumpkin2.addEventListener("click", function(){
        Switch(pumpkin2);
        Switch(pumpkin3);
        Switch(pumpkin1);
        log.textContent += " Pumpkin 2 was Clicked";
        checkVic();
    })
    pumpkin3.addEventListener("click", function(){
        Switch(pumpkin3);
        Switch(pumpkin2);
        Switch(pumpkin4);
        log.textContent += " Pumpkin 3 was Clicked";
        checkVic();
    })
    pumpkin4.addEventListener("click", function(){
        Switch(pumpkin4);
        Switch(pumpkin3);
        Switch(pumpkin5);
        log.textContent += " Pumpkin 4 was Clicked";
        checkVic();
    })
    pumpkin5.addEventListener("click", function(){
        
        Switch(pumpkin5);
        Switch(pumpkin6);
        Switch(pumpkin4);
        log.textContent += " Pumpkin 5 was Clicked";
        checkVic();
    })
    pumpkin6.addEventListener("click", function(){
        Switch(pumpkin7);
        Switch(pumpkin6);
        Switch(pumpkin5);
        log.textContent += " Pumpkin 6 was Clicked";
        checkVic();
    })
    
    pumpkin7.addEventListener("click", function(){
        Switch(pumpkin7);
        Switch(pumpkin6);
        Switch(pumpkin1);
        log.textContent += " Pumpkin 7 was Clicked";
        checkVic();
    })
    function Switch(selpump){
        moves++;
        if(selpump.classList.contains("clicked")){
            selpump.classList.remove("clicked");
        } else {
            selpump.classList.add("clicked");
        }
    }
    function checkVic() {
        if(pumpkin1.classList.contains("clicked") && pumpkin2.classList.contains("clicked") && pumpkin3.classList.contains("clicked") && pumpkin4.classList.contains("clicked") && pumpkin5.classList.contains("clicked") && pumpkin6.classList.contains("clicked") && pumpkin7.classList.contains("clicked") ){
            alert("Vicotry Achieved in " + moves/3 + " moves")
            alert("Here is Log: " + log.textContent)
        }
    }