      function algoritmo1() {
        var preco = parseFloat(document.getElementById("preco").value);
        var pagamento = parseFloat(document.getElementById("pagamento").value);
        var resultado = "";
        if (pagamento === preco) {
          resultado = "Valor totalmente pago. Sem troco.";
        } else if (pagamento > preco) {
          var troco = pagamento - preco;
          resultado = "Valor totalmente pago. Troco: " + troco.toFixed(2);
        } else {
          var falta = preco - pagamento;
          resultado = "Valor não pago totalmente. Falta: " + falta.toFixed(2);
        }
        document.getElementById("resultado1").innerHTML = resultado;
      }
      function algoritmo2() {
        var distancia = parseFloat(document.getElementById("distancia").value);
        var litros = parseFloat(document.getElementById("litros").value);
        var autonomia = distancia / litros;
        document.getElementById("resultado2").innerHTML =
          "Autonomia do veículo: " + autonomia.toFixed(2) + " km/l";
      }
      function algoritmo3() {
        var numero = parseInt(document.getElementById("numero1").value);
        var quantidadePares = 0;
        for (var i = 0; i <= numero; i++) {
          if (i % 2 === 0) {
            quantidadePares++;
          }
        }
        document.getElementById("resultado3").innerHTML =
          "Quantidade de números pares: " + quantidadePares;
      }
      function algoritmo4() {
        var numero1 = parseInt(document.getElementById("numero2").value);
        var quantidadePrimos = 0;
        for (var i = 2; i <= numero1; i++) {
          if (isPrimo(i)) {
            quantidadePrimos++;
          }
        }
        document.getElementById("resultado4").innerHTML =
          "Quantidade de números primos: " + quantidadePrimos;
      }
      function isPrimo(numero2) {
        for (var i = 2; i < numero2; i++) {
          if (numero2 % i === 0) {
            return false;
          }
        }
        return numero2 > 1;
      }