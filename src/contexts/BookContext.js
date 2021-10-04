import React,{createContext,useState} from 'react';


export const BookContext=createContext();

const BookContextProvider=(props)=>{

    const[books,setBooks]=useState([
        {title:'kitap 1',id:1},
        {title:'kitap 2',id:2},
        {title:'kitap 3',id:3},
        {title:'kitap 4',id:4}
    ])
    return(
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
