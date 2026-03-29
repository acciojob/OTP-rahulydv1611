//your JS code here. If required.
const codes = document.querySelectorAll(".code");

// focus first input
codes[0].focus();

codes.forEach((code, index) => {
  code.addEventListener("input", (e) => {
    const value = e.target.value;

    // Allow only numbers
    if (!/^[0-9]$/.test(value)) {
      e.target.value = "";
      return;
    }

    // Move to next input
    if (value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener("keydown", (e) => {
    // Backspace handling
    if (e.key === "Backspace") {
      if (code.value === "" && index > 0) {
        codes[index - 1].focus();
      } else {
        code.value = "";
      }
    }
  });
});