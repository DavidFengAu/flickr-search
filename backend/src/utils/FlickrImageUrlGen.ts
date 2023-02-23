import type { FlickrPhotoProps } from "../controllers/requests/FlickrRequest"

const FlickrImageUrlGen = (photo: FlickrPhotoProps): FlickrPhotoProps & { url: string } => ({
  ...photo,
  url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
})

export default FlickrImageUrlGen