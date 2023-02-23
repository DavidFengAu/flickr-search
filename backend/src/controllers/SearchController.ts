import { RequestQueryValidator } from "../main/middlewares/RequestQueryValidator"
import type FlickrService from "../services/FlickrService"
import Controller from "./Controller"
import { SearchPhotosRequest, SearchPhotosRequestValidate } from "./requests/FlickrRequest"

class SearchController extends Controller {
  prefix = "search"

  constructor(
    private readonly flickrService: FlickrService
  ) {
    super()
  }

  protected assembleRoutes(): void {
    this.router.get("/",
      RequestQueryValidator(SearchPhotosRequestValidate),
      async (req, res) => {
        const result = await this.flickrService.photosSearch(req.query as SearchPhotosRequest)
        res.send(result)
      })
  }
}

export default SearchController