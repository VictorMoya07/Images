import React from 'react';

const Imagen = ({imagen}) => {


    const {largeImageURL, likes, previewURL, tags, views} = imagen;

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top"/>
                

                <div className="card-body">
                    <p className="card-text">{likes} Me Gustas</p>
                    <p className="card-text">{views} Vistas</p>
                 </div>
                
 
                <div className="card-footer">
                    <a 
                    href={largeImageURL} 
                    className="btn btn-warning btn-block"
                    rel="noopener noreferrer"
                    target="_blank"
                    >Ver imagen</a>
                </div>
            </div>
        </div>
    );
}
 
export default Imagen;