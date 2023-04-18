import { useState } from "react";

function usePagination() {
    const [pages, setPages] = useState(null);
    const [loading, setLoading] = useState(false);
    
  return [pages,setPages,loading,setLoading]
}

export default usePagination