import { useThemeContext } from "../Context/ThemeContext";

function Nav() {
    const { toggleTheme, setLight, setDark } = useThemeContext();

    return (
        <div>
            <nav>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <button onClick={setLight}>Light</button>
                <button onClick={setDark}>Dark</button>
            </nav>
        </div>
    )
}

export default Nav
