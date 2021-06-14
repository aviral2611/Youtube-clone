import React from 'react'
import  Avatar  from '@material-ui/core/Avatar';
import './channelRow.css';
import  VerifiedIcon  from '@material-ui/icons/CheckCircleOutlined';
function channelRow({image,noOfVideos,verified,subs,description,channel}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo"
            alt={channel}
            src={image} />
            <div className="channelRow__text">
                
                <h4>
                  {channel} {verified && <VerifiedIcon />}
                </h4>
                <p>{subs} subscribers . {noOfVideos} videos </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default channelRow
