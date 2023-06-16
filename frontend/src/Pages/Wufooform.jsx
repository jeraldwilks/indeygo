// import React from 'react'
import React, { useEffect } from 'react';

// const Wufooform = () => {
//     return (
    //     <div>
    //       <div>Wufooform</div>
    //       <div id="wufoo-z1c352v60vltnnj">
    //         Fill out my <a href="https://testform123.wufoo.com/forms/z1c352v60vltnnj">online form</a>.
    //       </div>
    //       <script type="text/javascript">
    //         var z1c352v60vltnnj;
    //         (function(d, t) {
    //           var s = d.createElement(t),
    //             options = {
    //               userName: 'testform123',
    //               formHash: 'z1c352v60vltnnj',
    //               autoResize: true,
    //               height: '444',
    //               async: true,
    //               host: 'wufoo.com',
    //               header: 'show',
    //               ssl: true
    //             };
    //           s.src =
    //             ('https:' == d.location.protocol ? 'https://' : 'http://') +
    //             'secure.wufoo.com/scripts/embed/form.js';
    //           s.onload = s.onreadystatechange = function() {
    //             var rs = this.readyState;
    //             if (rs)
    //               if (rs != 'complete') if (rs != 'loaded') return;
    //             try {
    //               z1c352v60vltnnj = new WufooForm();
    //               z1c352v60vltnnj.initialize(options);
    //               z1c352v60vltnnj.display();
    //             } catch (e) {}
    //           };
    //           var scr = d.getElementsByTagName(t)[0],
    //             par = scr.parentNode;
    //           par.insertBefore(s, scr);
    //         })(document, 'script');
    //       </script>
    //     </div>
    //   );


const WufooForm = () => {
  useEffect(() => {
    var z1c352v60vltnnj;
    (function(d, t) {
      var s = d.createElement(t),
        options = {
          userName: 'testform123',
          formHash: 'z1c352v60vltnnj',
          autoResize: true,
          height: '444',
          async: true,
          host: 'wufoo.com',
          header: 'show',
          ssl: true,
        };
      s.src =
        ('https:' == d.location.protocol ? 'https://' : 'http://') +
        'secure.wufoo.com/scripts/embed/form.js';
      s.onload = s.onreadystatechange = function() {
        var rs = this.readyState;
        if (rs && rs != 'complete' && rs != 'loaded') return;
        try {
          z1c352v60vltnnj = new WufooForm();
          z1c352v60vltnnj.initialize(options);
          z1c352v60vltnnj.display();
        } catch (e) {}
      };
      var scr = d.getElementsByTagName(t)[0],
        par = scr.parentNode;
      par.insertBefore(s, scr);
    })(document, 'script');
  }, []);

  return (
    <div>
      <div>Wufooform</div>
      <div id="wufoo-z1c352v60vltnnj">
        Fill out my{' '}
        <a href="https://testform123.wufoo.com/forms/z1c352v60vltnnj">online form</a>.
      </div>
    </div>
  );
};

export default WufooForm;

      
// export default Wufooform
