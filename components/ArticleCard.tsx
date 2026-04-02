import Image from "next/image";

type ArticleCardProps = {
  imageSrc: string;
  category: string;
  title: string;
  author: string;
  date: string; 
  onReadMore?: () => void;
};

export default function ArticleCard({
  imageSrc,
  category,
  title,
  author,
  date,
  onReadMore,
}: ArticleCardProps) {
  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden border border-gray-200">
      {/* Image */}
      <div className="relative w-full h-48">
        <Image src={imageSrc} alt={title} fill className="" />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <p className="text-sm text-gray-500 mb-1">{category}</p>

        {/* Title */}
        <h6 className="title-h6">{title}</h6>

        {/* Author & Date */}
        <div className="flex items-center text-gray-600 text-sm mb-4 space-x-4">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
              <path d="M12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
            </svg>
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <time dateTime={date}>{date}</time>
          </div>
        </div>

        {/* Read More */}
        <button
          onClick={onReadMore}
          className="text-[#33B1FF] inline-flex items-center"
        >
          Read more
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}