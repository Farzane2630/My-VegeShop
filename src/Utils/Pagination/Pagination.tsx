
import Pagination from "@mui/material/Pagination";
import "./_Pagination.scss"
import { productType } from "../../Types/types";

function CustomPagination(props: { items: productType[], itemsCount: number, pathname?: string, onPageChange: Function }) {
  const pageCount = Math.ceil(props.items.length / props.itemsCount);

  const handlePageChange = (_event: Event, page: number) => {
    props.onPageChange(page);
  };

  return (
    <div className="pagination-wrapper paigination-parent">
      <Pagination count={pageCount}
        onChange={(_event)=>handlePageChange}
        className="pagination" />
    </div>
  );
}

export default CustomPagination;
