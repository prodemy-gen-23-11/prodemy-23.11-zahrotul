import { Route, Routes,Navigate } from "react-router-dom";
import ProductList from "./pages/admin/productList";
import Dashboard from "./pages/user/dashboard";
import ProductDetail from "./pages/user/productDetail";
import ErrorPage from "./pages/error";
import AddProduct from "./pages/admin/addProduct";
import EditProduct from "./pages/admin/editProduct";
import Checkout from "./pages/user/checkout";
import Cart from "./pages/user/cart";
import Login from "./pages/login";
import Register from "./pages/register";
import PrivateRoutes from "./routes/privateRoutes";
import GuestRoutes from "./routes/guestRoutes";
import AdminRoutes from "./routes/adminRoutes";

export default function Router() {
    return (
        <Routes>
            <Route element={<GuestRoutes/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
            </Route>

            <Route element={<AdminRoutes/>}>
                <Route path="/productlist" element={<ProductList />} />
                <Route path="/addproduct" element={<AddProduct />} />
                <Route path="/editproduct/:id" element={<EditProduct />} />
            </Route>
            
            <Route element={<PrivateRoutes/>}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Navigate to="/dashboard" />}/>
                <Route path="/productdetail/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
            </Route>

            <Route path="*" element={<ErrorPage code="404" title="Ooopss Page Not Found" />} />
        </Routes>
    )
}
