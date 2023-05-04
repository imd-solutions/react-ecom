import { iSocialNetwork } from "../types/SocialNetwork";
import SocialMediaIcon from "./SocialMediaIcon";

export default function SocialMedia() {
  const socialnetworks: iSocialNetwork[] = [
    {
      id: 1,
      name: "Facebook",
      link: "https://www.facebook.com/",
      icon: "facebook",
    },
    {
      id: 2,
      name: "Twitter",
      link: "https://twitter.com/",
      icon: "twitter",
    },
    {
      id: 3,
      name: "Instagram",
      link: "https://www.instagram.com/",
      icon: "instagram",
    },
  ];

  return (
    <div className="d-flex align-items-center mt-3">
      <p className="me-8 mb-0 text-secondary fw-bold text-uppercase me-1">
        SHARE IT
      </p>
      {socialnetworks.map((social, i) => (
        // <a className="me-1" href="#" style={{ width: "25px", height: "25px" }}>
        //   <img className="img-fluid" src={social.name} alt={social.name} />
        // </a>
        <SocialMediaIcon icon={social.icon} key={i} />
        // <h1>{social.icon}</h1>
      ))}
    </div>
  );
}
