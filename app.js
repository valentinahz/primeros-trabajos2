
function progText(){
	var aswer = prompt ("Indique el número de lo que desea hacer: 1)Cifrar - 2)Descifrar"); 
	do{

		if(answer != ""){                //si ingresa 1 , va hacia cifrar y llama a la funcion cipher
			if(answer == "1") {
				cipher();
			} else if (answer == "2") {  //si ingresa 2 , va hacia descifrar y llama a la funcion decipher
				decipher();
			} else {
				alert("Ingrese una opción válida");  // si ingresa otro dato saldra aviso de error al usuario
			}
		}
	} while (answer == "" || (answer != "1" && answer != "2"));
}



function cipher(codCipher){
	var expression = prompt("Ingrese una frase");
	var codCipher= ""; 
for(var i = 0; i>= 65 && i <= 122 ; i ++){   // bucle que ve el conjunto de elementos y da una condición de mayusculas & minusculas
}if(codCipher[i]= i + 33 % 26){           //formula de cifrado cesar 
	return codCipher + "";
}
}    
}

function decipher(codDecipher){
	var expression2 = prompt("Ingrese una frase");
var om = string.charCodeAt(i)    // convierte en ASCII
 for(var i = 0; i>= 65 && i <= 122 ; i ++){  //inicia bucle que dara condicional con valores descifrar mayusculas & minusculas
if(om=(om-65+ 33) % 26+65 );       //conversión a Ascci con valor 33, del cifrado cesar
om = string.fromCharCode(om);     // metodo conversión cifrado cersar
str = str +om
}
  return alert("Tu palabra cifrada: \n \n" + str);  //Un alert más mi string descifrado
  progText();
}




