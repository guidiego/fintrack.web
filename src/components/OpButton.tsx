export const OpButton = () => (
    <div className="flex-1 relative rounded-md outline-none text-md p-4 w-full overflow-hidden shadow-md">
        <input type="checkbox" className="peer/positive absolute top-0 w-full h-full opacity-0 z-10" name="positive" />
        <div className="peer-checked/positive:bg-green-500 bg-red-500 absolute top-0 left-0 w-full bottom-0 flex justify-center align-middle" />
        <div className="absolute flex peer-checked/positive:hidden text-white left-0 w-full justify-center pr-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <div className="absolute hidden peer-checked/positive:flex text-white left-0 w-full justify-center pr-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    </div>
)