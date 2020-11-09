import React from 'react';
import {Link} from 'react-router-dom';




const About = () => {
    return (
        <div className= "header">
            <h1>About</h1>
            <div className="breadcrumb">
            <Link to="/"> Home </Link>
            </div>
            <div>
                <h1>Welcome to the Bookcase Application</h1>
                <p>The following application was created by Asha.
                   This bookcase app displays a list of books that a user can
                   save to a local bookcase
                   Click on the "Add + " button to add a book to your bookcase.
                   Use the search bar to find the latest books by name, author
                   or description</p>
            </div>

        </div>
    );
};


export default About;
