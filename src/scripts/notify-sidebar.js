function notifySidebar(page) {
  const sidebarIframe = parent; // O iframe c.html é a janela "pai" aqui
  if (sidebarIframe) {
    sidebarIframe.postMessage(page, "*");
  }
}
