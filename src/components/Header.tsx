const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <svg width={24} height={24} aria-hidden="true" fill="#e60023">
        <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12" />
      </svg>
      <div>
        <h2 className="text-red-700 font-semibold text-xl">Pinterest</h2>
      </div>
    </div>
  )
}

const SearchIcon = () => {
  return (
    <svg
      height="16"
      width="16"
      viewBox="0 0 24 24"
      aria-label="Buscar"
      role="img"
      fill="#5f5f5f"
    >
      <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24"></path>
    </svg>
  )
}
export default function Header() {
  return (
    <header className="p-4">
      <ul className="flex justify-center items-center list-none text-center gap-4">
        <li className="p-2">
          <a href="">
            <Logo />
          </a>
        </li>
        <li className="p-2 font-semibold">
          <a href="">Hoy</a>
        </li>
        <li className="p-2 font-semibold">
          <a href="">Explorar</a>
        </li>
        <li className="grow-[20] flex items-center border-2 border-gray-300 rounded-full py-2 overflow-hidden">
          <div className="px-3">
            <SearchIcon />
          </div>
          <input
            type="search"
            className="w-full pr-3 outline-none"
            placeholder="Buscar..."
          />
        </li>
        <li className="p-2 font-semibold">
          <a href="">User</a>
        </li>
      </ul>
    </header>
  )
}
