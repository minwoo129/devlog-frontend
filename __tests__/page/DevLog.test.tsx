import { render, RenderResult, screen } from "@testing-library/react";
import Devlog from "@/app/devlog/page";
import "@testing-library/jest-dom";

describe("Devlog", () => {
  let renderElement: RenderResult;
  beforeEach(() => {
    renderElement = render(<Devlog />);
  });
  it("렌더링 테스트(테스트)", () => {
    const { container } = renderElement;
    expect(container).toMatchSnapshot();
  });

  it("메인 카테고리들이 모두 노출되는지 여부", () => {
    const element = screen.getByTestId("react-native");
    expect(element).toBeInTheDocument();
  });
});
