import streamlit as st
import pandas as pd
import numpy as np

st.title("🌳 Forest Tracker")
# 1. Input Data
data = {
    'Year': [2020, 2021, 2022, 2023, 2024],
    'Deforestation (Ha)': [500, 450, 600, 400, 350],
    'Afforestation (Ha)': [100, 150, 200, 300, 450]
}
df = pd.DataFrame(data)

# 2. Key Metrics
col1, col2 = st.columns(2)
col1.metric("Total Forest Loss", f"{df['Deforestation (Ha)'].sum()} Ha", delta="-50 Ha")
col2.metric("Total Forest Gain", f"{df['Afforestation (Ha)'].sum()} Ha", delta="+150 Ha")

# 3. Interactive Visualization
st.subheader("Forest Cover Change Over Time")
st.line_chart(df.set_index('Year'))

# 4. User Interaction
if st.button('Show Net Growth Years'):
    growth = df[df['Afforestation (Ha)'] > df['Deforestation (Ha)']]
    st.write(growth if not growth.empty else "No net growth recorded.")

