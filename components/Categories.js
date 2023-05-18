import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category card */}
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="Testing1"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="Testing2"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="Testing3"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="Testing4"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="Testing5"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="Testing6"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="Testing7"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="Testing8"
      />
    </ScrollView>
  );
};

export default Categories;
