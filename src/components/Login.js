import React,{Link} from "react";
import leftPart from '../images/Left-part.svg';
import smclogo from '../images/SMC_Logo.gif';
import { useNavigate } from "react-router-dom"; 
import { useFormik } from 'formik';
import * as Yup from 'yup';





const Login=()=>{
  const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          Backofficeid: '',
         password: '',
        },
        validationSchema: Yup.object({
          Backofficeid: Yup.string()
            .min(7, 'Must be 7 characters or more')
            .required('Please Enter Your Back Office ID')
            .matches(
              /^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
              "Must Contain 8 Characters, One Uppercase, One Number"),
        
            // password: Yup.string()
            // .required('Please Enter Valid Password'),
            password: Yup.string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
        }),
        onSubmit: values => {
          localStorage.setItem('back', values.Backofficeid)
          navigate('/dash');
          
        },
      });
return(
<>
<div className="container-fluid no-gutters nopadding">
  <div className="row no-gutters nopadding">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"> 
    <div className="loginleft">
    <img src={leftPart} />
    <div className="infobox">
   <h1 className="heading">
   Connecting is more 
than giving <span>advice</span>
</h1>
<p>I just want to protect them, even if I have to go through
any kind of suffering</p>
</div>
    </div>
    </div>
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"> 
    <div className="loginright">
      <div className="smclogo"><img src={smclogo}/></div>
<div className="logininfo">
<h3> Hello Again</h3>
<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
<form onSubmit={formik.handleSubmit}>
       <label htmlFor="Back Office ID">Back Office ID</label>
       <input
         id="Backofficeid"
         name="Backofficeid"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.Backofficeid}
       />
       {formik.touched.Backofficeid && formik.errors.Backofficeid ? (
         <div className="error">{formik.errors.Backofficeid}</div>
       ) : null}
 
       <label htmlFor="Password">Password</label>
       <input
         id="password"
         name="password"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.password}
       />
       {formik.touched.password && formik.errors.password ? (
         <div className="error">{formik.errors.password}</div>
       ) : null}
 

 
       <button type="submit" className="officesubmit">Submit</button>
     </form>
</div>

    </div>
</div>
    </div>
    </div>



</>
)

}

export default Login;