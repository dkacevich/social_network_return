import styles from "../Users.module.scss";
import ReactPaginate from "react-paginate";

const Paginator = ({pageCount, setPageCount, totalCount}) => {
    const paginationTotal = Math.ceil(totalCount / 10)

    return <ReactPaginate
        breakLabel="..."
        nextLabel="Next>"
        forcePage={pageCount - 1}
        onPageChange={(e) => setPageCount(e.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={paginationTotal}
        previousLabel="Prev"
        previousClassName='btn'
        nextClassName='btn'
        renderOnZeroPageCount={null}
        className={styles.items}
        activeClassName={styles.active}
        pageClassName={styles.item}

    />
}

export default Paginator