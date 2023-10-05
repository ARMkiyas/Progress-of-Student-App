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
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
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
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    />
                  </svg>
                  Add product
                </button>
                <div className="flex items-center w-full space-x-3 md:w-auto">
                  <button
                    id="actionsDropdownButton"
                    data-dropdown-toggle="actionsDropdown"
                    className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
                        clip-rule="evenodd"
                        fill-rule="evenodd"
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
                    className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-4 h-4 mr-2 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Filter
                    <svg
                      className="-mr-1 ml-1.5 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      />
                    </svg>
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
                      <tr className="border-b dark:border-gray-700" key={index}>
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
                        {item.subjects.map((subject, index) => {
                          return (
                            <td className="px-4 py-3" key={index}>
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
                        <td className="px-4 py-3" key={index}>
                          <div className="flex justify-center w-full">
                            {item.avarage}
                          </div>
                        </td>
                        <td className="px-4 py-3" key={index}>
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
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                {range.map((item, index) => {
                  return (
                    <li key={index}>
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
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
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
