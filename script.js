var btn =document.getElementById("btn");
var quotes = document.getElementById("rndquote");
btn.onclick = function(){
    var quots = [
        "“When you forgive you win.”",

"“Forgiveness is the power to choose how things affect you.”",

"“Forgiveness is choosing to be happy.”",

"“Forgiveness is simply freeing ourselves from wanting to punish.”",

"“We experience what we intend for others.”",

"“Fear is wisdom as a child.”",

"“Forgiveness is always possible, but reconciliation is not always possible.”",

"“Forgiveness gives us the freedom to stay and the freedom to walk away.”"
    ] 
    var random = Math.floor(Math.random()*8);
    quotes.innerText = quots[random];

}