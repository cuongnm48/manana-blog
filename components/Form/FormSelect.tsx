import { Select, SelectItem } from "@nextui-org/react";

export default function FormSelect(props: any) {
  const { label, options, isDisabled, placeholder, errors, value, onChange } = props;

  return (
    <Select
      key="primary"
      label={label}
      placeholder={placeholder}
      className="w-full"
      selectedKeys={value || []}
      onChange={onChange}
      isDisabled={isDisabled}
      color={errors ? "danger" : "primary"}
      // isInvalid={errors}
      errorMessage={errors && errors?.message && "This field is required"}
    >
      {options.map((animal: any) => (
        <SelectItem key={animal.value} value={animal.value}>
          {animal.label}
        </SelectItem>
      ))}
    </Select>
  );
}
