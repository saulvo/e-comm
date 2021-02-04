import { Box, Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import categoryApi from "../../../../api/categoryApi";
import productApi from "../../../../api/productApi";
import Loading from "../../../../components/Loading";
import Pagination from "../../components/Pagination";
import ProductFilterCat from "../../components/ProductFilterCat";
import ProductFilterLimit from "../../components/ProductFilterLimit";
import ProductFilterSort from "../../components/ProductFilterSort";
import ProductList from "../../components/ProductList";

function ProductListPage() {
	const [productList, setProductList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [filters, setFilters] = useState({
		_page: 1,
		_limit: 12,
		_sort: "createdAt",
		_order: "desc",
	});

	const [pagination, setPagination] = useState({
		_page: 1,
		_limit: 12,
		_totalRows: 1,
	});

	const [categoryId, setCategoryId] = useState("");
	const [categoryList, setCategoryList] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const res = await categoryApi.getAll();
				setCategoryList(res);
			} catch (error) {
				console.log("Fail to fetch category list:", error);
			}
		})();
	}, []);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const { data, pagination } = await productApi.getAll(filters);
				setProductList(data);
				setPagination(pagination);
			} catch (error) {
				console.log("Fail to fetch product list:", error);
			}
			setLoading(false);
		})();
	}, [filters]);

	const handleShowLimitChange = (limit) => {
		setFilters({
			...filters,
			_limit: limit,
			_page: 1,
		});
	};

	const handleSortChange = (sort) => {
		if (sort === "default") {
			setFilters({
				...filters,
				_sort: "createdAt",
				_page: 1,
			});
			return;
		}

		setFilters({
			...filters,
			_sort: sort,
			_page: 1,
		});
	};

	const handleCategoryClick = (catId) => {
		setFilters({
			...filters,
			categoryId: catId,
			_page: 1
		});
		setCategoryId(catId);
	};

	const handlePageChange = (newPage) => {
		console.log("New page: ", newPage);
		setFilters({
			...filters,
			_page: newPage,
		});
	};

	return (
		<Container fixed>
			<Grid container spacing={3}>
				<Grid item xs={12} md={3}>
					<ProductFilterCat
						list={categoryList}
						onClick={handleCategoryClick}
						categoryId={categoryId}
					/>
				</Grid>
				<Grid item xs={12} md={9}>
					<Box display="flex" justifyContent="space-between" maxWidth="335px">
						<ProductFilterSort
							onChange={handleSortChange}
							sorts={["default", "originalPrice", "productName"]}
							loading={loading}
						/>
						<ProductFilterLimit
							onChange={handleShowLimitChange}
							limits={[12, 16, 24]}
							loading={loading}
						/>
					</Box>
					<Box position="relative" mt={2}>
						{loading && <Loading />}
						<ProductList list={productList} />
					</Box>
					<Box pt={3} pb={5}>
						<Pagination
							pagination={pagination}
							onPageChange={handlePageChange}
						/>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}

export default ProductListPage;
