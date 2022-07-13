// y = prompt("Unesite broj clanova niza");
// arr = [];
// for (let i = 0; i < y; i++) {
//     arr[i] = prompt("Unesite clan niza");
// }
// function square(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * arr[i];
//     }
//     console.log(arr);
// }
// square(arr);

// var num = prompt("Unesi broj");
// var root = Math.sqrt(num);

// console.log("Kubni od " + num + " je " + root);


fetch("https://reqres.in/api/users").then((res) => {
    res.json().then((data) => {
        console.log(data);
    });
});