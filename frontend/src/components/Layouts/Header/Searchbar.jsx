import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from "react";

const Searchbar = () => {

    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(keyword.trim()){
            navigate(`/products/${keyword}`)
        } else {
            navigate('/products');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-2/3 relative sm:w-4/5 px-1 sm:px-4 py-1.5 flex justify-between items-center shadow-lg shadow-gray-300 bg-white rounded-sm overflow-hidden">
            <input value={keyword} onChange={(e) => setKeyword(e.target.value)} className="text-sm flex-1 outline-none border-none placeholder-gray-500" type="text" placeholder="Tìm kiếm" />
            <button type="submit" className="absolute right-0 text-primary-blue"><SearchIcon /></button>
        </form>
    );
};

export default Searchbar;
