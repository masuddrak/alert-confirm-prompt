const adminBtn=()=>{
   const add=confirm('are you sure')
   console.log(add)
   if(add===true){
       prompt('please give your number')
   }
   else{
       console.log('wrong')
   }
}