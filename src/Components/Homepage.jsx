import React from 'react';

const Homepage = () => {
  return (
    <div className="container">
      <h5 className="text-center my-2">Welcome to Real Estate Website</h5>

      <div className="row">
        {/* Three Bootstrap cards in each row */}
        <div className="col-md-4">
          <div className="card">
            <img src="https://d3nn873nee648n.cloudfront.net/1200x1800-new/20482/PS1059982.jpg" className="card-img-top" alt="Card Image 1" />
            <div className="card-body text-center">
              
              <p className="card-text">At cambridge garden Grand single site Home For sale</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Card Image 2" />
            <div className="card-body text-center">
             
              <p className="card-text"> At Anjanadri layout Grand single site Home for Rent.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?auto=format&fit=crop&q=80&w=1781&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Card Image 3" />
            <div className="card-body text-center">
             
              <p className="card-text">At Marathalli ACES Grand single site Home for lease</p>
            </div>
          </div>
        </div>
      </div>

     
     
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  

  <div className="bg-secondary   m-2">
  <div class="carousel-inner w-25 m-auto  ">
    <div class="carousel-item active ">
      <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8fDA%3D" class="d-block w-100 h-100" alt="..."/>
      
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHx8MA%3D%3D" class="d-block w-100 h-100" alt="..."/>
     
    </div>
    <div class="carousel-item">
      <img src="https://media.istockphoto.com/id/1497209456/photo/real-estate-agent-meeting-a-couple-for-a-house-showing.jpg?s=2048x2048&w=is&k=20&c=8iWx71nUVQeulohmQZ8cq3-C5g8oRjNWpDtoLhw8lks=" class="d-block w-100 h-100" alt="..."/>
      
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGhvbWV8ZW58MHx8MHx8fDA%3D" class="d-block w-100 h-100" alt="..."/>
     
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxob21lfGVufDB8fDB8fHww" class="d-block w-100 h-100" alt="..."/>
     
    </div>
    

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
       
        </div>
      </div>
    
  );
};

export default Homepage;
