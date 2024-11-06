var notLoggedButtons = document.getElementById("not-logged")
var loggedButtons = document.getElementById("logged-in")

var mainText = document.getElementById("main-text")
var flavorText = document.getElementById("flavor-text")

function checkData(data){
    console.log(data)
    if (data) {

        var usernameclean = String(data.username.replace(/[^a-zA-Z0-9]/g,' '));
        localStorage.setItem('logged', 'true')
        localStorage.setItem('username', usernameclean)

        ///////////////////////////////////////////////////////////////////////

        loggedButtons.style.display = "block";
        notLoggedButtons.style.display = "none";

        mainText.innerText = `Welcome ${localStorage.getItem("username")}, nice to see you here!`
        flavorText.innerText = "It seems you've just logged in! Welcome to my test site!"

        return
    }

    if (localStorage.getItem('logged') == true){
        loggedButtons.style.display = "block";
        notLoggedButtons.style.display = "none";

        mainText.innerText = `Welcome back ${localStorage.getItem("username")}, how are you doing?`
        flavorText.innerText = "back so soon i see!"
        return
    }

    loggedButtons.style.display = "none";
    notLoggedButtons.style.display = "block";

    localStorage.setItem('logged', 'false')
    localStorage.setItem('username','TBD')

    mainText.innerText = `Welcome! You aren't logged right now.`
    flavorText.innerText = "click the buttons on the side to continue."
    return
}

window.onload = function () {
    var url = document.location.href,
    params = url.split('?')[1].split('&'),
    data = {}, tmp;

    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }

    checkData(data)
}