import { iProduct } from "../../../types/Product";
import ProductPrice from "./ProductPrice";
import SocialMedia from "../../socialmedia/SocialMedia";
import StarRating from "../../icons/StarRating";

export default function ProductItem(product: iProduct) {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container">
        <div className="row mb-24">
          <div className="col-12 col-md-6 mb-8 mb-md-0">
            <div
              className="position-relative mb-10"
              style={{ height: "564px" }}
            >
              <img
                className="img-fluid w-100 h-100"
                style={{ objectFit: "contain" }}
                src={product.imgUrl}
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="ps-lg-20">
              <div className="mb-10 pb-10 border-bottom">
                <span className="text-secondary">{product.title}</span>
                <h1 className="mt-2 mb-6 mw-xl">{product.description}</h1>
                <StarRating rating={product.rating} />
                <ProductPrice {...product} />
                <p className="mw-md text-secondary">{product.description}</p>
              </div>

              <div className="d-flex mb-12">
                <div className="me-6">
                  <span className="d-block mb-4 fw-bold text-secondary text-uppercase">
                    QTY
                  </span>
                  <div className="d-inline-flex align-items-center px-4 fw-bold text-secondary border rounded-2">
                    <button className="btn px-0 py-2">
                      <svg
                        width="12"
                        height="2"
                        viewBox="0 0 12 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.35">
                          <rect
                            x="12"
                            width="2"
                            height="12"
                            transform="rotate(90 12 0)"
                            fill="currentColor"
                          ></rect>
                        </g>
                      </svg>
                    </button>
                    <input
                      className="form-control m-0 px-2 py-4 text-center text-md-end border-0"
                      style={{ width: "48px" }}
                      type="number"
                      placeholder="1"
                    />
                    <button className="btn px-0 py-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.35">
                          <rect
                            x="5"
                            width="2"
                            height="12"
                            fill="currentColor"
                          ></rect>
                          <rect
                            x="12"
                            y="5"
                            width="2"
                            height="12"
                            transform="rotate(90 12 5)"
                            fill="currentColor"
                          ></rect>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <span className="d-block mb-4 fw-bold text-secondary text-uppercase">
                    Size
                  </span>
                  <select
                    className="form-select border ps-6 pe-10 py-4 fw-bold text-secondary"
                    name=""
                    id=""
                  >
                    <option value="1">Medium</option>
                    <option value="2">Small</option>
                    <option value="3">Large</option>
                  </select>
                </div>
              </div>

              <h3>
                Fancy display heading
                <small className="text-muted">With faded secondary text</small>
              </h3>

              <div className="row mb-14" data-path="0.0.0.1.0.2">
                <div
                  className="col-12 col-xl-8 mb-4 mb-xl-0"
                  data-path="0.0.0.1.0.2.0"
                >
                  <a
                    className="btn w-100 btn-primary"
                    href="#"
                    data-config-id="primary-action"
                    data-path="0.0.0.1.0.2.0.0"
                  >
                    Add to cart
                  </a>
                </div>
                <div className="col-12 col-xl-4" data-path="0.0.0.1.0.2.1">
                  <a
                    className="h-100 ms-auto ms-sm-0 flex-shrink-0 d-inline-flex me-4 align-items-center justify-content-center rounded-2 border"
                    style={{ padding: "15px" }}
                    href="#"
                    data-path="0.0.0.1.0.2.1.0"
                  >
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="auto-svg-5-1"
                      data-path="0.0.0.1.0.2.1.0.0"
                    >
                      <path
                        d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-path="0.0.0.1.0.2.1.0.0.0"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="flex-shrink-0 h-100 d-inline-flex align-items-center justify-content-center rounded-2 border"
                    style={{ padding: "15px" }}
                    href="#"
                    data-path="0.0.0.1.0.2.1.1"
                  >
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="auto-svg-6-1"
                      data-path="0.0.0.1.0.2.1.1.0"
                    >
                      <path
                        d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z"
                        fill="black"
                        stroke="black"
                        stroke-width="0.35"
                        data-path="0.0.0.1.0.2.1.1.0.0"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
