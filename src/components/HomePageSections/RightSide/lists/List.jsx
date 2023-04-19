import React, { useEffect, useState } from "react";

const List = ({ title }) => {
    const [listItem, setListItem] = useState("")
    const [listArray, setListArray] = useState([])
    const [deleteItem, setDeleteItem] = useState("")

    useEffect(() => {
        const filteredArray = listArray.filter((item) => item !== deleteItem)
        setListArray(filteredArray)
    }, [deleteItem])

    const newArray = (string) => {
        setDeleteItem(string)
    }

    const change = (e) => {
        e.preventDefault()
        setListItem(e.target.value)
    }


    const showItems = (e) => {
       if(listItem !== ''){ const currentItem = listItem;
        setListItem("")
        setListArray(listArray.concat(currentItem))
    }}

    return (
        <>
            <div className="listContainer column">
                <header>
                    <h2 className="titleHeader">{title}</h2>
                </header>

                <div className="add">
                    <input className="addList"
                        value={listItem}
                        onChange={change} />
                    <button className="addButton" onClick={showItems}>Add</button>
                </div>

                <ul >
                    {listArray.map((item, index) => {
                        return (
                            <li className="itemList" key={index}>{item} <span id='itemButton'>
                                <button className="deleteButton" onClick={() => newArray(item)}>Delete</button>
                            </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default List
