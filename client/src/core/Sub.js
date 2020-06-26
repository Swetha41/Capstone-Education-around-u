import React, { useState } from "react";
import Layout from "./Layout";


const Sub = () => {

    return (
        <Layout
            title="Education Around U"
            description="Increase Post Visibility Manyfold"
            className="container-fluid"
        >
            
            <h2 className="mb-4">Subscription Plans</h2>
            <div className="row">
               <ul>
                   <h4>Basic Plan</h4>
                   <li>₹ 10000/yr</li>
                   <li>Limited Posts</li>

                 <button className="input-group-text">Subscribe</button>
               </ul>
                    </div>
                    <div className="row">
               <ul>
                   <h4>Premium Plan</h4>
                   <li>₹ 20000/yr</li>
                   <li>Unlimited Posts</li>
                   <li>Provide email notifications</li>
                   <li>Reach out to more users and advertise service faster</li>

                 <button className="input-group-text">Subscribe</button>
               </ul>
                    </div>
                
                
            

            
        </Layout>
    );
};

                
export default Sub;