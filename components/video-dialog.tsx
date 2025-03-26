"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

interface VideoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function VideoDialog({ open, onOpenChange }: VideoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[80vw] p-0 lg:max-w-4xl h-[90vh] lg:h-[80vh] flex flex-col">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="sr-only">Pixa Playground Video</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost" size="icon" className="absolute top-2 right-2 z-10 rounded-full">
              <XCircle className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="flex-grow p-4 pt-0 md:p-6 md:pt-0">
          <div className="relative h-full w-full overflow-hidden rounded-md bg-black">
            {open && (
              <iframe
                className="absolute top-0 left-0 h-full w-full"
                src="https://www.youtube.com/embed/WrfN3iJzrWs?si=BEQ4iPK9NXSM_fkk&controls=1&rel=0&showinfo=0&autoplay=1&loop=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}