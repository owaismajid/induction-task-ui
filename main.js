var Money = {
    inside: 0,
    intransaction:0,
    change:0
}
var Snacks = [
    {name: "chugum", price: 0.50, quantity: 3},
    {name: "chocolate", price: 2, quantity: 3},
    {name: "chips", price: 1, quantity: 3}
]

var acceptedUnits = [0.25,0.50,1,5,10];

var render = ()=>{
    $(".intransaction").text(Money.intransaction);
    $(".change").text(Money.change);
    $(".inside").text(Money.inside);

    $(".chugum .snack-quantity").text(Snacks[0].quantity);
    $(".chocolate .snack-quantity").text(Snacks[1].quantity);
    $(".chips .snack-quantity").text(Snacks[2].quantity);
}

var insert = value => {
    if (acceptedUnits.includes(value))
        Money.intransaction += value;
    else
        alert("not accepted");
    render();
}

function buy(type){
    type = Snacks.find(e=>e.name == type);

    if (type.quantity < 1)
        alert("Sorry!, nothing left");
    else if (Money.intransaction < type.price) 
        alert("Sorry!, Not enough money");
    else{
        type.quantity--;
        Money.change = Money.intransaction - type.price;
        Money.inside += type.price;
        Money.intransaction = 0;

    }
    render();
}

function reinsert(){

    Money.intransaction += Money.change;
    Money.change = 0;
    render();
}