import {
  AutonomousRobotIcon,
  // BajaUJointIcon,
  DesktopPetIcon,
  KeyloggerIcon,
  LineFollowerIcon,
  MakeupGuideIcon,
  PanTiltScannerIcon,
  RushHourIcon,
  SebelaIcon,
  SteveRunIcon,
  TowLabWaterTankIcon,
} from "../../media/projectIcons/index.js";
import {
  NetworkKeyloggerData,
  DesktopPetData,
  SebelaData,
  // BajaData,
  LineFollowerData,
  MakeupAssistData,
  PanTiltScannerData,
  RushHourData,
  SteveRunData,
  TowLabData,
} from "../../projectPages/data/index.js";

export const TAGS = {
  SOFTWARE: "Software",
  IOS: "iOS",
  ROBOTICS: "Robotics",
  MECHANICAL: "Mechanical",
  COURSE_PROJECTS: "Course Projects",
};

export const projects = [
  {
    name: "Network Keylogger",
    date: "2023",
    imgUrl: KeyloggerIcon,
    pageUrl: "keylogger",
    content: NetworkKeyloggerData,
    tags: [TAGS.SOFTWARE, TAGS.COURSE_PROJECTS],
  },
  {
    name: "Desktop Pet",
    date: "2023",
    imgUrl: DesktopPetIcon,
    pageUrl: "desktopPet",
    content: DesktopPetData,
    tags: [TAGS.SOFTWARE, TAGS.COURSE_PROJECTS],
  },
  {
    name: "Sebela",
    date: "2021-2023",
    imgUrl: SebelaIcon,
    pageUrl: "sebelaApp",
    content: SebelaData,
    tags: [TAGS.SOFTWARE, TAGS.IOS],
  },
  {
    name: "Autonomous Robot",
    date: "2022",
    imgUrl: AutonomousRobotIcon,
    pageUrl: "https://supah32.github.io/pie-2022-03/",
    tags: [TAGS.ROBOTICS, TAGS.COURSE_PROJECTS],
  },
  // {
  //   name: "Baja Drivetrain",
  //   date: "2021-2023",
  //   imgUrl: BajaUJointIcon,
  //   pageUrl: "bajaDrivetrain",
  //   content: BajaData,
  //   tags: [TAGS.MECHANICAL],
  // },
  {
    name: "Line Following Robot",
    date: "2022",
    imgUrl: LineFollowerIcon,
    pageUrl: "lineFollowerRobot",
    content: LineFollowerData,
    tags: [TAGS.ROBOTICS, TAGS.COURSE_PROJECTS],
  },
  {
    name: "Makeup Guide",
    date: "2022",
    imgUrl: MakeupGuideIcon,
    pageUrl: "makeupGuideApp",
    content: MakeupAssistData,
    tags: [TAGS.SOFTWARE, TAGS.IOS],
  },
  {
    name: "3D Pan-Tilt Scanner",
    date: "2022",
    imgUrl: PanTiltScannerIcon,
    pageUrl: "panTiltScanner",
    content: PanTiltScannerData,
    tags: [TAGS.ROBOTICS, TAGS.COURSE_PROJECTS],
  },
  {
    name: "Rush Hour Analysis",
    date: "2022",
    imgUrl: RushHourIcon,
    pageUrl: "rushHourGame",
    content: RushHourData,
    tags: [TAGS.SOFTWARE, TAGS.COURSE_PROJECTS],
  },
  {
    name: "Steve Run",
    date: "2022",
    imgUrl: SteveRunIcon,
    pageUrl: "steveRunGame",
    content: SteveRunData,
    tags: [TAGS.SOFTWARE, TAGS.COURSE_PROJECTS],
  },
  {
    name: "Reverse Osmosis",
    date: "2022",
    imgUrl: TowLabWaterTankIcon,
    pageUrl: "towLab",
    content: TowLabData,
    tags: [TAGS.MECHANICAL],
  },
];