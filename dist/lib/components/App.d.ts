import { FC } from "react";
import "../styles.css";
export interface AppProps extends Partial<HTMLDivElement> {
    message: string;
    token: string;
}
export interface typeSize {
    X: number | undefined;
    Y: number | undefined;
}
export declare const App: FC<AppProps>;
//# sourceMappingURL=App.d.ts.map