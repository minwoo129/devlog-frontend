import RemoveFromQueueIcon from "@mui/icons-material/RemoveFromQueue";

export default function EmptyBody() {
  return (
    <div className=" flex w-full h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center flex-shrink">
        <RemoveFromQueueIcon className="w-20 h-20" />
        <p className="text-2xl">등록된 포스트가 없습니다.</p>
      </div>
    </div>
  );
}
