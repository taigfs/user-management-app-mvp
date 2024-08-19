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
import { useCreateUser } from "@/hooks/use-create-user";
import { User } from "@/types/user";

interface AddUserDialogProps {
  show: boolean;
  onShowChange: (value: boolean) => void;
}

export const AddUserDialog = ({ show, onShowChange }: AddUserDialogProps) => {
  const { mutate, isSuccess, reset, isLoading } = useCreateUser();
  const onSubmit = (data: User) => mutate(data);
  const editable = !isLoading;

  useEffect(() => {
    if (isSuccess) {
      reset();
      resetForm();
      onShowChange(false);
    }
  }, [isSuccess, onShowChange]);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset: resetForm,
  } = useForm<User>();

  return (
    <Dialog open={show} onOpenChange={onShowChange}>
      <DialogTrigger asChild>
        <Button>
          <Text className="text-black">Add User</Text>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription>
            Fill out the form to add a new user.
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
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            }}
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
            rules={{
              required: "Phone is required",
              pattern: {
                value: /^[0-9\s-()]+$/,
                message:
                  "Phone number can only contain numbers, spaces, and special characters like () or -",
              },
            }}
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
