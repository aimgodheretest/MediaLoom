import React from "react";

const Faq = () => {
  return (
    <div className="bg-[linear-gradient(to_top_right,_rgba(231,234,238,1)_0%,_rgba(222,222,222,1)_50%,_rgba(238,224,240,1)_100%)] py-24">
      <div className="max-w-2xl mx-auto ">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-center my-20">
            Frequently Asked Questions?
          </h1>
          <details
            className="group [&amp;_summary::-webkit-details-marker]:hidden "
            open=""
          >
            <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
              <h2 className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>

              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </summary>

            <p className="px-4 pt-4 text-gray-900">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>

          <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
              <h2 className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>

              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </summary>

            <p className="px-4 pt-4 text-gray-900">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>

          <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
              <h2 className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>

              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </summary>

            <p className="px-4 pt-4 text-gray-900">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Faq;
