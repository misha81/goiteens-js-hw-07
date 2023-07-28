const btn = document.querySelector("#btn");
const inp = document.querySelector("#inp");

btn.addEventListener("click", (event) => {
    if (inp.value === "1" || inp.value === "3" || inp.value === "5" || inp.value === "7" || inp.value === "8" || inp.value === "10" || inp.value === "12") {
        console.log("31 День");
    } else if (inp.value === "4" || inp.value === "6" || inp.value === "9" || inp.value === "11") {
        console.log("30 Днів");
    } else if (inp.value === "2") {
        console.log("28 Днів");
    } else {
        console.log("Не місяць");
    }
});