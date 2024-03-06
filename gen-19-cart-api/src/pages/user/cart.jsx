import axios from "axios";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutContext } from "../../context/checkoutContext";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeData } from "../../store/reducers/cartSlice";
import { removeAllDataCart } from "../../store/reducers/cartSlice";
import { incrementQty } from "../../store/reducers/cartSlice";
import useSWR from "swr";
import { HashLoader } from "react-spinners";
import Navbar from "../../layouts/navbar";
import ADS from "../../component/ads";

export default function Cart() {
  const navigate = useNavigate();
  // const { dataCheckout } = useContext(CheckoutContext);
  // console.log("hai",dataCheckout)
  const [qty, setQty] = useState();
  const dispatch = useDispatch();

  // const dataCart = useSelector((state) => state.cart.dataCart);
  // console.log(dataCart);
  const user = useSelector((state) => state.auth.user);

  const getCart = (url) => axios.get(url).then((response) => response.data.filter(item => item.userid === user.id));
  const { data:dataCart, isLoading:isLoadingCart, error:errorCart, mutate:mutateCart } = useSWR(
      `http://localhost:3000/cart`,
          getCart,
      // {
      //     onSuccess: (data) => data.filter(item => item.userid === user.id)
      // }
  );

  if (!dataCart) {
    return <HashLoader />;
  } 

  let total = 0;
  if (dataCart){
    total = dataCart
    .map((item, id) => item.qty * item.data.price)
    .reduce((prevVal, curVal) => prevVal + curVal, 0);
  }

  const handleremoveData = (id) => {
    // dispatch(removeData(id));
    axios
      .delete(`http://localhost:3000/cart/${id}`)
      .then(() => {
        mutateCart()
      })
  };

  const handleRemoveAllData = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // dispatch(removeAllDataCart());
        axios
          .delete(`http://localhost:3000/cart`)
          .then(() => {
            mutateCart()
          })
        Swal.fire({
          title: "Deleted!",
          text: "Your cart has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleIncrementQty = (data, id) => {
    // console.log("hin",id,color,size, qty)
    console.log("inc ",data)
    const newData = {...data, qty: data.qty+=1}
    axios
      .put(`http://localhost:3000/cart/${id}`, newData)
      .then(() => {
        navigate("/cart");
      })
      .catch((error) => console.log(error));
    // dispatch(incrementQty(newData,id));
  };

  const handleDecrementQty = (data, id) => {
    // console.log("hde",id,color,size, qty)
    console.log("dec ",data)
    if(data.qty>1){
      const newData = {...data, qty: data.qty-=1}
      axios
      .put(`http://localhost:3000/cart/${id}`, newData)
      .then(() => {
        navigate("/cart");
      })
      .catch((error) => console.log(error));
      // dispatch(incrementQty(newData,id));
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
    <div className="m-0">
      <ADS />
      <Navbar />
      <div className="z-0 mt-[5vh] mb-[30vh] max-w-[80%] m-auto">
        {console.log("cart ", dataCart)}
        <section>
          <h1 className="text-3xl font-semibold mb-[3vh]">Product</h1>
          <div className="flex justify-between items-center align-middle text-center font-semibold bg-first rounded-lg my-2 p-4">
            <div className="w-[5%]">
              <button className="p-2 rounded-md bg-second hover:bg-yellow-600">
                All
              </button>
            </div>
            <div className="w-[10%]">Product</div>
            <div className="w-[10%]">Color</div>
            <div className="w-[10%]">Size</div>
            <div className="w-[10%]">Price</div>
            <div className="w-[15%]">Quantity</div>
            <div className="w-[10%]">Total Price</div>
            <div className="w-[10%]">
              <button
                onClick={handleRemoveAllData}
                className="p-2 rounded-md bg-red-400 text-slate-100 hover:bg-red-500"
              >
                Delete All
              </button>
            </div>
          </div>
          {dataCart?.map((data) => (
            <div key={data.id}>
              <div className="flex justify-between mt-4 px-4">
                <div className="w-[5%] flex items-center justify-center">
                  <input type="checkbox" name="" id="" className="w-5 h-5" />
                </div>
                <div className="w-[10%]">
                  <img src={data.prod} className="w-20" />
                </div>
                <div className="w-[10%] my-auto">{data.color}</div>
                <div className="w-[10%] my-auto">{data.size}</div>
                <div className="w-[10%] my-auto">{data.data.price}</div>
                <div className="flex h-fit w-[15%] my-auto px-6">
                  <button
                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 p-3 rounded-l cursor-pointer"
                    onClick={() =>
                      handleDecrementQty(data, data.id)
                    }
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
                    onClick={() =>
                      handleIncrementQty(data, data.id)
                    }
                  >
                    +
                  </button>
                </div>
                <div className="w-[10%] my-auto">{data.data.price * data.qty}</div>
                <div className="w-[10%] my-auto flex h-fit justify-center">
                  <button
                    onClick={() => handleremoveData(data.id)}
                    className="p-2 bg-red-400 hover:bg-red-500 text-white font-semibold rounded-md"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center align-middle fixed bottom-4 bg-second rounded-lg p-4 w-[80vw]">
            <div>
              Total{" "}
              <span className="ml-2 font-bold text-4xl self-center">{total}</span>
            </div>
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
    </div>
  );
}
