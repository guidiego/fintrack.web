import type { ButtonHTMLAttributes } from "react";

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, ...props }) => (
    <button className={className + " rounded-md outline-none text-md p-4 w-full bg-indigo-600 text-white shadow-md text-sm uppercase font-semibold"} {...props} />
)