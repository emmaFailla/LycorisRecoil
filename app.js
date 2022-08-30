let position = 0
const rightButton = document.querySelector(".rightButton")
const leftButton = document.querySelector(".leftButton")
const sliderImages = document.querySelectorAll(".sliderImgs")
const sliderCircles = document.querySelectorAll(".circleImages")
const names = document.querySelectorAll('.names')
const descriptions = document.querySelectorAll('.description')
const info = document.querySelectorAll('.info')

//MostrarNombres
function showNames (n){
 
    if(position > names.length - 1){
        position = 0
    }
    else if(0 > position){
        position = names.length - 1;
    }

    for(let i = 0; i < names.length ; i++){
        names[i].style.display = "none"

    }
    names[position].style.display = "flex"
}
showNames(position)



//Mostrar la descripcion
function showDescription (n){
    if(position > descriptions.length - 1){
        position = 0
    }
    else if(0 > descriptions.length - 1){
        position = descriptions.length - 1;
    }

    for(let i = 0; i < descriptions.length ; i++){
        descriptions[i].style.display = "none"

    }
    descriptions[position].style.display = "flex"
}
showDescription(position)





//Mostrar la info
function showInfo (n){
    if(position > info.length - 1){
        position = 0
    }
    else if(0 > info.length - 1){
        position = info.length - 1;
    }

    for(let i = 0; i < info.length ; i++){
        info[i].style.display = "none"

    }
    info[position].style.display = "flex"
   }
showInfo(position)


//Mostrar el circulo del personaje
function showCircles(n){
    if(position > sliderCircles.length - 1){
        position = 0
    }
    else if(0 > sliderCircles.length - 1){
        position = sliderCircles.length - 1;
    }

    for(let i = 0; i < sliderCircles.length ; i++){
        sliderCircles[i].style.display = "none"

    }
    sliderCircles[position].style.display = "flex"
}
showCircles(position)


//Mostrar el personaje
function showSliderImages(n){

    if(position > sliderImages.length - 1){
        position = 0
    }
    else if(0 > sliderImages.length - 1){
        position = sliderImages.length - 1;
    }

    for(let i = 0; i < sliderImages.length ; i++){
        sliderImages[i].style.display = "none"
    }
    sliderImages[position].style.display = "flex"
}

showSliderImages(position)

rightButton.addEventListener('click',()=>{
    
    //cambiando los nombres
    position+=1
    showNames(position)
    showDescription(position)
    showInfo(position)
    showSliderImages(position)
    showCircles(position)
    console.log(position)

    
})
leftButton.addEventListener('click',()=>{
    position-=1
    showNames(position)
    showDescription(position)
    showInfo(position)
    showCircles(position)
    showSliderImages(position)
    console.log(position)
})

   