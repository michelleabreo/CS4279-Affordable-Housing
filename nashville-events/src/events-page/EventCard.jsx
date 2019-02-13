import React from 'react';
import 'bootstrap';

export default function EventCard() {
  return (
    <div class="card">
    // style="width: 18rem;"
    {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
    { <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div> }

   <div class="card-header">Header</div>
   <div class="card-body">Content</div> 
   <div class="card-footer">Footer</div>
 </div>
  );
}