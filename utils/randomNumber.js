// for debug

const log = (legenda,value) => {
    console.log("============================")
    console.log(legenda,value)
    console.log("============================")
}

const randomNumber = ({max,min,n,menorMaior=false,maiorMenor=false,noRepetition=false})=>{
     
    // return number  between min (inclusive) and manx (inclusive)
    const range = n => Array.from(Array(parseInt(n)).keys())
    // ordena maior menor
    const maiorMenorF = array => array.sort((a,b)=>b - a)
    // ordena menor maior
    const menorMaiorF = array => array.sort((a,b)=>a - b)
    
    
    let arr = []
    
    const randomBeetween =(min,max,noRepet)=>{
        let num = Math.floor((Math.random() * (max-min + 1) + min))
        if(noRepet){
            for(let x =0;x<arr.length;x++){
                if(num == arr[x]){
                    return randomBeetween(min,max,noRepet)
                }
            }
        }
        return num
    }  
    try{
        range(n).map((_)=>{
            let number = randomBeetween(min,max,noRepetition)
            arr.push(number)
        })
        if(menorMaior) arr = menorMaiorF(arr)
        if(maiorMenor) arr = maiorMenorF(arr)
        if(menorMaior && maiorMenor) throw new Error('as 2 opcoes n podem ser escolhidas ao mesmo tempo')
    }catch(err){
        return err
    }
    return arr
}


export default randomNumber

