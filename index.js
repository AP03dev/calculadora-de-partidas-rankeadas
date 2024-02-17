function rank(vitoria, derrota){
    let vitorias = vitoria - derrota
    return vitorias
}

function level(){
    let nivel

    vitorias = rank(200, 150)

    if(vitorias < 10){
        nivel = 'ferro'
    }else if(vitorias < 20){
        nivel = 'bronze'
    }else if(vitorias < 50){
        nivel = 'prata'
    }else if(vitorias < 80){
        nivel = 'ouro'
    }else if(vitorias < 90){
        nivel = 'diamante'
    }else if(vitorias < 100){
        nivel = 'lendario'
    }else if(vitorias >= 101){
        nivel = 'imortal'
    }

    console.log(`O Herói tem saldo de ${vitorias} vitórias e está no nível ${nivel}`)
}

level()


