import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Drawer } from "expo-router/drawer";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  console.log(colorScheme);

  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />
    </Drawer>
  );
}
