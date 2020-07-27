import React from 'react'

const InputSearch = (props) => {
    return (
        <React.Fragment>
        <form className="search-bar" onSubmit={props.submitHandler}>
        <input onChange={props.searchChangeHandler} ref={props.inputRef} className="search-bar__input" placeholder="Search your favorite movie" type="text"/>
        </form>
        </React.Fragment>
    )
}

export default InputSearch
