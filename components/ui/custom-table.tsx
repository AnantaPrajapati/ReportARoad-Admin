export default function CustomTable(props: any) {
  const { headers, tableData } = props;
  const keys = Object.keys(tableData[0]);

  return (
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
        {tableData?.map((data: any, index: number) => (
          <tr
            key={index}
            className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
          >
            {keys?.map((ky) => (
              <td key={ky} className="px-6 py-4 whitespace-nowrap">
                {data[ky]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
