import { Auth } from "aws-amplify"
import axios from 'axios'
import * as _ from 'lodash'

import config from "../util/config"
import { PhotosSearchResponse } from "./requests/FlickrRequest"

class FlickrSearchApi {
  apiPath: string = config.FLICKR_SEARCH_WEB_URL

  private async getJwtToken(): Promise<string> {
    const session = await Auth.currentSession()
    if (!session) {
      return Auth.signOut()
    }
    const idToken = session.getIdToken()
    if (Math.floor((new Date()).getTime() / 1000) > idToken.getExpiration()) {
      return Auth.signOut()
    }
    return session.getIdToken().getJwtToken()
  }

  private loadByGet<T>(path: string, jwtToken?: string): Promise<T | undefined> {
    const headers = jwtToken ? { Authorization: `Bearer ${jwtToken}` } : undefined
    return axios({ url: `${this.apiPath}${path}`, headers, method: "GET", responseType: "json" })
      .then(response => response.data)
  }

  searchByTag(tags: string[]): Promise<PhotosSearchResponse | undefined> {
    const tagsQueryString = _.join(tags.map(tag => `tags=${tag}`), '&')
    return this.getJwtToken()
      .then(jwtToken => this.loadByGet<PhotosSearchResponse>(`/search?tag_mode=all&${tagsQueryString}`, jwtToken))
      .catch((err) => {
        console.error(err)
        return undefined
      })
  }
}

export default new FlickrSearchApi()