import { Offers } from '@/types/offer';
import PlaceCard from '@/components/place-card/place-card';
import { useState, useEffect } from 'react';

type OffersListProps = {
    offers: Offers;
    onActiveOfferChange: (offerId: string | null) => void;
};


export default function OffersList({offers, onActiveOfferChange}: OffersListProps): JSX.Element {
  const [activeOfferId, setSelectedOffer] = useState<string | null>(null);

  useEffect(() => {
    onActiveOfferChange(activeOfferId);
  }, [activeOfferId, onActiveOfferChange]);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
        />))}
    </div>
  );
}