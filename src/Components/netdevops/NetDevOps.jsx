import React from "react";
import BlogMain from "../constant/BlogMain";

const dummyData = [
  {
    id: 1,
    imageUrl: "/images/bgp-lab-containerlab-nornir.png",
    paragraph: "- NETDEVOPS",
    heading: "Simple BGP Lab with Containerlab and Nornir (Lab-as-a-Code)",
    imageUrl2: "/images/blog-avatar--1-.png",
    author: "Dr Zangi",
    date: "Apr 14, 2024",
  },
  {
    id: 2,
    imageUrl: "/images/remote-ssh--1-.png",
    paragraph: "- NETDEVOPS",
    heading: "Why Did No One Tell Me About This VSCode Remote - SSH Feature?",
    imageUrl2: "/images/blog-avatar--1-.png",
    author: "Dr Zangi",
    date: "Apr 14, 2024",
  },
  {
    id: 3,
    imageUrl: "/images/remote-ssh--1-.png",
    paragraph: "- NETDEVOPS",
    heading: "Why Did No One Tell Me About This VSCode Remote - SSH Feature?",
    imageUrl2: "/images/blog-avatar--1-.png",
    author: "Dr Zangi",
    date: "Apr 14, 2024",
  },
  {
    id: 4,
    imageUrl: "/images/bgp-lab-containerlab-nornir.png",
    paragraph: "- NETDEVOPS",
    heading: "Simple BGP Lab with Containerlab and Nornir (Lab-as-a-Code)",
    imageUrl2: "/images/blog-avatar--1-.png",
    author: "Dr Zangi",
    date: "Apr 14, 2024",
  },
  {
    id: 5,
    imageUrl: "/images/remote-ssh--1-.png",
    paragraph: "- NETDEVOPS",
    heading: "Why Did No One Tell Me About This VSCode Remote - SSH Feature?",
    imageUrl2: "/images/blog-avatar--1-.png",
    author: "Dr Zangi",
    date: "Apr 14, 2024",
  },
  {
    id: 6,
    imageUrl: "/images/remote-ssh--1-.png",
    paragraph: "- NETDEVOPS",
    heading: "Why Did No One Tell Me About This VSCode Remote - SSH Feature?",
    imageUrl2: "/images/blog-avatar--1-.png",
    author: "Dr Zangi",
    date: "Apr 14, 2024",
  },[]
];

const RoundedSVGComponent = () => {
  return (
    <div>
      <div className="w-full flex flex-row items-center justify-center">
        <div
          className="mt-[1vh] sm:w-[] sm:h-[] 
      "
          style={{
            backgroundColor: "#add8e6",
            width: "140px",
            height: "120px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
          <svg
            className=" sm:w-[100vw] sm:h-[55vh] 
      "
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-code"
            width="120"
            height="120"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="#6f32be"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" fill="none" />
            <polyline points="7 8 3 12 7 16" />
            <polyline points="17 8 21 12 17 16" />
            <line x1="14" y1="4" x2="10" y2="20" />
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>

        <div className="flex flex-col items-center mt-[4vh] ">
          <h5 className="font-bold ml-[-4vw] text-3xl">NetDevOps</h5>
          <p className="sm:w-[42vw] sm:text-[1vw] w-[80%] text-[2vw]  mb-4 ml-4 mt-6 text-left">
            What is NetDevOps? NetDevOps is the practice of applying DevOps
            principles to Network Operations, aiming to improve automation,
            collaboration, and efficiency. By integrating coding and automation
            into networking, NetDevOps aims to bridge the gap between IT
            operations and network teams, fostering a culture of continuous
            improvement and innovation. Here in my blog, I will cover various
            NetDevOps topics that you can use and apply across your network
            infrastructure.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-[3vw] w-full h-full flex-row justify-around mt-6">
          {dummyData.map((item) => (
            <div key={item.id}>
              <a href={`/link/to/blog/${item.id}`}>
                <BlogMain
                  imageUrl={item.imageUrl}
                  paragraph={item.paragraph}
                  heading={item.heading}
                  imageUrl2={item.imageUrl2}
                  Name={item.author}
                  date={item.date}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoundedSVGComponent;
