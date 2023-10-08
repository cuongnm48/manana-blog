"use client";
import HomeBackground from "@/components/Background/Home/Home";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function DocumentsPage() {
  const list = [
    {
      title: "Đề ôn tập",
      img: "/images/tai-lieu-on-tap.jpg",
      link: "/documents/exercises/list",
    },
    {
      title: "Tạo bộ đề",
      img: "/images/de-thi-tham-khao.jpg",
      link: "/documents/exercises/form",
    },
  ];

  const router = useRouter();

  return (
    <>
      <HomeBackground />
      <div className="items-center 2xl:max-w-7xl max-w-6xl md:px-12 mx-auto px-8 pt-12">
        {/* <div className="w-full text-center text-[40px] font-merri">Tài liệu</div> */}
        <div className="gap-10 grid grid-cols-1 sm:grid-cols-2">
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
