let botoes = document.getElementsByClassName("botao")
let display = document.getElementById("display");


for(i=0;i<botoes.length;i++){
    botoes[i].addEventListener("click", function () {
        let character = this.value.toString()
        
        switch(character){
            case 'C': display.innerHTML='' 
            break
            case '=': display.innerHTML = eval(display.innerHTML)
            break
            case 'sqr': display.innerHTML += '*' + display.innerHTML 
            break
            case 'root': display.innerHTML = Math.sqrt(parseFloat(display.innerHTML))
            break
            default: display.innerHTML += ''+character+''
        }
    })

    function calcular(){
        console.log("executed")
        return parseFloat(display.innerHTML);

    }
}