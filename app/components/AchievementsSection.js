import { successAmounts } from '../constants/successAmounts';

function AchievementsSection() {
    return (
        <div className="min-h-40 bg-black w-full flex flex-wrap justify-around items-center py-7">
            {successAmounts.map((item) => (
                <div key={item.amount} className="flex flex-col items-center sm:items-center md:items-start text-center sm:text-center md:text-left m-2 sm:my-4 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
                    <span className="text-yellow-500 text-4xl font-bold mb-4">{item.amount}</span>
                    <span className="text-white text-sm">Title {item.description}</span>
                </div>
            ))}
        </div>
    )
}

export default AchievementsSection