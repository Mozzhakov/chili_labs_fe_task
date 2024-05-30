"use client";
import styles from "./page.module.css";
import { IProduct } from "@/types/Product";
import { Loader } from "@/components/Loader/Loader";
import { ProductList } from "@/components/ProductList/ProductList";
import { Pagination } from "@/components/Pagination/Pagination";
import { FilterInput } from "@/components/FilterInput/FilterInput";
import { useState, useEffect } from "react";

function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(5);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await res.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!products) {
    return <div>There are no products found</div>;
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  );
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main className={styles.main}>
      <FilterInput filter={filter} setFilter={setFilter} />
      <ProductList products={currentProducts} />
      <Pagination
        productsPerPage={productsPerPage}
        length={filteredProducts.length}
        handlePagination={handlePagination}
        currentPage={currentPage}
      />
    </main>
  );
}

export default Home;
