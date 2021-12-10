let scrollNumber = 0;
let maxScrollNumber = 3;
document.getElementById('btnNext').onclick = function () {
  scrollNumber++;
  scrollNumber = Math.min(2, scrollNumber);
  document.getElementById('inner').style.transform = `translate(${-1100 * scrollNumber}px,0)`;
  document.getElementById('inner').style.transition = "all 0.8s ease-in-out";
  changeLine();
}
document.getElementById('btnBack').onclick = function () {
  scrollNumber--;
  scrollNumber = Math.max(0, scrollNumber);
  document.getElementById('inner').style.transform = `translate(${-1100 * scrollNumber}px,0)`;
  document.getElementById('inner').style.transition = "all 0.8s ease-in-out";
  changeLine();
}

function changeLine() {
  let line1 = document.getElementById("line1");
  let line2 = document.getElementById("line2");
  line2.style.transform = `translate(${100 * scrollNumber}px,0)`;
  line2.style.transition = "all 0.8s ease-in-out";
  // line2.style.width = line1.clientWidth / maxScrollNumber * (scrollNumber + 1) + "px";
}

function onLoadSlider() {
  let maxHeight = 0;
  for (let element of document.getElementsByClassName(`sliderElement`)) {
    let tempHeight = element.clientHeight;
    if (maxHeight < tempHeight) {
      maxHeight = tempHeight;
    }
  }
  for (let element of document.getElementsByClassName(`sliderElement`)) {
    element.style.height = maxHeight - 50 + "px";
  }
  changeLine();
}
