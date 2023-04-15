export enum TabsEnum {
    Transact = "transact",
    Transfer = "transfer",
}

type Props = {
    value: TabsEnum
}

const LinkTab: React.FC<Props & { active: boolean }> = ({ value, active }) => active ? (
    <div className="border-b-2 border-indigo-600 p-3 text-indigo-600 flex-1 text-center">
        {value}
    </div>
) : (
    <a className="border-b-2 border-white hover:border-indigo-400 p-3 hover:text-indigo-400 flex-1 text-center" href={`/${value}`}>
        {value}
    </a>
);

export const Header: React.FC<Props> = ({ value }) => (
    <>
        <header className="p-1 bg-indigo-600 text-white text-center font-light text-sm">
            Fin<span className="font-bold">Tckr</span>
        </header>
        <nav className="flex shadow-md">
           <LinkTab value={TabsEnum.Transact} active={value == TabsEnum.Transact} />
           <LinkTab value={TabsEnum.Transfer} active={value == TabsEnum.Transfer} />
        </nav>
    </>
)