"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const AddInterview = () => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div>
      <div
        className="p-10 border rounded-lg border-gray-200 cursor-pointer bg-secondary hover:scale-105 transition-all duration-300 hover:shadow-md"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="font-semibold text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
              <div className="flex justify-end mt-5 gap-4">
                <Button
                  variant="destructive"
                  onClick={() => setOpenDialog(false)}
                >
                  Cancel
                </Button>
                <Button className="bg-blue-400 border border-blue-600">
                  Start Interview
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddInterview;
