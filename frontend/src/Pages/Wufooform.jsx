import React, { useEffect } from "react";

const WufooForm = () => {
  useEffect(() => {
    var z1c352v60vltnnj;
    (function (d, t) {
      var s = d.createElement(t),
        options = {
          userName: "testform123",
          formHash: "z1c352v60vltnnj",
          autoResize: true,
          height: "444",
          async: true,
          host: "wufoo.com",
          header: "show",
          ssl: true,
        };
      s.src =
        ("https:" == d.location.protocol ? "https://" : "http://") +
        "secure.wufoo.com/scripts/embed/form.js";
      s.onload = s.onreadystatechange = function () {
        var rs = this.readyState;
        if (rs && rs != "complete" && rs != "loaded") return;
        try {
          z1c352v60vltnnj = new WufooForm();
          z1c352v60vltnnj.initialize(options);
          z1c352v60vltnnj.display();
        } catch (e) {}
      };
      var scr = d.getElementsByTagName(t)[0],
        par = scr.parentNode;
      par.insertBefore(s, scr);
    })(document, "script");
  }, []);

  return (
    <>
    {/* Go to your wufoo form page----> select share form------->select iFrame----->copy the code and use */}
    <div style={{ marginTop: "100px" , marginLeft: "100px", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <iframe
        height={1000}
        title="Embedded Wufoo Form"
        allowtransparency="true"
        frameBorder={0}
        scrolling="yes"
        style={{ width: "100%", border: "none" }}
        sandbox="allow-popups-to-escape-sandbox allow-top-navigation allow-scripts allow-popups allow-forms allow-same-origin"
        src="https://testform123.wufoo.com/embed/z1c352v60vltnnj/"
      />
    </div>
    </>
  );
};

export default WufooForm;
