import React, { Dispatch, SetStateAction } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
interface BlogDialogProps {
  blog: {
    title: string;
    image: string;
    desc: string;
  };
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BlogDialog: React.FC<BlogDialogProps> = ({ blog, isOpen, setIsOpen }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className=" fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="fixed inset-0 bg-gray-200 bg-opacity-75 transition-opacity">
        <div className="flex w-ful h-full  justify-center items-center">
          <DialogPanel className="w-1/2 grid gap-4 gap-y-10 grid-cols-1 md:grid-cols-2 ">
            <Description>
              <DialogTitle className="font-bold animate-scaleDown ">
                {blog.title}
              </DialogTitle>
              <p className="animate-slideIn">{blog.desc}</p>
            </Description>
            <img
              className={`max-h-96 rounded-xl animate-scaleDown`}
              src={blog.image}
              alt=""
            />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default BlogDialog;
