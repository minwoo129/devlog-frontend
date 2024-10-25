import { YearConfDetailPageProps } from "./types";

export default function YearConfDetailPage(args: YearConfDetailPageProps) {
  const {
    params: { conferenceId },
  } = args;
  return (
    <div className="card">
      <h1>{conferenceId}</h1>
    </div>
  );
}
