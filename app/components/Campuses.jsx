import React from 'react';
import {Link} from 'react-router';

export default function campus (props) {
  const campuses = props.campuses;
  console.log('From campus component', campuses)

  return (
    <div>
      <h3>Our campuses</h3>
      <div className="row">
        {
          campuses && campuses.map(campus => (
            <div className="col-xs-4" key={ campus.id }>
              <Link className="thumbnail" to={`/campus/${campus.id}`}>
                <img className="pic" src={ campus.imageUrl }/>
                <div className="caption">
                  <h5>
                    <span>{ campus.name }</span>
                  </h5>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}
