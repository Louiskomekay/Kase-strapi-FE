import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { useGlobalContext } from '../context';
import { useEffect } from 'react';

const SwitchIcon = () => {
    const { theme, toggleTheme } = useGlobalContext();

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <div className='switchIconContainer' onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? <BsMoonFill /> : <BsSunFill />}
        </div>
    )
}

export default SwitchIcon;
