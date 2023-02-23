import { Card, Collection, Image, Loader, Text } from "@aws-amplify/ui-react"
import React from "react"

import { FlickrPhoto } from "../services/requests/FlickrRequest"

interface IPhotoCollection {
  isLoading: boolean
  photos: FlickrPhoto[]
}

const PhotoCollection: React.FC<IPhotoCollection> = ({ isLoading, photos }) => {
  if (isLoading) {
    return <Loader size="large" variation="linear" data-testid="photo-loader" />
  }
  return (
    <Collection
      items={photos}
      type="list"
      direction="row"
      gap="20px"
      wrap="wrap"
      data-testid="photo-collection"
    >
      {(item) => (
        <Card
          key={item.id}
          borderRadius="medium"
          width="200px"
          variation="outlined"
          data-testid="photo-card"
        >
          <Image
            src={item.url}
            alt={item.title}
            title={item.title}
          />
          <Text as="p">{item.title}</Text>
        </Card>
      )}
    </Collection>
  )
}

export default PhotoCollection