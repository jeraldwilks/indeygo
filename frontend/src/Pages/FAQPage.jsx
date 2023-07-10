import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  title: "Questions...we are here to help.",
  // subtitle: `<p>Here are some questions we are commonly asked. If you cant find the answer here
  // please contact us at <link>info@indeygo.com</link></p>`,
  rows: [
    {
      title: "Q. What are the ingredients in the cookie dough?",
      content: `Ingredients Classic Cookie Dough`,
    },
    {
      title: "Q. What are the ingredients in muffin dough?",
      content: "Muffin ingredients",
    },
    {
      title: "Q. What are the ingredients in the doggie dough?",
      content: `Doggie Dough Ingredients`,
    },
    {
      title:
        "Q. We are a small group looking for a way to raise funds. Would this be a profitable fundraiser for us?",
      content:
        "Small groups experience great success by selling Indeygo Products. Two weeks of fundraising by a motivated team with clear goals can easily earn over $3000.  Ask us about fundraising tools available and how you can qualify for free shipping.",
    },
    {
      title: "Q. How long does it take to receive our order?",
      content: `We can get your products delivered to you within 7-14 business days. Please contact us for more details on timelines and minimums for free shipping.`,
    },
    {
      title: "Q. How does it arrive?",
      content: `Frozen Goods – they arrive by refrigerated truck to your specified location
      <li>Beef Jerky – Arrives in one bulk order by courier</li>
      <li>Coffee and Tea – Arrives in one bulk order by courier</li>
      <li>Harvest Bundles – Fresh from the Grower to the School doors on delivery day</li>
      <li>Spring Planters – The Bulk order arrives by truck directly from the Greenhouse"</li>`,
    },
    {
      title:
        "Q. Is it okay if it the frozen goods thaw on the day of delivery?",
      content: `Yes – the cookie dough, muffin dough and the buns can be thawed and refrozen without any damage to the integrity of the product. Once received by the customers it should be stored in the freezer or fridge.`,
    },
    {
      title:
        "Q. Which products are sold in cases and which products by the unit?",
      content: `Cookie Dough, Muffin Dough, Gluten Free and Doggie Dough is shipped in full case lots of each flavour and each case contains 6 units.  Cinnamon/Sticky Buns come 4 packs/case. Sorry-no mixed cases.

      Beef Jerky, Coffee/Tea, Planters and Harvest Bundles are sold by the unit/package.`,
    },
    {
      title:
        "Q. What should we do with the extra tubs of Cookie Dough, Muffin Dough and Cinnamon Buns?",
      content:
        "When you are handing out the frozen goods on delivery day, you can put out a sign letting the parents, teachers, coaches and others know that you have extra dough for sale. You will find that people are keen to buy more if they know some is available giving you opportunity to make more profit.  You could also hand out extras to volunteers as a ‘thank you’ for their help with the fundraiser. As well, groups find it helpful to have extras on hand in case there were any counting mistakes or missed orders to fill.",
    },
    {
      title: "Q. Where do you deliver to?",
      content: `We deliver across Canada.`,
    },
    {
      title: "Q. Can I sell more than one type of product?",
      content: `Yes, you can but please keep in mind that we ship in full case lots only of the frozen goods. Our cookie dough, muffin dough and doggie dough are packaged 6 units/case. Cinnamon buns and sticky buns come 4 packs/case. Sorry-no mixed cases.

      Beef Jerky, Coffee/Tea, sell by the unit.`,
    },
    {
      title:
        "Q. How long does the Cookie Dough, Muffin Dough and Cinnamon Buns last in the fridge or freezer?",
      content: `We deliver across CanadaIndeygo Cookie Dough and Doggie Dough will keep up to 6 weeks in the fridge and up to 12 months in the freezer. It can be thawed and refrozen.

      Indeygo Muffin dough will keep up to 5 days in the fridge and 6 months in the freezer. It can be thawed and refrozen.
      
      The Cinnamon/Sticky Buns should be consumed within 10 days of being stored in the fridge and can be kept in the freezer for 3-4 months..`,
    },
    {
      title:
        "Q. Who do people make their cheques out to when they buy products from an Indeygo fundraiser?",
      content: `All cheques are made out to the group conducting the fundraiser.`,
    },
    {
      title: "Q. Does it cost anything up front to run an Indeygo fundraiser?",
      content: `There is no cost to start your fundraising campaign. Just let us know what you would like to fundraise with and we will send your complimentary fundraising package and order forms out to you.`,
    },
    {
      title: "Q. Do I have to pay for shipping?",
      content: `We provide free shipping for orders over certain minimums based on your location. Please give us a call to find out how many units you need to sell to qualify for the free shipping.`,
    },
    {
      title:
        "Q. Does the Cookie Dough, Muffin Dough and Cinnamon Buns contain nuts?",
      content: `We take peanut/nut allergies very seriously and want you as the consumer, to be fully informed about our policies and procedures. Indeygo Fundraising’s Frozen/Baked Goods are produced in a facility that does not handle peanuts directly.

      We produce two products that contain tree nuts; White Chocolate Macadamia Nut (macadamia nuts), Motherlode (pecans).  These are produced in the same facility as our other products. Our Oatmeal Coconut Chocolate Chunk includes coconut, which may be an allergen, although not classified as a nut.
      
      We take the utmost care in making sure that all of the production equipment is cleaned and sanitized to prevent tree nut cross contamination for our cookie dough, muffin dough, and cinnamon/sticky buns.
      
      Our chocolate supplier does not guarantee that the chocolate used for the White Chocolate Macadamia Nut, Chocolate Chunk and the Oatmeal Coconut Chocolate Chunk has not come in contact with either peanuts or other nuts as their plant is not peanut/nut free.`,
    },
    {
      title: "Q. Is the Beef Jerky gluten free?",
      content: `We do not test every batch of Jerky to ensure that it is gluten free.  The Jerky may have come into contact with gluten in its handling`,
    },
    {
      title: "Q. Can I run an online store?",
      content: `Yes, please call our office for details.  Online stores are a great way to compliment your campaign, however, we still find that traditional paper order forms are a bigger success.`,
    },
    {
      title: "Q. How do I place my group’s order?",
      content: `You can place your order on the website or give our office a call.  We are happy to start processing your order immediately and arrange a delivery date for you.`,
    },
    {
      title: "What if I am missing an item?",
      content: `COUNT – make sure the number of boxes matches your packing slip. LOOK – make sure nothing is dented or damaged. MARK – note any missing pieces or damage before signing the waybill.

      Call Indeygo (877) 463-3946 immediately if there are discrepancies.`,
    },
    {
      title:
        "I noticed that your Indeygo Doggie Dough has garlic in it. Is garlic safe for dogs?",
      content: `Reply from Dr. T Henderson (trained in both Traditional and Chinese Veterinary Medicine):  

      “ A small amount of garlic is fine for dogs. It aids digestion, enhances taste (lots of dogs like the taste of garlic) but it is dangerous in large amounts.  I, and many other vets, regularly recommend putting it in home cooked food. So don’t worry, the amount in your doggie dough is fine and totally safe.”`,
    },
  ],
};


const styles = {
  bgColor: "white",
  titleTextColor: "#0B4D83",
  rowTitleColor: "#0B4D83",
  rowContentColor: "grey",
  arrowColor: "#0B4D83",
  
};

const config = {
  animate: true,
  tabFocus: true,
};

const FAQPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ textAlign: "left", maxWidth: "600px" }}>
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
};

export default FAQPage;
