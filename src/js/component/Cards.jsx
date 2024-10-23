import React from 'react';

const Cards = () => {
  const styles = {
    width: '100%',
    height: '270px',
    fontSize: '24px',
  };
  
  return (
    <div className="row py-4">
      {/* Card 1 */}
      <div className="col-md-3">
        <div className="card h-100">
          <div
            className="card-img-top d-flex align-items-center justify-content-center bg-secondary text-white"
            style={styles} 
          >
            500 x 325
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sapiente esse necessitatibus neque.
            </p>
          </div>
          <div className="card-footer text-center">
            <a href="#" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-3">
        <div className="card h-100">
          <div
            className="card-img-top d-flex align-items-center justify-content-center bg-secondary text-white"
            style={styles}
          >
            500 x 325
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Explicabo magni sapiente, tempore debitis beatae culpa natus
              architecto.
            </p>
          </div>
          <div className="card-footer text-center">
            <a href="#" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-3">
        <div className="card h-100">
          <div
            className="card-img-top d-flex align-items-center justify-content-center bg-secondary text-white"
            style={styles}
          >
            500 x 325
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sapiente esse necessitatibus neque.
            </p>
          </div>
          <div className="card-footer text-center">
            <a href="#" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-md-3">
        <div className="card h-100">
          <div
            className="card-img-top d-flex align-items-center justify-content-center bg-secondary text-white"
            style={styles}
          >
            500 x 325
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sapiente esse necessitatibus neque.
            </p>
          </div>
          <div className="card-footer text-center">
            <a href="#" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
