import { Reviews } from '@/types/review';
import { Review } from '@/components/review/review';
type ReviewListProps = {
    reviews: Reviews;
}
export function ReviewList({ reviews: reviews }: ReviewListProps) {
  return (
    <ul className='reviews__list'>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
}
