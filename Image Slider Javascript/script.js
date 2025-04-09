const images = [

"https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg",
"https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg",
"https://th.bing.com/th/id/OIP.qDvAlhidTBzXiGyDfq_O0gHaE7?rs=1&pid=ImgDetMain",
"https://img.freepik.com/premium-photo/best-amazing-wonderful-this-photo-take-this-picture-your-work-ai-generated-top-lovely-photo_1089043-14887.jpg"

];

const left =document.getElementById("left");
const right =document.getElementById("right");
const img = document.getElementById("img");
const transitionDuration = 800;
let index =0;

function displayImg(){
    img.src = images[index];
}

function showLeft()
{
    if(index>0)
    {
        index--;

    }
    console.log(index);
    img.src =images[index];
}

function showRight()
{
    if(index<images.length-1)
    {
        index++;
    }
    img.src = images[index];
}

function autoSlider(){
 setInterval(function(){
    if(index<images.length-1){
        index++;
    }
    else{
        index=0;
    }
    img.src= images[index];
 },2000);
}

left.addEventListener('click',showLeft);
right.addEventListener('click',showRight);
displayImg();
autoSlider();

