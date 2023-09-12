import { useState } from "react";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/ui/button";
import { Input } from "@/components/ui/ui/input";
import { handleFileRead } from "@/lib/datafilehandler.ts";

import { Calendar } from "@/components/ui/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/ui/popover";

export default function Generate() {
  const [step, setStep] = useState(1);

  const [datafile, setdatafile] = useState(null);

  const [dropzone, setDropzone] = useState(false);



  const datafile_handler = (e) => {
    e.preventDefault();
    e.target.files[0] && setdatafile(e.target.files[0]);
  }


  const handlesteps = (e) => {
    e.preventDefault();
    const type = e.target.id;

    if ((type === "next" && step < 3) || (type === "prev" && step > 1)) {
      setStep(type === "next" ? step + 1 : step - 1);
    }
  };

  console.log(datafile);

  const handleDrop = (e) => {
    e.preventDefault();

    e.dataTransfer.dropEffect = 'copy'; // Indicates that a copy of the file will be made

    e.dataTransfer.files[0] && setdatafile(e.dataTransfer.files[0]);

    setDropzone(false);

  }

  const handleDragEnter = (e) => {
    e.preventDefault();

    setDropzone(true);

  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    // Remove the drop zone's visual effect

    setDropzone(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    // Add a custom visual effect when a file is dragged over the drop zone
    e.dataTransfer.dropEffect = 'copy'; // Indicates that a copy of the file will be made
  };


  const [date, setDate] = useState(new Date());


  const [file, setFile] = useState(null);

  const submit_handler = async (e) => {
    e.preventDefault();
    file && handleFileRead(file);
  };

  return (
    <>
      <div className="">
        <div className="max-w-3xl px-4 py-10 mx-auto">
          {/* Registration Success */}
          <div>
            <div className="flex items-center justify-between hidden p-10 bg-white rounded-lg shadow">
              <div>
                <svg
                  className="w-20 h-20 mx-auto mb-4 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">
                  Registration Success
                </h2>

                <div className="mb-8 text-gray-600">
                  Thank you. We have sent you an email to demo@demo.test. Please
                  click the link in the message to activate your account.
                </div>

                <button className="block w-40 px-5 py-2 mx-auto font-medium text-center text-gray-600 bg-white border rounded-lg shadow-sm focus:outline-none hover:bg-gray-100">
                  Back to home
                </button>
              </div>
            </div>
          </div>
          {/* top nav */}
          <div className="py-4 border-b-2">
            <div className="mb-1 text-xs font-bold leading-tight tracking-wide text-gray-500 uppercase">
              Step: {step} of 3
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                {step === 1 && (
                  <div>
                    <div className="text-lg font-bold leading-tight ">
                      School Details
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div>
                    <div className="text-lg font-bold leading-tight ">
                      Acedamic Information
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div>
                    <div className="text-lg font-bold leading-tight ">
                      Import Student data
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center md:w-64">
                <div className="w-full mr-2 bg-gray-300 rounded-full dark:bg-gray-500">
                  <div
                    className="h-2 text-xs leading-none text-center text-white bg-green-500 rounded-full"
                    style={{
                      width: `${(step / 3) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="w-10 text-xs ">
                  {parseInt((step / 3) * 100) + "%"}
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Step Content --> */}
          <div className="py-14">
            {
              // <!-- Step 1 -->
              step === 1 && (
                <div className="space-y-9 animate__animated animate__fadeIn animate__fast">
                  <div className="">
                    <label
                      htmlFor="schoolname"
                      className="block mb-1 font-bold form-label"
                    >
                      School Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control"
                      placeholder="Your school name..."
                      id="schoolname"
                    />
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
                      className="w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control"
                      placeholder="Your school name..."
                      id="SchoolAddress"
                    />
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
                      className="w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control"
                      placeholder="abcd@school.com"
                      id="SchoolEmail"
                    />
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
                      className="w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control"
                      placeholder="+94123456789"
                      id="SchoolPhone"
                    />
                  </div>
                </div>
              )
            }

            {step === 2 && (
              <div className="mb-5 animate__animated animate__fadeIn animate__fast space-y-9">



                <div className="relative">
                  <label
                    htmlFor="Grade"
                    className="block mb-1 font-bold form-label"
                  >
                    Grade
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control"
                    placeholder="Your school name..."
                    id="Grade"
                  />


                </div>
                <div className="relative">
                  <label
                    htmlFor="Term"
                    className="block mb-1 font-bold form-label"
                  >
                    Term
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control"
                    placeholder="Your school name..."
                    id="Term"
                  />


                </div>


                <div className="relative">
                  <label
                    htmlFor="SchoolYear"
                    className="block mb-1 font-bold form-label"
                  >
                    Acedamic Year
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control"
                    placeholder="Your school name..."
                    id="SchoolYear"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="ClassTeacherName"
                    className="block mb-1 font-bold form-label"
                  >
                    Class Teacher Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control"
                    placeholder="Your school name..."
                    id="ClassTeacherName"
                  />

                </div>
                {/* <div :className="{ 'bg-red-400': passwordStrengthText == 'Too weak' ||  passwordStrengthText == 'Could be stronger' || passwordStrengthText == 'Strong password' }" className="w-1/3 h-2 mr-1 bg-gray-300 rounded-full"></div>
                    <div :className="{ 'bg-orange-400': passwordStrengthText == 'Could be stronger' || passwordStrengthText == 'Strong password' }" className="w-1/3 h-2 mr-1 bg-gray-300 rounded-full"></div>
                    <div :className="{ 'bg-green-400': passwordStrengthText == 'Strong password' }" className="w-1/3 h-2 bg-gray-300 rounded-full"></div> */}


              </div>
            )}

            {step === 3 && (
              <div className="animate__animated animate__fadeIn animate__fast" >
                <div className="mb-5" >
              

                  <div className="flex items-center justify-center w-full" >
                    <label onChange={datafile_handler} onDragOver={handleDragOver}
                      onDragEnter={handleDragEnter} onDragLeave={handleDragLeave}
                      onDrop={handleDrop} htmlFor="dropzone-file"
                      className={`flex flex-col items-center 
                      justify-center w-full h-64 border-2  border-dashed rounded-lg cursor-pointer
                        dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600
                        dark:hover:border-gray-500 dark:hover:bg-gray-600  ${dropzone ? "bg-gray-100 dark:bg-bray-800  dark:border-gray-500" : "bg-gray-50 border-gray-300"}`}>
                      <div className="flex flex-col items-center justify-center pt-5 pb-6" >
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                  </div>

                </div>


              </div>
            )}
          </div>
        </div>

        {/* bottom nav */}

        <div className="fixed bottom-0 left-0 right-0 py-5 shadow-md">
          <div className="max-w-3xl px-4 mx-auto">
            <div className="flex justify-between">
              <div className="w-1/2">
                {step > 1 && (
                  <Button
                    className="w-32 px-5 py-2 font-medium text-center text-gray-600 bg-white border rounded-lg shadow-sm animate__animated animate__fadeIn focus:outline-none hover:bg-gray-100"
                    onClick={handlesteps}
                    id="prev"
                  >
                    Previous
                  </Button>
                )}
              </div>

              <div className="w-1/2 text-right">
                <Button
                  onClick={handlesteps}
                  id="next"
                  className="w-32 px-5 py-2 font-medium text-center text-white bg-blue-500 border border-transparent rounded-lg shadow-sm focus:outline-none hover:bg-blue-600"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
