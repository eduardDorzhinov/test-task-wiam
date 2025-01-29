import cl from "./ComponentWithFloatLabel.module.scss";
import { CSSProperties, FC, ReactNode, useState } from "react";
import clsx from "classnames";

interface IProps {
  label: string;
  value: string | null | number;
  placeholder: string;
  labelPosition?: "top" | "center";
  children?: ReactNode;
  style?: CSSProperties;
  id?: string;
  isRequired?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const ComponentWithFloatLabel: FC<IProps> = ({
  label,
  value,
  children,
  placeholder,
  labelPosition = "center",
  id,
  isRequired,
  onBlur,
  onFocus,
}) => {
  const [focus, setFocus] = useState(false);

  const isOccupied = focus || (value && String(value).length !== 0);

  const handleOnBlur = () => {
    onBlur?.();
    setFocus(false);
  };

  const handleOnFocus = () => {
    onFocus?.();
    setFocus(true);
  };

  return (
    <div
      className={cl.wrap}
      onBlur={handleOnBlur}
      onFocus={handleOnFocus}
    >
      {children}
      <label
        className={clsx(
          cl.float_label,
          isOccupied && cl.occupied,
          labelPosition === "top" && cl.label_top,
        )}
        htmlFor={id}
      >
        {isOccupied ? label : placeholder}
        {isRequired && <span className={cl.asterisk} />}
      </label>
    </div>
  );
};
