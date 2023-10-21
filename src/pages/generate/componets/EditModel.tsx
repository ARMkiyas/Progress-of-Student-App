import { useState } from "react";
import { TAcedamicDetails, TSchoolDetails } from "@/lib/types";

type EditModelProps = {
  type: "acedamic" | "school";
  data: TAcedamicDetails | TSchoolDetails;
};

export default function EditModel({ type, data }: EditModelProps) {
  const [openModal, setOpenModal] = useState(undefined);

  return (
    <>
      {/* <!-- Main modal --> */}
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className={`fixed top-0 left-0 right-0 z-50 ${
          !openModal ? "hidden" : "flex"
        } items-center justify-center w-full overflow-x-hidden overflow-y-auto bg-gray-900 bg-opacity-50 md:inset-0 h-modal md:h-full dark:bg-opacity-80 animate__animated animate__fadeIn animate__fast`}
      >
        <div className="relative w-full h-full max-w-4xl p-4 md:h-auto animate__animated animate__zoomIn animate__faster">
          {/* <!-- Modal content --> */}
          <div className="relative p-4 rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b rounded-t sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Edit {type}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
                onClick={() => setOpenModal(undefined)}
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
            <form action="#">
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div className="">
                  <label
                    htmlFor="schoolname"
                    className="block mb-1 font-bold form-label"
                  >
                    School Name
                  </label>
                  <input
                    type="text"
                    className={
                      "w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control"
                    }
                    placeholder="Your school name..."
                    id="schoolname"
                  />
                  <div id="schoolnameFeedback" className="invalid-feedback">
                    School Name can not be empty .
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="SchoolAddress"
                    className="block mb-1 font-bold form-label"
                  >
                    School Address
                  </label>
                  <input
                    type="text"
                    className={
                      "w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control"
                    }
                    placeholder="Your school name..."
                    id="SchoolAddress"
                  />
                  <div id="SchoolAddressFeedback" className="invalid-feedback">
                    School Address can not be empty .
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="SchoolEmail"
                    className="block mb-1 font-bold form-label"
                  >
                    School Email
                  </label>
                  <input
                    type="text"
                    className={
                      "w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control"
                    }
                    placeholder="abcd@school.com"
                    id="SchoolEmail"
                  />
                  <div id="SchoolEmailFeedback" className="invalid-feedback">
                    School Email can not be empty or invalid
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="SchoolPhone"
                    className="block mb-1 font-bold form-label"
                  >
                    School Phone
                  </label>
                  <input
                    type="text"
                    className={
                      "w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control"
                    }
                    placeholder="+94123456789"
                    id="SchoolPhone"
                    maxLength={12}
                    minLength={12}
                  />
                  <div id="SchoolPhoneFeedback" className="invalid-feedback">
                    School Phone Number can not be empty or invalid
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <svg
                  className="w-6 h-6 mr-1 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Add new product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
