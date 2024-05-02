import React from "react";
import Bgpcard from "../constant/Bgpcard";

const Docker = () => {
  return (
    <div>
      <div className="w-full flex flex-row items-center justify-center">
        <div className="mt-[1vh]">
          {
            <svg
              height="120"
              viewBox="-.557 117.607 598.543 423.631"
              width="120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#0091e2">
                <path d="m592.162 277.804c-1.664-1.37-16.642-12.597-48.815-12.597-8.321 0-16.92.822-25.24 2.191-6.102-41.898-41.327-62.162-42.714-63.257l-8.598-4.93-5.547 7.942c-6.934 10.68-12.204 22.729-15.255 35.052-5.824 23.824-2.219 46.279 9.985 65.447-14.7 8.216-38.553 10.133-43.545 10.406h-393.853c-10.262 0-18.583 8.216-18.583 18.348-.554 33.956 5.27 67.912 17.197 99.951 13.59 35.052 33.838 61.067 59.91 76.95 29.4 17.799 77.383 27.931 131.468 27.931 24.408 0 48.815-2.19 72.946-6.572 33.56-6.025 65.734-17.526 95.412-34.23a260.485 260.485 0 0 0 64.902-52.577c31.342-34.778 49.925-73.663 63.515-108.167h5.547c34.116 0 55.195-13.418 66.844-24.92 7.766-7.12 13.59-15.882 17.751-25.74l2.497-7.12z" />
                <path d="m55.193 306.83h52.698c2.497 0 4.716-1.916 4.716-4.654v-46.553c0-2.465-1.942-4.655-4.716-4.655h-52.698c-2.496 0-4.715 1.916-4.715 4.655v46.553c.277 2.738 2.219 4.655 4.715 4.655zm72.668 0h52.699c2.496 0 4.715-1.916 4.715-4.654v-46.553c0-2.465-1.942-4.655-4.715-4.655h-52.7c-2.496 0-4.715 1.916-4.715 4.655v46.553c.278 2.738 2.22 4.655 4.715 4.655m74.055 0h52.699c2.496 0 4.715-1.917 4.715-4.655v-46.553c0-2.465-1.942-4.655-4.715-4.655h-52.699c-2.496 0-4.715 1.916-4.715 4.655v46.553c0 2.738 1.942 4.655 4.715 4.655zm72.946 0h52.699c2.496 0 4.715-1.917 4.715-4.655v-46.553c0-2.465-1.942-4.655-4.715-4.655h-52.699c-2.496 0-4.715 1.916-4.715 4.655v46.553c0 2.738 2.219 4.655 4.715 4.655zm-147-66.543h52.698c2.496 0 4.715-2.19 4.715-4.655v-46.553c0-2.465-1.942-4.656-4.715-4.656h-52.699c-2.496 0-4.715 1.917-4.715 4.656v46.553c.278 2.464 2.22 4.655 4.715 4.655m74.055 0h52.699c2.496 0 4.715-2.19 4.715-4.655v-46.553c0-2.465-1.942-4.656-4.715-4.656h-52.699c-2.496 0-4.715 1.917-4.715 4.656v46.553c0 2.464 1.942 4.655 4.715 4.655m72.946 0h52.699c2.496 0 4.715-2.19 4.715-4.655v-46.553c0-2.465-2.22-4.656-4.715-4.656h-52.699c-2.496 0-4.715 1.917-4.715 4.656v46.553c0 2.464 2.219 4.655 4.715 4.655m0-66.817h52.699c2.496 0 4.715-1.917 4.715-4.655v-46.553c0-2.465-2.22-4.656-4.715-4.656h-52.699c-2.496 0-4.715 1.917-4.715 4.656v46.553c0 2.464 2.219 4.655 4.715 4.655m73.5 133.36h52.699c2.496 0 4.715-1.917 4.715-4.655v-46.553c0-2.465-1.941-4.655-4.715-4.655h-52.698c-2.497 0-4.716 1.916-4.716 4.655v46.553c.278 2.738 2.22 4.655 4.716 4.655" />
              </g>
            </svg>
          }
        </div>

        <div className="flex flex-col items-center mt-[4vh] ">
          <h5 className="sm:w-[22vw] am:font-bold  sm:text-3xl text-2xl ml-6">
            DOCKER
          </h5>
          <p className="sm:w-[22vw] sm:text-[1vw] w-[28vw]  text-[2vw]  mb-4  mt-4 ">
            Gentle introduction to Docker and what problems does it solve for
            you. This course is specifically designed for complete beginners.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-[3vw] w-full h-full flex-row justify-around mt-6">
          <div>
            <a href="/link/to/second/blog">
              <Bgpcard
                imageUrl="\images\docker-1.png"
                paragraph="- BGP"
                heading="BGP Introduction (I)"
                date="Apr 14, 2024"
              />
            </a>
          </div>
          <div>
            <a href="/link/to/second/blog">
              <Bgpcard
                imageUrl="\images\docker-2.png"
                paragraph="- PYTHON"
                heading="Docker Series #1: Hello Docker"
                imageUrl2="/images/blog-avatar--1-.png"
                date="Apr 14, 2024"
              />
            </a>
          </div>
          <div>
            <a href="/link/to/second/blog">
              <Bgpcard
                imageUrl="\images\docker-lifecycle.png"
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
                imageUrl="\images\docker-1.png"
                paragraph="- BGP"
                heading="BGP Introduction (I)"
                date="Apr 14, 2024"
              />
            </a>
          </div>
          <div>
            <a href="/link/to/second/blog">
              <Bgpcard
                imageUrl="\images\docker-2.png"
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
                imageUrl="\images\docker-lifecycle.png"
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

export default Docker;
