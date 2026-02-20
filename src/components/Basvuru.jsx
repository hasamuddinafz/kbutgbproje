import React from "react";
import { Link } from "react-router-dom";
function Basvuru() {
  return (
    <div>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-4 text-center p-5">
          <Link
            className="btn-custom rounded"
            to="https://docs.google.com/forms/d/1SHyJkITZ3gRGVvdq2n_nyOl2klNwZfIN4xU86V576Lc/viewform?edit_requested=true"
            target="_blank"
          >
            Basvuru
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Basvuru;
