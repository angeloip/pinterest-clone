import { useState } from 'react'
import { usePhotoStore } from '../store/photoStore'
import { Logo, SearchIcon } from './Icons'

export default function Header() {
  const [query, setQuery] = useState('')
  const updateValue = usePhotoStore((state) => state.updateValue)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    updateValue(query)
  }
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
          <form className="w-full" onSubmit={handleSubmit}>
            <input
              type="search"
              className="w-full pr-3 outline-none"
              placeholder="Buscar..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
              }}
            />
          </form>
        </li>
        <li className="p-2 font-semibold">
          <a href="">Angelo</a>
        </li>
      </ul>
    </header>
  )
}
