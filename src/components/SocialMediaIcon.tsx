import { iSocialNetworkIcons } from "../types/SocialNetwork";
import Facebook from "../components/SVG/Facebook";
import Twitter from "../components/SVG/Twitter";
import Instagram from "../components/SVG/Instagram";

const components: iSocialNetworkIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
};

export default function SocialMediaIcon(props: { icon: string }) {
  const SpecificStory = components[props.icon];
  return <SpecificStory />;
}
