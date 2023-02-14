const tg = window.Telegram.WebApp;

tg.expand();
tg.MainButton.show("dwdwwd");

document.write(tg.initDataUnsafe.user.first_name);

tg.MainButton.textColor = "#ffffff";
tg.MainButton.color = "#ffffff";

tg.MainButton.text = "Changed Text"; //изменяем текст кнопки
tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({ "color": "#143F6B" }); //так изменяются все параметры


tg.sendData(
	JSON.stringify({
		phone: document.querySelector("#phone").value,
		password: document.querySelector("#password").value,
	}),
);
