/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "myTopnav") {
        x.className += "responsive";
    } else {
        x.className = "myTopnav";
    }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the topnav
var topnav = document.getElementById("topnav");

// Get the offset position of the topnav
var sticky = topnav.offsetTop;

// Add the sticky class to the topnav when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        topnav.classList.add("sticky")
    } else {
        topnav.classList.remove("sticky");
    }
}

document.getElementById('currencySubmit').addEventListener('click', onClick);

function onClick(e) {
    e.preventDefault();
    // get form values
    let amount = document.getElementById('currencyInput').value;
    let selectFrom = document.getElementById('from');
    let from = selectFrom.options[selectFrom.selectedIndex].value;
    let selectTo = document.getElementById('to');
    let to = selectTo.options[selectTo.selectedIndex].value;

    // call API
    fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`)
        .then(resp => resp.json())
        .then((data) => {
            let result = '<p>' + amount + ' ' + from + ' are <strong>' + data.rates[to] + ' ' + to + '</strong><p>';
            document.getElementById('conversionResults').innerHTML = result;
        });
}