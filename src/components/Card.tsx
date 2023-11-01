import { type Basic } from 'unsplash-js/dist/methods/photos/types'
import { DotsIcon, UploadIcon } from './Icons'

export default function Card({ photo }: { photo: Basic }) {
  return (
    <div className="break-inside-avoid">
      <figure className="relative group">
        <img
          src={photo.urls.small}
          alt={photo.description ?? ''}
          className="w-full object-cover rounded-xl group-hover:brightness-75 "
        />
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-full absolute right-3 top-3 hidden group-hover:block">
          Guardar
        </button>
        <div className="absolute bottom-3 right-3 items-center gap-3 hidden group-hover:flex group-hover:gap-3">
          <button className="bg-gray-300 rounded-full p-2 hover:bg-gray-200">
            <UploadIcon />
          </button>
          <button className="bg-gray-300 rounded-full p-2 hover:bg-gray-200">
            <DotsIcon />
          </button>
        </div>
      </figure>
      <p className="line-clamp-2 my-1 font-medium text-sm">
        {photo.description}
      </p>
      <div className="flex items-center gap-2">
        <img
          src={photo.user.profile_image.small}
          alt={photo.user.name}
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="text-gray-500 text-sm">{photo.user.username}</span>
      </div>
    </div>
  )
}
