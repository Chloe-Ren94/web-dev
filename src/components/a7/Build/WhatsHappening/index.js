import React, {useState} from "react";
import {useDispatch} from "react-redux";
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        dispatch({type: 'create-tweet',
            tweet: {
                tweet: whatsHappening
            }
        });
    }
    return(
        <div className="row ps-3">
            <div className="col-1">
                <img className="wd-avatar-img" src="/images/react-blue.png"/>
            </div>
            <div className="col-11 ps-5 ps-sm-5 ps-md-4">
                 <textarea className="form-control ps-0"
                           placeholder="What's happening?"
                           style={{backgroundColor: "black", color: "white"}}
                           value={whatsHappening}
                           onChange={(event) =>
                               setWhatsHappening(event.target.value)}>
                </textarea>
                <hr/>
                <i className="fas fa-image text-primary me-3"></i>
                <i className="fas fa-chart-line text-primary me-3"></i>
                <i className="far fa-smile text-primary me-3"></i>
                <i className="far fa-calendar text-primary me-3"></i>
                <button className="btn btn-primary rounded-pill float-end" onClick={tweetClickHandler}>
                    Tweet
                </button>
            </div>
        </div>
    );
}
export default WhatsHappening;