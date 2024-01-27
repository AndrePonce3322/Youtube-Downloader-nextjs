import CardSkeleton from "./card-skeleton";

export default function CardSkeletonList(){
  return Array.from({ length: 7 }).map((_, i) => <CardSkeleton key={i} />);
}