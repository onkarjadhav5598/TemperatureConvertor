let celcius=document.querySelector(".cel")
let farenheit=document.querySelector(".far")
let kelvin=document.querySelector(".kel")


let button=document.getElementById("clearBtn")


function clearAll(){
  celcius.value=null
  farenheit.value=null
  kelvin.value=null
}
button.addEventListener("click",clearAll)



celcius.addEventListener("keyup",()=>{
  c=Number(celcius.value)
  console.log(c)
  conv(c)
  convc_k(c)
})


farenheit.addEventListener("keyup",()=>{
  f=Number(farenheit.value)
  console.log(f)
  convf(f)
  convf_k(f)
})

kelvin.addEventListener("keyup",()=>{
  k=Number(kelvin.value)
  console.log(k)
  convk(k)
  convk_f(k)
})


let conv=(para)=>{
    if(para===0 || isNaN(para)){
      farenheit.value=null
    }
    else{
      let far=((9/5)*c)+32
      console.log(far)
      farenheit.value=far.toFixed(2)+'F'
    }
}
let convc_k=(para)=>{
  if(para===0 || isNaN(para)){
    kelvin.value=null
  }
  else{
    let far=c+273.15
    console.log(far)
    kelvin.value=far.toFixed(2)+'K'
  }
}

let convf=(f)=>{
  if(f===0 || isNaN(f)){
    celcius.value=null
  }
  else{
    let c=(f-32)*5/9
    console.log(c)
    celcius.value=c.toFixed(2)+'C'
  }
}
let convf_k=(f)=>{
  if(f===0 || isNaN(f)){
    celcius.value=null
    kelvin.value=null
  }
  else{
    let c=((f-32)*5/9)+273.15
    console.log(c)
    kelvin.value=c.toFixed(2)+'K'
  }
}

let convk=(k)=>{
  if(k===0 || isNaN(k)){
    celcius.value=null
  }
  else{
    let c=k-273.15
    console.log(c)
    celcius.value=c.toFixed(2)+"C"
  }
}
let convk_f=(k)=>{
  if(k===0 || isNaN(k)){
    farenheit.value=null
  }
  else{
    let c=(k-273.15)*(9/5)+32
    console.log(c)
    farenheit.value=c.toFixed(2)+'F'
  }
}



document.addEventListener("keydown",Event=>{
  if (Event.key=="Enter"){
    clearAll()
  }
})

