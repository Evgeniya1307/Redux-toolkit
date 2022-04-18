import React from 'react'
import{useSelector} from 'react-redux';

const FirstName = () => {
    const name = useSelector((state) => state.user)
    return <div className='font-bold'>First Name</div>
}

export default FirstName
//сдесь надо получить данные из нашего stor для этого есть хук useSelector