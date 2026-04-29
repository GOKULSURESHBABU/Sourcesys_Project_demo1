# Data Analyzer

A simple web-based data analyzer that allows users to upload a CSV file, compute basic statistics (averages), and visualize the data with bar charts.

## Features
- Upload CSV datasets
- Calculate average scores for numerical columns
- Display bar chart visualizations

## Technologies Used
- **HTML**: Structure of the web page
- **CSS**: Styling and layout
- **JavaScript**: Client-side logic
- **Danfo.js**: Data manipulation (similar to pandas)
- **Plotly.js**: Data visualization (similar to matplotlib)

## How to Use
1. Open `index.html` in a web browser.
2. Click "Choose File" to select a CSV file.
3. Click "Load Data" to analyze and visualize the data.

## Live URL
To host this project live on GitHub Pages:
1. Push this code to a GitHub repository.
2. Go to repository Settings > Pages.
3. Set source to "Deploy from a branch" and select "main" branch.
4. The live URL will be: `https://<username>.github.io/<repo-name>/analyzer/`

## Example Dataset
A sample CSV file is provided in the `data/` folder for testing.

## Reusability
- Modular structure: HTML, CSS, and JS are separated.
- Easy to extend: Add more analysis functions in `script.js`.
- No backend required: Runs entirely in the browser.