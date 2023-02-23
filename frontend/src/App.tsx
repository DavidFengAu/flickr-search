import { Button, Grid, useTheme, View, WithAuthenticatorProps } from '@aws-amplify/ui-react'
import React, { useEffect, useState } from 'react'

import PhotoCollection from "./components/PhotoCollection"
import SearchBar from "./components/SearchBar"
import TagCollection from "./components/TagCollection"
import FlickrSearchApi from "./services/FlickrSearchApi"
import type { FlickrPhoto } from "./services/requests/FlickrRequest"

const App: React.FC<WithAuthenticatorProps> = ({ signOut, user }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [tags, setTags] = useState<string[]>([])
  const [photos, setPhotos] = useState<FlickrPhoto[]>([])

  useEffect(() => {
    if (tags.length) {
      setIsLoading(true)
      FlickrSearchApi.searchByTag(tags)
        .then(response => {
          if (response) {
            setPhotos(response.photos.photo)
          }
        })
        .finally(() => setIsLoading(false))
    }
  }, [tags])

  const { tokens } = useTheme()
  return (
    <Grid data-testid="app-grid" gap={tokens.space.small}>
      <View><h2>Hello {user?.attributes?.name},</h2></View>
      <View><SearchBar setTags={setTags} isLoading={isLoading} /></View>
      <View>{tags.length ? <TagCollection tags={tags} setTags={setTags} /> : null}</View>
      <View>{tags.length ? <PhotoCollection photos={photos} isLoading={isLoading} /> : null}</View>
      <View><Button onClick={signOut}>Sign out</Button></View>
    </Grid>
  )
}

export default App
