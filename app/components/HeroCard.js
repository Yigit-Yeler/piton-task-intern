function HeroCard({ img, fullName, role }) {
    return (
        <div className="bg-white shadow-lg p-6 w-full max-w-xs md:max-w-sm lg:max-w-md">
            <div className="mb-4">
                <img
                    src={img}
                    alt={fullName}
                    className="w-full h-auto object-cover mb-2"
                />
            </div>
            <h1 className="font-bold text-xl mb-1">{fullName}</h1>
            <h2 className="text-gray-600">{role}</h2>
        </div>
    )
}

export default HeroCard;
