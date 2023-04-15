export const selectShow=(show)=>{
     
   return{
        type:'SELECT_SHOW',
        payload:show
   } 
}

export const addToFavorite=(show)=>{
   return{
        type:'ADD_TO_FAVORITE',
        payload:show
   } 
}

export const addToWatchLater=(show)=>{
   return{
        type:'ADD_TO_WATCH_LATER',
        payload:show
   } 
}

export const addToViewed=(show)=>{
   return{
        type:'ADD_TO_VIEWED',
        payload:show
   } 
}


export const setGenresShows=(genres)=>{
   return{
        type:'SET_GENRES_SHOWS',
        payload:genres
   } 
}
