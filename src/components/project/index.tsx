import Card, { CardProps } from "./ProjectCard";
import {
  FirebaseAuthenticationLogo,
  FirebaseRealtimeDatabaseLogo,
  FirebaseStorageLogo,
  ReactLogo,
  ReduxLogo,
  TypeScriptLogo,
  VercelLogo,
} from "../../common/icons";

export default function Project() {
  const messengerProps: CardProps = {
    name: "Messenger",
    tools: [
      { name: "React", logo: ReactLogo },
      { name: "Redux", logo: ReduxLogo },
      { name: "Firebase AuthN", logo: FirebaseAuthenticationLogo },
      {
        name: "Firebase Realtime Database",
        logo: FirebaseRealtimeDatabaseLogo,
      },
      { name: "Vercel Hosting", logo: VercelLogo },
      { name: "TypeScript", logo: TypeScriptLogo },
    ],
    link: "https://messenger.rohitrai.dev",
    description:
      "Web application for text base communication with other users.",
    features: [
      "User authentication.",
      "Contacts.",
      "Connection request.",
      "Chat.",
    ],
  };

  const photoshareProps: CardProps = {
    name: "PhotoShare",
    tools: [
      { name: "React", logo: ReactLogo },
      { name: "Redux", logo: ReduxLogo },
      { name: "Firebase AuthN", logo: FirebaseAuthenticationLogo },
      {
        name: "Firebase Realtime Database",
        logo: FirebaseRealtimeDatabaseLogo,
      },
      { name: "Firebase Storage", logo: FirebaseStorageLogo },
      { name: "Vercel Hosting", logo: VercelLogo },
      { name: "TypeScript", logo: TypeScriptLogo },
    ],
    link: "https://photoshare.rohitrai.dev",
    description: "Web application for sharing images with other users.",
    features: [
      "User authentication.",
      "Upload post (Photo + Caption).",
      "Contacts.",
      "Connection request.",
      "Home feed (Posts of contacts).",
      "Comment on post.",
      "View contacts profile.",
    ],
  };

  return (
    <div className="project">
      <Card {...messengerProps} />
      <Card {...photoshareProps} />
    </div>
  );
}
