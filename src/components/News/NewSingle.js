import React from 'react';

const NewSingle = ({item}) => (
    <div className = "col xs12 s12 m6 l3">
        <div className = "card medium">
            <div className = "card-image">
            {item['media'][0] && item['media'][0]['media-metadata'][2].url ? (
            <img src={item['media'][0]['media-metadata'][2].url} alt={item.title}></img>
            ) : (
                <img src='./no-image-available.png' alt={item.title}></img>
            )
            }
                <span className="card-title">{item.section}</span>

            </div>
            {/* <div className="card-content">
                <p>{item.title}</p>
            </div> */}
            <div className="card-content">
                <p>{item.abstract}</p>
            </div>
            <div className="card-action">
                <a href={item.url} target="_blank">Full Article</a>
            </div>
        </div>
    </div>
);


export default NewSingle;


// (http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)
// url.match(/\.(jpeg|jpg|gif|png)$/) != null)