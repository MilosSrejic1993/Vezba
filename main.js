class main{
    constructor(){}

    var a;
    var b;
    
    a = document.querySelector(".prvibroj").value;
    b = document.querySelector(".drugibroj").value;
    
    var dugme = document.querySelector("#dugme");
    dugme.onclick = (ev) => this.izracunaj();
    
    izracunaj(){
        var x = a+b;
        alert(x);
    }
}
