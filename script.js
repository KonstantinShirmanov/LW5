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

	var firstValue = getElementById("firstNumber").value;
	var secondValue = getElementById("secondNumber").value;

	var sumoutput = 0;

	sumoutput = firstValue + secondValue;

	getElementById("sum").value = sumoutput; 
}