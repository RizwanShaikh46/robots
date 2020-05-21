import React, { Fragment } from 'react'
import './Cards.css'

const Cards = (props) => {
    const { name, email, id } = props;
    return (
        <Fragment >
            <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`}></img>
            <p>{name}</p>
            <p>{email}</p>
            </div>
        </Fragment>
    )
}

export default Cards