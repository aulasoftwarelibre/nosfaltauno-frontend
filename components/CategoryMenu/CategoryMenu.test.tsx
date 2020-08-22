import React from "react";
import faker from "faker";
import { render, fireEvent } from "@testing-library/react";
import { CategoryMenu } from "./CategoryMenu";

describe("CategoryMenu component", () => {
  const defaultProps = {
    categories: [],
    activities: [],
  };

  it("shows the list of categories", () => {
    const props = {
      ...defaultProps,
      categories: generateCategories(3),
    };

    const { getByText } = render(<CategoryMenu {...props} />);

    props.categories.forEach((category) => getByText(category.title));
  });

  it("shows the subcategories of a category when the user clicks over a category", () => {
    const props = {
      ...defaultProps,
      categories: generateCategories(3, 2),
    };

    const { getByText } = render(<CategoryMenu {...props} />);

    const secondCategory = getByText(props.categories[2].title);
    fireEvent.click(secondCategory);

    props.categories[2].subcategories.forEach((category) =>
      getByText(category.title)
    );
  });
});

function aCategory(subcategories: Array<any> = []) {
  return {
    id: faker.random.uuid(),
    title: faker.random.word(),
    subcategories,
  };
}

function generateCategories(
  numberOfCategories: number,
  numberOfSubcategories?: number
) {
  return new Array(numberOfCategories)
    .fill(null)
    .map(() =>
      aCategory(new Array(numberOfSubcategories).fill(null).map(aCategory))
    );
}
