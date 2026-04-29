# Mini Data Analyzer

A mini web-based data analyzer that uses Python libraries (numpy, pandas, matplotlib) running in the browser via Pyodide to analyze datasets and display results.

## Features
- Upload CSV datasets
- Compute average statistics using pandas/numpy
- Visualize data with matplotlib bar charts
- All processing done client-side with no backend

## Technologies Used
- **HTML**: Page structure
- **CSS**: Styling
- **JavaScript**: Interface logic and Pyodide integration
- **Pyodide**: Runs Python in the browser
- **Python Libraries**: numpy, pandas, matplotlib for data analysis and plotting

## How to Use
1. Open `index.html` in a modern web browser (Chrome recommended for Pyodide).
2. Upload a CSV file.
3. Click "Analyze Data" to see statistics and chart.

## Live URL
To host on GitHub Pages:
1. Push to GitHub repository.
2. Enable Pages in Settings > Pages, select main branch.
3. Live URL: `https://<username>.github.io/<repo-name>/mini/`

## Example Dataset
Sample CSV provided in `data/sample.csv`.

## Reusability
- Modular: Separate HTML, CSS, JS files.
- Extendable: Modify the Python code in `script.js` for different analyses.