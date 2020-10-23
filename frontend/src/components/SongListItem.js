import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";


const SongListItem = (props) => {
const {rank, title, artist, streams, publicationDate } = props;

return (
    <li>
        <Wrapper>
        <Rank>
            <p className="Ranknum">#{rank}</p> 
            <p className="streams">({streams} streams)</p>
        </Rank>
        <SongTitle>
            <p>{title}</p>
            <p className="artist">by {artist}</p>
        </SongTitle>
<PublicationDate>Publication Date : {publicationDate}</PublicationDate>
        </Wrapper>
    </li>
)

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



export default SongListItem;