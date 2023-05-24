// Change document background color to silver 
// Change the font color for h1 title tag to green
// Change the font case for h3 title tags to uppercase
// Add one more fruit to the fruits list
// Add one more vegetable to the vegetables list

document.body.style.backgroundColor = "silver";

var h1 = document.getElementById("title");
h1.style.color = "green";

var h3 = document.getElementsByTagName("h3");
for (var i = 0; i < h3.length; i++) {
  h3[i].style.textTransform = "uppercase";
}
let fruList = document.createElement("fruList");
fruList.innerHTML = "Oranges";
document.getElementById('style').appendChild(fruList)

let vegList = document.createElement("vegList");
vegList.innerHTML = "cauliflower";
document.getElementById('style').appendChild(vegList)







