import { ReactElement } from "react";

export interface iSocialNetwork {
  id: number;
  name: string;
  link: string;
  icon: string;
}

export interface iSocialNetworkIcons {
  [facebook: string]: () => ReactElement;
  twitter: () => ReactElement;
  instagram: () => ReactElement;
}
