document.getElementById("simplificar").addEventListener("click", () => {
    const entrada = document.getElementById("entrada").value;
  
    const simplificado = entrada
      .replace(/\butilizar\b/g, "usar")
      .replace(/\bprover\b/g, "fornecer")
      .replace(/\bevidenciar\b/g, "mostrar");
  
    document.getElementById("resultado").innerText = simplificado;
  });
  