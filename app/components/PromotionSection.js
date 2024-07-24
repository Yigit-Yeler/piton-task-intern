import { heroes } from '../constants/heroes';
import { imgUrls } from '../constants/imgUrls';
import { texts } from '../constants/texts';
import HeroCard from './HeroCard';

function PromotionSection() {
    return (
        <div className='p-20'>
            <h1 className='text-left text-4xl font-bold'>{texts.PROMOTION_TITLE}</h1>

            <p className='pt-8 pb-10 text-lg'>
                {texts.PROMOTION_DESCRIPTION}
            </p>
            <img
                src={imgUrls.MID_IMG}
                alt="Vercel Logo"
                className="w-full my-20"
            />

            <h1 className='text-center pt-20 pb-20 text-4xl font-bold'>{texts.HEROES_TITLE}</h1>

            <div className="grid gap-10 place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    heroes.map((hero) => (
                        <HeroCard img={hero.IMG} fullName={hero.FULLNAME} role={hero.ROLE} key={hero.FULLNAME} />
                    ))
                }
            </div>
        </div>
    )
}

export default PromotionSection