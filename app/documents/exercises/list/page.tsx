"use client";
import HomeBackground from "@/components/Background/Home/Home";
import LeftMenu from "@/components/Layout/LeftMenu";
import SearchExercise from "@/components/Search/SearchExercise";
import { Card, CardBody, CardFooter, Image, useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Divider } from "@nextui-org/react";

export default function DocumentsPage() {
  const router = useRouter();

  const list = [
    {
      title: "Bộ đề 1",
      img: "/images/tai-lieu-on-tap.jpg",
    },
    {
      title: "Bộ đề 2",
      img: "/images/de-thi-tham-khao.jpg",
    },
    {
      title: "Bộ đề 3",
      img: "/images/sach-tham-khao.jpg",
    },
    {
      title: "Bộ đề 1",
      img: "/images/tai-lieu-on-tap.jpg",
    },
    {
      title: "Bộ đề 2",
      img: "/images/de-thi-tham-khao.jpg",
    },
    {
      title: "Bộ đề 3",
      img: "/images/sach-tham-khao.jpg",
    },
    {
      title: "Bộ đề 1",
      img: "/images/tai-lieu-on-tap.jpg",
    },
    {
      title: "Bộ đề 2",
      img: "/images/de-thi-tham-khao.jpg",
    },
    {
      title: "Bộ đề 3",
      img: "/images/sach-tham-khao.jpg",
    },
    {
      title: "Bộ đề 1",
      img: "/images/tai-lieu-on-tap.jpg",
    },
    {
      title: "Bộ đề 2",
      img: "/images/de-thi-tham-khao.jpg",
    },
    {
      title: "Bộ đề 3",
      img: "/images/sach-tham-khao.jpg",
    },
  ];
  return (
    <>
      <HomeBackground />
      <div className="items-center 2xl:max-w-7xl max-w-6xl md:px-12 mx-auto px-8 pt-2">
        <div className="gap-10 flex">
          <div className="flex-initial w-64">
            <LeftMenu />
          </div>
          <div className="flex-auto w-full  ">
            <div className="flex-autow-full flex justify-start items-center">
              <div className="flex-initial w-24  text-[16px] font-merri text-left">Tìm kiếm</div>
              <div className="flex-auto ">
                <SearchExercise />
              </div>
            </div>

            <div className="flex-auto w-full  ">
              <Divider className="my-4" />
              <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                {list.map((item, index) => (
                  <Card
                    shadow="sm"
                    key={index}
                    isPressable
                    onPress={() => console.log("item pressed")}
                  >
                    <CardBody className="overflow-visible p-0">
                      <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={item.title}
                        className="w-full object-cover h-[140px]"
                        src={item.img}
                      />
                    </CardBody>
                    <CardFooter className="text-small justify-between">
                      <b>{item.title}</b>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
