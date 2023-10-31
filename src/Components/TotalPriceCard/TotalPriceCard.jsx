import { useEffect, useState } from "react";

function TotalPriceCard({ rows }) {
  const [allRows, setAllRows] = useState(rows);
//   useEffect(() => {
//     const totalPrice = calculateTotalPrice(allRows);
//     console.log(totalPrice);
//   }, [rows]);

  const calculateTotalPrice = (rows) => {
    return rows.reduce((total, row) => {
      return total + row.Price * row.Quantity;
    }, 0);
  };
  const totalPrice = calculateTotalPrice(allRows);
  return <div className=" border-t-2">${totalPrice}</div>;
}

export default TotalPriceCard;
