const tg = window.Telegram.WebApp;

tg.expand();
tg.MainButton.show("dwdwwd");

document.write(tg.initDataUnsafe.user.first_name);

tg.MainButton.textColor = "#ffffff";
tg.MainButton.color = "#ffffff";


tg.MainButton.setText("норм"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "blue"; //изменяем цвет текста кнопки
tg.MainButton.color = "yellow"; //изменяем цвет бэкграунда кнопки

tg.onEvent('mainButtonClicked', () => {
	tg.sendData(
		JSON.stringify({
			phone: document.querySelector("#phone").value,
			password: document.querySelector("#password").value,
		}),
	);
});
