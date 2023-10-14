
import { z } from "zod";



// Input validation schema

export const SchoolDetailSchema = z.object({
  schoolname: z.string().min(3).max(50),
  SchoolAddress: z.string().min(3).max(50),
  SchoolEmail: z.string().email(),
  SchoolPhone: z.string().min(12).max(12),
})



export const AcedamicDetailSchema = z.object({
  Grade: z.string().min(1).max(50),
  Term: z.string().min(1).max(50),
  SchoolYear: z.string().min(1).max(50),
  ClassTeacherName: z.string().min(1).max(50),
})

export const StudentDataschema = z.object({
  file: z.instanceof(File).refine((File) => File.type === "application/vnd.ms-excel", { message: "Invalid file type" }),
})
