import { Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
import Skills from "../components/SkillsSection";
import ViewMoreProjects from "../components/ViewMoreProjects";

const NetworkKeylogger = () => {
  const classes = useStyles();

  const skills = ["C", "libevdev", "Device I/O", "Socket/Network programming"];

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Network Keylogger</Typography>
      <Typography className={classes.date}>April - May 2023</Typography>

      <div className={classes.content}>
        <Typography className={classes.header2}>Skills Used</Typography>
        <Skills skills={skills} />
        <Typography className={classes.header2}>Project Overview</Typography>
        <Typography className={classes.text}>
          A keystroke logger for Linux devices. Created in C.
        </Typography>
        <a
          href="https://github.com/olincollege/network-keylogger"
          target="_blank"
          rel="noreferrer"
          className={classes.repoButton}
        >
          <Button>View the GitHub Repo</Button>
        </a>
        <Typography className={classes.header2}>Goal</Typography>
        <Typography className={classes.text}>
          Create a C program that, upon being started, immediately backgrounds
          itself to prevent being easily noticed, identified, and easily killed.
        </Typography>
        <Typography className={classes.text}>
          The program logs the user's keystroke information, and sends batches
          of information periodically over a TCP socket to be stored in a server
        </Typography>
        <Typography className={classes.header2}>Contributions</Typography>
        <Typography className={classes.text}>
          In charge of keystroke logging
        </Typography>
        <Typography className={classes.text}>
          Gathered and parsed keystroke event data from the device using the
          libevdev library
        </Typography>
        <Typography className={classes.text}>
          Created custom data structures to store keystroke information
        </Typography>
        <Typography className={classes.text}>
          Interfaced keystroke capabilities with client-side functionality
        </Typography>

        <Typography className={classes.header2}>Project Deliverable</Typography>
        <Typography className={classes.header3}>Keylogging</Typography>
        <Typography className={classes.text}>
          The libevdev library, with sudo permissions, provides the ability to
          gather event info from all input sources on the device (USB ports,
          built-in keyboard, laptop lid, etc).
        </Typography>
        <Typography className={classes.text}>
          How the keylogging works:
        </Typography>
        <Typography className={classes.text}>
          Open the keyboard input event file (on my specific device, the
          location is /dev/input/event3)
        </Typography>
        <Typography className={classes.text}>
          In an infinite while loop, continuously check the status of the
          keyboard event with the `libevdev_next_event` function - Every time a
          key is pressed (or pressed and held), the key(s) are stored in an
          array
        </Typography>
        <Typography className={classes.text}>
          Every few seconds, the array of keys is packaged into a custom data
          struct that also stores the time of packaging and the device's
          user-assigned name
        </Typography>
        <Typography className={classes.text}>
          After the key info is packaged, it is serialized and transported
          through the socket.
        </Typography>

        <Typography className={classes.header3}>
          Points of Improvement
        </Typography>
        <Typography className={classes.text}>
          Gathering input data from external keyboards. Connected to USB ports,
          and Bluetooth
        </Typography>
        <Typography className={classes.text}>
          Enabling the program to work on multiple device types (with different
          input event numberings)
        </Typography>

        <ViewMoreProjects type="Software" />
      </div>
    </div>
  );
};

export default NetworkKeylogger;
