function qs() {
    document.querySelector("#qs").innerHTML = "How r u?";
    document.querySelector(".qs").style.color = "blue";
    document.querySelector(".qs").innerHTML = "BLUE color";
}
//********************************************************************************************************

function qs2() { //used loop which selects all elements
    var x, i;
    x = document.querySelectorAll(".a");
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "blue";
    }
}
//*********************************************************************************************************
document.addEventListener("mousemove", add);

function add() {
    document.getElementById("no").innerHTML = Math.random();
}

function removeHandler() {
    document.removeEventListener("mousemove", add);
}
//---------------------------------------------------------------------------------------------------
//function ce() {
//var btn = document.createElement("button");
// document.body.appendChild(btn);
// }



//************************************************************************************************************
function ac() {
    var node = document.createElement("li");
    var textnode = document.createTextNode("Mumbai");
    node.appendChild(textnode);
    document.getElementById("cities").appendChild(node);
}

//*******************************************************************

function rc() {
    var list = document.getElementById("city");
    list.removeChild(list.childNodes[0]);
}

document.addEventListener("click", function() {
        document.getElementById("mo").innerHTML = "You are Beautiful/Handsome !!!";
    })
    //****************************************************************************************************

function replacechild() {
    var elmnt = document.createElement("li");
    var textnode = document.createTextNode("Water");
    elmnt.appendChild(textnode);

    var item = document.getElementById("myList");
    item.replaceChild(elmnt, item.childNodes[0]);
}

function clone() {
    var itm = document.getElementById("myList2").lastChild;
    var cln = itm.cloneNode(true);
    document.getElementById("myList1").appendChild(cln);
}

function set() {
    document.getElementsByTagName("h3")[0].setAttribute("class", "democlass");
}

function insert() {
    var newItem = document.createElement("LI");
    var textnode = document.createTextNode("A.ngr");
    newItem.appendChild(textnode);

    var list = document.getElementById("in");
    list.insertBefore(newItem, list.childNodes[0]);
}

function frag() {
    var element = document.getElementById('ul');
    var fragment = document.createDocumentFragment();
    var browsers = ['Firefox', 'Chrome', 'Opera', 'Safari', 'Internet Explorer'];
    browsers.forEach(function(browser) {
        var li = document.createElement('li');
        li.textContent = browser;
        fragment.appendChild(li);
    });
    element.appendChild(fragment);
}

function comp() {
    var elem = document.getElementById("test");
    var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    document.getElementById("demo").innerHTML = theCSSprop;
}

function get1() {
    var x = document.getElementsByClassName("democlass")[0].getAttribute("class");
    document.getElementById("demo1").innerHTML = x;
}

function rem() {
    document.getElementsByTagName("h4")[0].removeAttribute("class");
}

function fun10() {
    var btn = document.createElement("button");
    document.body.appendChild(btn);
}