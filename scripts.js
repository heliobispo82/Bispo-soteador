function generatornumber() {
    const min = parseInt(document.querySelector(".input-min").value);
    const max = parseInt(document.querySelector(".input-max").value);
    const resultInput = document.querySelector(".result-input");

    if (min >= max || isNaN(min) || isNaN(max)) {
        alert("O valor mínimo deve ser menor que o valor máximo e ambos devem ser números válidos.");
    } else {
        const interval = setInterval(() => {
            const result = Math.floor(Math.random() * (max - min + 1)) + min;
            resultInput.value = result;
        },1);

          // Após um certo tempo (aqui 2 segundos), para a animação e exibe o resultado final
          setTimeout(() => {
            clearInterval(interval); // Para a animação
            const finalResult = Math.floor(Math.random() * (max - min + 1)) + min;
            resultInput.value = finalResult;// Exibe o número sorteado

              // Exibe a mensagem "Parabéns!" após mostrar o número final
              const mensagem = document.createElement('div');
              mensagem.textContent = "Parabéns!";
              mensagem.classList.add('mensagem');
              document.body.appendChild(mensagem); 
              mensagem.style.display = 'block'; // Mostra a mensagem após o sorteio do número
        }, 2000); // Tempo total da animação em milissegundos (2000ms neste exemplo)
       
    }
}