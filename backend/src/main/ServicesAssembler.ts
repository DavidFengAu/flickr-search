import FlickrService from "../services/FlickrService"
import type { ExternalResources } from "./ExternalResourcesBuilder"

class ServicesAssembler {
  constructor(
    private readonly externalResources: ExternalResources,
  ) {
  }

  private flickrService?: FlickrService
  getFlickrService(): FlickrService {
    if (!this.flickrService) {
      this.flickrService = new FlickrService(this.externalResources.flicker)
    }
    return this.flickrService
  }
}

export default ServicesAssembler