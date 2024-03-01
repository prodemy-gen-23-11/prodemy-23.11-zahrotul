import axios from "axios";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../store/reducers/authSlice";

export default function Login() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required("Field email is required"),
    password: yup.string().required("Field password is required"),
  });

  const dispatch = useDispatch()

  const [defaultValues, setDefaultVal] = useState({
    email: "",
    password: ""
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmitForm = (data) => {
    console.log("submit ", data);

    const payload = {
        email: data.email,
        password: data.password
    };
    axios
        .post("http://localhost:3000/login", payload)
        .then((res) => {
            const { accessToken, user } = res.data;
            dispatch(setToken(accessToken));
            dispatch(setUser(user));
            console.log(user.role)
            if(user.role==="admin") navigate("/productlist")
            else navigate("/")
            reset();
            Swal.fire({
                title: "Good job!",
                text: "Data added!",
                icon: "success"
            });
            reset();
        })
        .catch((error) => console.log(error));
  };

  return (
    <div className="z-0 my-[5vh] max-w-[80%] m-auto">
      <section className="content w-[40%] m-auto flex flex-col gap-[4vh] sm:gap-[3vh] sm:my-[3vh]">
        <h1 className="text-3xl font-semibold">Login</h1>
        <form
          className="flex flex-col gap-4 mt-4"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <div>
            <label htmlFor="email">Email</label>
            <input
              placeholder="Email"
              className="w-full rounded-lg border-[1px] border-gray-400 p-4 pe-12 text-sm focus:outline-black"
              {...register("email")}
              id="email"
            />
            <p className="error text-red-500">{errors.email?.message}</p>
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border-[1px] border-gray-400 p-4 pe-12 text-sm focus:outline-black"
              {...register("password")}
              id="password"
            />
            <p className="error text-red-500">{errors.password?.message}</p>
          </div>

          <button
            className="mt-4 rounded-lg bg-first p-3 text-xl font-bold hover:bg-yellow-600 text-white self-center w-full"
            type="submit"
          >
            LOG IN
          </button>
          <div>Dont have account yet? <button onClick={()=>navigate("/register")} className="text-blue-500 font-semibold">Register here</button></div>
        </form>
      </section>
    </div>
  );
}
