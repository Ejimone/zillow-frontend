
const SearchByLocation = () => {
  return (
    <div className="search-by-location">
        <form action="">
            <input type="text" placeholder="Enter location" />
            <button type="submit">Address, City, Zip</button>
        </form>
        <ul>
            <li>For Sale</li>
            <li>For Rent</li>
            <li>Recently Sold</li>
        </ul>

        <div className="price">
            <p>Price Range</p>

            {/* a dropdown div which as options `lastprice` and  `monthly payment, below is options,  Minimum, Maximum` */}
            <select>
                <option value="lastprice">Last Price</option>
                <option value="monthlypayment">Monthly Payment</option>
            </select>
            <div className="price-options">
                <label>
                    <input type="radio" name="price" value="minimum" />
                    Minimum
                </label>
                <label>
                    <input type="radio" name="price" value="maximum" />
                    Maximum
                </label>
            </div>
        </div>


        <div>Beds & Baths {/* when this is selected, show options for number of beds and bathrooms, the user will have the option to click on use exact match to automatically use the same number of beds and bathrooms, the room numbers will be 1+, 2+, 3+, 3+, 5+, 6+, bathroom will be same with options for any number of bathrooms */}
            <div className="beds-options">
                <label>
                    <input type="checkbox" name="beds" value="1+" />
                    1+
                </label>
                <label>
                    <input type="checkbox" name="beds" value="2+" />
                    2+
                </label>
                <label>
                    <input type="checkbox" name="beds" value="3+" />
                    3+
                </label>
                <label>
                    <input type="checkbox" name="beds" value="4+" />
                    4+
                </label>
                <label>
                    <input type="checkbox" name="beds" value="5+" />
                    5+
                </label>
                <label>
                    <input type="checkbox" name="beds" value="6+" />
                    6+
                </label>
            </div>
            <div className="bathrooms-options">
                <label>
                    <input type="checkbox" name="bathrooms" value="1+" />
                    1+
                </label>
                <label>
                    <input type="checkbox" name="bathrooms" value="2+" />
                    2+
                </label>
                <label>
                    <input type="checkbox" name="bathrooms" value="3+" />
                    3+
                </label>
                <label>
                    <input type="checkbox" name="bathrooms" value="4+" />
                    4+
                </label>
                <label>
                    <input type="checkbox" name="bathrooms" value="5+" />
                    5+
                </label>
                <label>
                    <input type="checkbox" name="bathrooms" value="6+" />
                    6+
                </label>
            </div>
        </div>




        {/* for home types, this will have options, `Deselect all, Houses, Town Homes, Multi-family, Condos/Co-ops, Lots/land, Apartments, Manufactured, and a button `Apply` */}
    </div>
  )
}

export default SearchByLocation