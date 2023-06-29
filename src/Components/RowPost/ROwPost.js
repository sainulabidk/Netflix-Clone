import React , {useEffect, useState} from 'react'
import './ROwPost.css'
import Youtube from 'react-youtube';
import axios from '../../axios';
import {  ImageUrl,API_KEY } from '../../Constants/Constants';
function ROwPost(props) {
  const [Movies, setsetMovies] = useState([])
  const [urlid, seturlid] = useState('')
  useEffect(() => {
    axios.get(props.url).then (response =>{
      console.log(response.data)
      setsetMovies(response.data.results)
    }).catch(err=>{
      alert('Network error')
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
  const handleMovie = (id)=>{ 
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
     if(response.data.results.length!==0){
      seturlid(response.data.results[0])
     }else{
      console.log("trailer not avilable");
     }
    })
  }
  return (
    <div className='row'>
   <h2 >{props.title}</h2>
   <div className='posters'>
    {Movies.map((obj)=>
      <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt="Poster" src={`${ImageUrl + obj.backdrop_path}`}  />

     )}
   </div>
  { urlid && <Youtube opts={opts} videoId={urlid.key} />  }
    </div>
  )
}

export default ROwPost