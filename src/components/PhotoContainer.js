import React from  'react';
import NotFound from './NotFound';
import Photo from './Photo';


// Will recieve an object data property from main app. will map throuh the data. return Photo component.
const PhotoContainer = (props) => {
    const results = props.data;
    let photos;
    results.length > 0 ? photos = results.map(photo => <Photo url={photo.url_z} key={photo.id} />) 
        : photos = <NotFound /> 


    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {photos}
            </ul>

        </div>

    );;
}

export default PhotoContainer;