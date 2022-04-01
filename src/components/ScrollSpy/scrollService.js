export default function inView(isinView, one) {
  const item = `span${one}`;
  // if (one == 3) {
  //   if (isinView) document.getElementById(item).setAttribute("class", "active");
  // } else if (one == 5) {
  //   if (isinView) document.getElementById(item).setAttribute("class", "active");
  // } else {
  //   if (isinView) {
  //     document.getElementById(item).setAttribute("class", "active");
  //     // do effect
  //   } else {
  //     document.getElementById(item).removeAttribute("class", "active");

  //     // remove effect
  //   }
  // }

  // if (isinView) {
  //   if (one == 3) {
  //     document.getElementById(item).setAttribute("class", "active");
  //     document.getElementById("span5").removeAttribute("class", "active");
  //   } else if (one == 5) {
  //     document.getElementById(item).setAttribute("class", "active");
  //     document.getElementById("span3").removeAttribute("class", "active");
  //   } else {
  //     document.getElementById(item).setAttribute("class", "active");
  //     document.getElementById("span5").removeAttribute("class", "active");
  //     document.getElementById("span3").removeAttribute("class", "active");
  //   }
  // } else {
  //   document.getElementById(item).removeAttribute("class", "active");
  // }
  if (isinView) {
    document.getElementById(item).setAttribute("class", "active");
    // do effect
  } else {
    document.getElementById(item).removeAttribute("class", "active");

    // remove effect
  }
}
