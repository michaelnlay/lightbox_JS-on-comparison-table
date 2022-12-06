//Get the modal ====================
var modal_d = document.getElementById("modal-diamond");
var modal_p = document.getElementById("modal-platinum");
var open_tap = "none" //default to let it to be none

//When user click on the buttn, open the modal
function btnClickedDiamond() {

    modal_p.style.display = "none";
    //add open class name next to the (arrow) button for rotate animation

    if (open_tap != "diamond") { //check if other modal beside diamond is open, if so then close it 
        modal_d.style.display = "block"; //then open the diamond modal
        removeOpenClass() //remove all open class so the arrow position back to original place for other modals 
        open_tap = "diamond"
        document.getElementById("btn-diamond").className += " open"; //this line will create an open class with css properties to rotate the arrow

    } else {
        modal_d.style.display = "none"; //if the open_tap is already in diamond, then close it when click again
        removeOpenClass() //remove all open class
        open_tap = "none"


    }

}

function btnClickedPlatinum() {

    modal_d.style.display = "none";
    //add open class name next to the (arrow) button for rotate animation

    if (open_tap != "platinum") {
        modal_p.style.display = "block";
        open_tap = "platinum"

        removeOpenClass()
        document.getElementById("btn-platinum").className += " open"

    } else {
        modal_p.style.display = "none"
        removeOpenClass()
        open_tap = "none"


    }

}

// remove open class so that the arrow is rotate back to its original position
function removeOpenClass() {
    const all_open = document.querySelectorAll('.modal-btn');
    all_open.forEach(open => {
        open.classList.remove('open')
    })
}



//Close all tap when <span>X is clicked
function xClicked() {
    modal_d.style.display = "none"
    modal_p.style.display = "none"
    removeOpenClass()
    open_tap = "none"
}

//when user click on anywhere on the window, close its modal

window.onclick=function(event){
    if(event.target == modal_d){
        modal_d.style.display="none";
        removeOpenClass();
        open_tap="none";

       
    }
    else if(event.target == modal_p){
        modal_p.style.display="none";
        removeOpenClass();

        open_tap="none";
    }
}