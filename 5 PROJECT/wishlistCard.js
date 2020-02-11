    //Tombol add WishlistCard Bali
    klikBali=document.getElementsByClassName("biayaBali")
    var jumlahKlik1=1
    var arrTotal1=[]
    var arrKlik1=[]
    for(let d=0; d<klikBali.length; d++){
        klikBali[d].addEventListener("click",cardBali);
        function cardBali(){
            
            jumlahKlik1=jumlahKlik1  
            //document.getElementsByClassName("quantity1")[0].innerHTML = jumlahKlik1
    
            //console.log(jumlahKlik1)
            var hasil = document.getElementsByClassName("hargaBali")[0].innerHTML
            var hasilBali=hasil.replace("Total Expenses: Rp","")
            var total1=parseInt(hasilBali)*1000000
            //document.getElementsByClassName("totalPrice1")[0].innerHTML=total1
            
            var totalBali=0
            var totalKlik=0
            arrTotal1.push(total1)
            arrKlik1.push(jumlahKlik1)
            for(let i=0;i<arrTotal1.length;i++){
                totalBali=totalBali+parseInt(arrTotal1[i])
                totalKlik=totalKlik+parseInt(arrKlik1[i])
            }
            document.getElementsByClassName("totalPrice1")[0].innerHTML=totalBali
            document.getElementsByClassName("quantity1")[0].innerHTML=totalKlik
            
        }
    }

    
   
    //tombol batal bali
    batalkan1 = document.getElementsByClassName("batalBali")
            batalkan1[0].addEventListener("click", batalBali)
            function batalBali(){
                var totalBali=0
                var totalKlik=0
                arrTotal1.pop()
                arrKlik1.pop()
                for(let j=0;j<arrTotal1.length;j++){
                    totalBali=totalBali+parseInt(arrTotal1[j])
                    totalKlik=totalKlik+parseInt(arrKlik1[j])
                }
                document.getElementsByClassName("totalPrice1")[0].innerHTML=totalBali
                document.getElementsByClassName("quantity1")[0].innerHTML=totalKlik
                
            }
    
//Tombol add WishlistCard Raja Ampat
    klikRaja=document.getElementsByClassName("biayaRaja")
    var jumlahKlik2=1
    var arrTotal2=[]
    var arrKlik2=[]
    for(let e=0; e<klikRaja.length; e++){   
        klikRaja[e].addEventListener("click",cardRaja);
        function cardRaja(){
            jumlahKlik2=jumlahKlik2  
            //document.getElementsByClassName("quantity1")[0].innerHTML = jumlahKlik1
    
            //console.log(jumlahKlik1)
            var hasil2 = document.getElementsByClassName("hargaRaja")[0].innerHTML
            var hasilRaja=hasil2.replace("Total Expenses: Rp","")
            var total2=parseInt(hasilRaja)*1000000
            //document.getElementsByClassName("totalPrice1")[0].innerHTML=total1
            
            var totalRaja=0
            var totalKlik2=0
            arrTotal2.push(total2)
            arrKlik2.push(jumlahKlik2)
            for(let k=0;k<arrTotal2.length;k++){
                totalRaja=totalRaja+parseInt(arrTotal2[k])
                totalKlik2=totalKlik2+parseInt(arrKlik2[k])
            }
            document.getElementsByClassName("totalPrice2")[0].innerHTML=totalRaja
            document.getElementsByClassName("quantity2")[0].innerHTML=totalKlik2
        
        }  
    }
    //tombol batal raja
    batalkan2 = document.getElementsByClassName("batalRaja")
            batalkan2[0].addEventListener("click", batalRaja)
            function batalRaja(){
                var totalRaja=0
                var totalKlik2=0
                arrTotal2.pop()
                arrKlik2.pop()
                for(let l=0;l<arrTotal2.length;l++){
                    totalRaja=totalRaja+parseInt(arrTotal2[l])
                    totalKlik2=totalKlik2+parseInt(arrKlik2[l])
                }
                document.getElementsByClassName("totalPrice2")[0].innerHTML=totalRaja
                document.getElementsByClassName("quantity2")[0].innerHTML=totalKlik2
                
            }   
            

//Tombol add WishlistCard Belitung    
    klikBelitung=document.getElementsByClassName("biayaBelitung")
    var jumlahKlik3=1
    var arrTotal3=[]
    var arrKlik3=[]
    for(let f=0; f<klikBelitung.length; f++){   
        klikBelitung[f].addEventListener("click",cardBelitung);
        function cardBelitung(){    
            jumlahKlik3=jumlahKlik3  
            //document.getElementsByClassName("quantity1")[0].innerHTML = jumlahKlik1
    
            //console.log(jumlahKlik1)
            var hasil3 = document.getElementsByClassName("hargaBelitung")[0].innerHTML
            var hasilBelitung=hasil3.replace("Total Expenses: Rp","")
            var total3=parseInt(hasilBelitung)*1000000
            //document.getElementsByClassName("totalPrice1")[0].innerHTML=total1
            
            var totalBelitung=0
            var totalKlik3=0
            arrTotal3.push(total3)
            arrKlik3.push(jumlahKlik3)
            for(let k=0;k<arrTotal3.length;k++){
                totalBelitung=totalBelitung+parseInt(arrTotal3[k])
                totalKlik3=totalKlik3+parseInt(arrKlik3[k])
            }
            document.getElementsByClassName("totalPrice3")[0].innerHTML=totalBelitung
            document.getElementsByClassName("quantity3")[0].innerHTML=totalKlik3  
        }
    }

    
//tombol batal Belitung
batalkan3 = document.getElementsByClassName("batalBelitung")
batalkan3[0].addEventListener("click", batalBelitung)
function batalBelitung(){
    var totalBelitung=0
    var totalKlik3=0
    arrTotal3.pop()
    arrKlik3.pop()
    for(let l=0;l<arrTotal3.length;l++){
        totalBelitung=totalBelitung+parseInt(arrTotal3[l])
        totalKlik3=totalKlik3+parseInt(arrKlik3[l])
    }
    document.getElementsByClassName("totalPrice3")[0].innerHTML=totalBelitung
    document.getElementsByClassName("quantity3")[0].innerHTML=totalKlik3
    
}












