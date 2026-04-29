# Traffic Comparison Analyzer

A web-based tool to compare traffic data across countries using Python libraries (numpy, pandas, matplotlib) running in the browser via Pyodide.

## Features
- Upload CSV datasets with traffic metrics
- Compute average statistics for traffic indicators
- Visualize comparisons with bar charts (e.g., vehicles vs. accidents by country)
- All processing done client-side with no backend

## Technologies Used
- **HTML**: Page structure
- **CSS**: Styling
- **JavaScript**: Interface logic and Pyodide integration
- **Pyodide**: Runs Python in the browser
- **Python Libraries**: numpy, pandas, matplotlib for data analysis and plotting

## How to Use
1. Open `index.html` in a modern web browser (Chrome recommended for Pyodide).
2. Upload a CSV file with columns like Country, Vehicles, Accidents, etc.
3. Click "Analyze Data" to see averages and comparison chart.

## Live URL
To host on GitHub Pages:
1. Push to GitHub repository.
2. Enable Pages in Settings > Pages, select main branch.
3. Live URL: `https://<username>.github.io/<repo-name>/mini/`

## Example Dataset
Sample CSV provided in `data/sample.csv` with traffic data for 5 countries.

## Reusability
- Modular: Separate HTML, CSS, JS files.
- Extendable: Modify the Python code in `script.js` for different analyses or plots.