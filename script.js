const calculadora = document.querySelector('.calculadora')
const teclas = document.querySelector('.teclas')
const visor = document.querySelector('.visor')

teclas.addEventListener('click', (evento) => {
if(!evento.target.closest('button')) return

    const tecla = evento.target
    const valorTecla = tecla.textContent
    const { tipoTecla } = tecla.dataset
    const { tipoTeclaAnterior, memoria } = calculadora.dataset
    const valorVisor = visor.textContent

    if(tipoTecla === 'numero'){

    if(valorVisor === '0' || tipoTeclaAnterior === 'operador') {
        if(valorTecla === '00'){
         visor.textContent = '0'    
        } else{
      visor.textContent = valorTecla
        }
    }
    else {
        visor.textContent = valorVisor + valorTecla
    }
}

   if(tipoTecla === 'operador'){
    const operadores = teclas.querySelectorAll('[data-tipo-tecla="operador"]')
    operadores.forEach((operador) => {
    operador.dataset.estado = ''    
    })
    tecla.dataset.estado = 'selecionado'

    calculadora.dataset.primeiroNum = valorVisor
    calculadora.dataset.operador = tecla.dataset.tecla
   }   

   if(tipoTecla === 'igual') {
    const primeiroNum = parseFloat(calculadora.dataset.primeiroNum)
    const operador = calculadora.dataset.operador
    const segundoNum = parseFloat(valorVisor)
 
    let resultado = ''
    if(operador == 'somar'){
    resultado = primeiroNum + segundoNum    
    }
    if(operador == 'subtrair'){
        resultado = primeiroNum - segundoNum    
        }
    if(operador == 'multiplicar'){
    resultado = primeiroNum * segundoNum    
    }
    if(operador == 'dividir'){
    if(segundoNum == '0'){
    resultado = 'ERRO'    
    }else{     
    resultado = primeiroNum / segundoNum  
    }  
    }
    visor.textContent = resultado
   }

   if(tipoTecla === 'limpar'){
   visor.textContent = '0'    
   }

    if(tipoTecla === 'salvar'){
    calculadora.dataset.memoria = valorVisor
    }
   
    if(tipoTecla === 'recuperar'){
    if(memoria === undefined){
        visor.textContent = '0'
    } else{
    visor.textContent = memoria
    }
    }
    calculadora.dataset.tipoTeclaAnterior = tipoTecla
}
)




