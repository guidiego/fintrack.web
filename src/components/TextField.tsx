import type { InputHTMLAttributes } from "react"

type Props = {
    label: string
} & InputHTMLAttributes<HTMLInputElement>

export const TextField: React.FC<Props> = ({ label, ...props }) => (
    <label className="flex flex-col-reverse">
        <div className="rounded-md shadow-md overflow-hidden">
            <input className="p-4 w-full text-md outline-none appearance-none" {...props} />
        </div>
        <span className="text-slate-700 text-xs uppercase mb-1">{label}</span>
    </label>
)