import React from 'react';
import 'bootstrap';


export default function EventCard() {
  return (
<div class="card-columns">
  <div class="card">
    <img className="card-img-top" src={require('./music.jpg')} alt="Music Event"/>
    <div class="card-body">
      <h5 class="card-title">Card title that wraps to a new line</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div class="card p-3">
    <blockquote class="blockquote mb-0 card-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
  <img className="card-img-top" src={require('./music.jpg')} alt="Music Event"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card bg-primary text-white text-center p-3">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
      <footer class="blockquote-footer">
        <small>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has a regular title and short paragraphy of text below it.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
  <img className="card-img" src={require('./outdoors.jpeg')} alt="Nature Event"/>
  </div>
  <div class="card p-3 text-right">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

/* <div class="card" style={{width : '18rem'}}>
    {/* <div class="card" style={{float : 'left', paddingRight : '5px'}}> */
  /* <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div> */

    //   <Card style={{ width: '18rem' }}>
  // <Card.Body>
  //   <Card.Title>Card Title</Card.Title>
  //   <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
  //   <Card.Text>
  //     Some quick example text to build on the card title and make up the bulk of
  //     the card's content.
  //   </Card.Text>
  //   <Card.Link href="#">Card Link</Card.Link>
  //   <Card.Link href="#">Another Link</Card.Link>
  // </Card.Body>
  // </Card>);
    
//     <div class="card">
//     // style="width: 18rem;"
//     {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
//     { <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     </div>
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">Cras justo odio</li>
//       <li class="list-group-item">Dapibus ac facilisis in</li>
//       <li class="list-group-item">Vestibulum at eros</li>
//     </ul>
//     <div class="card-body">
//       <a href="#" class="card-link">Card link</a>
//       <a href="#" class="card-link">Another link</a>
//     </div> }

//    <div class="card-header">Header</div>
//    <div class="card-body">Content</div> 
//    <div class="card-footer">Footer</div>
//  </div>
  );
}