chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "simplificarTexto",
      title: "Simplificar texto selecionado",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "simplificarTexto") {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: simplificarSelecionado
      });
    }
  });
  
  function simplificarSelecionado() {
    const texto = window.getSelection().toString();
    if (!texto) return;
  
    // Aqui você pode criar sua lógica de "tradução simplificada"
    const simplificado = texto
      .replace(/\butilizar\b/g, "usar")
      .replace(/\bprover\b/g, "fornecer")
      .replace(/\bevidenciar\b/g, "mostrar");
  
    alert("Versão simplificada:\n\n" + simplificado);
  }
  