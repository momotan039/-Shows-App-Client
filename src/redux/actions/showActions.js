export const selectShow=(show)=>{
     
   return{
        type:'SELECT_SHOW',
        payload:show
   } 
}

export const setGenresShows=(genres)=>{
   return{
        type:'SET_GENRES_SHOWS',
        payload:genres
   } 
}
