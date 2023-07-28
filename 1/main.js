const sel = document.querySelector("#sel");
const mes = document.querySelector("#mes");

sel.addEventListener("change", () => {
    const opt = sel.value;
    switch (opt) {
        case "-":
            mes.textContent = "Напій не вибрано";
            break;
        case "Кава":
            mes.textContent = "Ви обрали каву!";
            break;
        case "Чай":
            mes.textContent = "Ви обрали чай!";
            break;
        case "Сік":
            mes.textContent = "Ви обрали сік!";
            break;
        default:
            mes.textContent = "";
    }
});
