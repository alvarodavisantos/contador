i=0;

function soma(){
    i++;
    insereNum();
}

function sub(){
    i--;
    insereNum();
}

function reset(){
    i = 0;
    insereNum();
}

function insereNum(){
    document.getElementById("num").textContent = i;
    if(i>0){
        document.getElementById("num").style.color = 'green';
    }else if(i<0){
        document.getElementById("num").style.color = 'red';
    }else{
        document.getElementById("num").style.color = 'black';
    }
}