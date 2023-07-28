const btn = document.querySelector("#btn");
const inp = document.querySelector("#inp");

btn.addEventListener("click", (event) => {
    if (inp.value === "Червоний") {
        console.log("Стоп");
    } else if (inp.value === "Жовтий") {
        console.log("Увага");
    } else if (inp.value === "Зелений") {
        console.log("Йти");
    } else {
        console.log("Колір не підходиь");
    }
});