(function fortuneTeller(childrenNum, name, place, title) {
  let parElem = document.createElement("p");
  parElem.textContent = `You will be a ${title} in ${place}, and married to ${name} with ${childrenNum} kids.`
  document.body.appendChild(parElem);
})(4, "Garry", "Paris", "janitor")