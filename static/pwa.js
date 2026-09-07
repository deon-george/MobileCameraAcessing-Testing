let installPrompt;
const installButtons = document.querySelectorAll('[data-install-app]');
window.addEventListener('beforeinstallprompt', (event) => { event.preventDefault(); installPrompt = event; installButtons.forEach((button) => button.classList.remove('is-hidden')); });
installButtons.forEach((button) => button.addEventListener('click', async () => { if (!installPrompt) return; installPrompt.prompt(); await installPrompt.userChoice; installPrompt = undefined; installButtons.forEach((item) => item.classList.add('is-hidden')); }));
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('/service-worker.js'));
