import { Offers } from '@/types/offer';
import { NearbyOffer } from '@/components/nearby-offer/nearby-offer';

type NearbyListProps = {
    offers: Offers;
}

export function NearbyOfferList({ offers }: NearbyListProps) {
  return (
    <div className='container'>
      <section className='near-places places'>
        <h2 className='near-places__title'>
          Other places in the neighbourhood
        </h2>
        <div className='near-places__list places__list'>
          {offers.map((offer) => (
            <NearbyOffer key={offer.id} offer={offer} />
          ))}
        </div>
      </section>
    </div>
  );
}