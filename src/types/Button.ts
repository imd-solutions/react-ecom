import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface iButton {
    title: string,
    variant: string,
    css?: string,
    style?: any,
    icon?: IconProp,
    additional?: any,
    action?: any,
}