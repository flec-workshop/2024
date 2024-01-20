import Home from "./pages/Home";
import OrganizingCommittee from "./pages/OrganizingCommittee";
import SteeringCommittee from "./pages/SteeringCommittee";
import TechnicalProgramCommittee from "./pages/TechnicalProgramCommittee";
import CallForPaper from "./pages/CallForPaper";
import CallForWorkshops from "./pages/CallForWorkshops";
import Venue from "./pages/Venue";
import Workshops from "./pages/Workshops";
import Dates from "./pages/Dates";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CallForPosters from "./pages/CallForPosters";
import CallForArtifacts from "./pages/CallForArtifacts";
import PhDSymposium from "./pages/PhDSymposium";
import KeynoteSpeakers from "./pages/KeynoteSpeakers";
import Registrations from "./pages/Registrations";
import CameraReady from "./pages/CameraReady";
import InvitedSpeakers from "./pages/InvitedSpeakers";
import Schedule from "./pages/Schedule";
import Program from "./pages/Program";
import BestPaperAwards from "./pages/BestPaperAwards";

export default function getRoutes() {
  return [
    {
      title: "Home",
      href: process.env.PUBLIC_URL + "/",
      component: <Home />,
      menu: true,
    },
    {
      title: "Organizing Committee",
      href: process.env.PUBLIC_URL + "/organizing-committee",
      component: <OrganizingCommittee />,
      menu: true,
      parent: "Committees",
    },
    {
      title: "Technical Program Committee",
      href: "/technical-program-committee",
      component: <TechnicalProgramCommittee />,
      menu: true,
      parent: "Committees",
    },
    {
      title: "Dates",
      href: "/important-dates",
      component: <Dates />,
      menu: true,
    },
    {
      title: "Venue",
      href: "/venue",
      component: <Venue />,
      menu: true,
    },
  ];
}
