import React, { FC } from "react";
import "../../styles.css";
export interface ButtonProps extends Partial<HTMLButtonElement> {
    message: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
export declare const Button: FC<ButtonProps>;
//# sourceMappingURL=index.d.ts.map