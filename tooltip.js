/* write functions that define the action for each event */
function showTip () {
	var sidTip = document.getElementById("sidTip"); 		//obtain access to the HTML tool tip element using id "sidTip" and link it a varialbe named sidTip
	var passwordTip = document.getElementById("passwordTip");
	if (sidTip) sidTip.style.display = "inline";
    if (passwordTip) passwordTip.style.display = "inline";										//display the HTML tool tip element sidTip bying change the value of its CSS property "display" to "inline"
}

function hideTip () {  														//this function hides the tool tip
	
	var sidTip = document.getElementById("sidTip");
	var passwordTip = document.getElementById("passwordTip");
    if (sidTip) sidTip.style.display = "none";
    if (passwordTip) passwordTip.style.display = "none";																						//first, get access to the tool tip HTML element
													
																							//then, hide the tool tip HTML element by changing its CSS property "display" to "none"
}

function init() {
    var sid = document.getElementById("sid");
    var password = document.getElementById("password");

    if (sid) {
        sid.onmouseover = showTip;
        sid.onmouseout = hideTip;
    }

    if (password) {
        password.onmouseover = showTip;
        password.onmouseout = hideTip;
    }
}



window.onload = init;																						/* link function init to the onload event of the window so that function init will be called when the page is loaded */