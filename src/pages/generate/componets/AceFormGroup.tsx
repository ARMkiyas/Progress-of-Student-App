import { TAcedamicDetails } from "@/lib/types";

type AceFormGroupProps = {
  state: TAcedamicDetails;
  inputHandeler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  invalidinput: string[];
};

export default function AceFormGroup({
  state,
  inputHandeler,
  invalidinput,
}: AceFormGroupProps) {
  return (
    <>
      <div className="">
        <label htmlFor="Grade" className="block mb-1 font-bold form-label">
          Grade
        </label>
        <input
          type="text"
          className={
            "w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control" +
            (invalidinput.includes("Grade") ? " is-invalid" : "")
          }
          placeholder="Enter Grade/class Name... "
          id="Grade"
          defaultValue={state.Grade}
          onChange={inputHandeler}
        />
        <div id="GradeFeedback" className="invalid-feedback">
          Grade can not be empty .
        </div>
      </div>
      <div className="">
        <label htmlFor="Term" className="block mb-1 font-bold form-label">
          Term
        </label>
        <input
          type="text"
          className={
            "w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control" +
            (invalidinput.includes("Term") ? " is-invalid" : "")
          }
          placeholder="Term/Semester..."
          id="Term"
          defaultValue={state.Term}
          onChange={inputHandeler}
        />
        <div id="TermFeedback" className="invalid-feedback">
          Term can not be empty .
        </div>
      </div>

      <div className="">
        <label htmlFor="SchoolYear" className="block mb-1 font-bold form-label">
          Acedamic Year
        </label>
        <input
          type="text"
          className={
            "w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control" +
            (invalidinput.includes("SchoolYear") ? " is-invalid" : "")
          }
          placeholder="Aceademic Year..."
          id="SchoolYear"
          defaultValue={state.SchoolYear}
          onChange={inputHandeler}
        />
        <div id="SchoolYearFeedback" className="invalid-feedback">
          Acedamic Year can not be empty .
        </div>
      </div>
      <div className="">
        <label
          htmlFor="ClassTeacherName"
          className="block mb-1 font-bold form-label"
        >
          Class Teacher Name
        </label>
        <input
          type="text"
          className={
            "w-full px-4 py-3 font-medium rounded-lg shadow-sm focus:outline-none focus:shadow-outline form-control" +
            (invalidinput.includes("ClassTeacherName") ? " is-invalid" : "")
          }
          placeholder="Class Teacher name..."
          id="ClassTeacherName"
          defaultValue={state.ClassTeacherName}
          onChange={inputHandeler}
        />
        <div id="ClassTeacherNameFeedback" className="invalid-feedback">
          Class Teacher Name can not be empty .
        </div>
      </div>
    </>
  );
}
