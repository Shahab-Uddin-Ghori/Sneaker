import React, { useEffect, useRef } from "react";
import "./Sec3.css";

function Sec3() {
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;

    const updateHeadings = () => {
      const contentRect = content.getBoundingClientRect();
      const headings = Array.from(content.querySelectorAll(".heading"));

      headings.forEach((heading) => {
        const headingRect = heading.getBoundingClientRect();
        const headingCenter = (headingRect.top + headingRect.bottom) / 2;
        const contentCenter = (contentRect.top + contentRect.bottom) / 2;

        if (
          headingCenter >= contentCenter - 20 &&
          headingCenter <= contentCenter + 20
        ) {
          heading.classList.add("dark");
        } else {
          heading.classList.remove("dark");
        }
      });

      // Loop the headings
      const lastHeading = headings[headings.length - 1];
      const firstHeading = headings[0];

      if (content.scrollTop === 0) {
        content.scrollTop = lastHeading.offsetTop - content.offsetTop;
      } else if (
        content.scrollTop + content.offsetHeight >=
        content.scrollHeight
      ) {
        content.scrollTop = firstHeading.offsetTop - content.offsetTop;
      }
    };

    content.addEventListener("scroll", updateHeadings);

    return () => {
      content.removeEventListener("scroll", updateHeadings);
    };
  }, []);

  return (
    <div className="content" ref={contentRef}>
      <h1 className="heading">Nike Air Max</h1>
      <h1 className="heading">Adidas Superstar</h1>
      <h1 className="heading">Jordan Retro</h1>
      <h1 className="heading">Puma Suede</h1>
      <h1 className="heading">Reebok Classic</h1>
      <h1 className="heading">Vans Old Skool</h1>
    </div>
  );
}

export default Sec3;
