var food = 0;
var wood = 0;

function gatherFood(){
    food = food + 5;
    document.getElementById("food").innerHTML = food;
};

function gatherWood(){
    wood = wood + 1;
    document.getElementById("wood").innerHTML = wood;
};
