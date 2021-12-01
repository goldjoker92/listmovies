import React, {useState} from 'react'
import  {movies$} from'../assets/movies.js'
import './Cards.css'


const Cards = () => {

   const [movies, setMovies] = useState([
   {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    likes: 16,
    dislikes: 2
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 11,
    dislikes: 3
  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    likes: 2,
    dislikes: 1
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    likes: 2,
    dislikes: 1
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12
  },              
      ])

    // console.log(movies)

/* Suppression d'une carte */

  const removeItem = index => {
    alert("Attention Vous allez supprimer un film");
    const movieDetails = movies;
    movies.splice(index, 1);
    setMovies([...movieDetails])
  }

  /*Toggle like & Dislikes */

  const [active, setActive] = useState (false);
  const toggleActive = () => setActive (prevState => !prevState);
  
    return (
        <div className="containe">
            {
            movies.map((movieDetails,index)=> {
              // console.log(index)
             
            return (
                
                 <div data-testid="card" className="card">

                   <div  className="card-body">
                      <button className="btn-fermer" onClick = {()=> removeItem(index)}>Close</button>
                      <h6 className="card-id"key={movieDetails.id + index}>ID:{movieDetails.id}</h6>
                      <p className="card-title"><strong>{movieDetails.title}</strong></p>
                      <p className="card-category">Catégorie: {movieDetails.category}</p>
                      <p className={active ? "card-dislike active":"card-like active"}> Like count :{movieDetails.likes}</p>
                      <p className={active ? "card-dislike active":"card-like active"}> Dislike count :{movieDetails.dislikes}</p>
                    </div>
                     <button className="card-button" onClick = {()=> toggleActive(index)}>Toggle Likes and Dislikes</button>
                   </div>     
            );
            })}           
        </div>
         
    )};

      
export default Cards
