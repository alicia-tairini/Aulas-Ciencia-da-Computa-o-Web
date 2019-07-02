function validateForm(){
    let nome = document.getElementById('cName').value;
    let senha = document.getElementById('cSenha').value;
    let email = document.getElementById('cMail').value;
    let nasc = document.getElementById('cNasc').value;
    let estado = document.getElementById('cEst').value;
    let msg = document.getElementById('cMsg').value;
    
    if(nome == ''){
        alert("Olá! Você precisa digitar seu nome. :)");
        return false;
    }   

    else if (senha == '' || senha < 8){
        alert("Oi! Digite uma senha com no mínimo 8 digitos.");
        return false;
    } 

    else if(email == ''){
        alert("Hello! Digite seu e-mail!");
        return false;
    }

    else if(nasc == ''){
        alert("Atenção! Insira sua data de nascimento!");
        return false;
    }

    else if(msg == ''){
        alert("Não esqueça de deixar o seu amor!");
        return false;
    }

    else if(estado == ''){
        alert("Não esqueça de deixar sua mensagem!");
        return false;
    }
}

function calculaIdade(){
    var qtd = parseInt (document.getElementById('cNasc').value);
    tot = 2019 - qtd;
    document.getElementById('cIdade').value= tot;
}


