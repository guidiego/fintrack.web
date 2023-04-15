import type { SelectHTMLAttributes } from "react"

type Props = {
    label: string
} & SelectHTMLAttributes<HTMLSelectElement>

export const Select: React.FC<Props> = ({ label, children, ...props }) => (
    <label className="flex flex-col-reverse">
        <div className="rounded-md shadow-md overflow-hidden">
            <select className="p-4 w-full outline-none text-md appearance-none bg-white" {...props}>
                {children}
            </select>
        </div>
        <span className="text-slate-700 text-xs uppercase mb-1">{label}</span>
    </label>
)