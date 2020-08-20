import React from "react";
import { ActivityCard } from "./ActivityCard";

export default {
  title: "ActivityCard",
  component: ActivityCard,
};

export const Basic = () => (
  <ActivityCard
    title="Hola"
    description="Esto es una descripcion"
    category="Categoria"
    userName="Angel"
    userAvatar="https://images.freeimages.com/images/large-previews/023/geek-avatar-1632962.jpg"
    date="18/4/2020"
  ></ActivityCard>
);
