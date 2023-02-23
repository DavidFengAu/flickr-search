export type FlickrPhoto = {
  id: string
  title: string
  url: string
}

export type PhotosSearchResponse = {
  photos: {
    page: number,
    pages: number,
    perpage: number,
    total: number
    photo: FlickrPhoto[]
  },
  stat: string
}
