function criaCalculadora() { //Calculadora usando Factory Function
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.cliqueBotoes();
      this.pressionaBackSpace();
      this.pressionaEnter();
    },

    pressionaBackSpace() {
      this.display.addEventListener('keydown', function(evento) {
        if (evento.keyCode === 8) {
          evento.preventDefault();
          this.clearDisplay();
        }
      }.bind(this));
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', function(evento) {
        if (evento.keyCode === 13) {
          this.realizaConta();
        }
      }.bind(this));
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if(!conta) {
          alert('Operação inválida');
          return;
        }

        this.display.value = String(conta);
      } catch(e) {
        alert('Operação inválida');
        return;
      }
    },

    clearDisplay() {
      this.display.value = '';
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1); 
    },

    cliqueBotoes() {
      document.addEventListener('click', function(evento) { 
        const elemento = evento.target;

        if(elemento.classList.contains('btn-num')) {
          this.btnParaDisplay(elemento.innerText);
        }

        if(elemento.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(elemento.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if(elemento.classList.contains('btn-eq')) {
          this.realizaConta();
        }

        this.display.focus();
      }.bind(this)); 
    },

    btnParaDisplay(valor) {
      this.display.value += valor; 
    }

  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
