import React from 'react';

const NewSingle = ({item}) => (
    <div className = "col xs12 s12 m6 l3">
        <div className = "card medium">
            <div className = "card-image">
            {item.urlToImage ? (
            //  {/* {item.urlToImage && item.urlToImage.match(/\.(jpeg|jpg|gif|png)$/)  ? ( */}
            <img src={item.urlToImage} alt={item.title}></img>
            ) : (
                <img src='./no-image-available.png' alt={item.title}></img>
            )
            }
                <span className="card-title">{item.source.name}</span>

            </div>
            <div className="card-content">
                <p>{item.title}</p>
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