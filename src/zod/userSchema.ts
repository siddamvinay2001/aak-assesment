import { data } from "react-router-dom";
import { z } from "zod";

export const userSchema = z.object({
    userType: z.enum(["researcher", "investor", "institution_staff", "service_provider"], {
        required_error: "Please select one of user types"
    }),
    email: z.string().email("Please enter valid email address"),
    firstName: z.string().min(3, "First Name of minimum of 3 characters required"),
    username: z.string().min(4, "Username of minimum of 4 characters required"),
    lastName: z.string().min(3, "Last of minimum of 4 characters required"),
    createPassword: z.string().min(6, "Password of minimum of 6 characters required"), //can add regex if needed a strong password
    confirmPassword: z.string(),
    country: z.string().min(1, "Please select a country")
}).refine((data) => data.createPassword === data.confirmPassword, {
    message: "Passwords donot match",
    path: ['confirmPassword']
})