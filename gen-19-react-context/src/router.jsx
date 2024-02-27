import { Route, Routes,Navigate } from "react-router-dom";
import ProductList from "./pages/admin/productList";
import Dashboard from "./pages/user/dashboard";
import ProductDetail from "./pages/user/productDetail";
import ErrorPage from "./pages/error";
import AddProduct from "./pages/admin/addProduct";
import EditProduct from "./pages/admin/editProduct";
import Checkout from "./pages/user/checkout";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />}/>
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/editproduct/:id" element={<EditProduct />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<ErrorPage code="404" title="Ooopss Page Not Found" />} />
        </Routes>
    )
}
