import React from "react";
import "../styles.css";
export interface AppProps extends Partial<HTMLButtonElement> {
    message: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
export declare const App: ({ message, onClick }: AppProps) => JSX.Element;
//# sourceMappingURL=App.d.ts.map