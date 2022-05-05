const botao = document.querySelector('.botao')
const lampada = document.getElementById('bulbo')
var intensidade = 1 //Verifica a intensidade atual da luz, inicialmente definida a 1, seu valor máximo.
var estadolampada = 0 //Verifica se a lampada esta acessa ou apagada, incialmente apagada.
var coratual = '255,255,255' //Verifica a cor atual, inicialmente branca.
var trocandocorflash = false //Verifica se a opção flash esta ativada, inicialmente desativada.
var trocandocorstrobe = false //Verifica se a função strobe esta ativada, inicialmente desativada.

//Função do flash, as cor da luz ira se alternar entre as disponiveis no controle a cada 1 segundo.
function trocacorflash(){
    var cores = ["255, 0, 0", "0, 128, 0", "0, 0, 255", "163, 48, 48", "63, 150, 63","57, 57, 180","196, 62, 0","0, 139, 53","65, 0, 216"]; //Cores disponiveis
    cor = 0;
    div = 0;
    flash = setInterval(function(){
                cor++; div++;
                if (cor >= cores.length){ //Quando chegar na ultima cor, ir de volta para a primeira.
                    cor=0;}
                coratual = cores[cor] //Define a cor atual de acordo com a do vetor.
                lampada.style.backgroundColor = `rgba(${cores[cor]},${intensidade}` //Aplica a cor na lâmpada de acordo com a variavel coratual e a variavel de intensidade definida.
                lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})` //Aplica um efeito de luz de acordo com a variavel coratual e a variavel de intensidade definida.
            }, 1000) //Intervalo de troca de cores em milisegundos (1 segundo)

}

//Função do strobe, a cor da luz ira se alternar rapidamente entre as disponiveis no controle (a cada 0,1 segundos).
function trocacorstrobe(){
    var cores = ["255, 0, 0", "0, 128, 0", "0, 0, 255", "163, 48, 48", "63, 150, 63","57, 57, 180","196, 62, 0","0, 139, 53","65, 0, 216"];
    cor = 0;
    div = 0;
    strobe = setInterval(function(){
                cor++; div++;
                if (cor >= cores.length){ //Quando chegar na ultima cor, ir de volta para a primeira.
                    cor=0;}
                coratual = cores[cor] //Define a cor atual de acordo com a do vetor.
                lampada.style.backgroundColor = `rgba(${cores[cor]},${intensidade}` //Aplica a cor na lâmpada de acordo com a variavel coratual e a variavel de intensidade definida.
                lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})` //Aplica um efeito de luz de acordo com a variavel coratual e a variavel de intensidade definida.
            }, 100) //Intervalo de troca de cores em milisegundos (0,1 segundo).

}
    
