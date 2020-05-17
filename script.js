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

	document.getElementById("sum").value = +output; 
}


function minus (){
	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;

	var output = 0; 
	output = +firstValue - +secondValue;

	document.getElementById("sum").value = +output; 

	function multiply (){
	
	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;

	var output = 0; 
	output = +firstValue * +secondValue;

	document.getElementById("sum").value = +output; 
}


function div (){



	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;

	if (secondValue !== 0){

	var output = 0; 
	output = +firstValue / +secondValue;

	document.getElementById("sum").value = +output; 
	}
	else {
		alert ("Делить на 0 нельзя!")ж
	}
}

	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;

	var output = 0; 
	output = +firstValue + +secondValue;

	document.getElementById("sum").value = +output; 
}


function pow (){
	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;

	var output = 0; 
	output = Math.pow (firstValue, secondValue);

	document.getElementById("sum").value = +output; 

}
function abs (){
	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;

	var output = 0; 
	output = +Math.abs (firstValue);

	document.getElementById("sum").value = +output; 


}
function sqrt (){

	var firstValue = document.getElementById("firstNumber").value;
	var secondValue = document.getElementById("secondNumber").value;
	if (firstValue == undefined && Math.sign(secondValue)== 1){
		var output =0;
		output = Math.sqrt(secondValue);
		document.getElementById("sum").value = +output;
	}
	else if (secondValue == undefined Math.sign(firstValue)== 1){
		var output =0;
		output = Math.sqrt(secondValue);
		document.getElementById("sum").value = +output;
	}

	else {
		alert("Нельзя извлечь квадратный корень из отрицательного числа или нуля!")
	}
 
}
