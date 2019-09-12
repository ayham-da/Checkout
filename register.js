var gesamtSumme = 0
function fun(betrag){
    gesamtSumme += betrag
    return gesamtSumme
}


function func (gbetrag){
    gbetrag -= gesamtSumme
    return gbetrag
    
}

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

