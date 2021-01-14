import React from 'react';
import { Input } from 'antd';

const onSearch = console.log();

export default function SearchBar() {
    return (
        <div>
            <Input.Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        </div>
    )
}
