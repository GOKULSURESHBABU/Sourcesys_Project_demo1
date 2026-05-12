import streamlit as st
import pandas as pd
import numpy as np

# Set the app title
st.title('🚀 My First Streamlit App')

# Add a welcome message
st.write('Welcome to this simple interactive dashboard!')

# Sidebar for user inputs
st.sidebar.header('User Controls')
user_name = st.sidebar.text_input('What is your name?', 'Guest')
number = st.sidebar.slider('Select a range of data points', 0, 100, 50)

# Main area logic
st.subheader(f'Hello, {user_name}!')
st.write(f'Showing {number} random data points:')

# Generate and display random data
chart_data = pd.DataFrame(
    np.random.randn(number, 3),
    columns=['Category A', 'Category B', 'Category C']
)

# Display a line chart
st.line_chart(chart_data)

# Display the raw data in a table (optional)
if st.checkbox('Show raw data'):
    st.write(chart_data)
