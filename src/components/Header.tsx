export enum TabsEnum {
    Transact = "transact",
    Transfer = "transfer",
}

type Props = {
    value: TabsEnum
}

const LinkTab: React.FC<Props & { active: boolean }> = ({ value, active }) => active ? (
    <div className="border-b-2 border-teal-600 p-3 text-teal-600 flex-1 text-center">
        {value}
    </div>
) : (
    <a className="border-b-2 border-white hover:border-teal-400 p-3 hover:text-teal-400 flex-1 text-center" href={`/${value}`}>
        {value}
    </a>
);

export const Header: React.FC<Props> = ({ value }) => (
    <>
        <header className="p-1 bg-teal-600 text-white text-center text-sm">
            Fin<span className="font-semibold">Tckr</span>
        </header>
        <nav className="flex shadow-md">
           <LinkTab value={TabsEnum.Transact} active={value == TabsEnum.Transact} />
           <LinkTab value={TabsEnum.Transfer} active={value == TabsEnum.Transfer} />
        </nav>
    </>
)