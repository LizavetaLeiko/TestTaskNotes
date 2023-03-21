import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import { getTagsUtil } from '../../utils/tagsUtil';
import './styles/tags.sass'

const Tags = () =>{

  const [tags, setTags] = useState<Array<string>>();

  useEffect(() =>{
    setTags(getTagsUtil())
  }, [])
  
  return(
    <div className='tags' style={{display: tags ? 'flex' : 'none'}}>
      {
        tags?.map(item =>{
          return(
            <button key={uuidv4()}>{item}</button>
          )
        })
      }
    </div>
  )
}

export default Tags;