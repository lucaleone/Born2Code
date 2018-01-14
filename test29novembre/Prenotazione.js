(function () {
	const USER = "user";
	const SUPER_USER = "super-user";
	const CUSTOMER = "customer";
	var User = function (_Name, _Password) {
		var name = _Name;
		var password = _Password;
		var prenotazioni = [];
		var coins = 10;
		return{
			name: name,
			password: password,
			prenotazioni: prenotazioni,
			coins: coins
		}
	}

	var App =  {
		currentUser : 0,
		events : [],
		loginDone: false,
		init : function ()
		{
			App.ShowLogin();
			App.eventHadler();
		},
		eventHadler : function ()
		{
			$("#book_btn").click(App.bookRoom);
			$("#login_btn").click(App.login);
			$("#myPronotazioni_btn").click(App.ShowPrenotazioni);
			$("#home_btn").click(App.login);

		},
		login : function()
		{
			App.currentUser = new User($("#loginName").val(), $("#loginpassword").val());
			$("#NomeUtente").text(App.currentUser.name);
			$("#NomeUtente2").text(App.currentUser.name);
			App.ShowHome();
			App.loginDone=true;
		},
		ShowLogin : function()
		{
			$("#PrenotazioniModule").hide();
			$("#HomeModule").hide();
			$("#LoginModule").show();
		},
		ShowPrenotazioni : function()
		{
			$("#LoginModule").hide();
			$("#HomeModule").hide();
			$("#PrenotazioniModule").show();
		},
		ShowHome : function()
		{
			$("#LoginModule").hide();
			$("#PrenotazioniModule").hide();
			$("#HomeModule").show();
		},
		bookRoom : function()
		{
			if($("#selectedRoom").value !== '')
			{
				if($("#selectedRoom").val()>App.currentUser.coins)
					alert("Mi dispiace, non hai abbastanza coin :(");
					else { //effettua prenotazione
						App.currentUser.prenotazioni.push($("#selectedRoom :selected").text());
						App.currentUser.coins -= $("#selectedRoom").val();
						$("#CoinsNumber").text(App.currentUser.coins);
						App.updateListaPrenotazioni()
					}

				$("#selectedRoom").val("");
			}
		},

		updateListaPrenotazioni : function()
		{
			let tmpLista ="";
			for (var prenotazione of App.currentUser.prenotazioni) {
				tmpLista += "<li>" + prenotazione + "</li>";
			}
			$("#listaPrenotazioni").html(tmpLista);
		}
	}
	$(document).ready(App.init);

})();
