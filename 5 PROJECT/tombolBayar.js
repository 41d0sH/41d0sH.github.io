
var arr=[]
var tombol = document.getElementsByClassName("beli")
var jumlah=0
var hasil = document.getElementsByClassName("hargaBali")[0].innerHTML
var hasilBali=hasil.replace("Total Expenses: Rp","")
var hasil = document.getElementsByClassName("hargaRaja")[0].innerHTML
var hasilRaja=hasil.replace("Total Expenses: Rp","")
var hasil = document.getElementsByClassName("hargaBelitung")[0].innerHTML
var hasilBelitung=hasil.replace("Total Expenses: Rp","")
//console.log(hasil)
var total1=parseInt(hasilBali)*1000000-15000000
var total2=parseInt(hasilRaja)*1000000-20000000
var total3=parseInt(hasilBelitung)*1000000-10000000
arr.push(total1)
arr.push(total2)
arr.push(total3)
//console.log(arr) 
//console.log(tombol[0])
tombol[0].addEventListener("click",beli)
    function beli(){ 
        for(var l=0;l<arr.length;l++){
            jumlah=jumlah+arr[l]
        } 
        document.getElementsByClassName("input2")[0].value = "Total Price: "+jumlah
        if(jumlah>0){
            alert("Anda telah membayar sebesar "+jumlah+". Selamat menikmati perjalanan anda!")
        }else{
            alert("Anda belum memilih destinasi tujuan anda, silahkan pilih destinasi sesuai tujuan yang anda inginkan.")
        }
    
    }
