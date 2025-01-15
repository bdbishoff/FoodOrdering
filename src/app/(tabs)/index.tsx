import { ScrollView } from "react-native";
import products from "../../../assets/data/products";
import { ProductListItem } from "../../components/ProductListItem";

export default function MenuScreen() {
  return (
    <ScrollView>
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          product={product}
        />
      ))}
    </ScrollView>
  );
}
