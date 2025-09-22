import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import productsData from "../data/products";

const sortFunctions = {
  nameAsc: (a, b) => a.name.localeCompare(b.name),
  nameDesc: (a, b) => b.name.localeCompare(a.name),
  priceAsc: (a, b) => a.discountPrice - b.discountPrice,
  priceDesc: (a, b) => b.discountPrice - a.discountPrice,
  popularityAsc: (a, b) => a.ratingCount - b.ratingCount,
  popularityDesc: (a, b) => b.ratingCount - a.ratingCount,
};

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortMethod, setSortMethod] = useState("nameAsc");
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const filtered = productsData
    .filter(
      (p) =>
        (selectedColor ? p.colors.includes(selectedColor) : true) &&
        (selectedBrands.length === 0 || selectedBrands.includes(p.category)) &&
        p.discountPrice >= priceRange[0] &&
        p.discountPrice <= priceRange[1]
    )
    .sort(sortFunctions[sortMethod]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedProducts = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  useEffect(() => {
    setPage(1);
  }, [selectedColor, selectedBrands, priceRange, sortMethod, itemsPerPage]);

  
  return (
    <>
      <Navbar onToggleSidebar={() => setSidebarOpen((v) => !v)} />
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex gap-6">
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        <main className="flex-1 py-4 sm:py-6">
          <Banner />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="border rounded p-2"
              >
                <option value={12}>Show 12</option>
                <option value={24}>Show 24</option>
                <option value={36}>Show 36</option>
              </select>
              <select
                value={sortMethod}
                onChange={(e) => setSortMethod(e.target.value)}
                className="border rounded p-2"
              >
                <option value="nameAsc">Name (A-Z)</option>
                <option value="nameDesc">Name (Z-A)</option>
                <option value="priceAsc">Price (Low to High)</option>
                <option value="priceDesc">Price (High to Low)</option>
                <option value="popularityDesc">Popularity (High to Low)</option>
                <option value="popularityAsc">Popularity (Low to High)</option>
              </select>
            </div>
            <span>
              Showing {paginatedProducts.length} of {filtered.length} products
            </span>
          </div>

          <ProductGrid products={paginatedProducts} selectedColor={selectedColor} />

          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </main>
      </div>
      </div>
      <Footer />
    </>
  );
}
