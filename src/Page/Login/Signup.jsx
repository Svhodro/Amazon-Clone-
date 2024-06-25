import React, { useState} from "react";
import {  Link, useNavigate } from "react-router-dom";
import img from "../../assets/Login.png";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase";
import swal from 'sweetalert'

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [Pass, setPass] = useState("");

  // context

  const handlePass = (event) => {
    const value = event.target.value;
    setPass(value);
  };
  const handleemail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  // set localstorage function
  //create account function
  const handleCreateAccount = (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, Pass)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        localStorage.setItem('userData',JSON.stringify(user))
        swal("Registerd!", "Go to Login!", "success");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  // login function
  

  return (
    <div className="bg-white">
      <div className="w-full flex justify-center items-center py-64 ">
        <div className="card shrink-0 w-full  max-w-[400px]  shadow-2xl bg-slate-50 rounded-none ">
          <div className="flex justify-center items-center w-full ">
            <img src={img} alt="" className="w-40" />
          </div>
          <form className="card-body rounded-none">
            <div  className="text-2xl font-bold text-black w-full  text-center">Signup</div>
            <div className="form-control rounded-none">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                onChange={handleemail}
                className="input input-bordered bg-slate-100"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-slate-100"
                onChange={handlePass}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                className="btn bg-orange-400 border-none text-black hover:text-white"
                onClick={(e) => {
                  handleCreateAccount(e);
                }}
              >
                Signup
              </button>
            </div>
            <div className="w-full text-black text-center py-3  text-base font-semibold hover:underline " >
            <Link to='/Login'>
            already have an account login
            </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
