let form =document.querySelector("form")
let input =document.querySelector("input")
let h1 =document.querySelector("h1")
let h2 =document.querySelector("h2")
let img =document.querySelector("img")
let p =document.querySelector("p")
// console.log(form);



const wheather = async(e)=>{
try {
    e.preventDefault()
    const fet = await fetch(`https://api.weatherapi.com/v1/current.json?key=b887027c6d344e2da8785331232111&q=${input.value}&aqi=yes`)
    const data = await fet.json();

    h1.innerText =data.current.temp_c + "°C"
    h2.innerText =data.location.name;
    p.innerText =data.current.condition.text
    img.setAttribute ("src",data.current.condition.icon)
    

  
} catch (error) {
    window.alert("Please Enter Valid name");
    
}
form.reset();

}

form.addEventListener('submit', wheather)

