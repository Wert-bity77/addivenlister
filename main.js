document.addEventListener("DOMContentLoaded", () => {
    const counterValue = document.getElementById("counterValue");
    const numberInput = document.getElementById("numberInput");
    const sendButton = document.getElementById("sendButton");
    const incrementButton = document.getElementById("incrementButton");
    const decrementButton = document.getElementById("decrementButton");
    const colorPicker = document.getElementById("colorPicker");
  
    let counter = 0;
  
    // Update counter display
    const updateCounterDisplay = () => {
      counterValue.textContent = counter;
    };
  
    // Set counter based on input
    sendButton.addEventListener("click", () => {
      const inputValue = parseInt(numberInput.value);
      if (!isNaN(inputValue)) {
        counter = inputValue;
        updateCounterDisplay();
      }
    });
  
    // Increment counter
    incrementButton.addEventListener("click", () => {
      counter++;
      updateCounterDisplay();
    });
  
    // Decrement counter
    decrementButton.addEventListener("click", () => {
      counter--;
      updateCounterDisplay();
    });
  
    // Change counter color
    colorPicker.addEventListener("input", (event) => {
      counterValue.style.color = event.target.value;
    });
  });
  