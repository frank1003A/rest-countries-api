"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import React, { useEffect, useState } from "react";

interface SimpleGridProps extends React.ComponentPropsWithoutRef<"div"> {
  /** column number */
  column: number;
  /** row number */
  row: number;
  rowGap?: number;
  columnGap?: number;
}

const SimpleGrid = ({
  column,
  row,
  columnGap,
  rowGap,
  children,
}: SimpleGridProps) => {
  const [gridItems, setGridItems] = useState<Array<any>>([]);

  const media = useMediaQuery("sm")

  useEffect(() => {
    const calculateGridItems = () => {
      const totalItems = React.Children.count(children);
      const itemsPerRow = Math.ceil(totalItems / row);
      const itemsInLastRow = totalItems % row;

      const gridItemsArr = React.Children.map(children, (child, index) => {
        const gridColumn = Math.floor(index / row);
        const gridRow = index % row;

        let gridColumnSpan = 1;
        let gridRowSpan = 1;

        if (gridRow === row - 1 && itemsInLastRow > 0) {
          gridColumnSpan = itemsInLastRow;
        } else if (gridRow >= itemsInLastRow) {
          gridColumnSpan = itemsPerRow;
        }

        if (itemsPerRow === 1) {
          gridRowSpan = row;
        }

        return {
          child,
          gridColumn,
          gridColumnSpan,
          gridRow,
          gridRowSpan,
        };
      });

      if (gridItemsArr !== undefined && gridItemsArr !== null) {
        setGridItems(gridItemsArr);
      }
    };

    calculateGridItems();
  }, [column, row, children]);

  return (
    <div
      style={{
        display: media ? "flex": "grid",
        gridTemplateColumns: `repeat(${column}, 1fr)`,
        gridTemplateRows: `repeat(${row}, 1fr)`,
        columnGap: columnGap,
        rowGap: rowGap,
        justifyItems: media ? "flex-start" : "flex-start",
        flexDirection: media ? "column" : undefined
      }}
    >
      {gridItems.map((item, index) => (
        <div
          key={index}
          style={{
            gridColumn: `${item.gridColumn + 1} / span ${item.gridColumnSpan}`,
            gridRow: `${item.gridRow + 1} / span ${item.gridRowSpan}`,
          }}
        >
          {item.child}
        </div>
      ))}
    </div>
  );
};

export default SimpleGrid;
