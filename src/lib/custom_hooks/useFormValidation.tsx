import { z, SafeParseReturnType, SafeParseError } from "zod";
import {
  AcedamicDetailSchema,
  SchoolDetailSchema,
  StudentDataschema,
} from "@/lib/schema";
import { TAcedamicDetails, TSchoolDetails } from "@/lib/types";
import { useState } from "react";

type TSchema =
  | typeof AcedamicDetailSchema
  | typeof SchoolDetailSchema
  | typeof StudentDataschema;

type Tdata = TAcedamicDetails | TSchoolDetails;

type Tvalidate = (schema: TSchema, data: Tdata) => boolean | z.ZodError;

export default function useFormValidation() {
  const [invalidinput, setInvalidinput] = useState<string[] | any>([]);

  const validate: Tvalidate = (schema, data) => {
    try {
      const check = schema.safeParse(data);

      if (!check.success) {
        const { error } = check as SafeParseError<TSchema>;

        setInvalidinput(error.issues.map((e) => e.path[e.path.length - 1]));
        return false;
      }

      setInvalidinput([]);
      return true;
    } catch (error) {
      return error;
    }
  };

  return [invalidinput, validate];
}
