(function () {
	const USER = "user";
	const SUPER_USER = "super-user";
	const CUSTOMER = "customer";
	var Event = function (_id, _title, _data, _owner, _desc) {
		var id = _id;
		var title = _title;
		var data = _data;
		var owner= _owner;//User
		var descrizione = _desc;
		return{
			id : id,
			title: title,
			data: data,
			owner:owner,
			descrizione: descrizione
		}
	}
	var User = function (_id, _nome, _email, _userType) {
		var id = _id;
		var nome = _nome;
		var email = _email;
		var userType = _userType;
		return{
			id: id,
			nome: nome,
			email:email,
			userType:userType
		}
	}

	var App =  {	
		event : [],
		users : [],
		addNewUser : function () {		
			var newUser = new User($("#userId").val(),
								$("#userName").val(),
								$("#userEmail").val(),
								$("#userType").val());
			console.log(newUser);
			App.users.push(newUser);
			console.log(App.users);
			App.updateListUsers();
		},

		updateListUsers : function () {
			$("#listUser").empty();
			var newList = "";
			for (i = 0; i < App.users.length; i++) {
				newList += "<li>Id: " + App.users[i].id +
					" | Nome: " + App.users[i].nome +
					" | Type: " + App.users[i].userType + "</li>";
			}
			$("#listUser").html(newList);
		},

		addNewEvent : function () {		
			var newEvent = new Event($("#eventId").val(),
								$("#eventTitle").val(),
								$("#eventDate").val(),
								$("#eventOwner").val(),
								"");
			console.log(newEvent);
			App.event.push(newEvent);
			console.log(App.event);
			App.updateListEvents();
		},

		updateListEvents : function () {
			$("#listEventi").empty();
			var newList = "";
			for (i = 0; i < App.event.length; i++) {
				newList += "<li>Id: " + App.event[i].id +
					" | Title: " + App.event[i].title +
					" | Data: " + App.event[i].data +
					" | Owner: " + App.getUserById(App.event[i].owner).nome +
					" | Descrizione: " + App.event[i].descrizione + 
					" <button class='delete_btn' data-id='"+ App.event[i].id +"'>Elimina</button></li>";
			}
			$("#listEventi").html(newList);
		},

		getUserById : function(id) {
			for (i = 0; i < App.users.length; i++) {
				if(App.users[i].id==id)
					return App.users[i];
			}
		},
		deleteEvent : function(){
			var id = $(this).data("id");
			for (i = 0; i < App.event.length; i++) {
				if(id==App.event[i].id)
					App.event.splice(i, 1);
			}
			App.updateListEvents();    
		},

		eventHadler : function () {
			$("#saveUser").click(App.addNewUser);
			$("#saveEvent").click(App.addNewEvent);
			$("#listEventi").on("click", ".delete_btn", App.deleteEvent);
		},

		init : function () {
			App.eventHadler();
		}
	}
	
	$(document).ready(App.init);

})();