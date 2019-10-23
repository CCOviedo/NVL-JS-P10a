var rnd;
var par = new Array();
var impar = new Array();
var cntA = 0;
var cntB = 0;

for(var i=0; i <= 50; i++){
	rnd = Math.floor((Math.random() * 100)+1);
	if(rnd%2==0){ //es par
		par[cntA] = rnd;
		cntA++;
		//alert("Par: " + par);
	}else{ //es impar
		impar[cntB] = rnd;
		cntB++;
		//alert("Impar: " + impar);
	}
}
alert("Pares: " + par);
alert("Impares: " + impar);