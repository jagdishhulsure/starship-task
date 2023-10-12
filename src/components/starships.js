import {
    Row,
    Col,
    Button
  } from 'react-bootstrap';
  
  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import trophy from '../assets/images/cup.png'; 
  function Starships() {
    const [isLoading, setLoading] = useState(true);
    const [starWarsDataStarships, setStarWarsDataStarships] = useState();
    const [urlStarships, setUrlStarships] = useState(
      `https://swapi.dev/api/starships/?page=1`
    );
  
    useEffect(() => {
      axios.get(urlStarships).then((response) => {
        setStarWarsDataStarships(response.data);
        setLoading(false);
      });
    }, [urlStarships]);
  
    if (isLoading) {
      return (
        <div className="overlay" >
          <h2>Please wait...</h2>
        </div>
      );
    }
 
    var indexOfMaxValue = starWarsDataStarships.results.filter((crew) =>  parseInt(crew) < 10).reduce((acc, currentValue, i, arr) => currentValue.films.length > arr[acc] ? i : acc, 0);
     
    const allStarshipsOnPage = starWarsDataStarships.results.map((starship, i) => {
    
        return (
          
          <Col key={i} className='col-wrapper'>
            <div className='col-inner-one'>
              <h3>{starship.name} {indexOfMaxValue === i && <img src={trophy} alt="Starships" /> }</h3> 
            </div>
            <div className='col-inner-two'>
              <Row>
                <Col>
                  <div className='model-heading'> Model</div>
                  <div className='model-name'> {starship.model}</div>
                </Col>
                <Col>
                  <div className='no-of-films'> Number of films</div>
                  <div className='films-count'>{starship.films.length}</div>
                   
                </Col>
              </Row>
            </div>
          </Col>
        );
    
    });
  
    return (
      <div>
        <Button
          onClick={previousPage}
          disabled={starWarsDataStarships.previous ? false : true}
        >
          Previous
        </Button>
        <Button
          onClick={nextStarshipsPage}
          disabled={starWarsDataStarships.next ? false : true}
        >
          Next
        </Button>
  
        {allStarshipsOnPage}
      </div>
    );
  
    function nextStarshipsPage() {
      setLoading(true);
      setUrlStarships(starWarsDataStarships.next);
    }
  
    function previousPage() {
      setLoading(true);
      setUrlStarships(starWarsDataStarships.previous);
    }
  }
  
  export default Starships;
  