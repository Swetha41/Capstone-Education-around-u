import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import Search from "./Search";


const Home = () => {

    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

    
    const loadProductsByArrival = () => {
        getProducts("createdAt").then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadProductsByArrival();
        
    }, []);

    return (
        <Layout 

            title="Education Around U"
            description="Find the right Education for your child"
            className="container-fluid"
        >
            <Search />
            <h2 className="mb-4">Recently added</h2>
            <div className="row"  style ={ { backgroundImage: "url()" } }>
                {productsByArrival.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                     
                    
                    
                ))}
            </div>

            
        </Layout>
    );
};

export default Home;
