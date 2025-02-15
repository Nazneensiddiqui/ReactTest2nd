import React, { useState } from "react";

const Contact=()=>{
  const [basicSalary, setBasicSalary] = useState("");
  const [ta, setTA] = useState("");
  const [da, setDA] = useState("");
  const [hra, setHRA] = useState("");
  const [totalSalary, setTotalSalary] = useState(0);
  const [tax, setTax] = useState(0);

  const calculateSalary = () => {
    const total = Number(basicSalary) + Number(ta) + Number(da) + Number(hra);
    setTotalSalary(total);

    let taxAmount = 0;
    if (total >= 300000) {
      taxAmount = total * 0.1;
    } else if (total >= 80000) {
      taxAmount = total * 0.2;
    } else if (total >= 50000) {
      taxAmount = total * 0.15;
    } else if (total < 30000) {
      taxAmount = 0;
    }

    setTax(taxAmount);
  };


    return(
        <>
        
      <h1> Contact Page</h1> 
      <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
      <h2>Salary & Tax Calculator</h2>
      <input type="number" placeholder="Basic Salary" value={basicSalary} onChange={(e) => setBasicSalary(e.target.value)} /><br /><br />
      <input type="number" placeholder="TA" value={ta} onChange={(e) => setTA(e.target.value)} /><br /><br />
      <input type="number" placeholder="DA" value={da} onChange={(e) => setDA(e.target.value)} /><br /><br />
      <input type="number" placeholder="HRA" value={hra} onChange={(e) => setHRA(e.target.value)} /><br /><br />
      <button onClick={calculateSalary} style={{ padding: "10px", background: "blue", color: "white", border: "none", borderRadius: "5px" }}>Calculate</button>
      <h3>Total Salary: ₹{totalSalary}</h3>
      <h3>Tax: ₹{tax}</h3>
    </div> 
        </>
    )
}
export default Contact;