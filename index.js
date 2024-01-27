// var rand1=Math.random();
// rand1=Math.floor((rand1*6)+1);

// document.querySelector(".img1").setAttribute("src","images/dice"+rand1+".png");

// var rand2=Math.random();
// rand2=Math.floor((rand2*6)+1);
// document.querySelector(".img2").setAttribute("src","images/dice"+rand2+".png");

// if(rand1>rand2){
//     document.querySelector("h1").innerHTML="🏅Player 1 wins!";
// }
// else if(rand1<rand2){
//     document.querySelector("h1").innerHTML="Player 2 wins!🏅";
// }
// else{
//     document.querySelector("h1").innerHTML="Draw!";
// }

document.querySelector("button").addEventListener("click",handleClick);

function handleClick(){
    var rand1=Math.random();
    rand1=Math.floor((rand1*6)+1);
    
    document.querySelector(".img1").setAttribute("src","images/dice"+rand1+".png");
    
    var rand2=Math.random();
    rand2=Math.floor((rand2*6)+1);
    document.querySelector(".img2").setAttribute("src","images/dice"+rand2+".png");
    
    if(rand1>rand2){
        document.querySelector("h1").innerHTML="🏅Player 1 wins!";
    }
    else if(rand1<rand2){
        document.querySelector("h1").innerHTML="Player 2 wins!🏅";
    }
    else{
        document.querySelector("h1").innerHTML="Draw!";
    }
}
