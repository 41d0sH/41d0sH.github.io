function myFunction() {
  var input, filter, table, kata, td, i, txtValue
  input = document.getElementById("myInput")
  filter = input.value.toUpperCase()
  kata = document.getElementsByClassName("container")

  for (i = 0; i < kata.length; i++) {
    td = kata[i].getElementsByTagName("b")[0]
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        kata[i].style.display = ""
      } else {
        kata[i].style.display = "none"
      }
    }       
  }
}















/*var button1 = document.createElement("button")
var buttonText = document.createTextNode("close")
button1.appendChild(buttonText)
var masuk1=document.getElementById("cariBali")
masuk1.appendChild(button1)
      
var link = document.createElement("a")
button1.appendChild(link)
var attr = document.createAttribute("href")
attr.value="index.html"
link.setAttributeNode(attr)
var h1 = document.createElement("h5")
var h1Text = document.createTextNode("link back")
h1.appendChild(h1Text)
link.appendChild(h1)
console.log(button1)*/


    




//-----------------------------------------------------------------------//
/*var button2 = document.createElement("button")
var buttonText = document.createTextNode("close")
button2.appendChild(buttonText)
var masuk2=document.getElementById("cariRaja")
masuk2.appendChild(button2)

var link = document.createElement("a")
button2.appendChild(link)
var attr = document.createAttribute("href")
attr.value="index.html"
link.setAttributeNode(attr)
var h1 = document.createElement("h5")
var h1Text = document.createTextNode("link back")
h1.appendChild(h1Text)
link.appendChild(h1)
console.log(button2)*/

     /* button.addEventListener("click",keluar)
        
      function keluar(){
        alert ("tes");
      }*/

//---------------------------------------------------------------------//

/*var button3 = document.createElement("button")
var buttonText = document.createTextNode("close")
button3.appendChild(buttonText)
var masuk3=document.getElementById("cariBelitung")
masuk3.appendChild(button3)
       
var link = document.createElement("a")
button3.appendChild(link)
var attr = document.createAttribute("href")
attr.value="index.html"
link.setAttributeNode(attr)
var h1 = document.createElement("h5")
var h1Text = document.createTextNode("link back")
h1.appendChild(h1Text)
link.appendChild(h1)
console.log(button3)*/
      /*button3.addEventListener("click",keluar)
      function keluar(){
        alert ("tes");
      }*/