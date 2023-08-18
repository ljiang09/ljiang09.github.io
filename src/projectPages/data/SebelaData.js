export const SebelaData = {
  pageHeader: "Sebela",
  date: "Sept 2021 - Nov 2022",
  skills: [
    "Swift/SwiftUI",
    "AR",
    "UX design",
    "Unity 2D",
    "C#",
    "Firebase",
    "Mixpanel",
  ],
  projectOverview:
    "An iOS app to share makeup looks and try them on using AR face-tracking technology.",
  additionalLink: "https://sebela.co",
  notableFeatures: [
    "Video and image uploading system",
    "User authentication (Apple, Google, Firebase)",
    "Content creation/consumer style interactions",
    "AR face tracking technology - allows previews for how makeup will look on their face",
  ],
  goals: [
    "Create a C program that, upon being started, immediately backgrounds itself to prevent being easily noticed, identified, and easily killed.",
    "The program logs the user's keystroke information, and sends batches of information periodically over a TCP socket to be stored in a server",
  ],
  contributions: [
    "Technical cofounder",
    "Full stack iOS developer",
    "Helped design and implement front end app",
    "Manage Firebase organization, integration, and analytics",
  ],
  deliverables: [
    {
      sectionHeader: "Iteration 1",
      sectionContent: [
        "Released January 2022",
        "I used UV mapping processes to make a 2D image (drawn with digital software like Procreate) wrap onto the user's 3D face geometry. This gave a semi-realistic filter that moved with the user's facial movements.",
        "I coded the full functionality of this app, from the interface to the user experience to the communication with backend servers.",
        "This iteration also eventually included a rudimentary authentication feature (using Firebase), which pushed Sebela towards a more profile-based, social-media style app.",
      ],
    },
    {
      sectionHeader: "Iteration 2",
      sectionContent: [
        "Completed July 2022 (unreleased)",
        "We pivoted to focusing on bettering the AR accuracy. Unity had stronger technology than Apple did, so I tried making the UI using Unity 2D for easier integration with Unity's technology.",
        "Additionally, we made the app more social media based. Now the importance was in user authentication and personal branding rather than trying on makeup with AR tech.",
      ],
    },
    {
      sectionHeader: "Iteration 3",
      sectionContent: [
        "Currently in development",
        "We pivoted back to native Swift, with Unity integration. UI building in Unity was unnecessarily difficult, especially with displaying videos for the tutorials.",
        "Users can 'like' posts they see.",
        "User profiles are a lot more fleshed out now as they're able to see their posts, likes, followers, and followings.",
      ],
    },
  ],
  type: "iOS",
};
