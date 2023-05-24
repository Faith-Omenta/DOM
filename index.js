// Change document background color to silver 
// Change the font color for h1 title tag to green
// Change the font case for h3 title tags to uppercase
// Add one more fruit to the fruits list
// Add one more vegetable to the vegetables list

document.body.style.backgroundColor = "silver";

var h1 = document.getElementById("title");
h1.style.color = "green";

let h3 = document.getElementsByTagName("h3");
for (let i = 0; i < h3.length; i++) {
  h3[i].style.textTransform = "uppercase";
}

let fruList = document.getElementById("fruList");
let newFruit = document.createElement("li");
newFruit.textContent = "pears";
fruList.appendChild(newFruit);

let vegList = document.getElementById("vegList");
let newVegetable = document.createElement("li");
newVegetable.textContent = "cauliflower";
vegList.appendChild(newVegetable);








