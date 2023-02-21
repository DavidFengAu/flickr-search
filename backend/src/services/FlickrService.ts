import type { SearchPhotosRequest } from "../controllers/requests/FlickrRequest"

const Flickr = require("flickr-sdk")

class FlickrService {
    constructor(
      private readonly flickr: typeof Flickr
    ) {
    }

    searchPhotos(req: SearchPhotosRequest) {
      return this.flickr.photos.search(req)
        .then((res: Response) => res.body)
    }
}

export default FlickrService