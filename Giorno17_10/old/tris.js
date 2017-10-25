
var Tris = function(){
    var id = 1; //1 o -1
    this.campo = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    this.init = function(){
        id=1;
    }
   /* this.eseguiMossa = function(){
        console.log("In che riga vuoi scrivere?");
        var riga= Number(readline());        
        console.log("In che colonna vuoi scrivere?");
        var colonna= Number(readline());
        this.campo[riga][colonna]=id;
        this.PrintStato();
        this.checkWin();
        this.SwitchCurrentUser();
    }*/
    this.eseguiMossa = function(x, y){       
        this.campo[x][y]=id;
        this.PrintStato();
        this.checkWin();
        this.SwitchCurrentUser();
    }
    this.PrintStato = function(){
        for(row=0; row < this.campo.length; row++)
        {
            let riga='';
            for(i=0; i < this.campo[row].length; i++)
                riga = riga + ' ' + this.campo[row][i];
            console.log(riga);
        }
        console.log('');
    }
    this.checkWin = function(){
        //check righe
        for(row=0; row < this.campo.length; row++)
        {
            var firstElem= this.campo[row][0];
            for(i=1; i < this.campo[row].length; i++)
            {
                if(firstElem!==this.campo[row][i])
                    continue;
                else if(i=== (this.campo[row].length-1) )
                {
                    if( firstElem!==0)
                    {
                        console.log('Utente '+firstElem + ' ha vinto!');
                        return;
                    }
                }
            }
        }

        //check colonne        
        for(col=0; col < this.campo[0].length; col++)
        {
            var firstElem= this.campo[0][col];
            for(row=0; row < this.campo.length; row++)
            {
                if(firstElem!==this.campo[row][col])
                    continue;
                else if(row === (this.campo.length-1) )
                {
                    if( firstElem!==0)
                    {
                        console.log('Utente '+firstElem + ' ha vinto!');
                        return;
                    }
                }
            }
        }

        //check diagonali
        var centerElem= this.campo[1][1];
        if(centerElem !== 0 && ( (centerElem === this.campo[0][0] && centerElem === this.campo[2][2]) ||
            (centerElem === this.campo[0][2] && centerElem === this.campo[2][0])))
            console.log('Utente '+centerElem + ' ha vinto!');       
    }
    this.GetCurrentUser = function(){
        return id;
    }
    this.SwitchCurrentUser = function(){
        id === 1 ? id = 2 : id = 1;
    }
}

var mossa = new Tris();
mossa.init();

mossa.eseguiMossa(0, 0);//1
console.log('Utente corrente: '+ mossa.GetCurrentUser());
mossa.eseguiMossa(0, 1);//2
mossa.eseguiMossa(1, 1);//1

mossa.eseguiMossa(1, 2);//2
mossa.eseguiMossa(2, 2);//1