import { useEffect } from "react";
import { Text } from "react-native";

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
import { useDeleteUser } from "@/hooks/use-delete-user";
import { TrashIcon } from "@/lib/icons/TrashIcon";

interface DeleteUserDialogProps {
  show: boolean;
  onShowChange: (value: boolean) => void;
  id: string;
}

export const DeleteUserDialog = ({
  show,
  onShowChange,
  id,
}: DeleteUserDialogProps) => {
  const { mutate, isSuccess, reset, isLoading } = useDeleteUser(id);
  const onDelete = () => mutate();

  useEffect(() => {
    if (isSuccess) {
      reset();
      onShowChange(false);
    }
  }, [isSuccess, onShowChange]);

  return (
    <Dialog open={show} onOpenChange={onShowChange}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-red-500 hover:bg-red-500/10"
        >
          <TrashIcon className="h-5 w-5" />
          <Text className="sr-only">Delete</Text>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete User</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this user?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="destructive"
            className="ml-auto flex-row gap-2"
            onPress={onDelete}
            disabled={isLoading}
          >
            <Text className="text-white">Delete</Text>
            {isLoading && <Loading />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
