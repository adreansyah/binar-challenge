import React from 'react';


const Card = ({ data }) => {
    const formatNumeric = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
    return (
        <div className='box-card'>
            {
                data.map((item, index) => (
                    <div key={index} className='card-list'>
                        <img src={item.image ? item.image : "https://techcrunch.com/wp-content/uploads/2019/07/2019-bmw-i8-1.jpg?w=730&crop=1"} alt="car-list" />
                        <p className='title-car'>{item.name}</p>
                        <p className='price-car'>{formatNumeric(item.price)} / hari</p>
                        <p className='desc-car'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default Card