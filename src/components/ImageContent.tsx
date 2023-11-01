import { useEffect, useState, useRef } from 'react'
import { createApi } from 'unsplash-js'
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from './Card'
import { type Basic } from 'unsplash-js/dist/methods/photos/types'
import { usePhotoStore } from '../store/photoStore'

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: import.meta.env.VITE_ACCESSKEY
})

export default function ImageContent() {
  const [data, setData] = useState<Basic[] | undefined | null>(null)
  const page = useRef(1)
  const [hasMore, setHasMore] = useState(true)
  const value = usePhotoStore((state) => state.value)

  const fetchData = () => {
    if (data == null) return
    if (page.current > 2) {
      setHasMore(false)
      return
    }
    page.current += 1
    api.search
      .getPhotos({ query: value, perPage: 20, page: page.current })
      .then((result) => {
        setData(data.concat(result.response?.results))
      })
      .catch(() => {
        console.log('something went wrong!')
      })
  }

  useEffect(() => {
    page.current = 1
    setHasMore(true)
    api.search
      .getPhotos({ query: value, perPage: 20, page: page.current })
      .then((result) => {
        setData(result.response?.results)
      })
      .catch(() => {
        console.log('something went wrong!')
      })
  }, [value])

  if (data == null) {
    return (
      <div className="text-2xl text-center mx-auto my-5">
        Initial Loading...
      </div>
    )
  }

  console.log(data)
  return (
    <div className="max-w-screen-2xl mx-auto">
      <InfiniteScroll
        next={fetchData}
        dataLength={data?.length ?? 0}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        style={{ overflow: 'none' }}
      >
        <section className="columns-2 sm:columns-3 md:columns-4 xl:columns-5 gap-3 md:gap-5 mx-auto space-y-3 pb-10 px-4">
          {data?.map((photo) => (
            <Card key={photo.id} photo={photo} />
          ))}
        </section>
      </InfiniteScroll>
    </div>
  )
}
