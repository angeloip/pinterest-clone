export interface Photo {
  id: number
  width: number
  urls: { large: string; regular: string; raw: string; small: string }
  color: string | null
  user: {
    username: string
    name: string
    profile_image: {
      small: string
      medium: string
      large: string
    }
  }
  description: string
}
