import React from 'react';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import { products } from  '../Products'
import { Link, useParams } from 'react-router-dom';

 


function Product(product) {
    // const {id} = useParams();
    // const productTemp = products.find((p) => p._id === id);
    // console.log("Check here");
    // console.log(id);
    // console.log(productTemp);
    // const users= product;
    return (
      <> 
         <div className="container">
              <h3 className="p-3 text-center">React - Display a list of items</h3>
              <table className="table table-striped table-bordered">
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Brand</th>
                          <th>price</th>
                          <th>category</th>
                          <th>Image</th>
                      </tr>
                  </thead>
                  <tbody>
                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    {product && product.map(user =>
                          <tr key={user.id}>
                              <td>{user.name}</td>
                              <td>{user.brand}</td>
                              <td>{user.price}</td>
                              <td>{user.category}</td>
                              <Link>
  
                              <td><img src={user.image} height="75" width="75"></img></td>
                              </Link>
                          </tr>
                      )}
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
                      
                  </tbody>
              </table>
          </div>
      </>
    );
  }
  
  export default Product