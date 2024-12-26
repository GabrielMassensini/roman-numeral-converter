const input = document.getElementById("number");
const output = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");

const convert = () => {
   const inputVal = input.value;

   if (inputVal === "") {
      output.textContent = "Please enter a valid number";
   } else if (inputVal <= 0) {
      output.textContent = "Please enter a number greater than or equal to 1";
   }
};

convertBtn.addEventListener("click", convert);
