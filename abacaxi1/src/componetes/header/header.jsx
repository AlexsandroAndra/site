import { MoonIcon } from '@heroicons/react/24/solid'
import ToggleTheme from '../Toggle'

const Header = ({ user }) => {
    return <div className="flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">

        <span className="text-gray-100">Olá {user?.name || "Usúario"}</span>
        <h1 className="text-gray-100 text-xl sm:hover:text-3xl:sm">Alura Newletter</h1>
        <ToggleTheme />

    </div>
}
export default Header 