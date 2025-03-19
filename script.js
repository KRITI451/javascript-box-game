let x= document.getElementById("ele1");
x.addEventListener("mouseenter", function(){
    x.innerHTML= Math.floor(Math.random()*100);
})
x.addEventListener("mouseleave", function(){
    x.innerHTML= "1";
})
let y= document.getElementById("ele2");
let clr="red";
y.addEventListener("mouseenter",function(){
 
    if(clr=="red"){
        y.style.backgroundColor="red"
        clr="green"}

    else if(clr=="green"){
        y.style.backgroundColor="green"
        clr="blue"
    }
    else{
        y.style.backgroundColor="blue"
        clr="red"
    }
    }

)
y.addEventListener("mouseleave",function(){
    y.style.backgroundColor="white";

})
let z= document.getElementById("ele3");
z.addEventListener("mouseenter",function(){
    let a= Math.floor(Math.random()*255);
    let b= Math.floor(Math.random()*255);
    let c= Math.floor(Math.random()*255);
    z.style.backgroundColor= `rgb(${a},${b},${c})`;
})
z.addEventListener("mouseleave",function(){
 z.style.backgroundColor="white";
})
let w= document.getElementById("ele4");
w.addEventListener("click",function(){
    let a= Math.floor(Math.random()*255);
    let b= Math.floor(Math.random()*255);
    let c= Math.floor(Math.random()*255);
    x.style.backgroundColor=`rgb(${a},255,255)`;
    y.style.backgroundColor=`rgb(255,${b},255)`;
    z.style.backgroundColor=`rgb(255,255,${c})`;
})
w.addEventListener("mouseleave",function(){
    x.style.backgroundColor="white";
    y.style.backgroundColor="white";
    z.style.backgroundColor="white";
})
