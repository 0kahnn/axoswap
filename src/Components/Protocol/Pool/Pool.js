import smallIcon from "../../../assets/images/small-icon.png";
import PoolBox from "./PoolBox";
const Pool = () => {
  const data = [
    {
      image: smallIcon,
      name: "Stake Axoswap",
      AXOstaked: "0.0",
      usd: 0,
      flexibleAPY: "10.82%",
      lockedAPY: "Up to 231.12%",
      totalStaked: "134,981,587 AXO ",
    },
    {
      image: smallIcon,
      name: "Stake Axoswap",
      AXOstaked: "0.0",
      usd: 10,
      flexibleAPY: "10.82%",
      lockedAPY: "Up to 231.12%",
      totalStaked: "134,981,587 AXO ",
    },
    {
      image: smallIcon,
      name: "Stake Axoswap",
      AXOstaked: "0.0",
      usd: 0,
      flexibleAPY: "10.82%",
      lockedAPY: "Up to 231.12%",
      totalStaked: "134,981,587 AXO ",
    },
    {
      image: smallIcon,
      name: "Stake Axoswap",
      AXOstaked: "0.0",
      usd: 0,
      flexibleAPY: "10.82%",
      lockedAPY: "Up to 231.12%",
      totalStaked: "134,981,587 AXO ",
    },
    {
      image: smallIcon,
      name: "Stake Axoswap",
      AXOstaked: "0.0",
      usd: 0,
      flexibleAPY: "10.82%",
      lockedAPY: "Up to 231.12%",
      totalStaked: "134,981,587 AXO ",
    },
  ];
  return (
    <div className="pool-wrp">
      {data.map((el, i) => {
        return <PoolBox data={el} key={i} isLast={data.length === i + 1} />;
      })}
    </div>
  );
};
export default Pool;
