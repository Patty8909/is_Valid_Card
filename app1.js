var isValidCard = function (card){
    
      for (var i = 0; i<(card.split("")).length; i++){
        var revertir = (card.split("")).reverse()
        return revertir
      }
      for (var j = 1; j<revertir.length; j = j + 2){
        var newArray = []
        if (revertir[j]*2 > 10){
          return (revertir[j]*2 -9)
        }
         return revertir[j]*2
        }
        return newArray.push()
    }
    
    isValidCard('67896698')