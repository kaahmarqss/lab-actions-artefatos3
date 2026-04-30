<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exemplo Simples JS</title>
</head>
<body>
    <h1>Verificador de Par ou Ímpar</h1>
    <button onclick="verificarNumero()">Verificar</button>

    <script>
        // Função que solicita um número e verifica se é par ou ímpar
        function verificarNumero() {
            let entrada = prompt("Digite um número inteiro:");

            // Validação: verifica se é um número válido
            if (entrada === null || entrada.trim() === "" || isNaN(entrada)) {
                alert("Por favor, digite um número válido.");
                return;
            }

            let numero = parseInt(entrada, 10);

            if (numero % 2 === 0) {
                alert(`O número ${numero} é PAR.`);
            } else {
                alert(`O número ${numero} é ÍMPAR.`);
            }
        }
    </script>
</body>
</html>
