import smallIcon from "../../../assets/images/small-icon.png";
import StackingPoolBox from "./StackingPoolBox";
const Stacking = () => {
  const data = [
    {
      image: smallIcon,
      name: " AXO BNB",
      earned: "0.0",
      APR: "10.2%",
      liquidity: "$240,589,381",
      multiplier: "40x",
    },
    {
      image: smallIcon,
      name: " AXO BNB",
      earned: "0.0",
      APR: "10.2%",
      liquidity: "$240,589,381",
      multiplier: "40x",
    },
    {
      image: smallIcon,
      name: " AXO BNB",
      earned: "0.0",
      APR: "10.2%",
      liquidity: "$240,589,381",
      multiplier: "40x",
    },
  ];
  return (
    <div className="pool-wrp">
      {data.map((el, i) => {
        return (
          <StackingPoolBox key={i} data={el} isLast={data.length === i + 1} />
        );
      })}
    </div>
  );
};
export default Stacking;
