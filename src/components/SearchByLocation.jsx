import { useState } from "react";


const SearchByLocation = () => {
const bedOptions = ["1+", "2+", "3+", "4+", "5+", "6+"];
const bathOptions = ["1+", "2+", "3+", "4+", "5+", "6+"];
const homeTypes = [
    "Houses",
    "Town Homes",
    "Multi-family",
    "Condos/Co-ops",
    "Lots/land",
    "Apartments",
    "Manufactured"
];

const SearchByLocation = () => {
    const [location, setLocation] = useState("");
    const [priceType, setPriceType] = useState("lastprice");
    const [priceOption, setPriceOption] = useState("");
    const [beds, setBeds] = useState([]);
    const [baths, setBaths] = useState([]);
    const [exactMatch, setExactMatch] = useState(false);
    const [selectedHomeTypes, setSelectedHomeTypes] = useState(homeTypes);

    const handleBedsChange = (value) => {
        setBeds((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        );
        if (exactMatch) setBaths((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        );
    };

    const handleBathsChange = (value) => {
        setBaths((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        );
    };

    const handleExactMatch = () => {
        setExactMatch((prev) => {
            const newVal = !prev;
            if (newVal) setBaths([...beds]);
            return newVal;
        });
    };

    const handleHomeTypeChange = (type) => {
        setSelectedHomeTypes((prev) =>
            prev.includes(type)
                ? prev.filter((t) => t !== type)
                : [...prev, type]
        );
    };

    const handleDeselectAll = () => setSelectedHomeTypes([]);

    const handleSelectAll = () => setSelectedHomeTypes(homeTypes);

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle search logic here
    };

    return (
        <div className="search-by-location">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button type="submit">Address, City, Zip</button>
            </form>
            <ul>
                <li>For Sale</li>
                <li>For Rent</li>
                <li>Recently Sold</li>
            </ul>

            <div className="price">
                <p>Price Range</p>
                <select
                    value={priceType}
                    onChange={(e) => setPriceType(e.target.value)}
                >
                    <option value="lastprice">Last Price</option>
                    <option value="monthlypayment">Monthly Payment</option>
                </select>
                <div className="price-options">
                    <label>
                        <input
                            type="radio"
                            name="price"
                            value="minimum"
                            checked={priceOption === "minimum"}
                            onChange={() => setPriceOption("minimum")}
                        />
                        Minimum
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="price"
                            value="maximum"
                            checked={priceOption === "maximum"}
                            onChange={() => setPriceOption("maximum")}
                        />
                        Maximum
                    </label>
                </div>
            </div>

            <div>
                Beds & Baths
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={exactMatch}
                            onChange={handleExactMatch}
                        />
                        Use exact match
                    </label>
                </div>
                <div className="beds-options">
                    {bedOptions.map((option) => (
                        <label key={option}>
                            <input
                                type="checkbox"
                                name="beds"
                                value={option}
                                checked={beds.includes(option)}
                                onChange={() => handleBedsChange(option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
                <div className="bathrooms-options">
                    {bathOptions.map((option) => (
                        <label key={option}>
                            <input
                                type="checkbox"
                                name="bathrooms"
                                value={option}
                                checked={baths.includes(option)}
                                onChange={() => handleBathsChange(option)}
                                disabled={exactMatch}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </div>

            <div className="home-types">
                <p>Home Types</p>
                <button type="button" onClick={handleDeselectAll}>
                    Deselect all
                </button>
                <button type="button" onClick={handleSelectAll}>
                    Select all
                </button>
                <div>
                    {homeTypes.map((type) => (
                        <label key={type}>
                            <input
                                type="checkbox"
                                checked={selectedHomeTypes.includes(type)}
                                onChange={() => handleHomeTypeChange(type)}
                            />
                            {type}
                        </label>
                    ))}
                </div>
                <button type="button" onClick={() => { /* Apply logic here */ }}>
                    Apply
                </button>
            </div>
        </div>
    );
};


}

export default SearchByLocation;