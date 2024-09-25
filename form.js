
        const form = document.getElementById('form-numerico');
        const mensagemValidacao = document.getElementById('mensagem-validacao');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const campoA = parseFloat(document.getElementById('campoA').value);
            const campoB = parseFloat(document.getElementById('campoB').value);

            if (campoB > campoA) {
                mensagemValidacao.textContent = 'Formulário válido: Campo B é maior que Campo A.';
                mensagemValidacao.classList.add('sucesso');
                mensagemValidacao.classList.remove('erro');
            } else {
                mensagemValidacao.textContent = 'Erro: Campo B deve ser maior que Campo A.';
                mensagemValidacao.classList.add('erro');
                mensagemValidacao.classList.remove('sucesso');
                
                
            }
        });
    