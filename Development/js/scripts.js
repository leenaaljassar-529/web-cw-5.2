const food = prompt("ماذا تحب ان تطلب");
switch (food) {
  case "1":
    console.log("بيتزا");
    break;
  case "2":
    console.log("برجر");
    break;
  case "3":
    console.log("سوشي");
    break;
  default:
    console.log("طلبك غير متوفر حالياً ");
}

const first = parseInt(prompt("أدخل الرقم الاول"));
const second = parseInt(prompt("أدخل الرقم الثاني"));
const third = prompt("(+,-,/,*) اختر العملية الحسابية");

switch (third) {
  case "+":
    console.log(first + second);
    break;
  case "-":
    console.log(first - second);
    break;
  case "/":
    console.log(first / second);
    break;
  case "*":
    console.log(first * second);
    break;
  default:
    console.log("قم بإدخال عملية صحيحة");
}

const age = prompt("enter your age here");

if (age <= 6) {
  alert("روضة");
} else if (age <= 18) {
  alert("مدرسة");
}

if (age > 19) {
  alert("جامعة");
} else "write age in english";
