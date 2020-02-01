var klik1 = document.getElementsByClassName("klik1")
klik1[0].addEventListener("click", selectBali)

function selectBali(){
    //Tombol link back bali
    var button1 = document.createElement("button")
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
    console.log(button1)
    
    var li1=document.getElementById("cariBali").innerHTML
    document.write(li1)
}

      
var klik2 = document.getElementsByClassName("klik2")
klik2[0].addEventListener("click", selectRaja)

function selectRaja(){
    //Tombol link back raja ampat
    var button2 = document.createElement("button")
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
    console.log(button2)
    
    var li2=document.getElementById("cariRaja").innerHTML
    document.write(li2)
}  


var klik3 = document.getElementsByClassName("klik3")
klik3[0].addEventListener("click", selectBelitung)

function selectBelitung(){
    //Tombol link back bangka belitung
    var button3 = document.createElement("button")
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
    console.log(button3)

    var li3=document.getElementById("cariBelitung").innerHTML
    document.write(li3)
}     