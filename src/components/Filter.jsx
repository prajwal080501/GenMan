function Filter() {
    return (
        <div className=" w-full">
            <div className="filter__container">
                <div className="flex items-center justify-center mt-5 space-x-8">
                    <div className="">
                        <p className="text-lg font-bold">Category</p>
                        <select name="category" id="category">
                            <option value="all">All</option>
                            <option value="social">Social</option>
                            <option value="email">Email</option>
                            <option value="bank">Bank</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="filter__body__item">
                        <p className="text-lg font-bold">Sort by</p>
                        <select name="sort" id="sort">
                            <option value="all">All</option>
                            <option value="social">Social</option>
                            <option value="email">Email</option>
                            <option value="bank">Bank</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Filter