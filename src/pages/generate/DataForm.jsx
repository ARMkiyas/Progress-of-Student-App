import { useState } from "react";
import { useDebouncedState } from '@mantine/hooks';
import { cn } from "@/lib/utils/utils";
import { z } from "zod";
import { Button } from "@/components/ui/ui/button";
import SchoolFormGroup from "./componets/SchoolFormGroup";
import AceFormGroup from "./componets/AceFormGroup"
import { SchoolDetailSchema, AcedamicDetailSchema, StudentDataschema } from "@/lib/schema.ts";
import useStore from "@/lib/state/store";
import useFormValidation from "@/lib/custom_hooks/useFormValidation"


const ValidFileFormats = ["xlsx", "csv"];


export default function DataForm() {

    const { DataHandler, setLoading, loading } = useStore();

    const [step, setStep] = useState(1);

    const [datafile, setdatafile] = useDebouncedState(null);

    const [dropzone, setDropzone] = useState(false);

    const [schoolDetails, setschoolDetails] = useDebouncedState({
        schoolname: "",
        SchoolAddress: "",
        SchoolEmail: "",
        SchoolPhone: "",
    }, 100);

    const [acedamicDetails, setacedamicDetails] = useDebouncedState({
        Grade: "",
        Term: "",
        SchoolYear: "",
        ClassTeacherName: "",
    }, 100);





    const [invalidinput, validate] = useFormValidation();

    // const [invalidinput, setinvalidinput] = useState([]);


    // data input feild onChange event handler

    const inputHandeler = (e) => {

        const type = e.target.id;

        const value = e.target.value;

        if (step === 1) {
            setschoolDetails({ ...schoolDetails, [type]: value });
        }
        if (step === 2) {
            setacedamicDetails({ ...acedamicDetails, [type]: value });
        }

    }



    const datafile_handler = (e) => {
        e.preventDefault();
        e.target.files[0] && setdatafile(e.target.files[0]);
    }


    const handlesteps = async (e) => {
        e.preventDefault();
        const type = e.target.id;


        if ((type === "prev" && step > 0) && step <= 3) {

            setStep(step - 1);
        }

        let validation = false;

        if ((type === "next" && step <= 3)) {

            validation = step === 1 ? validate(SchoolDetailSchema, schoolDetails) : step === 2 ? validate(AcedamicDetailSchema, acedamicDetails) : validate(StudentDataschema, { file: datafile });

            validation && step < 3 ? setStep(step + 1) : null
        }

        if (type === "next" && step === 3 && validation) {

            // checking file format 
            const fileformat = datafile.name.split(".").pop();
            const filesize = (datafile.size / 1000000).toFixed(2);




            if (!ValidFileFormats.includes(fileformat) && filesize > 100) {
                setdatafile(null);
                setinvalidinput(["file"]);
                return;
            }

            setLoading(true);
            await DataHandler(schoolDetails, acedamicDetails, datafile);
            setLoading(false);
        }

    };





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





    return (
        <>



            <div className="">


                <div className={`relative max-w-3xl px-4 py-10 mx-auto  transition-all ${loading ? "blur-[1px] opacity-40" : ""}`}>



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
                                    <SchoolFormGroup inputHandeler={inputHandeler} invalidinput={invalidinput} state={schoolDetails} />
                                </div>
                            )
                        }

                        {step === 2 && (
                            <div className="mb-5 animate__animated animate__fadeIn animate__fast space-y-9">
                                <AceFormGroup inputHandeler={inputHandeler} invalidinput={invalidinput} state={acedamicDetails} />
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
                                                 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 
                                                 dark:hover:border-gray-500 dark:hover:bg-gray-600  
                                                ${dropzone ? "bg-gray-100 dark:bg-bray-800  dark:border-gray-500" : "bg-gray-50 border-gray-300"}
                                                ${invalidinput.includes("file") & !datafile ? "border-red-600" : "dark:border-gray-600 border-gray-600"}
                                        `}
                                        >

                                            <div className="flex flex-col items-center justify-center pt-5 pb-6" >

                                                {
                                                    !datafile ? (<svg className={`w-8 h-8 mb-4 ${invalidinput.includes("file") & !datafile ? "text-red-500 dark:text-red-400" : "text-gray-500 dark:text-gray-400"} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                    </svg>) : (<div className="flex items-center justify-center mb-4 space-x-2 text-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className={`w-10 h-10  text-neutral-900 dark:text-neutral-50`} fill="none" viewBox="0 0 48 48" id="excel-logo">
                                                            <path fill="currentColor" fillRule="evenodd" d="M15 8C15 6.89543 15.8059 6 16.8 6H40.2C41.1941 6 42 6.89543 42 8V40C42 41.1046 41.1941 42 40.2 42H16.8C15.8059 42 15 41.1046 15 40V34H7.8C6.80589 34 6 33.1046 6 32V16C6 14.8954 6.80589 14 7.8 14H15V8ZM28 14V8H17V14L28 14ZM30 8V14L40 14V8H30ZM28 16L24 16V23H28V16ZM30 23V16L40 16V23L30 23ZM28 25H24V32H28V25ZM30 32V25L40 25V32H30ZM28 34H17V40H28V34ZM30 40V34H40V40H30ZM22 16V32H7.8V16H22ZM11.2258 19H13.3732L15.1156 22.754L16.957 19H18.9631L16.1992 24L19.0261 29H16.9102L15.0112 25.07L13.1203 29H10.9729L13.8466 23.982L11.2258 19Z" clipRule="evenodd"></path>
                                                        </svg>
                                                        {

                                                            datafile && (
                                                                <div className="flex flex-col items-center justify-center">
                                                                    <div className="text-sm font-bold text-neutral-900 dark:text-neutral-50 ">{datafile.name} ({datafile.size > 1000000 ? (datafile.size / 1000000).toFixed(2) + " " + "Mib" : (datafile.size / 1000).toFixed(2) + " " + "Kib"}) </div>
                                                                </div>
                                                            )
                                                        }
                                                    </div>)
                                                }

                                                <p className={`mb-2 text-sm  ${invalidinput.includes("file") & !datafile ? "text-red-500 dark:text-red-400" : "text-gray-500 dark:text-gray-400"} `}><span className="font-semibold">Click to upload  or drag and drop </span></p>
                                                <p className={`text-xs ${invalidinput.includes("file") & !datafile ? "text-red-500 dark:text-red-400" : "text-gray-500 dark:text-gray-400"}`}>Excel File (xlsx) or CSV (MAX SIZE. 100mb)</p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" accept=".xlsx,.csv" />

                                        </label>

                                    </div>

                                </div>


                            </div>
                        )}
                    </div>
                </div>

                {
                    loading && (
                        <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                            <svg aria-hidden="true" className="mr-2 text-gray-200 w-14 h-14 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    )
                }

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
                                    {
                                        step === 3 ? "Submit" : "Next"
                                    }
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
