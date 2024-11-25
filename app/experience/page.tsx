import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Experience() {
  return (
    <div className="max-w-3xl pl-36 mr-auto">
      <Card>
        <CardHeader>
          <CardTitle>SISTECH CO. , LTD. – JUNIOR DATA ANALYST</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 mb-4">
            SEOUL | March 2023 – August 2024
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Utilized Python for data manipulation and analysis, training
              models using YOLOv8 to detect road anomalies from images,
              resulting in improved accuracy for autonomous inspection systems
            </li>
            <li>
              Led a team of three data labelers, distributing tasks, monitoring
              performance, and ensuring accurate data annotations. Enhanced team
              productivity by implementing effective task management and
              performance feedback
            </li>
            <li>
              Organized and labeled extensive datasets comprising images and
              video footage, conducted thorough analysis, and prepared detailed
              reports on team performance and project progress. Delivered
              regular reports highlighting key insights and milestones to senior
              researchers
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
