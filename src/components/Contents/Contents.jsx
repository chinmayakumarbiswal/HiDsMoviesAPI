import React, { useEffect, useState } from "react"
import './Contents.css'

const Contents = () => {

    const [allvideos, setVideos] = useState([])

    const fetchAPIData = () => {
        fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/db")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setVideos(data.movies)
            console.log(data.movies)
        })
    }

    useEffect(() => {
        fetchAPIData()
    }, [])  
  return (
    <div className="content">
        {allvideos.length > 0 && (
            <div className="videos">
                
                {allvideos.map(videosdata => (
                    <div className="video">
                        <a href="https://chinmayakumarbiswal.in/">
                            <div className="thumbnail">
                                <img src={videosdata.Poster} alt="" />
                            </div>
                        </a>

                        <div className="details">
                            <div className="author">
                                <img src={videosdata.Poster} alt="" />
                            </div>
                            <div className="title">
                                <h3>{videosdata.Title}</h3>
                                <span>Year of Post {videosdata.Year} </span>
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        )}
    </div>
    
  )
}

export default Contents