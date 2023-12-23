export const RPSClassifierData = {
  pageHeader: "Rock Paper Scissors Classifier",
  date: "Sept - Dec 2023",
  skills: ["MATLAB", "Machine Learning"],
  projectOverview:
    "A live classifier to identify Rock, Paper, and Scissors gestures from a surface EMG. Created with MATLAB.",
  repoLink: "https://github.com/ljiang09/rock-paper-scissors",
  additionalLink:
    "https://docs.google.com/presentation/d/1s8NM0sGhckFjZvRK1PYF2iRKooVuI9KJjFYYMfMk3OE/edit?usp=sharing",
  goals: [
    "Perform ethical, rigorous, and responsible data collection using EMG sensors",
    "Learn about and implement common preprocessing techniques (filtering, onset detection) for EMG data",
    "Learn about and implement feature extraction techniques (time-based, frequency-based, and time-frequency-based) for EMG data",
    "Create an offline classifier to analyze EMG data for rock, paper, scissors gestures, and evaluate its performance using various metrics",
    "Conduct and document multiple investigations to improve outcomes on key metrics",
    "Implement live classification and compete in a class-wide tournament",
  ],
  contributions: [
    "Collected 900 data points",
    "Analyzed 6 features",
    "Tested 3 classifiers and 2 algorithms",
    "Calculated and analyzed performance metrics to implement 4 improvement attempts",
  ],
  deliverables: [
    {
      sectionHeader: "Live Classification",
      sectionContent: [
        "After creating a classifier we were satisfied with, we saved it locally. This allowed us to put new EMG data into it and live-classify the gesture.",
        "Notes:",
        "- The model struggled a lot to distinguish between Rock and Scissors, as the gestures are very similar.",
        "- The model performed notably worse in live classification than when training and testing, likely because there was a lot of extra confounding electrical noise in the room.",
        "- In a class-wide live tournament, our model was the best-performing and even beat the professor's model!",
      ],
    },
    {
      sectionHeader: "Points of Improvement",
      sectionContent: [
        "Diversify Data: gather data from multiple people from both arms. This will make the classifier more robust to new data.",
        "Better Data Preprocessing: try notch filtering to reduce electrical signal noise. This will provide more standardized, less noisy data.",
        "General Model Improvements: try new techniques like cross-validation, PCA, SVM, and Neural Network, which might do better with EMG data.",
      ],
    },
  ],
  type: "Software",
};
