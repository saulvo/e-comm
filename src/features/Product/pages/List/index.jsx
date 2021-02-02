import { Box, Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import productApi from "../../../../api/productApi";
import Loading from "../../../../components/Loading";
import ProductFilterLimit from "../../components/ProductFilterLimit";
import ProductFilterSort from "../../components/ProductFilterSort";
import ProductList from "../../components/ProductList";

function ProductListPage(props) {
	const [productList, setProductList] = useState([]);
	const [loading, setLoading] = useState(false);
	const defaultFilters = {
		_page: 1,
		_limit: 12,
		_sort: "createdAt",
		_order: "desc",
	};
	const [filters, setFilters] = useState(defaultFilters);

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
			setFilters(defaultFilters);
			return;
		}

		setFilters((x) => ({
			...x,
			_sort: sort,
		}));
	};

	return (
		<>
			<Container fixed>
				<Grid container spacing={3}>
					<Grid item xs={12} md={3}>
						Filters
					</Grid>
					<Grid item xs={12} md={9}>
						<Box
							display="flex"
							justifyContent="space-between"
							maxWidth="385px"
							mb={2}
						>
							<ProductFilterSort
								onChange={handleSortChange}
								sorts={["default", "originalPrice", "productName"]}
							/>
							<ProductFilterLimit
								onChange={handleShowLimitChange}
								limits={[12, 16, 24]}
							/>
						</Box>
						<Box position="relative">
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
