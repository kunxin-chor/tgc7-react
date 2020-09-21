import React from 'react';

export default class SurveyForm extends React.Component {
    state = {
        fullname:'',
        email:'',
        gender:'',
        hobbies:[],
        country:''
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Full Name</label>
                    <input type="text" name="fullname"/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email"/>
                </div>
                <div>
                    <label>Gender</label>
                    <input type="radio" value="M" name="gender"/>Male
                    <input type="radio" value="F" name="gender"/>Female
                    <input type="radio" value="U" name="gender"/>Unspecified
                </div>
                <div>
                    <label>Hobbies</label>
                    <input type="checkbox" value="stamps-collecting" name="hobbies"/>Stamp Collecting
                    <input type="checkbox" value="cycling" name="hobbies"/>Cycling
                    <input type="checkbox" value="Swimming" name="hobbies"/>Swimming
                    <input type="checkbox" value="Sleeping" name="hobbies"/>Sleeping
                </div>
                <div>
                    <label>Country</label>
                    <select name="country">
                        <option value="singapore">Singapore</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="indonesia">Indonesia</option>
                    </select>

                </div>

                <button>Submit</button>



            </React.Fragment>
        )
    }
}