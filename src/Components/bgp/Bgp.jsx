import React from "react";
import BlogMain from "../constant/BlogMain";
import CourseCard from "../constant/CourseCard";
import Bgpcard from "../constant/Bgpcard";

const Bgp = () => {
  return (
    <div>
      <div className="w-full flex flex-row items-center justify-center">
        <div className="mt-[1vh]">
         
          
              <svg
                fill="#000000"
                width="100px"
                height="100px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>network</title>
                <path d="M27 22.25c-0.831 0.002-1.598 0.277-2.215 0.739l0.010-0.007-3.299-2.998c0.82-1.097 1.313-2.479 1.313-3.977 0-1.614-0.572-3.094-1.525-4.249l0.009 0.011 3.644-3.643c0.584 0.391 1.302 0.624 2.074 0.624 2.077 0 3.76-1.683 3.76-3.76s-1.683-3.76-3.76-3.76c-2.077 0-3.76 1.683-3.76 3.76 0 0.773 0.233 1.491 0.633 2.088l-0.009-0.014-3.643 3.643c-1.145-0.944-2.627-1.517-4.244-1.517-0.937 0-1.828 0.192-2.638 0.54l0.044-0.017-1.032-1.874c0.791-0.688 1.288-1.695 1.288-2.819 0-2.060-1.67-3.729-3.729-3.729s-3.729 1.67-3.729 3.729c0 2.060 1.67 3.729 3.729 3.729 0.007 0 0.015-0 0.022-0h-0.001c0.398-0.006 0.778-0.073 1.133-0.194l-0.026 0.008 1.037 1.883c-1.757 1.243-2.89 3.265-2.894 5.553v0.001c0.010 0.697 0.125 1.364 0.33 1.99l-0.013-0.047-1.423 0.603c-0.681-0.971-1.795-1.597-3.056-1.597-2.056 0-3.722 1.666-3.722 3.722s1.666 3.722 3.722 3.722c2.056 0 3.722-1.666 3.722-3.722 0-0.264-0.027-0.521-0.079-0.769l0.004 0.024 1.419-0.602c1.167 2.093 3.367 3.485 5.892 3.485 1.73 0 3.308-0.654 4.5-1.728l-0.006 0.005 3.309 3.007c-0.335 0.544-0.535 1.201-0.539 1.906v0.001c0 2.071 1.679 3.75 3.75 3.75s3.75-1.679 3.75-3.75c0-2.071-1.679-3.75-3.75-3.75v0zM7.69 5c0-1.243 1.007-2.25 2.25-2.25s2.25 1.007 2.25 2.25c0 1.243-1.007 2.25-2.25 2.25v0c-1.242-0.002-2.248-1.008-2.25-2.25v-0zM5 22.92c-1.242-0.001-2.248-1.007-2.248-2.249s1.007-2.249 2.249-2.249c1.242 0 2.248 1.006 2.249 2.248v0c-0.002 1.242-1.008 2.248-2.25 2.25h-0zM27 2.75c1.243 0 2.25 1.007 2.25 2.25s-1.007 2.25-2.25 2.25c-1.243 0-2.25-1.007-2.25-2.25v0c0.002-1.242 1.008-2.248 2.25-2.25h0zM10.69 16c0-0 0-0 0-0.001 0-2.932 2.377-5.309 5.309-5.309s5.309 2.377 5.309 5.309c0 2.932-2.377 5.309-5.309 5.309h-0c-2.931-0.003-5.306-2.378-5.31-5.308v-0zM27 28.25c-1.243 0-2.25-1.007-2.25-2.25s1.007-2.25 2.25-2.25c1.243 0 2.25 1.007 2.25 2.25v0c-0.002 1.242-1.008 2.248-2.25 2.25h-0z">

                </path>
              </svg>
            
          
        </div>

        <div className="flex flex-col items-center mt-[4vh] ">
          <h5 className="sm:w-[22vw] am:font-bold  sm:text-3xl text-2xl ml-6">
            BGP
          </h5>
          <p className="sm:w-[22vw] sm:text-[1vw] w-[28vw]  text-[2vw]  mb-4  mt-4 ">
          My goal is to make BGP easy to understand by using simple examples that everyone can understand and follow.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-[3vw] w-full h-full flex-row justify-around mt-6">
          <div>
            <a href="/link/to/second/blog">
              <Bgpcard
                imageUrl="\images\bgp-1.png"
                paragraph="- BGP"
                heading="BGP Introduction (I)"
                date="Apr 14, 2024"
              />
            </a>
          </div>
          <div>
            <a href="/link/to/second/blog">
              <Bgpcard
                imageUrl="\images\bgp-2.png"
                paragraph="- PYTHON"
                heading="Nornir Network Automation"
                imageUrl2="/images/blog-avatar--1-.png"
                date="Apr 14, 2024"
              />
            </a>
          </div>
          <div>
            <a href="/link/to/second/blog">
              <Bgpcard
                imageUrl="\images\bgp-3--1-.png"
                paragraph="- NETDEVOPS"
                heading="Getting Started With Juniper PyEZ Library"
                imageUrl2="/images/blog-avatar--1-.png"
                date="Apr 14, 2024"
              />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-[3vw] w-full h-full flex-row justify-around mt-6">
          <div>
            <a href="/link/to/second/blog">
              <Bgpcard
                imageUrl="\images\bgp-1.png"
                paragraph="- BGP"
                heading="BGP Introduction (I)"
                date="Apr 14, 2024"
              />
            </a>
          </div>
          <div>
            <a href="/link/to/second/blog">
              <Bgpcard
                imageUrl="\images\bgp-2.png"
                paragraph="- PYTHON"
                heading="Nornir Network Automation"
                imageUrl2="/images/blog-avatar--1-.png"
                date="Apr 14, 2024"
              />
            </a>
          </div>
          <div>
            <a href="/link/to/second/blog">
              <Bgpcard
                imageUrl="\images\bgp-3--1-.png"
                paragraph="- NETDEVOPS"
                heading="Getting Started With Juniper PyEZ Library"
                imageUrl2="/images/blog-avatar--1-.png"
                date="Apr 14, 2024"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bgp;
