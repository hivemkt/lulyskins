window.CONFIG = null;

window.loadConfig = async function () {
    const res = await fetch('/.netlify/functions/config');
    window.CONFIG = await res.json();
};
