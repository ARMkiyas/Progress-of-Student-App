import useStore from "@/lib/state/store";
import React, { useEffect, useState } from "react";
import {
  calculatedData,
  studentDetailsOtherThenSubject,
} from "@/lib/utils/processFileData";

import { TStudentData } from "@/lib/types";
import { CustomFlowbiteTheme, Tooltip } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["tooltip"] = {
  target: "w-full",
  animation: "transition-opacity",
  arrow: {
    base: "absolute z-10 h-2 w-2 rotate-45",
    style: {
      dark: "bg-gray-900 dark:bg-gray-700",
      light: "bg-white",
      auto: "bg-white dark:bg-gray-700",
    },
    placement: "-4px",
  },
  base: "absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm w-2/5 break-words",
  hidden: "invisible opacity-0",
  style: {
    dark: "bg-gray-900 text-white dark:bg-gray-700",
    light: "border border-gray-200 bg-white text-gray-900",
    auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
  },
  content: "relative z-20",
};

type schoolFormGroupProps = {
  setstate: React.Dispatch<React.SetStateAction<TStudentData>>;
  invalidinput?: string[];
  state: TStudentData;
  initstate?: TStudentData;
  type?: "edit" | "add";
  id?: string;
};

export default function StudentFormGroup({
  invalidinput,
  setstate,
  state,
  initstate,
  type,
  id,
}: schoolFormGroupProps) {
  const { header, getStudentDataById } = useStore();

  const inputHandeler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (studentDetailsOtherThenSubject.includes(e.target.id)) {
      setstate({ ...state, [e.target.id]: e.target.value });
    } else {
      setstate((prevstate: TStudentData) => {
        const subject = prevstate.subjects?.filter(
          (item) =>
            Object.keys(item)[0].toLocaleLowerCase().trim() !== e.target.id,
        );

        return {
          ...prevstate,
          subjects: [
            ...subject,
            {
              [e.target.id]: parseInt(e.target.value),
            },
          ],
        };
      });
    }
  };

  const getSubjectMarks = (subject: string) => {
    const subjectMarks = state.subjects?.filter(
      (item) =>
        Object.keys(item)[0].toLocaleLowerCase().trim() ===
        subject.toLowerCase().trim(),
    );

    return subjectMarks?.length ? Object.values(subjectMarks[0])[0] : "";
  };

  return (
    <>
      {header.map((item, index) => {
        if (calculatedData.includes(item.trim().toLowerCase())) {
          return null;
        }

        return (
          <div className="" key={index}>
            <label
              htmlFor="schoolname"
              className="block mb-1 font-bold capitalize form-label "
            >
              {item}
            </label>
            <div className="w-full">
              <Tooltip
                className="w-0"
                content={
                  studentDetailsOtherThenSubject.includes(
                    item.toLowerCase().trim(),
                  )
                    ? `Enter student ${item}.`
                    : `Enter ${item} Marks of student. 
                    note:  If student is absent enter 0. and cann't more then 100.`
                }
                placement="bottom"
                theme={customTheme}
              >
                <input
                  type="text"
                  className={
                    "w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control" +
                    (invalidinput.includes(item.toLowerCase().trim())
                      ? " is-invalid"
                      : "")
                  }
                  placeholder={`Enter ${item}...`}
                  id={item.toLowerCase().trim()}
                  onChange={inputHandeler}
                  defaultValue={
                    studentDetailsOtherThenSubject.includes(
                      item.toLowerCase().trim(),
                    )
                      ? state[item]
                      : getSubjectMarks(item)
                  }
                />
                <div
                  id="schoolnameFeedback"
                  className="capitalize invalid-feedback"
                >
                  {studentDetailsOtherThenSubject.includes(
                    item.toLowerCase().trim(),
                  )
                    ? `${item} can't be empty or invalid.`
                    : `${item} marks can't be empty or invalid`}
                </div>
              </Tooltip>
            </div>
          </div>
        );
      })}
    </>
  );
}
