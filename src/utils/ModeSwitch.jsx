import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import styled from 'styled-components'
import { useGlobalContext } from '../context';

const ModeSwitch = () => {
    const { theme, toggleTheme } = useGlobalContext();

    return (
        <Wrapper>
            <div className='switch-container'>
                <input
                    className='dark_mode_input'
                    type='checkbox'
                    id='darkmode-toggle'
                    onChange={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
                />
                <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                    <BsSunFill className='icon sun' />
                    <BsMoonFill className='icon moon' />
                </label>
            </div>
        </Wrapper>
    )
}

export default ModeSwitch

const Wrapper = styled.div`
.switch-container{
    display: grid;
    place-items: center;
}
    .dark_mode_label {
        width: 65px;
        height: 30px;
        position: relative;
        display: block;
        background: #ebebeb;
        border-radius: 200px;
        box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
        inset 0px -5px 15px rgba(255, 255, 255, 0.4);
        cursor: pointer;
        transition: var(--smooth);
    }
    .dark_mode_label:after {
        content: "";
        width: 25px;
        height: 25px;
        position: absolute;
        top: 3px;
        left: 3px;
        background: linear-gradient(180deg, #ffcc89, #d8860b);
        border-radius: 180px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
        transition: var(--smooth);
    }
    .dark_mode_input {
        width: 0;
        height: 0;
        visibility: hidden;
    }
    .dark_mode_input:checked + .dark_mode_label {
        background: #242424;
    }
    .dark_mode_input:checked + .dark_mode_label:after {
        left: 62px;
        transform: translateX(-100%);
        background: linear-gradient(180deg, #777, #3a3a3a);
    }
    .dark_mode_label:active:after {
        width: 30px;
    }
    .dark_mode_label .icon {
        position: absolute;
        width: 20px;
        top: 5px;
        z-index: 100;
    }
    .dark_mode_label .icon.sun {
        left: 5px;
        top: 7px;
        fill: #fff;
        transition: var(--smooth);
    }
    .dark_mode_label .icon.moon {
        left: 40px;
        top: 7px;
        fill: #7e7e7e;
        transition: var(--smooth);
    }
    .dark_mode_input:checked + .dark_mode_label .icon.sun {
        fill: #7e7e7e;
    }
    .dark_mode_input:checked + .dark_mode_label .icon.moon {
        fill: #fff;
    }
`