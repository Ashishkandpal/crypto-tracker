import List from "../components/Dasboard/List/List";
import React, { useEffect, useState } from "react";
import SelectDays from "../components/Coin/SelectDays/SelectDays";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer/Footer";
import Loader from "../components/common/Loader/Loader";
import { SelectCoins } from "../components/Compare/SelectCoins/SelectCoins";
import { coinObject } from "../functions/coinObject";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import CoinInfo from "../components/Coin/CoinInfo/CoinInfo";
import { settingChartData } from "../functions/settingChartData";
import LineChart from "../components/Coin/LineChart.js/LineChart";
import TogglePriceType from "../components/Coin/PriceType/PriceType";

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");

  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});

  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState({});

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
    const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);

    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  };

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices1 = await getCoinPrices(crypto1, days, priceType);
    const prices2 = await getCoinPrices(crypto2, days, priceType);

    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);

    setDays(days);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);

    if (data1) {
      coinObject(setCrypto1Data, data1);
    }

    if (data2) {
      coinObject(setCrypto2Data, data2);
    }

    if (data1 && data2) {
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);

      settingChartData(setChartData, prices1, prices2);
      if (prices1.length > 0 && prices2.length > 0) {
        //   settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }
  };

  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, data);
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      if (prices1.length > 0 && prices2.length > 0) {
        //   settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    } else {
      setCrypto1(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto1Data, data);
    }
  };
  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="coins-days-flex">
            <SelectCoins
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays
              days={days}
              handleDaysChange={handleDaysChange}
              noPTag={true}
            />
          </div>
          <div className="gradient-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={crypto1Data} />
          </div>
          <div className="gradient-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={crypto2Data} />
          </div>
          <div className="gradient-wrapper chart-wrapper">
            <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart
              chartData={chartData}
              priceType={priceType}
              multiAxis={true}
            />
          </div>
          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default ComparePage;
