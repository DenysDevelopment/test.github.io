const tg = window.Telegram.WebApp;

tg.expand();
tg.MainButton.show("dwdwwd");

document.write(tg.initDataUnsafe.user.first_name);

tg.MainButton.textColor = "#ffffff";
tg.MainButton.color = "#ffffff";


tg.MainButton.setText("норм"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#ff62ff"; //изменяем цвет текста кнопки
tg.MainButton.color = "#48ff60"; //изменяем цвет бэкграунда кнопки

tg.onEvent('mainButtonClicked', () => {
	tg.sendData(
		JSON.stringify({
			phone: document.querySelector("#phone").value,
			password: document.querySelector("#password").value,
		}),
	);
});
