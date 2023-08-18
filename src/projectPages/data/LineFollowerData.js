export const LineFollowerData = {
  pageHeader: "Line Follower Robot",
  date: "Nov 2022",
  skills: ["Arduino", "Python (NumPy and Matplotlib)"],
  projectOverview:
    "A 3-wheeled vehicle capable of recognizing and following a path of black tape.",
  repoLink: "https://github.com/ljiang09/DC-Motor-Control",
  additionalLink:
    "https://docs.google.com/document/d/1pJhgMPwu0XLtFwo2t5CXvwPsCiKE0fZTYBySQONxzTM/edit",
  goals: [
    "Integrate sensing and control with a two-wheeled, mechanical robotic platform",
    "Write a closed-loop controller so the robot can follow an electrical tape track on the floor",
  ],
  contributions: [
    "Assembled final chassis",
    "Calibrated sensor for the mounting distance from the ground",
    "Created circuit with DC motors, IR sensors, an Arduino Uno, a Motor Shield",
    "Programmed DC motors to change speeds/directions based on parsed sensor data",
    "Tested and adjusted wheel speeds to prevent overshooting turns",
    "Wrote programs to store and plot sensor values and wheel velocities",
  ],
  deliverables: [
    {
      sectionHeader: "",
      sectionContent: [
        "The chassis was easily assembled from a kit. From there, I created a circuit to connect the Arduino, IR sensors, and DC motors together. The motors were connected to a motor shield, which connected to the Arduino. The IR sensors were wired to the Arduino's analog pins for reading, then mounted ~1.5 cm apart to be slightly larger than the width of the electrical tape.",
        "The IR sensors' ideal measuring distance changed based on the supplied resistor value. With the sensors already mounted onto the bottom of the car and the working circuit assembled, some trial and error revealed the right value to be 5000 Ohms. This resistance yielded a noticable difference between sensing the electrical tape vs. the linoleum tile.",
        "Both sensors sensing the floor implied the robot was on the track, since the line was supposed to be between the two sensors. Here, the robot would need to go straight to continue along the line. But if the left sensor saw electrical tape, the robot would need to turn left to realign with the track and vice versa for the right sensor. Overall, the robot only required 3 controls: go straight, turn right, and turn left.",
        "While the robot ran a loop through the track, I programmed the Arduino to gather sensor values and wheel velocities every loop, and store them into a local text file. I used Python (numpy and matplotlib) to read this local file and plot the 4 values",
      ],
      sectionImage: "", // TODO: url here
    },
  ],
  type: "Robotics",
};

// TODO: "watch the robot run a full track" https://drive.google.com/file/d/1Bcd0IA7TQeP3gKgUf4BZ-E7A18ipy4Yv/view
