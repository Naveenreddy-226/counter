let count=0;
document.getElementById("heading").textContent=count;
document.getElementById("increase").onclick=function(){
    count+=1;
    document.getElementById("heading").textContent=count;
}
document.getElementById("decrease").onclick=function(){
    count-=1;
    document.getElementById("heading").textContent=count;
}
document.getElementById("reset").onclick=function(){
    count=0;
    document.getElementById("heading").textContent=count;
}