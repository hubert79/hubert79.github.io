const example1Svg = document.getElementById("example-1-svg");
const addRoleImgButton = document.getElementById("add-role-img-button");
const addAriaLabelButton = document.getElementById("add-aria-label-button");
const example1Status = document.getElementById("example-1-status");

function updateStatus(message) {
  example1Status.textContent = message;
}

addRoleImgButton?.addEventListener("click", () => {
  example1Svg?.setAttribute("role", "img");
  updateStatus('Dodano atrybut role="img" do grafiki w przykładzie 1.');
});

addAriaLabelButton?.addEventListener("click", () => {
  const label = window.prompt("Podaj treść alternatywy tekstowej");

  if (label === null) {
    updateStatus("Anulowano dodawanie atrybutu aria-label.");
    return;
  }

  const trimmedLabel = label.trim();

  if (!trimmedLabel) {
    updateStatus("Nie dodano aria-label, ponieważ podano pustą wartość.");
    return;
  }

  example1Svg?.setAttribute("aria-label", trimmedLabel);
  updateStatus(`Dodano aria-label dla grafiki w przykładzie 1: ${trimmedLabel}.`);
});
