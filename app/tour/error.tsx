"use client"

const error = ({ error} : {error: Error}) => {
    console.log(error);

    return <div> There is an error...</div>
}

export default error; 