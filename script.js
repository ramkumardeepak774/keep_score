var p1but=document.querySelector("#p1");
var p2but=document.querySelector("#p2");
var p1dis=document.querySelector("#p1Display");
var p2dis=document.querySelector("#p2Display");
var res=document.getElementById("reset"); 
var p1sc=0;
var p2sc=0;
var winsc=5;
var num=document.querySelector("input");
var gameover=false;
var windis =document.querySelector("p span");

p1but.addEventListener("click",function(){
	if (!gameover){
		p1sc++;
		if (p1sc===winsc){
			gameover=true;
			p1dis.classList.add("winner");
		}
	}
	p1dis.textContent = p1sc;
});

p2but.addEventListener("click",function(){
	if (!gameover){
		p2sc++;
		if (p2sc===winsc){
			gameover=true;
			p2dis.classList.add("winner");
		}
	}
	p2dis.textContent = p2sc;
});

res.addEventListener("click",function(){
	reset();
});
function reset(){
	p1sc=0;
	p2sc=0;
	p1dis.textContent=0;
	p2dis.textContent=0;
	p1dis.classList.remove("winner");
	p2dis.classList.remove("winner");
	gameover=false;
}
num.addEventListener("change",function(){
	windis.textContent = num.value;
	winsc=Number(num.value);
	reset();
});