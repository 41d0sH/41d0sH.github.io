function myFunction() {
  var input, filter, kata, td, i, txtValue
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
