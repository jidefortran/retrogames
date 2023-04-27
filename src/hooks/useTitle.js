import {useEffect} from 'react'

export const useTitle = (title) => {
    useEffect(() => {
      document.title=`${title} | Mockbook`
    
   
    }, [title])
    
  return null
}
