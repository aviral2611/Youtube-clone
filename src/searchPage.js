import React from 'react';
import ChannelRow from './channelRow';
import VideoRow from './videoRow';
import './searchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

function searchPage() {
    return (
        <div className="searchPage">

            <div className="searchPage__filter">
            
                <TuneOutlinedIcon />
                <h2>Filter</h2>
                
            </div>
            <hr />
            <ChannelRow 
            image="https://yt3.ggpht.com/yti/ANoDKi7q3i3meIqIR_ZEcP5CCbs17ZSYru2BGg2FhsiJ=s88-c-k-c0x00ffffff-no-rj-mo"
            
            verified
            channel="Aviral Gupta"
            subs="1M "
            noOfVideos={115}
            description="I have started this channel to help human Community to enetertain them on their difficult times, from my different videos.
            "
            />
            <hr />
            <VideoRow 
            image="https://i.ytimg.com/an_webp/nAowcCbWhqg/mqdefault_6s.webp?du=3000&sqp=CNDCnoYG&rs=AOn4CLCuReZ7J3CJMIBMzy49zu0jldfC1w"
            views="44k"
            subs="1M"
            timestamp="August 29, 2020"
            description="At some point we all have to choose between what the world wants you to be and who you are.” Watch the new trailer for Marvel Studios’ #BlackWidow. In theatres July 9 or on #DisneyPlus with Premier Access. Additional fees required."
            channel="Aviral Gupta"
            title="Marvel Studios' Black Widow - Final Trailer
            "/>



            <VideoRow 
            image="https://i.ytimg.com/vi/y_RHQ4mBDKA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB6oXXk8RuU3x63IU0_5-gFldPogQ"
            views="1M"
            subs="1M"
            timestamp="July 29, 2020"
            description=" Bedardi Se Pyaar Ka  in the voice of Jubin Nautiyal music by Meet Bros lyrics are written by Manoj Muntashir The song features Gurmeet Choudhary Sherine Singh Kaashish Vohra Altamash Faraz "
            channel="Aviral Gupta"
            title="Bedardi Se Pyaar Ka Song|Jubin N,Meet B,Manoj M|Gurmeet C,Sherine S,Kaashish V            "/>
            
            
            
            <VideoRow 
            image="https://i.ytimg.com/an_webp/Lznv781LhlI/mqdefault_6s.webp?du=3000&sqp=CNDKnoYG&rs=AOn4CLBE_V9YEvzKx4fg5-_KldyTmtRKXw "
            views="14M"
            subs="1M"
            timestamp="Jun 29, 2020"
            description="A phenom is lurking as Brock Lesnar finally gets his hands on Seth Rollins with the WWE Championship at stake at WWE Battleground 2015: Courtesy of WWE Network.
            WWE Network | Subscribe now"
            channel="Aviral Gupta
            "
            title="Big Show and Brock Lesnar come face-to-face: Raw, Jan. 20, 2014"/>
            
            
            
            <VideoRow 
            image="https://i.ytimg.com/an_webp/4u8MoZPm4-k/mqdefault_6s.webp?du=3000&sqp=CJPhnoYG&rs=AOn4CLBlK7Lt24n7YSI3MLDNvTyv-iDwdw"
            views="22k"
            subs="1M"
            timestamp="May 29, 2020"
            description=""
            channel="Aviral Gupta"
            title="Credit management system"/>
            
            
            
            
            <VideoRow 
            image="https://i.ytimg.com/an_webp/pynDvIsLoU0/mqdefault_6s.webp?du=3000&sqp=CMHNnoYG&rs=AOn4CLCUUJ3xYJ-2ZwtRIzdGhQYBfgMNPw"
            views="5M"
            subs="1M"
            timestamp="May 12, 2020"
            description="1. Ronaldinho Bicycle Kick Goal vs Villareal
            2. Ronaldinho Controlling The Ball With His Back
            3. Ronaldinho Under The Wall Free Kicks
            4. Ronaldinho Smart Water Bottle Trick
            5. Ronaldinho Stealing The Ball From Goalkeepers"
            channel="Aviral Gupta"
            title="Ronaldinho: 14 Ridiculous Tricks That No One Expected
            "/>
            
            <VideoRow 
                image="https://i.ytimg.com/an_webp/F-K7bNxOPvA/mqdefault_6s.webp?du=3000&sqp=CIDYnoYG&rs=AOn4CLD0O6RhiRSrJOyrdQlRmnyZpt-SSQ"
                views="5M"
                subs="1M"
                timestamp="May 12, 2020"
                description="
                Footage from the game show Who Wants to be a Millionaire is examined to reveal how Major Charles Ingram almost cheated his way to the jackpot.
                
                Presented by Martin Bashir.
                
                Broadcast: 22nd April 2003"
                channel="Aviral Gupta"
                title="Major Fraud - Charles Ingram Documentary (2003)
            "/>



<VideoRow 
            image="https://i.ytimg.com/an_webp/g5O-_gkjIeI/mqdefault_6s.webp?du=3000&sqp=CIbRnoYG&rs=AOn4CLAFqpUxOHCOkwWyvXkkJ52LA24FWg "
            views="14M"
            subs="1M"
            timestamp="April 29, 2020"
            description="Mr Bean realises his hotel room doesn't have a bathroom attached, but e can hear that there is a bathroom next door so he knocks the wall down to get in!
            "
            channel="Aviral Gupta
            "
            title="BATHTUB Bean 🛀| Mr Bean Full Episodes | Mr Bean Official
            "/>



<VideoRow 
            image="https://i.ytimg.com/an_webp/HkWxvB1RJq0/mqdefault_6s.webp?du=3000&sqp=CJTZnoYG&rs=AOn4CLDNp4DUQ_xYSFFBNP2nbLSK-MYxbQ "
            views="21k"
            subs="1M"
            timestamp="March 12, 2020"
            description="Functional Programming is powered by Higher-Order Functions in JavaScript. And all this is possible because functions are first-class citizens in JS. This episode covers everything about Higher-Order functions and how they can be leveraged to do functional programming. ❤️"
            channel="Aviral Gupta
            "
            title="Higher-Order Functions ft. Functional Programming | Namaste JavaScript
            "/>
        </div>
    )
}

export default searchPage
