const colorSelect = document.getElementById('colorSelect');
const btn1 = document.getElementById('btn1');

btn1.addEventListener("click", () => {
  const selectedIndex = colorSelect.selectedIndex;

  if (selectedIndex !== -1) { 
    const selectedOption = colorSelect.options[selectedIndex].text; 
    colorSelect.options[selectedIndex].remove();
    alert(`${selectedOption} has been removed.`);
  } else {
    alert("No color selected.");
  }
});
