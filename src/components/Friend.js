import React from 'react';

const Friend = props => {
    const { setCurrentFriendId } = props

    const openDetails = id => {
        setCurrentFriendId(id)
    }

    return (
        <div className='friend'>
            {props.info.name}
            <button onClick={() => openDetails(props.info.id)}>
                See details
            </button>
        </div>
    )
}

export default Friend;