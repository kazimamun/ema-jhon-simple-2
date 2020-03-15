import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {ProductKey} = useParams();
    return (
        <div>
            <h2>{ProductKey} Details coming soon</h2>
        </div>
    );
};

export default ProductDetails;