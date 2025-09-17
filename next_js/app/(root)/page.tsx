// app/page.tsx
import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";

type StartupCardType = {
  _createdAt: string;
  _id: number | string;
  view: number;
  author: { id: number | string, name?: string, avatar: string };
  description: string;
  title: string;
  category: string;
  image: string;
};

export default function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const posts: StartupCardType[] = [
    {
      _createdAt: "2024-06-18T10:00:00Z",
      _id: 1,
      view: 5,
      author: { id: 1, name: "John Doe", avatar: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png" },
      description: "This is a sample description for the first post.",
      title: "First Post",
      category: "Tech",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77_GpCChuxQCCjU9EmSn9hyf6kXchGq99wA&ss",
    },
  ];

  const query = searchParams?.query;

  return (
    <>
      <section className="red-container">
        <h1 className="heading">
          Pitch Your Start Up, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub_heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts && posts.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="text-16-regular text-gray-500">No startups found.</p>
          )}
        </ul>
      </section>
    </>
  );
}
