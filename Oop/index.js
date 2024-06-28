const display = document.getElementById("display");//görüntüyü alma
const result = 0;

function appendToDisplay(input){
    display.value += input;
}

/*function clearDisplay(){
    display.value = "";
}
*/
//Eval kodda içine ne yazarsan onu çalıştırır.Burada Display de her ne yazıyorsa o işlemi yapacak
//Ancak büyük bir güvenlik açığı oluşuturuyor kullanmamak en iyisi.
//hata ve güvenlik için try catch
function calculate(){
  try{
    display.value = eval(display.value); 
  }
  catch(error){
    display.value="Error";
  }
}