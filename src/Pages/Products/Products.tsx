import "./_Products.scss";

// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
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
import { addToCart } from "../../Redux/Reducers/cartItems";
import { addTolist } from "../../Redux/Reducers/Wishlist";
import { toast } from "react-toastify";
import { productType, stateType } from "../../Types/types";

export default function Products() {
  const dispatch = useDispatch();
  const bg = useSelector((state: stateType) => state.bgUrl);
  const products = useSelector((state: stateType) => state.products.products);
  const categories = useSelector((state: stateType) => state.products.categories);
  const selectedCategory = useSelector(
    (state: stateType) => state.products.selectedCategory
  );

  const filterProductsHandel = (category: { id: string, title: string }) => {
    dispatch(selectCategory(category));
  };

  const filteredProducts =
    selectedCategory && selectedCategory !== "All"
      ? products.filter((product) => product.category === selectedCategory)
      : products;

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsCountPerPage = 8;
  const indexOfLastItem = currentPage * itemsCountPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsCountPerPage;
  const shownItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  //cartItems
  const cartItems = useSelector((state: stateType) => state.cart.cartItems);

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
      const updatedProductObject = {
        id: uuidv4(),
        title: product.title,
        price: product.price,
        quantity: 1,
        rate: product.rate,
        sold: product.sold,
        cover: product.cover,
        inStock: product.inStock,
        category: product.category,
        discount: product.discount,
      };
      // @ts-ignore
      dispatch(addToCart(updatedProductObject));
    }
  };


  //wishlist
  const wishlist = useSelector((state: stateType) => state.wishlist);

  const wishlistHandler = (productID: string) => {
    const favoriteItem = products.find((product) => product.id === productID);
    if (favoriteItem && wishlist.includes(favoriteItem)) {
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
    dispatch(addTolist(favoriteItem));
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
        {categories.map((category: { title: string, id: string }) => (
          <li
            className="filter-item"
            onClick={() => filterProductsHandel(category)}  // category.title => category
            key={category.id}
          >
            {category.title}
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
