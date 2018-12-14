import React from 'react';

const NewSingle = ({item}) => (
    <div className = "col xs12 s6 m4 l2">
        <div className = "card small">
            <div className = "card-image">
                <img src={item.urlToImage} alt={item.title}></img>
                <span className="card-title">{item.source.name}</span>

            </div>
            <div className="card-content">
                <p>{item.title}</p>
            </div>
            <div className="card-action">
                <a href={item.url} target="blank">Full Article</a>
            </div>
        </div>
    </div>
);

export default NewSingle;
