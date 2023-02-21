import { RequestBodyValidator } from "../main/middlewares/RequestBodyValidator"
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
    this.router.post("/",
      RequestBodyValidator(SearchPhotosRequestValidate),
      async (req, res) => {
        const result = await this.flickrService.searchPhotos(req.body as SearchPhotosRequest)
        res.send(result)
      })
  }
}

export default SearchController