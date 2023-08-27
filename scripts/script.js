function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e digite novamente!')
    } else {
         var fsex = document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
         var genero = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')
         if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute("src", "./src/assets/img/criancaHomem.png");
            } else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "./src/assets/img/jovemHomem.png");
            } else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "./src/assets/img/adultoHomem.png");
            } else {
                //Idoso
                img.setAttribute("src", "./src/assets/img/idosoHomem.png");
            }
         } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute("src", "./src/assets/img/criancaMulher.png");
            } else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "./src/assets/img/jovemMulher.png");
            } else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "./src/assets/img//adultoMulher.png");
            } else {
                //Idoso
                img.setAttribute("src", "./src/assets/img/idosoMulher.png");
            }
         }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
         res.appendChild(img)
    }
}