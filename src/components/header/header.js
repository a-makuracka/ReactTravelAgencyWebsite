import './header_style.css'
import { useDispatch } from 'react-redux'

export const Header = () => {
    const dispatch = useDispatch();
    return (
        <div className="header">
            <img className='logo' src="https://uploads-ssl.webflow.com/5ea4a389088154f012b2dee8/5ebc3cfab46b18972225620e_Logo.svg" alt="logo"></img>
            <button onClick={() => {
                            dispatch({
                                type: "main",
                                // properties: props.id
                            })
                        }}>
                Wycieczki lotnicze
            </button>
            <button onClick={() => {
                            dispatch({
                                type: "main",
                                // properties: props.id
                            })
                        }}>
                Wycieczki autokarowe
            </button>
            <button onClick={() => {
                            dispatch({
                                type: "main",
                                // properties: props.id
                            })
                        }}>
                Wycieczki kosmiczne
            </button>
        </div>
    )
}