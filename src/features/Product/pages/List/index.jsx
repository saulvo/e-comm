import { Box, Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import productApi from "../../../../api/productApi";
import Loading from "../../../../components/Loading";
import ProductFilterCat from "../../components/ProductFilterCat";
import ProductFilterLimit from "../../components/ProductFilterLimit";
import ProductFilterSort from "../../components/ProductFilterSort";
import ProductList from "../../components/ProductList";

function ProductListPage(props) {
	const [productList, setProductList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [filters, setFilters] = useState({
		_page: 1,
		_limit: 12,
		_sort: "createdAt",
		_order: "desc",
		// _categoryId: "",
	});
	const [categoryId, setCategoryId] = useState("");

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const { data } = await productApi.getAll(filters);
				setProductList(data);
			} catch (error) {
				console.log("Fail to fetch product list:", error);
			}
			setLoading(false);
		})();
	}, [filters]);

	const handleShowLimitChange = (limit) => {
		setFilters((x) => ({
			...x,
			_limit: limit,
		}));
	};
	const handleSortChange = (sort) => {
		if (sort === "default") {
			setFilters((x) => ({
				...x,
				_sort: "createdAt",
			}));
			return;
		}

		setFilters((x) => ({
			...x,
			_sort: sort,
		}));
	};

	const handleCategoryClick = (catId) => {
		setCategoryId(catId);
	};

	return (
		<>
			<Container fixed>
				<Grid container spacing={3}>
					<Grid item xs={12} md={3}>
						<ProductFilterCat
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
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default ProductListPage;
