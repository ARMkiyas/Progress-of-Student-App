import { TSchoolDetails } from "@/lib/types";

type schoolFormGroupProps = {
  state: TSchoolDetails;
  inputHandeler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  invalidinput: string[];
};

export default function SchoolFormGroup({
  state,
  inputHandeler,
  invalidinput,
}: schoolFormGroupProps) {
  return (
    <>
      <div className="">
        <label htmlFor="schoolname" className="block mb-1 font-bold form-label">
          School Name
        </label>
        <input
          type="text"
          className={
            "w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control" +
            (invalidinput.includes("schoolname") ? " is-invalid" : "")
          }
          placeholder="Your school name..."
          id="schoolname"
          defaultValue={state.schoolname}
          onChange={inputHandeler}
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
            "w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control" +
            (invalidinput.includes("SchoolAddress") ? " is-invalid" : "")
          }
          placeholder="Your school address..."
          id="SchoolAddress"
          defaultValue={state.SchoolAddress}
          onChange={inputHandeler}
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
            "w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control" +
            (invalidinput.includes("SchoolEmail") ? " is-invalid" : "")
          }
          placeholder="abcd@school.com"
          id="SchoolEmail"
          defaultValue={state.SchoolEmail}
          onChange={inputHandeler}
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
            "w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control" +
            (invalidinput.includes("SchoolPhone") ? " is-invalid" : "")
          }
          placeholder="+94123456789"
          id="SchoolPhone"
          defaultValue={state.SchoolPhone}
          onChange={inputHandeler}
          maxLength={12}
          minLength={12}
        />
        <div id="SchoolPhoneFeedback" className="invalid-feedback">
          School Phone Number can not be empty or invalid
        </div>
      </div>
    </>
  );
}
