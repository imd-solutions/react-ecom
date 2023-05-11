import { iSocialNetworkIcons } from "../../types/SocialNetwork";
import Facebook from "../../components/SVG/Facebook";
import Twitter from "../../components/SVG/Twitter";
import Instagram from "../../components/SVG/Instagram";

const components: iSocialNetworkIcons = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  facebook: Facebook,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  twitter: Twitter,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  instagram: Instagram,
};

export default function SocialMediaIcon(props: { icon: string; size: any }) {
  const IconComponent = components[props.icon];
  const IconComponentProps = {
    height: props.size.height,
    width: props.size.width,
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <IconComponent {...IconComponentProps} />;
}
