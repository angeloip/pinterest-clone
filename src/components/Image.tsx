import { type Photo } from '../types'

export default function Image({ photo }: { photo: Photo }) {
  return (
    <div>
      <div>
        <img
          src={photo.urls.small}
          alt={photo.description}
          className="w-full object-cover rounded-xl"
        />
      </div>
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
