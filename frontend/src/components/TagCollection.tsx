import { Button, Collection, Text } from "@aws-amplify/ui-react"
import * as _ from "lodash"
import React from "react"

interface ITagCollection {
  tags: string[]
  setTags: React.Dispatch<React.SetStateAction<string[]>>
}

const TagCollection: React.FC<ITagCollection> = ({ tags, setTags }) => {
  return (
    <>
      <Text lineHeight="1.5em">Tags (click to remove):</Text>
      <Collection
        items={tags}
        type="list"
        direction="row"
        gap="10px"
        wrap="wrap"
      >
        {(tag, index) => (
          <Button
            key={index}
            size="small"
            onClick={() => setTags(prev => _.without(prev, tag))}
            data-testid="tag-button"
          >
            {tag}
          </Button>
        )}
      </Collection>
    </>
  )
}

export default TagCollection