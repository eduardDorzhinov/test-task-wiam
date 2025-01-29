import { FC } from "react";
import cl from "./Slider.module.scss";
import clsx from "classnames";
import { Slider as SliderAnt } from "antd";

interface IProps {
  label: string;
  value: number;
  isError: boolean;
  onChange: (val: number) => void;
  onBlur: () => void;
  minValue: number;
  maxValue: number;
  step: number;
}

export const Slider: FC<IProps> = ({
  label,
  value,
  isError,
  onBlur,
  onChange,
  minValue,
  maxValue,
  step
}) => {
  return (
    <div className={cl.slider_wrap}>
      <div className={cl.slider_text}>
        <p className={cl.slider_label}>{label}:</p>
        <p className={cl.slider_value}>{value}</p>
      </div>
      <SliderAnt
        className={clsx(cl.slider, isError && cl.field_error)}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        min={minValue}
        max={maxValue}
        step={step}
        tooltip={{ formatter: null }}
      />
    </div>
  );
};
