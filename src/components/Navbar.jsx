import { useState, useEffect } from "preact/hooks";

// Nama-nama tema dari daisyUI
const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

// Ikon Theme untuk menggantikan teks 'Theme'
const ThemeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M12 3v1M12 20v1M4.22 4.22l.71.71M19.07 19.07l.71.71M1 12h1M22 12h1M4.22 19.78l.71-.71M19.07 4.93l.71-.71M12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14z" />
  </svg>
);

// Ikon centang untuk tema aktif
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

// Komponen Navbar
export default function Navbar() {
  const [currentTheme, setCurrentTheme] = useState("light");

  // Load theme dari localStorage saat komponen di-mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
      setCurrentTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const changeTheme = (theme) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("selectedTheme", theme); // Simpan tema ke localStorage
  };

  return (
    <div className="navbar bg-base-100 w-full max-h-2 z-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl pl-2">School Bell</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost m-1">
            <ThemeIcon />
          </label>
          <div
            tabIndex={0}
            className="dropdown-content bg-base-100 p-2 text-base-content rounded-box top-px h-[28.6rem] max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 mt-16 z-50"
          >
            {themes.map((theme) => (
              <button
                key={theme}
                className="btn w-full text-left mb-2 capitalize flex justify-between items-center"
                data-theme={theme}
                onClick={() => changeTheme(theme)}
              >
                <div className="flex items-center space-x-2">
                  {/* Tampilkan ikon centang jika tema saat ini sama dengan tema yang dipilih */}
                  {currentTheme === theme && <CheckIcon />}
                  <span>{theme}</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-4 rounded-full bg-primary" />
                  <div className="w-2 h-4 rounded-full bg-secondary" />
                  <div className="w-2 h-4 rounded-full bg-accent" />
                  <div className="w-2 h-4 rounded-full bg-neutral" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
