import React from "react";
import { DataTable } from "react-native-paper";

const DataTableComp = ({
  data,
  columns,
  itemsPerPage,
  onPageChange,
  page,
  selectable,
  onRowPress,
}) => {
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, data.length);

  return (
    <DataTable>
      <DataTable.Header>
        {columns.map((column, index) => (
          <DataTable.Title
            key={index}
            numeric={column.numeric}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            {column.label}
          </DataTable.Title>
        ))}
      </DataTable.Header>

      {data.slice(from, to).map((item, index) => (
        <DataTable.Row
          key={index}
          onPress={() => onRowPress(item)} // Optional: Add row press handling
          style={
            selectable
              ? { backgroundColor: item.selected ? "lightblue" : "white" }
              : null
          }
        >
          {columns.map((column, columnIndex) => (
            <DataTable.Cell
              key={columnIndex}
              numeric={column.numeric}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item[column.accessor]}
            </DataTable.Cell>
          ))}
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(data.length / itemsPerPage)}
        onPageChange={onPageChange}
        label={`${from + 1}-${to} of ${data.length}`}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={(newItemsPerPage) =>
          onPageChange(0, newItemsPerPage)
        }
      />
    </DataTable>
  );
};

export default DataTableComp;
