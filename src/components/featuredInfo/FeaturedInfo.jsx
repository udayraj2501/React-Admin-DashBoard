import "./featuredInfo.css";

const FeaturedInfo = () => {
  return (
    <div className = "featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                    $2,415
                </span>

                <span className="featuredMoneyRate"> -11.4  <i className="featuredIcon negative fa-solid fa-arrow-down"></i></span>
            </div>

            <span className="featuredSub">Comapared to last month</span>
        </div>



        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                    $4,415
                </span>

                <span className="featuredMoneyRate"> -1.4  <i className="featuredIcon negative fa-solid fa-arrow-down"></i></span>
            </div>

            <span className="featuredSub">Comapared to last month</span>
        </div>


        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                    $2,215
                </span>

                <span className="featuredMoneyRate"> +2.4  <i className="featuredIcon fa-solid fa-arrow-up"></i></span>
            </div>

            <span className="featuredSub">Comapared to last month</span>
        </div>


    </div>
  )
}

export default FeaturedInfo