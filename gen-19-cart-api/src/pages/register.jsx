import axios from "axios";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

export default function Register() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required("Field email is required"),
    name: yup.string().required("Field username is required"),
    password: yup.string().required("Field password is required"),
    role: yup.string().oneOf(["user", "admin"]).required("Role is required"),
  });

  const [defaultValues, setDefaultVal] = useState({
    email: "",
    name: "",
    password: "",
    role: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmitForm = (data) => {
    console.log("submit ", data);
    const payload = {
      email: data.email,
      name: data.name,
      password: data.password,
      role: data.role,
    };
    axios
      .post("http://localhost:3000/register", payload)
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Registered!",
          icon: "success",
        });
        navigate("/login");
        reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="z-0 my-[5vh] max-w-[80%] m-auto">
      <section className="content w-[40%] m-auto flex flex-col gap-[4vh] sm:gap-[3vh] sm:my-[3vh]">
        <h1 className="text-3xl font-semibold">Register</h1>
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
            <label htmlFor="name">Username</label>
            <input
              placeholder="Username"
              className="w-full rounded-lg border-[1px] border-gray-400 p-4 pe-12 text-sm focus:outline-black"
              {...register("name")}
              id="name"
            />
            <p className="error text-red-500">{errors.name?.message}</p>
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

          <div>
            <label htmlFor="role">Role</label>
            <select
              placeholder="Delivery"
              className="p-4 pe-12 w-full rounded-lg border-[1px] border-gray-400 text-gray-700 sm:text-sm"
              {...register("role")}
              id="role"
            >
              <option value="">Please select</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <p className="error text-red-500">{errors.role?.message}</p>
          </div>

          <button
            className="mt-4 rounded-lg bg-first p-3 text-xl font-bold hover:bg-yellow-600 text-white self-center w-full"
            type="submit"
          >
            Register
          </button>
        </form>
        <div>
          I have an account{" "}
          <button onClick={() => navigate("/login")} className="text-blue-500 font-semibold">Login here</button>
        </div>
      </section>
    </div>
  );
}
