import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

export default function FormSelectMultiple() {
  const data = [
    { label: "Nghe", value: "Nghe", description: "The second most popular pet in the world" },
    { label: "Noi", value: "Noi", description: "The most popular pet in the world" },
    { label: "Viet", value: "Viet", description: "The most popular pet in the world" },
  ];
  const [values, setValues] = React.useState(new Set<any>([]));

  const handleSelectionChange = (e: any) => {
    const values = e.target.value ? e.target.value.split(",") : [];
    setValues(new Set(values));
  };

  return (
    <Select
      label="Tag"
      selectionMode="multiple"
      placeholder="Select an animal"
      selectedKeys={values}
      className="max-w-xs"
      onChange={handleSelectionChange}
    >
      {data.map((animal) => (
        <SelectItem key={animal.value} value={animal.value}>
          {animal.label}
        </SelectItem>
      ))}
    </Select>
  );
}
