import { SearchField } from "@aws-amplify/ui-react"
import * as _ from 'lodash'
import React, { useState } from "react"

interface ISearchBarProps {
  setTags: React.Dispatch<React.SetStateAction<string[]>>
  isLoading: boolean
}

const SearchBar: React.FC<ISearchBarProps> = ({ setTags, isLoading }) => {
  const [value, setValue] = useState<string>("")

  const handleSubmit = (newTag: string) => {
    if (newTag) {
      setTags(prev => _.uniq([...prev, newTag]))
    }
    setValue("")
  }

  return (
    <SearchField
      label="Search"
      value={value}
      disabled={isLoading}
      placeholder="Search tags..."
      onChange={(inputEL) => setValue(inputEL.target.value)}
      onSubmit={handleSubmit}
      onClear={() => setValue("")}
      data-testid="search-bar"
    />
  )
}

export default SearchBar