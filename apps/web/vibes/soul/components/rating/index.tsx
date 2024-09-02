export interface Props {
  rating: number
}

const Star = ({ type }: { type: 'empty' | 'half' | 'full' }) => {
  const paths = {
    empty: (
      <path
        d="M9.99984 1.66669L12.5748 6.88335L18.3332 7.72502L14.1665 11.7834L15.1498 17.5167L9.99984 14.8084L4.84984 17.5167L5.83317 11.7834L1.6665 7.72502L7.42484 6.88335L9.99984 1.66669Z"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    half: (
      <>
        <path
          d="M9.99984 1.66669L12.5748 6.88335L18.3332 7.72502L14.1665 11.7834L15.1498 17.5167L9.99984 14.8084L4.84984 17.5167L5.83317 11.7834L1.6665 7.72502L7.42484 6.88335L9.99984 1.66669Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.0003 1.6665V14.8082L4.85033 17.5165L5.83366 11.7832L1.66699 7.72484L7.42533 6.88317L10.0003 1.6665Z"
          fill="currentColor"
        />
      </>
    ),
    full: (
      <path
        d="M9.99984 1.66669L12.5748 6.88335L18.3332 7.72502L14.1665 11.7834L15.1498 17.5167L9.99984 14.8084L4.84984 17.5167L5.83317 11.7834L1.6665 7.72502L7.42484 6.88335L9.99984 1.66669Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  }

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block text-foreground"
    >
      {paths[type]}
    </svg>
  )
}

export const Rating = function Rating({ rating }: Readonly<Props>) {
  const adjustedRating = Math.min(rating, 5)
  const stars = Array(5)
    .fill('empty')
    .fill('full', 0, Math.floor(adjustedRating))
    .fill('half', Math.floor(adjustedRating), Math.ceil(adjustedRating))

  return (
    <div className="flex">
      {stars.map((type, index) => (
        <Star key={index} type={type} />
      ))}
      <span className="ml-1 flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full border border-contrast-100 px-1 text-xs font-medium text-contrast-400">
        {adjustedRating % 1 !== 0 ? adjustedRating.toFixed(1) : adjustedRating}
      </span>
    </div>
  )
}

export default Rating
