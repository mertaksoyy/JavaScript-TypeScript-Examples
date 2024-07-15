 export class AppScreen{ 
    //private display = document.getElementById("screen");//Bu şekilde html öğesini string işlem yaptıramıyorum
    private display : HTMLDivElement; //HTMLDivElement ile Html içindeki Div elementini manüpüle için kullanabilirim

    constructor(screenId:string){
        this.display = document.getElementById(screenId) as HTMLDivElement;
    }

    clear(){
        this.display.innerText = " "; //innerText Bir HTML elementinin iç metin içeriğini almak veya değiştirmek için kullanılır
    }

    update(value : string){
        this.display.innerText = value//value değeri number olduğu için text içine ToString olarak atıyorum.
    }

}

