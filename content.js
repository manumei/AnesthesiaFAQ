document.addEventListener('DOMContentLoaded', () => {
    const content = {};

    const fetchTextFile = (fileName, key) => {
        return fetch(fileName)
            .then(response => response.text())
            .then(text => {
                content[key] = text;
            })
            .catch(error => console.error(`Failed to fetch ${fileName}:`, error));
    };

    const fetchAllContent = async () => {
        const promises = [];
        for (let i = 1; i <= 10; i++) {
            const fileName = `answer${i}.txt`;
            promises.push(fetchTextFile(fileName, `answer${i}`));
        }
        await Promise.all(promises);
        updateContent();
    };

    const updateContent = () => {
        for (let i = 1; i <= 10; i++) {
            document.getElementById(`answer${i}`).innerHTML = `<div class="card-body">${content[`answer${i}`]}</div>`;
        }
    };

    fetchAllContent();
});
