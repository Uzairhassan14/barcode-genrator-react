import React from "react";
import "./styles.css";

import { useBarcode } from "react-barcodes";

export default function App() {
  const { inputRef } = useBarcode({
    value: "PS-2023-38-B",
    options: {
      background: "#E8E8E8",
    },
  });

  return (
    <div className="App">
      <h1>react-barcodes</h1>
      <svg ref={inputRef} />
    </div>
  );
}
