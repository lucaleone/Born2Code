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
			$.ajax({url:"DBevents.json", method:"GET"}).done(App.loadData).fail(App.loadError);
			
			App.eventHadler();			
		},
		loadData: function(data)
		{
			console.log("load data success");
			console.log(data);
			App.events = data.events;
			var tmp = "";
			for (i = 0; i < App.events.length; i++) 
			{
				tmp += '<input type="button" data-idx="'+i+'" value="'+(i+1)+'">';
			}
			$("#articlesNumbers").html(tmp);
			App.loadEvent(App.currentEventiIdx);
		},
		loadError: function(e)
		{
			console.log("errore di caricamento"+e);
		}

	}
	$(document).ready(App.init);

})();