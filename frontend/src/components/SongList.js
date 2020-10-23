import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SongListItem from "./SongListItem"


const SongList = (props) => {
    const {songs} = props;

return (
    <ul>
        {songs.map(item => 
        <SongListItem 
        rank={item.rank}
        title={item.title}
        artist={item.artist}
        streams={item.streams}
        publicationDate={item.publicationDate}/> 
        )}
    </ul>
)}



export default SongList;