import { render, RenderResult, screen } from "@testing-library/react";
import Devlog from "@/app/devlog/page";
import "@testing-library/jest-dom";
import { DevLogNavDatas } from "@/commonDatas/routes";

describe("Devlog", () => {
  let renderElement: RenderResult;
  beforeEach(() => {
    renderElement = render(<Devlog />);
  });
  it("화면 렌더링 테스트", () => {
    const { container } = renderElement;
    expect(container).toMatchSnapshot();
  });

  it("메인 카테고리들이 모두 노출되는지 여부", () => {
    // 화면에 노출되는 카테고리들의 테스트 ID
    const visibleCategoryIds = DevLogNavDatas.filter(
      (cat) => cat.mainCategory
    ).map((cat) => cat.testID);

    // 노출 여부 테스트 실행
    for (const testId of visibleCategoryIds) {
      const element = screen.getByTestId(testId);
      expect(element).toBeInTheDocument();
    }
  });
});
