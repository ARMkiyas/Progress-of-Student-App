import useStore from "@/lib/state/store";
import { TStudentData } from "@/lib/types";

type TableDataProps = {
  TableData: TStudentData;
  TableHeader: Array<string>;
  editfun: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  deletefun: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

export default function DataTable({
  TableData,
  TableHeader,
  editfun,
  deletefun,
}) {
  const { deleteStudentData } = useStore();

  return (
    <>
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
            {TableHeader.map((item) => {
              return (
                item && (
                  <th scope="col" className="px-4 py-3 " key={item}>
                    <div className="flex justify-center w-full">{item}</div>
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
          {TableData.map((item, index) => {
            return (
              <tr
                className="relative border-b dark:border-gray-700"
                key={item.index}
              >
                <th
                  scope="row"
                  className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                >
                  <div className="flex justify-center w-full">{item.name}</div>
                </th>
                <td className="px-4 py-3">
                  <div className="flex justify-center w-full">{item.index}</div>
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
                  <div className="flex justify-center w-full">{item.total}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-center w-full">
                    {item.avarage}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-center w-full">{item.rank}</div>
                </td>

                <td className="flex items-center justify-end px-4 py-3">
                  <div className="flex justify-center w-full">
                    <button
                      className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100 "
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      id={item.index}
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
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200 dropdown-menu"
                      style={{ minWidth: "auto" }}
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          id={item.index}
                          onClick={editfun}
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          className=" dropdown-item"
                          href="#"
                          id={item.index}
                          onClick={deletefun}
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
