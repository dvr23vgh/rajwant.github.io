window.addEventListener('load', function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const scene = document.querySelector('a-scene');
            const chart = document.getElementById('chart');
            data.forEach((item, idx) => {
                const value = item.value;
                const bar = document.createElement('a-box');
                bar.setAttribute('width', '0.8');
                bar.setAttribute('depth', '0.8');
                bar.setAttribute('height', value);
                bar.setAttribute('position', `${idx}, ${value / 2}, 0`);
                bar.setAttribute('color', '#4CAF50');
                chart.appendChild(bar);
            });
        });
});