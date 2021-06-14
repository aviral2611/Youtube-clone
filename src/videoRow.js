import React from 'react'
import './videoRow.css'
function videoRow({
    image,views,subs,description,timestamp,channel,title
}) {
    return (
        <div className="videoRow">
          <img src={image} alt={channel}    />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__head">{channel}•<span className="videoRow__subs"><span className="videoRow__subsNumber">{subs}</span> subscribers </span> •{views} views •{timestamp}</p>
                <p className="videoRow__description">{description}</p>
            </div>
            
            
        </div>
    )
}

export default videoRow