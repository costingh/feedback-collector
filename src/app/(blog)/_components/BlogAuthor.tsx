export default function BlogAuthor({ author }: any) {
    return (
      <div className="flex items-center text-sm text-gray-600">
        <img src={author?.avatar} alt={author?.name} className="w-8 h-8 rounded-full mr-3" />
        <p>By {author?.name}</p>
      </div>
    );
  }
  