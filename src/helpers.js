export const paginateData = (data, offset, perPage) => {
  return data.slice(offset, offset + perPage);
}
  
export const filterData = (data, filters) => {
  const createRegexp = (value) => { return new RegExp('^' + value, 'i') };
  const doFilter = (data, field, value) => { 
    var re = createRegexp(value);
    return data.filter(function(item){
      if(item[field]){
        return item[field].match(re);
      }else{
        return false;
      }
    })
  };

  for (const [field, value] of Object.entries(filters)) {
    if(!value){
      continue;
    }

    data = doFilter(data, field, value)
  }
  return data;
}