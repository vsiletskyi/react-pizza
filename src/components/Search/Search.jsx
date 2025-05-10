import React, { useCallback, useContext, useRef, useState } from 'react'
import debounce from 'lodash.debounce'
import { SearchContext } from '../../App'

import styles from './Search.module.scss'

const Search = () => {
    const [value, setValue] = useState('')
    const { setSearchValue } = useContext(SearchContext)
    const inputRef = useRef()
    
    const onClickClear = () => {
      setSearchValue('')
      setValue('')
      inputRef.current.focus()
    }
  
    const updateSearchValue = useCallback(
      debounce((str) => {
        setSearchValue(str)
      }, 1000),
      []
    )
  
  
    const onChangeInput = (e) => {
      setValue(e.target.value)
      updateSearchValue(e.target.value)
    }

    return (
      <div className={styles.root}>
          <svg className={styles.icon} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/></svg>
          <input
              ref={inputRef}
              onChange={onChangeInput}
              className={styles.input}
              placeholder="Search ..."
              value={value}
          />
          {value &&
          <svg onClick={onClickClear}
            className={styles.clearIcon}
            height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" /><path d="M0 0h48v48H0z" fill="none" /></svg>} 
    </div>
  )
}

export default Search;
