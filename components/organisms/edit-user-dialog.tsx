import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";

import { Input } from "../atoms/input";
import { Label } from "../atoms/label";
import { Loading } from "../atoms/loading";

import { Button } from "@/components/atoms/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/molecules/dialog";
import { useUpdateUser } from "@/hooks/use-update-user";
import { EditIcon } from "@/lib/icons/EditIcon";
import { CreatedUser, User } from "@/types/user";

interface EditUserDialogProps {
  show: boolean;
  onShowChange: (value: boolean) => void;
  initialValues: CreatedUser;
}

export const EditUserDialog = ({
  show,
  onShowChange,
  initialValues,
}: EditUserDialogProps) => {
  const { mutate, isSuccess, reset, isLoading } = useUpdateUser(
    initialValues.id,
  );
  const editable = !isLoading;

  const onSubmit = (data: User) => mutate(data);

  useEffect(() => {
    if (isSuccess) {
      reset();
      onShowChange(false);
      resetForm();
    }
  }, [isSuccess, onShowChange]);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset: resetForm,
  } = useForm<User>({
    defaultValues: initialValues,
  });

  return (
    <Dialog open={show} onOpenChange={onShowChange}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-red-500/10"
        >
          <EditIcon className="h-5 w-5" />
          <Text className="sr-only">Delete</Text>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>
            Fill out the View to edit the user.
          </DialogDescription>
        </DialogHeader>
        <View className="grid gap-4 py-4">
          <Controller
            control={control}
            name="name"
            rules={{ required: "Name is required" }}
            render={({ field: { onChange, value } }) => (
              <>
                <div className="grid items-center grid-cols-4 gap-2">
                  <Label nativeID="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    editable={editable}
                    placeholder="Enter name"
                    className="col-span-3"
                    onChange={onChange}
                    value={value}
                  />
                  {errors.name && (
                    <>
                      <Text className="text-white text-xs col-span-4 text-center">
                        {errors.name.message}
                      </Text>
                    </>
                  )}
                </div>
              </>
            )}
          />
          <Controller
            control={control}
            name="email"
            rules={{ required: "Email is required" }}
            render={({ field: { onChange, value } }) => (
              <>
                <div className="grid items-center grid-cols-4 gap-4">
                  <Label nativeID="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    editable={editable}
                    placeholder="Enter email"
                    className="col-span-3"
                    onChange={onChange}
                    value={value}
                  />
                  {errors.email && (
                    <>
                      <Text className="text-white text-xs col-span-4 text-center">
                        {errors.email.message}
                      </Text>
                    </>
                  )}
                </div>
              </>
            )}
          />
          <Controller
            control={control}
            name="phone"
            rules={{ required: "Phone is required" }}
            render={({ field: { onChange, value } }) => (
              <>
                <div className="grid items-center grid-cols-4 gap-4">
                  <Label nativeID="phone" className="text-right">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    editable={editable}
                    placeholder="Enter phone number"
                    className="col-span-3"
                    onChange={onChange}
                    value={value}
                  />
                  {errors.phone && (
                    <>
                      <Text className="text-white text-xs col-span-4 text-center">
                        {errors.phone.message}
                      </Text>
                    </>
                  )}
                </div>
              </>
            )}
          />
          <DialogFooter>
            <Button
              className="ml-auto flex-row gap-2"
              onPress={handleSubmit(onSubmit)}
              disabled={isLoading}
            >
              <Text className="text-black">Save</Text>
              {isLoading && <Loading />}
            </Button>
          </DialogFooter>
        </View>
      </DialogContent>
    </Dialog>
  );
};
