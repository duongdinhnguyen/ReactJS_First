import React, {useState, useEffect} from "react"

function Content() {

    const [img, setImg] = useState()

    useEffect(() => {
        return () => img && URL.revokeObjectURL(img)
    }, [img]) 

    const handleChange = (e) => setImg(URL.createObjectURL(e.target.files[0]))

  return ( 
    <div>
      <input type="file" onChange={handleChange}/>
      <img src={img}/>
    </div>
  )
}

export default Content;