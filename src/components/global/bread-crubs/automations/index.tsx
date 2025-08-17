import { PencilDuoToneBlack } from "@/icons";
import { ChevronRight, PencilIcon } from "lucide-react";
import React from "react";
import ActivateAutomationButton from "../../activate-automation-button";

type Props = {
  id: string;
};

const AutomationBreadCrumb = ({ id }: Props) => {
  return (
    <div
      className=" rounded-full w-full p-5 bg-[#18181B1A] flex
    justify-between items-center"
    >
      <div className=" flex items-center gap-x-3 min-w-0">
        <p className="text-[#9B9CA0] truncate">Automation</p>
        <ChevronRight color="#9B9CA0" className="flex-shrink-0" />
        <span className="flex gap-x-3 items-center min-w-0">
          <p className="text-[#9B9CA0] truncate">
            This is the Automation title
          </p>
          <span className=" cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0">
            <PencilIcon size={14} className="mr-4" />
          </span>
        </span>
      </div>

      <div className="flex gap-x-5 items-center ml-auto">
        <p className=" hidden md:block text-text-secondary/60 text-sm truncate min-w-0">
          All updates are automaticlly saved
        </p>

        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-text-secondary text-sm truncate min-w-0">
            Change Saved
          </p>
        </div>
      </div>

      <ActivateAutomationButton />
    </div>
  );
};

export default AutomationBreadCrumb;
