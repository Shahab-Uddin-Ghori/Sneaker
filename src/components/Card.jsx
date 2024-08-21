import React from "react";
import AddCart from "./AddCart";
import cardsObj from "./CardObj";

function Card() {
  // obj for cards
  // let cardsObj = [
  //   {
  //     shoeName: "Air Jordan 1 Retro High OG ",
  //     price: "$" + 650,
  //     shoeImg:
  //       "https://sothebys-md.brightspotcdn.com/a7/ae/45cbd0174f71a39c4fd47d8f05aa/hkmt-c9ksz-2-t3.jpg",
  //     quantity: "Sold Out  70%",
  //     rating: (
  //       <>
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <HalfRatedStar />
  //       </>
  //     ),
  //   },
  //   {
  //     shoeName: "Blue Air Jordan Sneakers Nike 1",
  //     price: "$" + 540,
  //     shoeImg: `https://images.stockx.com/images/Air-Jordan-1-Retro-High-Off-White-University-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&auto=compress&dpr=2&trim=color&updated_at=1606321054&fm=webp&q=60`,
  //     quantity: "Sold Out  85%",
  //     rating: (
  //       <>
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //       </>
  //     ),
  //   },
  //   {
  //     shoeName: "Air Jordan 3 White Cement ",
  //     price: "$" + 349,
  //     shoeImg: `https://www.wavesau.com/cdn/shop/files/1679787081154X9K5TXCWC34SPAP23FAJ_1200x.jpg?v=1722896070`,
  //     quantity: "Sold Out  67%",
  //     rating: (
  //       <>
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <HalfRatedStar />
  //       </>
  //     ),
  //   },
  //   {
  //     shoeName: "Purple White Air Jordan",
  //     price: "$" + 700,
  //     shoeImg: `https://cdn-images.farfetch-contents.com/16/83/42/59/16834259_44389767_600.jpg`,
  //     quantity: "Sold Out  90%",
  //     rating: (
  //       <>
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //       </>
  //     ),
  //   },
  //   {
  //     shoeName: "Black Air Jordan Sneakers",
  //     price: "$" + 300,
  //     shoeImg: `https://cdn.flightclub.com/TEMPLATE/803229/1.jpg`,
  //     quantity: "Sold Out  45%",
  //     rating: (
  //       <>
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <HalfRatedStar />
  //       </>
  //     ),
  //   },
  //   {
  //     shoeName: "Air Jordan 1 Low Erkek Basketbol",
  //     price: "$" + 349,
  //     shoeImg: `https://www.sportinn.com.tr/air-jordan-1-low-erkek-basketbol-ayakkabisi-553558-140-144482-58-O.jpg`,
  //     quantity: "Sold Out  95%",
  //     rating: (
  //       <>
  //         <RatedStar />
  //         <RatedStar />
  //         <HalfRatedStar />
  //       </>
  //     ),
  //   },
  //   {
  //     shoeName: "AIR JORDAN 6 RETRO (GS)",
  //     price: "$" + 500,
  //     shoeImg: `https://cdn.afew-store.com/assets/36/362404/2400/air-jordan-6-retro-gs-white-dutch-blue-citron-tint-black-dm9045-100-sneaker-packshots-0.jpg`,
  //     quantity: "Sold Out  60%",
  //     rating: (
  //       <>
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //       </>
  //     ),
  //   },
  //   {
  //     shoeName: "Blue Air Jordan Sneakers Nike 3",
  //     price: "$" + 300,
  //     shoeImg: `https://cdn-images.farfetch-contents.com/17/65/14/16/17651416_36850162_600.jpg`,
  //     quantity: "Sold Out  70%",
  //     rating: (
  //       <>
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //       </>
  //     ),
  //   },
  //   {
  //     shoeName: "Blue Air Jordan Sneakers Nike 3",
  //     price: "$" + 250,
  //     shoeImg: `https://wp.clutchpoints.com/wp-content/uploads/2023/08/Air-Jordan-2-Retro-Low-UNC-WhiteUniversity-BlueCement-Grey.jpg`,
  //     quantity: "Sold Out  90%",
  //     rating: (
  //       <>
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <HalfRatedStar />
  //       </>
  //     ),
  //   },
  //   {
  //     shoeName: "Blue Air Jordan Sneakers Nike 3",
  //     price: "$" + 250,
  //     shoeImg: `https://wp.clutchpoints.com/wp-content/uploads/2023/08/Air-Jordan-2-Retro-Low-UNC-WhiteUniversity-BlueCement-Grey.jpg`,
  //     quantity: "Sold Out  90%",
  //     rating: (
  //       <>
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <HalfRatedStar />
  //       </>
  //     ),
  //   },
  //   {
  //     shoeName: "Blue Air Jordan Sneakers Nike 3",
  //     price: "$" + 250,
  //     shoeImg: `https://wp.clutchpoints.com/wp-content/uploads/2023/08/Air-Jordan-2-Retro-Low-UNC-WhiteUniversity-BlueCement-Grey.jpg`,
  //     quantity: "Sold Out  90%",
  //     rating: (
  //       <>
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <HalfRatedStar />
  //       </>
  //     ),
  //   },
  //   {
  //     shoeName: "Blue Air Jordan Sneakers Nike 3",
  //     price: "$" + 250,
  //     shoeImg: `https://wp.clutchpoints.com/wp-content/uploads/2023/08/Air-Jordan-2-Retro-Low-UNC-WhiteUniversity-BlueCement-Grey.jpg`,
  //     quantity: "Sold Out  90%",
  //     rating: (
  //       <>
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <HalfRatedStar />
  //       </>
  //     ),
  //   },
  //   {
  //     shoeName: "Blue Air Jordan Sneakers Nike 3",
  //     price: "$" + 250,
  //     shoeImg: `https://wp.clutchpoints.com/wp-content/uploads/2023/08/Air-Jordan-2-Retro-Low-UNC-WhiteUniversity-BlueCement-Grey.jpg`,
  //     quantity: "Sold Out  90%",
  //     rating: (
  //       <>
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <HalfRatedStar />
  //       </>
  //     ),
  //   },
  //   {
  //     shoeName: "Blue Air Jordan Sneakers Nike 3",
  //     price: "$" + 250,
  //     shoeImg: `https://wp.clutchpoints.com/wp-content/uploads/2023/08/Air-Jordan-2-Retro-Low-UNC-WhiteUniversity-BlueCement-Grey.jpg`,
  //     quantity: "Sold Out  90%",
  //     rating: (
  //       <>
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <RatedStar />
  //         <HalfRatedStar />
  //       </>
  //     ),
  //   },
  // ];

  return (
    <>
      {/* // map function */}
      {cardsObj.map((data, idx) => {
        return (
          // card styling container div
          <div
            key={idx}
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "14rem",
              height: "16rem",
              backgroundColor: "#fff",
              borderRadius: "16px",
              boxShadow: "0 6px 4px rgba(0, 0, 0, 0.13)",
              overflow: "hidden",
            }}
          >
            {/* // img container */}
            <div
              className="cardImgContainer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "70%",
                backgroundColor: "#F7F7F7",
                borderRadius: "16px 16px 0 0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                className="cardImg"
                src={data.shoeImg}
                alt="Sneaker"
                style={{
                  width: "100%",
                  // height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  transition: "ease .5s",
                }}
              />
            </div>
            {/* card content */}
            <div
              className="cardContent"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".5rem",
                padding: "0 .5rem 0",
              }}
            >
              {/* card rating */}
              <div
                className="rating"
                style={{
                  fontSize: ".7rem",
                  display: "flex",
                  gap: ".1rem",
                  alignItems: "center",
                  padding: ".5rem 0 0 .2rem ",
                }}
              >
                {data.rating}
                <p style={{ fontSize: ".64rem", color: "#695F5F" }}>
                  (11.6 k reviews)
                </p>
              </div>
              {/* card Name */}
              <p style={{ fontSize: ".85rem" }}>{data.shoeName}</p>
              {/* price stock container */}
              <div
                className="PriceStockCardContainer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: ".5rem",
                }}
              >
                {/* card price and quantity */}
                <div
                  className="PriceStock"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: ".5rem",
                  }}
                >
                  {/* price */}
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      letterSpacing: "1px",
                    }}
                  >
                    {data.price}
                  </p>
                  {/* quantity */}
                  <p style={{ color: "#695F5F", fontSize: ".8rem" }}>
                    {data.quantity}
                  </p>
                </div>
                <AddCart />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
