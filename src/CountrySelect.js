import React, { useState } from "react";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ChevronDown, ChevronUp } from "lucide-react";

const CountrySelect = ({
    styling,
    value,
    onChange,
    labels,
    flags,
    onPhoneChange,
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("971");

    const handleSelection = (country) => {
        onChange(country);
        setCountryCode(getCountryCallingCode(country));
        setIsOpen(false);
        setSearchQuery("");
    };

    const handlePhoneNumberChange = (e) => {
        const phone = e.target.value;
        setPhoneNumber(phone);
        onPhoneChange(`+${countryCode}${phone}`);
    };

    const filteredCountries = getCountries().filter((country) =>
        labels[country].toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="relative" {...rest}>
            <div className={`flex items-center py-2.5 ${styling}`}>
                <button
                    type="button"
                    className="flex items-center justify-center px-2 outline-none focus-within:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {value && (
                        <>
                            {flags[value] &&
                                React.createElement(flags[value], {
                                    className: "mr-2 w-5 h-5",
                                })}
                            +{countryCode || getCountryCallingCode(value)}
                        </>
                    )}
                    {isOpen ? (
                        <ChevronUp className="ml-1 text-[#073c75]/60" size={15} strokeWidth={4} />
                    ) : (
                        <ChevronDown className="ml-1 text-[#073c75]/60" size={15} strokeWidth={4} />
                    )}
                </button>

                <input
                    type="tel"
                    name="phoneNumber"
                    className="flex-grow focus:outline-none w-full"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    required
                />
            </div>

            {isOpen && (
                <div className="absolute z-10 border bg-white w-full rounded-b">
                    <input
                        type="text"
                        placeholder="Search countries"
                        className="w-full px-4 py-2 focus:outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <ul className="max-h-60 overflow-y-auto location-dropdown">
                        {filteredCountries.map((country) => {
                            const Flag = flags[country];
                            return (
                                <li
                                    key={country}
                                    className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleSelection(country)}
                                >
                                    {Flag && <Flag className="mr-2 w-5 h-5" />}
                                    <span>
                                        {labels[country]} +{getCountryCallingCode(country)}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CountrySelect;
