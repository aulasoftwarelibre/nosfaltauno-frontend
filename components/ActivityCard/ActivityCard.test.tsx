import React from "react";
import faker from "faker";
import { render, screen } from "@testing-library/react";
import { ActivityCard } from "./ActivityCard";
import "@testing-library/jest-dom/extend-expect";

describe("ActivityCard component", () => {
  const defaultProps = {
    title: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    category: faker.lorem.sentence(),
    userName: faker.lorem.sentence(),
    userAvatar: faker.lorem.sentence(),
    date: faker.lorem.sentence(),
  };

  it("shows title", () => {
    const props = {
      ...defaultProps,
    };

    const { getByText } = render(<ActivityCard {...props} />);

    getByText(props.title);
  });

  it("shows description", () => {
    const props = {
      ...defaultProps,
    };

    const { getByText } = render(<ActivityCard {...props} />);

    getByText(props.description);
  });

  it("shows category", () => {
    const props = {
      ...defaultProps,
    };

    const { getByText } = render(<ActivityCard {...props} />);

    getByText(props.category);
  });

  it("shows userName", () => {
    const props = {
      ...defaultProps,
    };

    const { getByText } = render(<ActivityCard {...props} />);

    getByText(props.userName);
  });

  it("shows userAvatar", () => {
    const props = {
      ...defaultProps,
    };

    const { getByText } = render(<ActivityCard {...props} />);

    expect(screen.getByRole("img")).toHaveAttribute("src", props.userAvatar);
  });

  it("shows date", () => {
    const props = {
      ...defaultProps,
    };

    const { getByText } = render(<ActivityCard {...props} />);

    getByText(props.date);
  });

  it("shows button", () => {
    const props = {
      ...defaultProps,
    };

    const { getByText } = render(<ActivityCard {...props} />);

    screen.getByRole("button");
  });
});
