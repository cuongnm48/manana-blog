import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

export default function FormSelectMultiple(props: any) {
  const { label, options, isDisabled, placeholder, value, onChange, errors } = props;
  return (
    <Select
      label={label}
      selectionMode="multiple"
      placeholder={placeholder}
      className="w-full"
      selectedKeys={value || []}
      onChange={onChange}
      isDisabled={isDisabled}
      color={errors ? "danger" : "primary"}
      // isInvalid={errors}
      errorMessage={errors && errors?.message && "This field is required"}
    >
      {options.map((item: any) => (
        <SelectItem key={item.value} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
}
