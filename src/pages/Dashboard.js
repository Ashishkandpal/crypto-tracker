import React, { useEffect, useState } from "react";
import BackToTop from "../components/common/BackToTop/BackToTop";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer/Footer";
import Loader from "../components/common/Loader/Loader";
import PaginationComponent from "../components/Dasboard/Pagination/PaginationComponent";
import Search from "../components/Dasboard/Search/Search";
import TabsComponent from "../components/Dasboard/Tabs/Tabs";
import { get100Coins } from "../functions/get100Coins";

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const handlePageChange = (event, value) => {
    setPage(value);
    let previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  let filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const myCoins = await get100Coins();

    if (myCoins) {
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <BackToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent
            coins={search ? filteredCoins : paginatedCoins}
            setSearch={setSearch}
          />
          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      )}
      <Footer />
    </>
  );
}

export default Dashboard;
