import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ShowGridItems.css";

export default function ShowGridItems() {
  return (
    <div className="container text-center my-4">
      <div className="row g-3">
        {/* Left big image */}
        <div className="col-12 col-md-6">
        <Link to="/Women">
            <img
              src="https://images.template.net/66535/Fashion-Multipurpose-Rollup-Banner-Template.jpeg"
              alt="Women Banner"
              className="img-fluid w-100"
            />
          </Link>
        </div>

        {/* Right column with two stacked images */}
        <div className="col-12 col-md-6 d-flex flex-column gap-3">
        <Link to="/Men">
            <img
              src="https://templates.simplified.co/thumb/3446e660-7af3-4ff6-86ce-755afcde8fcd.jpg"
              alt="Men Banner"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </Link>
          <Link to="/women/kurti">
            <img
              src="https://www.soch.com/media/wysiwyg/07_Main-Strip-Banner_Old-size-min.jpg"
              alt="Ethnics Banner"
              className="img-fluid w-100"
            />
          </Link>
          <Link to="/kids">
            <img
              src="https://hulaglobal.com/wp-content/uploads/2025/03/Top-10-Kids-Clothing-Brands.webp"
              alt="Kids Banner"
              className="img-fluid w-100"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
