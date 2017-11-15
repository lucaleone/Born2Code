var App = {
    albums: [],
    selectedGeneri: [],
    init: function () {
        App.loadXML();
        $("#cercaInput").keyup(searchEngine.search);
        $("#ListaGeneri").on("change", "input", App.addGenere);
    },
    loadXML: function () {
        $.ajax({ url: "data1.xml", method: "GET" }).done(App.onSuccess).fail(App.onFail);
    },
    onSuccess: function (xmlData) {
        console.log(xmlData);
        $(xmlData).find("Album").each(function () {
            App.albums.push({
                titolo: $(this).attr("Titolo"),
                artista: $(this).attr("Artista"),
                anno: $(this).attr("Anno"),
                genere: $(this).attr("Genere")
            });
        });
        App.writeInHTML();
    },
    onFail: function () {

    },
    writeInHTML: function () {
        var tmpStr = "";
        var generiCheckboxesHTML = "";
        for (i = 0; i < App.albums.length; i++) {
            var tmpGenere = App.albums[i].genere.toLowerCase();
            tmpStr += '<li data-genere="' + tmpGenere + '">' + App.albums[i].titolo + '</li>';
            if (!App.selectedGeneri.includes(tmpGenere)) {
                App.selectedGeneri.push(tmpGenere);
                generiCheckboxesHTML +=
                    '<input type="checkbox" id="' + tmpGenere + 'Checkbox" value="' + tmpGenere + '" checked="true">' + ' <label for="' + tmpGenere + 'Checkbox">' + tmpGenere + '</label>';
            }
        }
        $("#ListaProdotti").html(tmpStr);
        $("#ListaGeneri").html(generiCheckboxesHTML);
    },
    addGenere: function () {
        var genereChanged = $(this).val().toLowerCase();
        if (this.checked)
            App.selectedGeneri.push(genereChanged);
        else {
            if (App.selectedGeneri.includes(genereChanged))
            {
            var tmp=App.selectedGeneri.indexOf(genereChanged);
                App.selectedGeneri.splice(App.selectedGeneri.indexOf(genereChanged), 1);
            }
        }
        searchEngine.search();
    }
}

var searchEngine = {
    search: function () {
        var keyWord = $("#cercaInput").val().toLowerCase();
        var tmpStr = "";
        $("#ListaProdotti>li").each(function () {
            if ($(this).text().toLowerCase().indexOf(keyWord) != -1 &&
                App.selectedGeneri.includes($(this).data("genere").toLowerCase()))
                $(this).fadeIn();
            else
                $(this).fadeOut()
        });
    }
}

$(document).ready(App.init);