function enviar() {
    if(document.getElementById('firstname').value==''){
        alert ('vc é uma putinha taca esse nome ai')
    }


else if(document.getElementById('email').value==''){
        alert('bota esse email seu puto')
}


else if(document.getElementById('password').value==''){
        alert('e a senha bro?')
}


else if (document.getElementById('confirmarsenha').value==''){
        alert('tu esqueceu de colocar sua própria confirmação?')
}


else if (document.getElementById('confirmarsenha').value != document.getElementById('password').value) {

    alert('senhas diferente primo!')
 
}
else {
    alert ('usuario cadastrado')
}

}