import ImageGallery from 'react-image-gallery';
import React from 'react';

function GalleryPage() {

    const images = [
        {
          original: '../images/software-engineering-certificate-kenzie-academy.png',
          thumbnail: '../images/software-engineering-certificate-kenzie-academy.png',
          description: `Certificate in Software Engineering Backend Development I received from Kenzie Academy. We built projects in Java using Spring Boot framework with AWS capabilities.`,
          originalHeight: '450px',
        },
        {
            original: '../images/code-sample-java-aws.png',
            thumbnail: '../images/code-sample-java-aws.png',
            description: `An example from my Kenzie capstone project of methods querying a DynamoDB table on AWS.`,
            originalHeight: '450px',
          },
          {
            original: '../images/code-sample-python-chess.png',
            thumbnail: '../images/code-sample-python-chess.png',
            description: `An example from my CS 162 capstone project of a Chess method written in Python.`,
            originalHeight: '450px',
          }
    ]

    return (
        <>
            <h2>
                Gallery
            </h2>
            <article>
                <ImageGallery items={images} />
            </article>
    </>
    );
}
export default GalleryPage;