export const MakeupAssistData = {
  pageHeader: "Makeup Assist App",
  date: "May 2022 - Dec 2022",
  skills: ["Swift/SwiftUI", "AR", "Assistive Tech", "OpenCV", "Python"],
  projectOverview:
    "iOS app focused on assisting makeup users with blindness/visual impairments. Compares before and after images of the user's face to check where makeup is applied (where the color discrepancies lie).",
  contributions: [
    "Solo project with mentorship from Paul Ruvolo",
    "Recipient of the Clare Booth Luce award",
    "Met with 12 co-designers for 2 months to test and improve assistive UX",
    "Designed and developed mobile app based on user feedback",
  ],
  deliverables: [
    {
      sectionHeader: "Main Concepts",
      sectionContent: [
        "Transform matrices (for recognizing face position/orientation)",
        "Converting coordinate systems (world to phone camera)",
        "UV image unwrapping",
        "Image processing",
        "Blind/low-vision user experience",
      ],
    },
    {
      sectionHeader: "Current State",
      sectionContent: [
        "Guides user to center face in the phone screen (based on calculated face transform data)",
        "Captures two sets of 4 UV images to represent before/after makeup application",
        "Not very accurate images - image-capturing algorithm needs to be bolstered to reduce the need for post-processing",
        "Lighting discrepancies - working on calibrating the lighting across the two sets of images",
      ],
    },
  ],
  type: "iOS",
};
