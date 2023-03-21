
export const setTagsUtil = (tags: Array<string>) =>{
  const tagsJson = localStorage.getItem('tags');
  if(tagsJson){
    localStorage.setItem('tags', JSON.stringify([...JSON.parse(tagsJson), ...tags]));
  } else {
    localStorage.setItem('tags', JSON.stringify(tags));
  }
}

export const getTagsUtil = () =>{
  const tags = localStorage.getItem('tags')
  return tags ? JSON.parse(tags) : [];
}

