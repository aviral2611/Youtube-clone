import React from 'react';
import './videoCard.css'
import Avatar  from "@material-ui/core/Avatar"
function videoCard({title,image,timestamp,views,channel,channelImage}) {
    return (
        <div className="videocard">
            <img className="videocard__thumbnail" src={image} alt="" ></img>
            <div className="videocard__info">
                <Avatar
                className="videocard__avatar"
                alt={channel}
                src={channelImage} 
                />
                <div className="videocard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} • {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default videoCard
