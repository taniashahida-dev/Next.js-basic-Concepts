'use client'
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import {Check} from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();
const onSubmite =async(e)=>{
  e.preventDefault()
  const name = e.target.name.value
  const email = e.target.email.value
  const password = e.target.password.value
//   console.log(name,email,password)
const {data,error} =await authClient.signUp.email({
    name,email,password
},{
     onSuccess: () => {
            router.push("/")
        }
})
 console.log({ data, error });
}

    return (
       <Form className="flex w-96 flex-col gap-4 mx-auto border rounded-lg shadow-sm p-10 mt-20" onSubmit={onSubmite} >
      <TextField
        isRequired
        name="name"
        type="text"
       
      >
        <Label>Name</Label>
        <Input placeholder="Enter Your Name" />
        <FieldError/>
      </TextField>

      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError/>
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit">
          <Check/>
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
    );
};

export default SignUpForm;