import CourseItem from "./CourseListItem";

const CourseList = () => {
  const courses = [
    {
      title: "Cơ hội thật sự của chuyên gia trong thời đại sáo rỗng!",
      duration: "01:08:53",
      isHot: true,
      time: "06:04"
    },
    {
      title: `Không hề có khóa học "đáng tin cậy" nào trong lãnh vực của đồng nghiệp`,
      duration: "07:14",
      isHot: true,
      time: "07:14"
    },
    {
      title: "Hãy stick với mô hình Elearning và 4 bước chúng ta sẽ triển khai để nhận về tối đa lợi ích",
      duration: "08:31",
      time: "08:31"
    },
    {
      title: "Case Study siêu đỉnh của Đồng Nghiệp Tuấn Lê 3 tỷ sau 3 tháng",
      duration: "09:36",
      time: "09:36"
    },
    {
      title: "Case Study siêu đỉnh của Đồng Nghiệp Tuấn Lê 3 tỷ sau 3 tháng",
      duration: "09:36",
      time: "09:36"
    },
    {
      title: "Case Study siêu đỉnh của Đồng Nghiệp Tuấn Lê 3 tỷ sau 3 tháng",
      duration: "09:36",
      time: "09:36"
    }
  ];

  return (
    <div className="lg:max-w-[600px] lg:min-w-[600px] bg-[#69398F] p-[20px] rounded-[25.6px] mx-[20px]">
      <div className="mb-[24px]">
        <h2 className="text-4xl font-bold text-white mb-[12px] line-clamp-2 leading-relaxed">
          TIỀM NĂNG CỰC KÌ LỚN CỦA MÔ HÌNH DẠY BẰNG BỘ VIDEO
        </h2>
        <p className="inline-block text-[#d1d5db] text-[20px] px-[12px] py-[8px] bg-black/20 rounded-lg">
          Số lượng bài: 7 bài | Thời lượng: 01:08:53
        </p>
      </div>
      <div className="space-y-[16px] overflow-y-auto pr-[8px] max-h-[calc(60vh-250px)] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 hover:scrollbar-thumb-white/40">
        {courses.map((course, index) => (
          <CourseItem key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList; 