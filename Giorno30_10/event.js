(function () {
	const USER = "user";
	const SUPER_USER = "super-user";
	const CUSTOMER = "customer";
	var User = function (_nome, _cognome, _skills, _eta) {
		var nome = _nome;
		var cognome = _cognome;
		var skills = [];
		var eta = _eta;
		return{
			nome: nome,
			cognome: cognome,
			skills: skills,
			eta: eta
		}
	}
	//res/bho.png
	var App =  {	
		users : [],
		currentEventiIdx : 0,
		loadNext : function()
		{
			console.log("currentEventiIdx: "+ App.currentEventiIdx);
			App.currentEventiIdx++;
			if(App.currentEventiIdx >= App.users.length)
				App.currentEventiIdx=0;
			App.loadUser(App.currentEventiIdx);
		},
		loadPrev : function()
		{
			App.currentEventiIdx--;
			if(App.currentEventiIdx <= 0)
				App.currentEventiIdx=0;
			App.loadUser(App.currentEventiIdx)
		},

		loadUser : function (userNumber) 
		{
			localStorage.
			if($(this).data("idx")!=undefined)
				userNumber = $(this).data("idx");
			for (i = 0; i < App.users.length; i++) 
			{
				if(userNumber==i)
				{
					$("#cardImg").css('background-image','url('+App.users[i].img+')');				
					$("#eventTitle").text(App.users[i].title);
					$("#eventDesc").text(App.users[i].descrizione);
					break;
				}
			}
		},

		eventHadler : function () 
		{
			$("#prev_btn").click(App.loadPrev);
			$("#next_btn").click(App.loadNext);
			$("#articlesNumbers").on("click", "input", App.loadUser);
		},

		init : function () 
		{
			//$.ajax("DBusers.json").done(App.onSuccess).fail(App.onError);
			$.ajax({url:"DBusers.json", method:"GET"}).done(App.onSuccess).fail(App.onError);
		},
		onSuccess : function (datiJson)
		{
			console.log(datiJson);
		},
		onError : function (e)
		{
			console.log(e.status);
		},
		loadData: function()
		{
			var tmp = "";
			for (i = 0; i < App.events.length; i++) 
			{
				tmp += '<input type="button" data-idx="'+i+'" value="'+(i+1)+'">';
			}
			$("#articlesNumbers").html(tmp);
			App.loadUser(App.currentEventiIdx);
		}
	}
	$(document).ready(App.init);
})();