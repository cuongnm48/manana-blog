"use client";
import HomeBackground from "@/components/Background/Home/Home";
import FormSelect from "@/components/Form/FormSelect";
import FormSelectMultiple from "@/components/Form/FormSelectMultiple";
import CheckListIcon from "@/components/IconNextUI/CheckListIcon";
import DeleteIcon from "@/components/IconNextUI/DeleteIcon";
import DragDropAnswerIcon from "@/components/IconNextUI/DragDropAnswerIcon";
import DuplicateIcon from "@/components/IconNextUI/DuplicateIcon";
import EditIcon from "@/components/IconNextUI/EditIcon";
import SaveIcon from "@/components/IconNextUI/SaveIcon";
import FormModal from "@/components/Modal/Modal";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import DragIcon from "../../../../components/IconNextUI/DragIcon";
export default function DocumentsPage() {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <HomeBackground />
      <div className="items-center 2xl:max-w-7xl max-w-6xl md:px-12 mx-auto px-8 pt-2">
        <div className="flex-initial w-24  text-[16px] font-merri text-left">Bộ đề</div>
        <div className="flex-auto w-2/3  mx-auto  ">
          <div className="flex justify-between">
            <div className="flex justify-start gap-2">
              <CheckListIcon className="w-6 h-6 text-success" /> 2
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
          <Card className="max-w-full mt-5">
            <CardHeader className="flex justify-between gap-3">
              <div className="flex ">
                <DragIcon className="w-6 h-6 " />
                <DragDropAnswerIcon className="w-6 h-6 " />
                {/* <CorrectAnswer className="w-6 h-6 text-success" />
                <FillToBlankIcon className="w-6 h-6 text-success" />
                <AnalystChartIcon className="w-6 h-6 text-success" />
                <WriteAnswer className="w-6 h-6 text-success" /> */}
                <p className="text-small text-default-500">cau so 1</p>
              </div>
              <div className="flex ">
                <Button
                  aria-label="1"
                  color="primary"
                  variant="bordered"
                  startContent={<EditIcon className="w-4 h-4" />}
                >
                  Chinh sua
                </Button>
                <DuplicateIcon className="w-6 h-6 " />
                <DeleteIcon className="w-6 h-6 " />
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>question is here</p>
            </CardBody>
            <Divider />
            <CardFooter className="flex justify-between gap-3">
              <div className="flex-auto w-1/5">
                <FormSelect />
              </div>
              <div>
                <FormSelectMultiple />
              </div>
            </CardFooter>
          </Card>
          <div className="flex justify-around">
            <Button aria-label="1" color="secondary" variant="shadow" onPress={onOpen}>
              Tao cau hoi moi
            </Button>
            <Button aria-label="1" color="secondary" variant="shadow">
              Nhap cau hoi
            </Button>
            <FormModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />
          </div>
        </div>
      </div>
    </>
  );
}
