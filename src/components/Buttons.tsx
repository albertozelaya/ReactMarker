import type { ButtonVariant } from "../interfaces/buttonInt";
import Button from "./Button";

export interface ButtonsIntl {
  key: string;
  content: React.ReactNode;
  type?: ButtonVariant;
  onClick: () => void;
  className?: string;
}

interface ButtonsParams {
  buttons: ButtonsIntl[];
}

export function Buttons({ buttons }: ButtonsParams) {
  return (
    <div className="flex-end flex w-full grow justify-end text-sm">
      {buttons.map((button) => {
        return (
          <Button
            key={button.key}
            onClick={button.onClick}
            type={button.type}
            className={button.className}
          >
            {button.content}
          </Button>
        );
      })}
    </div>
  );
}
