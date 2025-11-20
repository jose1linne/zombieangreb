const mund = document.querySelector("#mund-1");
const vin = document.querySelector("#vin-1");
const tlf = document.querySelector("#tlf-1");

const efficiency = document.querySelector("#efficiency");
const requirement = document.querySelector("#requirement");
const h2 = document.querySelector(".info-text > h2");

/******mund******/
console.log(mund);

mund.addEventListener("mouseover", mouseOverMund);
function mouseOverMund() {
  console.log("mouseOverhead");
  mund.style.fill = "#ffffffff";
}

mund.addEventListener("mouseout", mouseOutMund);
function mouseOutMund() {
  mund.style.fill = "#ff0000ff";
}

mund.addEventListener("click", clickMund);

function clickMund() {
  console.log("clickhead");
  h2.textContent = "Mund";
  efficiency.innerHTML = `<h3>Du har klikket på munden!</h3>
  <p>Hun kan gå ud på toilettet og sætte nogle vampyrtænder i.
  Så må hendes date da bliver skræmt og løbe væk for livet</p>`;
  animateBoxes();
  requirement.innerHTML = `<h3>Fakta</h3>
  <ul> <li>Han løber skrigende væk.</li>
<li>Han ringer ikke igen.</li>
<li>Hun slipper for ham.</li>
</ul>`;
}

/********vin********/

console.log(vin);

vin.addEventListener("mouseover", mouseOverVin);
function mouseOverVin() {
  console.log("mouseOverhead");
  vin.style.fill = "#ffffffff";
}

vin.addEventListener("mouseout", mouseOutVin);
function mouseOutVin() {
  vin.style.fill = "#ff0000ff";
}

vin.addEventListener("click", clickVin);

function clickVin() {
  console.log("clickhead");
  h2.textContent = "vin";
  efficiency.innerHTML = `<h3>Du har trukket på vinen</h3>
  <p>Hun tager en tår vin og griner alt for højt af hans joke,
  så der kommer vin overalt.</p>`;
  animateBoxes();
  requirement.innerHTML = `<h3>Fakta</h3>
  <ul> <li>Han bliver irriteret.</li>
<li>Han går sin vej.</li>
<li>Hun slipper for ham.</li>
</ul>`;
}

/**********phone*********/
console.log(tlf);

tlf.addEventListener("mouseover", mouseOverTlf);
function mouseOverTlf() {
  console.log("mouseOverhead");
  tlf.style.fill = "#ffffffff";
}

tlf.addEventListener("mouseout", mouseOutTlf);
function mouseOutTlf() {
  tlf.style.fill = "#ff0000ff";
}

tlf.addEventListener("click", clickTlf);

function clickTlf() {
  console.log("clickhead");
  h2.textContent = "Telefon";
  efficiency.innerHTML = `<h3>Du har klikket ind på telefonen</h3>
  <p>Hun får hendes mor til at ringe og fortælle at hendes "hamster" er død.
  derfor bliver hun ødt til at gå</p>`;
  animateBoxes();
  requirement.innerHTML = `<h3>Fakta</h3>
  <ul> <li>Han lader hende gå.</li>
<li>Hun kan slippe væk.</li>
<li>Hun slipper for ham.</li>
</ul>`;
}

/*********andet***********/

function animateBoxes() {
  efficiency.classList.remove("hide");
  efficiency.classList.add("fadeIn");
  requirement.classList.remove("hide");
  requirement.classList.add("fadeIn");

  requirement.addEventListener("animationend", cleanup);
}

function cleanup() {
  console.log("cleanup");
  requirement.removeEventListener("animationend", cleanup);
  efficiency.classList.remove("fadeIn");
  requirement.classList.remove("fadeIn");
}
