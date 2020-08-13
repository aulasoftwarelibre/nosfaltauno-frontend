import React, { useState } from 'react';
import { List, Clickable } from 'bumbag';

type Category = {
  id: string,
  title: string,
  subcategories?: Array<Category>,
}

type Props = {
  categories: Array<Category>;
}

export const CategoryMenu: React.FunctionComponent<Props> = ({ categories }) => {
  const [currentCategory, setCurrentCategory] = useState<Category>(null);
  return (<List orientation="horizontal">
    {
      categories.map((category) =>
        <Clickable key={category.id} onClick={() => setCurrentCategory(category)}>
          <List.Item>{
            category.title}</List.Item>
        </Clickable>)
    }
    {
      currentCategory && currentCategory.subcategories.map((subcategory) =>
        <List.Item key={subcategory.id}>{subcategory.title}</List.Item>)
    }
  </List>);
};