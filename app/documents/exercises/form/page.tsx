"use client";
import HomeBackground from "@/components/Background/Home/Home";
import FormSelect from "@/components/Form/FormSelect";
import FormSelectMultiple from "@/components/Form/FormSelectMultiple";
import CheckListIcon from "@/components/IconNextUI/CheckListIcon";
import DeleteIcon from "@/components/IconNextUI/DeleteIcon";
import DragIcon from "@/components/IconNextUI/DragIcon";
import DuplicateIcon from "@/components/IconNextUI/DuplicateIcon";
import EditIcon from "@/components/IconNextUI/EditIcon";
import SaveIcon from "@/components/IconNextUI/SaveIcon";
import QuestionCreate from "@/components/Modal/QuestionCreate";
import { SCORE_OPTIONS, TAG_OPTIONS, TYPE_QUESTION_OPTIONS } from "@/utils/constant";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Spacer,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
export default function DocumentsPage() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [data, setData] = useState([]);

  return (
    <>
      <HomeBackground />
      <div className="items-center 2xl:max-w-7xl max-w-6xl md:px-12 mx-auto px-8 pt-2">
        <div className="flex-initial w-24  text-[16px] font-merri text-left">Bộ đề</div>
        <div className="flex-auto w-2/3  mx-auto">
          <div className="flex justify-between">
            <div className="flex justify-start gap-2">
              <CheckListIcon className="w-6 h-6 text-success" /> {data.length} cau hoi
            </div>
            <div className="create-question">
              <Button
                aria-label="Save"
                color="primary"
                startContent={<SaveIcon className="w-4 h-4" />}
              >
                Luu
              </Button>
            </div>
          </div>
          <>
            {data.map((question: any) => (
              <Card className="max-w-full mt-5" key={question.numberOrder}>
                <CardHeader className="flex justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <DragIcon className="w-6 h-6 " />
                    <p className="text-small">
                      {TYPE_QUESTION_OPTIONS.find((i) => i.value == question.typeQuestion)?.icon}
                    </p>
                    <p className="text-small">Cau hoi so {question.numberOrder}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      aria-label="1"
                      color="primary"
                      variant="bordered"
                      startContent={<EditIcon className="w-4 h-4" />}
                      className="active:translate-y-1"
                    >
                      Chinh sua
                    </Button>
                    <DuplicateIcon className="w-5 h-5 active:translate-y-1 cursor-pointer" />
                    <DeleteIcon className="w-6 h-6 active:translate-y-1 cursor-pointer" />
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>{question.content}</p>
                </CardBody>
                <Divider />
                <CardFooter className="flex justify-between gap-3">
                  <div className="flex-auto w-1/5">
                    <FormSelect
                      options={SCORE_OPTIONS}
                      value={question.score}
                      label="Diem"
                      isDisabled={true}
                      placeholder="Select diem"
                    />
                  </div>
                  <div className="flex-auto w-2/5">
                    <FormSelectMultiple
                      options={TAG_OPTIONS}
                      value={question.tags}
                      label="Tag"
                      isDisabled={true}
                      placeholder="Select tag"
                    />
                  </div>
                </CardFooter>
              </Card>
            ))}
          </>
          <Spacer y={5} />

          <div className="flex justify-around">
            <Button aria-label="1" color="secondary" variant="shadow" onPress={onOpen}>
              Tao cau hoi moi
            </Button>
            <Button aria-label="1" color="secondary" variant="shadow">
              Nhap cau hoi
            </Button>
            {isOpen && (
              <QuestionCreate
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                onOpenChange={onOpenChange}
                data={data}
                setData={setData}
              />
            )}
          </div>
        </div>
      </div>
      <Spacer y={10} />
    </>
  );
}
