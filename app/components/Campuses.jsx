import React from 'react';
import {Link} from 'react-router';

export default function campus (props) {

  const campus = props.campus;
  console.log('From campus component', props)
  return (
    <div>
      <h3>Our campus</h3>
      <div className="row">
        {
          campus && campus.map(campus => (
            <div className="col-xs-4" key={ campus.id }>
              <Link className="thumbnail" to={`/campus/${campus.id}`}>
                <img src={ campus.imageUrl }/>
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
