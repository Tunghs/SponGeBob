import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        textColor?: string;
        bgColor?: string;

        borderColor?: string;
        accentColor?: string;
        accentHoverColor?: string;
    }
}