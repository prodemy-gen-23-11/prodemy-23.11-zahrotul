import axios from "axios";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutContext } from "../../context/checkoutContext";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

export default function Cart() {
  const navigate = useNavigate();
  // const { dataCheckout } = useContext(CheckoutContext);
  // console.log("hai",dataCheckout)
  const [qty,setQty] = useState()

  const dataCart = useSelector((state) => state.cart.dataCart);
  console.log(dataCart);

  const total = dataCart
    .map((item, id) => item.qty * item.price)
    .reduce((prevVal, curVal) => prevVal + curVal, 0);

  const incrementQty = () => setQty(qty + 1);
  const decrementQty = () => {
    if (qty > 2) {
      setQty(qty - 1);
    }
  };

  const buyProduct = (data) => {
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
    <div className="z-0 my-[5vh] max-w-[80%] m-auto">
      {console.log(dataCart)}
      <section>
        <h1 className="text-3xl font-semibold mb-[3vh]">Product</h1>
        <div className="flex justify-between items-center align-middle text-center font-semibold bg-first rounded-lg my-2 p-4">
          <div className="w-[5%]">
            <button className="p-2 rounded-md bg-second hover:bg-yellow-600">All</button>
          </div>
          <div className="w-[10%]">Product</div>
          <div className="w-[10%]">Color</div>
          <div className="w-[10%]">Size</div>
          <div className="w-[10%]">Price</div>
          <div className="w-[15%]">Quantity</div>
          <div className="w-[10%]">Total Price</div>
          <div className="w-[10%]"><button className="p-2 rounded-md bg-red-400 text-slate-100 hover:bg-red-500">Delete All</button></div>
        </div>
        {dataCart?.map((data, index) => (
          <div key={index}>
            {/* {setQty(data.qty)} */}
            <div className="flex justify-between mt-4 px-4">
              <div className="w-[5%] flex items-center justify-center">
                <input type="checkbox" name="" id="" className="w-5 h-5" />
              </div>
              <div className="w-[10%]">
                <img src={data.prod} className="w-20" />
              </div>
              <div className="w-[10%] my-auto">{data.color}</div>
              <div className="w-[10%] my-auto">{data.size}</div>
              <div className="w-[10%] my-auto">{data.price}</div>
              <div className="flex h-fit w-[15%] my-auto px-6">
                <button
                  className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 p-3 rounded-l cursor-pointer"
                  onClick={decrementQty}
                >
                  −
                </button>
                <input
                  className="border border-solid border-grey p-2 w-full rounded-md text-center"
                  disabled
                  type="number"
                  name=""
                  id=""
                  value={data.qty}
                />
                <button
                  className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 p-3 rounded-r cursor-pointer"
                  onClick={incrementQty}
                >
                  +
                </button>
              </div>
              <div className="w-[10%] my-auto">{data.price * data.qty}</div>
              <div className="w-[10%] my-auto flex h-fit justify-center"><button className="p-2 bg-red-400 hover:bg-red-500 text-slate-100 rounded-md">Hapus</button></div>
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center align-middle fixed bottom-4 bg-second rounded-lg p-4 w-[80vw]">
          <div>Total <span className="ml-2 font-bold text-4xl self-center">{total}</span></div>
          <button
            onClick={buyProduct}
            className="rounded-lg bg-first px-8 py-3 text-xl font-bold hover:bg-yellow-600 text-white self-center"
            type="submit"
          >
            BUY NOW
          </button>
        </div>
      </section>
    </div>
  );
}