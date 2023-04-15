import React from "react";
import PropTypes from "prop-types";

export default function CustomCard({
  entityType,
  entityTitle,
  entityVolume,
  entityPrice,
  entityTransportation,
  entityNegotiation
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        {
            entityType == "bid" ? <img class="rounded-t-lg" src="/img/bid.jpeg" alt="" /> : (
                entityType == "offer" ? <img class="rounded-t-lg" src="/img/offer.png" alt="" /> : <img class="rounded-t-lg" src="/img/truck.jpeg" alt="" />
            )
        }
         
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-default uppercase font-bold text-xs">
                {entityTitle}
              </h5>
              
            </div>
            <div className="relative w-full flex items-center justify-between mt-3">
                <h5 className="text-default uppercase font-bold text-xs">
                    VOLUME:
                </h5>
                <h6 className="font-semibold text text-emerald-500">
                    {entityVolume}
                </h6>
            </div>

            {/* <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full default_color"
                }
              >
                <p>Unit Price</p>

                <p>KES {entityPrice}</p>
              </div>
            </div> */}

            <div className="relative w-full flex items-center justify-between mt-3">
                <h5 className="text-default uppercase font-bold text-xs">
                    UNIT PRICE:
                </h5>
                <h6 className="font-semibold bg-green-500 text-emerald-500">
                    KES {entityPrice ? parseInt(entityPrice).toLocaleString() : "0.0"}
                </h6>
            </div>

            <div className="relative w-full flex items-center justify-between mt-3">
              {
                entityType !== "transportRate" && (
                  <div>   
                    <h5 className="text-default uppercase font-bold text-xs">
                        TRANSPORT:
                        <span className="ml-1 whitespace-nowrap">
                        {
                            entityTransportation ? <span className="text-emerald-500"> Yes <i className="fas fa-check"></i> </span> : <span className="text-red-500"> No <i className="fas fa-ban"></i> </span>
                        }
                        </span>
                    </h5>
                </div>
                )
              }
                
                <div>   
                    <h5 className="text-default uppercase font-bold text-xs">
                        NEGOTIABLE: 
                        <span className="ml-1 whitespace-nowrap">
                        {
                            entityNegotiation ? <span className="text-emerald-500">Yes <i className="fas fa-check"></i> </span> : <span className="text-red-500">No <i className="fas fa-ban"></i> </span>
                        }
                        </span>
                    </h5>
                </div>

            </div>

            {/* <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full default_color"
                }
              >
                <i className={statIconName}></i>
              </div>
            </div> */}
          </div>
          {/* <p className="text-sm text-blueGray-400 mt-4">
            <span className={statPercentColor + " mr-2"}>
              <i
                className={
                  statArrow === "up"
                    ? "fas fa-arrow-up"
                    : statArrow === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "}
              {statPercent}%
            </span>
            <span className="whitespace-nowrap">{statDescripiron}</span>
          </p> */}
        </div>
      </div>
    </>
  );
}

CustomCard.defaultProps = {
  entityType: "Bid",
  entityTitle: "Bid",
  entityVolume: "",
  entityPrice: "",
  entityTransportation: "",
  entityNegotiation: ""
};

CustomCard.propTypes = {
  entityType: PropTypes.string,
  entityTitle: PropTypes.string,
  entityVolume: PropTypes.string,
  entityPrice: PropTypes.string,
  entityTransportation: PropTypes.string,
  entityNegotiation: PropTypes.string
};
