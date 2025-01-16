import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@/assets/data/products";
import { useState } from "react";
import Button from "@/src/components/Button";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const [selectedSize, setSelectedSize] = useState("M");

  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    console.warn("Adding to cart", selectedSize);
  };

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />

      <Image
        source={{ uri: product?.image || "" }}
        style={styles.image}
      />

      <Text>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            style={[styles.size, { backgroundColor: selectedSize === size ? "black" : "white" }]}
            key={size}
          >
            <Text
              key={size}
              style={[styles.sizeText, { color: selectedSize === size ? "white" : "black" }]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>${product.price}</Text>
      <Button
        onPress={() => {
          addToCart;
        }}
        text="Add to Cart"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "auto",
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  size: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 20,
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ProductDetailsScreen;
