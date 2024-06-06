let a=+prompt('Iltimos birinchi soni kiriting')
let b=+prompt('Iltimoz ikinchi soni kiriting')

 alert(`1.Birinchi soni ikkinchi songan qoshish
2.Ikkinchi soni birinchi sondan ayirish
 3.Birinchi soni ikkinchi songan kopaytirish
 4.Ikkinchi soni birinchi songa bolish`) 
    
 let aa = prompt('1-4 gacha soni tanlang')

 let c=(a+b)
 let d=(a-b)
 let e=(a*b)
 let f=(a/b)
 

 if (aa==1) {
 console.log(`${c}`)
 } else if (aa==2) {
   console.log(`${d}`)
 }  else if (aa==3) {
   console.log(`${e}`)
 }  else if (aa==4) {
   console.log(`${f}`)
 } 