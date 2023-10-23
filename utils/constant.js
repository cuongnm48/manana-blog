import AnalystChartIcon from "@/components/IconNextUI/AnalystChartIcon";
import CorrectAnswer from "@/components/IconNextUI/CorrectAnswer";
import DragDropAnswerIcon from "@/components/IconNextUI/DragDropAnswerIcon";
import FillToBlankIcon from "@/components/IconNextUI/FillToBlankIcon";
import WriteAnswer from "@/components/IconNextUI/WriteAnswer";

export const SCORE_OPTIONS = [
  { label: "Khong", value: "0" },
  { label: "1 diem", value: "1" },
  { label: "2 diem", value: "2" },
  { label: "3 diem", value: "3" },
];

export const TYPE_QUESTION_OPTIONS = [
  { label: "chọn đáp án đúng", value: 0, icon: <DragDropAnswerIcon className="w-6 h-6 " /> },
  {
    label: "kéo thả đáp án vào ô phù hợp",
    value: 1,
    icon: <CorrectAnswer className="w-6 h-6 text-success" />,
  },
  {
    label: "điền vào chỗ trống",
    value: 2,
    icon: <FillToBlankIcon className="w-6 h-6 text-success" />,
  },
  {
    label: "phân tích biểu đồ",
    value: 3,
    icon: <AnalystChartIcon className="w-6 h-6 text-success" />,
  },
  { label: "viết nghị luận", value: 4, icon: <WriteAnswer className="w-6 h-6 text-success" /> },
];

export const TAG_OPTIONS = [
  { label: "Nghe", value: "Nghe" },
  { label: "Noi", value: "Noi" },
  { label: "Viet", value: "Viet" },
];
