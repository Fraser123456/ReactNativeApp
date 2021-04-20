import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "./../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().min(1).max(10000).required().label("Price"),
  category: Yup.object().nullable().required().label("Category"),
  description: Yup.string().optional(),
});

const items = [
  {
    value: 0,
    lable: "Camera",
  },
  {
    value: 1,
    lable: "Clothing",
  },
  {
    value: 2,
    lable: "Equipment",
  },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitlize="words"
          autoCorrect={false}
          maxLength={255}
          name="title"
          placeholder="Title"
          textContentType="none"
        />
        <AppFormField
          autoCorrect={false}
          keyboardType="numeric"
          placeholder="Price"
          maxLength={8}
          name="price"
          textContentType="none"
        />
        <AppFormPicker placeholder="Category" name="category" items={items} />
        <AppFormField
          autoCorrect={true}
          maxLength={255}
          multiline
          numberOfLines={3}
          placeholder="Description"
          name="description"
          textContentType="none"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
