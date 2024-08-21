import React from "react";
import "./Sec3.css";
import Sec3Content from "./Sec3Content";

function Sec3() {
  let sec2ImgObj = [
    {
      url: `https://images.unsplash.com/photo-1637437757614-6491c8e915b5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    },
    {
      url: `https://img.freepik.com/premium-photo/running-shoes-white-background_10541-635.jpg`,
    },
    {
      url: `https://www.designscene.net/wp-content/uploads/2023/03/Air-Jordan-3-White-Cement-Reimagined-3-730x486.jpg`,
    },
    {
      url: `https://media.istockphoto.com/id/1248566148/photo/pair-of-stylish-sneakers-isolated-on-white-background-white-casual-shoes.jpg?s=612x612&w=0&k=20&c=QDYrDLZt0Efyaj0wZF_8dA6lTv-j66bai9d4IXblFMY=`,
    },
    {
      url: `https://media-public.canva.com/JUA04/MAEPkiJUA04/1/s.jpg`,
    },
    {
      url: `https://m.media-amazon.com/images/I/61WS1ZIBswL._AC_UY1000_.jpg`,
    },
    {
      url: `https://sothebys-com.brightspotcdn.com/dims4/default/89d6822/2147483647/strip/true/crop/795x512+0+0/resize/684x441!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F05%2F8a%2Fd2be10b94184a05ad8e34d992f2a%2Fsothebys-md.brightspotcdn.jpg`,
    },
    {
      url: `https://cdn.flightclub.com/TEMPLATE/803229/1.jpg`,
    },
    {
      url: `https://d1l5jyrrh5eluf.cloudfront.net/wp-content/uploads/2010/02/nike_kd2.jpg`,
    },
  ];

  const totalImages = sec2ImgObj.length;

  return (
    <div className="sec3">
      <div className="banner">
        <div className="slider">
          {sec2ImgObj.map((data, idx) => {
            const imgNum = idx + 1; // Image number starting from 1
            return (
              <div
                className="item"
                key={idx}
                style={{
                  "--imgNum": imgNum, // Pass --imgNum variable
                  "--totalImages": totalImages, // Pass --totalImages variable
                }}
              >
                <img src={data.url} alt={`Sneaker ${imgNum}`} />
              </div>
            );
          })}
        </div>
        <div className="modelContainer">
          <div className="model"></div>
        </div>
      </div>
      <Sec3Content />
    </div>
  );
}

export default Sec3;
