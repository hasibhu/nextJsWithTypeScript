

const page = ({ params }: { params: { id: string } }) => {
    

    return (

        <div>
            <h2>id: {params.id }</h2>
        </div>
    );
};

export default page;