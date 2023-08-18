export const PanTiltScannerData = {
  pageHeader: "Pan-Tilt 3D Scanner",
  date: "Oct 2022",
  skills: ["Arduino", "MATLAB"],
  projectOverview:
    "An IR scanner is mounted to two DC motors to gather a 3D scan of an object.",
  repoLink: "https://github.com/ljiang09/3D-Scanner",
  goals: [
    "Construct and program a 3D scanner with a pan/tilt mechanism",
    "Scan an object of known, well-defined geometry with an IR distance sensor",
    "Visualize the output from your scanner",
  ],
  contributions: [
    "Programmed servo movement using Arduino",
    "Wired Arduino to servos and IR sensor",
    "Assisted in parsing and visualizing scanned data",
  ],
  deliverables: [
    {
      sectionHeader: "",
      sectionContent: [
        "The final design involved two servos, one for the scanner's horizontal 'pan' movement and one for vertical 'tilt' movement. The combination of these two servos, mounted in orthogonal directions and controlled by an Arduino Uno, allowed the IR sensor to sweep a 2D space.",
        "The Arduino was also used to recieve IR sensor data, which was passed to a Python script via serial connection. Since we controlled the servo rotations, we could also approximate the sensor's angle, which was passed along to serial with each data point. Calibration data we took allowed us to determine distances based on sensor data. From there we filtered out far away objects to get measurements only for points representing relevant geometry.",
        "With the servo angles and measured distances, each filtered datapoint could be converted into Cartesian coordinates. These were visualized on a 3D graph using Python's matplotlib library.",
      ],
      sectionImage: "", // TODO: url here
    },
  ],
  type: "Robotics",
};

// TODO: add images within here
