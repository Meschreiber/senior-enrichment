// This will be a pretty simple form :
// It will take name, campus, and a  submit button and direct to the student edit page

import React from 'react';

export default function AddStudent(props) {

    const campus = props.campus
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;
    const inputValue = props.inputValue;

    return (
        <div className="well" style={{ marginTop: '20px' }}>
            <form className="form-horizontal" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Enroll here!</legend>
                    <div className="form-group">
                        <label className="col-xs-2 control-label">Name</label>
                        <div className="col-xs-10">
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                value={inputValue}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-xs-2 control-label">Select your campus</label>
                        <div className="col-xs-10">
                            <select>
                                {
                                    campus.map(campus => (
                                        <option key={campus.id} value={campus.name}>{campus.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-xs-10 col-xs-offset-2">
                            <button
                                type="submit"
                                className="btn btn-success"
                                disabled={!inputValue}>
                                Enroll Now
              </button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}