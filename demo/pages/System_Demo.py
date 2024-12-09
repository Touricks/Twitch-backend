import streamlit as st
def system_demo():
    st.title("System Demo")

    # Demo Video
    st.subheader("Watch the Demo")
    st.video("path_to_demo_video.mp4")

    # Feature Screenshots
    st.subheader("Key Features in Action")

    # User Interface
    st.markdown("### User Interface")
    st.image("path_to_ui_screenshot.png", caption="Main User Interface")

    # Recommendation System
    st.markdown("### Recommendation System")
    st.image("path_to_recommendations_screenshot.png", caption="Game Recommendations")

    # Language Filtering
    st.markdown("### Language Filtering")
    st.image("path_to_language_screenshot.png", caption="Language Selection Interface")