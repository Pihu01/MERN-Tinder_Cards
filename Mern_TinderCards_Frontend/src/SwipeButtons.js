import React from 'react';
import "./SwipeButtons.css";
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons_repeat wt">
                <ReplayIcon fontSize="Large"/>
            </IconButton>
            <IconButton className="swipeButtons_left wt">
                <CloseIcon  fontSize="Large"/>
            </IconButton>
            <IconButton className="swipeButtons_star wt">                         
            <StarRateIcon fontSize="Large"/>
            </IconButton>
            <IconButton className="swipeButtons_right wt">
            <FavoriteIcon fontSize="Large"/>
            </IconButton>
            <IconButton className="swipeButtons_lightning wt">
            <FlashOnIcon fontSize="Large"/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
