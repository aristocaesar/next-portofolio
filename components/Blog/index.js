import Item from "@Components/Blog/item";

export default function Blog(props) {
  return props.data.map((blog, index) => {
    return (
      <Item
        key={index}
        title={blog.title}
        slug={blog.slug}
        publish={blog.publishedAt}
        content={blog.content}
      />
    );
  });
}
