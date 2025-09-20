function calcular() {
      let total = parseFloat(document.getElementById("total").value);
      let cuotas = parseInt(document.getElementById("cuotas").value);
      let tasa = parseFloat(document.getElementById("tasa").value);

      if (isNaN(total) || isNaN(cuotas) || isNaN(tasa)) {
        document.getElementById("resultado").innerText = "Por favor, completa todos los campos.";
        return;
      }
      let ct = cuotas * tasa;
      let ctp = ct / 100;
      let ctt = ctp+1;
      let tc = total * ctt;
      let tpc = tc / cuotas;
      let totaltc = Math.round(tc);
      let totaltpc = Math.round(tpc);

      document.getElementById("resultado").innerText = 
        `Precio total: $${totaltc.toFixed(2)}\n` +
        `Valor de cada cuota: $${totaltpc.toFixed(2)}`;
    }