(function () {
	const USER = "user";
	const SUPER_USER = "super-user";
	const CUSTOMER = "customer";
	var Event = function (_title, _img, _desc) {
		var title = _title;
		var img = _img;
		var descrizione = _desc;
		return{
			title: title,
			img: img,
			descrizione: descrizione
		}
	}
	//res/bho.png
	var App =  {	
		events : [],
		currentEventiIdx : 0,
		loadNext : function()
		{
			console.log("currentEventiIdx: "+ App.currentEventiIdx);
			App.currentEventiIdx++;
			if(App.currentEventiIdx >= App.events.length)
				App.currentEventiIdx=0;
			App.loadEvent(App.currentEventiIdx);
		},
		loadPrev : function()
		{
			App.currentEventiIdx--;
			if(App.currentEventiIdx <= 0)
				App.currentEventiIdx=0;
			App.loadEvent(App.currentEventiIdx)
		},

		loadEvent : function (eventNumber) 
		{
			if($(this).data("idx")!=undefined)
				eventNumber = $(this).data("idx");
			for (i = 0; i < App.events.length; i++) 
			{
				if(eventNumber==i)
				{
					$("#cardImg").css('background-image','url('+App.events[i].img+')');				
					$("#eventTitle").text(App.events[i].title);
					$("#eventDesc").text(App.events[i].descrizione);
					break;
				}
			}
		},

		eventHadler : function () 
		{
			$("#prev_btn").click(App.loadPrev);
			$("#next_btn").click(App.loadNext);
			$("#articlesNumbers").on("click", "input", App.loadEvent);
		},

		init : function () 
		{
			var event1 = new Event("Samsung Galaxy S9 potrebbe non avere il sensore biometrico sotto lo schermo",
			 "res/ev1.jpg",
			  "Considerati i rumors accorsi su Samsung Galaxy S8 pronti a scommettere in un posizionamento del sensore biometrico sotto schermo, le dichiarazioni passate di Qualcomm secondo cui vedremo soluzioni simili nei primi mesi del 2018, in molti speravano che Samsung con Galaxy S9 tornasse sulla decisione di allocare il sensore sul retro per piazzarlo, finalmente e definitivamente, sotto il display.")
			var event2 = new Event("Google Home non si ferma e al momento integra più di 65 app e servizi partner",
			  "res/ev2.png",
			  "Google Home è stato presentato poco più di un anno fa e da allora ne ha fatta di strada: con i mesi sono arrivati moltissimi miglioramenti, anche grazie a Google Assistant, e il numero di app e servizi supportati e integrati dei partner (e non) è cresciuto sempre di più.");
			var event3 = new Event("Arriva Halloween e WhatsApp Beta introduce nuove emoji per tutti ",
			  "res/ev3.jpg",
			  "Sarà una coincidenza ma, con l’approssimarsi di Halloween, WhatsApp Beta si aggiorna alla versione 2.17.397, introducendo parecchie nuove emoji, alcune delle quali sembrano realizzate apposta per questi giorni.");
			App.events.push(event1, event2, event3);
			App.eventHadler();
			var tmp = "";
			for (i = 0; i < App.events.length; i++) 
			{
				tmp += '<input type="button" data-idx="'+i+'" value="'+(i+1)+'">';
			}
			$("#articlesNumbers").html(tmp);
			App.loadEvent(App.currentEventiIdx);
		}
	}
	$(document).ready(App.init);

})();