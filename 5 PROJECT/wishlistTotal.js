
x=document.getElementsByClassName("biayaBali")
          
for(let i=0; i<x.length; i++){
    //console.log(x[i])
    x[i].addEventListener("click",hargaBali);
    
    var arr=[]
    function hargaBali(){ 
        var jumlahBali=0
        var hasil = document.getElementsByClassName("hargaBali")[0].innerHTML
        var hasilBali=hasil.replace("Total Expenses: Rp","")
        //console.log(hasilBali)
        var total1=parseInt(hasilBali)*1000000
        arr.push(total1)
        for(var l=0;l<arr.length;l++){
            jumlahBali=jumlahBali+arr[l]
            document.getElementsByClassName("input2")[0].value = "Total Price:"+jumlahBali
            document.getElementsByClassName("totalPrice")[0].innerHTML = "TOTAL HARGA YANG HARUS DIBAYARKAN:Rp "+jumlahBali
            
         } 
    } 
}
y=document.getElementsByClassName("biayaRaja")

for(let j=0; j<y.length; j++){

    y[j].addEventListener("click",hargaRaja);
    var total=0
    function hargaRaja(){
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
           document.getElementsByClassName("input2")[0].value = "Total Price:"+jumlahRaja
           document.getElementsByClassName("totalPrice")[0].innerHTML = "TOTAL HARGA YANG HARUS DIBAYARKAN:Rp "+jumlahRaja
        
    
        }   
    }
}
    
z=document.getElementsByClassName("biayaBelitung")

for(let k=0; k<z.length; k++){

    z[k].addEventListener("click",hargaBelitung);
    var total=0
    function hargaBelitung(){
        
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
           document.getElementsByClassName("input2")[0].value = "Total Price:"+jumlahBelitung
           document.getElementsByClassName("totalPrice")[0].innerHTML = "TOTAL HARGA YANG HARUS DIBAYARKAN:Rp "+jumlahBelitung
        }   
    }
} 
