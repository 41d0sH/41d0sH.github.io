
    dropdownBali = document.getElementsByClassName("dropBali")

    dropdownBali[0].addEventListener("click", dropBali)
    //console.log(dropdown[j])
    function dropBali(){
        var input, filter, kata, td, i1, txtValue
        input = document.getElementsByClassName("dropBali")[0]
        filter = input.innerText.toUpperCase()
        kata = document.getElementsByClassName("container")
      
        for (let i1 = 0; i1 < kata.length; i1++) {
          td = kata[i1].getElementsByTagName("b")[0]
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              kata[i1].style.display = ""
            } 
            else {
              kata[i1].style.display = "none"
            }
          }       
        }
    }


    dropdownRaja = document.getElementsByClassName("dropRaja")

    dropdownRaja[0].addEventListener("click", dropRaja)
    //console.log(dropdown[j])
    function dropRaja(){
        var input2, filter2, kata2, td2, i2, txtValue2
        input2 = document.getElementsByClassName("dropRaja")[0]
        filter2 = input2.innerText.toUpperCase()
        kata2 = document.getElementsByClassName("container")
      
        for (let i2 = 0; i2 < kata2.length; i2++) {
          td2 = kata2[i2].getElementsByTagName("b")[0]
          if (td2) {
            txtValue2 = td2.textContent || td2.innerText;
            if (txtValue2.toUpperCase().indexOf(filter2) > -1) {
              kata2[i2].style.display = ""
            } 
            else {
              kata2[i2].style.display = "none"
            }
          }       
        }
    }

    dropdownBelitung = document.getElementsByClassName("dropBelitung")

    dropdownBelitung[0].addEventListener("click", dropBelitung)
    //console.log(dropdown[j])
    function dropBelitung(){
        var input3, filter3, kata3, td3, i3, txtValue3
        input3 = document.getElementsByClassName("dropBelitung")[0]
        filter3 = input3.innerText.toUpperCase()
        kata3 = document.getElementsByClassName("container")
      
        for (let i3 = 0; i3 < kata3.length; i3++) {
          td3 = kata3[i3].getElementsByTagName("b")[0]
          if (td3) {
            txtValue3 = td3.textContent || td3.innerText;
            if (txtValue3.toUpperCase().indexOf(filter3) > -1) {
              kata3[i3].style.display = ""
            } 
            else {
              kata3[i3].style.display = "none"
            }
          }       
        }
    }


    dropdownSemua = document.getElementsByClassName("dropSemua")

    dropdownSemua[0].addEventListener("click", dropSemua)
    //console.log(dropdown[j])
    function dropSemua(){
        var input4, filter4, kata4, td4, i4, txtValue4
        input4 = document.getElementsByClassName("dropSemua")[0]
        filter4 = input4.innerText.toUpperCase()
        kata4 = document.getElementsByClassName("container")
      
        for (let i4 = 0; i4 < kata4.length; i4++) {
          td4 = kata4[i4].getElementsByTagName("b")[0]
          if (td4) {
            txtValue4 = td4.textContent || td4.innerText;
            if (txtValue4.toUpperCase().indexOf(filter4) === -1) {
              kata4[i4].style.display = ""
            } 
            else {
              kata4[i4].style.display = "none"
            }
          }       
        }
    }