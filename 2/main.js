const inp = document.querySelector("#inp");
const btn = document.querySelector("#btn");

btn.addEventListener("click", (event) => {
    if (inp.value === "Понеділок" || inp.value === "Вівторок" || inp.value === "Середа" || inp.value === "Четвер" || inp.value === "П'ятниця") {
        console.log("Робочий день");
    } else if (inp.value === "Субота" || inp.value === "Неділя") {
        console.log("Вихідний день");
    } else{
        console.log("Не день тижня");
    }
});