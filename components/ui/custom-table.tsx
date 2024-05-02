import Image from "next/image";
import { useState } from "react";


export default function CustomTable(props: any) {
  const { headers, tableData } = props;
  const keys = Object.keys(tableData[0]);
  const [data, setData] = useState(tableData);
  const [editData, setEditData] = useState({});
  const [isModal, setIsModal] = useState(false);

  // const adminAction = [
  //   { title : 'edit',
  //     source : '/icons/edit-interface-icon-svgrepo-com.svg',
  //     action : (uuid:any) => handleEdit(uuid),
  //   },
  //   { title : 'delete',
  //     source : '/icons/delete-right-svgrepo-com.svg'
  //   },
  // ];

  // const handleEdit = (uuid: any) => {
  //   setEditData(data.find((element: any) => element.uuid === uuid));
  //   setIsModal(true);
  // };
  return (
    <>
      <table className="min-w-full divide-y divide-gray-200 border-2 border-r-5">
        <thead className="bg-gray-50">
          <tr>
            {headers?.map((header: any) => (
              <th
                key={header.field}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {data?.map((data: any, index: number) => (
            <tr
              key={data?.uuid}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              {keys?.map((ky) => (
                <td key={ky} className="px-6 py-4 whitespace-nowrap">
                  {data[ky]}
                </td>
              ))}
              <td>
                <span>
                  <Image
                    src="/icons/edit-interface-icon-svgrepo-com.svg"
                    width={20}
                    height={20}
                    alt="edit icon"
                    id="my_modal_1"
                  />
                </span>{" "}
                <span>
                  {" "}
                  <Image
                    src="/icons/delete-right-svgrepo-com.svg"
                    width={20}
                    height={20}
                    alt="delete icon"
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
