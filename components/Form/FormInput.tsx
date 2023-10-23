import { Input } from "@nextui-org/react";

export default function FormInput(props: any) {
  const { label, isDisabled, placeholder, value, onChange, errors } = props;

  return (
    <Input
      type="input"
      label={label}
      placeholder={placeholder}
      isDisabled={isDisabled}
      value={value || ""}
      onChange={onChange}
      color={errors ? "danger" : "primary"}
      // isInvalid={errors}
      errorMessage={errors && errors?.message && "This field is required"}
    />
  );
}
