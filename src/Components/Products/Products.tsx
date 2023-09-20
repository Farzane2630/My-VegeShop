
import ProductItem from "../ProductItem/ProductItem";
import { Box, Grid } from "@mui/material";
import "./_Products.scss";
import { useDispatch, useSelector } from "react-redux";
import { addTolist } from "../../Redux/Reducers/Wishlist";
import { toast } from "react-toastify";
import { productType, stateType } from "../../Types/types";
import { useContext, useState } from "react";
import { productsContext } from "../../Contexts/Contexts";


export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state: stateType) => state.products.products);

  //cartItems
  const cart = useContext(productsContext)

  const [cartItems, setCartItems] = useState<productType[]>([])

  const addToCartHandler = (productID: string) => {
    const selectedProduct = products && products.find(product => product.id === productID)
    // @ts-ignore
    if (selectedProduct && !cartItems.includes(selectedProduct)) {
      toast.success("Item added to cart", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      cart.localStorageCartItems(selectedProduct)
      setCartItems(cart.cartItems)
    } else {
      toast.error("You have added this Item before!", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  // wishlist
  const wishlist = useSelector((state: stateType) => state.wishlist)

  const wishlistHandler = (productID: string) => {
    const favorieItem = products.find((product) => product.id === productID);
    // @ts-ignore
    if (wishlist.includes(favorieItem)) {
      toast.error("You have added this Item before!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.success("Item added to wishlist", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      dispatch(addTolist(favorieItem));
    }
  };

  return (
    <Box>
      <div className="landing-section-title">Featured Products</div>
      <div className="landing-section-subtitle">Our Products</div>
      <div className="landing-section-details">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </div>
      <Grid container className="products-grid-container">
        {products.slice(0, 8).map((product, index) => (
          <Grid key={index + 1} item xs={12} sm={6} md={3} p={3}>
            <ProductItem
              addToWishlist={() => wishlistHandler(product.id)}
              addToCart={() => addToCartHandler(product.id)}
              name={product.title}
              img={product.cover}
              price={product.price}
              discount={product.discount}
              path={`Product-info/${product.id}`}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
