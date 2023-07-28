btn.addEventListener("click", (event) => {
    const num1 = parseFloat(document.querySelector("#num1").value);
    const num2 = parseFloat(document.querySelector("#num2").value);
    const sel = document.querySelector("#sel").value;
    const result = document.querySelector("#result");
    const btn = document.querySelector("#btn");

    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = "Введіть числа";
        return;
    }

    switch (sel) {
        case "+":
            result.textContent = `Результат: ${num1 + num2}`;
            break;
        case "-":
            result.textContent = `Результат: ${num1 - num2}`;
            break;
        case "*":
            result.textContent = `Результат: ${num1 * num2}`;
            break;
        case "/":
            if (num2 === 0) {
                result.textContent = "Ділення на нуль неможливе!";
            } else {
                result.textContent = `Результат: ${num1 / num2}`;
            }
            break;
        default:
            result.textContent = "Оберіть операцію зі списку.";
    }
});



