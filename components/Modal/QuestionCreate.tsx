import FormInput from "@/components/Form/FormInput";
import FormSelect from "@/components/Form/FormSelect";
import FormSelectMultiple from "@/components/Form/FormSelectMultiple";
import { SCORE_OPTIONS, TAG_OPTIONS, TYPE_QUESTION_OPTIONS } from "@/utils/constant";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spacer,
} from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  typeQuestion: yup.string().required(),
  score: yup.string().optional(),
  tags: yup.array().min(1),
  content: yup.string().required(),
});

export default function QuestionCreate(props: any) {
  const { isOpen, onOpen, onClose, onOpenChange, data, setData } = props;

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      typeQuestion: "",
      score: "0",
      tags: [],
      content: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    setData((prev: any) => [...prev, { ...data, numberOrder: prev.length + 1 }]);
    onClose();
  };
  console.log(errors);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Tao cau hoi</ModalHeader>
        <ModalBody>
          <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="typeQuestion"
              render={({ field }) => (
                <FormSelect
                  value={field.value}
                  onChange={field.onChange}
                  options={TYPE_QUESTION_OPTIONS}
                  label="Loai cau hoi *"
                  placeholder="Select cau hoi"
                  errors={errors.typeQuestion}
                  className="mb-1"
                />
              )}
            />
            <Spacer y={4} />
            <Controller
              control={control}
              name="score"
              render={({ field }) => (
                <FormSelect
                  value={field.value}
                  onChange={(e: any) => {
                    field.onChange(e.target.value || "0");
                  }}
                  options={SCORE_OPTIONS}
                  label="Diem"
                  placeholder="Chon diem"
                />
              )}
            />
            <Spacer y={4} />

            <Controller
              control={control}
              name="tags"
              render={({ field }) => (
                <FormSelectMultiple
                  value={field.value}
                  onChange={(e: any) => {
                    const values = e.target.value ? e.target.value.split(",") : [];
                    field.onChange(values);
                  }}
                  options={TAG_OPTIONS}
                  label="The *"
                  placeholder="Chon the"
                  errors={errors.tags}
                />
              )}
            />
            <Spacer y={4} />

            <Controller
              control={control}
              name="content"
              render={({ field }) => (
                <FormInput
                  value={field.value}
                  onChange={field.onChange}
                  label="Cau hoi *"
                  placeholder="Nhap cau hoi"
                  errors={errors.content}
                />
              )}
            />
            <Spacer y={4} />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Hủy bỏ
          </Button>
          <Button color="primary" type="submit" form="hook-form">
            Lưu
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
