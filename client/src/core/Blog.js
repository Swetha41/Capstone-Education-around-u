import React, { useState } from "react";
import Layout from "./Layout";
import Img from "./blog.jpg";



const Blog = () => {

    return (
        <Layout
            title="Education Around U"
            description="Find the right Education for your child"
            className="container-fluid"
        >
            
            <h2 className="mb-4">Edu Blogs</h2>
            <div className="row">
               <ul>
               <h4>To do or not to do – Online classes – The confusion ends here today.</h4>
               <center> <img src= {Img} alt="pic" width={400} height={400} mode='fit'/></center>

                   



                   <h4>What is the best school of my child ?</h4>
                   

<p>
A great education is every child’s key to a great future. And every child deserves access to a high-quality public school — one that meets the child’s learning needs and unlocks the door to that great future.

Public-school choice is an essential part of unlocking that door.</p>
<p>
Education is not one size fits all; children have different learning styles, and we need to provide all of our families with a range of high-quality public schools and empower them to find the right fit for their child.</p>

    <h4>Four Steps to Selecting a School for Your Child!!!</h4>
    <li>Step 1: Consider your child & your family</li>
    <li>Step 2: Gather information about schools</li>
    <li>Step 3: Visit and observe schools</li>
    <li>Step 4: Apply to the schools you choose</li>
               </ul>
                    </div>
                    
                    
                
                
            

            
        </Layout>
    );
};

                
export default Blog;