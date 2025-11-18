document.querySelector(".ukendt").classList.add("hide");

document.querySelector("#date").addEventListener("change", showUkendt);

function showUkendt() {
  console.log("showUkendt");

  if (document.querySelector("#date").value == "andet") {
    document.querySelector(".ukendt").classList.remove("hide");
  }
}
