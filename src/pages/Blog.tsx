import { useState } from "react";
import BlogDialog from "../components/BlogDialog";
const blogData = [
  {
    title: "title",
    image:
      "https://w0.peakpx.com/wallpaper/834/976/HD-wallpaper-uludag-bursa-dag-istanbul-kar-kayak-landscape-manzara-natural-snow.jpg",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of",
  },
  {
    title: "title1",
    image:
      "https://w0.peakpx.com/wallpaper/127/952/HD-wallpaper-manzara-istanbul-turkey.jpg",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of",
  },
  {
    title: "title2",
    image:
      "https://w0.peakpx.com/wallpaper/127/952/HD-wallpaper-manzara-istanbul-turkey.jpg",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of",
  },
  {
    title: "Lorem, ipsum dolor.",
    image:
      "https://w0.peakpx.com/wallpaper/127/952/HD-wallpaper-manzara-istanbul-turkey.jpg",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of",
  },
];

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [blogItem, setBlogItem] = useState<{
    title: string;
    image: string;
    desc: string;
  }>();
  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = (item: { title: string; image: string; desc: string }) => {
    setIsOpen((pre) => !pre);
    setBlogItem(item);
  };
  return (
    <div className="flex flex-col items-center">
      {blogData.map((item) => (
        <div className="overflow-hidden px-2 justify-between flex w-3/4 bg-gray-100 border-b-2  border-gray-200  gap-3 ">
          <div
            className="cursor-pointer p-2   w-40  overflow-hidden"
            onClick={() => openModal(item)}
          >
            {item.title}
          </div>

          <p className=" max-h-7 w-1/2 p-2 overflow-hidden">{item.desc}</p>
          <button onClick={() => openModal(item)}>Detail</button>
        </div>
      ))}
      {blogItem && (
        <BlogDialog
          blog={blogItem}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        ></BlogDialog>
      )}
    </div>
  );
};

export default Blog;
