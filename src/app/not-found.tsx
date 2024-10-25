"use client";
import PageLayer from "@/components/common/pageLayer";
import WarningIcon from "@mui/icons-material/Warning";

export default function NotFound() {
  return (
    <PageLayer className="h-screen">
      <div className="w-full h-5/6 flex flex-row justify-center items-center">
        <WarningIcon style={{ width: 50, height: 50, marginRight: 2 }} />
        <h1 className="text-3xl text-zinc-600 font-nanumneo-eb">
          존재하지 않는 페이지입니다.
        </h1>
      </div>
    </PageLayer>
  );
}
