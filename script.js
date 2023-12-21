const show = document.getElementById('show');
const buttons = document.querySelectorAll('button');
let str = "";
let decimalAdded = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.innerHTML;

    if (buttonText === "AC") {
      str = "";
      decimalAdded = false;
    } else if (buttonText === "=") {
      try {
        str = eval(str);
        if (isNaN(str) || !isFinite(str)) {
          str = "Error";
        }
      } catch (error) {
        str = "Error";
        console.error(error);
      }
      decimalAdded = false;
    } else if (buttonText === "DEL") {
      str = str.slice(0, -1);
      decimalAdded = false;
    } else if (buttonText === ".") {

      if (!decimalAdded) {
        str += buttonText;
        decimalAdded = true;
      }
    } else {
      str += buttonText;
      decimalAdded = false;
    }

    show.value = str;
  });
});
