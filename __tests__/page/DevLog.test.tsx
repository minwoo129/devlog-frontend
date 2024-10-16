import { render } from "@testing-library/react";
import Devlog from "@/app/devlog/page";

describe("Devlog", () => {
  it("렌더링 테스트(테스트)", () => {
    const { container } = render(<Devlog />);
    expect(container).toMatchSnapshot();
  });
});
