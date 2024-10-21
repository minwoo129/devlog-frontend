import { classMerge, classMergeBySC } from "@/commonFunctions/tailwinds";

describe("tailwind 폴더 내 함수", () => {
  it("class Merge가 정상적으로 이루어지는가?", () => {
    const classNameOrigin =
      "flex flex-col w-full sm:flex-col md:flex-col lg:flex-col xl:items-center";
    const classNameNew = classMerge([
      "flex flex-col w-full ",
      "sm:flex-col",
      "md:flex-col",
      "lg:flex-col",
      "xl:items-center",
    ]);

    expect(classNameNew).toBe(classNameOrigin);
  });
  it("BreakPoint 한개 적용시 머지가 정상적으로 이루어지는가?", () => {
    const classNameOrigin = classMerge([
      "flex flex-col w-fit h-full ",
      "mobile:mt-10",
    ]);
    const classNameSC = classMergeBySC([
      { type: "default", className: "flex flex-col w-fit h-full " },
      { type: "bc", bc: ["mobile"], className: "mt-10" },
    ]);
    expect(classNameSC).toBe(classNameOrigin);
  });
  it("BreakPoint 여러개 적용시 머지가 정상적으로 이루어지는가?", () => {
    const classNameOrigin = classMerge([
      "flex flex-col w-fit h-full ",
      "mobile:mt-10",
      "tablet:mt-10",
      "laptop:mt-10",
    ]);
    const classNameSC = classMergeBySC([
      { type: "default", className: "flex flex-col w-fit h-full " },
      { type: "bc", bc: ["mobile", "tablet", "laptop"], className: "mt-10" },
    ]);
    expect(classNameSC).toBe(classNameOrigin);
  });
});
