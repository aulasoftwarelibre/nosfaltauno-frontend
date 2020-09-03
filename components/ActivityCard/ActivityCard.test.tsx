import { render, screen } from "@testing-library/react";
import React from "react";
import { Default, ActivityWithProfileImage } from "./ActivityCard.stories";

describe("ActivityCard", () => {
  it("should be rendered correctly when no image is given", () => {
    render(<Default {...Default.args} />);
    expect(screen.getByTestId("activity-card"));
    expect(screen.getByTestId("organizer-letter"));
  });

  it("should be rendered correctly when profile image is given", () => {
    render(<ActivityWithProfileImage {...ActivityWithProfileImage.args} />);
    expect(screen.getByTestId("activity-card"));
    expect(screen.getByTestId("organizer-image"));
  });
});
