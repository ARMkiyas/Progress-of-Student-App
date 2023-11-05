import { useDebouncedState } from "@mantine/hooks";
import StudentFormGroup from "./StudentFormGroup";
import { TStudentData } from "@/lib/types";
import {
  studentDetailsOtherThenSubject,
  calculatedData,
} from "@/lib/utils/processFileData";
import { z } from "zod";
import useStore from "@/lib/state/store";
import { useEffect, useMemo, useRef } from "react";
import useFormValidation from "@/lib/custom_hooks/useFormValidation";
import useSiteColorSCheme from "@/lib/custom_hooks/useSiteColorSCheme";

type TStudentAddModel = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<any>>;
  onSubmitHandler?: (e: React.FormEvent<HTMLFormElement>) => void;
  type?: "add" | "edit";
  id?: string;
};

export default function StudentAddModel({
  openModal,
  setOpenModal,
  type = "add",
}: TStudentAddModel) {
  const { header, updateStudentData, updatebtnspinner } = useStore();

  const initalState = useMemo((): TStudentData => {
    const temp = {
      subjects: [],
    };
    header.map((item) => {
      if (studentDetailsOtherThenSubject.includes(item.trim().toLowerCase())) {
        temp[item.toLowerCase()] = "";
      } else if (!calculatedData.includes(item.trim().toLowerCase())) {
        temp.subjects.push({
          [item.trim().toLowerCase()]: null,
        });
      }
    });
    return temp as TStudentData;
  }, [header]);

  const [data, setData] = useDebouncedState<TStudentData>(initalState, 100);

  const subje = () => {
    let temp = {};
    let nosbu = 0;

    header.map((item) => {
      if (studentDetailsOtherThenSubject.includes(item.trim().toLowerCase())) {
        temp[item.toLowerCase()] = z.string().min(1).max(100);
      } else if (!calculatedData.includes(item.trim().toLowerCase())) {
        nosbu++;
      }
    });
    temp["subjects"] = z.record(z.string(), z.number()).array().length(nosbu);
    return temp;
  };

  const studentSchema = z.object(subje());

  const [invalidinput, validate] = useFormValidation();

  const formref = useRef<HTMLFormElement>(null);

  const rest = () => {
    formref.current?.reset();
    setData(initalState);
  };

  const onSubmitHandler = async (
    e: React.MouseEvent<HTMLFormElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const check = validate(studentSchema, data);
    if (check) {
      const sa = await updateStudentData(data);
      console.log(sa);
      if (sa) {
        console.log(initalState);
        rest();
      }
    }
  };

  const colorscheme = useSiteColorSCheme();

  return (
    <>
      {/* <!-- Main modal --> */}
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className={`fixed top-0 left-0 right-0 z-10 ${
          !openModal ? "hidden" : "flex"
        } items-center justify-center w-full overflow-x-hidden overflow-y-auto bg-gray-900 bg-opacity-50 md:inset-0 h-modal md:h-full dark:bg-opacity-80 animate__animated animate__fadeIn animate__fast`}
      >
        <div className="relative w-full h-full max-w-4xl p-4 md:h-auto animate__animated animate__zoomIn animate__faster">
          {/* <!-- Modal content --> */}
          <div
            className={`relative p-4 rounded-lg shadow dark:bg-gray-800 sm:p-5 ${
              colorscheme === "light" && "bg-white"
            }`}
          >
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b rounded-t sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Add Student Data
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
                onClick={() => setOpenModal(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form
              action=""
              method="post"
              onSubmit={onSubmitHandler}
              ref={formref}
            >
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <StudentFormGroup
                  setstate={setData}
                  state={data}
                  invalidinput={invalidinput}
                />
              </div>
              <div className="flex justify-end w-full space-x-3">
                <button
                  type="button"
                  className="btn btn-secondary py-2.5 px-5 mr-2 mb-2 flex items-center text-sm font-medium  focus:outline-none  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={() => setOpenModal(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn btn-success py-2.5 px-5 mr-2 mb-2 flex items-center text-sm font-medium  focus:outline-none  rounded-lg border border-gray-200 bg-lime-950"
                  disabled={updatebtnspinner}
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className={`${
                      updatebtnspinner ? "inline" : "hidden"
                    }  w-4 h-4 mr-2 text-white animate-spin`}
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  {updatebtnspinner ? "Adding..." : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
