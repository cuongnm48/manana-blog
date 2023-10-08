"use client";
import HomeBackground from "@/components/Background/Home/Home";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function DocumentsPage() {
  const list = [
    {
      title: "Bài tập",
      img: "/images/tai-lieu-on-tap.jpg",
      link: "/documents/exercises",
    },
    {
      title: "Đề thi tham khảo",
      img: "/images/de-thi-tham-khao.jpg",
      link: "/documents/exams",
    },
    {
      title: "Sách tham khảo",
      img: "/images/sach-tham-khao.jpg",
      link: "/documents/books",
    },
  ];

  const router = useRouter();

  return (
    <>
      <HomeBackground />
      <div className="items-center 2xl:max-w-7xl max-w-6xl md:px-12 mx-auto px-8 pt-12">
        <div className="w-full text-center text-[40px] font-merri">Tài liệu</div>
        <div className="gap-10 grid grid-cols-1 sm:grid-cols-3">
          {list.map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
              onClick={() => router.push(item.link)}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[340px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-medium justify-between">
                <b>{item.title}</b>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
