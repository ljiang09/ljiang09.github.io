export const NetworkKeyloggerData = {
  pageHeader: "Network Keylogger",
  date: "April - May 2023",
  skills: ["C", "libevdev", "Device I/O", "Socket/Network programming"],
  projectOverview: "A keystroke logger for Linux devices. Created in C.",
  repoLink: "https://github.com/olincollege/network-keylogger",
  goals: [
    "Create a C program that, upon being started, immediately backgrounds itself to prevent being easily noticed, identified, and easily killed.",
    "The program logs the user's keystroke information, and sends batches of information periodically over a TCP socket to be stored in a server",
  ],
  contributions: [
    "In charge of keystroke logging",
    "Gathered and parsed keystroke event data from the device using the libevdev library",
    "Created custom data structures to store keystroke information",
    "Interfaced keystroke capabilities with client-side functionality",
  ],
  deliverables: [
    {
      sectionHeader: "Keylogging",
      sectionContent: [
        "The libevdev library, with sudo permissions, provides the ability to gather event info from all input sources on the device (USB ports, built-in keyboard, laptop lid, etc).",
        "How the keylogging works:",
        "- Open the keyboard input event file (on my specific device, the location is /dev/input/event3)",
        "- In an infinite while loop, continuously check the status of the keyboard event with the `libevdev_next_event` function - Every time a key is pressed (or pressed and held), the key(s) are stored in an array",
        "- Every few seconds, the array of keys is packaged into a custom data struct that also stores the time of packaging and the device's user-assigned name",
        "- After the key info is packaged, it is serialized and transported through the socket.",
      ],
    },
    {
      sectionHeader: "Points of Improvement",
      sectionContent: [
        "Gathering input data from external keyboards. Connected to USB ports, and Bluetooth",
        "Enabling the program to work on multiple device types (with different input event numberings)",
      ],
    },
  ],
  type: "Software",
};
