import React, { useState,useRef,Component} from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import {Link} from 'react-router-dom';
import '../App.css';

export default class Navbar extends Component{
  render(){
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return(
      <div>
        <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
          Click me to see
        </Button>
        <Overlay target={target.current} show={show} placement="right">
          {({
            placement,
            scheduleUpdate,
            arrowProps,
            outOfBoundaries,
            show: _show,
            ...props
          }) => (
            <div
              {...props}
              style={{
                backgroundColor: 'rgba(255, 100, 100, 0.85)',
                padding: '2px 10px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
              }}
            >
              Simple tooltip
            </div>
          )}
        </Overlay>


      <nav className="navbar navbar-expand-lg navbar-light saana px-5 mx-3">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link  className="navbar-brand  px-5" to="#">

              <img src="/logo.png" width="140" height="45" class="d-inline-block align-top" alt=""></img>
            </Link>

          <ul className="navbar-nav px-5 mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link btn" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="tools1" to="#tools1"> tools <span className="sr-only">(current)</span></Link>
                <a class="btn btn-primary" data-toggle="collapse" href="#tools1" role="button" aria-expanded="false" aria-controls="tools1">Link</a>



            </li>

            <div className="collapse multi-collapse" id="tools1">

              <li className="nav-item">
                <a className="nav-link" href="#">Clhhs <span className="sr-only">(current)</span></a>
              </li>

            </div>


          </ul>

            <ul className="navbar-nav px-4 mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Classes <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Clients</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Store</a>
              </li>
            </ul>

            <ul className="navbar-nav px-4 mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">logout <span className="sr-only">(current)</span></a>
              </li>

            </ul>
        </div>
      </nav>
</div>



    )
  }

}
