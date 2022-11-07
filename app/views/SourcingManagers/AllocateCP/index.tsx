import React, { useState } from 'react';
import AllocateCP from './components/AllocateCP'

const AllocateCPScreen = ({ navigation, }: any) => {
    const [cpList, setCpList] = useState([
        {
            id: 1,
            cpName: 'CP 1'
        },
        {
            id: 2,
            cpName: 'CP 2'
        },
        {
            id: 3,
            cpName: 'CP 3'
        },
        {
            id: 4,
            cpName: 'CP 4'
        },
        {
            id: 5,
            cpName: 'CP 5'
        },
        {
            id: 6,
            cpName: 'CP 6'
        },
        {
            id: 7,
            cpName: 'CP 7'
        },
        {
            id: 8,
            cpName: 'CP 8'
        },
    ])
    const [selectedCp, setSelected] = useState([])
    const [allList, setAllList] = useState(false)
    const onPressBack = () => {
        navigation.goBack()
    }
    const onPressAllocateCp = () => {
        navigation.goBack()
    }
    const handleSelects = (items: any) => {
        const selects = [...selectedCp]
        selects.push(items)
        setSelected(selects)
    }
    
    const handleSearch = (searchKey: any) => {
        if (searchKey === "") {
            setCpList(cpList);
        } else {
            const lowerCased = searchKey
            const searchArray = [...cpList];
            const list = searchArray.filter((item) => {
                return item.cpName.match(lowerCased);
            });
            setCpList(list);
        }
    }
    return (
        <AllocateCP
            onPressBack={onPressBack}
            cpList={cpList}
            selectedCp={selectedCp}
            allList={allList}
            setAllList={setAllList}
            handleSearch={handleSearch}
            handleSelects={handleSelects}
        // onPressCreate={onPressCreate}
        // type={route?.params?.type || ""}
        />

    )
}

export default AllocateCPScreen;