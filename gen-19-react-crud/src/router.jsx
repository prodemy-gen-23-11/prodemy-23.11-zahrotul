import { Route, Routes,Navigate } from "react-router-dom";
import ProductList from "./pages/productList";
import ProductDetail from "./pages/productDetail";
import ErrorPage from "./pages/error";
import AddProduct from "./pages/addProduct";
import EditProduct from "./pages/editProduct";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/productlist" />}/>
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/editproduct/:id" element={<EditProduct />} />
            <Route path="*" element={<ErrorPage code="404" title="Ooopss Page Not Found" />} />
        </Routes>
    )
}
