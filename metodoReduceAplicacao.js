const p_array=document.querySelector("#array")
const btnReduzir=document.querySelector("#btnReduzir")
const resultado=document.querySelector("#resultado")

const elementos_array=[1,2,3,4,5]
let acomulador = []
let atual = []
let dobro = []

p_array.innerHTML="["+elementos_array+"]"

btnReduzir.addEventListener("click",(evt)=>{
    // dobro.push(elementos_array[0]*2) // pra começar do indice zero
    resultado.innerHTML=elementos_array.reduce((acomuladorElemento,atualElemento,posição,array)=>{
        acomulador.push(acomuladorElemento)
        atual.push(atualElemento)
        dobro.push(atualElemento*2)
        return atualElemento+acomuladorElemento
    })

    resultado.innerHTML+="<br/>Valor acomulador: " + acomulador + "<br/> Valor Atual: " + atual + "<br/> Dobro do atual: " + dobro
})
