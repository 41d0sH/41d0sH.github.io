
x=document.getElementsByClassName("biayaBali")
var arr=[]          
for(let i=0; i<x.length; i++){
    //console.log(x[i])
    x[i].addEventListener("click",hargaBali);
    
    
    function hargaBali(){ 
        //alert("KLIK 'BATALKAN BALI' jika tidak jadi")
        
        var jumlahBali=0
        var hasil = document.getElementsByClassName("hargaBali")[0].innerHTML
        var hasilBali=hasil.replace("Total Expenses: Rp","")
        //console.log(hasilBali)
        var total1=parseInt(hasilBali)*1000000
        arr.push(total1)
        for(var l=0;l<arr.length;l++){
            jumlahBali=jumlahBali+arr[l]
            document.getElementsByClassName("input2")[0].value = "Total Price: "+jumlahBali
            document.getElementsByClassName("totalPrice")[0].innerHTML = "TOTAL HARGA YANG HARUS DIBAYARKAN:Rp "+jumlahBali   
        }
          
    }      
}
//tombol batal bali
batalkanTotal1 = document.getElementsByClassName("batalBali")
batalkanTotal1[0].addEventListener("click", batalTotalBali)
function batalTotalBali(){
    var batalTotalBali=0
    //console.log(arr)
    if(arr.indexOf(15000000)>-1){
        arr.indexOf(15000000)
        arr.splice(arr.indexOf(15000000),1)
    }else{
        alert("Destinasi anda ke Bali sudah dibatalkan semuanya")
    }
    
    //console.log(arr)
    
    for(o=0; o<arr.length; o++){
        batalTotalBali=batalTotalBali+parseInt(arr[o])
        //console.log(batalTotalBali)
        
    }
    document.getElementsByClassName("input2")[0].value = "Total Price: "+batalTotalBali
    document.getElementsByClassName("totalPrice")[0].innerHTML = "TOTAL HARGA YANG HARUS DIBAYARKAN:Rp "+batalTotalBali    
}
    


y=document.getElementsByClassName("biayaRaja")

for(let j=0; j<y.length; j++){

    y[j].addEventListener("click",hargaRaja);
    
    function hargaRaja(){
        //alert("KLIK 'BATALKAN RAJA' jika tidak jadi")
        var jumlahRaja=0
        var hasil2 = document.getElementsByClassName("hargaRaja")[0].innerHTML
        var hasilRaja=hasil2.replace("Total Expenses: Rp","")
        //console.log(hasilRaja)
        var total2=parseInt(hasilRaja)*1000000
        arr.push(total2)
        //console.log(arr)
        
        for(var m=0;m<arr.length;m++){
           jumlahRaja=jumlahRaja+arr[m]  
           //console.log(jumlah2)
           document.getElementsByClassName("input2")[0].value = "Total Price: "+jumlahRaja
           document.getElementsByClassName("totalPrice")[0].innerHTML = "TOTAL HARGA YANG HARUS DIBAYARKAN:Rp "+jumlahRaja   
        } 
           
    }
}

//tombol batal Raja
batalkanTotal2 = document.getElementsByClassName("batalRaja")
batalkanTotal2[0].addEventListener("click", batalTotalRaja)
function batalTotalRaja(){
    var batalTotalRaja=0
    if(arr.indexOf(20000000)>-1){
        arr.indexOf(20000000)
        arr.splice(arr.indexOf(20000000),1)
    }else{
        alert("Destinasi anda ke Raja Ampat sudah dibatalkan semuanya")
    }
    
    //console.log(arr)
    
    for(p=0; p<arr.length; p++){
        batalTotalRaja=batalTotalRaja+parseInt(arr[p])
        console.log(batalTotalRaja)
        
    }
    document.getElementsByClassName("input2")[0].value = "Total Price: "+batalTotalRaja
    document.getElementsByClassName("totalPrice")[0].innerHTML = "TOTAL HARGA YANG HARUS DIBAYARKAN:Rp "+batalTotalRaja
    
}

    
z=document.getElementsByClassName("biayaBelitung")

for(let k=0; k<z.length; k++){

    z[k].addEventListener("click",hargaBelitung);
    var total=0
    function hargaBelitung(){
        //alert("KLIK 'BATALKAN BELITUNG' jika tidak jadi")
        var jumlahBelitung=0
        var hasil3 = document.getElementsByClassName("hargaBelitung")[0].innerHTML
        var hasilBelitung=hasil3.replace("Total Expenses: Rp","")
        //console.log(hasilRaja)
        var total3=parseInt(hasilBelitung)*1000000
        arr.push(total3)
        //console.log(arr)
        
        for(var n=0;n<arr.length;n++){
           jumlahBelitung=jumlahBelitung+arr[n]  
           //console.log(jumlah2)
           document.getElementsByClassName("input2")[0].value = "Total Price: "+jumlahBelitung
           document.getElementsByClassName("totalPrice")[0].innerHTML = "TOTAL HARGA YANG HARUS DIBAYARKAN:Rp "+jumlahBelitung
        }
           
    }
} 

//tombol batal Belitung
batalkanTotal3 = document.getElementsByClassName("batalBelitung")
batalkanTotal3[0].addEventListener("click", batalTotalBelitung)
function batalTotalBelitung(){
    var batalTotalBelitung=0
    if(arr.indexOf(10000000)>-1){
        arr.indexOf(10000000)
        arr.splice(arr.indexOf(10000000),1)
    }else{
        alert("Destinasi anda ke Bangka-Belitung sudah dibatalkan semuanya")
    }
    
    //console.log(arr)
    for(q=0; q<arr.length; q++){
        batalTotalBelitung=batalTotalBelitung+parseInt(arr[q])
        //console.log(batalTotalRaja)
        
    }
    document.getElementsByClassName("input2")[0].value = "Total Price: "+batalTotalBelitung
    document.getElementsByClassName("totalPrice")[0].innerHTML = "TOTAL HARGA YANG HARUS DIBAYARKAN:Rp "+batalTotalBelitung
    
}