/*Função que ira ser executada de acordo com qual botão do controle for
pressionado, cada botão chamará a função com um paramêtro própio (funcao), o switch 
irá verificar qual o paramêtro recebido e executará o comando correspondente.*/
function botaofuncao(funcao){
    switch (funcao){
        case "on": //Ligar a lâmpada.
            if (estadolampada == 0){  //Verifica se a lâmpada ja esta ligada para então ligar.
                intensidade = 1 //Define a intensidade para 1 toda vez que for ligada.
                estadolampada = 1 //Define o estadolampada para 1 para mostrar que a lâmpada esta ligada.
                trocandocorflash = false //Define que a função flash não estara rodando.
                trocandocorstrobe = false //Define que a função strobe não estara rodando.
                clearInterval(flash) //Ira parar a função flash caso esteja ativada.
                clearInterval(strobe) //Ira parar a função strobe caso esteja ativada.
                lampada.style.backgroundColor = `rgba(${coratual},${intensidade})` //Aplica a cor na lâmpada de acordo com a variavel coratual e a variavel de intensidade definida.
                lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})` //Aplica um efeito de luz de acordo com a variavel coratual e a variavel de intensidade definida.
            }
        break;

        case "off": //Desligar a lampâda.
            estadolampada = 0 //Define o estado da lampada para desligado.
            trocandocorflash = false //Define que a função flash não estara rodando.
            trocandocorstrobe = false //Define que a função strobe não estara rodando.
            clearInterval(flash) //Ira parar a função flash caso esteja ativada.
            clearInterval(strobe) //Ira parar a função strobe caso esteja ativada.
            lampada.style.backgroundColor = `rgba(${coratual},0)` //Definira a opacidade da luz para 0 para desliga-la.
            lampada.style.boxShadow = `` //Remove o efeito de luz.
        break;

        case "luzmenos": //Diminuir a intensidade.
            if (estadolampada == 1){ //Verifica se a lâmpada esta ligada.
                if (intensidade >= 0){ //Impede que a intensidade fique menor que 0.
                    intensidade -= 0.1 //Diminui 10% da intensidade atual (0,1 de 1).
                }
                lampada.style.backgroundColor = `rgba(${coratual},${intensidade})` //Aplica a cor na lâmpada de acordo com a variavel coratual e a variavel de itensidade que foi diminuida.
                lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})` //Aplica o efeito de luz de acordo com a variavel coratual e a itensidade que foi diminuida.
            }
        break;
        
        case "luzmais": //Aumentar a intensidade
            if (estadolampada == 1){ //Verifica se a lâmpada esta ligada.
                if (intensidade <= 1){ //Impede que a intensidade fique maior que 1.
                    intensidade += 0.1 //Aumenta em 10% a intensidade atual (0,1 de 1).
                }
                lampada.style.backgroundColor = `rgba(${coratual},${intensidade})` //Aplica a cor na lâmpada de acordo com a variavel coratual e a variavel de itensidade que foi aumentada.
                lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})` //Aplica o efeito de luz de acordo com a variavel coratual e a itensidade que foi aumentada.
            }
        break;

        //BOTOES DE CORES//
/*ESTE CASO SE REPETE PARA TODAS AS CORES*/
        case "red1":
            coratual = "255,0,0" //Define a variavel coratual para vermelho.
            trocandocorflash = false //Define que a função flash não estara rodando.
            trocandocorstrobe = false //Define que a função strobe não estara rodando.
            clearInterval(flash) //Ira parar a função flash caso esteja ativada.
            clearInterval(strobe) //Ira parar a função flash caso esteja ativada.
            lampada.style.backgroundColor = `rgba(${coratual},${intensidade})` //Aplica a cor na lâmpada de acordo com a variavel coratual e a variavel de intensidade atual.
            lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})` //Aplica um efeito de luz de acordo com a variavel coratual e a variavel de intensidade atual.
        break;

        case "green1":
            coratual = "0,128,0"
            trocandocorflash = false
            trocandocorstrobe = false
            clearInterval(flash)
            clearInterval(strobe)
            lampada.style.backgroundColor = `rgba(${coratual},${intensidade})`
            lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})`
        break;

        case "blue1":
            coratual = "0,0,255"
            trocandocorflash = false
            trocandocorstrobe = false
            clearInterval(flash)
            clearInterval(strobe)
            lampada.style.backgroundColor = `rgba(${coratual},${intensidade})`
            lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})`
        break;

        case "white":
            coratual = "255,255,255"
            trocandocorflash = false
            trocandocorstrobe = false
            clearInterval(flash)
            clearInterval(strobe)
            lampada.style.backgroundColor = `rgba(${coratual},${intensidade})`
            lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})`
        break;

        case "red2":
            coratual = "163, 48, 48"
            trocandocorflash = false
            trocandocorstrobe = false
            clearInterval(flash)
            clearInterval(strobe)
            lampada.style.backgroundColor = `rgba(${coratual},${intensidade})`
            lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})`
        break;

        case "green2":
            coratual = "63, 150, 63"
            trocandocorflash = false
            trocandocorstrobe = false
            clearInterval(flash)
            clearInterval(strobe)
            lampada.style.backgroundColor = `rgba(${coratual},${intensidade})`
            lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})`
        break;

        case "blue2":
            coratual = "57, 57, 180"
            trocandocorflash = false
            trocandocorstrobe = false
            clearInterval(flash)
            clearInterval(strobe)
            lampada.style.backgroundColor = `rgba(${coratual},${intensidade})`
            lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})`
        break;

        case "flash": //Função FLASH
            if (estadolampada == 1 && trocandocorflash == false){ //Verifica se a lâmpada esta ligada e se a função flash esta desativada.
                clearInterval(strobe) //Para a função strobe caso esteja ativada.
                trocacorflash() //Chama a função trocacorflash definida no início do código.
                trocandocorflash = true //Define que a função flash foi ativada.
                trocandocorstrobe = false //Define que função strobe foi desativada.
            }
        break;
        
        case "strobe": //Função STROBE
            if (estadolampada == 1 && trocandocorstrobe == false){ //Verifica se a lâmpada esta ligada e se a função strobe esta desativada.
                clearInterval(flash) //Para a função flash caso esteja ativada.
                trocacorstrobe() //Chama a função trocacorstrobe definida no início do código.
                trocandocorstrobe = true //Define que a função strobe foi ativada.
                trocandocorflash = false //Define que a função flash foi desativada.
        }
        break;

        case "red3":
            coratual = "196, 62, 0"
            trocandocorflash = false
            trocandocorstrobe = false
            clearInterval(flash)
            clearInterval(strobe)
            lampada.style.backgroundColor = `rgba(${coratual},${intensidade})`
            lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})`
        break;

        case "green3":
            coratual = "0, 139, 53"
            trocandocorflash = false
            trocandocorstrobe = false
            clearInterval(flash)
            clearInterval(strobe)
            lampada.style.backgroundColor = `rgba(${coratual},${intensidade})`
            lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})`
        break;
        
        case "blue3":
            coratual = "65, 0, 216"
            trocandocorflash = false
            trocandocorstrobe = false
            clearInterval(flash)
            clearInterval(strobe)
            lampada.style.backgroundColor = `rgba(${coratual},${intensidade})`
            lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})`
        break;
    }
}