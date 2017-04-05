// Display/ can edit (toggle?)
// name
// campus
// picture?
// testimonial?


import React from 'react';

export default function SingleStudent(props) {

    const student = props.selectedStudent;
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;
    const inputValue = props.inputValue;

    return (
        <div className="well" style={{ marginTop: '20px' }}>
            <form className="form-horizontal" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>{student.name}}</legend>
                    <div className="form-group">
                        <label className="col-xs-2 control-label">Testimonial</label>
                        <div className="col-xs-10">
                            <input
                                className="form-control"
                                type={student.testimonial}
                                onChange={handleChange}
                                value={inputValue}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-xs-2 control-label">Campus</label>
                        <div className="col-xs-10">
                            <select>
                                {
                                    campuses.map(campus => (
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
                                Edit Student Information
              </button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}