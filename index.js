function codificar () {
	let texto = document.getElementById("texto").value;
	let tituloMensagem = document.getElementById("titulo-mensagem");
	let paragrafo = document.getElementById("paragrafo");
	let boneco = document.getElementById("boneco");

	let textoCifrado = texto
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi,"ai")
        .replace(/o/gi,"ober")
        .replace(/u/gi,"ufat");

    if(texto.length !=0) {
    	document.getElementById("texto").value = textoCifrado;
    	tituloMensagem.textContent = "Texto codificado com sucesso";
    	paragrafo.textContent = "";
    	boneco.src = "img/codificado.png";
    }
    else {
    	boneco.src="img/pesquisa.png";
    	tituloMensagem="Nenhuma mensagem foi encontrada";
    	paragrafo.textContent="Escreva o texto que deseja codificar ou decodifcar";
    	alert("Voce deve escrever um texto");
    }  
}

function decodificar () {
	let texto=document.getElementById("texto").value;
	let tituloMensagem = document.getElementById("titulo-mensagem");
	let paragrafo = document.getElementById("paragrafo");
	let boneco = document.getElementById("boneco");
	
	let textoCifrado = texto
	   .replace(/enter/gi,"e")
       .replace(/imes/gi,"i")
       .replace(/ai/gi,"a")
       .replace(/ober/gi,"o")
       .replace(/ufat/gi,"u");

	if (texto.length !=0) {
		document.getElementById("texto").value = textoCifrado;
    	tituloMensagem.textContent = "Texto decodificado com sucesso";
    	paragrafo.textContent = "";
    	boneco.src = "img/decodificado.jpg";
	}

	else {
    	boneco.src="img/pesquisa.png";
    	tituloMensagem="Nenhuma mensagem foi encontrada";
    	paragrafo.textContent="Escreva o texto que deseja codificar ou decodifcar";
    	alert("Voce deve escrever um texto");
    }  
}

