const btn = document.querySelector("#btn");
const inp = document.querySelector("#inp");

btn.addEventListener("click", (event) => {
    if (inp.value === "1" || inp.value === "2" || inp.value === "12") {
        console.log("Зима");
    } else if (inp.value === "3" || inp.value === "4" || inp.value === "5") {
        console.log("Весна");
    } else if (inp.value === "6" || inp.value === "7" || inp.value === "8") {
        console.log("Літо");
    } else if (inp.value === "9" || inp.value === "10" || inp.value === "11") {
        console.log("Осінь");
    } else {
        console.log("Не місяць");
    }
});