//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

        function adicionarAmigo() {
            let input = document.getElementById("amigo");
            let nome = input.value.trim();

            if (nome === "") {
                alert("Por favor, insira um nome.");
                return;
            }

            amigos.push(nome);
            atualizarLista();

            input.value = ""; // Limpa o campo
        }

        function atualizarLista() {
            let lista = document.getElementById("listaAmigos");
            lista.innerHTML = ""; // Limpa a lista antes de atualizar

                for (let i = 0; i < amigos.length; i++) {
                let li = document.createElement("li");
                li.textContent = amigos[i];
                lista.appendChild(li);
            }

        }