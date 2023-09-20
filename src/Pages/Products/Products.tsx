import "./_Products.scss";

// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import { useContext, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { Grid } from "@mui/material";
import ProductItem from "../../components/ProductItem/ProductItem";
import CustomPagination from "../../Utils/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../Redux/Reducers/products";
import { toast } from "react-toastify";
import { productType, stateType } from "../../Types/types";
import { productsContext } from "../../Contexts/Contexts";
import { addTolist } from "../../Redux/Reducers/Wishlist";


export default function Products() {
  const dispatch = useDispatch();
  const bg = useSelector((state: stateType) => state.bgUrl);
  const products = useSelector((state: stateType) => state.products.products);
  const categories = useSelector((state: stateType) => state.products.categories);
  const selectedCategory = useSelector(
    (state: stateType) => state.products.selectedCategory
  );

  const filterProductsHandel = (categoryTitle: string) => {
    dispatch(selectCategory(categoryTitle));
  };

  const filteredProducts =
    selectedCategory && selectedCategory !== "All"
      ? products.filter((product) => product.category === selectedCategory)
      : products;


  //pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsCountPerPage: number = 8;
  const indexOfLastItem = currentPage * itemsCountPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsCountPerPage;
  const shownItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

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
  const wishlist = useContext(productsContext)

  const [wishlistItems, setWishlistItems] = useState<productType[]>([])

  const wishlistHandler = (productID: string) => {
    const favorieItem = products && products.find((product) => product.id === productID);
    // @ts-ignore
    if (favorieItem && wishlistItems.includes(favorieItem)) {
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
      wishlist.localStorageWishlistItems(favorieItem)
      setWishlistItems(wishlist.wishlistItems)
    }
  };

  return (
    <>
      <Header />
      <Hero notIndex={true}>
        <SwiperSlide
          className="slide-1"
          style={{ backgroundImage: `url(${bg[1]})` }}
        >
          <p className="product-page"> Home Products </p>
          <h1 className="product-title">Products</h1>
        </SwiperSlide>
      </Hero>

      <ul className="filter">
        {categories.map((cat) => (
          <li
            className="filter-item"
            onClick={() => filterProductsHandel(cat.title)}
            key={cat.id}
          >
            {cat.title}
          </li>
        ))}
      </ul>

      <Grid container className="products-wrapper">
        {shownItems.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={3} p={3}>
            <ProductItem
              addToWishlist={() => wishlistHandler(product.id)}
              addToCart={() => addToCartHandler(product.id)}
              name={product.title}
              img={product.cover}
              price={product.price}
              discount={product.discount}
              path={`/product-info/${product.id}`}
            />
          </Grid>
        ))}
      </Grid>
      <CustomPagination
        items={filteredProducts}
        itemsCount={itemsCountPerPage}
        onPageChange={handlePageChange}
      />
      <Footer about={false} />
    </>
  );
}
