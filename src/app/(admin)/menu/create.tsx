import Button from "@/src/components/Button";
import Colors from "@/src/constants/Colors";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Stack } from "expo-router";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const onCreate = () => {
    console.warn("creating product");
    if (!validateFields()) {
      return;
    }

    // save in database

    resetFields();
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const resetFields = () => {
    setName("");
    setPrice("");
  };

  const validateFields = () => {
    setErrors("");
    if (!name) {
      setErrors("Name is required");
      return false;
    }
    if (!price) {
      setErrors("Price is required");
      return false;
    }

    if (isNaN(Number(price))) {
      setErrors("Price must be a number");
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Create Product" }} />

      <Image
        source={{
          uri: image || "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png",
        }}
        style={styles.image}
      />
      <Text
        style={styles.textButton}
        onPress={pickImage}
      >
        Select an image
      </Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />

      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="0.00"
        style={styles.input}
        keyboardType="numeric"
      />

      <Text style={{ color: "red" }}>{errors}</Text>
      <Button
        text="Create"
        onPress={() => onCreate()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  label: {
    color: "gray",
    fontSize: 16,
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
});

export default CreateProductScreen;