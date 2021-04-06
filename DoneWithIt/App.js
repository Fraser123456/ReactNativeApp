import React, { useState } from "react";
import { Switch, TextInput } from "react-native";

import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";

const categories = [
  {
    lable: "Furniture",
    value: 1,
  },
  {
    lable: "Clothing",
    value: 2,
  },
  {
    lable: "Cameras",
    value: 3,
  },
];

export default function App() {
  const [category, setCategory] = useState();

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}
