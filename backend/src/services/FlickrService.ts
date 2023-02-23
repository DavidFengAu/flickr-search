import * as _ from 'lodash'

import type {
  FlickrPhotosSearchResponse,
  PhotosSearchResponse,
  SearchPhotosRequest
} from "../controllers/requests/FlickrRequest"
import FlickrImageUrlGen from "../utils/FlickrImageUrlGen"

const Flickr = require("flickr-sdk")

class FlickrService {
  constructor(
    private readonly flickr: typeof Flickr
  ) {
  }

  photosSearch(req: SearchPhotosRequest): Promise<PhotosSearchResponse> {
    return this.flickr.photos
      .search({
        ...req,
        tags: _.isArray(req.tags) ? _.join(req.tags, ',') : req.tags
      })
      .then((res: Response) => res.body)
      .then((res: FlickrPhotosSearchResponse) => ({
        ...res,
        photos: {
          ...res.photos,
          photo: res.photos.photo.map(FlickrImageUrlGen)
        }
      }))
  }
}

export default FlickrService