import { useThemeContext } from "../Context/ThemeContext";

export default function ThemeView() {
  const { theme } = useThemeContext();

  return (
    <aside>
      Your current theme is <span>{theme}</span>
    </aside>
  );
}