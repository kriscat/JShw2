//Делаем калькулятор
let a = Number(prompt("Введите первое число:", )); //объявляем переменную а, которая будет первым числом
let b = Number(prompt("Введите второе число:", )); //объявляем переменную b, которая будет вторым числом
let operation = prompt("Какое действие вы хотите сделать? (+,-,*,/)"); //инициируем выбор операции
//используем условие if для выполнения инструкции сложения первого и второго числа
if (operation == "+") {
    console.log("Первое число");
    console.log(a);
    console.log(operation);
    console.log("Второе число");
    console.log(b);
    console.log("Результат сложения");
    console.log(a + b);
}
// используем условие else if для выполнения инструкции вычитания второго числа из первого
else if (operation == "-") {
    console.log("Первое число");
    console.log(a);
    console.log(operation);
    console.log("Второе число");
    console.log(b);
    console.log("Результат вычитания");
    console.log(a - b);
} // используем условие else if для выполнения инструкции умножения двух чисел
else if (operation == "*") {
    console.log("Первое число");
    console.log(a);
    console.log(operation);
    console.log("Второе число");
    console.log(b);
    console.log("Результат умножения");
    console.log(a * b);
} // используем условие else if для выполнения инструкции деления первого числа на второе
else if (operation == "/") {
    console.log("Первое число");
    console.log(a);
    console.log(operation);
    console.log("Второе число");
    console.log(b);
    console.log("Результат деления");
    console.log(a / b);
};
