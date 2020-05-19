function access (){
			while (prompt ('Введите пароль для доступа к странице:') !='11111'){
				if(confirm ('Пароль неверный. Повторить ввод?')==false){
						window.location.href ='error.html';
						break;
				}
			}
		}

function newForm(){

			var x, y;
			var win; 

			x = (window.outerWidth - 350) / 2 + window.screenX;
			y = (window.outerHeight - 270) / 2 + window.screenY;

			win = window.open("", "w1", "height = 270, width = 350 , left ="+ x +" ,top =" +y);
			win.document.write("<h2>Заголовок текста</h2>");
			win.document.write("<p>javascript — это круто!</p>");

			win.document.write('<p align = "center"><a href = "https://www.dstu.education/"'+' target = "_blank">ДонГТУ</a>');

			win.document.write('<p align = "center"><input type="button"' + ' onclick="opener.exit(opener.win);" name="closeButton" value="Закрыть"></input></p>');

		}

function exit (param){
			param.alert('Внимание окно будет закрыто!');
			param.close();
		}
function exit (){
	if (confirm("Закрыть окно?")) window.close();
}

function summator (){

	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;

	var sumOutput = 0;

	sumOutput = +firstValue + +secondValue;

	document.getElementById("sum").value = +sumOutput; 

}


function plus (){
	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;

	var output = 0; 
	output = +firstValue + +secondValue;

	document.getElementById("result").value = +output; 
}


function minus (){
	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;

	var output = 0; 
	output = +firstValue - +secondValue;

	document.getElementById("result").value = +output; 

	function multiply (){
	
	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;

	var output = 0; 
	output = +firstValue * +secondValue;

	document.getElementById("result").value = +output; 
}


function divide (){



	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;

	if (secondValue !== 0){

	var output = 0; 
	output = +firstValue / +secondValue;

	document.getElementById("result").value = +output; 
	}
	else {
		alert ("Делить на 0 нельзя!");
	}
}

	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;

	var output = 0; 
	output = +firstValue + +secondValue;

	document.getElementById("result").value = +output; 
}


function pow (){
	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;

	var output = 0; 
	output = Math.pow (firstValue, secondValue);

	document.getElementById("result").value = +output; 

}
function abs (){
	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;

	var output = 0; 
	output = +Math.abs (firstValue);

	document.getElementById("result").value = +output; 


}

function sqrt (){

	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;
	if (firstValue == undefined && Math.sign(secondValue)== 1){
		var output =0;
		output = Math.sqrt(secondValue);
		document.getElementById("result").value = +output;
	}
	else if (secondValue == undefined && Math.sign(firstValue)== 1){
		var output =0;
		output = Math.sqrt(secondValue);
		document.getElementById("result").value = +output;
	}

	else {
		alert("Нельзя извлечь квадратный корень из отрицательного числа или нуля!");
	}
}

function exp (){ 
/**/
document.getElementById("firstNumber").value = Math.E;
var firstValue = document.getElementById("firstNumber").value;
var secondValue = document.getElementById("secondNumber").value;
	
var output = Math.pow(+firstValue, +secondValue);
document.getElementById("result").value = +output;
}

function ln (){

	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;
	var output =0;
	if (firstValue == 0 && Math.sign(secondValue)==1 ||(firstValue == 0 && Math.sign(secondValue)==1)){
		output = Math.log(secondValue);
		document.getElementById("result").value = +output;
	}
	else if (secondValue == 0 && Math.sign(firstValue)== 1){
		output = Math.log(secondValue);
		document.getElementById("result").value = +output;
	}

	else {
		alert("Нельзя вычислить натуральный алгоритм двух чисел,отрицательного числа или нуля!");
}
}

function sin (){

	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;

	var output =0;

    if (firstValue == 0 && secondValue !=0) output = Math.sin(secondValue);
	else if (secondValue == 0 && firstValue !=0) output = Math.sin(firstValue);

	else if (firstValue ==0 && secondValue ==0) output =Math.sin(0);

	else alert("Заполните только одно поле!");

	document.getElementById("result").value = output; 
}
