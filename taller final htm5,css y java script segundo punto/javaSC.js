function cambiarfondo(x){
    console.log(x.value);
    if(x.value=="orange1"){
        return cambiarfondo2(x);
    }
    else if(x.value=="orange2"){
        return cambiarfondo1(x);
    }
    else 
    return cambiarfondo3(x);
        
}
function cambiarfondo1(x){
    var body1 = document.getElementById("tema1");
    var body3 = document.getElementById("tema3");
    var body5 = document.getElementById("tema5");
    var body7 = document.getElementById("tema7");
    var body9 = document.getElementById("tema9");
    var body2 = document.getElementById("tema2");
    var body4 = document.getElementById("tema4");
    var body6 = document.getElementById("tema6");
    var body8 = document.getElementById("tema8");
    var body10 = document.getElementById("tema10");
    body1.style.backgroundColor="orange";
    body3.style.backgroundColor="orange";
    body5.style.backgroundColor="orange";
    body7.style.backgroundColor="orange";
    body9.style.backgroundColor="orange";
    body2.style.backgroundColor="yellow";
    body4.style.backgroundColor="yellow";
    body6.style.backgroundColor="yellow";
    body8.style.backgroundColor="yellow";
    body10.style.backgroundColor="yellow";
}
function cambiarfondo2(x){
    var body2 = document.getElementById("tema2");
    var body4 = document.getElementById("tema4");
    var body6 = document.getElementById("tema6");
    var body8 = document.getElementById("tema8");
    var body10 = document.getElementById("tema10");
    var body1 = document.getElementById("tema1");
    var body3 = document.getElementById("tema3");
    var body5 = document.getElementById("tema5");
    var body7 = document.getElementById("tema7");
    var body9 = document.getElementById("tema9");
    body2.style.backgroundColor="orange";
    body4.style.backgroundColor="orange";
    body6.style.backgroundColor="orange";
    body8.style.backgroundColor="orange";
    body10.style.backgroundColor="orange";
    body1.style.backgroundColor="yellow";
    body3.style.backgroundColor="yellow";
    body5.style.backgroundColor="yellow";
    body7.style.backgroundColor="yellow";
    body9.style.backgroundColor="yellow";
}
function cambiarfondo3(x){
    var body2 = document.getElementById("tema2");
    var body4 = document.getElementById("tema4");
    var body6 = document.getElementById("tema6");
    var body8 = document.getElementById("tema8");
    var body10 = document.getElementById("tema10");
    var body1 = document.getElementById("tema1");
    var body3 = document.getElementById("tema3");
    var body5 = document.getElementById("tema5");
    var body7 = document.getElementById("tema7");
    var body9 = document.getElementById("tema9");
    body2.style.backgroundColor="yellow";
    body4.style.backgroundColor="yellow";
    body6.style.backgroundColor="yellow";
    body8.style.backgroundColor="yellow";
    body10.style.backgroundColor="yellow";
    body1.style.backgroundColor="yellow";
    body3.style.backgroundColor="yellow";
    body5.style.backgroundColor="yellow";
    body7.style.backgroundColor="yellow";
    body9.style.backgroundColor="yellow";
}
