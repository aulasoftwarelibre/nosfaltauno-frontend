import React from "react";
import { CategoryMenu } from "./CategoryMenu";

export default {
  title: "CategoryMenu",
  component: CategoryMenu,
};

export const Basic = () => (
  <CategoryMenu
    categories={[
      { id: "1", title: "Hello" },
      { id: "2", title: "Hello2" },
    ]}
  ></CategoryMenu>
);
