import React, {useState} from "react";
import Heart from "./Heart";

function Content(props)
{
    return(
        <div className="appContainer">
            {
                props.hearts.map((heart) => {
                    return <Heart reaccionar={props.onClickHeart} id={heart.id} liked={heart.liked}></Heart>
                })
            }
        </div>
    )
}

export default Content;