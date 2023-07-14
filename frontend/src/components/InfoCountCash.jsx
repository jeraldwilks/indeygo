import React from "react";
import Button from "@mui/material/Button";

const InfoCountCash = () => {
  return (
    <div>
      <h2>Run Your Fundraiser</h2>
      <p>
        Pick a start and end date – we suggest running your fundraiser over
        10-14 days and include two weekends. Goal setting is important to help
        motivate your group. Clearly communicate your goal with your
        participants as well as your customers.
      </p>
      <p>
        Collect the order forms and funds from your participants. Any cheques
        collected should be made out to your organization. Keep these order
        forms – you will need them when the participants pick up their orders.
        If you ran an online store, include these sales in your brochure sales
        total.
      </p>
      <p>
        Submit your order either online, fax, or by calling the Indeygo Office.
        Orders for frozen goods need to be submitted in case lots (6 units/case
        for Cookie Dough/Muffin Dough and 4 packs/case for Cinnamon/Sticky Buns
        – sorry no mixed cases). Other products can be submitted by units.
        Orders bound for Western Canada normally take 7-10 business days, and
        orders for Eastern Canada take 10-14 business days. Your group will be
        invoiced upon ordering, and we require payment prior to shipping.
      </p>
      <p>
        **A comprehensive checklist is available in our Coordinator Info section
      </p>
      <Button variant="contained" style={{ backgroundColor: "#0B4D83" }}>Coordinators Checklist</Button>
    </div>
  );
};

export default InfoCountCash;
