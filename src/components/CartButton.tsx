import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import BagIcon from "@/icons/BagIcon";
import { useCart } from "../contexts/CartContext";

const CartButton = () => {
  const { totalItemQuantity: amount } = useCart();

  return (
    <View style={styles.icon}>
      <BagIcon />
      {amount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{amount > 9 ? "9+" : amount}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "relative",
    padding: 8,
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#FF9F0D",
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
  },
});

export default CartButton;
