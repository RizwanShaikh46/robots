import React from 'react'
import Cards from './Cards'

const CardList = ({ robots }) => {


    return (
        <div>
            {
                robots.map((item, index) => {
                    return (
                        <Cards
                            name={robots[index].name}
                            id={robots[index].id}
                            email={robots[index].email}
                            key={index}
                        />
                    )
                })

            }
        </div>
    )

}

export default CardList
