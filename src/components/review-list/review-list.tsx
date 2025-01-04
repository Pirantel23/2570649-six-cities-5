import { Reviews } from '@/types/review';
import { Review } from '@/components/review/review';
type ReviewListProps = {
    comments: Reviews
}
export function ReviewList({ comments: reviews }: ReviewListProps) {
  return (
    <ul className='reviews__list'>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
}