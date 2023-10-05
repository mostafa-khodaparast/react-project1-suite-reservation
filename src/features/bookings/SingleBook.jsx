const SingleBook = ({ book }) => {
    
    return (
        <div className=" bg-slate-400 w-[90%] mx-auto my-1 rounded-sm">
            <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr] w-full mx-auto text-center" key={book.id}>
                <div className="self-center">{book.cabins.name}</div>
                <div className="self-center p-2">
                    {<>
                        <p className="">{book.guests.fullName}</p>
                        <p className="text-sm font-light">{book.guests.email}</p>
                    </>}
                </div>
                <div className="self-center">{book.numNights}</div>
                <div className="self-center">{book.status}</div>
                <div className="self-center">{book.totalPrice}</div>
            </div>
        </div>
    )
}

export default SingleBook