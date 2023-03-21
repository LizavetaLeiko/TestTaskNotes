import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import { getTagsUtil } from '../../utils/tagsUtil';
import './styles/tags.sass'

interface ITags{
  handleFilter: (value: string) => any
}
const Tags = (props: ITags) =>{

  const [tags, setTags] = useState<Array<string>>();

  useEffect(() =>{
    setTags(getTagsUtil())
  }, [])
  
  return(
    <div className='tags' style={{display: tags ? 'flex' : 'none'}}>
      <button className='tags__reset' onClick={() => props.handleFilter('')}>reset</button>
      <div className='tags__container'>
        {
        tags?.map(item =>{
          return(
            <button onClick={() => props.handleFilter(item)} key={uuidv4()}>{item}</button>
          )
        })
        }
      </div>
    </div>
  )
}

export default Tags;