
import './feed.css'; 

interface FeedItem {
    image: string;
    title: string;
    description: string;
  }
  
  interface FeedProps {
    items: FeedItem[];
  }


export default function Feed({ items }: FeedProps) {
  return (
    <div className="feed-container">
      {items.map((item: FeedItem, index: number) => (
        <div className="feed-item" key={index}>
          <div className="feed-image" style={{ backgroundImage: `url(${item.image})` }} />
          <div className="feed-content">
            <h2>{item.title}</h2>
            <p className="feed-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
