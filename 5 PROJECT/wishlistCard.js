
    klikBali=document.getElementsByClassName("biayaBali")
    var jumlahKlik1=0
    for(let d=0; d<klikBali.length; d++){
        klikBali[d].addEventListener("click",cardBali);
        function cardBali(){
            
            jumlahKlik1=jumlahKlik1+1  
            document.getElementsByClassName("quantity1")[0].innerHTML = jumlahKlik1
            //console.log(jumlahKlik1)
            var hasil = document.getElementsByClassName("hargaBali")[0].innerHTML
            var hasilBali=hasil.replace("Total Expenses: Rp","")
            var total1=parseInt(hasilBali)*1000000
            
            document.getElementsByClassName("totalPrice1")[0].innerHTML=total1*jumlahKlik1
                   
        } 
    }


    klikRaja=document.getElementsByClassName("biayaRaja")
    var jumlahKlik2=0
    for(let e=0; e<klikRaja.length; e++){   
        klikRaja[e].addEventListener("click",cardRaja);
        function cardRaja(){
               
            jumlahKlik2=jumlahKlik2+1  
            document.getElementsByClassName("quantity2")[0].innerHTML = jumlahKlik2
            //console.log(jumlahKlik2)
            var hasil2 = document.getElementsByClassName("hargaRaja")[0].innerHTML
            var hasilRaja=hasil2.replace("Total Expenses: Rp","")
            var total2=parseInt(hasilRaja)*1000000 
                            
            document.getElementsByClassName("totalPrice2")[0].innerHTML=total2*jumlahKlik2
            
        }
    }
   
    klikBelitung=document.getElementsByClassName("biayaBelitung")
    var jumlahKlik3=0
    for(let f=0; f<klikBelitung.length; f++){   
        klikBelitung[f].addEventListener("click",cardBelitung);
        function cardBelitung(){    
            jumlahKlik3=jumlahKlik3+1  
            document.getElementsByClassName("quantity3")[0].innerHTML = jumlahKlik3
            //console.log(jumlahKlik2)
            var hasil3 = document.getElementsByClassName("hargaBelitung")[0].innerHTML
            var hasilBelitung=hasil3.replace("Total Expenses: Rp","")
            var total3=parseInt(hasilBelitung)*1000000 
                            
            document.getElementsByClassName("totalPrice3")[0].innerHTML=total3*jumlahKlik3
            
        }
    }

    












