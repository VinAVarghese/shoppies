import React from 'react';
import SearchBar from "../components/searchBar";
import SearchResults from "../components/searchResults";
import Nominations from "../components/nominations";

export default function Home() {
    return (
        <>
            <SearchBar />
            <SearchResults />
            <Nominations />
        </>
    )
}

