let pyodide;

async function loadPyodideAndPackages() {
    pyodide = await loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/"
    });
    await pyodide.loadPackage("micropip");
    await pyodide.runPythonAsync(`
        import micropip
        await micropip.install(['pandas', 'numpy', 'matplotlib'])
        import pandas as pd
        import numpy as np
        import matplotlib.pyplot as plt
        import io
        import base64
    `);
}

loadPyodideAndPackages();

document.getElementById('analyzeBtn').addEventListener('click', async () => {
    const fileInput = document.getElementById('fileInput');
    if (!fileInput.files[0]) {
        alert('Please select a CSV file.');
        return;
    }

    const file = fileInput.files[0];
    const csvText = await file.text();

    // Run Python analysis
    const pythonCode = `
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import io
import base64

# Load data
from io import StringIO
df = pd.read_csv(StringIO("""${csvText.replace(/"/g, '\\"')}"""))

# Compute stats
stats = df.select_dtypes(include=[np.number]).mean()

# Plot
fig, ax = plt.subplots()
stats.plot(kind='bar', ax=ax)
ax.set_title('Average Scores')
ax.set_ylabel('Score')

# Save to base64
buf = io.BytesIO()
fig.savefig(buf, format='png')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
buf.close()
plt.close(fig)

# Return results
result = {
    'stats': stats.to_dict(),
    'plot': img_base64
}
result
    `;

    const result = await pyodide.runPythonAsync(pythonCode);

    // Display stats
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h3>Statistics:</h3>' + Object.entries(result.stats).map(([k, v]) => `${k}: ${v.toFixed(2)}`).join('<br>');

    // Display plot
    const plotDiv = document.getElementById('plot');
    plotDiv.innerHTML = `<img src="data:image/png;base64,${result.plot}" alt="Plot">`;
});