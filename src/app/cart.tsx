import { View, Text, Platform, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useCart } from "../providers/CartProvider";
import CartListItem from "../components/CartListItem";
import Button from "../components/Button";

const CartScreen = () => {
  const { items, total } = useCart();

  return (
    <View style={{ flex: 1, padding: 10, paddingBottom: 40 }}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />

      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Total: ${total.toFixed(2)}</Text>
      <Button text="Checkout"></Button>
      <StatusBar
        animated={true}
        style={Platform.OS === "ios" ? "light" : "auto"}
      />
    </View>
  );
};

export default CartScreen;
