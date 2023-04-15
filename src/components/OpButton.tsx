export const OpButton = () => (
    <div className="flex relative outline-none text-md w-full overflow-hidden h-full">
        <input type="checkbox" className="peer/positive absolute top-0 w-full h-full opacity-0 z-20" name="positive" />
        <div className="peer-checked/positive:bg-emerald-600 bg-rose-600 absolute top-0 left-0 w-full bottom-0 flex justify-center align-middle" />
        <div className="flex-1 relative z-10 flex peer-checked/positive:hidden text-white left-0 w-full justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <div className="flex-1 relative z-10 hidden peer-checked/positive:flex text-white left-0 w-full justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    </div>
)