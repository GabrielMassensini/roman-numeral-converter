const input = document.getElementById("number");
const output = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");

const convert = () => {
   const inputVal = input.value;
   const romanNumerals = [
      { value: 1000, numeral: "M" },
      { value: 900, numeral: "CM" },
      { value: 500, numeral: "D" },
      { value: 400, numeral: "CD" },
      { value: 100, numeral: "C" },
      { value: 90, numeral: "XC" },
      { value: 50, numeral: "L" },
      { value: 40, numeral: "XL" },
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" },
   ];
   let number = inputVal;
   let result = "";

   if (inputVal === "") {
      output.textContent = "Please enter a valid number";
   } else if (inputVal <= 0) {
      output.textContent = "Please enter a number greater than or equal to 1";
   } else if (inputVal > 3999) {
      output.textContent = "Please enter a number less than or equal to 3999";
   } else {
      while (number > 0) {
         for (const { value, numeral } of romanNumerals) {
            if (number >= value) {
               number -= value;
               result += numeral;
               break;
            }
         }
      }

      output.innerText = result;
   }
};

convertBtn.addEventListener("click", convert);
