import React from "react";
import totalIcon from '../images/total-icon.svg';
import pendingIcon from '../images/pending-icon.svg';
import verifiedIcon from '../images/verified-icon.svg';
import RejectedIcon from '../images/rejected-icon.svg';


const Topinfo=()=>{
    return(
    <>
 
    <div className="dashboard-wrap">
    
        <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-2">
        <div className="total">
    <div className="imgbox">
    <img src={totalIcon}/>
    </div>
    <div class="infobox">
    <h5>TOTAL APPLICANTS</h5>
    <h2>292674</h2>
    <h6>Since last month</h6>
    </div>
    
        </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-2">
        <div className="pending">
        <div className="imgbox">
        <img src={pendingIcon}/></div>
        <div class="infobox">
    <h5>PENDING APPLICANTS</h5>
    <h2>203530</h2>
    <h6>Since last month</h6>
    </div>
    
    
        </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-2">
    <div className="verified">
    <div className="imgbox">
    <img src={verifiedIcon}/></div>
    <div class="infobox">
    <h5>VERIFIED APPLICANTS</h5>
    <h2>86696</h2>
    <h6>Since last month</h6>
    </div>
    
    </div>
    </div>
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-2">
    <div className="rejected">
    <div className="imgbox">
    <img src={RejectedIcon}/></div>
    <div class="infobox">
    <h5>REJECTED APPLICANTS</h5>
    <h2>2448</h2>
    <h6>Since last month</h6>
    </div>
    
    </div>
    </div>
    </div>
    </div>
    
    
    
    </div>
    
    
    </>
    )
    
    }
    
    export default Topinfo;