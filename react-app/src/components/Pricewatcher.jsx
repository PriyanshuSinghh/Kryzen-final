import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./footer";

export default function Pricewatcher() {
  return (
    <div>
      <div>
        <NavigationBar/>
      </div>
      <div className="table">
        <div className="table-wrapper">
          <div className="container">
            <div className="table-responsive">
              <h1>Price Watchlist: India</h1>
              <p>Find price of different commodities.</p>
              <table className="table table-vcenter">
                <thead>
                  <tr>
                    <th></th>
                    <th>PRODUCT</th>
                    <th>WHOLESALE PRICE</th>
                    <th>RETAIL PRICE</th>
                    <th>WEEKS HIGH</th>
                    <th>WEEKS LOW</th>
                    <th>TREND</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.vz7Q3c036eUwFS_RlMinxAHaFi&pid=Api&rs=1&c=1&qlt=95&w=137&h=102"
                        alt="Italian Basil"
                        height={40}
                        width={75}
                      />
                    </td>

                    <td>Italian Basil</td>
                    <td>₹33.80</td>
                    <td>₹52.00</td>
                    <td>₹59.00</td>
                    <td>₹47.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.vHzxX5O6u5eWCjq4TAtnNgHaE7&pid=Api&rs=1&c=1&qlt=95&w=159&h=106"
                        alt="Swiss Chard"
                        height={40}
                        width={75}
                      />
                    </td>

                    <td> Swisschard</td>
                    <td>₹31.20</td>
                    <td>₹48.00</td>
                    <td>₹59.00</td>
                    <td>₹48.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,w_1500,c_fill,g_auto/https://storage.googleapis.com/gen-atmedia/3/2012/03/d852987f86aeae8b65926f9e7a260c28285ea744.jpeg"
                        alt="broccoli"
                        height={40}
                        width={75}
                      />
                    </td>

                 
                      <td>Broccoli</td>
                    
                    <td>₹29.90</td>
                    <td>₹46.00</td>
                    <td>₹59.00</td>
                    <td>₹46.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.jp1X5k8UDqgX_D5C89G1iQHaE8&pid=Api&P=0&h=180"
                        alt="Kale"
                        height={40}
                        width={75}
                      />
                    </td>

                    <td>Kale</td>
                    <td>₹33.15</td>
                    <td>₹51.00</td>
                    <td>₹57.00</td>
                    <td>₹46.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.caBt-gq5zLsDS9h5QZDszgHaE7&pid=Api&P=0&h=180"
                        alt="Celery"
                        height={40}
                        width={75}
                      />
                    </td>

                    <td>Celery</td>
                    <td>₹29.90</td>
                    <td>₹46.00</td>
                    <td>₹57.00</td>
                    <td>₹46.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.87sSG9GxyXMhG0NtLsZJUgHaJC&pid=Api&P=0&h=180"
                        alt="Rosemary"
                        height={40}
                        width={75}
                      />
                    </td>

                    <td>Rosemary</td>
                    <td>₹37.05</td>
                    <td>₹57.00</td>
                    <td>₹57.00</td>
                    <td>₹52.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse2.mm.bing.net/th?id=OIP.Oa-iisu3rmk4STjs6pVfrAHaHa&pid=Api&P=0&h=180"
                        alt="Pak Choi"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Pak Choi</td>
                    <td>₹37.70</td>
                    <td>₹58.00</td>
                    <td>₹58.00</td>
                    <td>₹51.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.rJEGFp-0zL1WNFe3RPNLgAHaHa&pid=Api&P=0&h=180"
                        alt="Asparagus"
                        height={40}
                        width={75}
                      />
                    </td>

                    <td>Asparagus</td>
                    <td>₹179.40</td>
                    <td>₹276.00</td>
                    <td>₹285.00</td>
                    <td>₹276.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse2.mm.bing.net/th?id=OIP.EcEB8qaDHPJKDzPAZIP80QHaEz&pid=Api&P=0&h=180"
                        alt="Thyme"
                        height={40}
                        width={75}
                      />
                    </td>

                    <td>Thyme</td>
                    <td>₹76.05</td>
                    <td>₹117.00</td>
                    <td>₹129.00</td>
                    <td>₹117.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse2.mm.bing.net/th?id=OIP.ImmKJzCx-BGdXGwprGkPUAAAAA&pid=Api&P=0&h=180"
                        alt="Broccoli Florets"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Broccoli Florets</td>

                    <td>₹120.25</td>
                    <td>₹185.00</td>
                    <td>₹190.00</td>
                    <td>₹180.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.jaZfH5c2Ksqc4in2GIncuAHaHa&pid=Api&P=0&h=180"
                        alt="Lollo Rossa"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Lollo Rossa</td>

                    <td>₹36.40</td>
                    <td>₹56.00</td>
                    <td>₹72.00</td>
                    <td>₹49.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.g78r43WuEkPTWdos6C-NQgHaFR&pid=Api&P=0&h=180"
                        alt="Red Oak Lettuce"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Red Oak Lettuce</td>

                    <td>₹35.10</td>
                    <td>₹54.00</td>
                    <td>₹56.00</td>
                    <td>₹46.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.EWmEH7sz_-j0c_zdvCKl4AHaE8&pid=Api&P=0&h=180"
                        alt="Green Butterhead Lettuce"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Green Butterhead Lettuce</td>

                    <td>₹35.75</td>
                    <td>₹55.00</td>
                    <td>₹55.00</td>
                    <td>₹47.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse2.mm.bing.net/th?id=OIP.fwwKiqcx6g5heJTNK1bT_AHaHa&pid=Api&P=0&h=180"
                        alt="Romaine Lettuce"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Romaine Lettuce</td>

                    <td>₹34.45</td>
                    <td>₹53.00</td>
                    <td>₹53.00</td>
                    <td>₹46.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.Z8yx2r2GxqOwi83_yijXqgHaFj&pid=Api&P=0&h=180"
                        alt="Tulsi"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Tulsi</td>

                    <td>₹52.00</td>
                    <td>₹80.00</td>
                    <td>₹80.00</td>
                    <td>₹63.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.-q2q6WswWQ-0CHlaAgBMeAAAAA&pid=Api&P=0&h=180"
                        alt="Leeks"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Leeks</td>

                    <td>₹51.35</td>
                    <td>₹79.00</td>
                    <td>₹97.00</td>
                    <td>₹79.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse2.mm.bing.net/th?id=OIP.YFpJuZfZk1Loxe3tfy35FgHaHa&pid=Api&P=0&h=180"
                        alt="Mint"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Mint</td>

                    <td>₹21.45</td>
                    <td>₹33.00</td>
                    <td>₹38.00</td>
                    <td>₹31.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse3.mm.bing.net/th?id=OIP.MX7UKLwvzjpKUuJTVkBj1QHaJ4&pid=Api&P=0&h=180"
                        alt="Amaranthus"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Amaranthus</td>

                    <td>₹23.40</td>
                    <td>₹36.00</td>
                    <td>₹39.00</td>
                    <td>₹32.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse2.mm.bing.net/th?id=OIP.040MMbJbiGxRxXlOLz8MHAHaHa&pid=Api&P=0&h=180"
                        alt="Palak"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Palak</td>

                    <td>₹44.85</td>
                    <td>₹69.00</td>
                    <td>₹70.00</td>
                    <td>₹60.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.BDlcU42MR747AR3H3X0xnwHaFe&pid=Api&P=0&h=180"
                        alt="Amaranthus green"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Amaranthus green</td>

                    <td>₹51.35</td>
                    <td>₹79.00</td>
                    <td>₹79.00</td>
                    <td>₹61.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.IdW7RBn-gdbuAjgFe9soeAHaHa&pid=Api&P=0&h=180"
                        alt="Colocasia Leaf"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Colocasia Leaf</td>

                    <td>₹71.50</td>
                    <td>₹110.00</td>
                    <td>₹123.00</td>
                    <td>₹106.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.gWgGhgm3RdkDaUnEQaQNkgHaFj&pid=Api&P=0&h=180"
                        alt="Methi"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Methi</td>

                    <td>₹40.95</td>
                    <td>₹63.00</td>
                    <td>₹83.00</td>
                    <td>₹63.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse2.mm.bing.net/th?id=OIP.5_LhxRSZLExPsnBkEr_LagHaFj&pid=Api&P=0&h=180"
                        alt="Drumstick"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Drumstick</td>

                    <td>₹48.10</td>
                    <td>₹74.00</td>
                    <td>₹78.00</td>
                    <td>₹63.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP._W2lTtBHMEUebhbXPSDdhwHaE8&pid=Api&P=0&h=180"
                        alt="Green Coral"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Green Coral</td>

                    <td>₹56.55</td>
                    <td>₹87.00</td>
                    <td>₹91.00</td>
                    <td>₹72.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.tUN1ELf5s0JjbmWFnGGIfgHaHa&pid=Api&P=0&h=180"
                        alt="Simpson Lettuce"
                        height={40}
                        width={75}
                      />
                    </td>
                    <td>Simpson Lettuce</td>

                    <td>₹53.95</td>
                    <td>₹83.00</td>
                    <td>₹109.00</td>
                    <td>₹83.00</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center pt-3">
                <button className="btn btn-outline-primary mx-2">
                  Previous
                </button>
                <button className="btn btn-outline-primary mx-2">Next</button>
            </div>
          </div>

        
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
