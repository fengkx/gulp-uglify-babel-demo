;(async function() {
    const $main = document.getElementById('main');
    const resp = await fetch('https://v1.jinrishici.com/all.json');
    const data = await resp.json();
    $main.textContent = data.content;
})()