"use client";

import useStore from "@/lib/state/store";
import { CustomFlowbiteTheme, Toast } from "flowbite-react";
import { HiCheck, HiExclamation, HiX } from "react-icons/hi";

const customTheme: CustomFlowbiteTheme["toast"] = {
  root: {
    base: "flex w-full max-w-xs items-center rounded-lg bg-gray-50 p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",
    closed: "opacity-0 ease-out",
  },
  toggle: {
    base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-gray-50 p-1.5  text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
    icon: "h-5 w-5 shrink-0",
  },
};

function ToastMessage() {
  const { toast, removetoast } = useStore();

  console.log(toast);

  const toasticonmap = {
    success: (
      <div className="inline-flex items-center justify-center w-8 h-8 text-green-500 bg-green-100 rounded-lg shrink-0 dark:bg-green-800 dark:text-green-200">
        <HiCheck className="w-5 h-5" />
      </div>
    ),
    error: (
      <div className="inline-flex items-center justify-center w-8 h-8 text-red-500 bg-red-100 rounded-lg shrink-0 dark:bg-red-800 dark:text-red-200">
        <HiX className="w-5 h-5" />
      </div>
    ),
    warning: (
      <div className="inline-flex items-center justify-center w-8 h-8 text-orange-500 bg-orange-100 rounded-lg shrink-0 dark:bg-orange-700 dark:text-orange-200">
        <HiExclamation className="w-5 h-5" />
      </div>
    ),
  };

  return (
    <div className="flex flex-col gap-4 ">
      {toast.map((item, index) => {
        return (
          <Toast theme={customTheme} key={index}>
            {toasticonmap[item.type]}
            <div className="ml-3 text-sm font-normal">{item.message}</div>
            <Toast.Toggle
              className="bg-gray-800"
              id={item.id}
              onClick={() => {}}
              onDismiss={() => {
                removetoast(index);
              }}
            />
          </Toast>
        );
      })}
    </div>
  );
}

export default ToastMessage;
