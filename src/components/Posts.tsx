interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function Posts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const posts: IPost[] = await res.json();
  return (
    <main className="flex flex-col gap-4">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2 className="font-bold text-primary">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}
    </main>
  );
}
