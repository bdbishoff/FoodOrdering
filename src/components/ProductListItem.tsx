import Colors from "@/src/constants/Colors";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "@/src/types";
import { Link } from "expo-router";

type ProductListItemProps = {
  product: Product;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link
      href={`/menu/${product.id}`}
      asChild
    >
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || "" }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    maxWidth: "50%",
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    marginVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: { width: "100%", aspectRatio: 1 },
});
