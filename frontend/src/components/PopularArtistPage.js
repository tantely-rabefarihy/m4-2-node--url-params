import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";

const PopularArtistPage = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("/top50/popular-artist")
      .then((res) => res.json())
      .then((json) => {
        setSongs(json.data);
      });
  }, []);

  console.log("PopularArtistPage.js: songs: ", songs);

  return (
    <>
      <Header pageTitle="Most Popular Artist" />
      <ul>
{songs.map(item => 
<li> 
<Wrapper>
        <Rank>
            <p className="Ranknum">#{item.rank}</p> 
            <p className="streams">({item.streams} streams)</p>
        </Rank>
        <SongTitle>
            <p>{item.title}</p>
            <p className="artist">by {item.artist}</p>
        </SongTitle>
        <PublicationDate>Publication Date : {item.publicationDate}</PublicationDate>
</Wrapper>
</li>
)
}
    </ul>
    </>
  );
};


const Wrapper = styled.div`
display: flex;
flex-direction: row;
border-bottom: 1px solid black;
margin: 0 20px;
height: 100px;
`;

const Rank = styled.div`
flex:0.75;
align-self: flex-end;

.Ranknum{
    font-size:40px;
    
}

.streams {
    font-size:10px;
    margin-bottom:5px;
}
`;

const SongTitle = styled.div`
flex:4;
align-self: center;

.artist {
    font-style:italic;
    font-weight: lighter;
}

p {
    font-size: 22px;
}
`;

const PublicationDate = styled.div`
flex:1;
font-size:12px;
align-self: flex-end;
`;




export default PopularArtistPage;
