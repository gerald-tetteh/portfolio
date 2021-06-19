import flutterIcon from "../images/flutter.svg";
import nodeIcon from "../images/node.svg";
import pythonIcon from "../images/python.svg";
import qrIcon from "../images/qr.png";
import wasteIcon from "../images/waste.png";
import stereobeatsIcon from "../images/stereobeats.png";
import exclusiveIcon from "../images/exclusive.png";
import chefIcon from "../images/chef.png";
import weatherStationIcon from "../images/station.jpg";
import boatIcon from "../images/boat_image.png";
import alarmIcon from "../images/fire_alarm.jpg";
import tunrtableIcon from "../images/turntable_icon.jpg";
import vodafoneIcon from "../images/vodafone.svg";
import nyahoIcon from "../images/nyaho.png";
import charlotteIcon from "../images/charlotte.svg";
import todoIcon from "../images/todo.png";
import maniacIcon from "../images/InfoManiac.png";
import ashesiIcon from "../images/ashesi.jpeg";
import presecIcon from "../images/presec.jpg";

export const skills = [
  {
    alt: "Flutter Icon",
    icon: flutterIcon,
    heading: "Mobile Applications with Flutter",
    content:
      "I have 4 applications on the Google Playstore. All the applications were developed using flutter.",
  },
  {
    alt: "Node js Icon",
    icon: nodeIcon,
    heading: "Web Applications with Node js",
    content:
      "I use Node js, Express and React to develop responsive and aesthetically pleasing web applications such as this portfolio.",
  },
  {
    alt: "Python Icon",
    icon: pythonIcon,
    heading: "Python Development",
    content:
      "I develop web applications using Flask. I have some experience with machiene learning and webscrapping with python.",
  },
];
export const projectsPersonal = [
  {
    alt: "QR Code Scanner Icon",
    link: "https://play.google.com/store/apps/details?id=com.addodevelop.qr_scanner",
    icon: qrIcon,
    heading: "QR Code Scanner",
    content:
      "This application was built using Flutter. It is available on mobile phones running Android and IOS. The application allows users...",
  },
  {
    alt: "Info Maniac Icon",
    link: "https://info-maniac.herokuapp.com",
    icon: maniacIcon,
    heading: "Info Maniac",
    content:
      "Info maniac uses web scraping (python) to find job listing on different sites and host the in one location. User would be able...",
  },
  {
    alt: "Todo App with Reat",
    link: "https://gerald-tetteh.github.io/todo-app-react",
    icon: todoIcon,
    heading: "Todo App with React",
    content:
      "The todo app was built using react a sass. Users can create, delete and cross of todos. Different themes are also available.",
  },
  {
    alt: "Personal Chef Icon",
    link: "https://github.com/gerald-tetteh/Personal-Chef",
    icon: chefIcon,
    heading: "Personal Chef",
    content:
      "This application allows users to search for the recipes for their favourite foods. The application uses the Spoonacular API.",
  },
  {
    alt: "Plastics to Fuel App Icon",
    link: "https://play.google.com/store/apps/details?id=com.addodevelop.waste_management_app",
    icon: wasteIcon,
    heading: "Waste Management App",
    content:
      "Developed an application for QKB Green Energy that allows their users to request waste pickup. Users would be able to select the...",
  },
  {
    alt: "Stereobeats Icon",
    link: "https://play.google.com/store/apps/details?id=com.herokuapp.addodevelop.stereo_beats_main",
    icon: stereobeatsIcon,
    heading: "Stereobeats Music Player",
    content:
      "Stereobeats provides users with a beautiful user interface to look through and listen to their music. The application allows...",
  },
  {
    alt: "Exlusive News App Icon",
    link: "https://play.google.com/store/apps/details?id=com.addodevelop.exclusive",
    icon: exclusiveIcon,
    heading: "Exclusive News App",
    content:
      "Developed a news app using flutter for mobile phone. The application retrieves data from a server in JSON format.",
  },
];
export const schoolProjects = [
  {
    alt: "Weather Station",
    link: "#weather-station-detail",
    icon: weatherStationIcon,
    heading: "Weather Station",
    content:
      "Developed a portable weather station using environmentally friendly materials.",
    contentDetail:
      "Developed a portable weather station using environmentally friendly materials. The electrical components were developed using an Arduino Uno, a temperature sensor, an infrared sensor and an LCD. The LCD was used to display the temperature and wind speed. I built the electronic components and wrote the Arduino needed to operate the weather station.",
  },
  {
    alt: "Speed Boat",
    link: "#speed-boat-detail",
    icon: boatIcon,
    heading: "Speed Boat",
    content: "Build a speed boat that could support 2kg of extra weight.",
    contentDetail:
      "Build a speed boat that could support 2kg of extra weight. The project applied principles of physics which we had studied that semester. We also practised soldering and using some machines at the school workshop.",
  },
  {
    alt: "Fire Alarm System",
    link: "#fire-alarm-detail",
    icon: alarmIcon,
    heading: "Fire Alarm System",
    content:
      "Developed a miniature fire alarm system which was entirely electronic. Current and voltage calculations were applied.",
    contentDetail:
      "Developed a miniature fire alarm system which was entirely electronic. Current and voltage calculations were applied. The system used coloured LED's to represent the temperature variations in the room. A thermistor was used to determine the temperature in the room and in the process, the amount of current that should flow through it. Operational amplifers were used to turn on the LED's when the voltage at non-inverting input is higher than the voltage at the inverting input of the operational amplifier. When the temperature in the room is high enough, a buzzer will go off to signify danger. ",
  },
];
export const workExperience = [
  {
    alt: "Turntable",
    heading: "Software Engineering Intern",
    icon: tunrtableIcon,
    content:
      "Out of alomost a 100 applicants I was one of the few selected to work as a software engineering intern at Turntabl. At turntabl I learned and applied concents such as Agile developmnet, programming with python and Internet of things.",
  },
  {
    alt: "QKB Green Energy Company",
    heading: "Mobile Application Developer",
    icon: wasteIcon,
    content:
      "Developed a waste management application for QKB Green Energy Company. The application allows users to request for their plastic waste to be picked up from their homes. The application is available on the Google PlayStore.",
  },
  {
    alt: "Vodafone",
    heading: "Control Room Supervisor",
    icon: vodafoneIcon,
    content:
      "Managed operations in the control room at the Vodafone Exchange. Assisted field engineers in connecting customers to telephone lines and the internet in the control room. Helped to update the records of customers in Teshie Nungua Estates.",
  },
  {
    alt: "Nyaho Medical Centre",
    heading: "Support Systems Intern",
    icon: nyahoIcon,
    content:
      "Assisting with the repair and maintenance of equipment at Nyaho Medical Centre (Job Shadowing).",
  },
  {
    alt: "Charllote's Memorial School",
    heading: "School Website Developer",
    icon: charlotteIcon,
    content:
      "Developed both front-end and back-end components of a website for a private school; Charlotte’s Memorial School. The website allows the school management to display announcements and the school calender.",
  },
];
export const education = [
  {
    alt: "Ashesi",
    icon: ashesiIcon,
    heading: "Ashesi University",
  },
  {
    alt: "Presbyterian Boys Secondary School Legon",
    icon: presecIcon,
    heading: "PRESEC LEGON",
  },
];
