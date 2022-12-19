let conteiner = document.querySelector(".conteiner")
let tempo = document.createElement("h1")
let tempo2 = document.createElement("h1")
let tempo3= document.createElement("h1")
let tempo4= document.createElement("h1")
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")

conteiner.appendChild(tempo).classList.add("p")
tempo.textContent=`00:00:00`
let seg = 0 
let time;
    
    

function cronometro(){
    let data = new Date(seg*1000)
   
    return data.toLocaleTimeString('pt-br',{
        hour12:false,
        timeZone:"UTC"
    })
}

console.log(cronometro())


 let bt1 = btn1.addEventListener("click",crono=()=>{
    time = setInterval(function(){
        seg++
        tempo.style.color="black"
        tempo.textContent=cronometro(seg)
        
    },1000)
})



btn2.addEventListener("click",pause=()=>{
    tempo.style.color="red"
    clearInterval(time)
    
    
})


btn3.addEventListener("click",zerar=()=>{
    tempo.style.color="black"
    // clearInterval(time)
    seg = 0
    tempo.textContent=cronometro(seg)
   
})
    











// let hora = data.getHours()

// tempo.textContent=hora



// let hora = data.toLocaleTimeString("pt-br" ,{
//     hour12: false
    
// })

// tempo.textContent=hora

    
//     min = 0
//     hora = 0
//    if(seg >59){
//         min++
//         let min = data.getMinutes()
//         let hora = data.getHours(0)
//         let seg = data.getSeconds()
       
       
        
        
  



        
       
//         tempo.textContent=`${hora}:${min}:${seg}`
//     }
     
   
//  ,400)
// console.log(oi)


// function stop (){
//     clearInterval(oi)
// }
// setTimeout(stop,3000)

// function minutos(min){
//     min.setInterval(5900)
// }

// function horas (hora){
//     hora.setIntervalfunction(){
        
//     }36000)

