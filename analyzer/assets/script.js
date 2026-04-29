document.getElementById('loadBtn').addEventListener('click', async () => {
    const fileInput = document.getElementById('fileInput');
    if (!fileInput.files[0]) {
        alert('Please select a CSV file.');
        return;
    }

    const file = fileInput.files[0];
    const df = await dfd.readCSV(file);

    // Compute means
    const mathMean = df['Math'].mean();
    const scienceMean = df['Science'].mean();
    const englishMean = df['English'].mean();

    // Display stats
    const statsDiv = document.getElementById('stats');
    statsDiv.innerHTML = `
        <p>Average Math Score: ${mathMean.toFixed(2)}</p>
        <p>Average Science Score: ${scienceMean.toFixed(2)}</p>
        <p>Average English Score: ${englishMean.toFixed(2)}</p>
    `;

    // Plot bar chart
    const data = [{
        x: ['Math', 'Science', 'English'],
        y: [mathMean, scienceMean, englishMean],
        type: 'bar'
    }];

    Plotly.newPlot('plot', data);
});