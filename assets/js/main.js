let mylist = document.getElementById("mylist");
let masse = document.getElementById("masse");

let showtxt = () => {
    switch (mylist.value) {
        case ("0"):
            masse.innerHTML = "L: 10 - 23,5 cm";
            break;
        case ("1"):
            masse.innerHTML = "bis 60 x 30 x 15 cm";
            break;
        case ("2"):
            masse.innerHTML = "bis 120 x 60 x 60 cm";
            break;
        case ("3"):
            masse.innerHTML = "bis 120 x 60 x 60 cm";
            break;
        default: 0;


    }
}

console.log();

/*JS Assets

<b>Brief und Postkarte</b> <br>
L: 10 - 23,5 cm
B: 7 - 12,5 cm
H: bis 1 cm

<b>DHL Paket 2 kg</b> <br>
bis 60 x 30 x 15 cm

<b>DHL Paket 5 kg</b> <br>
bis 120 x 60 x 60 cm

<b>DHL Paket 10 kg</b> <br>
bis 120 x 60 x 60 cm

"<b>Extra große Größe</b>*/
