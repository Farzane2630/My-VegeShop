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
import { cartContext } from "../../Contexts/Contexts";

export default function Products() {
  const dispatch = useDispatch();
  const bg = useSelector((state: stateType) => state.bgUrl);
  const products = useSelector((state: stateType) => state.products.products);
  const categories = useSelector((state: stateType) => state.products.categories);
  const selectedCategory = useSelector(
    (state: stateType) => state.products.selectedCategory
  );

  const filterProductsHandel = (categoryTitle: string) => {
    console.log(categoryTitle);
    
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

  const cart = useContext(cartContext)

  const [cartItems, setCartItems] = useState<productType[]>([])

  const addToCartHandler = (product: productType) => {

    if (cartItems.length > 1 && cartItems.includes(product)) {
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
    } else {
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

      setCartItems([...cart.cartItems, product])
    }

  };


  //wishlist
  const [wishlistItems, setWishlistItems] = useState<productType[]>([])

  const wishlistHandler = (productID: string) => {
    const favoriteItem = products.find((product) => product.id === productID);
    if (favoriteItem && wishlistItems.includes(favoriteItem)) {
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
    } else {
      toast.success("Item has been added to your wishlist", {
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
    favoriteItem && setWishlistItems([...cart.wishlistItems, favoriteItem])
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
              addToCart={() => addToCartHandler(product)}
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
