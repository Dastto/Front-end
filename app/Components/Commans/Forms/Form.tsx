import React, { type FormEvent } from "react";
import logo from "~/Components/Commans/Header/Logo";
import { z, type ZodRawShape } from "zod";
import toast from "react-hot-toast";

interface FormProps {
  children: React.ReactNode;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  className?: string;
  validate: object;
}

const Form: React.FC<FormProps> = ({
  children,
  onSubmit,
  className = "w-full",
  validate,
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    const dataSchema = z.object(validate as ZodRawShape);
    const validateStatus = dataSchema.safeParse(formValues);

    if (validateStatus.success) {
      toast.success("همه چی حله!");
    } else {
      toast.error("یه مشکلی هست!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
};

export default Form;
