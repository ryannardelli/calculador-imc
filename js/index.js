function Escopo () {
    const button = document.querySelector('.btn');
    const resultado = document.querySelector('.res');
    const inputPeso = document.querySelector('#peso');
    const inputAltura = document.querySelector('#altura');
    
    button.addEventListener ('click', function () {

        const peso = Number(inputPeso.value);   
        const altura = Number(inputAltura.value);
        
        if (isNaN(peso) === true && isNaN(altura) === true || peso === 0 && altura === 0) {
            mostraResultado ('Peso e altura inválidos', false);
        } else if (isNaN(peso) === true || peso === 0) {
            mostraResultado ('Peso inválido', false);
        } else if (isNaN(altura) === true || altura === 0) {
            mostraResultado ('Altura inválida', false);
        } else if (isNaN(peso) === false && isNaN(altura) === false) {
            mostraResultado (calculaImc(), true);
        }

        limpaInput();
    })
    
    function criaP () {
        const p = document.createElement ('p');
        return p;
    }

    function mostraResultado (msg, corValor) {
        const p = criaP();
        p.innerHTML = msg;
        resultado.innerHTML = '';
        resultado.appendChild(p);
        
        if (corValor === false) {
            resultado.setAttribute('class', 'incorreto');
        } else if (corValor === true) {
            resultado.setAttribute ('class', 'correto');
        }
        
    }

    function calculaImc () {
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        let imc = peso / (altura ** 2);
        imc = imc.toFixed(2);

        const nivelImc = ['(Abaixo do Peso)', '(Peso normal)', '(Sobrepeso)', '(Obesidade grau 1)', '(Obesidade grau 2)', '(Obesidade grau 3)'];
        
        if (imc >= 39.9) return `Seu imc é ${imc} ${nivelImc[5]}`; // obesidade grau 3
        if (imc >= 34.9) return `Seu imc é ${imc} ${nivelImc[4]}`; // obesidade grau 2
        if (imc >= 29.9) return `Seu imc é ${imc} ${nivelImc[3]}`; // obesidade grau 1
        if (imc >= 24.9) return `Seu imc é ${imc} ${nivelImc[2]}`; // sobrepeso
        if (imc >= 18.5) return `Seu imc é ${imc} ${nivelImc[1]}`; // peso normal
        if (imc < 18.5) return `Seu imc é ${imc} ${nivelImc[0]}`;  // abaixo do peso
    }

    function limpaInput () {
        inputPeso.value = '';
        inputAltura.value = '';
        inputPeso.focus();
    }
}

Escopo();
