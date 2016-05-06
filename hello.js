function myFunction() {
    var para = document.getElementsByTagName('p');    
    for (var i = 0; i < para.length; i++) {
    	para[i].innerHTML = "Hello World!";
    }
}
