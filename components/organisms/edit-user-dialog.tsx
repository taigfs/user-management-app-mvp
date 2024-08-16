import { Input } from "../atoms/input";
import { Label } from "../atoms/label";

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
import { EditIcon } from "@/lib/icons/EditIcon";

export const EditUserDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-red-500/10"
        >
          <EditIcon className="h-5 w-5" />
          <span className="sr-only">Delete</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>
            Fill out the form to edit the user.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label nativeID="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="Enter name" className="col-span-3" />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label nativeID="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Enter email"
              className="col-span-3"
            />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label nativeID="phone" className="text-right">
              Phone
            </Label>
            <Input
              id="phone"
              placeholder="Enter phone number"
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button className="ml-auto">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
