import { render } from "@testing-library/react";
import Home from "@/app/page";
import { describe } from "node:test";

describe("Home", () => {
  it("렌더링 테스트(테스트)", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
