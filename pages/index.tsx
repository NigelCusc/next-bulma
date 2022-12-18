import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// Set the string key and the initial value
const darkModeAtom = atomWithStorage("darkMode", false);

import Hero from "../components/hero/hero";

export default function Home() {
  // Consume persisted state like any other atom
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <>
      <Hero />
      <div className="test">
        <h1>Welcome to {darkMode ? "dark" : "light"} mode!</h1>
        <button className="button isPrimary" onClick={toggleDarkMode}>
          toggle theme
        </button>
      </div>
    </>
  );
}
