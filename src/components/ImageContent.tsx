import { useEffect, useState } from 'react'
import { createApi } from 'unsplash-js'
import { type ApiResponse } from 'unsplash-js/dist/helpers/response'
import { type Photos } from 'unsplash-js/dist/methods/search/types/response'
import Image from './Image'
import Masonry from '@mui/lab/Masonry'

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: 'i7nCOjx2a0xRyXA8fMZ8ruJpgrfms0Smw32JSdfoHrY'
})

export default function ImageContent() {
  const [data, setData] = useState<ApiResponse<Photos> | null>(null)

  useEffect(() => {
    api.search
      .getPhotos({ query: 'cat' })
      .then((result) => {
        setData(result)
      })
      .catch(() => {
        console.log('something went wrong!')
      })
  }, [])

  if (data === null) {
    return <div className="text-2xl text-center mx-auto my-5">Loading...</div>
  } else if (data.errors != null && data.errors !== undefined) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    )
  }

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Masonry columns={5} spacing={3}>
        {data.response.results.map((photo) => (
          <Image key={photo.id} photo={photo} />
        ))}
      </Masonry>
    </div>
  )
}
