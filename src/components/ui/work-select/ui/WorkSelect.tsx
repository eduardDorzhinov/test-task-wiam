import { FC } from "react";
import { FieldError } from "react-hook-form";
import { Select } from "antd";
import clsx from "classnames";
import cl from "./WorkSelect.module.scss";
import { useFetchCategory } from "../lib/hooks";

interface IProps {
  value: string;
  onChange: (val: string) => void;
  error?: FieldError;
}

export const WorkSelect: FC<IProps> = ({
  value,
  onChange,
  error,
}) => {
  const categories = useFetchCategory();

  return (
    <Select
      className={clsx(cl.select, !!error && cl.error)}
      onChange={onChange}
      value={value}
      loading={!categories?.length}
    >
      {categories?.map((category) => (
        <Select.Option
          key={category}
          value={category}
        >
          {category}
        </Select.Option>
      ))}
    </Select>
  );
};
