import React from 'react'

const menuCard=({menuData }) => {
    return (
        <>
            <section className='main-card--cointainer'>
                {menuData.map((curEle) => {
                    const {id,category,name,image}=curEle
                    return (
                        <>
                            <div className='card-container' key={curEle.id}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span className='card-number card-circle subtle'>{id}</span>
                                        <span className='card-author subtle'>{category}</span>
                                        <h2 className='card-title'>{name}</h2>
                                        <span className='card-description subtle'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Unde tenetur explicabo minima consectetur, consequatur alias?</span>
                                        <div className='card-read'>Read</div>
                                    </div>
                                    <img src={image} alt="images" className='card-media' />
                                    <div className='card-tag subtle'>Order Now</div>
                                </div>
                            </div>
                        </>
                        )
                })}
            </section>
        </>
    )
}

export default menuCard
