import axios from "axios";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutContext } from "../../context/checkoutContext";
import Swal from "sweetalert2";

export default function Checkout() {
  const navigate = useNavigate();
  const { dataCheckout } = useContext(CheckoutContext);
  // console.log("hai",dataCheckout)
  const total = dataCheckout
    .map((item, id) => item.qty * item.price)
    .reduce((prevVal, curVal) => prevVal + curVal, 0);

  const schema = yup.object().shape({
    payment: yup
      .string()
      .oneOf(["bank", "e-wallet"])
      .required("Payment Method is required"),
    delivery: yup
      .string()
      .oneOf(["j&t", "jne", "pos", "sicepat"])
      .required("Delivery is required"),
    name: yup.string().required("Field Name is required"),
    address: yup.string().required("Field Name is required"),
    note: yup.string(),
  });

  const [defaultValues, setDefaultVal] = useState({
    name: "",
    payment: "",
    delivery: "",
    address: "",
    note: "",
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

    // const payload = {
    //     category: data.category,
    //     name: data.name,
    //     price: data.price,
    //     description: data.description,
    //     dataPrev: data.dataPrev,
    //     dataSize: data.dataSize,
    //     dataColor: data.dataColor,
    // };

    // axios
    //     .post("http://localhost:3000/product", payload)
    //     .then(() => {
    //         Swal.fire({
    //             title: "Good job!",
    //             text: "Data added!",
    //             icon: "success"
    //         });
    //         reset();
    //     })
    //     .catch((error) => console.log(error));
    // navigate("/checkout")
  };

  return (
    <div className="z-0 my-[4vh] max-w-[80%] m-auto flex justify-between">
      {console.log(dataCheckout)}
      <section className="w-[40%]">
        <h1 className="text-3xl font-semibold">Product</h1>
        {dataCheckout?.map((data, index) => (
          <div key={index}>
            <div className="flex justify-between mt-4">
              <img src={data.prod} className="w-20" />
              <div>{data.color}</div>
              <div>{data.size}</div>
              <div>{data.price}</div>
              <div>X {data.qty}</div>
            </div>
            <hr className="my-2 border-black" />
          </div>
        ))}
        <div className="flex justify-between">
          <div>Total</div>
          <div>{total}</div>
        </div>
      </section>
      <section className="content w-[40%] flex flex-col gap-[4vh] sm:gap-[3vh] sm:my-[3vh]">
        <h1 className="text-3xl font-semibold">Payment Detail</h1>
        <form
          className="flex flex-col gap-4 mt-4"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              placeholder="Name"
              className="w-full rounded-lg border-[1px] border-gray-400 p-4 pe-12 text-sm focus:outline-black"
              {...register("name")}
              id="name"
            />
            <p className="error text-red-500">{errors.name?.message}</p>
          </div>

          <div>
            <label htmlFor="payment">Payment</label>
            <select
              placeholder="Payment Method"
              className="p-4 pe-12 w-full rounded-lg border-[1px] border-gray-400 text-gray-700 sm:text-sm"
              {...register("payment")}
              id="payment"
            >
              <option value="">Please select</option>
              <option value="bank">Bank</option>
              <option value="e-wallet">E-Wallet</option>
            </select>
            <p className="error text-red-500">{errors.payment?.message}</p>
          </div>

          <div>
            <label htmlFor="delivery">Delivery</label>
            <select
              placeholder="Delivery"
              className="p-4 pe-12 w-full rounded-lg border-[1px] border-gray-400 text-gray-700 sm:text-sm"
              {...register("delivery")}
              id="delicery"
            >
              <option value="">Please select</option>
              <option value="j&t">J&T</option>
              <option value="jne">JNE</option>
              <option value="pos">Pos Indonesia</option>
              <option value="sicepat">SiCepat</option>
            </select>
            <p className="error text-red-500">{errors.delivery?.message}</p>
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <textarea
              placeholder="Address"
              className="w-full rounded-lg border-[1px] border-gray-400 p-4 pe-12 text-sm focus:outline-black"
              {...register("address")}
              id="address"
            />
            <p className="error text-red-500">{errors.address?.message}</p>
          </div>

          <div>
            <label htmlFor="note">Note</label>
            <textarea
              placeholder="Note"
              className="w-full rounded-lg border-[1px] border-gray-400 p-4 pe-12 text-sm focus:outline-black"
              {...register("note")}
              id="note"
            />
          </div>

          <button
            className="mt-4 rounded-lg bg-first p-3 text-xl font-bold hover:bg-yellow-600 text-white self-center w-full"
            type="submit"
          >
            BUY NOW
          </button>
        </form>
      </section>
    </div>
  );
}
