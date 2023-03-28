s = 0;
let c;

function start(){
    c = setInterval(car,100);

    function car(){
        console.log(s == 1200)
        if (s == 1200){
            clearInterval(c);
        }
        else{
            s+=7
            let d = document.querySelector("#truckImg");
            d.style.marginLeft = s + "px";
        }
    }
};

function stop(){
    clearInterval(c);
};