

function artikelName (name){
    var prise
    if( name == "banane"){
        prise = 1.19
    }
    return prise
}


function artikelMenge(name,menge){
    prise =  artikelName(name) * menge
    gesamtSumme += prise
   return gesamtSumme
    
}

