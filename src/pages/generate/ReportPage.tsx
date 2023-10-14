import useStore from "@/lib/store";
import { usePagination } from "@mantine/hooks";

import "./style.css";
import { useState } from "react";

const ITEM_PER_PAGE = 10;

export default function ReportPage() {
  const { acedamicDetail, schoolDetails, studentData, header } = useStore();

  const [items, setItems] = useState(studentData.slice(0, ITEM_PER_PAGE));

  const { range, setPage, active, next, previous } = usePagination({
    initialPage: 1,
    total: Math.ceil(studentData.length / ITEM_PER_PAGE),
    onChange: (page) => {
      const start = (page - 1) * ITEM_PER_PAGE;
      const end = start + ITEM_PER_PAGE;
      setItems(studentData.slice(start, end));
    },
  });

  console.log(range);

  return (
    <>
      <section className="p-3 sm:p-5">
        <div className="max-w-screen-xl px-4 mx-auto lg:px-12">
          <div className="relative overflow-hidden shadow-md dark:bg-gray-800 sm:rounded-lg">
            {/* top header */}
            <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
              <div className="inline-flex flex-col items-start justify-start gap-1">
                <div className="dark:text-white text-base font-semibold font-['Inter'] leading-normal">
                  {schoolDetails.schoolname.trim()}
                </div>
                <div className="inline-flex items-center self-stretch justify-start">
                  <div className="inline-flex flex-col items-start justify-start">
                    <div className="text-gray-400 text-sm font-normal font-['Inter'] leading-tight flex items-center space-x-1">
                      <div>
                        <svg
                          className="text-gray-400 w-3 h-3 font-normal font-['Inter'] leading-tight"
                          viewBox="-4 0 32 32"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          fill="currentColor"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <title>location</title>{" "}
                            <desc>Created with Sketch Beta.</desc>{" "}
                            <defs> </defs>{" "}
                            <g
                              id="Page-1"
                              stroke="none"
                              strokeWidth="1"
                              fill="currentColor"
                              fillRule="evenodd"
                            >
                              {" "}
                              <g
                                id="Icon-Set-Filled"
                                transform="translate(-106.000000, -413.000000)"
                                fill="currentColor"
                              >
                                {" "}
                                <path
                                  d="M118,422 C116.343,422 115,423.343 115,425 C115,426.657 116.343,428 118,428 C119.657,428 121,426.657 121,425 C121,423.343 119.657,422 118,422 L118,422 Z M118,430 C115.239,430 113,427.762 113,425 C113,422.238 115.239,420 118,420 C120.761,420 123,422.238 123,425 C123,427.762 120.761,430 118,430 L118,430 Z M118,413 C111.373,413 106,418.373 106,425 C106,430.018 116.005,445.011 118,445 C119.964,445.011 130,429.95 130,425 C130,418.373 124.627,413 118,413 L118,413 Z"
                                  id="location"
                                >
                                  {" "}
                                </path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </div>
                      <div style={{ textTransform: "capitalize" }}>
                        {schoolDetails.SchoolAddress.trim()}
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm font-normal font-['Inter'] leading-tight flex items-center space-x-1">
                      <div>
                        <svg
                          className="text-gray-400 w-3 h-3 font-normal font-['Inter'] leading-tight"
                          fill="currentColor"
                          viewBox="0 0 1920 1920"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                              fillRule="evenodd"
                            ></path>{" "}
                          </g>
                        </svg>
                      </div>
                      <div style={{ textTransform: "capitalize" }}>
                        {schoolDetails.SchoolEmail.trim()}
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm font-normal font-['Inter'] leading-tight flex items-center space-x-1">
                      <div>
                        <svg
                          className="text-gray-400 w-3 h-3 font-normal font-['Inter'] leading-tight"
                          version="1.1"
                          id="_x32_"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 512 512"
                          xmlSpace="preserve"
                          fill="currentColor"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <style type="text/css"> </style>{" "}
                            <g>
                              {" "}
                              <path
                                fill="currentColor"
                                d="M337.469,206.488v-79.735l-42.812,7.654v32.814H217.34v-32.814l-42.809-7.654v79.735h-50.883L65.566,333.609 v25.135v18.062v53.512v7.096v10.341c0,10.862,8.016,19.668,17.898,19.668h345.066c9.887,0,17.902-8.806,17.902-19.668v-10.341 v-7.096v-53.512v-18.062v-25.135l-58.82-127.121H337.469z M256,410.493c-39.942,0-72.32-32.38-72.32-72.322 c0-39.942,32.379-72.322,72.32-72.322s72.32,32.38,72.32,72.322C328.32,378.113,295.942,410.493,256,410.493z"
                              ></path>{" "}
                              <path
                                fill="currentColor"
                                d="M434.02,70.476c-38.508-16.331-123.258-25.9-178.02-25.9c-53.02,0-139.512,9.568-178.02,25.9 C39.016,87,0,123.985,0,167.556c0,23.89,11.906,38.075,14.754,41.373c0,0,16.304,0,20.652,0h24.308c13.367,0,29.328,0,37.938,0 c4.934,0,15.734-21.419,15.734-30.166c0-15.386-8.148-36.78-8.148-36.78c0.469-10.588,4.676-18.324,21.918-25.736 c31.262-13.438,100.019-14.041,128.844-14.041c28.824,0,97.582,0.604,128.844,14.041c17.242,7.412,21.449,15.148,21.918,25.736 c0,0-8.148,21.394-8.148,36.78c0,8.747,10.801,30.166,15.734,30.166c8.606,0,24.566,0,37.938,0h24.308c4.348,0,20.652,0,20.652,0 c2.848-3.298,14.754-17.484,14.754-41.373C512,123.985,472.984,87,434.02,70.476z"
                              ></path>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </div>
                      <div style={{ textTransform: "capitalize" }}>
                        {schoolDetails.SchoolPhone.trim()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start justify-start pl-4">
                <div className="inline-flex items-center justify-start">
                  <div className="inline-flex flex-col items-start justify-start gap-1">
                    <button
                      type="button"
                      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-500 focus:outline-none  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Edit school Info
                    </button>
                  </div>
                  <div className="inline-flex flex-col items-start justify-start pl-6">
                    {" "}
                    <button
                      type="button"
                      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-500 focus:outline-none  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Edit Acedamic Info
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mx-4 my-0 border-gray-700 dark:border-gray-100" />
            {/* top actions */}
            <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full search">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="w-full p-2 pl-48 text-sm text-gray-900 border border-gray-300 rounded-lg form-control bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Search"
                    />

                    <button
                      className="h-full px-3 btn btn-primary"
                      type="button"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg dark:text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  <svg
                    className="h-3.5 w-3.5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    />
                  </svg>
                  Add
                </button>
                <div className="flex items-center w-full space-x-3 md:w-auto">
                  <button
                    id="actionsDropdownButton"
                    data-dropdown-toggle="actionsDropdown"
                    className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    type="button"
                  >
                    <svg
                      className="-ml-1 mr-1.5 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      />
                    </svg>
                    Actions
                  </button>
                  <div
                    id="actionsDropdown"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="actionsDropdownButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Mass Edit
                        </a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Delete all
                      </a>
                    </div>
                  </div>
                  <button
                    id="filterDropdownButton"
                    data-dropdown-toggle="filterDropdown"
                    className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    type="button"
                  >
                    <svg
                      className="w-5 h-5 mr-2 -ml-1"
                      fill="currentColor"
                      viewBox="0 0 35 35"
                      data-name="Layer 2"
                      id="b7babb3a-07a5-4f0e-b9ad-475301dbdd9c"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M17.5,23.1a1.25,1.25,0,0,1-1.25-1.25V3.154a1.25,1.25,0,0,1,2.5,0V21.848A1.25,1.25,0,0,1,17.5,23.1Z"></path>
                        <path d="M9.371,11.163a1.251,1.251,0,0,1-.884-2.134l6.751-6.751a3.2,3.2,0,0,1,4.524,0l6.752,6.751A1.25,1.25,0,0,1,24.746,10.8L18,4.046a.7.7,0,0,0-.99,0L10.254,10.8A1.243,1.243,0,0,1,9.371,11.163Z"></path>
                        <path d="M31.436,34.466H3.564A3.317,3.317,0,0,1,.25,31.153V22.415a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.813H31.436a.815.815,0,0,0,.814-.813V22.415a1.25,1.25,0,0,1,2.5,0v8.738A3.317,3.317,0,0,1,31.436,34.466Z"></path>
                      </g>
                    </svg>
                    Export Mark Sheet as PDF (All)
                  </button>
                  <div
                    id="filterDropdown"
                    className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
                  >
                    <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                      Choose brand
                    </h6>
                    <ul
                      className="space-y-2 text-sm"
                      aria-labelledby="filterDropdownButton"
                    >
                      <li className="flex items-center">
                        <input
                          id="apple"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="apple"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          Apple (56)
                        </label>
                      </li>
                      <li className="flex items-center">
                        <input
                          id="fitbit"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="fitbit"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          Microsoft (16)
                        </label>
                      </li>
                      <li className="flex items-center">
                        <input
                          id="razor"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="razor"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          Razor (49)
                        </label>
                      </li>
                      <li className="flex items-center">
                        <input
                          id="nikon"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="nikon"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          Nikon (12)
                        </label>
                      </li>
                      <li className="flex items-center">
                        <input
                          id="benq"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="benq"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          BenQ (74)
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* body table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                {/* table header */}
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {/* <th scope="col" className="px-4 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Brand
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Description
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Price
                    </th> */}
                    {header.map((item) => {
                      return (
                        item && (
                          <th scope="col" className="px-4 py-3 " key={item}>
                            <div className="flex justify-center w-full">
                              {item}
                            </div>
                          </th>
                        )
                      );
                    })}

                    <th scope="col" className="px-4 py-3">
                      <span className="flex justify-center w-full sr-only">
                        Actions
                      </span>
                    </th>
                  </tr>
                </thead>
                {/* table body */}
                <tbody>
                  {items.map((item, index) => {
                    return (
                      <tr
                        className="border-b dark:border-gray-700"
                        key={item.index}
                      >
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                        >
                          <div className="flex justify-center w-full">
                            {item.name}
                          </div>
                        </th>
                        <td className="px-4 py-3">
                          <div className="flex justify-center w-full">
                            {item.index}
                          </div>
                        </td>
                        {item.subjects.map((subject) => {
                          return (
                            <td className="px-4 py-3" key={Math.random()}>
                              <div className="flex justify-center w-full">
                                {Object.values(subject)}
                              </div>
                            </td>
                          );
                        })}

                        <td className="px-4 py-3">
                          <div className="flex justify-center w-full">
                            {item.totalMark}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex justify-center w-full">
                            {item.avarage}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex justify-center w-full">
                            {item.rank}
                          </div>
                        </td>

                        <td className="flex items-center justify-end px-4 py-3">
                          <div className="flex justify-center w-full">
                            <button
                              id="apple-imac-27-dropdown-button"
                              data-dropdown-toggle="apple-imac-27-dropdown"
                              className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                              type="button"
                            >
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                              </svg>
                            </button>
                            <div
                              id="apple-imac-27-dropdown"
                              className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                            >
                              <ul
                                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="apple-imac-27-dropdown-button"
                              >
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Show
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Edit
                                  </a>
                                </li>
                              </ul>
                              <div className="py-1">
                                <a
                                  href="#"
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* table footer */}
            <nav
              className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
              aria-label="Table navigation"
            >
              <span className="space-x-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing
                <span className="space-x-1 font-semibold text-gray-900 dark:text-white">
                  {active === 1 ? 1 : (active - 1) * ITEM_PER_PAGE}-
                  {active * ITEM_PER_PAGE > studentData.length
                    ? active * ITEM_PER_PAGE -
                      (active * ITEM_PER_PAGE - studentData.length)
                    : active * ITEM_PER_PAGE}
                </span>
                of
                <span className="font-semibold text-gray-900 dark:text-white ">
                  {studentData.length}
                </span>
              </span>
              <ul className="inline-flex items-stretch space-x-1">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-primary-50 rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={previous}
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                {range.map((item, index) => {
                  return (
                    <li key={Math.random()}>
                      {typeof item === "number" ? (
                        <a
                          href="#"
                          className={` no-underline flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 hover:bg-gray-100 hover:text-gray-700 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white  dark:hover:bg-gray-800 dark:hover:text-white 
                        ${
                          item === active
                            ? "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-white"
                            : ""
                        }
                        `}
                          onClick={() =>
                            typeof item === "number" ? setPage(item) : null
                          }
                        >
                          {item}
                        </a>
                      ) : (
                        <span className="mx-2">....</span>
                      )}
                    </li>
                  );
                })}

                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500  rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={next}
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
