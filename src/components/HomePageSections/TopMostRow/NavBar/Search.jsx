import React, { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom'
import { SedonaMapping, WilliamsMapping, JapanMapping, sedonaPics, williamsPics, japanPics, rentalData, searchableData } from "../../../../data"
import AerialWilliams from '../../../../UgoImages/Williams/AerialWilliams.png'
import AerialOsaka from '../../../../UgoImages/Japan/AerialOsaka.png'
import AerialSedona from '../../../../UgoImages/Sedona/AerialSedona.png'

export const SearchBar = ({ setLocation, setLocationAreaPics, setBigImage, setTextArea }) => {

    const [searchInput, setSearchInput] = useState('');
    const [sedonaFilter, setSedonaFilter] = useState([]);
    const [japanFilter, setJapanFilter] = useState([]);
    const [williamsFilter, setWilliamsFilter] = useState([]);
    const [searchSedona, setSearchSedona] = useState(false)
    const [searchJapan, setSearchJapan] = useState(false)
    const [searchWilliams, setSearchWilliams] = useState(false)
    const [searchArea, setSearchArea] = useState(false)
    const [noSearch, setNoSearch] = useState(false)

    useEffect(() => {

        if (sedonaFilter.length > 0) {
            setSearchSedona(true);
            setNoSearch(false)

        }
        if (williamsFilter.length > 0) {
            setSearchWilliams(true);
            setNoSearch(false)

        }
        if (japanFilter.length > 0) {
            setSearchJapan(true);
            setNoSearch(false)

        }
        if (sedonaFilter.length == 0 && japanFilter.length == 0 && williamsFilter.length == 0) {
            setNoSearch(true)
        }

    }, [sedonaFilter, japanFilter, williamsFilter]);

    const handleSearch = () => {
        setSearchInput('')
        setSearchArea(true)

        setSedonaFilter(
            SedonaMapping.filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase()) || item.rooms.toLowerCase().includes(searchInput.toLowerCase()) || item.description.toLowerCase().includes(searchInput.toLowerCase()))
        );
        console.log(SedonaMapping)
        setJapanFilter(
            JapanMapping.filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase()) || item.rooms.toLowerCase().includes(searchInput.toLowerCase()) || item.description.toLowerCase().includes(searchInput.toLowerCase()))
        );
        setWilliamsFilter(
            WilliamsMapping.filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase()) || item.rooms.toLowerCase().includes(searchInput.toLowerCase()) || item.description.toLowerCase().includes(searchInput.toLowerCase()))
        );

    };
    const handleJapanSearch = (e) => {
        setLocation(JapanMapping)
        setLocationAreaPics(japanPics)
        setBigImage(AerialOsaka)
        setTextArea('Osaka, Japan')
        setSearchArea(false)
        setSearchSedona(false)
        setSearchWilliams(false)
        setSearchJapan(false)

    }
    const handleSedonaSearch = (e) => {
        setLocation(SedonaMapping)
        setLocationAreaPics(sedonaPics)
        setBigImage(AerialSedona)
        setTextArea('Sedona, Arizona')
        setSearchArea(false)
        setSearchSedona(false)
        setSearchWilliams(false)
        setSearchJapan(false)
    }

    const handleWilliamsSearch = (e) => {
        setLocation(WilliamsMapping)
        setLocationAreaPics(williamsPics)
        setBigImage(AerialWilliams)
        setTextArea('Williams, Arizona')
        setSearchArea(false)
        setSearchSedona(false)
        setSearchWilliams(false)
        setSearchJapan(false)
    }

    return (
        <>

            <div className="searchElements">
                <input id="search" type="text" 
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)} />
                <button className="searchButton" onClick={handleSearch} >Search</button>              

                {searchArea && (
                    <div id="searchPopUp">
                        <p>Search Results</p>
                        {noSearch && (<><p>There are no matching results</p>
                            <button className="popUpButton" onClick={(e) => setSearchArea(false)}>close</button>
                        </>)}
                        {searchSedona && (<h3><NavLink id='sedona' className='searchLink' onClick={handleSedonaSearch}
                            to='./'>Sedona</NavLink></h3>
                        )}

                        {searchWilliams && (<h3><NavLink id='sedona' className='searchLink' onClick={handleWilliamsSearch} to='./'>Williams</NavLink></h3>
                        )}

                        {searchJapan && (<h3><NavLink id='japan' className='searchLink' onClick={handleJapanSearch}
                            to='./'>Japan</NavLink></h3>
                        )}
                    </div>
                )}
            </div>
        </>
    )
}

export default SearchBar
