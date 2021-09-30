
let nome = prompt("Digite seu nome Jogador");

function atacar_btn(){

    let ataqueUsuario = document.frm_jogo.ataque.value;

    //Ataque randomico do Usuario
    let ataquePC = parseInt((Math.random() * 3) + 1);

    //Pedra
    switch(ataqueUsuario){
        case 'pedra':

            if( ataquePC == 1){ //Pedra
                document.write("<link rel='stylesheet' href='css/jogo.css'>");
                document.write("<h1> JO-KEN-PO </h1>");
                document.write("<div id='conteiner'>");
                    document.write(`<p class='esquerdo'> ${nome} Escolheu: ${ataqueUsuario} <p>`);
                    document.write("<p> Computador Escolheu: Pedra <p>");
                document.write("</div>");

                document.write("<table id='imagem'>");
                document.write("<tr>");
                    document.write("<td> <img id='imagemUsuario' src='https://www.bigmae.com/wp-content/uploads/2010/07/pedra.png'></img>");
                    document.write("<td> <img id='imagemPC' src='https://www.bigmae.com/wp-content/uploads/2010/07/pedra.png'></img>");
                document.write("</tr>");
                document.write("</table>");
                document.write("<br>");

                document.write("<h2>Empatou!</h2>");
                document.write("<center><button><a href='index.html'>Jogar Novamente!</a></button></center>");
            }else if(ataquePC == 2){ //Papel
                document.write("<link rel='stylesheet' href='css/jogo.css'>");
                document.write("<h1> JO-KEN-PO </h1>");
                document.write("<div id='conteiner'>");
                    document.write(`<p class='esquerdo'> ${nome} Escolheu: ${ataqueUsuario} <p>`);
                    document.write("<p> Computador Escolheu: Papel <p>");
                document.write("</div>");

                document.write("<table id='imagem'>");
                document.write("<tr>");
                    document.write("<td> <img id='imagemUsuario' src='https://www.bigmae.com/wp-content/uploads/2010/07/pedra.png'></img>");
                    document.write("<td> <img id='imagemPC' src='https://www.bigmae.com/wp-content/uploads/2010/07/papel.png'></img>");
                document.write("</tr>");
                document.write("</table>");
                document.write("<br>");

                document.write(`<h2> ${nome} Perdeu! </h2>`);
                document.write("<center><button><a href='index.html'>Jogar Novamente!</a></button></center>");
            }else if(ataquePC == 3){ //Tesoura
                document.write("<link rel='stylesheet' href='css/jogo.css'>");
                document.write("<h1> JO-KEN-PO </h1>");
                document.write("<div id='conteiner'>");
                    document.write(`<p class='esquerdo'> ${nome} Escolheu: ${ataqueUsuario} <p>`);
                    document.write("<p> Computador Escolheu: Tesoura <p>");
                document.write("</div>");

                document.write("<table id='imagem'>");
                document.write("<tr>");
                    document.write("<td> <img id='imagemUsuario' src='https://www.bigmae.com/wp-content/uploads/2010/07/pedra.png'></img>");
                    document.write("<td> <img id='imagemPC' src='https://www.bigmae.com/wp-content/uploads/2010/07/tesoura.png'></img>");
                document.write("</tr>");
                document.write("</table>");
                document.write("<br>");

                document.write(`<h2> ${nome} Ganhou! </h2>`);
                document.write("<center><button><a href='index.html'>Jogar Novamente!</a></button></center>");
            }else if(ataquePC == 4){ //Lagarto
                document.write(`${nome} Escolheu: ${ataqueUsuario}`);
                document.write("<br>");
                document.write("<img id='pedra' src='https://www.bigmae.com/wp-content/uploads/2010/07/pedra.png' width='100px' height='200px'></img>");
                document.write(`O Computador Escolheu: Lagarto`);
                document.write("<br>");
                document.write("Você Ganhou!");
                document.write("<center><button><a href='index.html'>Jogar Novamente!</a></button></center>")
            }else if(ataquePC == 5){ //Spock
                document.write(`${nome} Escolheu: ${ataqueUsuario}`);
                document.write("<br>");
                document.write("<img id='pedra' src='https://www.bigmae.com/wp-content/uploads/2010/07/pedra.png' width='100px' height='200px'></img>");
                document.write(`O Computador Escolheu: Spock`);
                document.write("<br>");
                document.write("Você Perdeu!");
                document.write("<center><button><a href='index.html'>Jogar Novamente!</a></button></center>")
            }
            break;

        //Papel
        case 'papel':
            
            if( ataquePC == 1){ //Pedra
                document.write("<link rel='stylesheet' href='css/jogo.css'>");
                document.write("<h1> JO-KEN-PO </h1>");
                document.write("<div id='conteiner'>");
                    document.write(`<p class='esquerdo'> ${nome} Escolheu: ${ataqueUsuario} <p>`);
                    document.write("<p> Computador Escolheu: Pedra <p>");
                document.write("</div>");

                document.write("<table id='imagem'>");
                document.write("<tr>");
                    document.write("<td> <img id='imagemUsuario' src='https://www.bigmae.com/wp-content/uploads/2010/07/papel.png'></img>");
                    document.write("<td> <img id='imagemPC' src='https://www.bigmae.com/wp-content/uploads/2010/07/pedra.png'></img>");
                document.write("</tr>");
                document.write("</table>");
                document.write("<br>");

                document.write(`<h2> ${nome} Ganhou! </h2>`);
                document.write("<center><button><a href='index.html'>Jogar Novamente!</a></button></center>");
            }else if(ataquePC == 2){ //Papel
                document.write("<link rel='stylesheet' href='css/jogo.css'>");
                document.write("<h1> JO-KEN-PO </h1>");
                document.write("<div id='conteiner'>");
                    document.write(`<p class='esquerdo'> ${nome} Escolheu: ${ataqueUsuario} <p>`);
                    document.write("<p> Computador Escolheu: Papel <p>");
                document.write("</div>");

                document.write("<table id='imagem'>");
                document.write("<tr>");
                    document.write("<td> <img id='imagemUsuario' src='https://www.bigmae.com/wp-content/uploads/2010/07/papel.png'></img>");
                    document.write("<td> <img id='imagemPC' src='https://www.bigmae.com/wp-content/uploads/2010/07/papel.png'></img>");
                document.write("</tr>");
                document.write("</table>");
                document.write("<br>");

                document.write(`<h2> Empatou! </h2>`);
                document.write("<center><button><a href='index.html'>Jogar Novamente!</a></button></center>");
            }else if(ataquePC == 3){ //Tesoura
                document.write("<link rel='stylesheet' href='css/jogo.css'>");
                document.write("<h1> JO-KEN-PO </h1>");
                document.write("<div id='conteiner'>");
                    document.write(`<p class='esquerdo'> ${nome} Escolheu: ${ataqueUsuario} <p>`);
                    document.write("<p> Computador Escolheu: Tesoura <p>");
                document.write("</div>");

                document.write("<table id='imagem'>");
                document.write("<tr>");
                    document.write("<td> <img id='imagemUsuario' src='https://www.bigmae.com/wp-content/uploads/2010/07/papel.png'></img>");
                    document.write("<td> <img id='imagemPC' src='https://www.bigmae.com/wp-content/uploads/2010/07/tesoura.png'></img>");
                document.write("</tr>");
                document.write("</table>");
                document.write("<br>");

                document.write(`<h2> ${nome} Perdeu! </h2>`);
                document.write("<center><button><a href='index.html'>Jogar Novamente!</a></button></center>");
            }    
            break;
        
        //Tesoura
        case 'tesoura':

            if( ataquePC == 1){ //Pedra
                document.write("<link rel='stylesheet' href='css/jogo.css'>");
                document.write("<h1> JO-KEN-PO </h1>");
                document.write("<div id='conteiner'>");
                    document.write(`<p class='esquerdo'> ${nome} Escolheu: ${ataqueUsuario} <p>`);
                    document.write("<p> Computador Escolheu: Pedra <p>");
                document.write("</div>");

                document.write("<table id='imagem'>");
                document.write("<tr>");
                    document.write("<td> <img id='imagemUsuario' src='https://www.bigmae.com/wp-content/uploads/2010/07/tesoura.png'></img>");
                    document.write("<td> <img id='imagemPC' src='https://www.bigmae.com/wp-content/uploads/2010/07/pedra.png'></img>");
                document.write("</tr>");
                document.write("</table>");
                document.write("<br>");

                document.write(`<h2> ${nome} Perdeu! </h2>`);
                document.write("<center><button><a href='index.html'>Jogar Novamente!</a></button></center>");
            }else if(ataquePC == 2){ //Papel
                document.write("<link rel='stylesheet' href='css/jogo.css'>");
                document.write("<h1> JO-KEN-PO </h1>");
                document.write("<div id='conteiner'>");
                    document.write(`<p class='esquerdo'> ${nome} Escolheu: ${ataqueUsuario} <p>`);
                    document.write("<p> Computador Escolheu: Papel <p>");
                document.write("</div>");

                document.write("<table id='imagem'>");
                document.write("<tr>");
                    document.write("<td> <img id='imagemUsuario' src='https://www.bigmae.com/wp-content/uploads/2010/07/tesoura.png'></img>");
                    document.write("<td> <img id='imagemPC' src='https://www.bigmae.com/wp-content/uploads/2010/07/papel.png'></img>");
                document.write("</tr>");
                document.write("</table>");
                document.write("<br>");

                document.write(`<h2> ${nome} Ganhou! </h2>`);
                document.write("<center><button><a href='index.html'>Jogar Novamente!</a></button></center>");
            }else if(ataquePC == 3){ //Tesoura
                document.write("<link rel='stylesheet' href='css/jogo.css'>");
                document.write("<h1> JO-KEN-PO </h1>");
                document.write("<div id='conteiner'>");
                    document.write(`<p class='esquerdo'> ${nome} Escolheu: ${ataqueUsuario} <p>`);
                    document.write("<p> Computador Escolheu: Tesoura <p>");
                document.write("</div>");

                document.write("<table id='imagem'>");
                document.write("<tr>");
                    document.write("<td> <img id='imagemUsuario' src='https://www.bigmae.com/wp-content/uploads/2010/07/tesoura.png'></img>");
                    document.write("<td> <img id='imagemPC' src='https://www.bigmae.com/wp-content/uploads/2010/07/tesoura.png'></img>");
                document.write("</tr>");
                document.write("</table>");
                document.write("<br>");

                document.write(`<h2> Empatou! </h2>`);
                document.write("<center><button><a href='index.html'>Jogar Novamente!</a></button></center>");
            }
            break;
        default:
            alert("Opção Invalida!!");
    }
}
