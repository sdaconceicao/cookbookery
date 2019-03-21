export function convertObjectToQueryString(object){
    if(!object) return null;
    let queryString = '?';
    Object.keys(object).map(key=>{
        queryString+=`${key}=${object[key]}&`;
    });

    return queryString.substr(0, queryString.length-1);
}