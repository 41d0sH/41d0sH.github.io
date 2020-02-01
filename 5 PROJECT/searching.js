
var input=document.getElementsByClassName("search")
input[0].addEventListener("click",cari);

function cari(){
  var test=document.getElementsByClassName("input1")[0].value
  var hasil=test.toLowerCase()
  
     if (hasil==="bali"){
      //tombol link back bali
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

      var li=document.getElementById("cariBali").innerHTML
      document.write(li)
   
     }else if(hasil==="raja ampat"){
      //tombol link back raja ampat
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

      var li=document.getElementById("cariRaja").innerHTML
      document.write(li)

     }else if(hasil==="bangka belitung"){
      //tombol link back
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

      var li=document.getElementById("cariBelitung").innerHTML
      document.write(li)
     }
  }

  /*var newCity=city.filter(function(a) {
    return a===test
  })*/               
  
  /*function cari(){
    var city = ["bali","raja ampat","bangka belitung"];
  
    function linearSearch(arr, toFind) {
        for (var i=0; i<arr.length; i++) {
          if (arr[i] === toFind) {
            console.log(i) 
          }      
        }console.log("null")  
      }linearSearch(city,test); // returns 3
    }
linearSearch(city, "raja ampat"); // returns 3
linearSearch(city, "white"); // returns null
linearSearch(city, "bali"); // returns null*/
