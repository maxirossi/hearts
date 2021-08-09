import React, {useState} from "react";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import '../components/Heart.css';

function Heart(props) {
    
const [liked,updateLiked] = useState(props.liked);
const id = props.id;

const updateStatus = () => {
    updateLiked(!liked);
    props.reaccionar(id, liked);
}

    return(
        <div className="heartContainer" key={props.id}>
            { (liked === true ) ? ( <FavoriteIcon color="primary" onClick={updateStatus} data-id={props.id} /> )  : <FavoriteBorderIcon color="primary" onClick={updateStatus} data-id={props.id} />  }
        </div>
    )
}

export default Heart;