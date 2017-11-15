var App = {
    prodotti : [],
    init : function()
    {
        App.loadXML();
    },
    loadXML : function()
    {
        $.ajax({url: "data1.xml", method: "GET"}).done(App.onSuccess).fail(App.onFail);
    },
    onSuccess : function(xmlData)
    {
        console.log(xmlData);
        $(xmlData).find("Prodotto").each( function(){
            var imgs=[];
            $(this).find("Immagine").each( function(){
                imgs.push({
                    id:$(this).attr("Id"),
                    url:$(this).attr("Url")
                }
                );
            });

            App.prodotti.push({
                id:$(this).attr("Id"),
                name:$(this).attr("Name"),
                compagnia:$(this).attr("Compagnia"),
                descrizione:$(this).attr("Descrizione"),
                immagini:imgs
            });
        });
        console.log(App.prodotti);
    },
    onFail : function()
    {
        
    }
}
$(document).ready(App.init);