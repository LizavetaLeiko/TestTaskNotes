
const setTagsUtil = (tags: Array<string>) =>{
  const tagsJson = localStorage.getItem('tags');
  if(tagsJson){
    localStorage.setItem('tags', JSON.stringify([...JSON.parse(tagsJson), ...tags]));
  } else {
    localStorage.setItem('tags', JSON.stringify(tags));
  }
}

export default setTagsUtil;