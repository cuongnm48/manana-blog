import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

export default function FormSelect() {
  const data = [
    { label: "Khong", value: 0, description: "The second most popular pet in the world" },
    { label: "1 diem", value: 1, description: "The second most popular pet in the world" },
    { label: "2 diem", value: 2, description: "The most popular pet in the world" },
    { label: "3 diem", value: 3, description: "The most popular pet in the world" },
  ];
  const [value, setValue] = React.useState(new Set<any>([]));

  const handleSelectionChange = (e: any) => {
    setValue(new Set([e.target.value]));
  };

  return (
    <Select
      key="primary"
      color="primary"
      label="Diem"
      placeholder="Select an animal"
      defaultSelectedKeys={["cat"]}
      className="w-full"
      selectedKeys={value}
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
